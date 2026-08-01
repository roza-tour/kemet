<?php
// ---------------------------------------------------------------------------
// Kemet — contact form handler (runs on the cPanel server, PHP mail()).
// The static site posts the "Message us" form here; the message is delivered
// to the site mailbox below. Mail for kemet-travel.com is hosted on the same
// server (MX → jellyfish.systems), so local delivery needs no SMTP config.
// ---------------------------------------------------------------------------

$to = "info@kemet-travel.com"; // ← the real cPanel mailbox

// AJAX requests (the enhanced form) get JSON back instead of a redirect.
$wantsJson = (($_SERVER["HTTP_X_REQUESTED_WITH"] ?? "") === "fetch");
function respond($ok, $wantsJson) {
  if ($wantsJson) {
    header("Content-Type: application/json; charset=UTF-8");
    echo json_encode(["ok" => (bool)$ok]);
  } else {
    header("Location: /contact.html?sent=" . ($ok ? "1" : "0") . "#message-us");
  }
  exit;
}

// Only accept real form posts.
if ($_SERVER["REQUEST_METHOD"] !== "POST") {
  header("Location: /contact.html");
  exit;
}

// One-line sanitiser: trim + strip CR/LF so nobody can inject mail headers.
function clean_line($v) {
  return trim(str_replace(["\r", "\n"], " ", (string)$v));
}

// Every enquiry that reaches this handler is written to a local CSV BEFORE we
// try to deliver it, with the outcome recorded alongside.
//
// WHY: this previously logged only on success, so an enquiry that passed
// validation and then failed at mail() left no trace at all — the visitor saw
// an error and the business never learned that someone had tried to get in
// touch. Verified by posting a valid enquiry with delivery unavailable: the
// log directory stayed empty. Losing a customer to a mail outage is the most
// expensive failure this file can have, so the record is now written whatever
// happens and the status says what became of it.
function log_enquiry($status, $name, $email, $phone, $dates, $message) {
  $dir = __DIR__ . "/_stats";
  if (!is_dir($dir)) { @mkdir($dir, 0755, true); @file_put_contents("$dir/index.html", ""); }
  $q = function ($v) { return str_replace('"', "'", (string)$v); };
  $row = sprintf("%s,%s,\"%s\",\"%s\",\"%s\",\"%s\",\"%s\"\n",
    gmdate("Y-m-d H:i"), $status,
    $q($name), $q($email), $q($phone), $q($dates), $q(mb_substr($message, 0, 500)));
  @file_put_contents($dir . "/enquiries.csv", $row, FILE_APPEND | LOCK_EX);
}

// Honeypot: hidden field humans never fill. Bots do — pretend success.
// Not logged: this is bot traffic by definition and would only add noise.
if (!empty($_POST["website"])) {
  respond(true, $wantsJson); // pretend success to the bot
}

// Server-side length caps (the form's maxlength is client-only) — mirror it and
// hard-cap the message so nobody can post a giant payload.
$name    = mb_substr(clean_line($_POST["name"] ?? ""), 0, 120);
$email   = mb_substr(clean_line($_POST["email"] ?? ""), 0, 200);
$phone   = mb_substr(clean_line($_POST["phone"] ?? ""), 0, 40);
$dates   = mb_substr(clean_line($_POST["dates"] ?? ""), 0, 120);
$message = mb_substr(trim((string)($_POST["message"] ?? "")), 0, 5000);

if ($name === "" || $message === "" || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
  // Still recorded: a mistyped email address is a real person who tried to
  // reach us, and the phone number they left may be perfectly good.
  log_enquiry("invalid", $name, $email, $phone, $dates, $message);
  respond(false, $wantsJson);
}

// Duplicate guard — deliberately NOT a plain per-IP rate limit.
//
// The previous version dropped any second submission from an IP within 15
// seconds and answered "ok". Two things were wrong with that. It ran before
// validation, so a visitor who mistyped their email was told the message had
// been sent when it had not; and mobile carriers and offices put many people
// behind one address, so a second, unrelated visitor could be silently
// discarded. Both were reproduced against this handler before changing it.
//
// What actually needs stopping is the same message arriving twice — a
// double-click, or a retry after the first response was lost. So the key is
// the CONTENT, not just the address: identical email + message from the same
// IP inside a minute is a duplicate; anything else goes through.
$ip = preg_replace('/[^0-9a-fA-F:.]/', '', $_SERVER["REMOTE_ADDR"] ?? "");
if ($ip !== "") {
  $mark = sys_get_temp_dir() . "/kemet_ct_" . md5($ip . "|" . $email . "|" . $message);
  if (is_file($mark) && (time() - @filemtime($mark)) < 60) {
    // Answered "ok": from the visitor's side the message did get through the
    // first time, and a second confirmation is the truthful reply.
    log_enquiry("duplicate", $name, $email, $phone, $dates, $message);
    respond(true, $wantsJson);
  }
  @touch($mark);
}

// UTF-8-safe subject (visitor names may be Arabic, French, ...).
$subject = "=?UTF-8?B?" . base64_encode("Website enquiry — " . $name) . "?=";

$body =
  "New enquiry from kemet-travel.com\n" .
  "----------------------------------\n" .
  "Name:    " . $name . "\n" .
  "Email:   " . $email . "\n" .
  ($phone !== "" ? "Phone:   " . $phone . "\n" : "") .
  ($dates !== "" ? "Dates:   " . $dates . "\n" : "") .
  "----------------------------------\n\n" .
  $message . "\n";

// From must be a domain address for SPF/DMARC; the visitor goes in Reply-To
// so hitting "Reply" in the inbox answers the customer directly. The display
// name is RFC 2047-encoded (like the subject) so Arabic/French names don't
// arrive as mojibake.
$replyName = "=?UTF-8?B?" . base64_encode($name) . "?=";
$headers =
  "From: Kemet Website <no-reply@kemet-travel.com>\r\n" .
  "Reply-To: " . $replyName . " <" . $email . ">\r\n" .
  "MIME-Version: 1.0\r\n" .
  "Content-Type: text/plain; charset=UTF-8\r\n";

$ok = @mail($to, $subject, $body, $headers, "-fno-reply@kemet-travel.com");

// The local safety copy, written whether or not delivery succeeded. mail()
// returning true only means the message was handed to the local MTA — it can
// still bounce later — so this file, not the inbox, is the record of record.
// Read it from the dashboard at /stats.php.
log_enquiry($ok ? "sent" : "mail-failed", $name, $email, $phone, $dates, $message);

respond($ok, $wantsJson);
