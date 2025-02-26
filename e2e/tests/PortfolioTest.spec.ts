import {test} from "../fixtures";
import {expect} from "@playwright/test";

test("Verify Portfolio - adding assets not supported by demo account", async ({testContext}) => {
        let searchAsset = "tesla";
        let assetNameToWait = "Tesla Inc Stock · NASDAQ TSLA";

        const {portfolioPage} = testContext
        await portfolioPage.navigate()
        await portfolioPage.acceptCookies()

        await portfolioPage.clickThroughAllUpperMenuItems()
        await portfolioPage.clickThroughAllLowerMenuItems()

        await portfolioPage.clickPositions()
        await portfolioPage.addAsset(searchAsset, assetNameToWait)
        await expect(portfolioPage.getAddAssetDemoDialog()).toBeVisible()
        await portfolioPage.closeAddAssetDemoDialog()
    }
)

test("Verify Portfolio - adding new transaction", async ({testContext}) => {
        let positionName = 'Microsoft Corporation';
        const {assetPage, portfolioPage} = testContext

        const timestamp = Date.now();
        const transactionName: string = `My Transaction @ ${timestamp}`;
        const transactionAmount: number = 1

        await portfolioPage.navigate()
        await portfolioPage.acceptCookies()

        await portfolioPage.openPositionDetails(positionName)
        await assetPage.performBuyTransaction(transactionAmount, transactionName)
        await assetPage.clickTransactionsTab()
        await assetPage.openBuyTransaction()

        await expect(assetPage.getTransactionQuantity()).toHaveValue(transactionAmount.toString());
        await expect(assetPage.getTransactionNotes()).toContainText(transactionName)
    }
)