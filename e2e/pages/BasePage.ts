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
        await this.page.goto(this.BASE_URL + this.url);
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

