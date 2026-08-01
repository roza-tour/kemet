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
say "1/5  التحقق من المستودع  ·  Checking repository"
if [ ! -d .git ]; then
  bad "This folder is not a git checkout."
  echo "     Run this once instead:"
  echo "       cd ~ && rm -rf kemet && git clone $REMOTE kemet && bash ~/kemet/update.sh"
  exit 1
fi
git remote set-url origin "$REMOTE" 2>/dev/null || true
ok "git repository found"

# --- 2. Fetch the latest published build ------------------------------------
say "2/5  جاري التحميل من GitHub  ·  Fetching latest build"
n=0
until git fetch origin "$BRANCH" --quiet; do
  n=$((n+1)); [ "$n" -ge 4 ] && { bad "Network error — could not reach GitHub after 4 tries."; exit 1; }
  echo "     retrying in $((2**n))s..."; sleep $((2**n))
done
ok "downloaded"

# --- 3. Apply it (this also clears the recurring .htaccess conflict) ---------
say "3/5  تطبيق التحديث  ·  Applying update"

# Where the server was before, so we can report exactly what changed. This
# matters because nobody remembers when they last pulled.
BEFORE="$(git rev-parse HEAD 2>/dev/null || echo none)"
BEHIND="$(git rev-list --count "HEAD..origin/$BRANCH" 2>/dev/null || echo '?')"
if [ "$BEHIND" != "0" ] && [ "$BEHIND" != "?" ]; then
  echo "     كنتِ متأخرة بـ $BEHIND تحديث · you were $BEHIND commit(s) behind"
fi

# NOT a `git pull`. A hard reset makes this checkout byte-for-byte identical to
# what is published on GitHub, no matter how old or how modified it was — which
# also clears the .htaccess that cPanel's AutoSSL edits in place and which
# blocks a normal pull. Nothing is merged, so nothing can conflict.
if ! git reset --hard "origin/$BRANCH" --quiet 2>/dev/null; then
  git reset --hard "origin/$BRANCH" >/dev/null || { bad "Could not apply the update."; exit 1; }
fi
# -e _stats: NEVER delete the analytics + enquiry logs the site writes at runtime
git clean -fd --quiet -e node_modules -e _stats 2>/dev/null || true

AFTER="$(git rev-parse --short HEAD)"
if [ "$BEFORE" = "none" ]; then
  ok "installed at $AFTER"
elif [ "$BEFORE" = "$(git rev-parse "origin/$BRANCH")" ]; then
  ok "already current at $AFTER — nothing to change"
else
  ok "updated $(git rev-parse --short "$BEFORE") → $AFTER"
fi

# Prove it: the working tree must now differ from GitHub in nothing at all.
DRIFT="$(git status --porcelain --untracked-files=no)"
if [ -z "$DRIFT" ]; then
  ok "مطابق تمامًا لـ GitHub · byte-for-byte identical to GitHub"
else
  bad "Some files still differ from GitHub:"
  printf '%s\n' "$DRIFT" | head -20 | sed 's/^/       /'
  FAIL_MATCH=1
fi

# --- 4. Verify the live site is intact --------------------------------------
say "4/5  التحقق من الموقع  ·  Verifying site"
FAIL=0
for f in index.html tours.html contact.html faq.html booking.html privacy.html terms.html \
         sitemap.html 404.html robots.txt llms.txt sitemap-index.xml sitemap-images.xml .htaccess \
         contact-handler.php visa.html visa/united-states.html BingSiteAuth.xml \
         occasions.html egypt-tour-cost.html when-to-go.html compare.html \
         when-to-go/october.html compare/luxor-vs-aswan.html occasions/proposal-in-egypt.html \
         de/index.html it/index.html es/index.html \
         activities/hot-air-balloon-luxor.html collections/ramadan-in-egypt.html; do
  if [ -s "$f" ]; then ok "$f"; else bad "MISSING: $f"; FAIL=1; fi
done
PAGES=$(find . -name '*.html' -not -path './node_modules/*' -not -path './.git/*' | wc -l)
echo "     صفحات منشورة · pages published: $PAGES"

# --- 5. Tell the non-Google engines the site changed ------------------------
# IndexNow notifies Bing, Yandex and DuckDuckGo within minutes instead of
# waiting for a crawl. Bing also feeds ChatGPT search and Copilot, so this is
# the fastest route into AI answers. Google ignores IndexNow and uses the
# sitemap, which it already has.
#
# This step can never fail the update: any network problem is reported and
# skipped, because the site is already live by this point.
say "5/5  إبلاغ محركات البحث  ·  Notifying search engines"
INDEXNOW_KEY="$(ls -1 [0-9a-f][0-9a-f]*.txt 2>/dev/null | head -1 | sed 's/\.txt$//')"
if [ -z "$INDEXNOW_KEY" ]; then
  bad "IndexNow key file not found — skipping (site is live regardless)."
