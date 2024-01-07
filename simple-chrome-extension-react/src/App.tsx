import './App.css'
import { useState } from 'react'

function App() {

  const [color, setColor] = useState('')
  
  const onclick = async () => {
    const [tab] = await chrome.tabs.query({active: true})
    chrome.scripting.executeScript<string[], void>({
      target: {tabId: tab.id!},
      args: [color],
      func: (color) => {
        document.body.style.backgroundColor = color
      }
    })
  }

  return (
    <>
      <h1>BG Color Changer</h1>
      <div className="card">
        <input type="color" onChange={(e) => setColor(e.currentTarget.value)} value={color}/>
        <button onClick={() => onclick()}>
          Change color!
        </button>
      </div>
    </>
  )
}

export default App
