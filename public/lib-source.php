<?php
// ---------------------------------------------------------------------------
// Where a visit came from — shared by k.php (the collector), contact-handler.php
// (so an enquiry email says how the person found us) and stats.php (so the
// dashboard can say which sources bring enquiries, not just visits).
//
// Not reachable over the web: .htaccess answers 404 for any lib-*.php.
//
// NOTHING IS STORED ON THE VISITOR'S DEVICE. The link between "arrived from
// ChatGPT" and "tapped WhatsApp" is made here, on the server, through the same
// anonymous daily visitor hash k.php already writes on every row — a salted
// hash of IP and browser that changes at midnight UTC and cannot be reversed.
// So a visit is attributed when the enquiry happens on the same day as the
// arrival, which is when nearly all of them happen; one that comes back the
// next day is counted as direct. That is the honest limit of a cookie-less
// setup, and it is the one the privacy position of this site asks for.
//
// Visitors sending Do Not Track or Global Privacy Control are never logged by
// k.php, so there is nothing to look up and they are reported as "not tracked".
// ---------------------------------------------------------------------------

/** The folder the collector writes to. */
function kemet_stats_dir(): string { return __DIR__ . "/_stats"; }

/** True when the visitor has asked not to be tracked. */
function kemet_dnt(): bool {
  return (($_SERVER["HTTP_DNT"] ?? "") === "1") || (($_SERVER["HTTP_SEC_GPC"] ?? "") === "1");
}

/**
 * Today's anonymous visitor hash for the current request — the same value
 * k.php writes in column 2. Moved here from k.php so the collector and the
 * enquiry handler cannot compute it two different ways.
 */
function kemet_vid(): string {
  $dir = kemet_stats_dir();
  if (!is_dir($dir)) { @mkdir($dir, 0755, true); @file_put_contents("$dir/index.html", ""); }
  $saltFile = "$dir/.salt-" . gmdate("Y-m-d");
  if (!is_file($saltFile)) {
    foreach (glob("$dir/.salt-*") as $old) @unlink($old);   // keep only today's
    @file_put_contents($saltFile, bin2hex(random_bytes(16)));
    kemet_prune_stats($dir);                                 // once a day, on the first hit
  }
  $salt = (string)@file_get_contents($saltFile);
  return substr(hash("sha256", $salt . ($_SERVER["REMOTE_ADDR"] ?? "") . ($_SERVER["HTTP_USER_AGENT"] ?? "")), 0, 12);
}

/**
 * Delete monthly analytics files older than 13 months — the retention period
 * the privacy policy states. Only the collector's own YYYY-MM.csv files: the
 * enquiry log and the mailing list are Kemet's business records and are never
 * touched here. Runs once a day, when the day's salt is created.
 */
function kemet_prune_stats(string $dir): int {
  $keepFrom = gmdate("Y-m", strtotime(gmdate("Y-m-01") . " -12 months"));   // this month + 12 before it
  $gone = 0;
  foreach (glob("$dir/[0-9][0-9][0-9][0-9]-[0-9][0-9].csv") ?: [] as $f) {
    if (basename($f, ".csv") < $keepFrom && @unlink($f)) $gone++;
  }
  return $gone;
}

/**
 * Classify one arrival: the referrer host and the query string it landed with.
 * Returns [group, name] — group is one of
 *   "AI assistant" · "Search" · "Social" · "Other site" · "Tagged link" · "Direct".
 */
