import {Locator, Page} from "@playwright/test";
import {BasePage} from "./BasePage";

export class TransactionModal extends BasePage {
    protected getPageLoadSelectors(): Locator[] {
        throw new Error("Method not implemented.");
    }
    buyRadioButton: Locator = this.page.getByRole('radio', {name: 'Buy'});
    quantityInput: Locator = this.page.locator('input[name="qty"]');
    dollarSymbolLink: Locator = this.page.locator('a').filter({hasText: '$'});
    paragraphElement: Locator = this.page.getByRole('paragraph');
    emptyNotesTextbox: Locator = this.page.locator('div')
        .filter({hasText: /^NotesAdd a note, you can use \*\*markdown\*\* and paste links here\.\.\.$/})
        .getByRole('textbox');
    notesTextBox: Locator = this.page.locator('div').filter({hasText: /^Notes$/}).locator('+ div');
    addButton: Locator = this.page.getByRole('button', {name: 'Add'});

    readonly url = null;

    constructor(page: Page) {
        super(page);
    }

    async addTransactionDetails(amount: number, notes: string) {
        await this.buyRadioButton.check();
        await this.quantityInput.fill(String(amount));
        await this.dollarSymbolLink.click();
        await this.paragraphElement.click();
        await this.emptyNotesTextbox.fill(notes);
        await this.addButton.click();
    }

    getTransactionQuantity() {
        return this.quantityInput
    }

    getTransactionNotes() {
        return this.notesTextBox;
    }
}