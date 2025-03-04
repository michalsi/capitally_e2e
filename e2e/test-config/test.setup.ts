import path = require("path");

export const testConfig = {
    baseUrl: 'https://app.mycapitally.com/project',
    testDataPath: path.join(__dirname, '../data/'),
    defaultTimeout : 30000,
    retries: 2
};
