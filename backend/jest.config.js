/* eslint-disable no-useless-escape */
module.exports = {
  testEnvironment: 'node',
  roots: ['<rootDir>/src'], // Assuming your backend source code is in a 'src' directory
  testMatch: [
    '**/__tests__/**/*.+(ts|tsx|js)',
    '**/?(*.)+(spec|test).+(ts|tsx|js)'
  ],
  transform: {
    '^.+\.(ts|tsx)$': 'ts-jest',
  },
};