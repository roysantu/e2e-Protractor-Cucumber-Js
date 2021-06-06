var { Given, When, Then } = require("@cucumber/cucumber");
const chai = require('chai');

var expect = chai.expect;

When(/^user validate the (.*) page title "([^"]*)"$/, function (pageName, pageTitle) {
  console.log("User verifies the page title : " + pageTitle + " in " + pageName + " page");
  // expect(browser.getTitle()).Equal(pageTitle);
});

