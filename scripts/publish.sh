#!/usr/bin/env bash
# ---------------------------------------------------------------------------
# Kemet — single-branch publish (main only).
#
# `main` holds BOTH the Astro source and, at the repo root, the built website
# (index.html, _astro/, images/, ...). The cPanel server is a checkout of
# `main`, so updating the live site is always just:
#
#     git pull origin main
#
# public/.htaccess ships with the build and blocks public access to the source
# folders (src/, scripts/, ...) so only the website itself is ever served.
#
# What this script does:
#   1. astro check + build (aborts on any error).
#   2. Removes root files published by a previous run that the new build no
#      longer produces (tracked in .publish-manifest).
#   3. Copies dist/* over the repo root, commits EVERYTHING pending (source
#      edits + rebuilt site) and pushes main.
#
# Usage:
#     ./scripts/publish.sh                  # auto timestamped message
#     ./scripts/publish.sh "release: v1.2"  # custom commit message
# ---------------------------------------------------------------------------
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
REPO_ROOT="$(cd "$SCRIPT_DIR/.." && pwd)"
cd "$REPO_ROOT"

COMMIT_MSG="${1:-release: site build $(date '+%Y-%m-%d %H:%M:%S')}"
MANIFEST=".publish-manifest"

echo "==> Kemet publish (single-branch: main)"

echo "==> astro check..."
npm run check

echo "==> Building (npm run build)..."
npm run build
if [ ! -f dist/index.html ]; then
  echo "ERROR: build did not produce dist/index.html — aborting." >&2
  exit 1
fi

# --- Remove stale artefacts from a previous publish -------------------------
NEW_LIST="$(cd dist && find . -type f | sed 's|^\./||' | sort)"
if [ -f "$MANIFEST" ]; then
  comm -23 <(sort "$MANIFEST") <(printf '%s\n' "$NEW_LIST") | while read -r f; do
    [ -n "$f" ] && rm -f "$f"
  done
fi
printf '%s\n' "$NEW_LIST" > "$MANIFEST"

# --- Copy the fresh build over the repo root --------------------------------
echo "==> Syncing dist/ into the repo root..."
cp -a dist/. .

# --- Commit everything pending and push main --------------------------------
git add -A
if git diff --cached --quiet; then
  echo "==> Nothing changed since the last publish. Done."
  exit 0
fi

git commit -q -m "$COMMIT_MSG"
git push origin main

echo ""
echo "==> Publish complete: $(git rev-parse --short HEAD)  ($COMMIT_MSG)"
echo "    Update the live site with:   git pull origin main"
