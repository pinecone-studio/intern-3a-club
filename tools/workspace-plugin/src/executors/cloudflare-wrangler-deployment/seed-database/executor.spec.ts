import { execSync } from 'child_process';
import fs from 'fs';
import seedTestingExecutor from './executor';
import { SeedTestingExecutorSchema } from './schema';
import { runCommand } from './utils';

jest.mock('child_process');
jest.mock('fs');

jest.mock('./utils', () => ({
  getTableNames: jest.fn().mockReturnValue(['mockTable']),
  runCommand: jest.fn(),
}));

describe('seedTestingExecutor', () => {
  let options: SeedTestingExecutorSchema;

  beforeEach(() => {
    (runCommand as jest.Mock).mockImplementation(() => {});
    options = {
      productionDb: 'prod-db',
      testingDb: 'test-db',
    };

    jest.clearAllMocks();
  });

  it('should return false if pinebaatars', async () => {
    const invalidOptions = { ...options, testingDb: 'prod-pinebaatars' };

    const consoleSpy = jest.spyOn(console, 'log').mockImplementation();

    const result = await seedTestingExecutor(invalidOptions);

    expect(result).toEqual({ success: false });

    consoleSpy.mockRestore();
  });

  it('should return false if testingDb includes "prod"', async () => {
    const invalidOptions = { ...options, testingDb: 'prod-database' };

    const consoleSpy = jest.spyOn(console, 'log').mockImplementation();

    const result = await seedTestingExecutor(invalidOptions);

    expect(result).toEqual({ success: false });

    consoleSpy.mockRestore();
  });

  it('should delete the SQL file if it exists', async () => {
    (fs.existsSync as jest.Mock).mockReturnValue(true);
    (fs.unlinkSync as jest.Mock).mockImplementation(() => {});
    (execSync as jest.Mock).mockImplementation(() => {});

    const result = await seedTestingExecutor(options);

    expect(fs.existsSync).toHaveBeenCalled();
    expect(fs.unlinkSync).toHaveBeenCalled();
    expect(result).toEqual({ success: true });
  });

  it('should execute all commands in the correct order', async () => {
    (execSync as jest.Mock).mockImplementation(() => {});

    (fs.unlinkSync as jest.Mock).mockImplementation(() => {});

    const result = await seedTestingExecutor(options);

    expect(result).toEqual({ success: true });
  });

  it('should clean up SQL file after execution', async () => {
    (execSync as jest.Mock).mockImplementation(() => {});
    (fs.unlinkSync as jest.Mock).mockImplementation(() => {});

    await seedTestingExecutor(options);
  });
});
