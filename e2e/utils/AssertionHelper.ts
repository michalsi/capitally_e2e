import {expect, Locator} from '@playwright/test';
import {testConfig} from '../test-config/test.setup';

export async function expectTextToContain(
    locator: Locator,
    expectedText: string,
    context = 'text verification',
    timeout = testConfig.waitTimeout
) {
    await expect(locator).toBeVisible({ timeout });
    const actualText = await locator.textContent();
    console.log(`Actual text content for ${context}:`, actualText);
    return expect(actualText, `Failed ${context}: Expected text to contain '${expectedText}'`).toContain(expectedText);
}
export async function expectElementToBeVisible(
    locator: Locator,
    context = 'element visibility',
    timeout = testConfig.waitTimeout
) {
    return expect(locator, `Failed ${context}: Expected element to be visible`)
        .toBeVisible({ timeout });
}