import {AssetPage} from "./AssetPage"
import {PortfolioPage} from "./PortfolioPage";
import {ReportsPage} from "./ReportsPage";
import {SummaryPage} from "./SummaryPage";
import {StartTrialPage} from "./StartTrialPage";
import {TransactionModal} from "./TransactionModal";


export interface PageObjects{
    assetPage : AssetPage;
    summaryPage : SummaryPage;
    startTrialPage: StartTrialPage
    portfolioPage : PortfolioPage;
    reportsPage: ReportsPage;
    transactionModal : TransactionModal;
}