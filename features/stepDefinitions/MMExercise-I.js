var { Given, When, Then } = require("@cucumber/cucumber");
const propertiesReader = require("properties-reader");
var or = propertiesReader("./features/ObjectRepository/or.properties");
const prop = propertiesReader('./features/properties/prop.properties');
const mock = prop.get("Mock");

var basePage = require('../pages/BasePage.js');
var mmExercisePage = require('../pages/MMExerciseIPage.js');

const chai = require("chai");
const chaiAsPromised = require("chai-as-promised");
const { $, element, browser } = require("protractor");

chai.use(chaiAsPromised);
var expect = chai.expect;

const log4js = require("log4js");
const logger = log4js.getLogger();
logger.level = 'info';


var mmExercisePageElem = mmExercisePage.pageElements;

Then("user verifies total counts of value labels equal to {int}", { timeout: 2 * 5000 }, function (expectedCount) {
    let valueLabelsCount = mmExercisePage.getValueLabelsCountAsNumber();
    return expect(valueLabelsCount).to.equal(expectedCount);
});

Then("user verifies total counts of value texts fields equal to {int}", { timeout: 2 * 5000 }, function (expectedCount) {
    let valueLabelsCount = mmExercisePage.getValueTextFieldsCountAsNumber();
    return expect(valueLabelsCount).to.equal(expectedCount);
});

Then("user verifies the value of text field instance {int} is greater than {float}", { timeout: 2 * 10000 }, async function (valueFieldInstance, greaterThanValue) {
    let actualValue;
    logger.info("Value field #" + valueFieldInstance + " should be more than " + greaterThanValue);

    actualValue = await mmExercisePage.getValueAsNumber(valueFieldInstance);
    logger.info("Actual value: " + actualValue + "; Expected to be greater than " + greaterThanValue);
    return expect(actualValue).to.greaterThan(greaterThanValue);

});

Then("user verifies all values are greater than {float}", async function (greaterThanValue) {
    logger.info("All the Value fields should be more than " + greaterThanValue);

    let allValueFieldsCount = await mmExercisePage.getValueLabelsCountAsNumber();

    for (i = 1; i <= allValueFieldsCount; i++) {
        logger.info("Value field instane: " + i);
        let actualValue = await mmExercisePage.getValueAsNumber(i);
        logger.info("Actual value: " + actualValue + "; Expected to be greater than " + greaterThanValue);
        expect(actualValue).to.greaterThan(greaterThanValue);
    }
});

Then("user verifies Total Balance values is greater than {float}", async function (greaterThanValue) {
    logger.info("Total Balance values should be more than " + greaterThanValue);

    let totalBalanceValues = await mmExercisePage.getTotalBalance();

    logger.info("Actual value: " + totalBalanceValues + "; Expected to be greater than " + greaterThanValue);
    expect(totalBalanceValues).to.greaterThan(greaterThanValue);
});

Then("user verifies sum of all the values matches Total Balance", async function () {
    let allValueFieldsCount = await mmExercisePage.getValueLabelsCountAsNumber();
    let totalBalanceValues = await mmExercisePage.getTotalBalance();

    logger.info("This will sum all the " + allValueFieldsCount);

    let sumOfValues = await mmExercisePage.sumOfValueAsNumber();
    logger.info("Sum value is: " + sumOfValues + "; Total Value: " + totalBalanceValues);
    expect(sumOfValues).to.equal(totalBalanceValues);
});

Then(/^user verifies all currency format of (.*) fields as currency "([^"]*)"$/, { timeout: 2 * 10000 }, async function (fieldName, expectedCurrency) {
    var allValueFieldsCount;
    if(fieldName=='value') {
        allValueFieldsCount = await mmExercisePage.getValueLabelsCountAsNumber();
        
    } else {
        allValueFieldsCount=1;
    }
    
    let pseudoElemName = '::before';
    let pesudoElemPropertyName = 'content';
    let locatorCss;

    for (i = 1; i <= allValueFieldsCount; i++) {
        if(fieldName=='value'){
            locatorCss = '#txt_val_' + i;
        } else {
            locatorCss = '#txt_ttl_val';
        }

        expect(await mmExercisePage.getPseudoElemAttribute(locatorCss, pseudoElemName, pesudoElemPropertyName)).to.include(expectedCurrency);
    }

});
