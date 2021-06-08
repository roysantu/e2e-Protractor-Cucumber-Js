const { browser, element } = require("protractor");
const propertiesReader = require("properties-reader");
const or = propertiesReader("./features/ObjectRepository/or.properties");
const prop = propertiesReader('./features/properties/prop.properties');
const mock = prop.get("Mock");

const { expect } = require("chai");
const log4js = require("log4js");
const logger = log4js.getLogger();
logger.level = 'info';

module.exports = {
    pageElements: {
        allIblValues: element.all(by.xpath(or.get("allIblValues_Xpath"))),
        allTextsValues: element(by.xpath(or.get("allIblTexts_Xpath"))),
        TotalIblValues: element(by.css(or.get("TotalIblValues_CSS"))),
        TotalIblTexts: element(by.css(or.get("TotalIblTexts_CSS")))
    },

    mockAmounts: {
        value_1: 122365.24,
        value_2: 599.00,
        value_3: 850139.99,
        value_4: 23329.50,
        value_5: 566.27,
        total_Value: 1000000.00
    },

    mockCurrencyType: {
        USD: "$"
    },

    getValueLabelsCountAsNumber: function () {
        if (mock) {
            logger.info("Mock count of value labels: " + 5);
            return 5;
        } else {
            let thisElem = this.pageElements;
            return thisElem.allIblValues.count().then(async function (count) {
                elemCount = parseInt(count);
                return elemCount;
            });;
        }
    },

    getValueTextFieldsCountAsNumber: function () {
        if (mock) {
            logger.info("Mock count of value Text fields: " + 5);
            return 5;
        } else {
            let thisElem = this.pageElements;
            return thisElem.allTextsValues.count().then(async function (count) {
                elemCount = parseInt(count);
                return elemCount;
            });;
        }
    },

    getValueAsNumber: async function (elem) {
        let thisValue = this.mockAmounts;
        if (mock) {
            switch (elem) {
                case 1:
                    return thisValue.value_1;
                case 2:
                    return thisValue.value_2;
                case 3:
                    return thisValue.value_3;
                case 4:
                    return thisValue.value_4;
                case 5:
                    return thisValue.value_5;
                default:
                    return 100;
            }
        } else {
            return await elem.getText().then(async function (text) {
                elemValue = parseFloat(text);
                logger.info("Value : " + elemValue);
                return elemValue;
            });
        }

    },

    getTotalBalance: async function () {
        let thisValue = this.mockAmounts;
        if (mock) {
            logger.info("Mock total balance Value : " + thisValue.total_Value);
            return thisValue.total_Value;
        } else {
            return await elem.getText().then(async function (text) {
                elemValue = parseFloat(text);
                logger.info("Value : " + elemValue);
                return elemValue;
            });
        }
    },

    sumOfValueAsNumber: async function (elems) {
        var sumNum = 0;

        if (mock) {
            let thisValue = this.mockAmounts;
            let mockValueArray = Object.values(thisValue);

            for (i = 0; i < mockValueArray.length - 1; i++) {
                let tempValue = parseFloat(mockValueArray[i]);
                logger.info("value#" + i + ": " + sumNum);
                sumNum = sumNum + tempValue;
            }
        } else {
            let count = await this.getFieldCountAsNumber(elems);
            for (i = 0; i < count; i++) {
                let selectedValueField = elems.get(i);
                sumNum = sumNum + await this.getValueAsNumber(selectedValueField);
            }
        }
        logger.info("Total Value is: " + sumNum);
        return sumNum;
    },

    getPseudoElemAttribute: async function (locatorCss, pseudoElemName, pesudoElemPropertyName) {
        let jsScript = 'return window.getComputedStyle(document.querySelector("' + locatorCss + '"), "' + pseudoElemName + '").' + pesudoElemPropertyName + ';';
        logger.info("JS to execute: " + jsScript);
        
        if (mock) {
            let thisValue = this.mockCurrencyType;
            logger.info("Mock total balance Value : " + thisValue.USD);
            return thisValue.USD;
        } else {
            return browser.executeScript(jsScript).then(async function (text) {
                styleProperty = text;
                logger.info("Currency type : " + styleProperty);
                return styleProperty;
            });
        }

    },

    // checkValueIsGreater: async function (elem, valueToCheckWith) {
    //     return await elem.getText().then(async function (text) {
    //         elemValue = parseFloat(text);
    //         logger.info("Actual value: " + elemValue + "; Expected to be greater than: " + valueToCheckWith);
    //         return expect(elemValue).to.greaterThan(valueToCheckWith);
    //     });
    // },




}