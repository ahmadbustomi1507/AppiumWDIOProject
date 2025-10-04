const { $ } = require('@wdio/globals');

class AuthPage {
    /**
     * Define elements
     */
    get usernameInput() {
        return $('//XCUIElementTypeTextField[@value="Your Account Name Here" and @index="3"]');
    }

    get passwordInput() {
        return $('//XCUIElementTypeSecureTextField[@value="**********" and @index="4"]');
    }

    get errorMessage() {
        return $('//XCUIElementTypeStaticText[@name="Fail to authenticate user"]');
    }
    get loginButton(){
        return $('//XCUIElementTypeButton[@name="Login"]');
    }

    get restoreButton() {
        return $('//XCUIElementTypeButton[@name="Restore"]');
    }

    /**
     * Methods
     */
    async login(username, password) {
        await this.usernameInput.waitForDisplayed({ timeout: 10000 });
        await this.usernameInput.setValue(username);
        
        await this.passwordInput.waitForDisplayed({ timeout: 1000 });
        await this.passwordInput.setValue(password);

        await this.loginButton.waitForDisplayed({ timeout: 5000});
        await this.loginButton.click(); 
    }

    async isErrorDisplayed() {
        await this.errorMessage.waitForDisplayed({ timeout: 5000 });
        return await this.errorMessage.isDisplayed();
    }

    async isRestoreButtonDisplayed() {
        await this.restoreButton.waitForDisplayed({ timeout: 50000 });
        return await this.restoreButton.isDisplayed();
    }

    async clickRestoreButton() {
        await this.restoreButton.click();
    }
}

module.exports = new AuthPage();
