/* eslint-disable complexity */
import chalk from 'chalk';
import fs from 'fs';
import { nanoid } from 'nanoid';
import { SeedTestingExecutorSchema } from './schema';
import { getTableNames, runCommand } from './utils';

export default async function seedTestingExecutor(options: SeedTestingExecutorSchema) {
  const { productionDb, testingDb } = options;

  if (testingDb.includes('pinebaatars')) {
    console.log(chalk.red('The seed:testing script is temporarily unavailable for the Pinebaatars project, but it will be available soon!'));
    return { success: false };
  }

  if (testingDb.includes('prod')) {
    console.log(chalk.red('!!!  You cannot purge prod database.  !!!'));
    return { success: false };
  }

  const fullSqlFilePath = `cache/${nanoid()}.sql`;
  const tempDbName = `temp_seed_${nanoid()}`;
  let dropTablesFilePath = '';

  try {
    console.log(chalk.green('Starting seed testing database process...'));

    console.log(chalk.yellow('Backing up production database...'));
    runCommand(`npx wrangler d1 export ${productionDb} --remote --output=${fullSqlFilePath}`);

    console.log(chalk.yellow('Preparing SQL file with foreign key constraints disabled...'));
    const originalSql = fs.readFileSync(fullSqlFilePath, 'utf-8');
    const modifiedSql = `PRAGMA foreign_keys = OFF;\n\n${originalSql}\n\nPRAGMA foreign_keys = ON;`;
    fs.writeFileSync(fullSqlFilePath, modifiedSql);

    console.log(chalk.yellow('Creating temporary database to test the SQL import...'));
    runCommand(`npx wrangler d1 create ${tempDbName}`);

    console.log(chalk.yellow('Testing import into temporary database...'));
    runCommand(`npx wrangler d1 execute ${tempDbName} --remote --file=${fullSqlFilePath} --yes`);

    console.log(chalk.yellow('SQL import succeeded! Proceeding to purge testing database...'));
    const tables = getTableNames(testingDb);

    const dropAllTablesSQL = tables
      .filter((table) => !table.startsWith('sqlite_'))
      .map((table) => `DROP TABLE IF EXISTS \`${table}\`;`)
      .join('\n');

    const dropWithPragma = `PRAGMA foreign_keys = OFF;\n\n${dropAllTablesSQL}\n\nPRAGMA foreign_keys = ON;`;

    dropTablesFilePath = `cache/drop_tables_${nanoid()}.sql`;
    fs.writeFileSync(dropTablesFilePath, dropWithPragma);

    runCommand(`npx wrangler d1 execute ${testingDb} --remote --file=${dropTablesFilePath}`);

    console.log(chalk.yellow('Restoring production data into testing database...'));
    runCommand(`npx wrangler d1 execute ${testingDb} --remote --file=${fullSqlFilePath} --yes`);

    console.log(chalk.green('Seed testing database process completed successfully!'));
    return { success: true };
  } catch (error) {
    console.error(chalk.red('Error during seed process:'), error);
    return { success: false };
  } finally {
    console.log(chalk.yellow('Cleaning up temporary files and database...'));
    if (fs.existsSync(fullSqlFilePath)) {
      fs.unlinkSync(fullSqlFilePath);
    }
    if (dropTablesFilePath && fs.existsSync(dropTablesFilePath)) {
      fs.unlinkSync(dropTablesFilePath);
    }

    runCommand(`npx wrangler d1 delete ${tempDbName} --skip-confirmation`);
  }
}
