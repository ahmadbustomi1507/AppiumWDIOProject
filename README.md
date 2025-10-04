This is my Personal WDIO mobile automation android test
npm init wdio@latest . -- --yes
# run all test
npx wdio run ./wdio.conf.js

# run specify test
npx wdio run ./wdio.conf.js --spec example.e2e.js

# run specify suites
npx wdio run ./wdio.conf.js --suite exampleSuiteName


# install driver for android
appium driver install uiautomator2

# logging appium to ports
appium --webhook localhost:9876

# running the appium server
appium server --port 4723 --base-path /wd/hub

# for mobile 
appium plugin install --source=npm appium-device-farm
appium plugin install --source=npm appium-dashboard

# starting appium server with plugin
[//]: # (-ka => --keep-alive-timeout)
[//]: # (-pa => --base-path)
appium server -ka 800 --use-plugins=device-farm,appium-dashboard -pa /wd/hub --plugin-device-farm-platform=Android

