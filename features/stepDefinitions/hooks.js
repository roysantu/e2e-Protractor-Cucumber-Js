var {
    BeforeAll,
    Before,
    After,
    AfterAll,
    BeforeStep,
    AfterStep,
} = require("@cucumber/cucumber");
const { browser } = require("protractor");


BeforeAll(function () {
    console.log("Initial test suite setup");
});

Before(function () {
    console.log("Inside Before");
});

BeforeStep(function () {
    console.log("Inside Before Step");
});

After(function () {
    console.log("Inside After");
    // if (scenario.isFailed()) {
        const world = this;
        return browser.takeScreenshot().then(function (screenShot) {
            const decodeImage = new Buffer(screenShot.replace(/^data:image\/png;base64,/,''), 'base64');
            world.attach(screenShot, "image/png");
        });
    // }
});

AfterStep(function () {
    console.log("Inside After Step");
    // Comment below if screenshot is not needed for each step
    const world = this;
    return browser.takeScreenshot().then(function (screenShot) {
        const decodeImage = new Buffer(screenShot.replace(/^data:image\/png;base64,/,''), 'base64');
        world.attach(screenShot, "image/png");
    });
// }
});

AfterAll(function () {
    console.log("Shutting down");
});
