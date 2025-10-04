import { join } from 'path';
//const appPath = join(process.cwd(), 'app/VitaminPOS.app');
const appPath = join(process.cwd(), 'app/RIPLAY_IPRIME_17FEB.ipa');
//const udid = "27F8F47C-1E0C-4B9D-AB29-463EF6095866";
const udid = "6695c10cc18a5d4241ec6414a301061f2baf3deb";
global.bundleId = "id.co.astralife.app.pos.ios";

export const mobileConf = {
//
        // ============
        // Capabilities
        // ============
        // Define your capabilities here. WebdriverIO can run multiple capabilities at the same
        // time. Depending on the number of capabilities, WebdriverIO launches several test
        // sessions. Within your capabilities you can overwrite the spec and exclude options in
        // order to group specific specs to a specific capability.
        //
        // First, you can define how many instances should be started at the same time. Let's
        // say you have 3 different capabilities (Chrome, Firefox, and Safari) and you have
        // set maxInstances to 1; wdio will spawn 3 processes. Therefore, if you have 10 spec
        // files and you set maxInstances to 10, all spec files will get tested at the same time
        // and 30 processes will get spawned. The property handles how many capabilities
        // from the same test should run tests.
        //
        maxInstances: 10,
        //
        // If you have trouble getting all important capabilities together, check out the
        // Sauce Labs platform configurator - a great tool to configure your capabilities:
        // https://saucelabs.com/platform/platform-configurator
        //
        // capabilities: [
        //     {
        //     platformName: 'iOS',
        //     "appium:udid": "27F8F47C-1E0C-4B9D-AB29-463EF6095866",
        //     "appium:automationName": "XCUITest",
        //     'appium:app': appPath,
        //     'appium:bundleId': 'id.co.astralife.app.pos.ios',
        //     'appium:noReset': false,
        // }
        capabilities: [
            {
            platformName: 'iOS',
            "appium:udid": udid,
            "appium:automationName": "XCUITest",
            'appium:app': appPath,
            'appium:bundleId': bundleId,
            'appium:noReset': true,
            'appium:fullReset': false,
           

        }
    ],
    

}