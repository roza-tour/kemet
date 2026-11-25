<?php
// ---------------------------------------------------------------------------
// Kemet — MCP server (Model Context Protocol), read-only.
//
//     https://kemet-travel.com/mcp        (rewritten to this file by .htaccess)
//
// WHAT IT IS FOR
// An assistant that is connected to this address (a ChatGPT app or connector,
// a Claude connector, any MCP client) can look up Kemet's journeys, prices and
// pages as data, in the traveller's language, without scraping HTML. It is
// the same information the site publishes — journeys.json, the search index
// and the Markdown copy of each page — behind the protocol assistants speak.
//
// WHAT IT DELIBERATELY CANNOT DO
// It writes nothing and sends nothing. There is no tool that submits an
// enquiry: `enquiry_link` hands back a WhatsApp link with the message already
// typed, and the traveller presses send. So there is no customer data here to
// leak, no mailbox an agent can flood, and no need for a login.
//
// HOW IT IS BUILT
//   · Streamable HTTP transport, stateless: one JSON-RPC request in, one JSON
//     response out. No sessions, no server-sent events (GET answers 405, as
//     the specification allows a server with nothing to push).
//   · Every tool reads files that are already public and sit beside this one.
//     A page is read only through `page_path()`, which accepts nothing but a
//     site page address and never leaves this folder.
//   · Compatible with PHP 7.4 and later; no extensions beyond json and
//     mbstring, both of which the contact form already relies on.
//
// The `search` and `fetch` tools follow the shape ChatGPT expects of a
// connector (search → {results:[{id,title,url}]}, fetch → {id,title,text,
// url,metadata}); the other tools are the ones a planning conversation uses.
// ---------------------------------------------------------------------------

const KEMET_SITE = "https://kemet-travel.com";
const KEMET_MCP_VERSION = "1.0.0";
const KEMET_PROTOCOLS = ["2025-11-25", "2025-06-18", "2025-03-26", "2024-11-05"];
const KEMET_LOCALES = ["en", "de", "fr", "it", "es", "ru", "id", "ms", "pt", "ar"];
const KEMET_MAX_BODY = 65536;

// Do not advertise the PHP version.
header_remove("X-Powered-By");
header("X-Content-Type-Options: nosniff");
header("Cache-Control: no-store");
// Public, read-only data: any origin may call it.
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Accept, Authorization, Mcp-Session-Id, MCP-Protocol-Version");
header("Access-Control-Max-Age: 86400");

$method = $_SERVER["REQUEST_METHOD"] ?? "GET";
if ($method === "OPTIONS") { http_response_code(204); exit; }
if ($method !== "POST") {
  // A person who opens the address in a browser gets an explanation, not a
  // blank 405.
  http_response_code(405);
  header("Allow: POST, OPTIONS");
  header("Content-Type: application/json; charset=utf-8");
  echo json_encode([
    "name" => "Kemet — private journeys in Egypt",
    "what" => "This is an MCP (Model Context Protocol) server for AI assistants. Add this address as a connector in an assistant that supports MCP; it is not a web page.",
    "endpoint" => KEMET_SITE . "/mcp",
    "transport" => "streamable-http (POST, JSON)",
    "tools" => array_map(function ($t) { return $t["name"]; }, kemet_tools()),
    "site" => KEMET_SITE . "/",
    "forAssistants" => KEMET_SITE . "/llms.txt",
  ], JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT);
  exit;
}

$raw = file_get_contents("php://input", false, null, 0, KEMET_MAX_BODY + 1);
if ($raw === false || strlen($raw) > KEMET_MAX_BODY) {
  respond(rpc_error(null, -32600, "Request too large"), 413);
}
$msg = json_decode($raw, true);
if (!is_array($msg)) respond(rpc_error(null, -32700, "Parse error"), 400);

// A batch (an array of requests) is answered as a batch; a single request as
// a single response. A message with no id is a notification: accepted, no body.
$is_batch = array_keys($msg) === range(0, count($msg) - 1) && count($msg) > 0;
$requests = $is_batch ? array_slice($msg, 0, 20) : [$msg];
$responses = [];
foreach ($requests as $req) {
  $res = handle($req);
  if ($res !== null) $responses[] = $res;
}
if (!$responses) { http_response_code(202); exit; }
respond($is_batch ? $responses : $responses[0], 200);

