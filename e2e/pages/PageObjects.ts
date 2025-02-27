import {AssetPage} from "./AssetPage"
import {ImportPage} from "./ImportPage";
import {PortfolioPage} from "./PortfolioPage";
import {ReportsPage} from "./ReportsPage";
import {SummaryPage} from "./SummaryPage";
import {StartTrialPage} from "./StartTrialPage";
import {TransactionModal} from "./TransactionModal";


export interface PageObjects {
    assetPage: AssetPage;
    importPage: ImportPage;
    portfolioPage: PortfolioPage;
    reportsPage: ReportsPage
    startTrialPage: StartTrialPage;
    summaryPage: SummaryPage;
    transactionModal: TransactionModal;
}