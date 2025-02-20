import {expect, Locator, Page} from '@playwright/test';
import { BasePage } from './BasePage';

export class PortfolioPage extends BasePage {
    portfolioLink: Locator = this.page.getByRole('link', { name: 'Portfolio', exact: true });
    marketValueLink: Locator = this.page.getByRole('link', { name: /Market Value/ });
    totalReturnsLink: Locator = this.page.getByRole('link', { name: 'Total Returns' });
    incomeLink: Locator = this.page.getByRole('link', { name: /Income/ });
    feesLink: Locator = this.page.getByRole('link', { name: /Fees/ });
    taxDueLink: Locator = this.page.getByRole('link', { name: /Tax Due/ });
    accountsTab: Locator = this.page.getByText('Accounts', { exact: true });
    assetsTab: Locator = this.page.getByText('Assets', { exact: true });
    transactionsTab: Locator = this.page.getByText('Transactions', { exact: true });

    allAssetsLink: Locator = this.page.getByText('All assets');
    liquidAssetsLink: Locator = this.page.getByText('Liquid assets');
    openedLink: Locator = this.page.getByText('Opened');
    retirementLink: Locator = this.page.getByText('Retirement');
    stocksLink: Locator = this.page.getByText('Stocks');
    withIncomeLink: Locator = this.page.getByText('With Income');
    rateOfReturnLink: Locator = this.page.getByRole('link', { name: 'Rate of Return (MWR)' });

    static readonly PORTFOLIO_PAGE_URL: string = 'https://app.mycapitally.com/project/demo-1/summary';

    constructor(page: Page) {
        super(page, PortfolioPage.PORTFOLIO_PAGE_URL);
    }

    async clickLiquidAssets() {
        await this.liquidAssetsLink.click();
    }

    async clickOpened() {
        await this.openedLink.click();
    }

    async clickRetirement() {
        await this.retirementLink.click();
    }

    async clickStocks() {
        await this.stocksLink.click();
    }

    async clickWithIncome() {
        await this.withIncomeLink.click();
    }

    async clickAllAssets() {
        await this.allAssetsLink.click();
    }

    async clickTotalReturns() {
        await this.totalReturnsLink.click();
    }

    async clickRateOfReturn() {
        await this.rateOfReturnLink.click();
    }

    async clickIncome() {
        await this.incomeLink.click();
    }

    async clickFees() {
        await this.feesLink.click();
    }

    async clickTaxDue() {
        await this.taxDueLink.click();
    }

    async clickThroughAllUpperMenuItems() {
        await this.clickLiquidAssets();
        await this.clickOpened();
        await this.clickRetirement();
        await this.clickStocks();
        await this.clickWithIncome();
        await this.clickAllAssets();
        await this.clickTotalReturns();
        await this.clickRateOfReturn();
        await this.clickIncome();
        await this.clickFees();
        await this.clickTaxDue();
    }
}