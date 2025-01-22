module.exports = {
    default: {
      require: ['tests/**/*.steps.ts'], // Locate step definitions
      paths: ['tests/**/*.feature'], // Locate all feature files
      requireModule: ['ts-node/register'], // Use TypeScript
      format: ['progress', 'html:reports/cucumber-report.html'], // Output formats
    },
    api1: {
      require: ['tests/api1/**/*.steps.ts'], // Locate step definitions for api1
      paths: ['tests/api1/test1.feature'], // Locate only api1 feature files
      requireModule: ['ts-node/register'],
      format: ['progress', 'html:reports/api1-report.html'],
    },
    api2: {
        require: ['tests/api2/**/*.steps.ts'], // Locate step definitions for api1
        paths: ['tests/api2/test1.feature'], // Locate only api1 feature files
        requireModule: ['ts-node/register'],
        format: ['progress', 'html:reports/api2-report.html'],
      },
  };
  