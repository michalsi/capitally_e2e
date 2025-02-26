import {BasePage} from "./BasePage";
import {Locator, Page} from "@playwright/test";

export class ReportsPage extends BasePage {
    header: Locator = this.page.locator('h1');
    totalRow: Locator = this.page.locator('._footer_bevwa_20 .notranslate span');
    totalsHeader: Locator = this.page.getByText('Totals')
    exportButton: Locator = this.page.getByRole('button', {name: 'Export'})
    exportToCVSOption: Locator = this.page.getByRole('menuitem', { name: 'Export to CSV' })
    readonly url: string = this.BASE_URL + "/demo-1/reports/r-income";

    constructor(page: Page) {
        super(page);
    }

    async getTotalRowValues(): Promise<string[]> {
        const values = await this.totalRow.allTextContents();
        return values.slice(0, -1); // last value (price) is not needed
    }

    getPageLoadSelectors(): Locator[] {
        return [
            this.header,
            this.totalsHeader
        ]
    }

    async clickOnExportButton() {
        await this.exportButton.click()
    }

    async exportCSVReport() {
        await this.clickOnExportButton()
        const downloadPromise = this.page.waitForEvent('download');
        await this.exportToCVSOption.click()
        const download = await downloadPromise;
        return await download.path();
    }
}