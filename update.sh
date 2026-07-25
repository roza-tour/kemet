#!/usr/bin/env bash
# =============================================================================
#  KEMET — تحديث الموقع بأمر واحد   |   Kemet — one-command site update
# =============================================================================
#
#  الاستخدام (من cPanel Terminal):        USAGE (from cPanel Terminal):
#
#       bash ~/kemet/update.sh
#
#  الأمر ده بيعمل كل حاجة لوحده:          This does everything for you:
#    • يجيب آخر نسخة من GitHub            • fetches the latest build from GitHub
#    • يحل أي تعارض في .htaccess          • resolves any .htaccess conflict
#    • يتأكد إن الموقع سليم                 • verifies the site is intact
#
#  لو الفولدر لسه فاضي، الأمر ده بيعمل     If the folder doesn't exist yet, this
#  كل حاجة من الصفر:                       sets it up from scratch:
#
#       cd ~ && git clone https://github.com/roza-tour/kemet.git kemet \
#         && bash ~/kemet/update.sh
#
# =============================================================================
set -uo pipefail

REPO_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
BRANCH="main"
REMOTE="https://github.com/roza-tour/kemet.git"

say()  { printf '\n\033[1;33m==> %s\033[0m\n' "$1"; }
ok()   { printf '\033[0;32m   ✔ %s\033[0m\n' "$1"; }
bad()  { printf '\033[0;31m   ✘ %s\033[0m\n' "$1"; }

cd "$REPO_DIR" || { bad "Cannot enter $REPO_DIR"; exit 1; }

# --- 1. Make sure this is the right git checkout ----------------------------
say "1/4  التحقق من المستودع  ·  Checking repository"
if [ ! -d .git ]; then
  bad "This folder is not a git checkout."
  echo "     Run this once instead:"
  echo "       cd ~ && rm -rf kemet && git clone $REMOTE kemet && bash ~/kemet/update.sh"
  exit 1
fi
git remote set-url origin "$REMOTE" 2>/dev/null || true
ok "git repository found"

# --- 2. Fetch the latest published build ------------------------------------
say "2/4  جاري التحميل من GitHub  ·  Fetching latest build"
n=0
until git fetch origin "$BRANCH" --quiet; do
  n=$((n+1)); [ "$n" -ge 4 ] && { bad "Network error — could not reach GitHub after 4 tries."; exit 1; }
  echo "     retrying in $((2**n))s..."; sleep $((2**n))
done
ok "downloaded"

# --- 3. Apply it (this also clears the recurring .htaccess conflict) ---------
say "3/4  تطبيق التحديث  ·  Applying update"
# cPanel's AutoSSL edits .htaccess in place, which blocks a normal pull.
# A hard reset to the published state is the correct, safe fix here: the
# repo's own .htaccess already contains the AutoSSL block.
if ! git reset --hard "origin/$BRANCH" --quiet 2>/dev/null; then
  git reset --hard "origin/$BRANCH" >/dev/null || { bad "Could not apply the update."; exit 1; }
fi
git clean -fd --quiet -e node_modules 2>/dev/null || true
ok "updated to $(git rev-parse --short HEAD)"

# --- 4. Verify the live site is intact --------------------------------------
say "4/4  التحقق من الموقع  ·  Verifying site"
FAIL=0
for f in index.html tours.html contact.html faq.html booking.html privacy.html terms.html \
         404.html robots.txt llms.txt sitemap-index.xml .htaccess contact-handler.php; do
  if [ -s "$f" ]; then ok "$f"; else bad "MISSING: $f"; FAIL=1; fi
done
PAGES=$(find . -name '*.html' -not -path './node_modules/*' -not -path './.git/*' | wc -l)
echo "     صفحات منشورة · pages published: $PAGES"

echo
if [ "$FAIL" -eq 0 ]; then
  printf '\033[0;32m========================================================\n'
  printf '  ✅  تم التحديث بنجاح  ·  SITE UPDATED SUCCESSFULLY\n'
  printf '========================================================\033[0m\n\n'
  echo "  افتحي الموقع للتأكد  ·  Open the site to confirm:"
  echo "     https://kemet-travel.com"
  echo "     https://kemet-travel.com/collections/ramadan-in-egypt.html"
  echo "     https://kemet-travel.com/llms.txt"
else
  printf '\033[0;31m  ⚠  بعض الملفات ناقصة — ابعتي اللقطة دي للمطوّر\n'
  printf '     Some files are missing — send this output to your developer\033[0m\n'
  exit 1
fi