else
  URLS="$(find . -name '*.html' -not -path './node_modules/*' -not -path './.git/*' \
            -not -name '404.html' 2>/dev/null \
          | sed 's|^\./||' | sed 's|^|"https://kemet-travel.com/|; s|$|"|' \
          | paste -sd, -)"
  PAYLOAD="{\"host\":\"kemet-travel.com\",\"key\":\"$INDEXNOW_KEY\",\"keyLocation\":\"https://kemet-travel.com/$INDEXNOW_KEY.txt\",\"urlList\":[$URLS]}"
  CODE="$(printf '%s' "$PAYLOAD" | curl -s -o /dev/null -w '%{http_code}' -m 25 \
           -X POST 'https://api.indexnow.org/indexnow' \
           -H 'Content-Type: application/json; charset=utf-8' --data-binary @- 2>/dev/null)"
  case "$CODE" in
    200|202) ok "IndexNow accepted the update (HTTP $CODE) — Bing, Yandex, DuckDuckGo notified." ;;
    "")      bad "Could not reach IndexNow (no network) — skipped, site is live." ;;
    *)       bad "IndexNow replied HTTP $CODE — skipped, site is live." ;;
  esac
fi

# --- Dashboard key ----------------------------------------------------------
# The analytics dashboard key is deliberately NOT in the repository. It used to
# be a constant inside stats.php, and because the GitHub repo is public that
# made it readable by anyone — while the dashboard shows customer names, email
# addresses, phone numbers and enquiry text. Making the repo private would not
# have fixed it either: the old value is in the commit history for good.
#
# So the key lives here instead, in _stats/ — a folder git ignores, .htaccess
# refuses to serve, and step 3 of this script explicitly preserves. It is
# generated once, survives every future update, and is printed below to your
# terminal, which is the only place nobody else is reading.
KEYFILE="$REPO_DIR/_stats/.dashboard-key"
mkdir -p "$REPO_DIR/_stats" 2>/dev/null || true
[ -f "$REPO_DIR/_stats/index.html" ] || : > "$REPO_DIR/_stats/index.html"
if [ ! -s "$KEYFILE" ]; then
  NEWKEY="$(openssl rand -hex 16 2>/dev/null || head -c 16 /dev/urandom | od -An -tx1 | tr -d ' \n')"
  printf '%s' "$NEWKEY" > "$KEYFILE"
  chmod 600 "$KEYFILE" 2>/dev/null || true
  ok "مفتاح جديد للوحة الإحصائيات · New dashboard key generated (the old one was public — it no longer works)"
fi
chmod 600 "$KEYFILE" 2>/dev/null || true
DASHKEY="$(cat "$KEYFILE" 2>/dev/null || true)"

echo
if [ "$FAIL" -eq 0 ] && [ -z "${FAIL_MATCH:-}" ]; then
  printf '\033[0;32m========================================================\n'
  printf '  ✅  تم التحديث بنجاح  ·  SITE UPDATED SUCCESSFULLY\n'
  printf '========================================================\033[0m\n\n'
  echo "  افتحي الموقع للتأكد  ·  Open the site to confirm:"
  echo "     https://kemet-travel.com"
  echo "     https://kemet-travel.com/collections/ramadan-in-egypt.html"
  echo "     https://kemet-travel.com/activities/hot-air-balloon-luxor.html"
  echo "     https://kemet-travel.com/when-to-go.html"
  echo "     https://kemet-travel.com/de/   ·   /it/   ·   /es/"
  echo "     https://kemet-travel.com/llms.txt"
  if [ -n "${DASHKEY:-}" ]; then
    echo
    echo "  لوحة الإحصائيات والاستفسارات  ·  Your private dashboard:"
    printf '\033[1;33m     https://kemet-travel.com/stats.php?key=%s\033[0m\n' "$DASHKEY"
    echo "     (احفظي الرابط ده. مش مكتوب في أي مكان تاني.)"
    echo "     (Save this link — it is stored nowhere else.)"
  fi
else
  printf '\033[0;31m  ⚠  بعض الملفات ناقصة — ابعتي اللقطة دي للمطوّر\n'
  printf '     Some files are missing — send this output to your developer\033[0m\n'
  exit 1
fi
