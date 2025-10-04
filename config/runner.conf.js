//running dimana

export const runnerConf = {
        //
        // ====================
        // Runner Configuration
        // ====================
        // WebdriverIO supports running e2e tests as well as unit and component tests.
        runner: 'local',
        //port: 53379,
        //
        // ==================
        // Specify Test Files
        // ==================
        // Define which test specs should run. The pattern is relative to the directory
        // of the configuration file being run.
        //
        // The specs are defined as an array of spec files (optionally using wildcards
        // that will be expanded). The test for each spec file will be run in a separate
        // worker process. In order to have a group of spec files run in the same worker
        // process simply enclose them in an array within the specs array.
        //
        // The path of the spec files will be resolved relative from the directory of
        // of the config file unless it's absolute.
        //
        specs: [
           './test/ios/**/*.js',
           './test/android/**/*.js',
           //'./test/specs/**/*.js'
        ],
        // Patterns to exclude.
        exclude: [
            // 'path/to/excluded/files'
        ],


}