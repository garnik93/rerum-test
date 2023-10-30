import {TIMEOUTS_INTERVAL, TIMEOUTS_VISIBILITY} from "../../commons/Constants.ts";
import Allure from "../../commons/Allure.ts";


export default class Page {
    private baseUrl = `https://www.rerum.cz/`

    private settings = (element: WebdriverIO.Element) => {
        return {
            timeout: TIMEOUTS_VISIBILITY,
            interval: TIMEOUTS_INTERVAL,
            timeoutMsg: `Element ${element.selector} should be visible`
        }
    }

    public async open() {
        await Allure.step(`Open ${this.baseUrl} `, async () => {
            return browser.url(this.baseUrl)
        })
    }

    public async doClickOnButton(element: WebdriverIO.Element) {
        await Allure.step(`Do click on '${element.selector}' button`, async () => {
            await element.click()
        })
    }

    public async sendKeys(element: WebdriverIO.Element, text: string | number) {
        await Allure.step(`Send keys in '${element.selector}' field`, async () => {
            await element.setValue(text)
            const getValue = await element.getValue()
            expect(getValue).toEqual(text.toString())
        })
    }

    public async waitForElementVisible(element: WebdriverIO.Element) {
        await Allure.step(`Wait for element '${element.selector}' visible!`, async () => {
            expect(await element.waitForExist(this.settings(element))).toBeExisting()
        })
    }

    public async waitForElementClickable(element: WebdriverIO.Element) {
        await Allure.step(`Wait for element '${element.selector}' clickable!`, async () => {
            expect(await element.waitForClickable(this.settings(element))).toBeClickable()
        })
    }

    public async switchCheckBox(element: WebdriverIO.Element, _isChecked: boolean) {
        await Allure.step(`Checkbox '${element.selector}' should be ${_isChecked ? 'checked' : 'unchecked'}!`, async () => {
            if (!await element.isSelected() && _isChecked) {
                await element.click()
            } else if (await element.isSelected() && !_isChecked) {
                await element.click()
            }

            expect(await element.isSelected()).toBe(_isChecked)
        })
    }
}
