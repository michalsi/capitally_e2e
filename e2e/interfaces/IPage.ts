import { Locator } from '@playwright/test';

export interface IPage {
    /**
     * Navigates to the page
     */
    navigate(): Promise<void>;

    /**
     * Waits for the page to be fully loaded
     */
    waitForPageLoad(): Promise<void>;

    /**
     * Accepts cookies if the cookie banner is present
     */
    acceptCookies(): Promise<void>;

    /**
     * Gets the URL of the page
     */
    readonly url: string;

    /**
     * Gets the locators that indicate the page is loaded
     */
    getPageLoadSelectors(): Locator[];
}