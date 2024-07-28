module.exports = {
    preset: 'jest-preset-angular',
    setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],
    transform: {
      '^.+\\.(ts|js|html)$': 'ts-jest',
    },
    moduleFileExtensions: ['ts', 'html', 'js'],
    testMatch: ['**/+(*.)+(spec).+(ts|js)'],
    coverageDirectory: './coverage',
  };
  