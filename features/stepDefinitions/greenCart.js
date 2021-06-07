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

Then("user verifies all products prices are greater than {float}", async function (greaterThanValue) {
    console.log("All the Value fields should be more than " + greaterThanValue);

    var elemCount = 0;
    let allProductsCount = await greenCartHomePage.getProductCount().then(async function (count) {
        elemCount = parseInt(count);
        return elemCount;
    });

    for (i = 0; i < allProductsCount; i++) {
        await greenCartHomePageElem.allProducts.get(i).$(".product-price").getText().then(async function (elemText) {
            expect(parseFloat(elemText)).to.greaterThan(greaterThanValue);
            console.log(elemText);
        })
    }


});

Then("user verifies the value of product {int} is greater than {float}", { timeout: 2 * 10000 }, function (productInstance, greaterThanValue) {
    console.log("Value for field " + productInstance + " should be more than " + greaterThanValue);
    let selectedProduct = greenCartHomePageElem.allProducts.get(productInstance);
    selectedProduct.$(".product-price").getText().then(function (elemText) {
        expect(parseFloat(elemText)).to.greaterThan(greaterThanValue);
    })
}
);

Then("user sum up total amount of all the products", async function () {
    var sumNum = 0;
    var elemCount = 0;

    let allProductsCount = await greenCartHomePage.getProductCount().then(async function (count) {
        elemCount = parseInt(count);
        return elemCount;
    });

    console.log(allProductsCount);
    for (i = 0; i < allProductsCount; i++) {
        await greenCartHomePageElem.allProducts.get(i).$(".product-price").getText().then(async function (elemText) {
            sumNum = sumNum + parseFloat(elemText);
            console.log(sumNum);
        })
    }
    console.log("sumNum:   *****" + sumNum);

});

