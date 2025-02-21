import {test} from "../fixtures";
import {expect} from "@playwright/test";

test("Portfolio test", async ({testContext}) => {
        const {portfolioPage} = testContext
        await portfolioPage.navigate()
        await portfolioPage.acceptCookies()

        await portfolioPage.clickThroughAllUpperMenuItems()
        await portfolioPage.clickThroughAllLowerMenuItems()

        await portfolioPage.clickPositions()
        await portfolioPage.addAsset("tesla", "Tesla Inc Stock · NASDAQ TSLA")
        await expect(portfolioPage.getAddAssetDemoDialog()).toBeVisible()
        await portfolioPage.closeAddAssetDemoDialog()
    }
)