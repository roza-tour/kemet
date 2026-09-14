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
// ---------------------------------------------------------------------------

$to      = "info@kemet-travel.com";
$site    = "https://kemet-travel.com";
$dir     = __DIR__ . "/_stats";
$store   = $dir . "/subscribers.csv";

// The exact wording the box carried, stored with the record. If the wording
// changes, change this string too — the record must say what was agreed to.
$CONSENT_TEXT = "Yes — send me seasonal notes and first notice of limited dates. I can unsubscribe at any time.";

$wantsJson = (($_SERVER["HTTP_X_REQUESTED_WITH"] ?? "") === "fetch");

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
if (!empty($_POST["website"])) { respond(true, $wantsJson, "Thank you."); }

$email   = clean_line(mb_substr($_POST["email"]   ?? "", 0, 190));
$name    = clean_line(mb_substr($_POST["name"]    ?? "", 0, 120));
$source  = clean_line(mb_substr($_POST["source"]  ?? "invite", 0, 24));
$detail  = clean_line(mb_substr($_POST["detail"]  ?? "", 0, 600));
$locale  = clean_line(mb_substr($_POST["locale"]  ?? "en", 0, 8));
$consent = !empty($_POST["consent"]);

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
  respond(false, $wantsJson, "That email address does not look right.");
}
if (!$consent) {
  respond(false, $wantsJson, "Please tick the box so we know you want to hear from us.");
}

if (!is_dir($dir)) { @mkdir($dir, 0755, true); @file_put_contents("$dir/index.html", ""); }

// --- Already on the list? ---------------------------------------------------
// Re-submitting must not create a second row: two rows means two copies of
// every send and an unsubscribe that only removes one of them. The existing
// token is reused so an old unsubscribe link in an old email keeps working.
$token = "";
if (is_readable($store) && ($fh = fopen($store, "r")) !== false) {
  while (($row = fgetcsv($fh)) !== false) {
    if (isset($row[1]) && strcasecmp(trim($row[1]), $email) === 0) {
      $token = $row[6] ?? "";
      break;
    }
  }
  fclose($fh);
}
$already = $token !== "";
if (!$already) { $token = bin2hex(random_bytes(16)); }

// --- The consent record -----------------------------------------------------
// Columns: when, email, name, source, detail, locale, token, status, ip, wording
if (!$already) {
  $line = [
    gmdate("Y-m-d H:i"), $email, $name, $source, $detail, $locale,
    $token, "active", ($_SERVER["REMOTE_ADDR"] ?? ""), $CONSENT_TEXT,
  ];
  $out = fopen($store, "a");
  if ($out !== false) {
    flock($out, LOCK_EX);
    fputcsv($out, $line);
    flock($out, LOCK_UN);
    fclose($out);
    @chmod($store, 0600);
  }
}

// --- Tell the office --------------------------------------------------------
$headers = "From: Kemet <no-reply@kemet-travel.com>\r\nReply-To: " . $email
         . "\r\nContent-Type: text/plain; charset=UTF-8";
@mail(
  $to,
  ($already ? "List: returning — " : "List: new sign-up — ") . $email,
  "Source:  $source\nName:    $name\nEmail:   $email\nLocale:  $locale\n"
  . ($detail !== "" ? "Detail:  $detail\n" : "") . "When:    " . gmdate("Y-m-d H:i") . " UTC\n",
  $headers,
  "-fno-reply@kemet-travel.com"
);

// --- Confirm to the subscriber ---------------------------------------------
// Sent on every submission, including a repeat: someone who signs up twice has
// usually lost the first message, and it is also how they get the unsubscribe
// link if they have changed their mind.
$unsub = $site . "/unsubscribe.php?t=" . urlencode($token);
@mail(
  $email,
  "Kemet — you're on the list",
  "Thank you.\n\n"
  . "You will hear from us when the season turns in Egypt, and first when the\n"
  . "dates that genuinely run out open: the two mornings a year the sun reaches\n"
  . "the sanctuary at Abu Simbel, Christmas and New Year on the river, and the\n"
  . "dahabiya weeks.\n\n"
  . "A few times a year. Never more.\n\n"
  . "If you would rather not: $unsub\n\n"
  . "— Kemet\n$site\n",
  "From: Kemet <no-reply@kemet-travel.com>\r\nContent-Type: text/plain; charset=UTF-8",
  "-fno-reply@kemet-travel.com"
);

respond(true, $wantsJson, $already ? "You're already on the list — we've sent a reminder." : "You're on the list.");
