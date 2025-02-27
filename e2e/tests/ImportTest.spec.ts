import {test} from "../fixtures";
import {expect} from "@playwright/test";
import * as path from 'path';

test("Import test", async({testContext})=>{
    const filePath = path.join(__dirname, '../data/mbankTransactions.csv');
    const {summaryPage, importPage} = testContext

    await summaryPage.navigate();
    await summaryPage.acceptCookies();

    await summaryPage.clickImportMenu();
    await importPage.waitForPageLoad();

    await importPage.clickBrokerMBank();
    await importPage.clickMBankImportTransactionsTab();
    await importPage.uploadFile(filePath);

    await expect(importPage.getReviewHeader()).toContainText('Review items to be imported');
    await importPage.clickNextImportStep();
    await expect(importPage.getDemoImportWarningText()).toBeVisible()
    await importPage.clickCancelImport();
})