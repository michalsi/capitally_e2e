import {BasePage} from "./BasePage";
import {Locator, Page} from "@playwright/test";
import {TransactionModal} from "./TransactionModal";

export class AssetPage extends BasePage {
    protected getPageLoadSelectors(): Locator[] {
        throw new Error("Method not implemented.");
    }

    readonly url: string = null;
    transactionModal: TransactionModal
    addTransactionButton: Locator = this.page.getByRole('button', {name: 'Add Transaction'})
    transactionsTab: Locator = this.page.locator('div').filter({hasText: /^Transactions$/})
    buyTransactionLink: Locator = this.page.getByText('Buy', {exact: true})

    constructor(page: Page) {
        super(page);
        this.transactionModal = new TransactionModal(page);

    }

    async performBuyTransaction(amount: number, transactionNotes: string) {
        await this.addTransactionButton.click()

        await this.transactionModal.addTransactionDetails(amount, transactionNotes)
    }

    async clickTransactionsTab() {
        await this.transactionsTab.click();
    }

    async openBuyTransaction() {
        await this.buyTransactionLink.click()
        await this.page.getByText('BuyMSFT · Microsoft CorporationDateAccount🏦Stocks').waitFor()
    }

    getTransactionQuantity() {
        return this.transactionModal.getTransactionQuantity()
    }

    getTransactionNotes() {
        return this.transactionModal.getTransactionNotes()
    }
}