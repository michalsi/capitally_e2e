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
            get assetPage() {
                return new AssetPage(page);
            },
            get importPage() {
                return new ImportPage(page);
            },
            get portfolioPage() {
                return new PortfolioPage(page);
            },
            get reportsPage() {
                return new ReportsPage(page);
            },
            get startTrialPage() {
                return new StartTrialPage(page);
            },
            get summaryPage() {
                return new SummaryPage(page);
            },
            get transactionModal() {
                return new TransactionModal(page);
            },
        }
        await use(testContext)
    },

})
