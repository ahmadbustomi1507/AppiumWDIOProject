const { $, expect, driver, browser } = require('@wdio/globals');
const { parseDOB } = require('../../resources/generate.data.js');

class SaveProposalPage{
    get customerTab(){
        return $('~Customer');
    }
    get correspondentTab(){
        return $('~Correspondent');
    }
    get addressTab(){
        return $('~Address');
    }
    get factaTab(){
        return $('~FACTA/CRS');
    }
    get otherTab(){
        return $('~Other');
    }
    get valueField(){
        return (val) => $(`~${val}`);
    }
    get hpField(){
        return $('//XCUIElementTypeTextField[@value="No. Handphone"]');
    }
    get countryOfBirthField(){
        return $('//XCUIElementTypeStaticText[@name="Negara Tempat Lahir *"]/parent::XCUIElementTypeOther/following-sibling::XCUIElementTypeOther[@value="\n"][1]');
    }
    get placeOfBirthField(){
        return $('//XCUIElementTypeTextField[@value="Tempat Lahir"]');
    }
    get nationalityField(){
        return $('//XCUIElementTypeStaticText[@name="Kewarganegaraan *"]/parent::XCUIElementTypeOther/following-sibling::XCUIElementTypeOther[@value="\n"][1]');
    }
    get fastTrackField(){
        return $('//XCUIElementTypeStaticText[@name="Fast Track"]/parent::XCUIElementTypeOther/following-sibling::XCUIElementTypeOther[1]');
    }
    get maritalStatusField(){
        return $('//XCUIElementTypeOther[@value="\n"]');
    }
    get nomorIDField(){
        return $('//XCUIElementTypeTextField[@value="Nomor ID"]');
    }
    get motherNameField(){
        return $('//XCUIElementTypeTextField[@value="Nama Gadis Ibu Kandung"]');
    }
    get companyNameField(){
        return $('//XCUIElementTypeTextField[@value="Nama Perusahaan"]');
    }
    get businessField(){
        return $('//XCUIElementTypeStaticText[@name="Bidang Usaha *"]/parent::XCUIElementTypeOther/following-sibling::XCUIElementTypeOther[@value="\n"][1]');
    }
    get correspondentAddressFirst(){
        return $('(//XCUIElementTypeTextField[@value="Alamat"])[1]');
    }
    get correspondentAddressSecond(){
        return $('(//XCUIElementTypeTextField[@value="Alamat"])[1]');
    }
    get subDistrictField(){
        return $('(//XCUIElementTypeTextField[@value="Kelurahan"])[2]')
    }
    get districtField(){
        return $('(//XCUIElementTypeTextField[@value="Kecamatan"])[2]');
    }
    get cityField(){
        return $('(//XCUIElementTypeTextField[@value="Kota"])[2]');
    }
    get provinceField(){
        return $('(//XCUIElementTypeStaticText[@name="Provinsi *"])[2]/parent::XCUIElementTypeOther/following-sibling::XCUIElementTypeOther[@value="\n"][1]');
    }
    get countryField(){
        return $('(//XCUIElementTypeStaticText[@name="Negara *"])[2]/parent::XCUIElementTypeOther/following-sibling::XCUIElementTypeOther[@value="\n"][1]');
    }
    get postalCodeField(){
        return $('(//XCUIElementTypeTextField[@value="Kode Pos"])[2]');
    }
    get phoneOfficeField(){
        return $('//XCUIElementTypeTextField[@value="No. Telpon Kantor"]');
    }
    get faxNoField(){
        return $('//XCUIElementTypeTextField[@value="No. Fax"]');
    }
    get switchButton(){
        return $('//XCUIElementTypeSwitch[@value="0"]');
    }
    get chooseAddressButton(){
        return (val) => $(`(//XCUIElementTypeButton[@name="Choose Address"])[${val}]`);
    }
    get elemChooseAddress(){
        return '(//XCUIElementTypeButton[@name="Choose Address"])';
    }
    get emailField(){
        return $('//XCUIElementTypeTextField[@value="Alamat Email"]');
    }
    get homePhoneField(){
        return $('//XCUIElementTypeTextField[@value="No. Telp Rumah"]');
    }
    get tinNumber(){
        return $('//XCUIElementTypeOther[@name="Nomor Pokok Wajib Pajak (TIN)"]/following-sibling::XCUIElementTypeTextField');
    }
    get npwpNoField(){
        return $('//XCUIElementTypeTextField[@value="No. NPWP"]');
    }
    get cifNoField(){
        return $('//XCUIElementTypeTextField[@value="No. CIF"]');
    }
    get heightField(){
        return $('//XCUIElementTypeTextField[@value="Tinggi (cm)"]');
    }
    get weightField(){
        return $('//XCUIElementTypeTextField[@value="Berat (kg)"]');
    }
    get religionField(){
        return $('//XCUIElementTypeOther[@name="Agama *"]/following-sibling::XCUIElementTypeOther[1]')
    }
    get educationField(){
        return $('//XCUIElementTypeOther[@name="Pendidikan *"]/following-sibling::XCUIElementTypeOther[1]');
    }
    get annualIncomeField(){
        return $('//XCUIElementTypeTextField[@value="Penghasilan Per Tahun (IDR)"]');
    }
    get annualIncome0Field(){
        return $('//XCUIElementTypeTextField[@value="0"]');
    }
    get accountHolderField(){
        return $('//XCUIElementTypeOther[@name="Nama Pemilik Rekening *"]/following-sibling::XCUIElementTypeTextField[1]');
    }
    get bankBranchField(){
        return $('//XCUIElementTypeOther[@name="Nama Cabang *"]/following-sibling::XCUIElementTypeTextField[1]');
    }
    get accountNumberField(){
        return $('//XCUIElementTypeOther[@name="No. Rekening *"]/following-sibling::XCUIElementTypeTextField[1]');
    }
    get typeAccountField(){
        return $('//XCUIElementTypeOther[@value="Saving"]');
    }
    get typeHolderField(){
        return $('//XCUIElementTypeOther[@name="Pemilik Rekening *"]/following-sibling::XCUIElementTypeOther[@value="\n"]');
    }
    get purposeOfInsuranceField(){
        return $('//XCUIElementTypeOther[@name="Tujuan Pengajuan Asuransi *"]/parent::XCUIElementTypeOther/following-sibling::XCUIElementTypeOther[1]');
    }
    get dependentField(){
        return $('//XCUIElementTypeOther[@name="Orang yang Ditanggung secara Financial *"]/parent::XCUIElementTypeOther/following-sibling::XCUIElementTypeOther[1]');
    }
    get premiPaymentSourceField(){
        return $('//XCUIElementTypeOther[@name="Sumber dana pembayaran premi Berasal dari *"]/parent::XCUIElementTypeOther/following-sibling::XCUIElementTypeOther[1]');
    }
    get nameField(){
        return $('//XCUIElementTypeTextField[@value="Nama"]');
    }
    get relationshipWithInsuredField(){
        return $('//XCUIElementTypeStaticText[@name="Hubungan Dengan Tertanggung *"]/parent::XCUIElementTypeOther/following-sibling::XCUIElementTypeOther[@value="\n"][1]');
    }
    get dobField(){
        return $('//XCUIElementTypeStaticText[@name= "Tanggal Lahir*"]/parent::XCUIElementTypeOther/following-sibling::XCUIElementTypeOther[1]');
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
    get allocationPresentationField(){
        return $('//XCUIElementTypeStaticText[@name="Presentase Alokasi (%) *"]/parent::XCUIElementTypeOther/following-sibling::XCUIElementTypeTextField');
    }
    get countryOfResidenceField(){
        return $('//XCUIElementTypeStaticText[@name="Negara Tempat Tinggal *"]/parent::XCUIElementTypeOther/following-sibling::XCUIElementTypeOther[@value="\n"]');
    }
    get countSmokerButton(){
        return $('//XCUIElementTypeStaticText[@name="batang / hari"]/preceding-sibling::XCUIElementTypeTextField');
    }
    get countAlcoholButton(){
        return $('//XCUIElementTypeStaticText[@name="Jumlah per minggu"]/preceding-sibling::XCUIElementTypeTextField[1]');
    }
    get optionNoEveryQuestion(){
        return (val) => $(`//XCUIElementTypeStaticText[contains(@name, "${val}")]/parent::XCUIElementTypeOther/following-sibling::XCUIElementTypeOther[2]`);
    }
    get optionNoLastQuestion(){
        return $('//XCUIElementTypeStaticText[contains(@name, "Apakah Anda mempunyai Polis dan atau sedang mengajukan permintaan Asuransi Jiwa, Asuransi Penyakit Kritis, Asuransi Kecelakaan, Asuransi Kesehatan, Asuransi Lainnya pada perusahaan asuransi lain?")]/parent::XCUIElementTypeOther/parent::XCUIElementTypeOther/following-sibling::XCUIElementTypeOther[2]');
    }
    get optionNo(){
        return (val) => $(`(//XCUIElementTypeOther[@name="Tidak"])[${val}]`)
    }
    get elemNoButton(){
        return '(//XCUIElementTypeOther[@name="Tidak"])';
    }
    
    async pickCountyOfBirth(country){
        await this.countryOfBirthField.click();
        await this.valueField(country).waitForDisplayed({timeout: 5000});
        await this.valueField(country).click();
    }
    async pickPlaceOfBirth(place){
        await this.placeOfBirthField.setValue(place);
        await this.valueField(place).click();
    }
    async pickNationality(country){
        await this.nationalityField.click();
        await this.valueField(country).click();
    }
    async pickFastTrack(){
        await this.fastTrackField.click();
        await this.valueField('VVIP').click();
    }
    async pickMaritalStatus(status){
        await this.maritalStatusField.click();
        await this.valueField(status).click();
    }
    async pickBusinessSector(value){
        await this.businessField.click();
        await this.valueField(value).click();
    }

    async pickProvice(province){
       await this.provinceField.click();
       await this.valueField(province).click();
    }

    async pickCountry(val){
        await this.countryField.click();
        await this.valueField(val).click();
    }
    
    async pickDOB(params = {}){
        const { 
            dateNumber, 
            month, 
            year
        } = params;

        await this.dobField.click();
        await this.valueField(dateNumber).click();
        await this.showYearPickerButton.click();
        await this.yearPickerButton.setValue(year);
        await this.monthPickerButton.setValue(month);
        await this.valueField('Done').click();  
    }
    

    async fillCustomerProposal(params = {}){
        const { 
            name, 
            hp,
            placeOfBirth,
            status,
            nomorId,
            job,
            motherName
        } = params;
        await this.customerTab.waitForDisplayed({timeout: 5000});
        expect(await this.valueField(name).isDisplayed()).toBe(true);
        await this.hpField.setValue(hp);
        await this.pickCountyOfBirth('Indonesia');
        await this.pickPlaceOfBirth(placeOfBirth);
        await this.pickNationality('Indonesia');
        await this.pickFastTrack();
        await this.nomorIDField.setValue(nomorId);
        await this.motherNameField.setValue(motherName);
        await this.pickMaritalStatus(status);
        expect(await this.valueField(job).isDisplayed()).toBe(true);
        await this.valueField('Next >').tap();

    }

    async fillCorrespondentProposal(params = {}){
        const { 
            companyName,
            businessSector,
            address,
            subDistrict,
            district,
            city,
            province,
            country,
            postalCode,
            phoneOffice,
            faxNo,
        } = params;
        
        await this.companyNameField.waitForDisplayed({timeout: 5000});
        await this.companyNameField.setValue(companyName);
        await this.pickBusinessSector(businessSector);
        await this.valueField('Choose Address').click();
        await this.correspondentAddressFirst.waitForDisplayed({timeout : 5000});
        await this.correspondentAddressFirst.setValue(address);
        await this.correspondentAddressSecond.setValue(address);
        await this.subDistrictField.setValue(subDistrict);
        await this.districtField.setValue(district);
        await this.cityField.setValue(city);
        await this.pickProvice(province);
        await this.pickCountry(country);
        await this.postalCodeField.setValue(postalCode);
        await this.valueField('Add').click();
        await this.switchButton.waitForDisplayed({timeout:5000});
        await this.switchButton.click();
        await this.valueField('Save').click();
        await this.valueField('Confirm').click();
        await driver.execute('mobile: swipe', { direction: 'up' });
        await this.phoneOfficeField.setValue(phoneOffice);
        await this.faxNoField.setValue(faxNo);
        await this.valueField('Next >').click();  

    }

    async chooseAddressDefault(params = {}){
        const { 
           email,
           hp
        } = params;
        await this.valueField('Choose Address').waitForDisplayed({timeout: 1000});
        const elements = await $$(this.elemChooseAddress);
        for (let i = 1; i <= elements.length; i++) {
            await this.chooseAddressButton(i).click();
            await this.switchButton.click();
            await this.valueField('Save').click();
            await this.valueField('Confirm').click();
        }

        await this.homePhoneField.setValue(hp);
        await this.emailField.setValue(email);
        await this.valueField('e-Policy').click();
        await this.valueField('Next >').click(); 
    }

    async fillFactaWNI(number){
        await driver.execute('mobile: swipe', { direction: 'up' });
        await this.tinNumber.setValue(number);
        await driver.hideKeyboard();
        await this.valueField('Next >').tap(); 
    }

    async clickPurposeOfInsuranceField(purposeOfInsurance){
        await this.valueField('Source of Fund').waitForDisplayed({timeout: 5000});
        let isVisible = false;
        while (isVisible == false) {
            await this.purposeOfInsuranceField.click();
            const buttons = await this.valueField(purposeOfInsurance).isDisplayed();
                if (buttons == true) {
                    isVisible = true;
                }
        }        
        await this.valueField(purposeOfInsurance).click();
    }

    async fillOtherProposal(params = {}){
        const { 
            npwp,
            height,
            religion,
            annualIncome,
            cifNo,
            weight,
            education
         } = params;
         
        await this.npwpNoField.setValue(npwp);
        await driver.hideKeyboard();
        await this.heightField.setValue(height);
        await driver.hideKeyboard();
        await this.religionField.click();
        await this.valueField(religion).click();
        await this.annualIncome0Field.clearValue();
        await this.annualIncomeField.setValue(annualIncome);
        await this.cifNoField.setValue(cifNo);
        await driver.hideKeyboard();
        await this.weightField.setValue(weight);
        await driver.hideKeyboard();
        await this.educationField.click();
        await this.valueField(education).click();
        await this.valueField('Payment Details >').click(); 
    }

    async fillPaymentDetails(params = {}){
        const { 
            accountHolderName,
            branchName,
            accountNumber,
            typeAccountBank,
            typeHolder
         } = params;
        await this.valueField('Initial Payment').waitForDisplayed({timeout: 5000});
        await this.accountHolderField.setValue(accountHolderName);
        await this.bankBranchField.setValue(branchName);
        await this.accountNumberField.setValue(accountNumber);
        await this.typeAccountField.click();
        await this.valueField(typeAccountBank).click();
        await this.valueField('Next >').click(); 

        await this.valueField('Subsequent Payment').waitForDisplayed({timeout: 5000});
        await this.typeHolderField.click();
        
        await this.valueField(typeHolder).click();
        await this.bankBranchField.setValue(branchName);
        await this.accountNumberField.setValue(accountNumber);
        await driver.hideKeyboard();

        if (typeHolder == 'Policyholder') {
            await this.valueField('Declaration >').click();  
        } else {
            
        }


    }

    async fillDeclarationData(params = {}){
        const { 
            purposeOfInsurance,
            dependent,
            premiPaymentSource,
            nameBeneficiary,
            gender,
            countryOfBirth,
            placeOfBirth,
            relation,
            dob,
            allocationPresentation,
            countryOfResidence,
           
         } = params;
        const { dateNumber, month, year } = parseDOB(dob);

        await this.clickPurposeOfInsuranceField(purposeOfInsurance);
        await this.dependentField.click();
        await this.valueField(dependent).click();
        await this.premiPaymentSourceField.click();
        await this.valueField(premiPaymentSource).click();
        await this.valueField('Next >').click();

        //Beneficiary
        await this.nameField.waitForDisplayed({timeout:10000});
        await this.nameField.setValue(nameBeneficiary);
        await driver.hideKeyboard();
        await this.valueField(gender).click();
        await this.countryOfBirthField.click();
        await this.valueField(countryOfBirth).click();
        await this.placeOfBirthField.setValue(placeOfBirth);
        await driver.hideKeyboard();
        await this.relationshipWithInsuredField.click();
        await this.valueField(relation).click();
        await this.pickDOB({
            dateNumber: dateNumber,
            month : month,
            year : year
        });
        await this.allocationPresentationField.setValue(allocationPresentation);
        await this.countryOfResidenceField.click();
        await this.valueField(countryOfResidence).click();
        await this.valueField('Add').click();
        await this.valueField('Next >').click();

       

    }
    async fillDeclarationForm(params = {}){
        const { 
            countSmoker,
            countAlcohol,
         } = params;

        
        await this.valueField('Tidak').waitForDisplayed();
        await this.valueField('Tidak').tap();
        await this.countSmokerButton.setValue(countSmoker);
        await this.countAlcoholButton.setValue(countAlcohol);
        await driver.hideKeyboard();

        await driver.execute('mobile: scroll', { direction: 'down' });
        
        let noButtons = await $$(this.elemNoButton);
        let lengthNoButtons = noButtons.length;
        console.log('length => '+lengthNoButtons);
        for (let i = 2; i < lengthNoButtons; i++) {
            await noButtons[i].click();
            await noButtons[i].tap();
            
        }
        await this.optionNo('2').click();
       

        await this.valueField('e-Submission >').click();
        await this.valueField('Confirm').waitForDisplayed();
        await this.valueField('Confirm').click();
        await this.valueField('Teruskan').waitForDisplayed({timeout: 4000});
        await this.valueField('Teruskan').click();
    }

    



}
module.exports = new SaveProposalPage();