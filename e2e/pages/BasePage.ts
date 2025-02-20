import {Locator, Page} from '@playwright/test'

export class BasePage {
    protected page: Page;
    protected url: string;
    acceptAllButton: Locator;

    constructor(page: Page, url: string) {
        this.page = page;
        this.url = url
        this.acceptAllButton = this.page.getByRole('button', { name: 'Accept all' });
    }

    async navigate() {
        await this.page.goto(this.url);
    }

    async acceptCookies(){
        await this.acceptAllButton.click()
    }
}