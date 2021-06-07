var { Given, When, Then } = require("@cucumber/cucumber");

Then(
    "user verifies total count of value fields as {int}",
    function (countOfFields) {
        console.log("Count of Value fields is : " + countOfFields);
    }
);

// Then(
//     "user verifies the value of {string} is greater than {int}",
//     function (fieldName, greaterThanValue) {
//         console.log(
//             "Value for field " +
//             fieldName +
//             " should be more than " +
//             greaterThanValue
//         );
//     }
// );

Then(
    "user verifies the value fields are greater than {int}",
    function (greaterThanValue) {
        console.log("All the Value fields should be more than " + greaterThanValue);
});

Then("user sum up total amount in value fields", function () {
    console.log("Adding all the values");
});

Then("user verifies Total Balance", function () {
    console.log("Get Total Value and compare with world param total-assertions");
});

Then("user verifies format of field {string} as currency {string}",function (fieldName, currencyType) {
        console.log("Currency format for " + fieldName + " is " + currencyType);
});
