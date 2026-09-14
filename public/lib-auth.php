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

function kemet_require_login(string $realm = "Kemet"): void {
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

  if ($hash === "") {
    $deny("No password is set.\n\nOn the server, from the site folder, run:\n"
        . "  php -r 'file_put_contents(\"_stats/stats-password.txt\", "
        . "password_hash(\"YOUR PASSWORD\", PASSWORD_DEFAULT).\"\\n\");'\n");
  }

  // Under CGI/FastCGI PHP_AUTH_PW is never populated; the credentials arrive in
  // the Authorization header, passed through by .htaccess.
  $pass = $_SERVER["PHP_AUTH_PW"] ?? null;
  if ($pass === null) {
    $auth = $_SERVER["HTTP_AUTHORIZATION"] ?? $_SERVER["REDIRECT_HTTP_AUTHORIZATION"] ?? "";
    if (stripos($auth, "basic ") === 0) {
      $decoded = base64_decode(substr($auth, 6), true);
      if ($decoded !== false && strpos($decoded, ":") !== false) {
        [, $pass] = explode(":", $decoded, 2);
      }
    }
  }

  if ($pass === null || !password_verify($pass, $hash)) {
    if ($pass !== null) { sleep(1); }
    $deny("Not authorised.\n");
  }

  header("Cache-Control: no-store, private");
  header("X-Robots-Tag: noindex, nofollow");
}
