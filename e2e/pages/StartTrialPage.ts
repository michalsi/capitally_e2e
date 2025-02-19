import {BasePage} from "./BasePage";
import {Locator, Page} from "@playwright/test";

export class StartTrialPage extends BasePage{
    static readonly START_TRIAL_URL ='https://app.mycapitally.com/login?redirectTo=%2Fstart';
    static readonly START_TRIAL_TEXT : string = "start your trial 🎉"
    startTrialHeader : Locator  = this.page.getByRole('heading', { name: StartTrialPage.START_TRIAL_TEXT })

    constructor(page: Page) {
        super(page, StartTrialPage.START_TRIAL_URL);
    }

    async getStartTrialHeaderText() {
        return await this.startTrialHeader.innerText();
    }


}