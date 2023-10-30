import Page from "./page.ts";
import Allure from "../../commons/Allure.ts";

class YourPersonalDataPage extends Page {

    get regFom() {
        return $('#regForm')
    }

    async checkOnYourPersonalPage(isOnPage: boolean) {
        const actualUrl = await browser.getUrl()
        const validExpectedUrl = 'https://www.rerum.cz/register/1'
        const invalidExpectedUrl = 'https://www.rerum.cz/cz/register/'
        await Allure.step(`we ${isOnPage ? 'should be' : 'shouldn\'t be'} on 'your personal page'`, async () => {
            expect(actualUrl).toEqual(isOnPage ? validExpectedUrl : invalidExpectedUrl)
        })
    }
}

export default new YourPersonalDataPage()