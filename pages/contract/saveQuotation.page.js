const { $, expect, driver, browser } = require('@wdio/globals');
class SaveQuotationPage{
    get typeButton(){
        return (val) => $(`//XCUIElementTypeButton[@name="${val}"]`);
    }
    get customButton(){
        return (val) => $(`~${val}`);
    }
    get pickerCurrency(){
        return $('//XCUIElementTypeStaticText[@name="Mata Uang"]/parent::XCUIElementTypeOther/following-sibling::XCUIElementTypeOther[1]');
    }
    get paymentModeButton(){
        return $('//XCUIElementTypeStaticText[@name="Payment Mode"]/parent::XCUIElementTypeOther/following-sibling::XCUIElementTypeOther[1]');
    }
    get paymentTermButton(){
        return $('//XCUIElementTypeStaticText[@name="Payment Term"]/parent::XCUIElementTypeOther/following-sibling::XCUIElementTypeOther[1]');
    }
    get uangPertanggunganField(){
        return $('//XCUIElementTypeStaticText[@name="Uang Pertanggungan"]/parent::XCUIElementTypeOther/following-sibling::XCUIElementTypeTextField');
    }
    get switchButton(){
        return (val) => $(`//XCUIElementTypeStaticText[@name="${val}"]/parent::XCUIElementTypeOther/preceding-sibling::XCUIElementTypeSwitch`);
    }
    get avaTPDPremiumWaiver(){
        return $('(//XCUIElementTypeSwitch[@value="0"])[1]');
    }
    get avaCIPremiumWaiver(){
        return $('//XCUIElementTypeSwitch[@value="0"]');
    }
    get riplayPersonalButton(){
        return $('//*[@name="RIPLAY Personal"]');
    }
    get scrollBottomElement(){
        return $('//*[@value="100%"]');
    }
    get quotationField(){
        return (val) => $(`//XCUIElementTypeStaticText[@name="${val}"]/parent::XCUIElementTypeOther/following-sibling::XCUIElementTypeOther[1]`);
    }
    get textQuotationField(){
        return (val) => $(`//XCUIElementTypeStaticText[@name="${val}"]/parent::XCUIElementTypeOther/following-sibling::XCUIElementTypeTextField[1]`);
    }

    async pickCurrency(currency){
        await this.pickerCurrency.click();
        await this.typeButton(currency).click();
    }
    async pickPaymentMode(type){
        await this.paymentModeButton.click();
        await this.typeButton(type).click();
    }

    async pickPaymentTerm(number){
        await this.paymentTermButton.click();
        await this.typeButton(number).click();
    }
    async clickAllRiders(){
        const isAVATPDVisible = await this.avaTPDPremiumWaiver.isDisplayed();
        const isCIVisible = await this.avaCIPremiumWaiver.isDisplayed();
        if (isAVATPDVisible) {
            await this.avaTPDPremiumWaiver.click(); 
        }
        if (isCIVisible) {
            await this.avaCIPremiumWaiver.click();
        }
        
    }
    async scrollDocument(){
        let isVisible = false;
        while (isVisible == false) {
            await browser.swipe({
                duration: 100,
                percent: 1, 
            });
            // Check if the "Done" button is visible
            isVisible = await this.typeButton('Done').isDisplayed().catch(() => false);
        }
        
    }
    async clickRiplayPersonal(){
        await driver.execute('mobile: swipe', { direction: 'up' });
       
        await this.customButton('RIPLAY Personal').click();
        await this.typeButton('Ok').waitForDisplayed({timeout:10000});
        await this.typeButton('Ok').click();
        
        await this.scrollDocument();
        await this.typeButton('Done').waitForDisplayed({timeout:5000});
        await this.typeButton('Done').click();
        await this.typeButton('Ok').waitForDisplayed({timeout:5000});
        await this.typeButton('Ok').click();
    }
    async clickNextButtonAfterFillQuotation(product){
        await this.typeButton('Next >').click();
        await this.typeButton('Confirm').waitForDisplayed({timeout: 10000});
        await this.typeButton('Confirm').click();
        const isButtonVisible = await this.typeButton('Confirm').isDisplayed();
        if (isButtonVisible) {
            await this.typeButton('Confirm').waitForDisplayed({timeout: 5000});
            await this.typeButton('Confirm').click();
        }
        
        
    }

    async fillAVAInfiniteProtectionQuotation(params = {}){
        const { 
            currency,
            paymentMode,
            sumInsured,
            paymentTerm,
         } = params;
        await this.pickCurrency(currency);
        await this.pickPaymentMode(paymentMode);
        await this.uangPertanggunganField.setValue(sumInsured);
        await this.pickPaymentTerm(paymentTerm);
    }

    async fillAVAProteksiPastiQuotation(params = {}){
        const { 
            currency,
            paymentMode,
            sumInsured,
            paymentTerm,
            waitingPeriodPayment,
            monthlyBasicPremi,
            benefitPaymentStages
         } = params;
         await this.pickCurrency(currency);
         await this.quotationField('Frekuensi Pembayaran Premi').click();
         await this.typeButton(paymentMode).click();
         await this.quotationField('Masa Pembayaran Premi').click();
         await this.typeButton(paymentTerm).click();
         await this.quotationField('Masa Tunggu Pembayaran Manfaat Tahapan').click();
         await this.typeButton(waitingPeriodPayment).click(); //6
         await this.textQuotationField('Premi Produk Dasar Bulanan').setValue(monthlyBasicPremi);
         await this.quotationField('Masa Pembayaran Manfaat Tahapan').click();
         await this.typeButton(benefitPaymentStages).click(); //10
         await this.textQuotationField('Premi Produk Dasar '+paymentMode).setValue('25750000');
         await this.textQuotationField('Masa Pertanggungan Asuransi').setValue('25');
         await this.textQuotationField('Premi Produk Dasar Tahunan').setValue('50000000');
         await this.uangPertanggunganField.setValue(sumInsured);
        


    }

    async saveQuotation(params = {}){
        const { 
            product,
            currency,
            paymentMode,
            sumInsured,
            paymentTerm,
            useRiders,
            waitingPeriodPayment,
            monthlyBasicPremi,
            benefitPaymentStages
         } = params;

        await this.typeButton(product).click();
        switch (product) {
            case 'AVA Infinite Protection':
                await this.fillAVAInfiniteProtectionQuotation({
                    currency: currency,
                    paymentMode: paymentMode,
                    sumInsured: sumInsured,
                    paymentTerm: paymentTerm
                });
                break;
            case 'AVA Proteksi Pasti':
                await this.fillAVAProteksiPastiQuotation({
                        currency: currency,
                        paymentMode: paymentMode,
                        sumInsured: sumInsured,
                        paymentTerm: paymentTerm,
                        waitingPeriodPayment: waitingPeriodPayment,
                        monthlyBasicPremi: monthlyBasicPremi,
                        benefitPaymentStages: benefitPaymentStages
                    });
                    break;
            default:
                break;
        }
        if (useRiders) {
          await this.clickAllRiders();  
        }
        const isButtonVisible = await this.typeButton('Compute Premium').isDisplayed();
        if (isButtonVisible) {
            await this.typeButton('Compute Premium').click();  
        }
        await this.typeButton('Compute').click();
        await this.clickRiplayPersonal();
        await this.clickNextButtonAfterFillQuotation(product);
        
    }


}

module.exports = new SaveQuotationPage();