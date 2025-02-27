import {test as base} from '@playwright/test'

import {SummaryPage} from './pages/SummaryPage';
import {PageObjects} from './pages/pageObjects'
import {ImportPage} from "./pages/ImportPage";
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
            importPage: new ImportPage(page),
            portfolioPage: new PortfolioPage(page),
            reportsPage: new ReportsPage(page),
            startTrialPage: new StartTrialPage(page),
            summaryPage: new SummaryPage(page),
            transactionModal: new TransactionModal(page)
        }
        await use(testContext)
    },

})
