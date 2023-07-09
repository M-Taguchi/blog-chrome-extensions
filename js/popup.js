$(function(){
    $("#link_chat").on("click",() => {
        chrome.tabs.query({active: true, currentWindow: true}, tabs => {
            chrome.tabs.update(tabs[0].id, {active: true, url: "https://edgeservices.bing.com/edgesvc/chat"})
        });
    });
    $("#link_compose").on("click",() => {
        chrome.tabs.query({active: true, currentWindow: true}, tabs => {
            chrome.tabs.update(tabs[0].id, {active: true, url: "https://edgeservices.bing.com/edgesvc/compose"})
        });
    });
    $("#button").on("click",() => {
        chrome.tabs.query({active: true, currentWindow: true}, tabs => {
            chrome.tabs.sendMessage(tabs[0].id, { type: "CLICK_POPUP" });
        });
    });
});