var {BeforeAll, Before, After, AfterAll, BeforeStep, AfterStep} = require('@cucumber/cucumber');

BeforeAll(function(){
    console.log("Initial test suite setup");
});

Before(function(){
    console.log("Inside Before");
});

BeforeStep(function(){
    console.log("Inside Before Step");
});

After(function(){
    console.log("Inside After");
});

AfterStep(function(){
    console.log("Inside After Step");
});

AfterAll(function(){
    console.log("Shutting down");
});