var { Given, When, Then } = require("@cucumber/cucumber");

When(/^user validate the (.*) page title "([^"]*)"$/, function (pageName, pageTitle) {
  console.log("User verifies the page title : " + pageTitle + " in " + pageName + " page");
});

