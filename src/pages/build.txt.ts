// ---------------------------------------------------------------------------
// /build.txt — which build is actually on the server.
//
// WHY THIS EXISTS
// The live site is a `git pull` inside public_html, which means "the fix is
// committed" and "the fix is live" are two different facts with nothing on the
// site to tell them apart. That gap cost a season: the work that made the
// seasonal skin visible was committed on 5 August and the server was still
// serving the 1 August build five weeks later, so from the outside the whole
// seasonal system looked broken while the code was fine.
//
// This file makes the difference checkable in one request:
//
//     curl https://kemet-travel.com/build.txt     # what is live
//     git rev-parse --short HEAD                  # what is committed
//
// Same commit → the site is current. Different → the server needs `git pull`,
// and nothing about the code is worth debugging until it has had one.
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

/** Whether that commit had uncommitted changes on top of it. */
function dirty(): boolean {
  try {
    return execSync("git status --porcelain", { stdio: ["ignore", "pipe", "ignore"] })
      .toString()
      .trim().length > 0;
  } catch {
    return false;
  }
}

export const GET: APIRoute = () => {
  const sha = commit();
  const body = [
    `commit: ${sha}${sha !== "unknown" && dirty() ? " (+ uncommitted changes)" : ""}`,
    `built:  ${new Date().toISOString()}`,
    "",
    "Compare `commit` with `git rev-parse --short HEAD` on the branch you",
    "published. If they differ, this server has not pulled the latest build —",
    "run `git pull origin main` in public_html before debugging anything else.",
    "",
  ].join("\n");

  // A static build writes this to build.txt and the host serves it under its
  // own cache rules, so the header below is the dev-server contract only —
  // add `?cb=$RANDOM` if a proxy ever hands back a stale copy.
  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
};
