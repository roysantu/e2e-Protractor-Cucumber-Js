var { Given, When, Then, After } = require("@cucumber/cucumber");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');

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

When(/^user validate the (.*) page title "([^"]*)"$/, async function (pageName, pageTitle) {
  console.log("User verifies the page title : " + pageTitle + " in " + pageName + " page");
  return expect(browser.getTitle()).to.eventually.equal(pageTitle);
  
});