// ---------------------------------------------------------------------------

function respond($payload, int $status): void {
  http_response_code($status);
  header("Content-Type: application/json; charset=utf-8");
  echo json_encode($payload, JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE);
  exit;
}

function rpc_error($id, int $code, string $message): array {
  return ["jsonrpc" => "2.0", "id" => $id, "error" => ["code" => $code, "message" => $message]];
}

function handle($req): ?array {
  if (!is_array($req) || ($req["jsonrpc"] ?? "") !== "2.0" || !is_string($req["method"] ?? null)) {
    return rpc_error(is_array($req) ? ($req["id"] ?? null) : null, -32600, "Invalid request");
  }
  $has_id = array_key_exists("id", $req);
  $id = $req["id"] ?? null;
  $params = is_array($req["params"] ?? null) ? $req["params"] : [];
  $ok = function ($result) use ($id) { return ["jsonrpc" => "2.0", "id" => $id, "result" => $result]; };

  switch ($req["method"]) {
    case "initialize":
      $asked = is_string($params["protocolVersion"] ?? null) ? $params["protocolVersion"] : "";
      return $ok([
        "protocolVersion" => in_array($asked, KEMET_PROTOCOLS, true) ? $asked : KEMET_PROTOCOLS[1],
        "capabilities" => ["tools" => ["listChanged" => false]],
        "serverInfo" => [
          "name" => "kemet-travel",
          "title" => "Kemet — private journeys in Egypt",
          "version" => KEMET_MCP_VERSION,
        ],
        "instructions" => kemet_instructions(),
      ]);
    case "ping":
      return $ok(new stdClass());
    case "tools/list":
      return $ok(["tools" => kemet_tools()]);
    case "tools/call":
      $name = is_string($params["name"] ?? null) ? $params["name"] : "";
      $args = is_array($params["arguments"] ?? null) ? $params["arguments"] : [];
      $known = array_map(function ($t) { return $t["name"]; }, kemet_tools());
      if (!in_array($name, $known, true)) return rpc_error($id, -32602, "Unknown tool: " . substr($name, 0, 60));
      note_call($name);
      try {
        $out = call_tool($name, $args);
      } catch (InvalidArgumentException $e) {
        return $ok(["content" => [["type" => "text", "text" => $e->getMessage()]], "isError" => true]);
      } catch (Throwable $e) {
        return $ok(["content" => [["type" => "text", "text" => "The catalogue could not be read just now. The site itself is at " . KEMET_SITE . "/"]], "isError" => true]);
      }
      $result = ["content" => [["type" => "text", "text" => is_string($out) ? $out : json_encode($out, JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE)]]];
      if (is_array($out)) $result["structuredContent"] = $out;
      return $ok($result);
    case "resources/list":
      return $ok(["resources" => []]);
    case "prompts/list":
      return $ok(["prompts" => []]);
    default:
      // Notifications (initialized, cancelled, …) carry no id and get no reply.
      if (!$has_id) return null;
      return rpc_error($id, -32601, "Method not found");
  }
}

function kemet_instructions(): string {
  return
    "Kemet plans private journeys in Egypt: a licensed Egyptologist guide, a private vehicle and driver, " .
    "and a day-by-day itinerary with a written price. Use search_journeys to find journeys by length, place or budget, " .
    "get_journey for the full itinerary and inclusions, get_travel_updates for what has changed in Egypt this season, " .
    "and search / fetch for anything else on the site (destinations, month-by-month weather, comparisons, guides). " .
    "Prices are from-prices in euros per person and are the same in every language. A journey's priceFrom is for a private " .
    "party of six or more; priceForTwo is what each of two travellers pays. Quote the one that fits and link the page. " .
    "Programmes are priced on request and have no published price; do not invent one. " .
    "Pages exist in English, German, French, Italian, Spanish, Russian, Indonesian, Malay, Portuguese and Arabic: " .
    "pass the traveller's language and link the page in it. This server cannot book or send anything; " .
    "to enquire, give the traveller the link from enquiry_link.";
}

