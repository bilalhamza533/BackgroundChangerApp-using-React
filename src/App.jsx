import './index.css'
import './App.css'
import { useState } from 'react'

function App() {
  let [color, setColor] = useState('#f7f800')

  return (
    <>
    <div className='bd-main'
    style={{backgroundColor: color
    }}>
      <div className="bottom-bar">
        <button className='bottom-button' style={{backgroundColor: 'gray'}} onClick={() => setColor('gray')}>Gray</button>
        <button className='bottom-button' style={{backgroundColor: 'pink'}} onClick={() => setColor('pink')}>Pink</button>
        <button className='bottom-button' style={{backgroundColor: 'red'}} onClick={() => setColor('red')}>Red</button>
        <button className='bottom-button' style={{backgroundColor: 'blue'}} onClick={() => setColor('blue')}>Blue</button>
        <button className='bottom-button' style={{backgroundColor: 'orange'}} onClick={() => setColor('orange')}>Orange</button>
      </div>
    </div>
    </>
  )
}

export default App
