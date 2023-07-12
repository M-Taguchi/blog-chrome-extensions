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
    $("#genre").on("change", () => {
        const genre = $("#genre").val();
        switch(genre) {
            case "1":
                $("#generate-title").show();
                $("#generate-compose").hide();
                $("#generate-article").hide();
                break;
            case "2":
                $("#generate-title").hide();
                $("#generate-compose").show();
                $("#generate-article").hide();
                break;
            case "3":
                $("#generate-title").hide();
                $("#generate-compose").hide();
                $("#generate-article").show();
                break;
        }
    }).trigger("change");
    $("#button").on("click",() => {
        const genre = $("#genre").val();
        chrome.tabs.query({active: true, currentWindow: true}, async(tabs) => {
            switch(genre) {
                case "1":
                    if(tabs[0].url !== "https://edgeservices.bing.com/edgesvc/chat") {
                        alert("urlを確認してください。");
                        break;
                    }
                    let titlePrompt = await fetch("assets/titlePrompt.txt").then((res) => {
                        return res.text();
                    });
                    titlePrompt = titlePrompt.replace("${keyword}", $("#keyword-title").val());
                    chrome.tabs.sendMessage(tabs[0].id, { type: "GENERATE_TITLE", data: { prompt: titlePrompt } });
                    break;
                case "2":
                    if(tabs[0].url !== "https://edgeservices.bing.com/edgesvc/chat") {
                        alert("urlを確認してください。");
                        break;
                    }
                    let composePrompt = await fetch("assets/composePrompt.txt").then((res) => {
                        return res.text();
                    })
                    composePrompt = composePrompt.replace("${title}", $("#title").val());
                    composePrompt = composePrompt.replace("${keyword}", $("#keyword-compose").val());
                    chrome.tabs.sendMessage(tabs[0].id, { type: "GENERATE_COMPOSITION", data: { prompt: composePrompt } });
                    break;
                case "3":
                    if(tabs[0].url !== "https://edgeservices.bing.com/edgesvc/compose") {
                        alert("urlを確認してください。");
                        break;
                    }
                    let articlePrompt = await fetch("assets/articlePrompt.txt").then((res) => {
                        return res.text();
                    })
                    articlePrompt = articlePrompt.replace("${headline}", $("#headline").val());
                    articlePrompt = articlePrompt.replace("${url}", $("#url").val());
                    chrome.tabs.sendMessage(tabs[0].id, { type: "GENERATE_ARTICLE", data: { prompt: articlePrompt } });
                    break;
            }
        });
    });
});