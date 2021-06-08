const { browser } = require("protractor");
const propertiesReader = require('properties-reader');
const prop = propertiesReader('./features/properties/prop.properties');
const log4js = require("log4js");
const logger = log4js.getLogger();
logger.level = 'info';

module.exports = {
    openUrl: async function (pageName) {
        let url = prop.get(pageName);
        return await browser.driver.get(url).then(async function () {
            await browser.driver.sleep(3000);

            logger.info("Url: " + url + "Opened for " + pageName);
        });
    },

    getTitle: async function () {
        await browser.driver.sleep(1000);
        logger.info("Getting page Title");
        return await browser.driver.getTitle();
        
    },

    getTitleAsString: async function () {
        await browser.driver.sleep(1000);
        return await browser.driver.getTitle().then(function (text) {
            let title = text.toString();
            return title;
        });
    },

}