import {test} from '../fixtures'
import {expect} from "@playwright/test";
import {StartTrialPage} from "../pages/StartTrialPage";


test('Verify Summary page and redirection to the free trial page', async ({testContext}) => {
        const summaryPage = testContext.summaryPage;
        const startTrialPage = testContext.startTrialPage;

        const {START_TRIAL_TEXT} = StartTrialPage;

        await summaryPage.navigate();
        await summaryPage.acceptCookies();
        await summaryPage.verifyElements();
        await summaryPage.clickStartFreeTrial()
        const headerText = await startTrialPage.getStartTrialHeaderText();

        expect(headerText).toContain(START_TRIAL_TEXT);
    }
)
