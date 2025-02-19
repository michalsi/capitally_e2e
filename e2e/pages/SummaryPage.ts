import {expect, Locator, Page} from '@playwright/test';
import {BasePage} from "./BasePage";
import {StartTrialPage} from "./StartTrialPage";

export class SummaryPage extends BasePage {
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
    static readonly SUMMARY_PAGE_URL: string = 'https://app.mycapitally.com/project/demo-1/summary';

    constructor(page: Page) {
        super(page, SummaryPage.SUMMARY_PAGE_URL)
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

    async changeBenchmark() {
        await this.page.locator('[id="headlessui-combobox-button-\\:r8f\\:"] svg').click();
        await this.page.getByRole('option', { name: 'MSCI World MSCIWORLD' }).getByRole('img').click();

        // await this.page.getByTitle(fromBenchmark).click();
        // await this.page.getByTitle(toBenchmark).click();
    }

    async verifyCompareToBenchmarkTextContains(text: string) {
        return await expect(this.page.locator('#AppRoot')).toContainText('Compared to' + text);
    }

    async clickStartFreeTrial(){
        await this.startFreeTrialButton.click()
        await this.page.waitForSelector(`h1:text("${StartTrialPage.START_TRIAL_TEXT}")`);


    }
}
