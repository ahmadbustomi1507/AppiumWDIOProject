const { $, expect, driver, browser } = require('@wdio/globals');

class SaveESubmissionPage {
    get customButton(){
        return (val) => $(`//XCUIElementTypeButton[@name="${val}"]`);
    }
    get customButtonByID(){
        return (val) => $(`~${val}`);
    }
    get customButtonByXpath(){
        return (val) => $(`//XCUIElementTypeStaticText[@name="${val}"]`);
    }
    get signButton(){
        return (val) => $(`//XCUIElementTypeOther[contains(@value, "${val}%")]/preceding-sibling::XCUIElementTypeImage/XCUIElementTypeButton`);
    }
    get fillSignButton(){
        return $('//XCUIElementTypeButton[@name="Proceed"]/parent::XCUIElementTypeOther/following-sibling::XCUIElementTypeOther[1]');
    }
    get passwordField(){
        return $('//XCUIElementTypeSecureTextField[@value="**********"]');
    }
    get takePictureButton(){
        return $('//XCUIElementTypeButton[@name="< Payment"]/parent::XCUIElementTypeOther/preceding-sibling::XCUIElementTypeButton[2]');
    }
    get categoryButton(){
        return $('//XCUIElementTypeStaticText[contains(@value, "Category")]/parent::XCUIElementTypeOther/parent::XCUIElementTypeOther/following-sibling::XCUIElementTypeOther[@value="\n"]')
    }
    get noteField(){
        return $('//XCUIElementTypeStaticText[contains(@value, "Keterangan")]/parent::XCUIElementTypeOther/parent::XCUIElementTypeOther/following-sibling::XCUIElementTypeTextView');
    }
    get eSubmissionDataField(){
        return (val) => $(`//XCUIElementTypeStaticText[contains(@name, "${val}")]/parent::XCUIElementTypeOther/following-sibling::XCUIElementTypeOther/XCUIElementTypeStaticText`);
    }
    get signField(){
        return $('//XCUIElementTypeScrollView/XCUIElementTypeImage/XCUIElementTypeButton');
    }
    get mandatoryDocList(){
        return '//XCUIElementTypeOther[@name="Mandatory Document"]/following-sibling::XCUIElementTypeOther/XCUIElementTypeOther';
    }
    get docTextByIndex(){
        return (val) =>  $(`(//XCUIElementTypeOther[@name="Mandatory Document"]/following-sibling::XCUIElementTypeOther/XCUIElementTypeOther)[${val}]`);
    }
    get elemSignButton(){
        return '//XCUIElementTypeScrollView/XCUIElementTypeImage/XCUIElementTypeButton';
    }
    get elemChecklistButton(){
        return '(//XCUIElementTypeStaticText[@name="draft"])/preceding-sibling::XCUIElementTypeOther[1]';
    }


    async tapSignButtons(){
        let signButtons = await $$(this.elemSignButton);
        for (let i = 0; i < signButtons.length; i++) {
            await signButtons[i].click();
            await this.fillSignButton.waitForDisplayed({timeout: 3000});
            await this.fillSignButton.click();
            await this.customButtonByXpath('Proceed').click();
            await this.customButtonByXpath('Preview').waitForDisplayed({timeout: 3000});
        }

    }

    async scrollDocument(){
        let isVisible = false;
        while (isVisible == false) {
            await driver.execute('mobile: swipe', {
                direction: 'up',
                startX: 400,  
                startY: 500,  
                endX: 400,     
                endY: 650      
              });
           
            const buttons = await this.signField.isDisplayed();
            if (buttons == true) {
                isVisible = true;
            }
        }
    }

    async scrollDocumentUntilDone(){
        let isVisible = false;
        while (isVisible == false) {
            await driver.execute('mobile: swipe', {
                direction: 'up',
                startX: 400,  
                startY: 500,  
                endX: 400,     
                endY: 650      
              });
           
            const buttons = await this.customButtonByID('Done').isDisplayed();
            if (buttons == true) {
                isVisible = true;
            }
        }
    }

   
    async checkLogin(){
        await driver.pause(2000);
        const isButtonVisible = await this.customButtonByID('Login').isDisplayed();
        if (isButtonVisible == true) {
            await this.passwordField.setValue('Astralife123');
            await this.customButtonByID('Login').click();
            let isVisible = false;
            while (isVisible == false) {
                const buttons = await this.customButtonByID('Virtual Account is Active.').isDisplayed();
                    if (buttons == true) {
                        isVisible = true;
                    }
            }
            
        }
    }

