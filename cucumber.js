// cucumber.js
module.exports = {
    default: {
        paths: ['src/**/*.feature'],
        require: ['src/**/*.ts'],
        requireModule: ['ts-node/register'],
        format: [
            'progress',
            'html:reports/cucumber-report.html'
        ],
        formatOptions: {
            snippetInterface: 'async-await'
        },
        publishQuiet: true // Suppresses the publishing message
    },
    api1: {
        paths: ['src/api1/*.feature'],
        require: ['src/api1/*.ts'],
        requireModule: ['ts-node/register'],
        format: [
            'progress',
            'html:reports/api1-report.html'
        ],
        publishQuiet: true // Suppresses the publishing message
    },
    api2: {
        paths: ['src/api2/*.feature'],
        require: ['src/api2/*.ts'],
        requireModule: ['ts-node/register'],
        format: [
            'progress',
            'html:reports/api2-report.html'
        ],
        publishQuiet: true // Suppresses the publishing message
    }
};