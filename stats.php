<?php
// ---------------------------------------------------------------------------
// Kemet — private analytics dashboard. Reads the CSVs written by k.php.
// Access requires the secret key (PHP source is executed, never served, so
// the key is not exposed to visitors):
//     https://kemet-travel.com/stats.php?key=33884d66d157f9539b8e70a2
// Change ACCESS_KEY below any time to rotate access.
//
// The report answers, in order: how many, where from, who (language), what
// they read, how deeply they read it, what they clicked, and where they drop
// out of the enquiry. Every number comes from our own server — there is no
// third-party script anywhere on the site.
// ---------------------------------------------------------------------------
const ACCESS_KEY = "33884d66d157f9539b8e70a2";

if (!hash_equals(ACCESS_KEY, (string)($_GET["key"] ?? ""))) {
  http_response_code(404);           // look like any other missing page
  header("Location: /404.html"); exit;
}

$dir   = __DIR__ . "/_stats";
$days  = max(7, min(90, (int)($_GET["days"] ?? 30)));
$since = new DateTimeImmutable("-" . ($days - 1) . " days", new DateTimeZone("UTC"));

// Load the CSV months that overlap the window. Rows written before the schema
// widened carry only six columns, so every row is padded to ten — old and new
// data report side by side rather than the older half silently dropping out.
$rows = [];
for ($m = 0; $m <= 3; $m++) {
  $f = $dir . "/" . gmdate("Y-m", strtotime("-$m month")) . ".csv";
  if (!is_file($f)) continue;
  foreach (file($f, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES) as $line) {
    $c = str_getcsv($line);
    if (count($c) < 6 || $c[0] < $since->format("Y-m-d")) continue;
    $rows[] = array_pad($c, 10, "");
  }
}
// Month files are read newest-first; landing pages depend on real chronology.
usort($rows, fn($a, $b) => strcmp($a[0], $b[0]));

/** Human label for a recorded path — "/" is the home page, not a mystery URL. */
function pageLabel(string $p): string {
  if ($p === "" || $p === "/") return "/ — Home page";
  if (preg_match('~^/(de|it|es)/$~', $p, $m)) return $p . " — Home (" . strtoupper($m[1]) . ")";
  return $p;
}

$daysMap = $pages = $refs = $events = $devices = $langs = $camps = [];
$landing = $picks = $broken = [];
$visitors = $seenVisit = $hitsPerVisit = [];
$depthSum = $depthN = $timeSum = $timeN = [];
$engTotal = $engCount = $depthTotal = $depthCount = 0;

foreach ($rows as $c) {
  [$dt, $t, $vid, $page, $extra, $dev, $lang, $query, $detail, $num] = $c;
  $day   = substr($dt, 0, 10);
  $visit = $day . $vid;               // one "visit" = one visitor on one day

  if ($t === "404") {                 // never counted as a pageview
    $broken[$page] = ($broken[$page] ?? 0) + 1;
    continue;
  }

  if ($t === "pv") {
    $daysMap[$day] = ($daysMap[$day] ?? 0) + 1;
    $pages[$page]  = ($pages[$page] ?? 0) + 1;
    $devices[$dev] = ($devices[$dev] ?? 0) + 1;
    $visitors[$visit] = 1;
    $hitsPerVisit[$visit] = ($hitsPerVisit[$visit] ?? 0) + 1;
    if ($extra !== "") $refs[$extra] = ($refs[$extra] ?? 0) + 1;
    if ($lang  !== "") $langs[substr($lang, 0, 2)] = ($langs[substr($lang, 0, 2)] ?? 0) + 1;
    if ($query !== "") $camps[$query] = ($camps[$query] ?? 0) + 1;
    // First page of the visit — what actually brings people to the site.
    if (!isset($seenVisit[$visit])) {
      $seenVisit[$visit] = 1;
      $landing[$page] = ($landing[$page] ?? 0) + 1;
    }
    continue;
  }

  // --- events ---------------------------------------------------------------
  $events[$extra] = ($events[$extra] ?? 0) + 1;
  if ($extra === "pick" && $detail !== "") {
    $picks[$detail] = ($picks[$detail] ?? 0) + 1;
  } elseif ($extra === "end") {
    $sec = (int)$detail;
    if ($sec > 0) {
      $timeSum[$page] = ($timeSum[$page] ?? 0) + $sec;
      $timeN[$page]   = ($timeN[$page] ?? 0) + 1;
      $engTotal += $sec; $engCount++;
    }
    $d = (int)$num;
    if ($d > 0) {
      $depthSum[$page] = ($depthSum[$page] ?? 0) + $d;
      $depthN[$page]   = ($depthN[$page] ?? 0) + 1;
      $depthTotal += $d; $depthCount++;
    }
  }
}

