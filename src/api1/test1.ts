import { Given, Then } from '@cucumber/cucumber';

Given('the user is on the home page1', function () {
    console.log("User is on the home page");
});

Then('a message should be printed1', function () {
    console.log("This is a simple message printed to the console.");
});