    async clickNextUntilAllSigned(){
        let isVisible = true;
        while (isVisible) {
            await this.customButtonByXpath('Next').click();
            const isButtonNextVisible = await this.customButtonByXpath('Next').isDisplayed();
            const isButtonSignVisible = await this.signField.isDisplayed();
            if (isButtonSignVisible) {
                await this.tapSignButtons();
                if (!isButtonNextVisible) {
                    isVisible = false;
                }else{
                    isVisible = true;
                }
                
            }else{
                if (!isButtonNextVisible) {
                    await this.scrollDocument();
                    await this.tapSignButtons();
                    isVisible = false; 
                } 
            }
        }
    }
    async fillSignatureOnDoc(){
        let doc = await $$(this.elemChecklistButton);
        for (let i = 0; i < doc.length; i++) {
            await doc[i].click();
            await this.customButtonByXpath('Preview').waitForDisplayed({timeout: 5000}); 
            const isButtonVisible = await this.customButtonByID('Next').isDisplayed();
            if (isButtonVisible == true) {
                await this.clickNextUntilAllSigned();
                await this.customButtonByXpath('Done').waitForDisplayed({timeout: 3000});
                await this.customButtonByXpath('Done').click();
            }else{
                await this.scrollDocument();
                await this.tapSignButtons();
                await this.customButtonByXpath('Done').waitForDisplayed({timeout: 3000});
                await this.customButtonByXpath('Done').click();
            }
        }
        
    }


    async savePaymentAdvise(){
        await this.customButtonByID('Payment Advise').waitForDisplayed({timeout: 3000});
        await this.customButtonByID('Payment Advise').click();
        await this.scrollDocumentUntilDone();
        await this.customButtonByID('Done').click();
        await this.customButtonByID('Aktivasi Virtual Account').click();
        await this.checkLogin();
        await this.customButtonByID('Ok').click();
        await this.customButtonByID('Amendment >').click();
        await this.customButtonByID('No, proceed to eSubmission').waitForDisplayed({timeout: 4000});
        await this.customButtonByID('No, proceed to eSubmission').click();
    }

    async addMandatoryDocsByUpload(params = {}){
        const { 
            typeDocs, 
            note
        } = params;
        await this.takePictureButton.click();
        await this.customButtonByID('PhotoCapture').waitForDisplayed({timeout: 5000});
        await this.customButtonByID('PhotoCapture').click();
        await this.customButtonByID('Use Photo').waitForDisplayed({timeout: 5000});
        await this.customButtonByID('Use Photo').click();
        await this.customButtonByID('Done').waitForDisplayed({timeout: 5000});
        await this.customButtonByID('Done').click();
        await this.categoryButton.waitForDisplayed({timeout: 5000});
        await this.categoryButton.click();
        await this.customButton(typeDocs).scrollIntoView();
        await this.customButton(typeDocs).click();
        await this.noteField.setValue(note);
        await this.customButtonByID('Upload').click();
        await this.customButtonByID('Image Uploaded').waitForDisplayed({timeout: 12000});
        await this.customButtonByID('Ok').click();
    }

    async flowMandatoryDocByGetAttribute(){
        await this.customButtonByID('Mandatory Document').waitForDisplayed({timeout:5000});
        const elements = await $$(this.mandatoryDocList);
        console.log('elements => ' + elements.length);
        

        for (let i = 2; i <= elements.length; i++) {
            if (i % 2 == 0) {
                await this.docTextByIndex(i).waitForDisplayed({timeout:8000});
                let docName = await this.docTextByIndex(i).getAttribute('name') 
                console.log('docName => ' + docName);

                await this.addMandatoryDocsByUpload({
                    typeDocs: docName, 
                    note: 'Notes dari ' + docName,     
                });
            }
            
        }
    }
    
    async saveESubmission(params = {}){
        const { 
            name
        } = params;
        await this.customButtonByID('eSubmission >').waitForDisplayed();
        await this.customButtonByID('eSubmission >').click();
        expect(await this.customButtonByID(name).isDisplayed()).toBe(true);
        await this.customButtonByID('Submit').click();
        let referenceNo = await this.eSubmissionDataField('e-Reference No').getValue();
        console.log('e-Reference No:' + referenceNo);
        let sumInsured = await this.eSubmissionDataField('Uang Pertanggungan').getValue();
        console.log('Uang Pertanggungan:' + sumInsured);
        let premi = await this.eSubmissionDataField('Premi').getValue();
        console.log('Premi:' + premi);
        await this.customButtonByID('Submit').waitForExist({ reverse: true, timeout: 20000 });

    }


    async addSignature(params = {}){
        const { name
        } = params;
        await this.fillSignatureOnDoc();
        await this.customButtonByID('Payment >').click();
        await this.savePaymentAdvise();
        await this.flowMandatoryDocByGetAttribute();
        await this.saveESubmission({
            name: name
        });


        

        
    }
    
}
module.exports = new SaveESubmissionPage();