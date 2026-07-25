<?php
// ---------------------------------------------------------------------------
// Kemet — private analytics dashboard. Reads the CSVs written by k.php.
// Access requires the secret key (PHP source is executed, never served, so
// the key is not exposed to visitors):
//     https://kemet-travel.com/stats.php?key=33884d66d157f9539b8e70a2
// Change ACCESS_KEY below any time to rotate access.
// ---------------------------------------------------------------------------
const ACCESS_KEY = "33884d66d157f9539b8e70a2";

if (!hash_equals(ACCESS_KEY, (string)($_GET["key"] ?? ""))) {
  http_response_code(404);           // look like any other missing page
  header("Location: /404.html"); exit;
}

$dir = __DIR__ . "/_stats";
$days = max(7, min(90, (int)($_GET["days"] ?? 30)));
$since = new DateTimeImmutable("-" . ($days - 1) . " days", new DateTimeZone("UTC"));

// Load the CSV months that overlap the window.
$rows = [];
for ($m = 0; $m <= 3; $m++) {
  $f = $dir . "/" . gmdate("Y-m", strtotime("-$m month")) . ".csv";
  if (!is_file($f)) continue;
  foreach (file($f, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES) as $line) {
    $c = str_getcsv($line);
    if (count($c) < 6 || $c[0] < $since->format("Y-m-d")) continue;
    $rows[] = $c; // [datetime, type, vid, page, extra, device]
  }
}

$daysMap = $pages = $refs = $events = $devices = [];
$visitors = [];
foreach ($rows as $c) {
  [$dt, $t, $vid, $page, $extra, $dev] = $c;
  $day = substr($dt, 0, 10);
  if ($t === "pv") {
    $daysMap[$day] = ($daysMap[$day] ?? 0) + 1;
    $pages[$page] = ($pages[$page] ?? 0) + 1;
    if ($extra !== "") $refs[$extra] = ($refs[$extra] ?? 0) + 1;
    $devices[$dev] = ($devices[$dev] ?? 0) + 1;
    $visitors[$day . $vid] = 1;
  } else {
    $events[$extra] = ($events[$extra] ?? 0) + 1;
  }
}
arsort($pages); arsort($refs); arsort($events);
$pv = array_sum($daysMap); $uv = count($visitors);
$maxDay = max(1, $daysMap ? max($daysMap) : 1);
ksort($daysMap);
$fmt = fn($n) => number_format($n);
$esc = fn($s) => htmlspecialchars((string)$s, ENT_QUOTES);
?>
<!doctype html><html lang="en"><head><meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<meta name="robots" content="noindex,nofollow"><title>Kemet — Stats</title>
<style>
:root{--ink:#0B0907;--panel:#17130E;--line:rgba(217,180,90,.25);--gold:#D9B45A;--bright:#F7E6AE;--mut:#BEB399;--bone:#FBF6EC}
*{box-sizing:border-box;margin:0}body{background:var(--ink);color:var(--bone);font:15px/1.6 system-ui,sans-serif;padding:34px 20px}
.wrap{max-width:900px;margin:0 auto}h1{font-weight:500;color:var(--bright);font-size:1.4rem;margin-bottom:4px}
.sub{color:var(--mut);font-size:.85rem;margin-bottom:26px}
.cards{display:grid;grid-template-columns:repeat(auto-fit,minmax(150px,1fr));gap:12px;margin-bottom:26px}
.card{background:var(--panel);border:1px solid var(--line);border-radius:10px;padding:16px 18px}
.card b{display:block;font-size:1.7rem;color:var(--bright);font-weight:500}.card span{font-size:.75rem;color:var(--mut);letter-spacing:.08em;text-transform:uppercase}
h2{font-size:.8rem;letter-spacing:.18em;text-transform:uppercase;color:var(--gold);margin:26px 0 10px}
table{width:100%;border-collapse:collapse;background:var(--panel);border:1px solid var(--line);border-radius:10px;overflow:hidden}
td{padding:8px 14px;border-top:1px solid rgba(217,180,90,.1);font-size:.88rem}tr:first-child td{border-top:0}
td.n{text-align:right;color:var(--bright);font-variant-numeric:tabular-nums;width:70px}
.bar{display:flex;align-items:flex-end;gap:3px;height:90px;background:var(--panel);border:1px solid var(--line);border-radius:10px;padding:12px}
.bar i{flex:1;background:linear-gradient(180deg,var(--bright),var(--gold));border-radius:2px 2px 0 0;min-height:2px}
.links{margin-top:22px;font-size:.8rem}.links a{color:var(--gold)}
</style></head><body><div class="wrap">
<h1>Kemet — التقرير · Site Stats</h1>
<div class="sub">آخر <?= $days ?> يوم · Last <?= $days ?> days (UTC) — cookie-less, first-party</div>
<div class="cards">
<div class="card"><b><?= $fmt($pv) ?></b><span>Pageviews</span></div>
<div class="card"><b><?= $fmt($uv) ?></b><span>Visitors (approx)</span></div>
<div class="card"><b><?= $fmt($events["whatsapp"] ?? 0) ?></b><span>WhatsApp clicks</span></div>
<div class="card"><b><?= $fmt($events["form-submit"] ?? 0) ?></b><span>Form submits</span></div>
<div class="card"><b><?= $fmt(($devices["m"] ?? 0)) ?> / <?= $fmt(($devices["d"] ?? 0)) ?></b><span>Mobile / Desktop</span></div>
</div>
<h2>Traffic by day</h2>
<div class="bar"><?php foreach ($daysMap as $d => $n): ?><i title="<?= $esc($d) ?>: <?= $n ?>" style="height:<?= round($n / $maxDay * 100) ?>%"></i><?php endforeach; if (!$daysMap) echo '<span style="color:var(--mut);font-size:.85rem">No data yet — check back after some visits.</span>'; ?></div>
<h2>Conversion events</h2>
<table><?php foreach ($events as $k => $n): ?><tr><td><?= $esc($k) ?></td><td class="n"><?= $fmt($n) ?></td></tr><?php endforeach; if (!$events) echo '<tr><td style="color:var(--mut)">None yet</td></tr>'; ?></table>
<h2>Top pages</h2>
<table><?php foreach (array_slice($pages, 0, 15, true) as $k => $n): ?><tr><td><?= $esc($k) ?></td><td class="n"><?= $fmt($n) ?></td></tr><?php endforeach; if (!$pages) echo '<tr><td style="color:var(--mut)">None yet</td></tr>'; ?></table>
<h2>Referrers</h2>
<table><?php foreach (array_slice($refs, 0, 15, true) as $k => $n): ?><tr><td><?= $esc($k) ?></td><td class="n"><?= $fmt($n) ?></td></tr><?php endforeach; if (!$refs) echo '<tr><td style="color:var(--mut)">Direct only so far</td></tr>'; ?></table>
<div class="links">Range: <a href="?key=<?= $esc(ACCESS_KEY) ?>&days=7">7d</a> · <a href="?key=<?= $esc(ACCESS_KEY) ?>&days=30">30d</a> · <a href="?key=<?= $esc(ACCESS_KEY) ?>&days=90">90d</a></div>
</div></body></html>
