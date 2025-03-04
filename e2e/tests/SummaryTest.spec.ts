import {setupTestHooks, test} from '../fixtures'
import {StartTrialPage} from "../pages/StartTrialPage";
import {SummaryPage} from "../pages/SummaryPage";
import {expect} from "@playwright/test";

setupTestHooks();

test('Verify Summary page and redirection to the free trial page', async ({testContext}) => {
        const summaryPage = testContext.summaryPage;
        const startTrialPage = testContext.startTrialPage;
        const {START_TRIAL_TEXT} = StartTrialPage;

        await summaryPage.waitForPageLoad()
        await verifySummaryPageElements(summaryPage);

        await summaryPage.clickStartFreeTrial()
        expect(await startTrialPage.getStartTrialHeaderText()).toContain(START_TRIAL_TEXT);
    }
)

async function verifySummaryPageElements(summaryPage: SummaryPage) {
    await expect(summaryPage.startFreeTrialButton).toBeVisible();
    await expect(summaryPage.allAssetsLink).toBeVisible();
    await expect(summaryPage.liquidAssetsLink).toBeVisible();
    await expect(summaryPage.totalMarketValueText).toBeVisible();
    await expect(summaryPage.defaultCompareTo).toBeVisible();
    await expect(summaryPage.topAssetChanges).toBeVisible();
    await expect(summaryPage.topAccountChanges).toBeVisible();
    await expect(summaryPage.topBenchmarkChanges).toBeVisible();
    await expect(summaryPage.investmentIncome).toBeVisible();
    await expect(summaryPage.upcomingEstimatedIncome).toBeVisible();
}