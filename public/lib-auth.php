<?php
// ---------------------------------------------------------------------------
// Kemet — the password gate, in one place.
//
// Included by every private page (stats.php, desk.php). It was written inline
// in stats.php first; the moment a second private page existed, one copy would
// have been improved and the other forgotten, and the forgotten one is the one
// that gets found. So it lives here and both pages call kemet_require_login().
//
// This file is never served: .htaccess returns 404 for lib-*.php. Including it
// still works, because an include reads the filesystem, not the web server.
//
// The password hash lives in _stats/stats-password.txt — ignored by git,
// refused by the web server, and preserved by update.sh. See stats.php for the
// reasoning and the command that sets it.
// ---------------------------------------------------------------------------

// A SECOND, SEPARATE KEY — for the assistant that reads the numbers.
//
// Sign in as user "agent" and the password is checked against
// _stats/agent-password.txt instead of the owner's. It exists so the owner
// never has to paste her own password into a chat: the key is generated
// elsewhere, only its hash is placed on the server, and deleting that one
// file revokes it without touching her own login. It is accepted only where
// the calling page allows it — stats.php, which only reads. desk.php, which
// can send mail to the list, does not.
function kemet_require_login(string $realm = "Kemet", bool $allowAgent = false): void {
  $file = __DIR__ . "/_stats/stats-password.txt";
  $hash = is_readable($file) ? trim((string) @file_get_contents($file)) : "";

  $deny = static function (string $msg) use ($realm): void {
    header('WWW-Authenticate: Basic realm="' . $realm . '"');
    header("HTTP/1.0 401 Unauthorized");
    header("Content-Type: text/plain; charset=utf-8");
    header("Cache-Control: no-store");
    header("X-Robots-Tag: noindex, nofollow");
    echo $msg;
    exit;
  };

  // Under CGI/FastCGI PHP_AUTH_PW is never populated; the credentials arrive in
  // the Authorization header, passed through by .htaccess.
  $user = $_SERVER["PHP_AUTH_USER"] ?? null;
  $pass = $_SERVER["PHP_AUTH_PW"] ?? null;
  if ($pass === null) {
    $auth = $_SERVER["HTTP_AUTHORIZATION"] ?? $_SERVER["REDIRECT_HTTP_AUTHORIZATION"] ?? "";
    if (stripos($auth, "basic ") === 0) {
      $decoded = base64_decode(substr($auth, 6), true);
      if ($decoded !== false && strpos($decoded, ":") !== false) {
        [$user, $pass] = explode(":", $decoded, 2);
      }
    }
  }

  if ($allowAgent && $user === "agent") {
    $agentFile = __DIR__ . "/_stats/agent-password.txt";
    $agentHash = is_readable($agentFile) ? trim((string) @file_get_contents($agentFile)) : "";
    if ($agentHash !== "" && $pass !== null && password_verify($pass, $agentHash)) {
      header("Cache-Control: no-store, private");
      header("X-Robots-Tag: noindex, nofollow");
      return;
    }
    if ($pass !== null) { sleep(1); }
    $deny("Not authorised.\n");
  }

  // Checked only now, so a missing owner password never locks out the agent key.
  if ($hash === "") {
    $deny("No password is set.\n\nOn the server, from the site folder, run:\n"
        . "  php -r 'file_put_contents(\"_stats/stats-password.txt\", "
        . "password_hash(\"YOUR PASSWORD\", PASSWORD_DEFAULT).\"\\n\");'\n");
  }

  if ($pass === null || !password_verify($pass, $hash)) {
    if ($pass !== null) { sleep(1); }
    $deny("Not authorised.\n");
  }

  header("Cache-Control: no-store, private");
  header("X-Robots-Tag: noindex, nofollow");
}
