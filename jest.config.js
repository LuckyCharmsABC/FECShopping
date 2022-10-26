const config = {
  verbose: true,
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '^axios$': require.resolve('axios'),
  },
  collectCoverage: true,
  collectCoverageFrom: ['./client/src/**/*.{js,jsx}'],
  coverageDirectory: 'coverage',
};

module.exports = config;
