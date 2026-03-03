# Stop on error (Bash -e шиг)
$ErrorActionPreference = "Stop"
 
# Root folder (script байрлаж байгаа хавтас)
$ROOT = Split-Path -Parent $MyInvocation.MyCommand.Path
 
$BIN = "$ROOT\node_modules\.bin"
$VERCEL_BIN = "$ROOT\apps\club-dash\node_modules\.bin;$BIN"
 
$DASH_PROJECT = "cloudflare-club-dash"
$WEB_PROJECT = "cloudflare-club-web"
$SERVICE_PROJECT = "cloudflare-pine-club"
 
# Branch variables (env override боломжтой)
$DASH_BRANCH = if ($env:DASH_BRANCH) { $env:DASH_BRANCH } else { "176-branch-change-for-office" }
$WEB_BRANCH = if ($env:WEB_BRANCH) { $env:WEB_BRANCH } else { "176-branch-change-for-office" }
$SERVICE_BRANCH = if ($env:SERVICE_BRANCH) { $env:SERVICE_BRANCH } else { "105-ochko-need-new-branch" }
 
function Deploy-Dash {
    Write-Host "=== Deploying DASH ==="
 
    Set-Location "$ROOT\apps\club-dash"
 
    Remove-Item ".next" -Recurse -Force -ErrorAction Ignore
    Remove-Item ".vercel\output" -Recurse -Force -ErrorAction Ignore
 
    $env:PATH = "$BIN;$env:PATH"
    $env:NX_TASK_TARGET_PROJECT = "club-dash"
    $env:NX_TASK_TARGET_TARGET = "build"
    $env:NX_TASK_TARGET_CONFIGURATION = "production"
    $env:NX_WORKSPACE_ROOT = $ROOT
    $env:NX_NEXT_OUTPUT_PATH = "apps/club-dash"
 
    & "$BIN\next-on-pages.cmd"
 
    npx wrangler pages deploy ".vercel/output/static" `
        --project-name="$DASH_PROJECT" `
        --branch="$DASH_BRANCH" `
        --commit-dirty=true
}
 
function Deploy-Web {
    Write-Host "=== Deploying WEB ==="
 
    Set-Location "$ROOT\apps\club-web"
 
    Remove-Item ".next" -Recurse -Force -ErrorAction Ignore
    Remove-Item ".vercel\output" -Recurse -Force -ErrorAction Ignore
 
    $env:PATH = "$VERCEL_BIN;$env:PATH"
    $env:NX_TASK_TARGET_PROJECT = "club-web"
    $env:NX_TASK_TARGET_TARGET = "build"
    $env:NX_TASK_TARGET_CONFIGURATION = "production"
    $env:NX_WORKSPACE_ROOT = $ROOT
    $env:NX_NEXT_OUTPUT_PATH = "apps/club-web"
 
    vercel build
 
    & "$BIN\next-on-pages.cmd" --skip-build
 
    npx wrangler pages deploy ".vercel/output/static" `
        --project-name="$WEB_PROJECT" `
        --branch="$WEB_BRANCH" `
        --commit-dirty=true
}
 
function Deploy-Service {
    Write-Host "=== Deploying SERVICE ==="
 
    Set-Location $ROOT
 
    npx nx run club-service:build-worker
 
    Set-Location "$ROOT\apps\club-service"
 
    & "$ROOT\node_modules\.bin\wrangler.cmd" pages deploy ".vercel/output/static" `
        --project-name="$SERVICE_PROJECT" `
        --branch="$SERVICE_BRANCH" `
        --commit-dirty=true
}
 
param(
    [string]$Target = "all"
)
 
switch ($Target) {
    "dash"    { Deploy-Dash }
    "web"     { Deploy-Web }
    "service" { Deploy-Service }
    "all"     { 
        Deploy-Dash
        Deploy-Web
        Deploy-Service
    }
    default {
        Write-Host "Usage: ./deploy.ps1 [dash|web|service|all]"
        exit 1
    }
}