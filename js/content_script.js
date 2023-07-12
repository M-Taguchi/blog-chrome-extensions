chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  switch(request.type) {
    case "GENERATE_TITLE":
    case "GENERATE_COMPOSITION":
      generateFromChat(request.data.prompt);
      break;
    case "GENERATE_ARTICLE":
      generateFromCompose(request.data.prompt);
      break;
    default:
      // ChatGPT用
      // const textarea = document.querySelector("#prompt-textarea");
      // textarea.value = "テスト";
      // textarea.dispatchEvent(new Event('input', {
        // bubbles: true
      // }));
      // textarea.nextElementSibling.click();
  }
});

function generateFromChat(str) {
  const actionbar = document.querySelector("cib-serp").shadowRoot.querySelector("cib-action-bar").shadowRoot;
  const textarea = actionbar.querySelector("cib-text-input").shadowRoot.querySelector("#searchbox");
  const submitBtn = actionbar.querySelector("button[aria-label='送信']");
  textarea.value = str;
  textarea.dispatchEvent(new Event('input', {
    bubbles: true
  }));
  submitBtn.click();
};

function generateFromCompose(str) {
  const textarea = document.querySelector("#prompt_text");
  const submitBtn = document.querySelector("#compose_button");
  textarea.value = str;
  textarea.dispatchEvent(new Event('input', {
    bubbles: true
  }));
  submitBtn.click();
}