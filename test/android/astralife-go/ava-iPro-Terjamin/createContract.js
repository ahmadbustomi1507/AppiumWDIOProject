
const { expect, browser, driver } = require('@wdio/globals');

const { randomNumber,randomFullName } = require('../../../resources/generate.data.js');
const submissionPage = require('../../../pages/astralife-go/submissions/iPro/submission.page.js');
const createNewCustomerPage = require('../../../pages/contract/createNewCustomer.page.js');
const saveRiskProfilePage = require('../../../pages/contract/saveRiskProfile.page.js');
const saveQuotationPage = require('../../../pages/contract/saveQuotation.page.js');
const saveProposalPage = require('../../../pages/contract/saveProposal.page.js');
const saveESubmissionPage = require('../../../pages/contract/saveESubmission.page.js');


// Mengambil data dari satu file JSON
const data = require('../../../test/android/astralife-go/ava-iPro-Terjamin/data/Polis-1-monthly.json');
// const h = get data from files 

// async function getFilesFromFolder() {
//   // Request access to a directory
//   const directoryHandle = await window.showDirectoryPicker();
//   const files = [];

//   // Iterate through the directory entries
//   for await (const entry of directoryHandle.values()) {
//     if (entry.kind === 'file') {
//       files.push(entry.name); // Add file names to the list
//     }
//   }

//   console.log(files); // Output the list of files
// }

getFilesFromFolder();

describe('Create new contract for AVA iPro Terjamin', () => {
    // h.array.forEach((polis) => {
    //   asdsf
    // });
    // Extract data dari file JSON
    // const customerData = data.customerData;
    // const correspondentData = data.correspondentData;
    // const addressData = data.addressData;
    // const factaWNIData = data.factaWNIData;
    // const otherData = data.otherData;
    // const quotationData = data.quotationData;
    // const paymentDetailsData = data.paymentDetailsData;
    // const declarationData = data.declarationData;
    // const declarationForm = data.declarationForm;
    // const riskProfileData = data.riskProfileData;


    it('Create polis static', async () => {

      
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


      // 1. Screen Product
      // Step 1.1 konfirmasi kesehatan
      // Step 1.2 konfirmasi cetak
      // Step 1.3 pengisian premium dan hitung sum assured

      // 2. Screen Package
      // Step 3.1 konfirmasi benefit

      // 3. Screen identitas diri
      // Step 3.1 isi nama dan ktp
      // Step 3.2 isi identitas diri
      // step 3.3 isi beneficiary 

      // 4. Screen Konfirmasi
      // Step 4.1 tanda tangan SPPN  
      // Step 4.2 tanda tangan SPAJ 
      // Step 4.3 tanda tangan SKPR/SKB 
      // Step 4.4 tanda tangan Riplay Personal

      // 5. Screen Pembayaran
      //Do nothing here 



    });
    
});
