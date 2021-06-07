var localUtil = {};

var getComputedStyleVisibility = async function(elementToCheck) {
    return await browser.executeScript(
        webElem => (window.getComputedStyle(webElem).visibility),
        await elementToCheck.getWebElement()
    );
}

localUtil.getTextFromPromise = function getTextFromPromise(tempObject) {
    $('a.some-link').getText().then(function (txt) {
        tempObject.textFromFirstPage = txt;
    });
}
