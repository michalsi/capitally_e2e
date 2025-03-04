import {BasePage} from "./BasePage";
import {Locator, Page} from "@playwright/test";

export class StartTrialPage extends BasePage{
    getPageLoadSelectors(): Locator[] {
        throw new Error("Method not implemented.");
    }
    readonly url = null;
    static readonly START_TRIAL_TEXT : string = "Let's start your trial 🎉"
    startTrialHeader : Locator  = this.page.getByRole('heading', { name: StartTrialPage.START_TRIAL_TEXT })

    constructor(page: Page) {
        super(page);
    }

    async getStartTrialHeaderText() {
        return await this.startTrialHeader.textContent();
    }


}