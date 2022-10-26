const config = {
  verbose: true,
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '^axios$': require.resolve('axios'),
  },
};

module.exports = config;
