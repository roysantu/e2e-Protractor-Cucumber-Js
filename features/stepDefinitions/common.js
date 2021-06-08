var { Given, When, Then, After } = require("@cucumber/cucumber");
var basePage = require('../pages/BasePage.js');

const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const { browser } = require("protractor");

const log4js = require("log4js");
const logger = log4js.getLogger();
logger.level = 'info';

chai.use(chaiAsPromised)
var expect = chai.expect;

const propertiesReader = require("properties-reader");
const or = propertiesReader("./features/ObjectRepository/or.properties");
const prop = propertiesReader('./features/properties/prop.properties');
const mock = prop.get("Mock");

When(/^user validate the (.*) page title "([^"]*)"$/, { timeout: 2 * 10000 }, async function (pageName, expectedPageTitle) {
  logger.info("User verifies the page title : " + expectedPageTitle + " in " + pageName + " page");
  
  if (mock) {
    let actualPageTitle = "MassMutual — MMExercise-I";
    return expect(actualPageTitle).to.equal(expectedPageTitle, "Page title validated-Passed");
  } else {
    return expect(basePage.getTitle()).to.eventually.equal(expectedPageTitle, "Page title validated-Passed");
  }
});

