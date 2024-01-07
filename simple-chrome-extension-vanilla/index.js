async function hello() {
  // use the chrome api to get the active tabs in the browser
  let [tab] = await chrome.tabs.query({active : true})
  chrome.scripting.executeScript({
    target: {tabId: tab.id},
    func: () => {
      alert("Hello from my extension's script!")
    }
  })
}

document.getElementById('myButton').addEventListener("click", hello)