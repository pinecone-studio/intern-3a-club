#!/usr/bin/env bash

set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
CURRENT_BRANCH="$(git -C "$ROOT" rev-parse --abbrev-ref HEAD 2>/dev/null || echo main)"

DASH_PROJECT="cloudflare-club-dash"
WEB_PROJECT="cloudflare-club-web"
SERVICE_PROJECT="cloudflare-pine-club"

TARGET="${1:-all}"
BRANCH_OVERRIDE="${2:-}"
DEFAULT_BRANCH="${BRANCH_OVERRIDE:-$CURRENT_BRANCH}"

DASH_BRANCH="${DASH_BRANCH:-$DEFAULT_BRANCH}"
WEB_BRANCH="${WEB_BRANCH:-$DEFAULT_BRANCH}"
SERVICE_BRANCH="${SERVICE_BRANCH:-$DEFAULT_BRANCH}"

deploy_dash() {
  echo "=== Deploying DASH ==="
  echo "Project: $DASH_PROJECT | Branch: $DASH_BRANCH"
  (
    cd "$ROOT/apps/club-dash"
    rm -rf .next .vercel/output

    NX_TASK_TARGET_PROJECT="club-dash" \
    NX_TASK_TARGET_TARGET="build" \
    NX_TASK_TARGET_CONFIGURATION="production" \
    NX_WORKSPACE_ROOT="$ROOT" \
    NX_NEXT_OUTPUT_PATH="apps/club-dash" \
    npx next-on-pages

    npx wrangler pages deploy ".vercel/output/static" \
      --project-name="$DASH_PROJECT" \
      --branch="$DASH_BRANCH" \
      --commit-dirty=true
  )
}

deploy_web() {
  echo "=== Deploying WEB ==="
  echo "Project: $WEB_PROJECT | Branch: $WEB_BRANCH"
  (
    cd "$ROOT/apps/club-web"
    rm -rf .next .vercel/output

    NX_TASK_TARGET_PROJECT="club-web" \
    NX_TASK_TARGET_TARGET="build" \
    NX_TASK_TARGET_CONFIGURATION="production" \
    NX_WORKSPACE_ROOT="$ROOT" \
    NX_NEXT_OUTPUT_PATH="apps/club-web" \
    npx next-on-pages

    npx wrangler pages deploy ".vercel/output/static" \
      --project-name="$WEB_PROJECT" \
      --branch="$WEB_BRANCH" \
      --commit-dirty=true
  )
}

deploy_service() {
  echo "=== Deploying SERVICE ==="
  echo "Project: $SERVICE_PROJECT | Branch: $SERVICE_BRANCH"
  (
    cd "$ROOT"
    npx nx run club-service:build-worker
  )

  (
    cd "$ROOT/apps/club-service"
    npx wrangler pages deploy ".vercel/output/static" \
      --project-name="$SERVICE_PROJECT" \
      --branch="$SERVICE_BRANCH" \
      --commit-dirty=true
  )
}

case "$TARGET" in
  dash)
    deploy_dash
    ;;
  web)
    deploy_web
    ;;
  service)
    deploy_service
    ;;
  all)
    deploy_dash
    deploy_web
    deploy_service
    ;;
  *)
    echo "Usage: ./deploy-all.sh [dash|web|service|all] [branch]"
    exit 1
    ;;
esac