arsort($pages); arsort($refs); arsort($events); arsort($langs);
arsort($camps); arsort($landing); arsort($picks); arsort($broken);
ksort($daysMap);

$pv       = array_sum($daysMap);
$uv       = count($visitors);
$maxDay   = max(1, $daysMap ? max($daysMap) : 1);
$perVisit = $uv ? $pv / $uv : 0;
$oneAndOut = count(array_filter($hitsPerVisit, fn($n) => $n === 1));
$avgEng   = $engCount   ? (int)round($engTotal / $engCount)     : 0;
$avgDeep  = $depthCount ? (int)round($depthTotal / $depthCount) : 0;

// Enquiry funnel — the only sequence on the site that ends in a booking.
$fStart = $events["form-start"]  ?? 0;
$fSend  = $events["form-submit"] ?? 0;
$wa     = $events["whatsapp"]    ?? 0;
$reach  = $wa + $fSend + ($events["email"] ?? 0) + ($events["phone"] ?? 0);

// Language code → the market it stands for. The site is published in English,
// German, Italian and Spanish; anything large here outside those four is the
// next translation worth paying for.
const LANG_NAMES = [
  "en" => "English", "de" => "Deutsch · German", "it" => "Italiano · Italian",
  "es" => "Español · Spanish", "fr" => "Français · French", "ar" => "العربية · Arabic",
  "pt" => "Português · Portuguese", "nl" => "Nederlands · Dutch", "pl" => "Polski · Polish",
  "ru" => "Русский · Russian", "tr" => "Türkçe · Turkish", "sv" => "Svenska · Swedish",
  "da" => "Dansk · Danish", "no" => "Norsk · Norwegian", "nb" => "Norsk · Norwegian",
  "fi" => "Suomi · Finnish", "cs" => "Čeština · Czech", "el" => "Ελληνικά · Greek",
  "he" => "עברית · Hebrew", "hu" => "Magyar · Hungarian", "ro" => "Română · Romanian",
  "uk" => "Українська · Ukrainian", "zh" => "中文 · Chinese", "ja" => "日本語 · Japanese",
  "ko" => "한국어 · Korean", "hi" => "हिन्दी · Hindi", "id" => "Bahasa Indonesia",
  "th" => "ไทย · Thai", "vi" => "Tiếng Việt · Vietnamese",
];

// --- Enquiries -------------------------------------------------------------
// contact-handler.php writes a row for every enquiry it receives, whatever
// became of it. That file — not the mailbox — is the record of record: mail()
// reporting success only means the message reached the local mail server, and
// a delivery failure used to leave no trace at all. Surfacing it here is the
// difference between noticing a broken mailbox today and noticing it in a
// month, after the enquiries are gone.
//
// Rows written before the status column existed have six fields and were only
// ever written on success, so they are read as "sent".
const ENQ_STATUS = ["sent", "mail-failed", "invalid", "duplicate", "throttled"];
$enquiries = [];
$enqFile = $dir . "/enquiries.csv";
if (is_file($enqFile)) {
  foreach (file($enqFile, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES) as $line) {
    $c = str_getcsv($line);
    if (count($c) < 6) continue;
    if (!in_array($c[1] ?? "", ENQ_STATUS, true)) array_splice($c, 1, 0, "sent");
    $enquiries[] = array_pad(array_slice($c, 0, 7), 7, "");
  }
}
// Sort by timestamp, not by file order: a hand-restored or back-filled row
// would otherwise jump to the top purely because it was appended last.
usort($enquiries, fn($a, $b) => strcmp($b[0], $a[0]));        // newest first
$enqRecent = array_filter($enquiries, fn($e) => $e[0] >= $since->format("Y-m-d"));
$enqFailed = array_values(array_filter($enquiries, fn($e) => $e[1] === "mail-failed"));

$fmt = fn($n) => number_format($n);
$esc = fn($s) => htmlspecialchars((string)$s, ENT_QUOTES);
$pct = fn($n, $d) => $d > 0 ? round($n / $d * 100) . "%" : "—";
$mmss = fn(int $s) => $s >= 60
  ? intdiv($s, 60) . "m " . str_pad((string)($s % 60), 2, "0", STR_PAD_LEFT) . "s"
  : $s . "s";

