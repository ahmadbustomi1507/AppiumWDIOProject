const { $ } = require('@wdio/globals');
const { parseDOB } = require('../../resources/generate.data.js');

class CreateNewCustomerPage {
    get newCustomerButton() {
        return $('~New Customer');
    }
    get nameField(){
        return (name) => $(`//XCUIElementTypeTextField[@value="${name}"]`);
    }
    get nameOptionField()
    {
        return $('//XCUIElementTypeStaticText[@name="Nama (sesuai ID)*"]/parent::XCUIElementTypeOther/parent::XCUIElementTypeOther/XCUIElementTypeOther[@value="\n"]'); 
    }
    get nameOptionFieldDetailPage()
    {
        return (val) =>  $(`//XCUIElementTypeStaticText[@name="Nama (sesuai ID)"]/parent::XCUIElementTypeOther/parent::XCUIElementTypeOther/XCUIElementTypeOther[@value="${val}"]`); 
    }
    get nameOption() {
        return (name) => $(`//XCUIElementTypeButton[@name="${name}"]`);
    }
    get datePickerField(){
        return $('//XCUIElementTypeStaticText[@name= "Tanggal Lahir *"]/parent::XCUIElementTypeOther/following-sibling::XCUIElementTypeOther[1]')
    }
    get showYearPickerButton(){
        return $('//XCUIElementTypeButton/XCUIElementTypeButton[contains(@value, "2025")]');
    }
    get yearPickerButton(){
        return $('//XCUIElementTypePickerWheel[@index="1"]');
    }
    get monthPickerButton(){
        return $('//XCUIElementTypePickerWheel[@index="0"]');
    }
    get dayPickerButton(){
        return (numb) => $(`//XCUIElementTypeStaticText[@name="${numb}"]`);
    }
    get doneButton(){
        return $('~Done');
    }
    get smokerButton(){
        return $('//XCUIElementTypeStaticText[@label="Perokok *"]/parent::XCUIElementTypeOther/following-sibling::XCUIElementTypeOther[1]');
    }
    get smokerOption(){
        return (val) => $(`//XCUIElementTypeButton[@name="${val}"]`);
    }
    get valueSmokerOption(){
        return (val) => $(`(//XCUIElementTypeOther[@value="${val}"])[2]`)
    }
    get jobField(){
        return $('//XCUIElementTypeStaticText[@name="Pekerjaan *"]/parent::XCUIElementTypeOther/parent::XCUIElementTypeOther/XCUIElementTypeTextField');
    }
    get jobOption(){
        return (val) => $(`//XCUIElementTypeOther[@name="${val}"]`);
    }
    get valueJob(){
        return (val) => $(`//XCUIElementTypeTextField[@value="Karyawan Swasta Non-Bank "]`);
    }
    get sourceLeadButton(){
        return $('//XCUIElementTypeStaticText[@name="Source Lead *"]/parent::XCUIElementTypeOther/parent::XCUIElementTypeOther/XCUIElementTypeOther[@value="\n"]');
    }
    get valueSourceLead(){
        return (val) => $(`//XCUIElementTypeStaticText[@name="Source Lead"]/parent::XCUIElementTypeOther/parent::XCUIElementTypeOther/XCUIElementTypeOther[@value="${val}"]`);
    }
    get sourceLeadOption() {
        return (option) => $(`//XCUIElementTypeButton[@name="${option}"]`);
    }
    get rmCodeField(){
        return (val) => $(`//XCUIElementTypeTextField[@value="${val}"]`);
    }
    get verifyButton(){
        return $('~Verify');
    }
    get newQuotationButton(){
        return $('~New Quotation');
    }
    get saveButton(){
        return $('//*[contains(normalize-space(@label), "Save")]');
    }
    get existingCustomer(){
        return $('~Existing Customer')
    }
    get searchCustNameField(){
        return $('//XCUIElementTypeStaticText[@name="Customer Name"]/parent::XCUIElementTypeOther/parent::XCUIElementTypeOther/parent::XCUIElementTypeOther/following-sibling::XCUIElementTypeOther/XCUIElementTypeOther[1]/XCUIElementTypeTextField')
    }
    get valueSearchCustNameField(){
        return $('//XCUIElementTypeStaticText[@name="Customer Name"]/parent::XCUIElementTypeOther/parent::XCUIElementTypeOther/parent::XCUIElementTypeOther/parent::XCUIElementTypeOther/XCUIElementTypeOther[3]/XCUIElementTypeOther[1]/XCUIElementTypeStaticText');
    }
    get nextPopUpButton(){
        return $('~Teruskan');
    }
    get invalidButton(){
        return $('//XCUIElementTypeSwitch[@value="0"]');
    }
    get elementbyValue(){
        return (val) => $(`~${val}`);
    }
   

