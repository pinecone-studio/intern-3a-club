param(
  [string]$Branch = "105-ochko-need-new-branch",
  [string]$ProjectName = "cloudflare-pine-club"
)

$ErrorActionPreference = "Stop"

Write-Host "Building club-service worker output..."
npx nx run club-service:build-worker

Write-Host "Deploying to Cloudflare Pages..."
npx wrangler pages deploy apps/club-service/.vercel/output/static --project-name=$ProjectName --branch=$Branch --commit-dirty=true

Write-Host "Deploy complete."
