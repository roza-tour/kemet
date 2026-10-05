// ---------------------------------------------------------------------------
// /build.txt — which build is actually on the server.
//
// WHY THIS EXISTS
// The live site is a checkout in ~/kemet on the server, brought up to date by
// `bash update.sh` (see DEPLOYMENT.md) — which means "the fix is committed"
// and "the fix is live" are two different facts with nothing on the site to
// tell them apart. That gap cost a season: the work that made the
// seasonal skin visible was committed on 5 August and the server was still
// serving the 1 August build five weeks later, so from the outside the whole
// seasonal system looked broken while the code was fine.
//
// This file makes the difference checkable in one request:
//
//     curl https://kemet-travel.com/build.txt     # when the live build was made
//     git log -1 --date=iso --format=%cd main     # when main last changed
//
// Live build newer → the site is current. Older → the server needs
// `cd ~/kemet && bash update.sh`, and nothing about the code is worth
// debugging until it has had one.
//
// The body is kept to plain ASCII on purpose. This file is the one people
// open when something looks wrong, and it once told the owner to pull inside
// public_html — the wrong folder — with its dash rendered as "â€”" because the
// server sent no charset. .htaccess now declares UTF-8 for .txt; ASCII here
// means it reads correctly even on a server that has not picked that up yet.
//
// The commit is read from git at build time and degrades to "unknown" when the
// build runs outside a checkout — never fabricated, never a stale constant.
// ---------------------------------------------------------------------------
import type { APIRoute } from "astro";
import { execSync } from "node:child_process";

/** Short commit sha of the source this build came from, or "unknown". */
function commit(): string {
  try {
    return execSync("git rev-parse --short HEAD", { stdio: ["ignore", "pipe", "ignore"] })
      .toString()
      .trim() || "unknown";
  } catch {
    return "unknown";
  }
}

export const GET: APIRoute = () => {
  const body = [
    `built:   ${new Date().toISOString()}`,
    `from:    ${commit()}`,
    "",
    "`built` is the decisive value: compare it with the date of the newest",
    "commit on main. Older here than there means this server has not been",
    "updated. On the server, run:",
    "",
    "    cd ~/kemet && bash update.sh",
    "",
    "before debugging anything else. (Not public_html, and not a bare git pull:",
    "update.sh also keeps _stats/ and the .htaccess AutoSSL rewrites intact.)",
    "",
    "`from` is the commit the build was made FROM, so it is always one behind",
    "the commit that publishes it (the build runs, then the result is",
    "committed). It identifies the build; it is not meant to match HEAD.",
    "",
  ].join("\n");

  // A static build writes this to build.txt and the host serves it under its
  // own cache rules, so the header below is the dev-server contract only —
  // add `?cb=$RANDOM` if a proxy ever hands back a stale copy.
  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
};
