import {test as base} from '@playwright/test'

import {SummaryPage} from './pages/SummaryPage';
import {PageObjects} from './pages/pageObjects'
import {StartTrialPage} from "./pages/StartTrialPage";
import {PortfolioPage} from "./pages/PortfolioPage";

export const test = base.extend<{
    testContext: PageObjects
}>({
    testContext: async ({page}, use) => {
        const testContext: PageObjects = {
            summaryPage: new SummaryPage(page),
            startTrialPage: new StartTrialPage(page),
            portfolioPage: new PortfolioPage(page)
        }
        await use(testContext)
    },

})
