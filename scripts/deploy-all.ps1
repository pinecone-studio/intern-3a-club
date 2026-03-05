param(
  [ValidateSet("dash", "web", "service", "all")]
  [string]$Target = "all"
)

$ErrorActionPreference = "Stop"

$Root = Resolve-Path "$PSScriptRoot\.."
$DashProject = "cloudflare-club-dash"
$WebProject = "cloudflare-club-web"
$ServiceProject = "cloudflare-pine-club"

$DashBranch = if ($env:DASH_BRANCH) { $env:DASH_BRANCH } else { "176-branch-change-for-office" }
$WebBranch = if ($env:WEB_BRANCH) { $env:WEB_BRANCH } else { "176-branch-change-for-office" }
$ServiceBranch = if ($env:SERVICE_BRANCH) { $env:SERVICE_BRANCH } else { "105-ochko-need-new-branch" }

function Deploy-Dash {
  Write-Host "Deploying dash..."
  Push-Location "$Root\apps\club-dash"
  try {
    Remove-Item ".next", ".vercel\output" -Recurse -Force -ErrorAction SilentlyContinue

    $env:NX_TASK_TARGET_PROJECT = "club-dash"
    $env:NX_TASK_TARGET_TARGET = "build"
    $env:NX_TASK_TARGET_CONFIGURATION = "production"
    $env:NX_WORKSPACE_ROOT = "$Root"
    $env:NX_NEXT_OUTPUT_PATH = "apps/club-dash"

    npx next-on-pages
    npx wrangler pages deploy .vercel/output/static --project-name=$DashProject --branch=$DashBranch --commit-dirty=true
  }
  finally {
    Pop-Location
  }
}

function Deploy-Web {
  Write-Host "Deploying web..."
  Push-Location "$Root\apps\club-web"
  try {
    Remove-Item ".next", ".vercel\output" -Recurse -Force -ErrorAction SilentlyContinue

    $env:NX_TASK_TARGET_PROJECT = "club-web"
    $env:NX_TASK_TARGET_TARGET = "build"
    $env:NX_TASK_TARGET_CONFIGURATION = "production"
    $env:NX_WORKSPACE_ROOT = "$Root"
    $env:NX_NEXT_OUTPUT_PATH = "apps/club-web"

    npx next-on-pages
    npx wrangler pages deploy .vercel/output/static --project-name=$WebProject --branch=$WebBranch --commit-dirty=true
  }
  finally {
    Pop-Location
  }
}

function Deploy-Service {
  Write-Host "Deploying service..."
  Push-Location "$Root"
  try {
    npx nx run club-service:build-worker
  }
  finally {
    Pop-Location
  }

  Push-Location "$Root\apps\club-service"
  try {
    npx wrangler pages deploy .vercel/output/static --project-name=$ServiceProject --branch=$ServiceBranch --commit-dirty=true
  }
  finally {
    Pop-Location
  }
}

switch ($Target) {
  "dash" { Deploy-Dash }
  "web" { Deploy-Web }
  "service" { Deploy-Service }
  "all" {
    Deploy-Dash
    Deploy-Web
    Deploy-Service
  }
}