function kemet_tools(): array {
  $ro = ["readOnlyHint" => true, "destructiveHint" => false, "idempotentHint" => true, "openWorldHint" => false];
  $lang = ["type" => "string", "enum" => KEMET_LOCALES, "description" => "The traveller's language, as a two-letter code. Pages are linked in this language where one exists. Default: en."];
  return [
    [
      "name" => "search_journeys",
      "title" => "Find Kemet journeys",
      "description" => "Find Kemet's private Egypt journeys and day tours by free text, place, length or budget. Returns name, days, places, the from-price in EUR per person (for a party of six or more) and the price for two travellers, and the page link, named in the traveller's language where the journey has a page in it. Also returns matching programmes beyond the Nile (Siwa, Sinai, Red Sea islands, the deserts), which are priced on request. Call with no arguments to list the whole catalogue.",
      "inputSchema" => [
        "type" => "object",
        "properties" => [
          "query" => ["type" => "string", "description" => "Free text, e.g. 'nile cruise', 'honeymoon', 'day tour Giza'."],
          "place" => ["type" => "string", "description" => "A place the journey must include, e.g. Luxor, Aswan, Alexandria, Abu Simbel."],
          "min_days" => ["type" => "integer", "minimum" => 1, "description" => "Shortest acceptable length in days."],
          "max_days" => ["type" => "integer", "minimum" => 1, "description" => "Longest acceptable length in days."],
          "max_price_eur" => ["type" => "number", "minimum" => 0, "description" => "Upper limit for the from-price, in euros per person. Journeys priced on request are left out when this is set."],
          "language" => $lang,
        ],
        "additionalProperties" => false,
      ],
      "annotations" => $ro + ["title" => "Find Kemet journeys"],
    ],
    [
      "name" => "get_journey",
      "title" => "Journey details",
      "description" => "The full record of one journey or programme: day-by-day itinerary, what is included and not included, price basis and questions answered, as Markdown from the journey's own page. Use an id returned by search_journeys.",
      "inputSchema" => [
        "type" => "object",
        "properties" => [
          "id" => ["type" => "string", "description" => "Journey or programme id from search_journeys, e.g. 'tour-10-day'."],
          "language" => $lang,
        ],
        "required" => ["id"],
        "additionalProperties" => false,
      ],
      "annotations" => $ro + ["title" => "Journey details"],
    ],
    [
      "name" => "get_travel_updates",
      "title" => "Egypt travel updates",
      "description" => "What has changed for visitors to Egypt this season, each entry with the date it was last checked: museum tickets and opening hours, how tickets are paid, the Giza plateau entrance, hotel closures, and the dates ahead (Ramadan, the 2027 eclipse). Use it before answering 'is X open' or 'has X changed'. It does not cover visas: for entry rules, point the traveller to their nearest Egyptian consulate.",
      "inputSchema" => ["type" => "object", "properties" => new stdClass(), "additionalProperties" => false],
      "annotations" => $ro + ["title" => "Egypt travel updates"],
    ],
    [
      "name" => "enquiry_link",
      "title" => "Link to enquire",
      "description" => "Builds the links a traveller uses to contact Kemet: a WhatsApp link with the message already typed, the contact page and the email address. Nothing is sent by this tool; the traveller opens the link and sends the message themselves. Kemet replies with a day-by-day itinerary and a price within two hours.",
      "inputSchema" => [
        "type" => "object",
        "properties" => [
          "journey_id" => ["type" => "string", "description" => "Optional id of the journey the traveller is asking about."],
          "message" => ["type" => "string", "maxLength" => 600, "description" => "Optional message to pre-fill, in the traveller's own words: dates, party size, what they want. Do not include anything the traveller has not said."],
          "language" => $lang,
        ],
        "additionalProperties" => false,
      ],
      "annotations" => $ro + ["title" => "Link to enquire"],
    ],
    [
      "name" => "search",
      "title" => "Search the Kemet site",
      "description" => "Search every page of kemet-travel.com: journeys, destinations, experiences, month-by-month guides, comparisons, travel guides and practical pages, in ten languages. Returns matching pages with id, title and url. Follow with fetch to read one.",
      "inputSchema" => [
        "type" => "object",
        "properties" => [
          "query" => ["type" => "string", "description" => "Search words, in English or in the traveller's language."],
        ],
        "required" => ["query"],
        "additionalProperties" => false,
      ],
      "annotations" => $ro + ["title" => "Search the Kemet site"],
    ],
    [
      "name" => "fetch",
      "title" => "Read a Kemet page",
      "description" => "The full text of one page of kemet-travel.com as Markdown. Use an id or url returned by search, or any page address on the site.",
      "inputSchema" => [
        "type" => "object",
        "properties" => [
          "id" => ["type" => "string", "description" => "A page id from search (its path, e.g. 'destinations/luxor.html') or a full https://kemet-travel.com/… address."],
        ],
        "required" => ["id"],
        "additionalProperties" => false,
      ],
      "annotations" => $ro + ["title" => "Read a Kemet page"],
    ],
  ];
}

