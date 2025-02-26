import {expect, Locator, Page} from '@playwright/test';
import {BasePage} from "./BasePage";
import {StartTrialPage} from "./StartTrialPage";

export class SummaryPage extends BasePage {
    protected getPageLoadSelectors(): Locator[] {
        throw new Error('Method not implemented.');
    }
    welcomeHeading: Locator = this.page.getByRole('heading', {name: 'Welcome to Capitally Demo 🥳'});
    startFreeTrialButton: Locator = this.page.getByRole('link', {name: 'Start free trial to see your'})
    allAssetsLink: Locator = this.page.getByRole('link', {name: 'All assets'});
    liquidAssetsLink: Locator = this.page.getByRole('link', {name: 'Liquid assets'});
    totalMarketValueText: Locator = this.page.getByText('Total market value');
    defaultCompareTo: Locator = this.page.getByText('Compared toS&P');
    topAssetChanges: Locator = this.page.getByRole('link', {name: 'Top asset changes'})
    topAccountChanges: Locator = this.page.getByRole('link', {name: 'Top account changes'})
    topBenchmarkChanges: Locator = this.page.getByText('Top benchmark changes')
    investmentIncome: Locator = this.page.getByRole('link', {name: 'Investment Income in past year'})
    upcomingEstimatedIncome: Locator = this.page.getByRole('link', {name: 'Upcoming and estimated Income'})
   reportsMenu: Locator = this.page.getByRole('link', { name: 'Reports', exact: true });

    readonly url = '/demo-1/summary';

    constructor(page: Page) {
        super(page)
    }

    async verifyElements() {
        await expect(this.welcomeHeading).toBeVisible();
        await expect(this.startFreeTrialButton).toBeVisible();
        await expect(this.allAssetsLink).toContainText('All assets');
        await expect(this.liquidAssetsLink).toContainText('Liquid assets');
        await expect(this.totalMarketValueText).toBeVisible();
        await expect(this.defaultCompareTo).toBeVisible()
        await expect(this.topAssetChanges).toBeVisible()
        await expect(this.topAccountChanges).toBeVisible()
        await expect(this.topBenchmarkChanges).toBeVisible()
        await expect(this.investmentIncome).toBeVisible()
        await expect(this.upcomingEstimatedIncome).toBeVisible()
    }

    async clickStartFreeTrial(){
        await this.startFreeTrialButton.click()
        await this.page.waitForSelector(`h1:text("${StartTrialPage.START_TRIAL_TEXT}")`);
    }

    async clickReportsMenu(){
        await this.reportsMenu.click();
    }
}
