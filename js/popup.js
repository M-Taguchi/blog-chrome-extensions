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
        const genre = $("#genre").val();
        chrome.tabs.query({active: true, currentWindow: true}, tabs => {
            switch(genre) {
                case "1":
                    if(tabs[0].url !== "https://edgeservices.bing.com/edgesvc/chat") {
                        alert("urlを確認してください。");
                        break;
                    }
                    chrome.tabs.sendMessage(tabs[0].id, { type: "GENERATE_TITLE" });
                    break;
                case "2":
                    if(tabs[0].url !== "https://edgeservices.bing.com/edgesvc/chat") {
                        alert("urlを確認してください。");
                        break;
                    }
                    chrome.tabs.sendMessage(tabs[0].id, { type: "GENERATE_COMPOSITION" });
                    break;
                case "3":
                    if(tabs[0].url !== "https://edgeservices.bing.com/edgesvc/compose") {
                        alert("urlを確認してください。");
                        break;
                    }
                    chrome.tabs.sendMessage(tabs[0].id, { type: "GENERATE_ARTICLE" });
                    break;
            }
        });
    });
});