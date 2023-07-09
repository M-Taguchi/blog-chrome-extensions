chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  switch(request.type) {
    case "CLICK_POPUP":
      // const textarea = document.querySelector("#prompt-textarea");
      const actionbar = document.querySelector("cib-serp").shadowRoot.querySelector("cib-action-bar").shadowRoot;
      const textarea = actionbar.querySelector("cib-text-input").shadowRoot.querySelector("#searchbox");
      console.log(textarea);
      const submitBtn = actionbar.querySelector("button[aria-label='送信']");
      textarea.value = "テスト";
      textarea.dispatchEvent(new Event('input', {
        bubbles: true
      }));
      submitBtn.click();
      // textarea.nextElementSibling.click();
      break;
  }
});