# ---------------------------------------------------------------------------
# Kemet - production deployment script (Windows PowerShell)
#
# Builds the Astro site and publishes the generated output to the `production`
# branch, which contains ONLY the built website (no source). cPanel deploys
# from that branch, so after this runs the server only needs:
#
#     git pull origin production
#
# Safety guarantees:
#   * The `main` branch and its working tree are NEVER touched - all git work
#     happens in a throwaway worktree under $env:TEMP.
#   * `production` only ever receives the contents of dist\ (generated site).
#   * Each run commits ONLY the files that changed (adds, edits, deletions),
#     on top of the existing production history, so server pulls fast-forward.
#
# Usage:
#     .\scripts\deploy-production.ps1                  # auto timestamped message
#     .\scripts\deploy-production.ps1 "release: v1.2"  # custom commit message
# ---------------------------------------------------------------------------
[CmdletBinding()]
param(
    [string]$Message
)

$ErrorActionPreference = 'Stop'

$Branch = 'production'
$Remote = 'origin'

# Run a git command and throw if it fails (for commands that must succeed).
function Invoke-Git {
    param([Parameter(ValueFromRemainingArguments = $true)][string[]]$GitArgs)
    & git @GitArgs
    if ($LASTEXITCODE -ne 0) { throw "git $($GitArgs -join ' ') failed (exit $LASTEXITCODE)" }
}

# Resolve the repository root from this script's location (scripts\..).
$RepoRoot = (Resolve-Path (Join-Path $PSScriptRoot '..')).Path
Set-Location $RepoRoot

if ([string]::IsNullOrWhiteSpace($Message)) {
    $Message = "release: production build $(Get-Date -Format 'yyyy-MM-dd HH:mm:ss')"
}

Write-Host "==> Kemet production deploy"
Write-Host "    repo:   $RepoRoot"
Write-Host "    branch: $Branch"

# --- 1. Build the site ------------------------------------------------------
Write-Host "==> Building Astro project (npm run build)..."
& npm run build
if ($LASTEXITCODE -ne 0) { throw "npm run build failed (exit $LASTEXITCODE)" }

$Dist = Join-Path $RepoRoot 'dist'
if (-not (Test-Path (Join-Path $Dist 'index.html'))) {
    throw "build did not produce dist\index.html - aborting."
}

# --- 2. Prepare an isolated worktree for the production branch --------------
$WT = Join-Path $env:TEMP ("kemet-prod-" + [Guid]::NewGuid().ToString('N'))

try {
    Write-Host "==> Preparing '$Branch' worktree..."
    # Fetch is best-effort; ignore failure (e.g. branch does not exist yet).
    & git fetch $Remote $Branch 2>$null | Out-Null

    & git show-ref --verify --quiet "refs/remotes/$Remote/$Branch"
    $remoteExists = ($LASTEXITCODE -eq 0)
    & git show-ref --verify --quiet "refs/heads/$Branch"
    $localExists = ($LASTEXITCODE -eq 0)

    if ($remoteExists) {
        # Remote branch exists: base the worktree on it so we commit on top of
        # the published history (clean fast-forward pulls on the server).
        Invoke-Git worktree add --force -B $Branch $WT "$Remote/$Branch"
    }
    elseif ($localExists) {
        Invoke-Git worktree add --force $WT $Branch
    }
    else {
        Write-Host "    (first deploy - creating orphan '$Branch')"
        Invoke-Git worktree add --orphan -b $Branch $WT
    }

    # --- 3. Sync the worktree to exactly match dist\ -----------------------
    # Remove every tracked file (keep the .git pointer) then copy the fresh
    # build, so `git add -A` captures additions, edits AND removed pages.
    Write-Host "==> Syncing build output into '$Branch'..."
    Get-ChildItem -Path $WT -Force | Where-Object { $_.Name -ne '.git' } |
        Remove-Item -Recurse -Force
    Copy-Item -Path (Join-Path $Dist '*') -Destination $WT -Recurse -Force
    # Strip artefacts that must never ship (empty public\ placeholder).
    $gk = Join-Path $WT '.gitkeep'
    if (Test-Path $gk) { Remove-Item $gk -Force }

    # --- 4. Safety net: refuse to publish if any source leaked in ----------
    foreach ($f in @('package.json', 'package-lock.json', 'astro.config.mjs', 'tsconfig.json')) {
        if (Test-Path (Join-Path $WT $f)) { throw "source file '$f' found in build output - aborting." }
    }
    foreach ($d in @('src', 'node_modules')) {
        if (Test-Path (Join-Path $WT $d) -PathType Container) { throw "source directory '$d' found in build output - aborting." }
    }

    # --- 5. Commit only the changed files, then push -----------------------
    Invoke-Git -C $WT add -A

    & git -C $WT diff --cached --quiet
    if ($LASTEXITCODE -eq 0) {
        Write-Host "==> No changes since the last deploy - production is already up to date."
        Write-Host "    Nothing to push. Done."
        return
    }

    Write-Host "==> Changed files:"
    & git -C $WT diff --cached --name-status | ForEach-Object { "      $_" }

    Invoke-Git -C $WT commit -q -m $Message
    Write-Host "==> Pushing '$Branch' to $Remote..."
    Invoke-Git -C $WT push $Remote $Branch

    $short = (& git -C $WT rev-parse --short HEAD).Trim()
    Write-Host ""
    Write-Host "==> Deploy complete."
    Write-Host "    Commit:  $short  ($Message)"
    Write-Host "    On your cPanel server, update the live site with:"
    Write-Host ""
    Write-Host "        git pull origin production"
    Write-Host ""
}
finally {
    # Always clean up the worktree, even on failure.
    Set-Location $RepoRoot
    & git worktree remove --force $WT 2>$null | Out-Null
    & git worktree prune 2>$null | Out-Null
    if (Test-Path $WT) { Remove-Item $WT -Recurse -Force -ErrorAction SilentlyContinue }
}
