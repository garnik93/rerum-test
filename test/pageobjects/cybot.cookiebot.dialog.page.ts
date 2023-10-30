import Page from "./page.ts";
import Allure from "../../commons/Allure.ts";

class CybotCookiebotDialogPage extends Page {

    private get CybotCookiebotDialog() {
        return $('#CybotCookiebotDialog')
    }

    private get allowAll() {
        return $('#CybotCookiebotDialogBodyLevelButtonLevelOptinAllowAll')
    }

    async acceptCookies() {
        await Allure.step('Accept cookies', async () => {
            if(await this.CybotCookiebotDialog.isExisting()) {
                await this.waitForElementClickable(await this.allowAll)
                await this.doClickOnButton(await this.allowAll)
            }
        })
    }
}

export default new CybotCookiebotDialogPage()