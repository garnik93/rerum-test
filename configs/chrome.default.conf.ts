import type {Options} from '@wdio/types'
import * as baseConfig from './test.conf'

export const config: Options.Testrunner = {
    ...baseConfig.config,
    specs: [
        '../test/specs/base/**/*.ts'
    ],
    capabilities: [{
        browserName: 'chrome',
        "goog:chromeOptions": {
            args: [
                '--disable-infobars',
                '--start-maximized',
                '--disable-extensions',
                '--disable-notifications',
                '--user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) ' +
                'AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36',
            ]
        },
        "selenoid:options": {
            enableVNC: true,
            enableVideo: false
        }
    }]
}