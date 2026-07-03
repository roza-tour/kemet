# Deployment

Kemet is a static Astro site. Development and deployment are kept on **two
separate branches** so the server never has to build anything.

| Branch | Contains | Purpose |
| --- | --- | --- |
| `main` | Full source (`src/`, config, data, these scripts) | Development |
| `production` | **Only the built website** (generated `dist/` output) | What cPanel serves |

You never edit `production` by hand. A script builds the site and publishes it.

---

## Development — always on `main`

Do all your work on `main` as normal:

```bash
git checkout main
npm install        # first time only
npm run dev        # local preview at http://localhost:4321
# ...edit content in src/data, src/pages, etc...
git add -A
git commit -m "content: update Cairo guide"
git push origin main
```

`main` is the source of truth. `production` is a generated artefact — never a
place you commit into directly.

---

## Deployment — one command

When you want the live site to reflect the current `main`, run **one** command
from the repository root:

**macOS / Linux / Git Bash (Windows):**

```bash
./scripts/deploy-production.sh
```

**Windows PowerShell:**

```powershell
.\scripts\deploy-production.ps1
```

Optionally pass a custom commit message:

```bash
./scripts/deploy-production.sh "release: winter collection copy"
```

### What the script does

1. Runs `npm run build` to generate `dist/`.
2. Checks out the `production` branch into a **temporary, isolated worktree**
   (your `main` working tree is never touched).
3. Replaces the branch contents with the fresh build.
4. Commits **only the files that changed** (new, edited, or deleted pages) on
   top of the existing `production` history.
5. Pushes `production` to GitHub.

If nothing changed since the last deploy, it stops without creating a commit.

The `production` branch is guaranteed to contain **only** the generated
website — the script aborts if any source file (`src/`, `package.json`,
`astro.config.mjs`, `tsconfig.json`, …) is ever detected in the build output.

---

## Update the live server

Because `production` already holds the finished HTML/CSS, the cPanel server
never installs Node or builds anything. After a deploy, update the live site
over SSH with a single command:

```bash
cd ~/public_html
git pull origin production
```

That's the entire server-side workflow — no `npm install`, no build, no manual
uploads.

### First-time server setup (once only)

If `public_html` is not yet a clean checkout of `production` (for example after
past manual uploads), reset it once:

```bash
cd ~/public_html

# Back up anything currently there, then empty the folder
mkdir -p ~/public_html_backup_$(date +%F)
mv ~/public_html/* ~/public_html/.[!.]* ~/public_html_backup_$(date +%F)/ 2>/dev/null || true

# Point the folder at the production branch
git init
git remote add origin https://github.com/roza-tour/kemet.git
git fetch origin production
git checkout -b production origin/production
git reset --hard origin/production
```

Confirm `index.html` sits directly inside `public_html`. From then on, every
update is just `git pull origin production`.

> If a future `git pull` ever reports a conflict because a file was changed on
> the server, snap back to the exact published state with:
> `git fetch origin production && git reset --hard origin/production`

---

## Summary

```
Development:   main branch          →  git push origin main
Deployment:    ./scripts/deploy-production.sh   (or .ps1 on Windows)
Go live:       git pull origin production   (on the cPanel server)
```
