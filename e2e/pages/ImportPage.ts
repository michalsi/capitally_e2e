import {Locator, Page} from "@playwright/test";
import {BasePage} from "./BasePage";

export class ImportPage extends BasePage {
    url: string;
    brokerMBank: Locator = this.page.getByText('mBank eMakler');
    mBankImportTransactionsTab: Locator = this.page.getByRole('menuitem', {name: 'of 2 - Transactions'});
    chooseFileButton: Locator = this.page.getByRole('button', {name: 'Choose file'});
    cancelImportButton: Locator = this.page.getByRole('button', { name: 'Cancel import' })
    nextImportStepButton: Locator =  this.page.getByRole('button', { name: 'Next' });
    appRootLocator : Locator =  this.page.locator('#AppRoot');
    reviewHeader: Locator = this.page.locator('h2:has-text("Review items to be imported")');


    constructor(page: Page) {
        super(page);
    }

    protected getPageLoadSelectors(): Locator[] {
        return [this.brokerMBank]
    }

    clickBrokerMBank() {
        return this.brokerMBank.click();
    }

    clickMBankImportTransactionsTab() {
        return this.mBankImportTransactionsTab.click();
    }

    async clickUploadFile() {
        await this.chooseFileButton.click();
    }

    async uploadFile(filePath: string) {
        const fileChooserPromise = this.page.waitForEvent('filechooser');
        await this.clickUploadFile()
        const fileChooser = await fileChooserPromise;
        await fileChooser.setFiles(filePath);
    }

    async clickNextImportStep() {
        await this.nextImportStepButton.click();
    }

    async clickCancelImport() {
        await this.cancelImportButton.click();
    }
    getReviewHeader(): Locator {
        return this.reviewHeader;
    }

    getDemoImportWarningText(): Locator {
        return this.appRootLocator.getByText('It\'s not possible to add market assets to demo projects');
    }

}