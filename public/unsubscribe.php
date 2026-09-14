<?php
// ---------------------------------------------------------------------------
// Kemet — one-click unsubscribe.
//
// Reached by the token in the footer of every message the list sends. It works
// without a login, without asking the address again, and without a "are you
// sure?" step: an unsubscribe that takes effort is the kind that turns into a
// spam report, which costs the sending domain far more than the subscriber did.
//
// The token identifies the row; the address is never echoed back, so a guessed
// URL confirms nothing about who is on the list.
// ---------------------------------------------------------------------------

$store = __DIR__ . "/_stats/subscribers.csv";
$token = preg_replace("/[^a-f0-9]/", "", (string) ($_GET["t"] ?? ""));

$done = false;

if ($token !== "" && is_readable($store) && ($fh = fopen($store, "r+")) !== false) {
  flock($fh, LOCK_EX);
  $rows = [];
  while (($row = fgetcsv($fh)) !== false) {
    if (isset($row[6]) && hash_equals((string) $row[6], $token)) {
      // The row is kept, marked, rather than deleted: proof that consent was
      // given and then withdrawn is the record that protects both sides, and a
      // deleted row would let the next import silently re-add the address.
      $row[7] = "unsubscribed " . gmdate("Y-m-d");
      $done = true;
    }
    $rows[] = $row;
  }
  ftruncate($fh, 0);
  rewind($fh);
  foreach ($rows as $row) { fputcsv($fh, $row); }
  flock($fh, LOCK_UN);
  fclose($fh);
}

header("Content-Type: text/html; charset=UTF-8");
header("X-Robots-Tag: noindex, nofollow");
?><!doctype html>
<html lang="en"><head>
<meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<meta name="robots" content="noindex, nofollow">
<title>Kemet — unsubscribed</title>
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
<?php if ($done): ?>
  <h1>Done — you're off the list</h1>
  <p>You will not receive anything further. Nothing else changes: if you have a
     journey being planned with us, that correspondence is unaffected.</p>
<?php else: ?>
  <h1>That link has already been used</h1>
  <p>If you are still receiving messages, reply to any one of them and we will
     take the address off by hand.</p>
<?php endif; ?>
  <p><a href="/">kemet-travel.com</a></p>
</div></body></html>
