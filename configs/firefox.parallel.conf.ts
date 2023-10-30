import type { Options } from '@wdio/types'
import * as baseConfig from './firefox.default.conf'

export const config: Options.Testrunner = {
    ...baseConfig.config,
    specs: [
        '../test/specs/parallels/**/*.ts'
    ]
}