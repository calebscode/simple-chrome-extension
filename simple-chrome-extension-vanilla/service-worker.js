// uses the chrome API
// this will fire when the little extension icon is clicked
chrome.action.onClicked.addListener(tab => {
  chrome.scripting.executeScript({
    target: {tabId: tab.id},
    func: () => {
      alert('Hello from my extension!')
    }
  })
})