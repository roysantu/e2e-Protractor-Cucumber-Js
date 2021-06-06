var { Given, When, Then } = require("@cucumber/cucumber");
// var {browser} = require('protractor-cucumber-framework')

Given(/^user navigates to "([^"]*)" page$/, async function (pageName) {
    var appURL = pageName; // TODO update page url from different config file
    browser.ignoreSynchronization = true
    console.log("User launches app: " + pageName);
    browser.get(pageName);
    // await browser.waitForAngularEnabled(false);
    
  });