const { browser } = require("protractor");
const propertiesReader = require('properties-reader');
const prop = propertiesReader('./features/properties/prop.properties');

module.exports = {
    openUrl: async function (pageName) {
        let url = prop.get(pageName);
        return await browser.driver.get(url).then(async function() {
            await browser.driver.sleep(3000);
        });
    },

    getTitle: async function () {
        await browser.driver.sleep(1000);
        return await browser.driver.getTitle();
    },

    getTitleAsString: async function () {
        await browser.driver.sleep(1000);
        return await browser.driver.getTitle().then(function(text) {
            let title = text.toString();
            return title;
        });
    },

}