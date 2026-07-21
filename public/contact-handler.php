<?php
// ---------------------------------------------------------------------------
// Kemet — contact form handler (runs on the cPanel server, PHP mail()).
// The static site posts the "Message us" form here; the message is delivered
// to the site mailbox below. Mail for kemet-travel.com is hosted on the same
// server (MX → jellyfish.systems), so local delivery needs no SMTP config.
// ---------------------------------------------------------------------------

$to = "info@kemet-travel.com"; // ← the real cPanel mailbox

// Only accept real form posts.
if ($_SERVER["REQUEST_METHOD"] !== "POST") {
  header("Location: /contact.html");
  exit;
}

// Honeypot: hidden field humans never fill. Bots do — pretend success.
if (!empty($_POST["website"])) {
  header("Location: /contact.html?sent=1#message-us");
  exit;
}

// Light per-IP throttle: at most one submission every 15s. Stops a bot (or a
// stuck double-submit) from flooding the inbox. Failures here never block a
// genuine send.
$ip = preg_replace('/[^0-9a-fA-F:.]/', '', $_SERVER["REMOTE_ADDR"] ?? "");
if ($ip !== "") {
  $throttle = sys_get_temp_dir() . "/kemet_ct_" . md5($ip);
  if (is_file($throttle) && (time() - @filemtime($throttle)) < 15) {
    header("Location: /contact.html?sent=1#message-us"); // pretend success
    exit;
  }
  @touch($throttle);
}

// One-line sanitiser: trim + strip CR/LF so nobody can inject mail headers.
function clean_line($v) {
  return trim(str_replace(["\r", "\n"], " ", (string)$v));
}

// Server-side length caps (the form's maxlength is client-only) — mirror it and
// hard-cap the message so nobody can post a giant payload.
$name    = mb_substr(clean_line($_POST["name"] ?? ""), 0, 120);
$email   = mb_substr(clean_line($_POST["email"] ?? ""), 0, 200);
$phone   = mb_substr(clean_line($_POST["phone"] ?? ""), 0, 40);
$dates   = mb_substr(clean_line($_POST["dates"] ?? ""), 0, 120);
$message = mb_substr(trim((string)($_POST["message"] ?? "")), 0, 5000);

if ($name === "" || $message === "" || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
  header("Location: /contact.html?sent=0#message-us");
  exit;
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

header("Location: /contact.html?sent=" . ($ok ? "1" : "0") . "#message-us");
exit;
