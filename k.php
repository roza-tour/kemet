<?php
// ---------------------------------------------------------------------------
// Kemet — first-party, cookie-less analytics collector.
// Logs one line per pageview/event to monthly CSV files in _stats/ (a folder
// the web server refuses to serve — see .htaccess). No cookies, no third
// parties, no raw IP stored: visitors are counted via a salted daily hash,
// which cannot be reversed and changes every day (GDPR-friendly).
// The site sends beacons here from Base.astro. View reports at /stats.php.
// ---------------------------------------------------------------------------

// Respect Do Not Track / Global Privacy Control.
if ((isset($_SERVER["HTTP_DNT"]) && $_SERVER["HTTP_DNT"] === "1") ||
    (isset($_SERVER["HTTP_SEC_GPC"]) && $_SERVER["HTTP_SEC_GPC"] === "1")) {
  http_response_code(204); exit;
}

$dir = __DIR__ . "/_stats";
if (!is_dir($dir)) { @mkdir($dir, 0755, true); @file_put_contents("$dir/index.html", ""); }

function field($k, $max) {
  $v = isset($_GET[$k]) ? (string)$_GET[$k] : "";
  $v = substr($v, 0, $max);
  return str_replace(["\r", "\n", '"'], " ", $v);
}

$type = field("t", 10);                 // "pv" (pageview) or "ev" (event)
if ($type !== "pv" && $type !== "ev") { http_response_code(204); exit; }

$page  = field("p", 200);               // path, e.g. /tours.html
$extra = field("v", 120);               // event name, or referrer host for pv

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

$mobile = (strpos($ua, "mobi") !== false || strpos($ua, "android") !== false) ? "m" : "d";

$line = sprintf("%s,%s,%s,\"%s\",\"%s\",%s\n",
  gmdate("Y-m-d H:i"), $type, $vid, $page, $extra, $mobile);
@file_put_contents($dir . "/" . gmdate("Y-m") . ".csv", $line, FILE_APPEND | LOCK_EX);

http_response_code(204);
