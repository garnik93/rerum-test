import Page from "./page.ts";
import {IScenarios} from "../../commons/Scenarios.ts";

class RegistrationPage extends Page {
    constructor() {
        super()
    }

    private get realNameField() {
        return $('#realname')
    }

    private get surNameField() {
        return $('#surname')
    }

    private get emailField() {
        return $('#email')
    }

    private get mobPhoneField() {
        return $('#mob_phone')
    }

    private get contractAcceptCheckBox() {
        return $('#contract_accept')
    }

    private get continueButton() {
        return $(`input[type='submit']`)
    }

    async fillOutForm(testData: IScenarios) {
        await this.sendKeys(await this.realNameField, testData.stringField)
        await this.sendKeys(await this.surNameField, testData.stringField)
        await this.sendKeys(await this.emailField, testData.email)
        await this.sendKeys(await this.mobPhoneField, testData.phone)
        await this.switchCheckBox(await this.contractAcceptCheckBox, testData.checkbox)
        await this.doClickOnButton(await this.continueButton)
    }
}

export default new RegistrationPage()