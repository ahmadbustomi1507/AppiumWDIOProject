const { $, expect } = require('@wdio/globals');
class SaveRiskProfilePage {
    get existingCustomerButton() {
        return $('//*[@name="Existing Customer"]');
    }
    get newQuotationButton(){
        return $('//*[@name="New Quotation"]');
    }
    get existingQuotationButton(){
        return $('//*[@name="Existing Quotation"]');
    }
    get productTypeButton(){
        return (val) => $(`//*[@name="${val}"]`);
    }
    get customerInfoButton(){
        return $('~Customer Info >');
    }
    get quotationButton(){
        return $('~Quotation >');
    }
    get elementByValue(){
        return (val) => $(`//*[@value="${val}"]`);
    }
    async clickProductTypeButton(product){
        await this.productTypeButton(product).waitForDisplayed({timeout: 5000});
        await this.productTypeButton(product).click();
    }
    async clickExistingButton(){
        await this.existingCustomerButton.waitForDisplayed({timeout: 20000});
        let isVisible = false;
        while (isVisible == false) {
            await this.existingCustomerButton.click();
            const buttons = await this.elementByValue('Existing Customer').isDisplayed();
                if (buttons == true) {
                    isVisible = true;
                }
        }
    }
    async clickNewQuotationButton(){
        await this.newQuotationButton.scrollIntoView();
        await this.newQuotationButton.click();
    }
    async clickExistingQuotationButton(){
        await this.existingQuotationButton.scrollIntoView();
        await this.existingQuotationButton.click();
    }
    async clickCustInfoButton(){
        await this.customerInfoButton.click();
    }
    async clickQuotationButton(){
        await this.quotationButton.click();
    }
    
    async verifyCustomerInfo(params = {}) {
    const { 
        nameOption, 
        name, 
        job
       
    } = params;
        expect(await this.elementByValue(nameOption).isDisplayed()).toBe(true);
        expect(await this.elementByValue(name).isDisplayed()).toBe(true);
        expect(await this.elementByValue(job).isDisplayed()).toBe(true);


   }
   
   async fillCustomerInfo(params = {}){
    const { 
        isEqualPolicyHolder, 
        name, 
        job
       
    } = params;
        if (isEqualPolicyHolder) {
            
            
        }
   }

}

module.exports = new SaveRiskProfilePage();