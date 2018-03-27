module.exports = {
  setupFiles: ['<rootDir>/jest.setup.js'],
  testPathIgnorePatterns: ['/.next/', '/node_modules/'],
  testResultsProcessor: 'jest-junit',
  collectCoverage: true
}
