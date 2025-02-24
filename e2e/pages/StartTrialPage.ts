import {BasePage} from "./BasePage";
import {Locator, Page} from "@playwright/test";

export class StartTrialPage extends BasePage{
    readonly url = null;
    static readonly START_TRIAL_TEXT : string = "start your trial 🎉"
    startTrialHeader : Locator  = this.page.getByRole('heading', { name: StartTrialPage.START_TRIAL_TEXT })

    constructor(page: Page) {
        super(page);
    }

    async getStartTrialHeaderText() {
        return await this.startTrialHeader.innerText();
    }


}