var propertiesReader = require('properties-reader');
var prop = propertiesReader('./features/properties/prop.properties');

exports.config = {
  seleniumAddress: prop.get("seleniumAddress"),
  // directConnect: true,

  getPageTimeout: prop.get("pageTimeout"),
  allScriptTimeout: prop.get("allScriptTimeout"),

  // set to "custom" instead of cucumber.
  framework: "custom",

  // path relative to the current config file
  frameworkPath: require.resolve("protractor-cucumber-framework"),

  // capabilities: {
  //   "browserName": "chrome"
  // },

  // multiCapabilities: [{
  //   "browserName": "chrome"
  // },
  // {
  //   "browserName": "firefox"
  // }],

  // maxSession: 2,

  multiCapabilities: [
    {
      browserName: "chrome",
      shardTestFiles: true,
      maxInstances: 2,
      chromeOptions: {
        args: ["disable-infobars"],
      },
    },
  ],

  plugins: [
    {
      package: require.resolve(
        "protractor-multiple-cucumber-html-reporter-plugin"
      ),
      options: {
        // read the options part
        automaticallyGenerateReport: true,
        removeExistingJsonReportFile: true,
      },
    },
  ],

  // require feature files
  specs: [
    prop.get("featurePath"), // accepts a glob
  ],

  cucumberOpts: {
    // require step definitions
    // tags: "@wip",
    // format: 'json:report/cukereport.json',
    format: "json:tmp/results.json",
    require: [
      prop.get("stepDefPath"), // accepts a glob
    ],
  },
};