function kemet_source(string $host, string $query = ""): array {
  $host = strtolower(preg_replace('/^www\./', '', trim($host)));
  $qs = [];
  parse_str(ltrim($query, "?"), $qs);
  $utm = strtolower(trim((string)($qs["utm_source"] ?? "")));

  // ChatGPT marks the links it cites with utm_source=chatgpt.com, and a click
  // from its app often arrives with no referrer at all — so the tag is read
  // first, or those visits would all look typed-in.
  $aiTags = ["chatgpt" => "ChatGPT", "openai" => "ChatGPT", "perplexity" => "Perplexity",
             "copilot" => "Copilot", "gemini" => "Gemini", "claude" => "Claude", "deepseek" => "DeepSeek"];
  foreach ($aiTags as $needle => $name) {
    if ($utm !== "" && strpos($utm, $needle) !== false) return ["AI assistant", $name];
  }

  $aiHosts = [
    "chatgpt.com" => "ChatGPT", "chat.openai.com" => "ChatGPT", "openai.com" => "ChatGPT",
    "perplexity.ai" => "Perplexity", "copilot.microsoft.com" => "Copilot", "copilot.com" => "Copilot",
    "gemini.google.com" => "Gemini", "bard.google.com" => "Gemini", "claude.ai" => "Claude",
    "you.com" => "You.com", "phind.com" => "Phind", "meta.ai" => "Meta AI", "grok.com" => "Grok",
    "deepseek.com" => "DeepSeek", "chat.deepseek.com" => "DeepSeek", "poe.com" => "Poe",
    "chat.mistral.ai" => "Mistral",
  ];
  $ends = function (string $h, string $d): bool {
    return $h === $d || substr($h, -strlen($d) - 1) === "." . $d;
  };
  foreach ($aiHosts as $d => $name) if ($host !== "" && $ends($host, $d)) return ["AI assistant", $name];

  // gemini.google.com is matched above, before this can call it Google search
  if ($host !== "" && preg_match('/(^|\.)google\.[a-z.]+$/', $host)) return ["Search", "Google"];
  $search = ["bing.com" => "Bing", "duckduckgo.com" => "DuckDuckGo", "yahoo.com" => "Yahoo",
             "ecosia.org" => "Ecosia", "baidu.com" => "Baidu", "naver.com" => "Naver",
             "search.brave.com" => "Brave", "qwant.com" => "Qwant", "seznam.cz" => "Seznam"];
  foreach ($search as $d => $name) if ($host !== "" && $ends($host, $d)) return ["Search", $name];
  if ($host !== "" && preg_match('/(^|\.)yandex\.[a-z.]+$/', $host)) return ["Search", "Yandex"];

  $social = ["instagram.com" => "Instagram", "facebook.com" => "Facebook", "fb.com" => "Facebook",
             "t.co" => "X / Twitter", "x.com" => "X / Twitter", "twitter.com" => "X / Twitter",
             "tiktok.com" => "TikTok", "youtube.com" => "YouTube", "pinterest.com" => "Pinterest",
             "linkedin.com" => "LinkedIn", "threads.net" => "Threads", "reddit.com" => "Reddit"];
  foreach ($social as $d => $name) if ($host !== "" && $ends($host, $d)) return ["Social", $name];

  if ($utm !== "") {
    if (in_array($utm, ["ig", "instagram"], true)) return ["Social", "Instagram"];
    if (in_array($utm, ["fb", "facebook"], true))  return ["Social", "Facebook"];
    return ["Tagged link", $utm];
  }
  if ($host !== "") return ["Other site", $host];
  return ["Direct", "Direct / typed"];
}

/** "AI assistant · ChatGPT" */
function kemet_source_label(array $s): string {
  return $s[0] === "Direct" ? "Direct / typed" : $s[0] . " · " . $s[1];
}

/**
 * What today's log knows about the visitor making this request: how they
 * arrived, the first page they saw and the pages they went on to read.
 * Read from this month's collector file, filtered to the one visitor hash.
 */
function kemet_visit_trail(): array {
  $none = ["source" => ["Direct", "Direct / typed"], "first" => "", "pages" => [], "known" => false];
  if (kemet_dnt()) return ["source" => ["Not tracked", "Do Not Track"], "first" => "", "pages" => [], "known" => false];

  $vid  = kemet_vid();
  $file = kemet_stats_dir() . "/" . gmdate("Y-m") . ".csv";
  if (!is_file($file)) return $none;
  $fh = @fopen($file, "r");
  if (!$fh) return $none;

  $today = gmdate("Y-m-d");
  $needle = "," . $vid . ",";
  $source = null; $first = ""; $pages = []; $known = false;
  while (($line = fgets($fh)) !== false) {
    if (strpos($line, $needle) === false || strncmp($line, $today, 10) !== 0) continue;
    $c = str_getcsv(rtrim($line, "\r\n"));
    if (count($c) < 6 || $c[1] !== "pv") continue;
    $c = array_pad($c, 10, "");
    $known = true;
    if ($first === "") $first = $c[3];
    // The first arrival from outside the site decides the source. A visit
    // that begins typed-in and later comes back through Google is Google.
    if ($source === null && ($c[4] !== "" || $c[7] !== "")) $source = kemet_source($c[4], $c[7]);
    if (!in_array($c[3], $pages, true)) $pages[] = $c[3];
  }
  fclose($fh);
  return [
    "source" => $source ?? ["Direct", "Direct / typed"],
    "first"  => $first,
    "pages"  => $pages,
    "known"  => $known,
  ];
}
