const { browser, element } = require("protractor");
var propertiesReader = require("properties-reader");
const { expect } = require("chai");
var or = propertiesReader("./features/ObjectRepository/or.properties");

module.exports = {
    elementsHomePage: {
        allProducts: element.all(by.css(or.get("allProducts_CSS"))),
        cartPreviewIcon: element(by.css(or.get("cartPreviewIcon_CSS"))),
        cartPreview: element(by.css(or.get("cartPreview_CSS"))),
        cartFirstItemAmount: element(by.css(or.get("cartFirstItemAmount_CSS")))
    },

    getProductCount: function () {
        let thisElem = this.elementsHomePage;
        return thisElem.allProducts.count();
    },

    getProductCountAsNumber: async function () {
        let allProducts = this.elementsHomePage.allProducts;
        return await allProducts.count().then(async function (count) {
            elemCount = parseInt(count);
            return elemCount;
        });
    },

    getPseudoElemAttribute: async function (locatorCss, pseudoElemName, pesudoElemPropertyName, ) {
        let jsScript = 'return window.getComputedStyle(document.querySelector("' + locatorCss + '"), "' + pseudoElemName + '").' + pesudoElemPropertyName + ';';
        return browser.executeScript(jsScript);
    },

    checkValueIsGreater: async function (elem, valueToCheckWith) {
        return await elem.$(".product-price").getText().then(async function(text) {
            elemValue = parseFloat(text);
            return expect(elemValue).to.greaterThan(valueToCheckWith);
        });
    },

    getProductPrice: async function (elem) {
        return await elem.$(".product-price").getText().then(async function(text) {
            elemValue = parseFloat(text);
            return elemValue;
        });
    },

    sumProductPrices: async function (elems) {
        let count = await this.getProductCountAsNumber();
        let sumNum = 0;

        for (i = 0; i < count; i++) {
            let selectedProduct = elems.get(i);
            sumNum = sumNum + await this.getProductPrice(selectedProduct);
        }
        return sumNum;
    },

    OpenCartPreview: function () {
        // TODO add code
    }

}