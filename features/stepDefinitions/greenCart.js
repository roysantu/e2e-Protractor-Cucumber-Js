var { Given, When, Then } = require("@cucumber/cucumber");
var propertiesReader = require("properties-reader");
var or = propertiesReader("./features/ObjectRepository/or.properties");

const chai = require("chai");
const chaiAsPromised = require("chai-as-promised");
const { $ } = require("protractor");

chai.use(chaiAsPromised);
var expect = chai.expect;

Then(
    "user verifies total count of products as {int}",
    function (expectedCount) {
        let allProducts = element.all(by.css(or.get("allProducts_CSS")));
        return expect(allProducts.count()).to.eventually.equal(expectedCount);
    }
);

Then("user adds product number {int} to cart", function (productInstance) {
    let selectedProduct = element.all(by.css(or.get("allProducts_CSS"))).get(productInstance);
    selectedProduct.$("button").click();
});

Then(/^user verifies price "([^"]*)" cart preview$/, { timeout: 2 * 5000 }, async function (expectedPrice) {
    element(by.css(or.get("cartPreview_CSS"))).click();
    // let firstItemAmountInCart = element(by.css(or.get("cartFirstItemAmount_CSS")));
    // expect(firstItemAmountInCart.getText()).to.eventually.equal(expectedPrice.toString());

    return element(by.css(or.get("cartFirstItemAmount_CSS"))).getText().then(function (elemText) {
        console.log(elemText);
        return expect(elemText).to.equal(expectedPrice);
    });
});

Then(/^user verifies amount currency as "([^"]*)"$/, { timeout: 2 * 5000 }, function (string) {
    
});

Then("user verifies the product amounts are greater than {int}", function (greaterThanValue) {
    console.log("All the Value fields should be more than " + greaterThanValue);
}
);

