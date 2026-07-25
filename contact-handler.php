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

// Honeypot: hidden field humans never fill. Bots do — pretend success.
if (!empty($_POST["website"])) {
  respond(true, $wantsJson); // pretend success to the bot
}

// Light per-IP throttle: at most one submission every 15s. Stops a bot (or a
// stuck double-submit) from flooding the inbox. Failures here never block a
// genuine send.
$ip = preg_replace('/[^0-9a-fA-F:.]/', '', $_SERVER["REMOTE_ADDR"] ?? "");
if ($ip !== "") {
  $throttle = sys_get_temp_dir() . "/kemet_ct_" . md5($ip);
  if (is_file($throttle) && (time() - @filemtime($throttle)) < 15) {
    respond(true, $wantsJson); // pretend success
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
  respond(false, $wantsJson);
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

// Keep a local safety copy of every delivered enquiry (CSV, web-blocked dir).
if ($ok) {
  $logDir = __DIR__ . "/_stats";
  if (!is_dir($logDir)) { @mkdir($logDir, 0755, true); }
  $row = sprintf("%s,\"%s\",\"%s\",\"%s\",\"%s\",\"%s\"\n",
    gmdate("Y-m-d H:i"), str_replace('"', "'", $name), str_replace('"', "'", $email),
    str_replace('"', "'", $phone), str_replace('"', "'", $dates),
    str_replace('"', "'", mb_substr($message, 0, 500)));
  @file_put_contents($logDir . "/enquiries.csv", $row, FILE_APPEND | LOCK_EX);
}

respond($ok, $wantsJson);
