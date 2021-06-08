const { browser } = require("protractor");

module.exports = {
    openUrl: async function (url) {
        return browser.driver.get(url).then(async function() {
            await browser.driver.sleep(3000);
        });
    },

    getTitle: async function () {
        await browser.driver.sleep(1000);
        return browser.driver.getTitle();
    },

}