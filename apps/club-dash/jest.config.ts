export default {
  displayName: 'club-dash',
  preset: '../../jest.preset.js',
  testEnvironment: 'jsdom',
  transform: {
    '^(?!.*\\.(js|jsx|ts|tsx|css|json)$)': '@nx/react/plugins/jest',
    '^.+\\.[tj]sx?$': ['babel-jest', { presets: ['@nx/next/babel'] }],
  },
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  coverageDirectory: '../../coverage/apps/club-dash',

  moduleNameMapper: {
    // Note the change: we use (.*) to handle sub-paths and ensure we point to the workspace root
    '^@/libs/utils$': '<rootDir>/../../libs/utils/src/index.ts',
    '^@/libs/types$': '<rootDir>/../../libs/types/src/index.ts',

    // Catch-all for other @/ imports
    '^@/(.*)$': '<rootDir>/../../$1',

    // Standard aliases
    '^@intern-3a-club/shadcn$': '<rootDir>/../../libs/shadcn/src/index.ts',
    '^@intern-3a-club/utils$': '<rootDir>/../../libs/utils/src/index.ts',
    '^@intern-3a-club/types$': '<rootDir>/../../libs/types/src/index.ts',
  },

  coverageThreshold: {
    global: { statements: 0, branches: 0, functions: 0, lines: 0 },
  },
};
