const chromeModHeader = require('chrome-modheader');

exports.config = {
  runner: "local",
  specs: [
    "./features/*.feature"
  ],
  capabilities: [{
    maxInstances: 1,
    browserName: "chrome",
    "goog:chromeOptions": {
      extensions: [chromeModHeader.getEncodedExtension()],
      args: ['--no-sandbox', '--window-size=1920,1080','--disable-dev-shm-usage'],
    }
  }],
  logLevel: "warn",
  framework: "cucumber",
  cucumberOpts: {
    require: ["./step_definitions/*.js"],
    timeout: 10000,
    tags: ["@smoke"], // Define tags if you want to run specific scenarios
    format: [], // Add reporting formats if needed
  },
  services: ["chromedriver"],
  before: function () {
    const chai = require('chai');
    global.expect = chai.expect;
  }
};
