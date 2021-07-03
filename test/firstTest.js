module.exports =  {
    tags: ["foo"],
    "Our first test": function (browser){
        browser.url("https://actionqa.com");
        browser.end();
    },

    "Click test": function (browser){
        browser.url("http://tutorials.actionqa.com/yt/nw/basic/click.html");
        browser.click("#surprise-button");
        browser.assert.visible("#surprise-message");
        browser.end();
    },

    "Fill a form": function(browser){
        browser.url("http://tutorials.actionqa.com/nwfree/simple-form.html");
        browser.setValue("#email","foo@bar.com")
        browser.setValue("#password","foo@bar.com")
        browser.click("#submit");
        browser.assert.containsText("#submitted-email","foo@bar.com");
        browser.end()
    },
};