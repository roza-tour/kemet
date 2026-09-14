<?php
// ---------------------------------------------------------------------------
// Kemet — the desk. Two jobs that both amount to "who should hear from us, and
// what should it say", kept on one private page because they are the same task
// at two timescales.
//
//   1  FOLLOW-UPS DUE — every enquiry already written to _stats/enquiries.csv,
//      surfaced again at three, six and twelve months. A journey at this price
//      is decided over six to eighteen months, so an enquiry that did not book
//      this week is not a lost enquiry; it is one that was never asked again.
//      These are people who have already raised their hand. There is no cheaper
//      booking available to this business, and until now nothing read the file.
//
//   2  THIS SEASON'S DISPATCH — the subject and body for the seasonal note,
//      generated from the SAME calendar the site wears (seasons.json, emitted
//      from seasonalCalendar.ts). Fourteen windows a year means fourteen real
//      reasons to write, so there is no monthly newsletter to invent.
//
// Private: same password as the statistics page.
// ---------------------------------------------------------------------------

require __DIR__ . "/lib-auth.php";
kemet_require_login("Kemet desk");

$dir  = __DIR__ . "/_stats";
$site = "https://kemet-travel.com";
$today = new DateTimeImmutable("today", new DateTimeZone("UTC"));

// --- Subscribers ------------------------------------------------------------
$subs = ["active" => [], "off" => 0];
if (is_readable("$dir/subscribers.csv") && ($fh = fopen("$dir/subscribers.csv", "r")) !== false) {
  while (($r = fgetcsv($fh)) !== false) {
    if (count($r) < 8) { continue; }
    if (strpos((string) $r[7], "unsubscribed") === 0) { $subs["off"]++; continue; }
    $subs["active"][] = ["when" => $r[0], "email" => $r[1], "name" => $r[2],
                         "source" => $r[3], "detail" => $r[4] ?? ""];
  }
  fclose($fh);
}

// Export the active list for whatever actually sends the mail.
if (isset($_GET["export"])) {
  header("Content-Type: text/csv; charset=utf-8");
  header('Content-Disposition: attachment; filename="kemet-list-' . $today->format("Y-m-d") . '.csv"');
  $out = fopen("php://output", "w");
  fputcsv($out, ["email", "name", "joined", "source"]);
  foreach ($subs["active"] as $s) { fputcsv($out, [$s["email"], $s["name"], $s["when"], $s["source"]]); }
  exit;
}

// --- 1. Follow-ups due ------------------------------------------------------
// The milestones are where a decision actually gets revisited: a season later,
// half a year out, and the anniversary of the first enquiry.
$MILESTONES = [90 => "three months", 180 => "six months", 365 => "a year"];
$due = [];
if (is_readable("$dir/enquiries.csv") && ($fh = fopen("$dir/enquiries.csv", "r")) !== false) {
  while (($r = fgetcsv($fh)) !== false) {
    if (count($r) < 4 || !filter_var($r[3] ?? "", FILTER_VALIDATE_EMAIL)) { continue; }
    $when = DateTimeImmutable::createFromFormat("Y-m-d H:i", trim($r[0]), new DateTimeZone("UTC"));
    if (!$when) { continue; }
    $age = (int) $today->diff($when)->days;
    foreach ($MILESTONES as $d => $name) {
      // A seven-day window either side, so nothing is missed by not looking on
      // the exact day — and nothing is shown twice for the same milestone.
      if ($age >= $d && $age < $d + 7) {
        $due[] = ["name" => $r[2], "email" => $r[3], "when" => $r[0],
                  "age" => $age, "milestone" => $name, "message" => $r[6] ?? ""];
        break;
      }
    }
  }
  fclose($fh);
}
usort($due, static fn($a, $b) => $b["age"] <=> $a["age"]);

