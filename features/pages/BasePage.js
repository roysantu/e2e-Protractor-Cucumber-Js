const { browser } = require("protractor");

module.exports = {
    openUrl: function(url) {
        return browser.get(url);
    },

    getTitle: function() {
        return browser.getTitle();
    },

}