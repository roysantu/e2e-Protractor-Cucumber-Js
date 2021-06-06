exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  // directConnect: true,

  getPageTimeout: 60000,
  allScriptTimeout: 50000,

  // set to "custom" instead of cucumber.
  framework: "custom",

  // path relative to the current config file
  frameworkPath: require.resolve("protractor-cucumber-framework"),

  capabilities: {
    "browserName": "chrome"
  },

  // multiCapabilities: [{
  //   "browserName": "chrome"
  // },
  // {
  //   "browserName": "firefox"
  // }],

  // maxSession: 2,

  // require feature files
  specs: [
    "features/MMExercise-1.feature", // accepts a glob
  ],

  cucumberOpts: {
    // require step definitions
    // tags: false,
    format: 'json:report/cukereport.json',
    require: [
      'features/stepDefinitions/*.steps.js' // accepts a glob
    ]
  }
};
