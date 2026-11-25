<?php
// ---------------------------------------------------------------------------
// Kemet — list sign-up handler (runs on the cPanel server, PHP mail()).
//
// One endpoint for both places a visitor can join the list: the access invite
// that appears once per visit, and the trip designer. Same store, same consent
// record, same unsubscribe token — because a second store would drift from the
// first and only one of them would ever get the unsubscribe right.
//
// WHAT IS DELIBERATELY NOT HERE
// No discount. The site's stated position is that it is not the cheapest and
// does not quote low to recover the difference later; a sign-up form offering
// money off would contradict that on the first screen a visitor sees, and
// would select for exactly the travellers this business does not want. What is
// offered instead is access: first notice of the dates that genuinely run out
// — the two Abu Simbel sun alignments, Christmas and New Year on the river,
// the dahabiya weeks.
//
// CONSENT (this list reaches the EU, so this is not optional)
// Nothing is stored without an explicitly ticked box — never pre-ticked, never
// implied by submitting. The record keeps when consent was given, from where,
// and what the box said at the time, because "we have their email" is not a
// lawful basis and a screenshot of today's form does not prove what last
// year's form asked. Every message carries a working one-click unsubscribe.
//
// DOUBLE OPT-IN (25 Nov 2026)
// A ticked box proves that someone ticked it, not that the address is theirs:
// anyone could type a stranger's email. So a new sign-up is stored as
// "pending" and the only message it triggers is a request to confirm. The
// address joins the list when its owner opens the link (confirm.php), and
// that moment — time and network address — is added to the record. Until
// then nothing else is ever sent to it, and the office is told only on
// confirmation.
// ---------------------------------------------------------------------------

$to      = "info@kemet-travel.com";
$site    = "https://kemet-travel.com";
$dir     = __DIR__ . "/_stats";
$store   = $dir . "/subscribers.csv";

// The exact wording the box carried, stored with the record. If the wording
// changes, change this string too — the record must say what was agreed to.
$CONSENT_TEXT = "Yes — send me seasonal notes and first notice of limited dates. I can unsubscribe at any time.";

$wantsJson = (($_SERVER["HTTP_X_REQUESTED_WITH"] ?? "") === "fetch");
// One answer for every outcome — new, pending, already confirmed, rate-limited
// or a bot — so the form cannot be used to find out who is on the list.
$SAME = "Almost done — please check your email.";

function respond($ok, $wantsJson, $msg = "") {
  if ($wantsJson) {
    header("Content-Type: application/json; charset=UTF-8");
    echo json_encode(["ok" => (bool)$ok, "message" => $msg]);
  } else {
    header("Location: /?subscribed=" . ($ok ? "1" : "0"));
  }
  exit;
}

if ($_SERVER["REQUEST_METHOD"] !== "POST") { respond(false, false); }

function clean_line($v) { return trim(str_replace(["\r", "\n"], " ", (string) $v)); }

// Honeypot: a hidden field humans never fill. Bots do — answer as if it worked
// so they stop retrying, and store nothing.
if (!empty($_POST["website"])) { respond(true, $wantsJson, $SAME); }

$email   = clean_line(mb_substr($_POST["email"]   ?? "", 0, 190));
$name    = clean_line(mb_substr($_POST["name"]    ?? "", 0, 120));
$source  = clean_line(mb_substr($_POST["source"]  ?? "invite", 0, 24));
$detail  = clean_line(mb_substr($_POST["detail"]  ?? "", 0, 600));
$locale  = clean_line(mb_substr($_POST["locale"]  ?? "en", 0, 8));
$consent = !empty($_POST["consent"]);
// The words next to the box, as that page showed them (each form posts its
// own label, in its own language). The record keeps what was agreed to, not
// one English sentence for every form.
$wording = clean_line(mb_substr($_POST["wording"] ?? "", 0, 300));
if ($wording === "") { $wording = $CONSENT_TEXT; }

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
  respond(false, $wantsJson, "That email address does not look right.");
}
if (!$consent) {
  respond(false, $wantsJson, "Please tick the box so we know you want to hear from us.");
}

if (!is_dir($dir)) { @mkdir($dir, 0755, true); @file_put_contents("$dir/index.html", ""); }

// --- Limits -----------------------------------------------------------------
// Every submission sends a confirmation to the address typed in. Without a
// limit that is a way to make this site mail a stranger as often as someone
// likes, from our domain, with a honeypot as the only obstacle. So:
//
//   · one confirmation per address per 24 hours — a second sign-up inside
//     that window is recorded as before but mails nobody;
//   · five submissions per network address per hour;
//   · forty confirmations an hour in total, whoever asks.
//
// Past a limit the visitor gets the same "thank you" as anyone else: the
// form is not a way to find out whether an address is rate-limited or already
// on the list. The log holds a time and two hashes, never the address itself,
// and is pruned to the last 24 hours each time it is written.
$rateFile = $dir . "/subscribe-rate.csv";
$now = time();
// Keyed hashes: a plain SHA-256 of an IPv4 address can be reversed by trying
// all four billion. The key lives beside the log and never leaves the server.
$keyFile = $dir . "/.subscribe-key";
if (!is_file($keyFile)) { @file_put_contents($keyFile, bin2hex(random_bytes(32))); @chmod($keyFile, 0600); }
$hkey = (string)@file_get_contents($keyFile);
$ipHash = substr(hash_hmac("sha256", "ip|" . ($_SERVER["REMOTE_ADDR"] ?? ""), $hkey), 0, 24);
$mailHash = substr(hash_hmac("sha256", "mail|" . strtolower($email), $hkey), 0, 24);
$recent = [];
if (is_readable($rateFile) && ($rf = fopen($rateFile, "r")) !== false) {
  while (($r = fgetcsv($rf)) !== false) {
    if (isset($r[2]) && (int)$r[0] > $now - 86400) $recent[] = $r;
  }
  fclose($rf);
}
$byIpHour = 0; $byMailDay = 0; $allHour = 0;
foreach ($recent as $r) {
  $hour = (int)$r[0] > $now - 3600;
  if ($hour) $allHour++;
  if ($hour && $r[1] === $ipHash) $byIpHour++;
  if ($r[2] === $mailHash) $byMailDay++;
}
$limited = $byIpHour >= 5 || $byMailDay >= 1 || $allHour >= 40;
if ($byIpHour >= 5) { respond(true, $wantsJson, $SAME); }
$recent[] = [$now, $ipHash, $mailHash];
if (($rf = @fopen($rateFile, "c+")) !== false) {
  flock($rf, LOCK_EX);
  ftruncate($rf, 0);
  foreach ($recent as $r) fputcsv($rf, $r);
  flock($rf, LOCK_UN);
  fclose($rf);
  @chmod($rateFile, 0600);
}

