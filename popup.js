'use strict';

console.log("popup")

// pull state from storage
chrome.storage.sync.get('state', function(data) {
    // populate text area
    // convert array/json to a formatted string
    if (data.state) {
        document.getElementById("accounts").value = JSON.stringify(data.state, null, "\t")
    }
});

document.getElementById('button').addEventListener('click', function() {
    var text = document.getElementById("accounts").value
    // save to storage
    // parse text into json
    chrome.storage.sync.set({state: JSON.parse(text)}, function() {
    })
})