// --- the data ---------------------------------------------------------------

function read_json(string $file): array {
  $path = __DIR__ . "/" . $file;
  $data = is_readable($path) ? json_decode((string)file_get_contents($path), true) : null;
  if (!is_array($data)) throw new RuntimeException("missing " . $file);
  return $data;
}

/** Lower-case, and fold what a traveller would not type (accents are left alone: the index is not folded either). */
function lc(string $s): string { return function_exists("mb_strtolower") ? mb_strtolower($s, "UTF-8") : strtolower($s); }

function words(string $q): array {
  $q = lc(trim($q));
  $parts = preg_split('/[^\p{L}\p{N}]+/u', $q, -1, PREG_SPLIT_NO_EMPTY);
  if (!is_array($parts)) return [];
  // Short words match everything as substrings ("de" is inside half the
  // catalogue), and so do the joining words of every language the site is in:
  // "luna di miele" returned all 25 journeys on "di". Words of one or two
  // letters are dropped unless they are numbers ("10 days"), and so are these,
  // unless nothing else is left.
  $stop = [
    "the", "and", "for", "with", "from", "into", "our", "you", "your", "trip", "tour", "tours",
    "der", "die", "das", "und", "mit", "für", "von", "ein", "eine", "den", "dem", "des", "nach", "auf", "reise",
    "les", "des", "une", "pour", "avec", "sur", "dans", "voyage",
    "della", "delle", "dei", "per", "con", "una", "uno", "viaggio",
    "los", "las", "del", "una", "por", "para", "con", "viaje",
    "dos", "das", "uma", "com", "para", "pelo", "pela", "viagem",
    "для", "при", "или", "тур",
    "dan", "yang", "untuk", "dengan", "ke", "ini", "itu", "perjalanan",
    "dari", "bagi", "anda",
    "في", "من", "إلى", "مع", "على", "عن", "رحلة",
  ];
  $long = array_values(array_filter($parts, function ($w) use ($stop) {
    $n = function_exists("mb_strlen") ? mb_strlen($w, "UTF-8") : strlen($w);
    return ($n > 2 || ctype_digit($w)) && !in_array($w, $stop, true);
  }));
  return array_slice($long ?: $parts, 0, 12);
}

function arg_lang(array $args): string {
  $l = is_string($args["language"] ?? null) ? strtolower(substr($args["language"], 0, 2)) : "en";
  return in_array($l, KEMET_LOCALES, true) ? $l : "en";
}

function arg_text(array $args, string $key, int $max): string {
  $v = $args[$key] ?? "";
  if (!is_string($v)) return "";
  $v = trim(preg_replace('/[\x00-\x1F\x7F]+/u', " ", $v) ?? "");
  return function_exists("mb_substr") ? mb_substr($v, 0, $max, "UTF-8") : substr($v, 0, $max);
}

/**
 * A site page address → its path under this folder, or null.
 * Accepts "tours.html", "/de/", "https://kemet-travel.com/guides/x.html".
 * Rejects anything else, so no input can name a file that is not a page.
 */
function page_path(string $id): ?string {
  $id = trim($id);
  if (stripos($id, KEMET_SITE) === 0) $id = substr($id, strlen(KEMET_SITE));
  elseif (preg_match('#^https?://#i', $id)) return null;
  $id = preg_replace('/[?#].*$/', "", $id) ?? "";
  $id = ltrim($id, "/");
  if (substr($id, -3) === ".md") $id = substr($id, 0, -3);
  if ($id === "") $id = "index.html";
  elseif (substr($id, -1) === "/") $id .= "index.html";
  if (!preg_match('#^(?:[a-z0-9-]+/){0,3}[a-z0-9-]+\.html$#', $id)) return null;
  return $id;
}

