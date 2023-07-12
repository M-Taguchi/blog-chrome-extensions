chrome.declarativeNetRequest.updateDynamicRules({
    removeRuleIds: [1],
    addRules: [{
        id: 1,
        priority: 1,
        action: {
            type: "modifyHeaders",
            requestHeaders: [{
                    header: "user-agent",
                    operation: "set",
                    value: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36 Edg/110.0.1587.41",
                },
                {
                    header: "sec-ch-ua",
                    operation: "set",
                    value: '"Microsoft Edge";v="111", "Not(A:Brand";v="8", "Chromium";v="111"',
                },
            ],
            responseHeaders: [{
                    header: "x-frame-options",
                    operation: "remove"
                },
                {
                    header: "content-security-policy",
                    operation: "remove"
                },
            ],
        },
        condition: {
            urlFilter: "bing",
            isUrlFilterCaseSensitive: false,
            resourceTypes: ["main_frame", "sub_frame", "xmlhttprequest", "websocket"],
        },
    }, ],
});