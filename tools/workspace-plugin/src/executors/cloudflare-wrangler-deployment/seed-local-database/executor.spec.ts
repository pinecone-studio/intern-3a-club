import chalk from 'chalk';
import { execSync } from 'child_process';
import fs from 'fs';
import { writeFile } from 'fs/promises';
import seedLocalExecutor from './executor';
import { SeedLocalExecutorSchema } from './schema';

jest.mock('child_process');
jest.mock('fs');
jest.mock('fs/promises');
jest.mock('nanoid', () => ({
  nanoid: () => 'test-id',
}));

describe('seedLocalExecutor', () => {
  let options: SeedLocalExecutorSchema;

  beforeEach(() => {
    options = {
      dbName: 'local-db',
      tomlPath: './path/to/wrangler.toml',
    };

    jest.clearAllMocks();
    global.fetch = jest.fn();
  });

  it('should execute all commands in the correct order', async () => {
    const consoleSpy = jest.spyOn(console, 'log').mockImplementation();
    (execSync as jest.Mock).mockImplementation(() => {});
    (fs.rmSync as jest.Mock).mockImplementation(() => {});
    (fs.unlinkSync as jest.Mock).mockImplementation(() => {});
    (global.fetch as jest.Mock).mockResolvedValue({
      ok: true,
      text: () => Promise.resolve('test sql content'),
    });

    const result = await seedLocalExecutor(options);

    expect(result).toEqual({ success: true });

    expect(consoleSpy).toHaveBeenCalledWith(chalk.green('Starting seed local database process...'));
    expect(consoleSpy).toHaveBeenCalledWith(chalk.red('Deleting local database...'));
    expect(fs.rmSync).toHaveBeenCalledWith('./path/to/.wrangler/state/v3/d1', { recursive: true, force: true });
    expect(consoleSpy).toHaveBeenCalledWith(chalk.green('Local database deleted successfully!'));
    expect(consoleSpy).toHaveBeenCalledWith(chalk.yellow('Backing up remote database...'));
    expect(global.fetch).toHaveBeenCalledWith('https://seed-database-service-testing.shagai.workers.dev/?dbName=local-db');
    expect(writeFile).toHaveBeenCalledWith('cache/test-id.sql', 'test sql content', 'utf8');
    expect(consoleSpy).toHaveBeenCalledWith(expect.stringContaining('SQL file saved at: cache/test-id.sql'));
    expect(consoleSpy).toHaveBeenCalledWith(chalk.yellow('Restoring local database...'));
    expect(execSync).toHaveBeenCalledWith('npx wrangler d1 execute local-db --local --config=./path/to/wrangler.toml --file=cache/test-id.sql', expect.any(Object));
    expect(consoleSpy).toHaveBeenCalledWith(chalk.yellow('Cleaning up SQL backup file...'));
    expect(fs.unlinkSync).toHaveBeenCalledWith('cache/test-id.sql');
    expect(consoleSpy).toHaveBeenCalledWith(chalk.green('Seed local database process completed successfully!'));

    consoleSpy.mockRestore();
  });

  it('should handle failed fetch response', async () => {
    const consoleSpy = jest.spyOn(console, 'log').mockImplementation();
    (global.fetch as jest.Mock).mockResolvedValue({
      ok: false,
      json: () => Promise.resolve({ error: 'Failed to fetch database' }),
    });

    const result = await seedLocalExecutor(options);

    expect(result).toEqual({ success: false });
    expect(consoleSpy).toHaveBeenCalledWith(chalk.red('Failed to fetch database'));

    consoleSpy.mockRestore();
  });

  it('should clean up SQL file after execution', async () => {
    (execSync as jest.Mock).mockImplementation(() => {});
    (fs.rmSync as jest.Mock).mockImplementation(() => {});
    (fs.unlinkSync as jest.Mock).mockImplementation(() => {});
    (global.fetch as jest.Mock).mockResolvedValue({
      ok: true,
      text: () => Promise.resolve('test sql content'),
    });

    await seedLocalExecutor(options);

    expect(fs.unlinkSync).toHaveBeenCalledWith('cache/test-id.sql');
  });

  it('should log progress for each step', async () => {
    const consoleSpy = jest.spyOn(console, 'log').mockImplementation();
    (execSync as jest.Mock).mockImplementation(() => {});
    (fs.rmSync as jest.Mock).mockImplementation(() => {});
    (fs.unlinkSync as jest.Mock).mockImplementation(() => {});
    (global.fetch as jest.Mock).mockResolvedValue({
      ok: true,
      text: () => Promise.resolve('test sql content'),
    });

    await seedLocalExecutor(options);

    expect(consoleSpy).toHaveBeenCalledWith(chalk.green('Starting seed local database process...'));
    expect(consoleSpy).toHaveBeenCalledWith(chalk.red('Deleting local database...'));
    expect(consoleSpy).toHaveBeenCalledWith(chalk.green('Local database deleted successfully!'));
    expect(consoleSpy).toHaveBeenCalledWith(chalk.yellow('Backing up remote database...'));
    expect(consoleSpy).toHaveBeenCalledWith(chalk.yellow('Restoring local database...'));
    expect(consoleSpy).toHaveBeenCalledWith(chalk.yellow('Cleaning up SQL backup file...'));
    expect(consoleSpy).toHaveBeenCalledWith(chalk.green('Seed local database process completed successfully!'));

    consoleSpy.mockRestore();
  });

  it('should throw an error if a command fails', async () => {
    const error = new Error('Command failed');
    (execSync as jest.Mock).mockImplementation(() => {
      throw error;
    });
    (fs.rmSync as jest.Mock).mockImplementation(() => {});
    (global.fetch as jest.Mock).mockResolvedValue({
      ok: true,
      text: () => Promise.resolve('test sql content'),
    });

    await expect(seedLocalExecutor(options)).rejects.toThrow(error);
  });
});
