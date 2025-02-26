import {test as base} from '@playwright/test'

import {SummaryPage} from './pages/SummaryPage';
import {PageObjects} from './pages/pageObjects'
import {StartTrialPage} from "./pages/StartTrialPage";
import {PortfolioPage} from "./pages/PortfolioPage";
import {AssetPage} from "./pages/AssetPage";
import {ReportsPage} from "./pages/ReportsPage";
import {TransactionModal} from "./pages/TransactionModal";

export const test = base.extend<{
    testContext: PageObjects
}>({
    testContext: async ({page}, use) => {
        const testContext: PageObjects = {
            assetPage: new AssetPage(page),
            portfolioPage: new PortfolioPage(page),
            reportsPage: new ReportsPage(page),
            summaryPage: new SummaryPage(page),
            startTrialPage: new StartTrialPage(page),
            transactionModal: new TransactionModal(page)
        }
        await use(testContext)
    },

})
