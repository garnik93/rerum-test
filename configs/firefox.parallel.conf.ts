import type { Options } from '@wdio/types'
import * as baseConfig from './firefox.default.conf'
import AllureReporter from "@wdio/allure-reporter";
import {Status} from "allure-js-commons";

export const config: Options.Testrunner = {
    ...baseConfig.config,
    specs: [
        '../test/specs/parallels/**/*.ts'
    ],

    //@ts-ignore
    beforeSuite(suite: Suite): unknown | Promise<unknown> {
        AllureReporter.startStep('Firefox')
        AllureReporter.addFeature('Firefox')
    },

    //@ts-ignore
    afterSuite(suite: Suite): unknown | Promise<unknown> {
        AllureReporter.endStep(Status.PASSED)
    }
}