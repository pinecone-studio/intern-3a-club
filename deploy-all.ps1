param(
  [string]$Target = "all"
)

$ErrorActionPreference = "Stop"
$Root = Split-Path -Parent $MyInvocation.MyCommand.Path

$DashProject = "cloudflare-club-dash"
$WebProject = "cloudflare-club-web"
$ServiceProject = "cloudflare-pine-club"

$DashBranch = if ($env:DASH_BRANCH) { $env:DASH_BRANCH } else { "main" }
$WebBranch = if ($env:WEB_BRANCH) { $env:WEB_BRANCH } else { "176-branch-change-for-office" }
$ServiceBranch = if ($env:SERVICE_BRANCH) { $env:SERVICE_BRANCH } else { "105-ochko-need-new-branch" }

function Invoke-CommandChecked {
  param(
    [Parameter(Mandatory = $true)]
    [scriptblock]$Command
  )

  & $Command
  if ($LASTEXITCODE -ne 0) {
    throw "Command failed with exit code $LASTEXITCODE"
  }
}

function Deploy-Dash {
  Write-Host "=== Deploying DASH ==="
  Push-Location "$Root/apps/club-dash"
  try {
    Remove-Item ".next", ".vercel/output" -Recurse -Force -ErrorAction SilentlyContinue

    $env:NX_TASK_TARGET_PROJECT = "club-dash"
    $env:NX_TASK_TARGET_TARGET = "build"
    $env:NX_TASK_TARGET_CONFIGURATION = "production"
    $env:NX_WORKSPACE_ROOT = $Root
    $env:NX_NEXT_OUTPUT_PATH = "apps/club-dash"

    Invoke-CommandChecked { npx next-on-pages }
    Invoke-CommandChecked {
      npx wrangler pages deploy ".vercel/output/static" --project-name=$DashProject --branch=$DashBranch --commit-dirty=true
    }
  }
  finally {
    Pop-Location
  }
}

function Deploy-Web {
  Write-Host "=== Deploying WEB ==="
  Push-Location "$Root/apps/club-web"
  try {
    Remove-Item ".next", ".vercel/output" -Recurse -Force -ErrorAction SilentlyContinue

    $env:NX_TASK_TARGET_PROJECT = "club-web"
    $env:NX_TASK_TARGET_TARGET = "build"
    $env:NX_TASK_TARGET_CONFIGURATION = "production"
    $env:NX_WORKSPACE_ROOT = $Root
    $env:NX_NEXT_OUTPUT_PATH = "apps/club-web"

    Invoke-CommandChecked { npx next-on-pages }
    Invoke-CommandChecked {
      npx wrangler pages deploy ".vercel/output/static" --project-name=$WebProject --branch=$WebBranch --commit-dirty=true
    }
  }
  finally {
    Pop-Location
  }
}

function Deploy-Service {
  Write-Host "=== Deploying SERVICE ==="

  Push-Location "$Root"
  try {
    Invoke-CommandChecked { npx nx run club-service:build-worker }
  }
  finally {
    Pop-Location
  }

  Push-Location "$Root/apps/club-service"
  try {
    Invoke-CommandChecked {
      npx wrangler pages deploy ".vercel/output/static" --project-name=$ServiceProject --branch=$ServiceBranch --commit-dirty=true
    }
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
  default {
    Write-Error "Usage: ./deploy-all.ps1 [dash|web|service|all]"
    exit 1
  }
}
