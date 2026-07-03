#!/usr/bin/env bash
# ---------------------------------------------------------------------------
# Kemet — production deployment script (macOS / Linux / Git Bash on Windows)
#
# Builds the Astro site and publishes the generated output to the `production`
# branch, which contains ONLY the built website (no source). cPanel deploys
# from that branch, so after this runs the server only needs:
#
#     git pull origin production
#
# Safety guarantees:
#   • The `main` branch and its working tree are NEVER touched — all git work
#     happens in a throwaway worktree in the system temp directory.
#   • `production` only ever receives the contents of dist/ (generated site).
#   • Each run commits ONLY the files that changed (adds, edits, deletions),
#     on top of the existing production history, so server pulls fast-forward.
#
# Usage:
#     ./scripts/deploy-production.sh                 # auto timestamped message
#     ./scripts/deploy-production.sh "release: v1.2" # custom commit message
# ---------------------------------------------------------------------------
set -euo pipefail

BRANCH="production"
REMOTE="origin"

# Resolve the repository root from this script's location (scripts/..).
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
REPO_ROOT="$(cd "$SCRIPT_DIR/.." && pwd)"
cd "$REPO_ROOT"

COMMIT_MSG="${1:-release: production build $(date '+%Y-%m-%d %H:%M:%S')}"

echo "==> Kemet production deploy"
echo "    repo:   $REPO_ROOT"
echo "    branch: $BRANCH"

# --- 1. Build the site ------------------------------------------------------
echo "==> Building Astro project (npm run build)..."
npm run build

DIST="$REPO_ROOT/dist"
if [ ! -f "$DIST/index.html" ]; then
  echo "ERROR: build did not produce dist/index.html — aborting." >&2
  exit 1
fi

# --- 2. Prepare an isolated worktree for the production branch --------------
WT="$(mktemp -d "${TMPDIR:-/tmp}/kemet-prod.XXXXXX")"
cleanup() {
  cd "$REPO_ROOT"
  git worktree remove --force "$WT" >/dev/null 2>&1 || true
  git worktree prune >/dev/null 2>&1 || true
  rm -rf "$WT" >/dev/null 2>&1 || true
}
trap cleanup EXIT

echo "==> Preparing '$BRANCH' worktree..."
git fetch "$REMOTE" "$BRANCH" >/dev/null 2>&1 || true

if git show-ref --verify --quiet "refs/remotes/$REMOTE/$BRANCH"; then
  # Remote branch exists: base the worktree on it so we commit on top of the
  # current published history (clean fast-forward pulls on the server).
  git worktree add --force -B "$BRANCH" "$WT" "$REMOTE/$BRANCH" >/dev/null
elif git show-ref --verify --quiet "refs/heads/$BRANCH"; then
  # Local-only branch exists: commit on top of it.
  git worktree add --force "$WT" "$BRANCH" >/dev/null
else
  # First ever deploy: create an orphan branch (no history, no source).
  echo "    (first deploy — creating orphan '$BRANCH')"
  git worktree add --orphan -b "$BRANCH" "$WT" >/dev/null
fi

# --- 3. Sync the worktree to exactly match dist/ ---------------------------
# Remove every tracked file (keep the .git pointer) then copy the fresh build.
# This makes `git add -A` capture additions, edits AND removed pages.
echo "==> Syncing build output into '$BRANCH'..."
find "$WT" -mindepth 1 -maxdepth 1 -not -name '.git' -exec rm -rf {} +
cp -a "$DIST"/. "$WT"/
# Strip artefacts that must never ship (empty public/ placeholder).
rm -f "$WT/.gitkeep"

# --- 4. Safety net: refuse to publish if any source leaked in --------------
for f in package.json package-lock.json astro.config.mjs tsconfig.json; do
  if [ -e "$WT/$f" ]; then
    echo "ERROR: source file '$f' found in build output — aborting." >&2
    exit 1
  fi
done
if [ -d "$WT/src" ] || [ -d "$WT/node_modules" ]; then
  echo "ERROR: source directory found in build output — aborting." >&2
  exit 1
fi

# --- 5. Commit only the changed files, then push ---------------------------
git -C "$WT" add -A
if git -C "$WT" diff --cached --quiet; then
  echo "==> No changes since the last deploy — production is already up to date."
  echo "    Nothing to push. Done."
  exit 0
fi

echo "==> Changed files:"
git -C "$WT" diff --cached --name-status | sed 's/^/      /'

git -C "$WT" commit -q -m "$COMMIT_MSG"
echo "==> Pushing '$BRANCH' to $REMOTE..."
git -C "$WT" push "$REMOTE" "$BRANCH"

echo ""
echo "==> Deploy complete."
echo "    Commit:  $(git -C "$WT" rev-parse --short HEAD)  ($COMMIT_MSG)"
echo "    On your cPanel server, update the live site with:"
echo ""
echo "        git pull origin production"
echo ""
