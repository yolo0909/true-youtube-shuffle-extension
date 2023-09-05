
chrome.runtime.onMessage.addListener( (message, sender, sendResponse) => {
  if (message.action === "open_new_tab"){
    chrome.tabs.update(sender.tab.id, {url: message.url})
  }
})
