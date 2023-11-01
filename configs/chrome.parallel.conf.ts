import type {Options} from '@wdio/types'
import * as baseConfig from './chrome.default.conf'
import AllureReporter from "@wdio/allure-reporter";
import {Status} from "allure-js-commons";

export const config: Options.Testrunner = {
    ...baseConfig.config,
    specs: [
        '../test/specs/parallels/**/*.ts'
    ],

    // //@ts-ignore
    // before(capabilities: RemoteCapability, specs: string[], browser: any): unknown | Promise<unknown> {
    //     AllureReporter.startStep('Chrome')
    //     AllureReporter.addFeature('Chrome')
    // },

    //@ts-ignore
    beforeSuite(suite: Suite): unknown | Promise<unknown> {
        AllureReporter.startStep('Chrome')
        AllureReporter.addFeature('Chrome')
    },

    //@ts-ignore
    beforeTest(test: Test, context: any): unknown | Promise<unknown> {
        AllureReporter.startStep('Chrome')
        AllureReporter.addFeature('Chrome')
    },

    //@ts-ignore
    afterTest(test: Test, context: any, result: TestResult): unknown | Promise<unknown> {
        AllureReporter.endStep(Status.PASSED)
    },

    //@ts-ignore
    afterSuite(suite: Suite): unknown | Promise<unknown> {
        AllureReporter.endStep(Status.PASSED)
    }

    // //@ts-ignore
    // after(result: number, capabilities: RemoteCapability, specs: string[]): unknown | Promise<unknown> {
    //     AllureReporter.endStep(Status.PASSED)
    // }
}