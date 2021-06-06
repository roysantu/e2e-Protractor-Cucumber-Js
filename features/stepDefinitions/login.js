var { Given, When, Then } = require("@cucumber/cucumber");

Then(/^user enters "([^"]*)" and "([^"]*)"$/, function (username, password) {
  console.log("credentials entered: " + username + "," + password);
});

Then(/^user should "([^"]*)" able to login$/, function (loginType) {
  console.log("User logs in type: " + loginType);
});
