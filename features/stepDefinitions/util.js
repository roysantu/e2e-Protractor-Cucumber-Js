var getComputedStyleVisibility = async function(elementToCheck) {
    return await browser.executeScript(
        webElem => (window.getComputedStyle(webElem).visibility),
        await elementToCheck.getWebElement()
    );
}

