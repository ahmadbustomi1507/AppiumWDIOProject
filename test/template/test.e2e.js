const { expect, browser } = require('@wdio/globals');
const AuthPage = require('../../pages/auth/auth.page');

describe('My Login application', () => {

    it('should error with invalid credentials', async () => {
        await AuthPage.login("A9000098", "lala");
        expect(await AuthPage.isErrorDisplayed()).toBe(true);
    });

    it('should error with empty value', async () => {
        await AuthPage.login(" ", " ");
        await driver.hideKeyboard();
    });

    it('should invalid when acc already login before', async () => {
        await AuthPage.login("A9000020", "Astralife123");
    });

    it('should login with valid credentials', async () => {
        await AuthPage.login("A9000098", "Astra1234");
        expect(await AuthPage.isRestoreButtonDisplayed()).toBe(true);
        await AuthPage.clickRestoreButton();
    });

});
