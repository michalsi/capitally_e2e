import {test} from "../fixtures";
import * as path from 'path';
import {expectElementToBeVisible, expectTextToContain} from '../utils/AssertionHelper';

test("Import test", async({testContext})=>{
    const filePath = path.join(__dirname, '../data/mbankTransactions.csv');
    const summaryPage = testContext.summaryPage;
    const importPage = testContext.importPage;

    await summaryPage.navigate();
    await summaryPage.acceptCookies();

    await summaryPage.clickImportMenu();
    await importPage.waitForPageLoad();

    await importPage.clickBrokerMBank();
    await importPage.clickMBankImportTransactionsTab();
    await importPage.uploadFile(filePath);

    await expectTextToContain(importPage.getReviewHeader(), 'Review items to be imported', 'Review Header');
    await importPage.clickNextImportStep();
    await expectElementToBeVisible(importPage.getDemoImportWarningText(), 'Demo Import Warning Text');
    await importPage.clickCancelImport();
})