var { Given, When, Then } = require("@cucumber/cucumber");

Given(/^user navigates to (.*)$/, function (pageName) {
    console.log("User launches app: " + pageName);
  });