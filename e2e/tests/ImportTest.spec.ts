import {setupTestHooks, test} from "../fixtures";
import * as path from 'path';
import {expectElementToBeVisible, expectTextToContain} from '../utils/AssertionHelper';
import { testConfig } from "../test-config/test.setup";

setupTestHooks();

test("Import test", async({testContext})=>{
    const filePath = testConfig.testDataPath + 'mBankTransactions.csv';
    const summaryPage = testContext.summaryPage;
    const importPage = testContext.importPage;

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