var { Given, When, Then } = require("@cucumber/cucumber");
var propertiesReader = require('properties-reader');
var prop = propertiesReader('./features/properties/prop.properties');

Given(/^user navigates to "(.*)" page$/, {timeout: 2 * 5000}, async function (pageName) {
    var appURL = prop.get(pageName); // TODO update page url from different config file
    browser.ignoreSynchronization = true;
    console.log("User launches app: " + pageName);
    browser.get(pageName).then(function(){
      browser.sleep(5000);
    });
    
  });