    async clickNewCustomerButton(){
        await this.newCustomerButton.waitForDisplayed({timeout:20000})
        let isVisible = false;
        while (isVisible == false) {
            await this.newCustomerButton.click();
            const buttons = await this.elementbyValue('Enter Customer Information').isDisplayed();
                if (buttons == true) {
                    isVisible = true;
                }
        }
    }
    
    async pickNameOption(nameOption){
        await this.nameOptionField.waitForDisplayed({timeout : 20000});
        await this.nameOptionField.click();
        await this.elementbyValue(nameOption).click();
    }
    async pickSourceLead(value){
        await this.sourceLeadButton.click();
        await this.elementbyValue(value).click();
    }

    async pickDOB(params = {}){
        const { 
            dateNumber, 
            month, 
            year
        } = params;
        await this.datePickerField.click();
        await this.dayPickerButton(dateNumber).click();
        await this.showYearPickerButton.click();
        await this.yearPickerButton.setValue(year);
        await this.monthPickerButton.setValue(month);
        await this.doneButton.click();  
    }

    async pickSmokerOption(val){

        await this.smokerButton.click();
        await this.elementbyValue(val).click();
        

    }
    
    async fillRMCode(val){
       // await this.rmCodeField("RM Code").waitForDisplayed({timeout: 1000});
        await this.rmCodeField("RM Code").setValue(val);
        await this.verifyButton.click();
    }

    async fillJob(val){
        await this.jobField.setValue(val);
        await this.elementbyValue(val).click()

    }

    async searchCustomerName(name){
        await this.searchCustNameField.setValue(name);
        await this.valueSearchCustNameField.click();
        await this.nextPopUpButton.waitForDisplayed({timeout:5000});
        await this.nextPopUpButton.click();
    }

    async isDataCustDisplayed(params = {}){
        const { 
            nameOption, 
            name, 
            sourceLeadOption,
            optionSmoker,
            codeRM,
            job
        } = params;
        expect(await this.nameField(name).isDisplayed()).toBe(true);
        expect(await this.nameOptionFieldDetailPage(nameOption).isDisplayed()).toBe(true);
        expect(await this.valueSmokerOption(optionSmoker).isDisplayed()).toBe(true);
        expect(await this.valueSourceLead(sourceLeadOption).isDisplayed()).toBe(true);
        expect(await this.rmCodeField(codeRM).isDisplayed()).toBe(true);
        expect(await this.elementbyValue(job).isDisplayed()).toBe(true);
    
    }

    async fillCustomerInformation(params = {}){
        const { 
            nameOption, 
            name, 
            sourceLeadOption,
            optionSmoker,
            codeRM,
            job,
            dob,
            gender
        } = params;
        const { dateNumber, month, year } = parseDOB(dob);
        await this.clickNewCustomerButton();
        await this.pickNameOption(nameOption);
        if (nameOption == 'Anak') {
            await this.elementbyValue(gender).click(); 
        }
        await this.nameField('Nama').setValue(name);
        await this.pickDOB({
            dateNumber: dateNumber,
            month : month,
            year : year
        });
        await this.invalidButton.click();
        await this.pickSmokerOption(optionSmoker);
        await this.fillJob(job);
        await this.pickSourceLead(sourceLeadOption);
        await this.fillRMCode(codeRM);

    }

    async saveCustomerInformation(params = {}) {
        const {  
            name, 
        } = params;
        await this.saveButton.scrollIntoView();
        await this.saveButton.click();
        await this.searchCustomerName(name);
        
    }

    async clickNewQuotation(){
        await this.newQuotationButton.click();
    }

}

module.exports = new CreateNewCustomerPage();