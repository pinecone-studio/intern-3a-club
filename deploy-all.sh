#!/usr/bin/env bash
set -euo pipefail

ROOT="$(cd "$(dirname "$0")" && pwd)"
BIN="$ROOT/node_modules/.bin"
VERCEL_BIN="$ROOT/apps/club-dash/node_modules/.bin:$BIN"

DASH_PROJECT="cloudflare-club-dash"
WEB_PROJECT="cloudflare-club-web"
SERVICE_PROJECT="cloudflare-pine-club"

DASH_BRANCH="${DASH_BRANCH:-176-branch-change-for-office}"
WEB_BRANCH="${WEB_BRANCH:-176-branch-change-for-office}"
SERVICE_BRANCH="${SERVICE_BRANCH:-105-ochko-need-new-branch}"

deploy_dash() {
  cd "$ROOT/apps/club-dash"
  rm -rf .next .vercel/output
  PATH="$BIN:$PATH" \
  NX_TASK_TARGET_PROJECT=club-dash \
  NX_TASK_TARGET_TARGET=build \
  NX_TASK_TARGET_CONFIGURATION=production \
  NX_WORKSPACE_ROOT="$ROOT" \
  NX_NEXT_OUTPUT_PATH=apps/club-dash \
  "$BIN/next-on-pages"

  npx wrangler pages deploy .vercel/output/static \
    --project-name="$DASH_PROJECT" \
    --branch="$DASH_BRANCH" \
    --commit-dirty=true
}

deploy_web() {
  cd "$ROOT/apps/club-web"
  rm -rf .next .vercel/output
  PATH="$VERCEL_BIN:$PATH" \
  NX_TASK_TARGET_PROJECT=club-web \
  NX_TASK_TARGET_TARGET=build \
  NX_TASK_TARGET_CONFIGURATION=production \
  NX_WORKSPACE_ROOT="$ROOT" \
  NX_NEXT_OUTPUT_PATH=apps/club-web \
  vercel build

  "$BIN/next-on-pages" --skip-build

  npx wrangler pages deploy .vercel/output/static \
    --project-name="$WEB_PROJECT" \
    --branch="$WEB_BRANCH" \
    --commit-dirty=true
}

deploy_service() {
  cd "$ROOT"
  npx nx run club-service:build-worker

  cd "$ROOT/apps/club-service"
  ../../node_modules/.bin/wrangler pages deploy .vercel/output/static \
    --project-name="$SERVICE_PROJECT" \
    --branch="$SERVICE_BRANCH" \
    --commit-dirty=true
}

case "${1:-all}" in
  dash) deploy_dash ;;
  web) deploy_web ;;
  service) deploy_service ;;
  all) deploy_dash; deploy_web; deploy_service ;;
  *) echo "Usage: $0 [dash|web|service|all]"; exit 1 ;;
esac
