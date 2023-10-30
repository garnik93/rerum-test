import Page from "./page.ts";
import Allure from "../../commons/Allure.ts";
import CybotCookiebotDialogPage from "./cybot.cookiebot.dialog.page.ts";

class WelcomePage extends Page {

    private get registrationButton() {
        return $('#get-credit-frontpage')
    }

    async acceptCookies() {
        await CybotCookiebotDialogPage.acceptCookies()
    }

    async clickRegistrationButton() {
        await Allure.step('Click registration button', async () => {
            await this.registrationButton.click()
        })
    }
}

export default new WelcomePage()