param(
  [ValidateSet("dash", "web", "service", "all")]
  [string]$Target = "all",
  [string]$Branch = ""
)

$ErrorActionPreference = "Stop"

$Root = Resolve-Path "$PSScriptRoot\.."
$DashProject = "cloudflare-club-dash"
$WebProject = "cloudflare-club-web"
$ServiceProject = "cloudflare-pine-club"

$CurrentBranch = (git -C $Root rev-parse --abbrev-ref HEAD)
$DefaultBranch = if ($Branch) { $Branch } else { $CurrentBranch }
$DashBranch = $DefaultBranch
$WebBranch = $DefaultBranch
$ServiceBranch = $DefaultBranch

function Deploy-Dash {
  Write-Host "Deploying dash... (project=$DashProject branch=$DashBranch)"
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
  Write-Host "Deploying web... (project=$WebProject branch=$WebBranch)"
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
  Write-Host "Deploying service... (project=$ServiceProject branch=$ServiceBranch)"
  if (Test-Path "$Root\apps\club-service\node_modules") {
    Write-Host "Removing local apps/club-service/node_modules to avoid React duplicate during build..."
    Remove-Item "$Root\apps\club-service\node_modules" -Recurse -Force
  }
  if (-not (Test-Path "$Root\apps\club-service\node_modules")) {
    Write-Host "Linking apps/club-service/node_modules -> ../../node_modules"
    New-Item -ItemType SymbolicLink -Path "$Root\apps\club-service\node_modules" -Target "$Root\node_modules" | Out-Null
  }

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
