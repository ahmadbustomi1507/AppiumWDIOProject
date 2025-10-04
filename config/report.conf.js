//buat report

export const reportConf = {
    // Test reporter for stdout.
    // The only one supported by default is 'dot'
    // see also: https://webdriver.io/docs/dot-reporter
    reporters: ['spec',['allure', {outputDir: 'allure-results'}]],
    
}