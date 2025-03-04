import {setupTestHooks, test} from "../fixtures";
import {testConfig} from "../test-config/test.setup";
import {expect} from "@playwright/test";

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
    await importPage.getReviewHeader().waitFor({timeout: testConfig.waitTimeout, state: 'visible'});
    expect(await importPage.getReviewHeader().isVisible()).toBe(true);
    await importPage.clickNextImportStep();
    expect(await importPage.getDemoImportWarningText().isVisible()).toBe(true);
    await importPage.clickCancelImport();
})