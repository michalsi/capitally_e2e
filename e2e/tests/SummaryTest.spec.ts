import {test} from '../fixtures'
import {expect} from "@playwright/test";
import {StartTrialPage} from "../pages/StartTrialPage";


test('Summary Page tests', async ({testContext}) => {
        const {summaryPage, startTrialPage} = testContext
        const {START_TRIAL_TEXT} = StartTrialPage;

        await summaryPage.navigate();
        await summaryPage.acceptCookies();
        await summaryPage.verifyElements();
        await summaryPage.clickStartFreeTrial()
        const headerText = await startTrialPage.getStartTrialHeaderText();

        expect(headerText).toContain(START_TRIAL_TEXT);
    }
)
