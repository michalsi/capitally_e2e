import {expect, Locator, Page} from '@playwright/test';
import { BasePage } from './BasePage';

export class PortfolioPage extends BasePage {
    totalReturnsLink: Locator = this.page.getByRole('link', { name: 'Total Returns' });
    incomeLink: Locator = this.page.getByRole('link', { name: /Income/ });
    feesLink: Locator = this.page.getByRole('link', { name: /Fees/ });
    taxDueLink: Locator = this.page.getByRole('link', { name: /Tax Due/ });
    accountsTab: Locator = this.page.getByText('Accounts', { exact: true });
    assetsTab: Locator = this.page.getByText('Assets', { exact: true });
    transactionsTab: Locator = this.page.getByText('Transactions', { exact: true });

    typesLink: Locator = this.page.getByText('Types');
    currenciesLink: Locator = this.page.getByText('Currencies');
    marketsLink: Locator = this.page.getByText('Markets');
    tagsLink: Locator = this.page.getByText('Tags');
    categoriesLink: Locator = this.page.getByText('Categories');
    regionsLink: Locator = this.page.getByText('Regions');
    sectorsLink: Locator = this.page.getByText('Sectors');
    positionsLink: Locator = this.page.getByText('Positions');

    allAssetsLink: Locator = this.page.getByText('All assets');
    liquidAssetsLink: Locator = this.page.getByText('Liquid assets');
    openedLink: Locator = this.page.getByText('Opened');
    retirementLink: Locator = this.page.getByText('Retirement');
    stocksLink: Locator = this.page.getByText('Stocks');
    withIncomeLink: Locator = this.page.getByText('With Income');
    rateOfReturnLink: Locator = this.page.getByRole('link', { name: 'Rate of Return (MWR)' });

    addAssetButton: Locator = this.page.getByRole('button', { name: 'Add Asset' });
    assetCombobox: Locator = this.page.getByRole('combobox', { name: "Enter asset's name, SYMBOL or" });
    addAssetDialog: Locator = this.page.getByText('This is a Demo projectDemo');
    okButton: Locator = this.page.getByRole('button', { name: 'OK' });

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

    async clickAccounts() {
        await this.accountsTab.click();
    }
    async clickPositions() {
        await this.positionsLink.click()
    }
    async clickAssets() {
        await this.assetsTab.click();
    }
    async clickTransactions() {
        await this.transactionsTab.click();
    }
    async clickTypes() {
        await this.typesLink.click();
    }
    async clickTags() {
        await this.tagsLink.click();
    }
    async clickCurrencies() {
        await this.currenciesLink.click();
    }
    async clickMarkets() {
        await this.marketsLink.click();
    }
    async clickCategories() {
        await this.categoriesLink.click();
    }
    async clickRegions() {
        await this.regionsLink.click();
    }
    async clickSectors() {
        await this.sectorsLink.click();
    }
    // Method to click through all lower menu items
    async clickThroughAllLowerMenuItems() {
        await this.clickAccounts();
        await this.clickAssets();
        await this.clickTypes();
        await this.clickCurrencies();
        await this.clickMarkets();
        await this.clickTags();
        await this.clickCategories();
        await this.clickRegions();
        await this.clickSectors();
        await this.clickTransactions();
        await this.clickPositions();
    }

    async openMenuAndSelectPosition() {
        await this.addAssetButton.click();
    }

    async addAsset(assetName: string, assetNameToWait:string) {
        await this.addAssetButton.click();
        await this.assetCombobox.click();
        await this.assetCombobox.fill(assetName);
        await expect(this.page.getByRole('option', { name: assetNameToWait })).toBeVisible();
        await this.assetCombobox.press('Enter');
    }

    getAddAssetDemoDialog(){
        return this.addAssetDialog
    }
     async closeAddAssetDemoDialog(){
         await this.okButton.click();

     }
}