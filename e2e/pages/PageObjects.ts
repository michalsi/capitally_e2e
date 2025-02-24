import {AssetPage} from "./AssetPage"
import {PortfolioPage} from "./PortfolioPage";
import {SummaryPage} from "./SummaryPage";
import {StartTrialPage} from "./StartTrialPage";
import {TransactionModal} from "./TransactionModal";


export interface PageObjects{
    assetPage : AssetPage;
    summaryPage : SummaryPage;
    startTrialPage: StartTrialPage
    portfolioPage : PortfolioPage;
    transactionModal : TransactionModal;
}