function page_url(string $path): string {
  return KEMET_SITE . "/" . preg_replace('#(^|/)index\.html$#', '$1', $path);
}

/** The Markdown copy of a page, without its front matter. Null when there is none. */
function page_markdown(string $path): ?array {
  $file = __DIR__ . "/" . $path . ".md";
  if (!is_file($file) || !is_readable($file)) return null;
  $real = realpath($file);
  if ($real === false || strpos($real, realpath(__DIR__) . DIRECTORY_SEPARATOR) !== 0) return null;
  $md = (string)file_get_contents($file);
  $meta = ["title" => "", "language" => "en", "description" => ""];
  if (preg_match('/\A---\n(.*?)\n---\n\n?/s', $md, $m)) {
    foreach (explode("\n", $m[1]) as $line) {
      if (preg_match('/^(title|language|description):\s*(.*)$/', $line, $kv)) {
        $v = $kv[2];
        if (strlen($v) > 1 && $v[0] === '"') { $d = json_decode($v); if (is_string($d)) $v = $d; }
        $meta[$kv[1]] = $v;
      }
    }
    $md = substr($md, strlen($m[0]));
  }
  return ["text" => $md, "meta" => $meta];
}

// --- the tools --------------------------------------------------------------

function call_tool(string $name, array $args) {
  switch ($name) {
    case "search_journeys":    return tool_search_journeys($args);
    case "get_journey":        return tool_get_journey($args);
    case "get_travel_updates": return tool_fetch(["id" => "egypt-travel-updates.html"]);
    case "enquiry_link":       return tool_enquiry_link($args);
    case "search":             return tool_search($args);
    case "fetch":              return tool_fetch($args);
  }
  throw new InvalidArgumentException("Unknown tool");
}

