import chalk from 'chalk';
import { execSync } from 'child_process';
import fs from 'fs';
import { writeFile } from 'fs/promises';
import { nanoid } from 'nanoid';
import { SeedLocalExecutorSchema } from './schema';

const runCommand = (command: string) => {
  console.log(chalk.cyan(`Running command: ${command}`));
  execSync(command, { stdio: 'inherit' });
};

const fixTableOrderingIssues = (sql: string): string => {
  let fixedSql = sql;

  fixedSql = fixedSql.replace(/,\s*FOREIGN KEY\s*\([^)]+\)\s*REFERENCES\s+[^(]+\([^)]+\)(\s+ON\s+(UPDATE|DELETE)\s+[a-z\s]+)*/gi, '');

  fixedSql = fixedSql.replace(/\s+REFERENCES\s+\w+\s*\([^)]+\)/gi, '');

  return fixedSql;
};

export default async function seedLocalExecutor(options: SeedLocalExecutorSchema) {
  const { dbName, tomlPath } = options;

  const localDbPath = tomlPath.split('/').slice(0, -1).join('/') + '/.wrangler/state/v3/d1';

  console.log(chalk.green('Starting seed local database process...'));

  console.log(chalk.red('Deleting local database...'));
  fs.rmSync(localDbPath, { recursive: true, force: true });
  console.log(chalk.green('Local database deleted successfully!'));

  const fullSqlFilePath = `cache/${nanoid()}.sql`;
  console.log(chalk.yellow('Backing up remote database...'));

  const response = await fetch('https://seed-database-service-testing.shagai.workers.dev/?dbName=' + dbName);

  if (!response.ok) {
    const res = await response.json();
    console.log(chalk.red(res.error));
    return { success: false };
  }

  const data = await response.text();

  const fixedSql = fixTableOrderingIssues(data);

  await writeFile(fullSqlFilePath, fixedSql, 'utf8');

  console.log(`SQL file saved at: ${fullSqlFilePath}`);

  console.log(chalk.yellow('Restoring local database...'));
  runCommand(`npx wrangler d1 execute ${dbName} --local --config=${tomlPath} --file=${fullSqlFilePath}`);

  console.log(chalk.yellow('Cleaning up SQL backup file...'));
  fs.unlinkSync(fullSqlFilePath);

  console.log(chalk.green('Seed local database process completed successfully!'));
  return { success: true };
}
