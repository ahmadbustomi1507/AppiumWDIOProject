
import { deepmerge } from   'deepmerge-ts';
import { runnerConf } from './config/runner.conf.js';
import { reportConf } from './config/report.conf.js'; 
import { hooksConf } from './config/hooks.conf.js';
import { mobileConf } from './config/mobile.caps.conf.js';
import { testConf } from './config/test.conf.js';

export const config = deepmerge(
    runnerConf,
    reportConf,
    hooksConf,
    mobileConf,
    testConf
)

    
