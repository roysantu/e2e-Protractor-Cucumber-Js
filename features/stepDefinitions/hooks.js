var {
    BeforeAll,
    Before,
    After,
    AfterAll,
    BeforeStep,
    AfterStep,
} = require("@cucumber/cucumber");
const { browser } = require("protractor");

const log4js = require("log4js");
const logger = log4js.getLogger();
logger.level = 'info';


BeforeAll(function () {
    logger.info("Initial test suite setup");
});

Before(function () {
    // console.log("Inside Before");
});

BeforeStep(function () {
    // console.log("Inside Before Step");
});

After(function () {
    logger.info("Taking screenshots after scenario");
        const world = this;
        return browser.takeScreenshot().then(function (screenShot) {
            const decodeImage = new Buffer(screenShot.replace(/^data:image\/png;base64,/,''), 'base64');
            world.attach(screenShot, "image/png");
        });
});

AfterStep(function () {
    logger.info("Taking screenshots after steps");
    const world = this;
    return browser.takeScreenshot().then(function (screenShot) {
        const decodeImage = new Buffer(screenShot.replace(/^data:image\/png;base64,/,''), 'base64');
        world.attach(screenShot, "image/png");
    });
// }
});

AfterAll(function () {
    logger.info("Shutting down browser");
    return this.browser.quit();
});
