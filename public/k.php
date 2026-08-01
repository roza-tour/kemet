<?php
// ---------------------------------------------------------------------------
// Kemet — first-party, cookie-less analytics collector.
// Logs one line per hit to monthly CSV files in _stats/ (a folder the web
// server refuses to serve — see .htaccess). No cookies, no third parties, no
// raw IP stored: visitors are counted via a salted daily hash, which cannot be
// reversed and changes every day (GDPR-friendly).
// The site sends beacons here from scripts/enhance.ts. Reports at /stats.php.
//
// CSV SCHEMA (10 columns, written in this order):
//   0 time    UTC "Y-m-d H:i"
//   1 type    "pv" pageview · "ev" event · "404" a page that does not exist
//   2 vid     anonymous daily visitor hash (12 hex)
//   3 page    location.pathname, e.g. /tours.html  ("/" is the home page)
//   4 extra   pv/404: referrer host · ev: event name
//   5 device  m mobile · t tablet · d desktop
//   6 lang    visitor's browser language, e.g. "de-DE" — our nationality signal
//   7 query   campaign/tag on the landing URL (pv only), e.g. "utm_source=ig"
//   8 detail  ev payload — which journey was clicked, engaged seconds, ...
//   9 num     ev number — read depth as a percentage on the "end" event
//
// Rows written before this schema landed have only the first six columns;
// stats.php pads them, so old and new data still report together.
// ---------------------------------------------------------------------------

// Respect Do Not Track / Global Privacy Control.
if ((isset($_SERVER["HTTP_DNT"]) && $_SERVER["HTTP_DNT"] === "1") ||
    (isset($_SERVER["HTTP_SEC_GPC"]) && $_SERVER["HTTP_SEC_GPC"] === "1")) {
  http_response_code(204); exit;
}

$dir = __DIR__ . "/_stats";
if (!is_dir($dir)) { @mkdir($dir, 0755, true); @file_put_contents("$dir/index.html", ""); }

// Read one query field, truncate it, and neutralise anything that could break
// out of its CSV cell. A beacon URL is attacker-controllable, so this is the
// only place the data is trusted from.
function field($k, $max) {
  $v = isset($_GET[$k]) ? (string)$_GET[$k] : "";
  $v = substr($v, 0, $max);
  return str_replace(["\r", "\n", '"'], " ", $v);
}

$type = field("t", 3);                  // "pv" | "ev" | "404"
if ($type !== "pv" && $type !== "ev" && $type !== "404") { http_response_code(204); exit; }

$page   = field("p", 200);              // path, e.g. /tours.html
$extra  = field("v", 120);              // event name, or referrer host
$lang   = field("l", 5);                // navigator.language, e.g. "de-DE"
$query  = $type === "ev" ? "" : field("q", 80);   // campaign tag on the landing URL
$detail = field("d", 60);               // event payload
$num    = (int)($_GET["n"] ?? 0);
if ($num < 0 || $num > 100000) $num = 0;

// Daily-rotating anonymous visitor hash: salt(day) + IP + UA → 12 hex chars.
// Not stored anywhere in reversible form; changes every midnight.
$saltFile = "$dir/.salt-" . gmdate("Y-m-d");
if (!is_file($saltFile)) {
  foreach (glob("$dir/.salt-*") as $old) @unlink($old);   // keep only today's
  @file_put_contents($saltFile, bin2hex(random_bytes(16)));
}
$salt = (string)@file_get_contents($saltFile);
$vid  = substr(hash("sha256", $salt . ($_SERVER["REMOTE_ADDR"] ?? "") . ($_SERVER["HTTP_USER_AGENT"] ?? "")), 0, 12);

// Very light bot filter.
$ua = strtolower($_SERVER["HTTP_USER_AGENT"] ?? "");
foreach (["bot", "spider", "crawl", "curl", "wget", "python", "monitor", "preview"] as $b) {
  if (strpos($ua, $b) !== false) { http_response_code(204); exit; }
}

// Device class. Viewport width is the honest signal — an iPad in desktop mode
// reports a Macintosh user-agent, so the UA alone files every tablet as a
// desktop. The UA is only the fallback for a beacon that carried no width.
$w = (int)($_GET["w"] ?? 0);
if ($w > 0) {
  $device = $w < 680 ? "m" : ($w < 1080 ? "t" : "d");
} else {
  $device = (strpos($ua, "mobi") !== false || strpos($ua, "android") !== false) ? "m" : "d";
}

$line = sprintf("%s,%s,%s,\"%s\",\"%s\",%s,\"%s\",\"%s\",\"%s\",%d\n",
  gmdate("Y-m-d H:i"), $type, $vid, $page, $extra, $device, $lang, $query, $detail, $num);
@file_put_contents($dir . "/" . gmdate("Y-m") . ".csv", $line, FILE_APPEND | LOCK_EX);

http_response_code(204);
