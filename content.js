'use strict';

// load state from storage
chrome.storage.sync.get(['state'], function(data) {
    // saml page
    // look at all accounts on page
    if (data.state) {
        $(".saml-account-name").each(function(index) {
            // see if we have a matching configuration
            data.state.forEach(account => {
                if ($(this).text().indexOf(account.id) !== -1) {
                    // matching account - apply color and label
                    $(this).css("color", account.color)
                    $(this).text($(this).text() + " " + account.label)
                }
            })
        })
    

        // aws console
        // find account in state and apply decorator to the console
        var consoleAccountText = $("#awsc-login-display-name-account").text()
        var consoleAccount = parseInt(consoleAccountText.replace(/-/g,''))
        data.state.forEach(account => {
            if (consoleAccount === account.id) {
                // color nav
                $("#awsgnav").css("background-color", account.color)
                $("#nav-menubar").css("background-color", account.color)
                $("#nav-menu-right").css("background-color", account.color)
                $(".nav-menu").css("background-color", account.color)

                // apply decorator label to account
                $("#awsc-login-display-name-account").text(consoleAccountText + " " + account.label)
            }
        })
    }
});
