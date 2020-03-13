'use strict';

// load state from storage
chrome.storage.sync.get(['state'], function(data) {
    // look at all accounts on page
    $(".saml-account-name").each(function(index) {
        // see if we have a matching configuration
        if (data.state) {
            data.state.forEach(account => {
                if ($(this).text().indexOf(account.id) !== -1) {
                    // matching account - apply color and label
                    $(this).css("color", account.color)
                    $(this).text($(this).text() + " " + account.label)
                }
            })
        }
    })
});
