/* eslint-disable */
const preset = require('../../jest.preset.js');

module.exports = {
  ...preset,
  displayName: 'club-web',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  transform: {
    '^(?!.*\\.(js|jsx|ts|tsx|css|json)$)': '@nx/react/plugins/jest',
    '^.+\\.[tj]sx?$': ['babel-jest', { presets: ['@nx/next/babel'] }],
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  coverageDirectory: '../../coverage/apps/club-web',
  coveragePathIgnorePatterns: [
    ...(preset.coveragePathIgnorePatterns || []),
    '<rootDir>/__test__/common-mocks.ts',
  ],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80,
    },
  },
};
