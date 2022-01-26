// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html

module.exports = {
    // The root directory that Jest should scan for tests and modules within
    rootDir: "dist/",

    // The test environment that will be used for testing
    testEnvironment: "node",

    // Needed to allow Jest to locate dpkg-installed modules
    moduleDirectories: ["node_modules", "refroot/amd64/opt/bb/lib/node"],
};
