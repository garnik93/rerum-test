import {Status} from "allure-js-commons";
import AllureReporter from "@wdio/allure-reporter";
import Logger from "./Logger.ts";

class Allure {
    async step(title: string, fn: Function) {
        AllureReporter.startStep(title)
        Logger.addLog('INFO', 'pending', title, 'performing...')
        try {
            await fn()
            await browser.takeScreenshot()
            AllureReporter.endStep(Status.PASSED)
            Logger.addLog('INFO', 'pending', title, 'performed successful!')
        } catch (error) {
            await browser.takeScreenshot()
            AllureReporter.addAttachment('ERROR', error + '', 'text/plain')
            AllureReporter.endStep(Status.FAILED)
            Logger.addLog('ERROR', 'bright fail', title, 'performed unsuccessful!')
            // @ts-ignore
            throw new Error('Error: ', error.message)
        }
    }

    async baseStep(title: string, fn: Function) {
        Logger.enter()
        await this.step(title, fn)
        Logger.enter()
    }
}

export default new Allure()