const { browser } = require("protractor");
var propertiesReader = require("properties-reader");
var or = propertiesReader("./features/ObjectRepository/or.properties");

module.exports = {
    elementsHomePage: {
        allProducts: element.all(by.css(or.get("allProducts_CSS"))),
        cartPreview: element(by.css(or.get("cartPreview_CSS"))),
        cartFirstItemAmount: element(by.css(or.get("cartFirstItemAmount_CSS")))
    },



    getProductCount: function () {
        var thisElem = this.elementsHomePage;
        return thisElem.allProducts.count();
    },

    OpenCartPreview: function () {
        // TODO add code
    },

}