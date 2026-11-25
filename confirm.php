<?php
// ---------------------------------------------------------------------------
// Kemet — list confirmation (double opt-in; see subscribe.php).
//
// Reached from the one message a new sign-up receives. Opening it moves the
// row from "pending" to "active" and adds when and from where it was
// confirmed: the record that the address belongs to the person who asked.
// The office is told here, not at sign-up, so it never hears of an address
// that was typed by someone else.
//
// The token identifies the row; the address is never echoed back.
// ---------------------------------------------------------------------------

$store = __DIR__ . "/_stats/subscribers.csv";
$token = preg_replace("/[^a-f0-9]/", "", (string) ($_GET["t"] ?? ""));

$state = "unknown";   // unknown | confirmed | already | off | ask
$who = null;
// Only a POST confirms. Mail security scanners open every link in a message
// before the reader does; a GET that confirmed would let a scanner — or anyone
// who typed a stranger's address — complete the double opt-in. GET shows a
// button that POSTs.
$isPost = ($_SERVER["REQUEST_METHOD"] ?? "GET") === "POST";
if ($isPost && $token === "") { $token = preg_replace("/[^a-f0-9]/", "", (string) ($_POST["t"] ?? "")); }
if (!$isPost && $token !== "") { $state = "ask"; }

if ($isPost && $token !== "" && is_readable($store) && ($fh = fopen($store, "r+")) !== false) {
  flock($fh, LOCK_EX);
  $rows = [];
  while (($row = fgetcsv($fh)) !== false) {
    if (isset($row[6]) && hash_equals((string) $row[6], $token)) {
      $status = (string) ($row[7] ?? "");
      if ($status === "pending") {
        $row[7] = "active";
        $row[10] = gmdate("Y-m-d H:i") . " " . ($_SERVER["REMOTE_ADDR"] ?? "");
        $state = "confirmed";
        $who = $row;
      } elseif ($status === "active") {
        $state = "already";
      } else {
        $state = "off";
      }
    }
    $rows[] = $row;
  }
  if ($state === "confirmed") {
    ftruncate($fh, 0);
    rewind($fh);
    foreach ($rows as $row) { fputcsv($fh, $row); }
  }
  flock($fh, LOCK_UN);
  fclose($fh);
}

// The trip designer promised the reader their shortlist by email: it is sent
// now, once the address is known to be theirs. The picks are journey ids from
// the designer (detail: "… | picks: tour-7-day, tour-4-day, …"), looked up in
// the published catalogue, so the names and prices are the site's own.
if ($state === "confirmed" && $who && ($who[3] ?? "") === "designer"
    && preg_match('/picks:\s*([a-z0-9, -]+)/', (string) ($who[4] ?? ""), $pm)) {
  $cat = json_decode((string) @file_get_contents(__DIR__ . "/journeys.json"), true);
  $byId = [];
  foreach (($cat["journeys"] ?? []) as $j) { if (isset($j["id"])) $byId[$j["id"]] = $j; }
  $lines = [];
  foreach (array_slice(array_filter(array_map("trim", explode(",", $pm[1]))), 0, 3) as $id) {
    if (!isset($byId[$id])) continue;
    $j = $byId[$id];
    $price = isset($j["priceFrom"]["amount"]) ? "from EUR " . number_format((float) $j["priceFrom"]["amount"]) . " per person"
      . (isset($j["priceFrom"]["basis"]) ? " (" . $j["priceFrom"]["basis"] . ")" : "") : "";
    $two = isset($j["priceForTwo"]["amount"]) ? "; EUR " . number_format((float) $j["priceForTwo"]["amount"]) . " each for two" : "";
    $lines[] = "• " . ($j["name"] ?? $id) . " — " . ($j["duration"] ?? "") . "\n  " . $price . $two
      . "\n  What is and is not included: " . ($j["pages"]["en"] ?? "https://kemet-travel.com/tours.html");
  }
  if ($lines) {
    @mail(
      $who[1],
      "Kemet — your shortlist",
      "Thank you for confirming. Here are the three journeys the designer chose for you:\n\n"
      . implode("\n\n", $lines) . "\n\n"
      . "Prices are normal-season prices; holiday surcharges are shown separately in a quote.\n"
      . "Reply to this message, or write on WhatsApp, and we will send a day-by-day itinerary\nand a clear price within two hours.\n\n"
      . "To leave the list: https://kemet-travel.com/unsubscribe.php?t=" . urlencode($token) . "\n\n— Kemet\nhttps://kemet-travel.com\n",
      "From: Kemet <no-reply@kemet-travel.com>\r\nReply-To: info@kemet-travel.com\r\nContent-Type: text/plain; charset=UTF-8",
      "-fno-reply@kemet-travel.com"
    );
  }
}

if ($state === "confirmed" && $who) {
  @mail(
    "info@kemet-travel.com",
    "List: new sign-up — " . $who[1],
    "Source:  {$who[3]}\nName:    {$who[2]}\nEmail:   {$who[1]}\nLocale:  {$who[5]}\n"
    . (($who[4] ?? "") !== "" ? "Detail:  {$who[4]}\n" : "")
    . "Confirmed: " . gmdate("Y-m-d H:i") . " UTC\n",
    "From: Kemet <no-reply@kemet-travel.com>\r\nContent-Type: text/plain; charset=UTF-8",
    "-fno-reply@kemet-travel.com"
  );
}

header("Content-Type: text/html; charset=UTF-8");
header("X-Robots-Tag: noindex, nofollow");
header("Cache-Control: no-store");
?><!doctype html>
<html lang="en"><head>
<meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<meta name="robots" content="noindex, nofollow">
<title>Kemet — confirmed</title>
<style>
  body{margin:0;min-height:100vh;display:flex;align-items:center;justify-content:center;
    background:linear-gradient(180deg,#0C0A07,#080604);color:#FBF6EC;
    font-family:'Outfit',system-ui,sans-serif;font-weight:300;text-align:center;padding:24px}
  .box{max-width:460px}
  h1{font-family:Georgia,serif;font-weight:300;font-size:1.8rem;color:#F7E6AE;margin:0 0 16px}
  p{color:#DAD0BB;line-height:1.85;font-size:.96rem;margin:0 0 10px}
  a{color:#D9B45A}
</style>
</head><body><div class="box">
<?php if ($state === "ask"): ?>
  <h1>Confirm your address</h1>
  <p>One click to join Kemet's list. If you did not ask to join, close this page and nothing will happen.</p>
  <form method="post" action="/confirm.php">
    <input type="hidden" name="t" value="<?= htmlspecialchars($token, ENT_QUOTES, "UTF-8") ?>">
    <button type="submit" style="font:inherit;padding:12px 26px;border:1px solid #D9B45A;background:#D9B45A;color:#0C0A07;cursor:pointer">Confirm</button>
  </form>
<?php elseif ($state === "confirmed" || $state === "already"): ?>
  <h1>Thank you — you're on the list</h1>
  <p>You will hear from us when the season turns in Egypt, and first when the
     dates that genuinely run out open. A few times a year. Never more.</p>
  <p>Every message has a link to leave the list in one click.</p>
<?php elseif ($state === "off"): ?>
  <h1>This address has left the list</h1>
  <p>If you would like to join again, use the form on the site and confirm from the new email.</p>
<?php else: ?>
  <h1>That link does not work</h1>
  <p>It may have been copied incompletely. Sign up again on the site and a new link will be sent.</p>
<?php endif; ?>
  <p><a href="/">kemet-travel.com</a></p>
</div></body></html>
