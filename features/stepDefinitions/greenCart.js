var { Given, When, Then } = require("@cucumber/cucumber");
var propertiesReader = require("properties-reader");
var or = propertiesReader("./features/ObjectRepository/or.properties");
var basePage = require('../pages/BasePage.js');
var greenCartHomePage = require('../pages/GreenCartHomePage.js');

const chai = require("chai");
const chaiAsPromised = require("chai-as-promised");
const { $, element } = require("protractor");

chai.use(chaiAsPromised);
var expect = chai.expect;

var greenCartHomePageElem = greenCartHomePage.elementsHomePage;

Then("user verifies total count of products as {int}", { timeout: 2 * 5000 }, function (expectedCount) {
    let allProductsCount = greenCartHomePage.getProductCount();
    return expect(allProductsCount).to.eventually.equal(expectedCount);
}
);

Then("user adds product number {int} to cart", { timeout: 2 * 5000 }, function (productInstance) {
    // let selectedProduct = element.all(by.css(or.get("allProducts_CSS"))).get(productInstance);
    let selectedProduct = greenCartHomePageElem.allProducts.get(productInstance);
    selectedProduct.$("button").click().then(function () {
        browser.sleep(10000);
    });
    // TODO end with validation
});

Then(/^user verifies price "([^"]*)" cart preview$/, { timeout: 2 * 5000 }, async function (expectedPrice) {
    element(by.css(or.get("cartPreview_CSS"))).click().then(function () {
        browser.sleep(3000);
    });;

    return element(by.css(or.get("cartFirstItemAmount_CSS"))).getText().then(function (elemText) {
        console.log(elemText);
        return expect(elemText).to.equal(expectedPrice);
    });
});

Then(/^user verifies amount currency as "([^"]*)"$/, { timeout: 2 * 10000 }, async function (expectedCurrency) {
    // expect(basePage.getTitle).to.eventually.include
    return expect(browser.executeScript('return window.getComputedStyle(document.querySelector(".cart-preview .amount"), "::before").content;')).to.eventually.include(expectedCurrency);
});

Then("user verifies the product amounts are greater than {int}", function (greaterThanValue) {
    console.log("All the Value fields should be more than " + greaterThanValue);
}
);

