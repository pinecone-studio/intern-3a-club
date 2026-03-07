const fs = require('fs');
const path = require('path');

const files = [
  'apps/club-web/app/_hooks/use-club-realtime.ts',
  'apps/club-web/app/JoinClub/page.tsx',
  'apps/club-web/app/JoinClub/JoinAndLeaveLogic.tsx',
  'apps/club-web/components/club-add/SystemTip.tsx',
  'apps/club-web/app/JoinClub/_components/ClubDetailView.tsx',
  'apps/club-web/app/JoinClub/_components/ClubList.tsx',
  'apps/club-web/app/JoinClub/_components/ClubsContent.tsx',
  'apps/club-web/app/_hooks/use-redis-hook.ts',
  'apps/club-web/components/club-add/PersonalClubs.tsx',
  'apps/club-web/components/club-add/RequestHistory.tsx',
  'apps/club-web/components/create-club/ClubForm.tsx',
  'apps/club-web/components/create-club/create-club-helpers.ts',
  'apps/club-web/components/create-club/useCreateClub.ts',
  'apps/club-web/lib/apollo/apollo-client.ts'
];

for (const file of files) {
  const fullPath = path.resolve(file);
  if (fs.existsSync(fullPath)) {
    let content = fs.readFileSync(fullPath, 'utf8');
    content = content.replace(/\/\* ?istanbul ignore (file|next) ?\*\/\n?/g, '');
    content = content.replace(/\/\/ ?istanbul ignore (file|next)\n?/g, '');
    fs.writeFileSync(fullPath, content);
    console.log(`Cleaned ${file}`);
  }
}
