var { Given, When, Then } = require("@cucumber/cucumber");
// var {browser} = require('protractor-cucumber-framework')

Given(/^user navigates to (.*) page$/, function (pageName) {
    var appURL = pageName; // TODO update page url from different config file
    console.log("User launches app: " + pageName);
    browser.get('https://angularjs.org');
    
  });