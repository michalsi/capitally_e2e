import {Locator, Page} from '@playwright/test'

export abstract class BasePage {
    protected page: Page;
readonly BASE_URL = 'https://app.mycapitally.com/project';
    readonly abstract url: string;
    acceptAllButton: Locator;

    protected constructor(page: Page) {
        this.page = page;
        this.acceptAllButton = this.page.getByRole('button', { name: 'Accept all' });
    }

    async navigate() {
        try {
            await this.page.goto(this.BASE_URL + this.url);
        } catch (error) {
            console.error(`Failed to navigate to ${this.url}:`, error);
            throw new Error(`Navigation error: ${error.message}`);
        }

    }

    async acceptCookies(){
        await this.acceptAllButton.click()
    }

    protected abstract getPageLoadSelectors(): Locator[];

    async waitForPageLoad() {
        await Promise.all([
            this.page.waitForLoadState('networkidle'),
            ...this.getPageLoadSelectors().map(selector =>
                selector.waitFor({ state: 'visible' })
            )
        ]);
    }
}

