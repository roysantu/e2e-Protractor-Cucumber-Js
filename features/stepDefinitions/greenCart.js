var { Given, When, Then } = require("@cucumber/cucumber");
var propertiesReader = require("properties-reader");
var or = propertiesReader("./features/ObjectRepository/or.properties");
var basePage = require('../pages/BasePage.js');
var greenCartHomePage = require('../pages/GreenCartHomePage.js');

const chai = require("chai");
const chaiAsPromised = require("chai-as-promised");
const { $, element, browser } = require("protractor");

chai.use(chaiAsPromised);
var expect = chai.expect;

var greenCartHomePageElem = greenCartHomePage.elementsHomePage;

Then("user verifies total count of products as {int}", { timeout: 2 * 5000 }, function (expectedCount) {
    let allProductsCount = greenCartHomePage.getProductCount();
    return expect(allProductsCount).to.eventually.equal(expectedCount);
}
);

Then("user adds product number {int} to cart", { timeout: 2 * 5000 }, async function (productInstance) {
    let selectedProduct = greenCartHomePageElem.allProducts.get(productInstance);
    selectedProduct.$("button").click().then(async function () {
        await browser.driver.sleep(5000);
    });
    // TODO end with validation
});

Then(/^user verifies price "([^"]*)" cart preview$/, { timeout: 2 * 5000 }, async function (expectedPrice) {
    greenCartHomePageElem.cartPreviewIcon.click().then(async function () {
        await browser.driver.sleep(3000);
    });

    return element(by.css(or.get("cartFirstItemAmount_CSS"))).getText().then(function (elemText) {
        console.log(elemText);
        return expect(elemText).to.equal(expectedPrice);
    });
});

Then(/^user verifies amount currency as "([^"]*)"$/, { timeout: 2 * 10000 }, async function (expectedCurrency) {
    let locatorCss = '.cart-preview .amount';
    let pseudoElemName = '::before';
    let pesudoElemPropertyName = 'content';

    return expect(greenCartHomePage.getPseudoElemAttribute(locatorCss, pseudoElemName, pesudoElemPropertyName)).to.eventually.include(expectedCurrency);
});

Then("user verifies all products prices are greater than {float}", async function (greaterThanValue) {
    console.log("All the Value fields should be more than " + greaterThanValue);

    let allProductsCount = await greenCartHomePage.getProductCountAsNumber();

    for (i = 0; i < allProductsCount; i++) {
        let selectedProduct = greenCartHomePageElem.allProducts.get(i);
        // await greenCartHomePageElem.allProducts.get(i).$(".product-price").getText().then(async function (elemText) {
        //     expect(parseFloat(elemText)).to.greaterThan(greaterThanValue);
        //     console.log(elemText);
        // })
        expect(await greenCartHomePage.getProductPrice(selectedProduct)).to.greaterThan(greaterThanValue);
    }
});

Then("user verifies the value of product {int} is greater than {float}", { timeout: 2 * 10000 }, async function (productInstance, greaterThanValue) {
    console.log("Value for field " + productInstance + " should be more than " + greaterThanValue);
    let selectedProduct = greenCartHomePageElem.allProducts.get(productInstance);
    return await greenCartHomePage.checkValueIsGreater(selectedProduct, greaterThanValue);
    // expect(await greenCartHomePage.checkValueIsGreater(selectedProduct)).to.greaterThan(greaterThanValue);
});

Then("user verifies total amount of all the products", async function () {
    var sumNum = 0;

    let allProductsCount = await greenCartHomePage.getProductCountAsNumber();

    console.log("This will sum all the " + allProductsCount + " products prices");
    for (i = 0; i < allProductsCount; i++) {
        let selectedProduct = greenCartHomePageElem.allProducts.get(i);
        sumNum = sumNum + parseFloat(await greenCartHomePage.getProductPrice(selectedProduct));
    }
    console.log("sumNum:   *****" + sumNum);

});

