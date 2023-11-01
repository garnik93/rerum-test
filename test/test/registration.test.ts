import {getScenario, getScenarios, IScenarios} from "../../commons/Scenarios.ts";
import Allure from "../../commons/Allure.ts";
import RegistrationPage from "../pageobjects/registration.page.ts";
import YourPersonalDataPage from "../pageobjects/your.personal.data.page.ts";
import WelcomePage from "../pageobjects/welcome.page.ts";

export function registrationTest(setScenario: string) {
    if (setScenario === 'all') {
        for (const scenario of getScenarios()) {
            test(scenario)
        }
    } else {
        test(getScenario(setScenario))
    }
}

function test(scenario: IScenarios) {

    const isValid: string = scenario.state ? 'valid' : 'invalid'
    const isOn: string = scenario.state ? '' : 'not'

    describe(`${scenario.title}`, () => {
        it(`Registration with ${isValid} credentials`, async () => {
            await Allure.step('Preconditions', async () => {
                await WelcomePage.open()
                await WelcomePage.acceptCookies()
                await WelcomePage.clickRegistrationButton()
            })

            await Allure.step('1. Fill out a form', async () => {
                await RegistrationPage.fillOutForm(scenario)
            })

            await Allure.step(`Should ${isOn} be on your personalized page.`, async () => {
                await YourPersonalDataPage.checkOnYourPersonalPage(scenario.state)
            })
        })

        afterEach(async () => {
            await Allure.step('After test', async () => {
                await Allure.step('Delete All Cookies', async () => {
                    await browser.deleteAllCookies()
                })
            })
        })
    })
}