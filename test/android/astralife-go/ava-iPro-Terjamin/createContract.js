const { expect, browser, driver } = require('@wdio/globals');
const createNewCustomerPage = require('../../../pages/contract/createNewCustomer.page.js');
const saveRiskProfilePage = require('../../../pages/contract/saveRiskProfile.page.js');
const saveQuotationPage = require('../../../pages/contract/saveQuotation.page.js');
const saveProposalPage = require('../../../pages/contract/saveProposal.page.js');
const saveESubmissionPage = require('../../../pages/contract/saveESubmission.page.js');
const { randomNumber } = require('../../../resources/generate.data.js');
const { randomFullName } = require('../../../resources/generate.data.js');
// Mengambil data dari satu file JSON
const data = require('../../../test/ios/ava_infinite_protection/data/AIP_P_data.json');

describe('New Contract Test Case', () => {

    // Extract data dari file JSON
    const customerData = data.customerData;
    const correspondentData = data.correspondentData;
    const addressData = data.addressData;
    const factaWNIData = data.factaWNIData;
    const otherData = data.otherData;
    const quotationData = data.quotationData;
    const paymentDetailsData = data.paymentDetailsData;
    const declarationData = data.declarationData;
    const declarationForm = data.declarationForm;
    const riskProfileData = data.riskProfileData;


    it('Flow Positive Submit Contract - AVA Infinite Protection ', async () => {
      await createNewCustomerPage.fillCustomerInformation(customerData);
      await saveRiskProfilePage.clickNewQuotationButton();
      
      await saveRiskProfilePage.clickProductTypeButton(riskProfileData.productType);
      await saveRiskProfilePage.clickCustInfoButton();
      await saveRiskProfilePage.verifyCustomerInfo(customerData);
      await saveRiskProfilePage.clickQuotationButton();
      await saveQuotationPage.saveQuotation(quotationData);
     

      await saveProposalPage.fillCustomerProposal(customerData);
      await saveProposalPage.fillCorrespondentProposal(correspondentData);
      await saveProposalPage.chooseAddressDefault(addressData);
      await saveProposalPage.fillFactaWNI(factaWNIData.number);
      await saveProposalPage.fillOtherProposal(otherData);

      await saveProposalPage.fillPaymentDetails(paymentDetailsData);
      await saveProposalPage.fillDeclarationData(declarationData);
      await saveProposalPage.fillDeclarationForm(declarationForm);
      await saveESubmissionPage.addSignature({
        name: customerData.name
      });


    });
    

    // it('Flow From Existing Data', async () => {
    //   await saveRiskProfilePage.clickExistingButton();
    //   await createNewCustomerPage.searchCustomerName('Ritsuki D Automation');
    //   await saveRiskProfilePage.clickExistingQuotationButton();
      
    //   await saveESubmissionPage.customButtonByID('Declaration').waitForDisplayed({timeout: 10000});
    //   await saveESubmissionPage.customButtonByID('Declaration').click();
    //   await driver.pause(25000);
    //   await saveESubmissionPage.customButtonByID('Next >').click();
    //   await saveESubmissionPage.customButtonByID('Next >').click();
    //   // await saveESubmissionPage.customButtonByID('e-Submission >').waitForDisplayed({timeout: 8000});
    //   // await saveESubmissionPage.customButtonByID('e-Submission >').click();
    //   // await saveESubmissionPage.customButtonByID('Confirm').waitForDisplayed();
    //   // await saveESubmissionPage.customButtonByID('Confirm').click();
    //   // await saveESubmissionPage.customButtonByID('Teruskan').waitForDisplayed({timeout: 4000});
    //   // await saveESubmissionPage.customButtonByID('Teruskan').click();

    //   // await saveESubmissionPage.customButtonByID('Payment >').click();
    //   // await saveESubmissionPage.customButtonByID('Amendment >').click();
    //   // await saveESubmissionPage.customButtonByID('No, proceed to eSubmission').waitForDisplayed({timeout: 3000});
    //   // await saveESubmissionPage.customButtonByID('No, proceed to eSubmission').click();

    //   await saveProposalPage.fillDeclarationForm(declarationForm);
    //   // await saveESubmissionPage.addSignature({
    //   //   name: 'Park Jisunga Automation',
    //   // });


    // });


   
});
