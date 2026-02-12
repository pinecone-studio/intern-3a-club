const nxPreset = require('@nx/jest/preset').default;

module.exports = {
  ...nxPreset,
  snapshotFormat: { escapeString: true, printBasicPrototype: true },
  coverageReporters: ['text', 'html'],
  coveragePathIgnorePatterns: [
    '/node_modules/',
    'index.ts',
    'main.ts',
    '.spec.ts',
    '.config.js',
    'route.ts',
    'layout.tsx',
    'types.ts',
  ],
  collectCoverageFrom: [
    '**/*.ts',
    '**/*.tsx',
    '**/*.js',
    '**/*.jsx',
    '!**/.next/**',
    '!**/jest.config.ts',
    '!**/eslint-rules/**',
  ],
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },
};