function tool_search_journeys(array $args): array {
  $cat = read_json("journeys.json");
  $lang = arg_lang($args);
  $terms = words(arg_text($args, "query", 200));
  $phrase = count($terms) > 1 ? lc(trim(preg_replace('/\s+/u', " ", arg_text($args, "query", 200)))) : "";
  $place = lc(arg_text($args, "place", 60));
  $min = isset($args["min_days"]) && is_numeric($args["min_days"]) ? (int)$args["min_days"] : null;
  $max = isset($args["max_days"]) && is_numeric($args["max_days"]) ? (int)$args["max_days"] : null;
  $cap = isset($args["max_price_eur"]) && is_numeric($args["max_price_eur"]) ? (float)$args["max_price_eur"] : null;

  // A word matches at the start of a word, not anywhere inside one: "luna"
  // found "lungomare"-style fragments and "nil" any word containing it.
  // "pyramid" still finds "pyramids".
  $hit = function (string $hay) use ($terms): int {
    $n = 0;
    foreach ($terms as $t) if (preg_match('/(?<![\p{L}\p{N}])' . preg_quote($t, '/') . '/u', $hay)) $n++;
    return $n;
  };

  $journeys = [];
  foreach (($cat["journeys"] ?? []) as $j) {
    // journeys.json gives `days` for a journey of several days and leaves it
    // out for a day tour, which is one day — not none.
    $days = isset($j["days"]) ? (int)$j["days"] : 1;
    if ($min !== null && $days < $min) continue;
    if ($max !== null && $days > $max) continue;
    $price = $j["priceFrom"]["amount"] ?? null;
    if ($cap !== null && (!is_numeric($price) || $price > $cap)) continue;
    $places = lc(implode(" ", $j["places"] ?? []));
    // Searched in every language the journey has a page in: a German query
    // ("Nilkreuzfahrt") found nothing while only the English was searched.
    $localText = "";
    foreach ((array)($j["i18n"] ?? []) as $tr) {
      if (is_array($tr)) $localText .= " " . ($tr["name"] ?? "") . " " . ($tr["summary"] ?? "");
    }
    // The page addresses too: a German page's address is German words
    // ("…/flitterwochen-…"), which the names do not always repeat.
    $slugs = str_replace(["-", "/", ".html"], " ", implode(" ", array_map(function ($u) { return (string)parse_url((string)$u, PHP_URL_PATH); }, (array)($j["pages"] ?? []))));
    $hay = lc(($j["name"] ?? "") . " " . ($j["subtitle"] ?? "") . " " . ($j["summary"] ?? "") . " " . ($j["kind"] ?? "") . " " . ($j["duration"] ?? "") . $localText . " " . $slugs) . " " . $places;
    if ($place !== "" && strpos($hay, $place) === false) continue;
    $score = $terms ? $hit($hay) : 1;
    if ($terms && $score === 0) continue;
    // The words in the order asked ("luna di miele") rank above the same
    // words scattered through a longer text.
    if ($phrase !== "" && strpos($hay, $phrase) !== false) $score += 0.5;
    // The journey as its page in the traveller's language names it.
    $loc = is_array($j["i18n"][$lang] ?? null) ? $j["i18n"][$lang] : [];
    $two = $j["priceForTwo"]["amount"] ?? null;
    $journeys[] = [$score, [
      "id" => $j["id"] ?? "",
      "name" => $loc["name"] ?? ($j["name"] ?? ""),
      "kind" => $j["kind"] ?? "",
      "duration" => $loc["duration"] ?? ($j["duration"] ?? ""),
      "days" => $days,
      "places" => $j["places"] ?? [],
      "private" => $j["privacy"] ?? "",
      "priceFrom" => is_numeric($price) ? ["amount" => $price, "currency" => "EUR", "per" => $j["priceFrom"]["per"] ?? "person", "basis" => $j["priceFrom"]["basis"] ?? ""] : null,
      "priceForTwo" => is_numeric($two) ? ["amount" => $two, "currency" => "EUR", "per" => "person", "basis" => "a private party of two"] : null,
      "summary" => $loc["summary"] ?? ($j["summary"] ?? ""),
      "note" => $j["note"] ?? null,
      "date" => $j["date"] ?? null,
      "url" => $j["pages"][$lang] ?? ($j["pages"]["en"] ?? KEMET_SITE . "/tours.html"),
    ]];
  }
  // When some journey has every word asked for, the ones that share a single
  // word only are dropped: "Abu Simbel" should not bring back Abu Serga.
  if (count($terms) > 1 && $journeys && (int)floor(max(array_map(function ($x) { return $x[0]; }, $journeys))) === count($terms)) {
    $journeys = array_values(array_filter($journeys, function ($x) use ($terms) { return (int)floor($x[0]) === count($terms); }));
  }
  usort($journeys, function ($a, $b) { return $b[0] <=> $a[0]; });

  $programmes = [];
  if ($cap === null) {
    foreach (($cat["programmes"]["items"] ?? []) as $p) {
      $days = preg_match('/(\d+)\s*day/i', (string)($p["length"] ?? ""), $m) ? (int)$m[1] : 0;
      if ($min !== null && $days && $days < $min) continue;
      if ($max !== null && $days && $days > $max) continue;
      $hay = lc(($p["name"] ?? "") . " " . ($p["summary"] ?? "") . " " . ($p["route"] ?? "") . " " . ($p["use"] ?? ""));
      if ($place !== "" && strpos($hay, $place) === false) continue;
      if ($terms && $hit($hay) < (count($terms) > 1 && $journeys ? count($terms) : 1)) continue;
      $programmes[] = [
        "id" => $p["id"] ?? "",
        "name" => $p["name"] ?? "",
        "length" => $p["length"] ?? "",
        "route" => $p["route"] ?? "",
        "bestMonths" => $p["bestMonths"] ?? "",
        "price" => "on request",
        "summary" => $p["summary"] ?? "",
        "url" => $p["page"] ?? KEMET_SITE . "/programmes.html",
      ];
    }
  }

  $found = array_map(function ($x) { return array_filter($x[1], function ($v) { return $v !== null; }); }, $journeys);
  return [
    "journeys" => $found,
    "programmes" => $programmes,
    "note" => "Prices are from-prices in euros per person. priceFrom is for a private party of six or more unless its basis says otherwise; priceForTwo is what each of two travellers pays. Quote the one that fits the party and say which it is. Programmes have no published price. Any journey can be lengthened, shortened or combined, and one that is not listed can still be planned.",
    "catalogue" => KEMET_SITE . "/tours.html",
  ] + (!$found && !$programmes ? ["hint" => "Nothing in the journey catalogue matched. The search tool covers every page of the site in every language, including themed pages (honeymoons, seasons, occasions)."] : []);
}