// --- 2. This season's dispatch ---------------------------------------------
$season = null;
$cal = @file_get_contents(__DIR__ . "/seasons.json");
if ($cal !== false && ($rows = json_decode($cal, true))) {
  $iso = $today->format("Y-m-d");
  foreach ($rows as $w) {
    if ($iso >= $w["start"] && $iso <= $w["end"]) {
      if ($season === null || $w["priority"] > $season["priority"]) { $season = $w; }
    }
  }
  // What is coming, so a dispatch can be written before it lands rather than
  // during it — which for a limited date is the only time it is any use.
  $next = null;
  foreach ($rows as $w) {
    if ($w["start"] > $iso && $w["priority"] >= 50) {
      if ($next === null || $w["start"] < $next["start"]) { $next = $w; }
    }
  }
}

$subject = $season ? $season["label"] . " — a note from Kemet" : "A note from Kemet";
$body = $season
  ? rtrim($season["note"]) . "\n\n"
    . "Egypt is not one country but eight, and this is the part of the year when "
    . ($season["priority"] >= 50
        ? "it is at its most itself. If you have been waiting for a reason, this is one."
        : "the country is best seen the way it is described above.")
    . "\n\n"
    . ($next ? "Coming next: " . $next["label"]
        . ($next["eventDate"] ? " — " . $next["eventDate"] : "")
        . ", opening " . $next["start"] . ".\n\n" : "")
    . "Every journey is private, led by your own licensed Egyptologist, and built\n"
    . "from your dates rather than a catalogue page.\n\n"
    . $site . "/" . $season["href"] . "\n\n"
    . "— Kemet\n"
  : "";

