// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html

module.exports = {
  // Automatically clear mock calls and instances between every test
  clearMocks: true,

  // A set of global variables that need to be available in all test environments
  globals: {
    __DEV__: false,
  },

  // The test environment that will be used for testing
  testEnvironment: 'node',
};