/** One "label · bar · count" table, sorted and capped. */
$table = function (array $data, int $limit, ?callable $label = null, string $empty = "None yet") use ($esc, $fmt) {
  if (!$data) { echo '<table><tr><td style="color:var(--mut)">' . $empty . '</td></tr></table>'; return; }
  $max = max($data);
  echo '<table>';
  foreach (array_slice($data, 0, $limit, true) as $k => $n) {
    printf('<tr><td>%s<i class="in" style="width:%s%%"></i></td><td class="n">%s</td></tr>',
      $esc($label ? $label($k) : $k), max(1, round($n / $max * 100)), $fmt($n));
  }
  echo '</table>';
};
?>
<!doctype html><html lang="en"><head><meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<meta name="robots" content="noindex,nofollow"><title>Kemet — Stats</title>
<style>
:root{--ink:#0B0907;--panel:#17130E;--line:rgba(217,180,90,.25);--gold:#D9B45A;--bright:#F7E6AE;--mut:#BEB399;--bone:#FBF6EC}
*{box-sizing:border-box;margin:0}body{background:var(--ink);color:var(--bone);font:15px/1.6 system-ui,sans-serif;padding:34px 20px}
.wrap{max-width:960px;margin:0 auto}h1{font-weight:500;color:var(--bright);font-size:1.4rem;margin-bottom:4px}
.sub{color:var(--mut);font-size:.85rem;margin-bottom:26px}
.cards{display:grid;grid-template-columns:repeat(auto-fit,minmax(148px,1fr));gap:12px;margin-bottom:26px}
.card{background:var(--panel);border:1px solid var(--line);border-radius:10px;padding:16px 18px}
.card b{display:block;font-size:1.6rem;color:var(--bright);font-weight:500}
.card span{font-size:.72rem;color:var(--mut);letter-spacing:.07em;text-transform:uppercase}
h2{font-size:.8rem;letter-spacing:.18em;text-transform:uppercase;color:var(--gold);margin:30px 0 6px}
.note{color:var(--mut);font-size:.78rem;margin-bottom:10px;max-width:74ch}
.note code{color:var(--bright);font-size:.95em}
table{width:100%;border-collapse:collapse;background:var(--panel);border:1px solid var(--line);border-radius:10px;overflow:hidden}
td{padding:8px 14px;border-top:1px solid rgba(217,180,90,.1);font-size:.88rem;position:relative;word-break:break-word}
tr:first-child td{border-top:0}
td.n{text-align:right;color:var(--bright);font-variant-numeric:tabular-nums;width:80px}
td.n2{text-align:right;color:var(--mut);font-variant-numeric:tabular-nums;width:92px;font-size:.82rem}
.in{position:absolute;left:0;bottom:0;height:2px;background:linear-gradient(90deg,var(--gold),rgba(217,180,90,0));opacity:.55}
.bar{display:flex;align-items:flex-end;gap:3px;height:90px;background:var(--panel);border:1px solid var(--line);border-radius:10px;padding:12px}
.bar i{flex:1;background:linear-gradient(180deg,var(--bright),var(--gold));border-radius:2px 2px 0 0;min-height:2px}
.fun{display:grid;grid-template-columns:repeat(auto-fit,minmax(132px,1fr));gap:10px}
.fun div{background:var(--panel);border:1px solid var(--line);border-radius:10px;padding:14px 16px}
.fun b{display:block;color:var(--bright);font-size:1.3rem;font-weight:500}
.fun span{display:block;font-size:.7rem;color:var(--mut);text-transform:uppercase;letter-spacing:.07em}
.fun em{font-style:normal;color:var(--gold);font-size:.74rem}
.cols{display:grid;grid-template-columns:1fr 1fr;gap:20px;align-items:start}
@media(max-width:760px){.cols{grid-template-columns:1fr}}
.links{margin-top:26px;font-size:.8rem}.links a{color:var(--gold)}
.card--alarm{border-color:rgba(224,122,95,.65);background:rgba(224,122,95,.09)}
.card--alarm b{color:#F0A88F}
.alarm{background:rgba(224,122,95,.1);border:1px solid rgba(224,122,95,.5);border-radius:10px;padding:14px 18px;margin-bottom:22px;font-size:.86rem;line-height:1.65;color:#F3CBBC}
.alarm b{display:block;color:#F0A88F;margin-bottom:4px}
.enq td b{font-weight:500;color:var(--bone)}
.enq td a{color:var(--gold)}
.enq-msg{color:var(--mut);font-size:.82rem;margin-top:5px;line-height:1.6}
.tag{display:inline-block;font-size:.6rem;letter-spacing:.14em;text-transform:uppercase;border:1px solid var(--line);padding:2px 7px;margin-right:8px;color:var(--mut);vertical-align:1px}
.tag--sent{color:#9FD4A8;border-color:rgba(159,212,168,.45)}
.tag--mail-failed{color:#F0A88F;border-color:rgba(240,168,143,.6)}
.tag--invalid{color:#E6CE8A;border-color:rgba(230,206,138,.45)}
</style></head><body><div class="wrap">
<h1>Kemet — التقرير · Site Stats</h1>
<div class="sub">آخر <?= $days ?> يوم · Last <?= $days ?> days (UTC) — cookie-less, first-party, no third-party scripts</div>

<div class="cards">
<div class="card"><b><?= $fmt($pv) ?></b><span>Pageviews</span></div>
<div class="card"><b><?= $fmt($uv) ?></b><span>Visits (approx)</span></div>
<div class="card"><b><?= number_format($perVisit, 1) ?></b><span>Pages / visit</span></div>
<div class="card"><b><?= $mmss($avgEng) ?></b><span>Avg time on page</span></div>
<div class="card"><b><?= $avgDeep ?>%</b><span>Avg read depth</span></div>
<div class="card"><b><?= $fmt($reach) ?></b><span>Contact actions</span></div>
<div class="card"><b><?= $fmt($devices["m"] ?? 0) ?> / <?= $fmt($devices["t"] ?? 0) ?> / <?= $fmt($devices["d"] ?? 0) ?></b><span>Mobile / Tablet / Desktop</span></div>
<div class="card"><b><?= $pct($oneAndOut, $uv) ?></b><span>Single-page visits</span></div>
<div class="card<?= $enqFailed ? ' card--alarm' : '' ?>"><b><?= $fmt(count($enqRecent)) ?><?= $enqFailed ? ' / ' . $fmt(count($enqFailed)) : '' ?></b><span>Enquiries<?= $enqFailed ? ' / undelivered' : '' ?></span></div>
</div>

<?php if ($enqFailed): ?>
<div class="alarm">
  <b>&#9888; <?= $fmt(count($enqFailed)) ?> enquir<?= count($enqFailed) === 1 ? 'y was' : 'ies were' ?> not delivered by email.</b>
  The people below wrote to you and the message never reached the inbox — check the
  mailbox on the server, then reply to them directly. Their details are safe here.
</div>
<?php endif; ?>

<h2>Traffic by day</h2>
<div class="bar"><?php foreach ($daysMap as $d => $n): ?><i title="<?= $esc($d) ?>: <?= $n ?>" style="height:<?= round($n / $maxDay * 100) ?>%"></i><?php endforeach; if (!$daysMap) echo '<span style="color:var(--mut);font-size:.85rem">No data yet — check back after some visits.</span>'; ?></div>

<h2>Enquiry funnel</h2>
<div class="note">Where people stop. A wide gap between “form started” and “form sent” is a form problem, not a traffic problem.</div>
<div class="fun">
  <div><b><?= $fmt($uv) ?></b><span>Visits</span></div>
  <div><b><?= $fmt($fStart) ?></b><span>Form started</span><em><?= $pct($fStart, $uv) ?> of visits</em></div>
  <div><b><?= $fmt($fSend) ?></b><span>Form sent</span><em><?= $pct($fSend, $fStart) ?> of started</em></div>
  <div><b><?= $fmt($wa) ?></b><span>WhatsApp</span><em><?= $pct($wa, $uv) ?> of visits</em></div>
  <div><b><?= $fmt($reach) ?></b><span>Any contact</span><em><?= $pct($reach, $uv) ?> of visits</em></div>
</div>

<div class="cols">
<div>
  <h2>Landing pages</h2>
  <div class="note">The first page of each visit — what actually brings people in.</div>
  <?php $table($landing, 12, 'pageLabel'); ?>
</div>
<div>
  <h2>Top pages</h2>
  <div class="note">All pageviews. “/” is the home page: every visit that arrives without a deeper URL lands there, so it leads by design.</div>
  <?php $table($pages, 12, 'pageLabel'); ?>
</div>
</div>

<div class="cols">
<div>
  <h2>Visitor languages</h2>
  <div class="note">Browser language per visit. A market that is large here and not yet translated is the next language worth publishing.</div>
  <?php $table($langs, 14, fn($k) => (LANG_NAMES[$k] ?? $k) . "  ($k)", "No language data yet"); ?>
</div>
<div>
  <h2>Referrers</h2>
  <div class="note">The site that sent the visit. Absent means typed, bookmarked, or opened from an app that strips the referrer.</div>
  <?php $table($refs, 14, null, "Direct only so far"); ?>
</div>
</div>

<h2>Campaign tags on the landing URL</h2>
<div class="note">Whatever followed “?” on the page someone arrived at. This is what separates visits that would otherwise all read as plain “/”. Tag the links you post — <code>?utm_source=instagram</code> — and each one appears here on its own line.</div>
<?php $table($camps, 15, null, "No tagged links yet — add ?utm_source=… to links you post"); ?>

<h2>Most-clicked journeys &amp; cards</h2>
<div class="note">Which journey, destination, experience or season card pulled the click. This is the demand signal: what to offer more of, and what is being ignored.</div>
<?php $table($picks, 20, null, "No card clicks recorded yet"); ?>

<h2>How deeply each page is read</h2>
<div class="note">Average visible, active seconds and how far down the page the visitor actually got. High traffic with a low read depth means the opening is not landing.</div>
<?php
$attn = [];
foreach ($timeN as $p => $n)  $attn[$p] = $n;
foreach ($depthN as $p => $n) $attn[$p] = max($attn[$p] ?? 0, $n);
arsort($attn);
if (!$attn) {
  echo '<table><tr><td style="color:var(--mut)">No engagement data yet</td></tr></table>';
} else {
  echo '<table>';
  foreach (array_slice($attn, 0, 15, true) as $p => $n) {
    $s = ($timeN[$p]  ?? 0) ? (int)round($timeSum[$p]  / $timeN[$p])  : 0;
    $d = ($depthN[$p] ?? 0) ? (int)round($depthSum[$p] / $depthN[$p]) : 0;
    printf('<tr><td>%s</td><td class="n2">%s</td><td class="n">%d%%</td></tr>',
      $esc(pageLabel($p)), $esc($mmss($s)), $d);
  }
  echo '</table>';
}
?>

<h2>Conversion &amp; interaction events</h2>
<?php $table($events, 16); ?>

<h2>Broken links people hit (404)</h2>
<div class="note">Real visitors landing on a URL that does not exist. Anything here with a meaningful count is either a wrong link on the site, or a page worth actually creating.</div>
<?php $table($broken, 15, null, "None — no visitor hit a missing page"); ?>

<h2>Enquiries</h2>
<div class="note">Every message the contact form received, newest first, with what became of it. <b>sent</b> reached the mail server · <b>mail-failed</b> did not — reply to those by hand · <b>invalid</b> failed validation, but the phone number may still be good · <b>duplicate</b> is the same message submitted twice.</div>
<?php if (!$enquiries): ?>
<table><tr><td style="color:var(--mut)">No enquiries recorded yet</td></tr></table>
<?php else: ?>
<table>
<?php foreach (array_slice($enquiries, 0, 25) as $e): [$when, $status, $nm, $em, $ph, $dt, $msg] = $e; ?>
  <tr class="enq enq--<?= $esc($status) ?>">
    <td>
      <span class="tag tag--<?= $esc($status) ?>"><?= $esc($status) ?></span>
      <b><?= $esc($nm) ?></b>
      <a href="mailto:<?= $esc($em) ?>"><?= $esc($em) ?></a>
      <?= $ph !== "" ? " · " . $esc($ph) : "" ?>
      <?= $dt !== "" ? " · dates: " . $esc($dt) : "" ?>
      <div class="enq-msg"><?= $esc($msg) ?></div>
    </td>
    <td class="n2"><?= $esc($when) ?></td>
  </tr>
<?php endforeach; ?>
</table>
<?php endif; ?>

<div class="links">Range:
  <a href="?key=<?= $esc(ACCESS_KEY) ?>&days=7">7d</a> ·
  <a href="?key=<?= $esc(ACCESS_KEY) ?>&days=30">30d</a> ·
  <a href="?key=<?= $esc(ACCESS_KEY) ?>&days=90">90d</a>
</div>
</div></body></html>