function tool_get_journey(array $args): array {
  $id = arg_text($args, "id", 80);
  if (!preg_match('/^[a-z0-9-]{2,80}$/', $id)) throw new InvalidArgumentException("Give the journey id returned by search_journeys, e.g. tour-10-day.");
  $cat = read_json("journeys.json");
  $lang = arg_lang($args);
  $record = null; $url = null;
  foreach (($cat["journeys"] ?? []) as $j) {
    if (($j["id"] ?? "") === $id) { $record = $j; $url = $j["pages"][$lang] ?? ($j["pages"]["en"] ?? null); break; }
  }
  if ($record === null) {
    foreach (($cat["programmes"]["items"] ?? []) as $p) {
      if (($p["id"] ?? "") === $id) { $record = $p + ["price" => "on request", "note" => $cat["programmes"]["note"] ?? ""]; $url = $p["page"] ?? null; break; }
    }
  }
  if ($record === null || !is_string($url)) throw new InvalidArgumentException("No journey with the id '" . $id . "'. Call search_journeys to list the ids.");
  $path = page_path($url);
  $page = $path !== null ? page_markdown($path) : null;
  return [
    "id" => $id,
    "url" => $url,
    "language" => $page["meta"]["language"] ?? $lang,
    // The record named and summarised as the page in this language is.
    "summary" => (is_array($record["i18n"][$lang] ?? null)
      ? array_merge($record, array_filter([
          "name" => $record["i18n"][$lang]["name"] ?? null,
          "summary" => $record["i18n"][$lang]["summary"] ?? null,
          "duration" => $record["i18n"][$lang]["duration"] ?? null,
        ]))
      : $record),
    "page" => $page["text"] ?? "The page is at " . $url,
    "enquire" => $cat["enquire"] ?? ["page" => KEMET_SITE . "/contact.html"],
  ];
}

function tool_enquiry_link(array $args): array {
  $cat = read_json("journeys.json");
  $lang = arg_lang($args);
  $message = arg_text($args, "message", 600);
  $jid = arg_text($args, "journey_id", 80);
  $about = "";
  if ($jid !== "" && preg_match('/^[a-z0-9-]{2,80}$/', $jid)) {
    foreach (array_merge($cat["journeys"] ?? [], $cat["programmes"]["items"] ?? []) as $j) {
      // Named as the page in the traveller's language names it.
      if (($j["id"] ?? "") === $jid) { $about = (string)($j["i18n"][$lang]["name"] ?? ($j["name"] ?? "")); break; }
    }
  }
  // The greeting in the traveller's language (journeys.json → enquire.greeting).
  $g = is_array($cat["enquire"]["greeting"][$lang] ?? null) ? $cat["enquire"]["greeting"][$lang] : [];
  $hello = is_string($g["hello"] ?? null) ? $g["hello"] : "Hello Kemet.";
  $aboutTpl = is_string($g["about"] ?? null) && strpos($g["about"], "%s") !== false ? $g["about"] : 'Hello Kemet — I am asking about "%s".';
  $text = ($about !== "" ? str_replace("%s", $about, $aboutTpl) : $hello) . ($message !== "" ? " " . $message : "");
  $wa = (string)($cat["enquire"]["whatsapp"] ?? "");
  $contact = $lang === "en" ? KEMET_SITE . "/contact.html" : KEMET_SITE . "/" . $lang . "/#enquire";
  return [
    "whatsapp" => $wa !== "" ? $wa . "?text=" . rawurlencode($text) : null,
    "contactPage" => $contact,
    "email" => $cat["enquire"]["email"] ?? null,
    "prefilledMessage" => $text,
    "note" => "Nothing has been sent. The traveller opens the WhatsApp link (the message is already typed) or the contact page and sends it themselves. Kemet answers with a day-by-day itinerary and a price within two hours.",
  ];
}

