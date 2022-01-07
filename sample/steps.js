const { Given, When, Then } = require('@wdio/cucumber-framework');

// pointing the page
const LoginPage = require('../../login.page');
const SecurePage = require('../../secure.page');

const pages = {
    login: LoginPage
}

Given(/^I am on the (\w+) page$/, async (page) => {
    //await pages[page].open()
});

When(/^I login with (\w+) and (.+)$/, async (username, password) => {
    // await LoginPage.login(username, password)
});

Then(/^I should see a flash message saying (.*)$/, async (message) => {
    // await expect(SecurePage.flashAlert).toBeExisting();
    // await expect(SecurePage.flashAlert).toHaveTextContaining(message);
});

