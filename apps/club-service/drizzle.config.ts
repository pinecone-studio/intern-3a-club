import { config } from 'dotenv';
import { defineConfig } from 'drizzle-kit';
import { resolve } from 'path';

// .dev.vars файлаас нууц мэдээллийг унших
config({ path: resolve(__dirname, '.dev.vars') });

export default defineConfig({
  dialect: 'sqlite',
  driver: 'd1-http', // Cloudflare D1 ашиглахад энэ драйвер хэрэгтэй
  schema: './db/schema.ts', // Таны schema файл байрлаж буй зам
  out: './drizzle', // Migration-ууд хадгалагдах хавтас
  dbCredentials: {
    accountId: process.env.CLOUDFLARE_ACCOUNT_ID!,
    databaseId: process.env.DATABASE_ID!,
    token: process.env.TOKEN!,
  },
  verbose: true,
  strict: true,
});
