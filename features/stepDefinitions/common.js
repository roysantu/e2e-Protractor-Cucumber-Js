var { Given, When, Then, After } = require("@cucumber/cucumber");
var basePage = require('../pages/BasePage.js');

const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const { browser } = require("protractor");

chai.use(chaiAsPromised)
var expect = chai.expect;

// After(function () {
//   console.log("Inside After");
//   if (scenario.isFailed()) {
//       const world = this;
//       return browser.takeScreenshot().then(function (screenShot) {
//           world.attach(screenShot, "image/png");
//       });
//   }
// });

When(/^user validate the (.*) page title "([^"]*)"$/, {timeout: 2 * 10000}, function (pageName, pageTitle) {
  console.log("User verifies the page title : " + pageTitle + " in " + pageName + " page");
  
  return expect(basePage.getTitle()).to.eventually.equal(pageTitle, "Page title validated-Passed");
  
});

