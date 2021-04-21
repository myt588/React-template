const pathIgnorePatterns = [
  '<rootDir>/__mocks__',
  '<rootDir>/.circleci',
  '<rootDir>/.github',
  '<rootDir>/.jest',
  '<rootDir>/.cache',
  '<rootDir>/coverage',
  '<rootDir>/cypress',
  '/__mocks__/',
  '<rootDir>/src/mocks/',
  '<rootDir>/src/services/',
  '<rootDir>/node_modules',
];

module.exports = {
  verbose: true,
  rootDir: './',
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
    '^.+\\.jsx?$': 'babel-jest'
  },
  testRegex: '(/__tests__/.*\\.([tj]sx?)|(\\.|/)(test|spec))\\.([tj]sx?)$',
  transformIgnorePatterns: ['<rootDir>/node_modules/(?!react-table/src/)'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  testPathIgnorePatterns: pathIgnorePatterns,
  automock: false,
  coveragePathIgnorePatterns: pathIgnorePatterns,
  collectCoverageFrom: ['src/**/*.{ts,tsx}', '!**/*.d.ts', '!**/node_modules/**'],
  collectCoverage: true,
};
