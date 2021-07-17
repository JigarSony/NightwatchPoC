# Nightwatch

Official Website [Nightwatch](https://nightwatchjs.org/)

[NPM](https://www.npmjs.com/package/nightwatch)

## Procedure

 - Create dir NightWatchPoC
 - Open Terminal
 - Check node version `node --version`
 - Check npm `npm --version`
 - Create `package.json`
 - Type `npm init -y`
 - install dependencies ``npm install nightwatch chromedriver --save-dep``
 - check package.json
 - more package.json
 - check nightwatch version `npx nightwatch --version`
 - To run/create config file `npx nightwatch`

 #### Execution-1   
`npx nightwatch`
<p>
Error: An error occurred while trying to start the Nightwatch Runner: The path to the GeckoDriver binary is not set.
You can either install geckodriver from NPM:
`npm install geckodriver --save-dev`
or download GeckoDriver from https://github.com/mozilla/geckodriver/releases, extract the archive and set "webdriver.server_path" config option to point to the binary file.
npx nightwatch -e chrome
Error: No test source specified, please check configuration.
at processTicksAndRejections (internal/process/task_queues.js:93:5)
</p>

 - Create test folder
 - Create firstTest.js file

> module.exports = {
"Our first test": function (browser){},
};

 - Modified config file
 - src_folders: ["./test"],
 - Run
`npx nightwatch -e chrome`

 #### Execution-2
<p>
Error: No test source specified, please check configuration.
at processTicksAndRejections (internal/process/task_queues.js:93:5)
XXXXXX NightWatchPoC % npx nightwatch -e chrome
[First Test] Test Suite

=======================

ℹ Connected to localhost on port 9515 (1895ms).
Using: chrome (91.0.4472.114) on Mac OS X platform.
⚠ Running Our first test:
No assertions ran.
- Static wait in Nightwatch `browser.pause(3000);`
- To Click on any element `browser.click("Element");`
- By default browser take css
- To avoid case execution

>"Our first test":
""+ function (browser){
browser.url("https://actionqa.com");
browser.pause(3000);
browser.end();
},
- `""+ before function`
 - For Assert of visible element
`browser.assert.visible("#surprise-message");`
- NightWatch by default wait is 5000ms

 #### Execution-3
xxxxx NightWatchPoC % npx nightwatch -e chrome
[First Test] Test Suite

=======================
ℹ Connected to localhost on port 9515 (1436ms).
Using: chrome (91.0.4472.114) on Mac OS X platform.
⚠ Running Click test:
✖ Testing if element <#surprise-message> is visible in 5000ms - expected "is visible" but got: "not visible" (5210ms)
at Object.Click test (/Users/jigarsony/Desktop/GitHubRepos/NightWatchPoC/test/firstTest.js:14:24)
at processTicksAndRejections (internal/process/task_queues.js:93:5)
FAILED: 1 assertions failed (5.878s)
_________________________________________________
TEST FAILURE: 1 assertions failed, 0 passed (7.579s)
✖ firstTest
– Click test (5.878s)
Testing if element <#surprise-message> is visible in 5000ms - expected "is visible" but got: "not visible" (5210ms)
at Object.Click test (/Users/jigarsony/Desktop/GitHubRepos/NightWatchPoC/test/firstTest.js:14:24)
at processTicksAndRejections (internal/process/task_queues.js:93:5)
- For Assert in any element text
`browser.assert.containsText("#submitted-email","foo@bar.com");`

- Tags

>module.exports = {
tags: ["foo"],
>"Our first test": function (browser){
browser.url("https://actionqa.com");
browser.end();
},

>"Click test": function (browser){
browser.url("http://tutorials.actionqa.com/yt/nw/basic/click.html");
browser.click("#surprise-button");
browser.assert.visible("#surprise-message");
browser.end();
},

>"Fill a form": function(browser){
browser.url("http://tutorials.actionqa.com/nwfree/simple-form.html");
browser.setValue("#email","foo@bar.com")
browser.setValue("#password","foo@bar.com")
browser.click("#submit");
browser.assert.containsText("#submitted-email","foo@bar.com");
browser.end()
},
};
- foo is tag at the top of file all cases associated
- To run tag `npx nightwatch -e chrome -a foo`