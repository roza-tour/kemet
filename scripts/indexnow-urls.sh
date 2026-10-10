#!/usr/bin/env bash
# =============================================================================
#  Which URLs IndexNow should hear about for one update — called by update.sh.
#
#      bash scripts/indexnow-urls.sh <commit before> [<commit after>]
#
#  Prints one canonical URL per line: pages added, pages whose CONTENT changed,
#  and pages removed. Nothing for a page that did not change.
#
#  WHY NOT EVERY PAGE
#  Until 10 Oct 2026 update.sh sent all ~280 pages on every run, changed or
#  not. IndexNow's own guidance is to submit URLs that were added, updated or
#  deleted — an engine that is told everything changed every time learns that
#  this site's pings mean nothing, which is the opposite of the point.
#
#  WHY THE SITEMAP, NOT A FILE LIST
#  The sitemap is the list of canonical, indexable addresses. A raw file list
#  sent `index.html` and `de/index.html` (both 301 to `/` and `/de/`) and
#  `activities/hot-air-balloon-luxor.html` (canonical elsewhere) — eleven
#  addresses no engine should index, sent on every run.
#
#  WHAT COUNTS AS A CHANGE
#  Every page is rebuilt on every publish, and a change to the shared CSS or
#  script renames /_astro/ files referenced in all of them — so "the HTML bytes
#  differ" is true of almost every page almost every time. Before comparing,
#  both versions are stripped of what a reader never sees: <style> blocks,
#  scripts (except JSON-LD structured data, which search engines do read),
#  /_astro/ asset names and Astro's data-astro-cid-* scoping attributes. What
#  is left is the content. Needs perl (always present on cPanel); without it
#  the comparison falls back to raw bytes, which over-reports but never misses.
# =============================================================================
set -uo pipefail

OLD="${1:-}"
NEW="${2:-HEAD}"
SITE="https://kemet-travel.com"

# Canonical URLs from a commit's sitemap.
locs() {
  git show "$1:sitemap-0.xml" 2>/dev/null | grep -o '<loc>[^<]*</loc>' | sed 's#<loc>##; s#</loc>##'
}
# URL → the file that serves it ("/" and "/de/" are index.html files).
tofile() {
  local p="${1#"$SITE"}"; p="${p#/}"
  case "$p" in ""|*/) printf '%sindex.html' "$p" ;; *) printf '%s' "$p" ;; esac
}
# The sitemap writes the home page without its slash; the page's canonical has one.
canon() {
  if [ "$1" = "$SITE" ]; then printf '%s/\n' "$SITE"; else printf '%s\n' "$1"; fi
}
norm() {
  if command -v perl >/dev/null 2>&1; then
    perl -0pe 's{<style\b[^>]*>.*?</style>}{}gs;
               s{<script\b(?![^>]*ld\+json)[^>]*>.*?</script>}{}gs;
               s{/_astro/[\w.\-]+}{}g;
               s{\sdata-astro-cid-[a-z0-9]+(?:="[^"]*")?}{}g'
  else
    cat
  fi
}

# No usable "before" (a first install): every page is new to the engines.
if [ -z "$OLD" ] || [ "$OLD" = "none" ] || ! git cat-file -e "$OLD^{commit}" 2>/dev/null; then
  locs "$NEW" | while read -r u; do canon "$u"; done
  exit 0
fi
[ "$(git rev-parse "$OLD")" = "$(git rev-parse "$NEW")" ] && exit 0

# Cheap filter first: only files whose bytes differ at all get the content check.
CHANGED="$(git diff --name-only "$OLD" "$NEW" -- '*.html')"

locs "$NEW" | while read -r u; do
  f="$(tofile "$u")"
  if ! git cat-file -e "$OLD:$f" 2>/dev/null; then canon "$u"; continue; fi   # a new page
  printf '%s\n' "$CHANGED" | grep -qxF "$f" || continue
  if ! cmp -s <(git show "$OLD:$f" | norm) <(git show "$NEW:$f" | norm); then canon "$u"; fi
done

# Removed: in the old sitemap, gone from the new one. Telling the engines lets
# them drop the page sooner than their next crawl would.
comm -23 <(locs "$OLD" | sort) <(locs "$NEW" | sort) | while read -r u; do canon "$u"; done