function h($v) { return htmlspecialchars((string) $v, ENT_QUOTES, "UTF-8"); }
?><!doctype html>
<html lang="en"><head>
<meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<meta name="robots" content="noindex, nofollow">
<title>Kemet — the desk</title>
<style>
  :root{--gold:#D9B45A;--gold-bright:#F7E6AE;--bone:#FBF6EC;--muted:#DAD0BB;
        --muted-2:#BEB399;--line:rgba(217,180,90,.22);--line-2:rgba(217,180,90,.42)}
  *{box-sizing:border-box;margin:0;padding:0}
  body{background:linear-gradient(180deg,#0C0A07,#080604);color:var(--bone);
       font-family:'Outfit',system-ui,sans-serif;font-weight:300;line-height:1.7;
       padding:40px 24px 80px}
  .wrap{max-width:1000px;margin:0 auto}
  h1{font-family:Georgia,serif;font-weight:300;font-size:2rem;color:var(--gold-bright);margin-bottom:6px}
  .sub{color:var(--muted-2);font-size:.85rem;margin-bottom:40px}
  .sub a{color:var(--gold)}
  h2{font-family:Georgia,serif;font-weight:300;font-size:1.35rem;color:var(--bone);
     margin:0 0 6px;padding-top:34px}
  .lede{color:var(--muted);font-size:.88rem;margin-bottom:20px;max-width:680px}
  .card{border:1px solid var(--line);border-radius:2px;padding:22px 24px;margin-bottom:12px;
        background:rgba(255,255,255,.02)}
  .who{color:var(--gold-bright);font-size:1rem}
  .meta{color:var(--muted-2);font-size:.78rem;margin-top:2px}
  .msg{color:var(--muted);font-size:.84rem;margin-top:10px;padding-left:12px;
       border-left:1px solid var(--line)}
  .act{margin-top:14px}
  .act a{display:inline-block;padding:9px 18px;border:1px solid var(--line-2);
         border-radius:2px;color:var(--gold);font-size:.72rem;letter-spacing:.16em;
         text-transform:uppercase;text-decoration:none;transition:.25s}
  .act a:hover{background:var(--gold);color:#0C0A07}
  .pill{display:inline-block;padding:3px 10px;border:1px solid var(--line-2);border-radius:999px;
        font-size:.64rem;letter-spacing:.16em;text-transform:uppercase;color:var(--gold);margin-left:8px}
  pre{white-space:pre-wrap;background:rgba(0,0,0,.35);border:1px solid var(--line);
      border-radius:2px;padding:20px 22px;color:var(--muted);font-size:.84rem;
      font-family:ui-monospace,Menlo,monospace;line-height:1.75;margin-top:10px}
  .k{color:var(--muted-2);font-size:.7rem;letter-spacing:.2em;text-transform:uppercase;
     display:block;margin-bottom:6px}
  .none{color:var(--muted-2);font-size:.88rem;font-style:italic}
  .num{color:var(--gold-bright);font-size:1.9rem;font-family:Georgia,serif}
  .row{display:flex;gap:34px;flex-wrap:wrap;margin-bottom:8px}
</style>
</head><body><div class="wrap">

<h1>The desk</h1>
<p class="sub"><?= $today->format("l, j F Y") ?> · <a href="stats.php">Statistics</a></p>

<h2>Follow-ups due</h2>
<p class="lede">Enquiries that came in three months, six months or a year ago
  today. They asked once; nobody asked them again. At this price a journey is
  decided over six to eighteen months, so these are not lost enquiries — they
  are the warmest addresses this business has.</p>

<?php if (!$due): ?>
  <p class="none">Nothing falls due today. Worth looking most weeks — the list
    is drawn from the enquiry log, so it fills itself.</p>
<?php else: foreach ($due as $d): ?>
  <div class="card">
    <div class="who"><?= h($d["name"] ?: $d["email"]) ?><span class="pill"><?= h($d["milestone"]) ?></span></div>
    <div class="meta"><?= h($d["email"]) ?> · first wrote <?= h($d["when"]) ?> · <?= (int) $d["age"] ?> days ago</div>
    <?php if (trim($d["message"]) !== ""): ?>
      <div class="msg"><?= h(mb_substr($d["message"], 0, 260)) ?></div>
    <?php endif; ?>
    <div class="act">
      <a href="mailto:<?= h($d["email"]) ?>?subject=<?= rawurlencode("Egypt — still thinking about it?") ?>&body=<?= rawurlencode(
        "Dear " . ($d["name"] ?: "there") . ",\n\n"
        . "You wrote to us about Egypt " . $d["milestone"] . " ago. No sales pitch —\n"
        . "just a note to say the offer stands and nothing has been shelved.\n\n"
        . ($season ? rtrim($season["note"]) . "\n\n" : "")
        . "If the timing was the problem, tell me roughly when suits and I will\n"
        . "tell you honestly whether it is the right month for what you wanted.\n\n"
        . "— Kemet\n" . $site . "\n") ?>">Write to them</a>
    </div>
  </div>
<?php endforeach; endif; ?>

<h2>This season's dispatch</h2>
<p class="lede">Generated from the same calendar the site wears, so it can never
  disagree with what a visitor is looking at. Fourteen windows a year — that is
  fourteen real reasons to write, and no newsletter to invent.</p>

<div class="row">
  <div><span class="k">On the list</span><span class="num"><?= count($subs["active"]) ?></span></div>
  <div><span class="k">Unsubscribed</span><span class="num"><?= (int) $subs["off"] ?></span></div>
  <div><span class="k">Running now</span><span class="num" style="font-size:1.1rem"><?= h($season["label"] ?? "—") ?></span></div>
</div>

<?php if ($season): ?>
  <div class="card">
    <span class="k">Subject</span><?= h($subject) ?>
    <pre><?= h($body) ?></pre>
    <p class="meta">Every message must carry the unsubscribe link —
      <?= h($site) ?>/unsubscribe.php?t=&lt;their token&gt; — or the next one lands in spam
      and the one after that does not land at all.</p>
    <div class="act"><a href="?export=1">Download the list (CSV)</a></div>
  </div>
<?php else: ?>
  <p class="none">No season could be read. seasons.json is missing — publish the
    site again and it will be there.</p>
<?php endif; ?>

</div></body></html>
