import {expect, Locator} from '@playwright/test';

export async function expectTextToContain(locator :Locator, expectedText: string, context = 'text verification') {
    return expect(await locator.textContent(), `Failed ${context}: Expected text to contain '${expectedText}'`).toContain(expectedText);
}

export async function expectElementToBeVisible(locator: Locator, context = 'element visibility') {
    return expect(await locator.isVisible(), `Failed ${context}: Expected element to be visible`).toBeTruthy();
}