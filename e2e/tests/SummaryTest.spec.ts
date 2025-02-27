import {test} from '../fixtures'
import {StartTrialPage} from "../pages/StartTrialPage";
import {expectElementToBeVisible, expectTextToContain} from "../utils/AssertionHelper";
import {SummaryPage} from "../pages/SummaryPage";


test('Verify Summary page and redirection to the free trial page', async ({testContext}) => {
        const summaryPage = testContext.summaryPage;
        const startTrialPage = testContext.startTrialPage;

        const {START_TRIAL_TEXT} = StartTrialPage;

        await summaryPage.navigate();
        await summaryPage.acceptCookies();
        await summaryPage.waitForPageLoad()
        await verifySummaryPageElements(summaryPage);

        await summaryPage.clickStartFreeTrial()
        await expectTextToContain(startTrialPage.startTrialHeader, START_TRIAL_TEXT, 'Start Trial Header');
    }
)

async function verifySummaryPageElements(summaryPage: SummaryPage) {
    await expectElementToBeVisible(summaryPage.startFreeTrialButton, 'Start Free Trial Button');
    await expectElementToBeVisible(summaryPage.allAssetsLink, 'All Assets Link');
    await expectElementToBeVisible(summaryPage.liquidAssetsLink, 'Liquid Assets Link');
    await expectElementToBeVisible(summaryPage.totalMarketValueText, 'Total Market Value Text');
    await expectElementToBeVisible(summaryPage.defaultCompareTo, 'Default Compare To');
    await expectElementToBeVisible(summaryPage.topAssetChanges, 'Top Asset Changes');
    await expectElementToBeVisible(summaryPage.topAccountChanges, 'Top Account Changes');
    await expectElementToBeVisible(summaryPage.topBenchmarkChanges, 'Top Benchmark Changes');
    await expectElementToBeVisible(summaryPage.investmentIncome, 'Investment Income');
    await expectElementToBeVisible(summaryPage.upcomingEstimatedIncome, 'Upcoming Estimated Income');
}