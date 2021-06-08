var { Given, When, Then } = require("@cucumber/cucumber");

const propertiesReader = require("properties-reader");
const prop = propertiesReader('./features/properties/prop.properties');
const mock = prop.get("Mock");

const log4js = require("log4js");
const logger = log4js.getLogger();
logger.level = 'info';

var basePage = require('../pages/BasePage.js');

Given(/^user navigates to "(.*)" page$/, { timeout: 2 * 10000 }, async function (pageName) {
  var appURL;
  logger.info("mock value: " + mock);
  if (mock) {
    pageName = "MockURL";
    logger.info("Opening google.com as mock: " + pageName);
  } else {
    pageName = prop.get(pageName);
    logger.info("User launches app: " + pageName);
  }
  logger.info(pageName);
  browser.ignoreSynchronization = true;
  await basePage.openUrl(pageName).then(function () {
    browser.sleep(5000);
  });

});