function tool_search(array $args): array {
  $terms = words(arg_text($args, "query", 200));
  if (!$terms) throw new InvalidArgumentException("Give one or more search words.");
  $index = read_json("search-index.json");
  $phrase = implode(" ", $terms);
  $found = [];
  foreach ($index as $e) {
    if (!is_array($e)) continue;
    $title = lc((string)($e["t"] ?? ""));
    $desc = lc((string)($e["d"] ?? ""));
    $keys = (string)($e["k"] ?? "");
    $score = 0; $matched = 0;
    foreach ($terms as $t) {
      $s = 0;
      if (strpos($title, $t) !== false) $s += 6;
      if (strpos($desc, $t) !== false) $s += 2;
      if (strpos($keys, $t) !== false) $s += 1;
      if ($s) $matched++;
      $score += $s;
    }
    // The words as a phrase in the title is the page about exactly that; and
    // a page outranks one section of another page ("faq.html#…").
    if ($phrase !== "" && strpos($title, $phrase) !== false) $score += 10;
    if (strpos((string)($e["u"] ?? ""), "#") === false) $score += 3;
    // Every word has to be somewhere on the page; otherwise a long query
    // returns the whole site ranked by its commonest word.
    if ($matched < count($terms)) continue;
    list($u, $hash) = index_address((string)($e["u"] ?? ""));
    $found[$u . $hash . "|" . ($e["t"] ?? "")] = [$score, $u, (string)($e["t"] ?? ""), (string)($e["d"] ?? ""), (string)($e["s"] ?? ""), $hash];
  }
  if (!$found && count($terms) > 1) {
    // Nothing carries every word: fall back to the best partial matches.
    foreach ($index as $e) {
      if (!is_array($e)) continue;
      $hay = lc(($e["t"] ?? "") . " " . ($e["d"] ?? "")) . " " . ($e["k"] ?? "");
      $n = 0;
      foreach ($terms as $t) if (strpos($hay, $t) !== false) $n++;
      list($u, $hash) = index_address((string)($e["u"] ?? ""));
      if ($n) $found[$u . $hash . "|" . ($e["t"] ?? "")] = [$n, $u, (string)($e["t"] ?? ""), (string)($e["d"] ?? ""), (string)($e["s"] ?? ""), $hash];
    }
  }
  uasort($found, function ($a, $b) { return $b[0] <=> $a[0]; });
  $results = []; $seen = [];
  foreach ($found as $f) {
    // The index lists a page once per section (a dish on the cuisine page);
    // a result is a page, so keep the best entry for each address.
    if (isset($seen[$f[1]])) continue;
    $seen[$f[1]] = true;
    $results[] = ["id" => $f[1], "title" => $f[2], "url" => page_url($f[1]), "section" => $f[4], "description" => $f[3]];
    if (count($results) === 12) break;
  }
  return ["results" => $results];
}

/** A search-index address ("", "faq.html#faq", "de/") → [page path, "#fragment" or ""]. */
function index_address(string $u): array {
  $hash = "";
  $at = strpos($u, "#");
  if ($at !== false) { $hash = substr($u, $at); $u = substr($u, 0, $at); }
  if ($u === "") $u = "index.html";
  elseif (substr($u, -1) === "/") $u .= "index.html";
  return [$u, $hash];
}

function tool_fetch(array $args): array {
  $path = page_path(arg_text($args, "id", 300));
  if ($path === null) throw new InvalidArgumentException("Give a page of kemet-travel.com: an id from search, or a full https://kemet-travel.com/… address.");
  $page = page_markdown($path);
  if ($page === null) throw new InvalidArgumentException("There is no page at " . page_url($path) . ". Use search to find the right address.");
  return [
    "id" => $path,
    "title" => $page["meta"]["title"],
    "text" => $page["text"],
    "url" => page_url($path),
    "metadata" => ["language" => $page["meta"]["language"], "description" => $page["meta"]["description"]],
  ];
}

// --- a tally, not a log -------------------------------------------------------
// One line per tool call: the month file, the day, the tool. No address, no
// arguments, no user agent — enough to answer "is anything calling this, and
// which tool", and nothing that describes a person. Lives in _stats/ with the
// site's own counters, which the web server already refuses to serve.
function note_call(string $tool): void {
  $dir = __DIR__ . "/_stats";
  if (!is_dir($dir) || !is_writable($dir)) return;
  @file_put_contents($dir . "/mcp-" . gmdate("Y-m") . ".csv", gmdate("Y-m-d") . "," . $tool . "\n", FILE_APPEND | LOCK_EX);
}
