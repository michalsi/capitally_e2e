import {test} from "../fixtures";

test("Portfolio test", async ({testContext}) => {
        const {portfolioPage} = testContext
        await portfolioPage.navigate()
        await portfolioPage.acceptCookies()
        await portfolioPage.clickThroughAllUpperMenuItems()
    }
)