// --- Already on the list? ---------------------------------------------------
// Re-submitting must not create a second row: two rows means two copies of
// every send and an unsubscribe that only removes one of them. The existing
// token is reused so an old unsubscribe link in an old email keeps working.
$token = ""; $status = "";
if (is_readable($store) && ($fh = fopen($store, "r")) !== false) {
  while (($row = fgetcsv($fh)) !== false) {
    if (isset($row[1]) && strcasecmp(trim($row[1]), $email) === 0) {
      $token = $row[6] ?? "";
      $status = (string)($row[7] ?? "");
      break;
    }
  }
  fclose($fh);
}
$already = $token !== "";
// Confirmed and still subscribed. A pending or unsubscribed address is asked
// to confirm (again) rather than being told it is on a list it is not on.
$confirmed = $already && $status === "active";
if (!$already) { $token = bin2hex(random_bytes(16)); }
$cell = function ($v) { $v = (string)$v; return preg_match('/^(?:[=@\t]|[+-](?![\d\s(]))/', $v) ? "'" . $v : $v; };

// Someone who left the list and signs up again starts again as pending, with
// this sign-up's time, wording and address — the old consent was withdrawn
// and cannot stand for the new one. (Before 26 Nov 2026 the old row was kept
// and confirm.php refused it, so a person who had left could never rejoin.)
if ($already && strpos($status, "unsubscribed") === 0 && !$limited && ($fh = fopen($store, "r+")) !== false) {
  flock($fh, LOCK_EX);
  $rows = [];
  while (($row = fgetcsv($fh)) !== false) {
    if (isset($row[6]) && hash_equals((string)$row[6], $token)) {
      $row = array_map($cell, [
        gmdate("Y-m-d H:i"), $email, $name, $source, $detail, $locale,
        $token, "pending", ($_SERVER["REMOTE_ADDR"] ?? ""), $wording, "",
      ]);
    }
    $rows[] = $row;
  }
  ftruncate($fh, 0); rewind($fh);
  foreach ($rows as $row) { fputcsv($fh, $row); }
  flock($fh, LOCK_UN);
  fclose($fh);
}

// --- The consent record -----------------------------------------------------
// Columns: when, email, name, source, detail, locale, token, status, ip,
// wording, confirmed (time and network address, added by confirm.php).
// A cell that a spreadsheet would read as a formula gets a leading apostrophe.
if (!$already) {
  $line = array_map($cell, [
    gmdate("Y-m-d H:i"), $email, $name, $source, $detail, $locale,
    $token, "pending", ($_SERVER["REMOTE_ADDR"] ?? ""), $wording, "",
  ]);
  $out = fopen($store, "a");
  if ($out !== false) {
    flock($out, LOCK_EX);
    fputcsv($out, $line);
    flock($out, LOCK_UN);
    fclose($out);
    @chmod($store, 0600);
  }
}

// Past a limit: recorded above if it was new, but nobody is mailed.
if ($limited) { respond(true, $wantsJson, $SAME); }

// --- Write to the address --------------------------------------------------
// Already confirmed: a reminder with the unsubscribe link (someone who signs up
// twice has usually lost the first message). Otherwise: a request to confirm,
// and nothing more until it is answered.
$unsub = $site . "/unsubscribe.php?t=" . urlencode($token);
$confirmUrl = $site . "/confirm.php?t=" . urlencode($token);
$from = "From: Kemet <no-reply@kemet-travel.com>\r\nContent-Type: text/plain; charset=UTF-8";
if ($confirmed) {
  @mail(
    $email,
    "Kemet — you're on the list",
    "You are already on our list.\n\n"
    . "You will hear from us when the season turns in Egypt, and first when the\n"
    . "dates that genuinely run out open. A few times a year. Never more.\n\n"
    . "If you would rather not: $unsub\n\n"
    . "— Kemet\n$site\n",
    $from,
    "-fno-reply@kemet-travel.com"
  );
} else {
  @mail(
    $email,
    "Kemet — please confirm your address",
    "Someone, probably you, asked to join Kemet's list with this address.\n\n"
    . "To confirm, open this link:\n$confirmUrl\n\n"
    . "Until you do, nothing else will be sent to you. If it was not you, ignore\n"
    . "this message and you will not hear from us again.\n\n"
    . "— Kemet\n$site\n",
    $from,
    "-fno-reply@kemet-travel.com"
  );
}

respond(true, $wantsJson, $SAME);
