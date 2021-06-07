const { browser } = require("protractor");

module.exports = {
    openUrl: function(url) {
        return browser.driver.get(url);
    },

    getTitle: function() {
        return browser.driver.getTitle();
    },

}