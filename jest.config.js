/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  "verbose": true,
  "automock": true,
  "collectCoverage": true,
  "testResultsProcessor": "jest-sonar-report"
};
