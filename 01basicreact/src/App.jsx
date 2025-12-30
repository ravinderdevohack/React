import { useState } from 'react'
import './App.css'

function App() {

  let [counter, setCounter] = useState(5)

  const addValue = () => {
    if (counter < 10) return  setCounter(counter+1)
  }

  const removeValue = () => {
    if(counter > 0) return setCounter(counter-1)
  } 

  return (
    <>
      <h2>Counter Value : {counter}</h2>
      <button onClick={addValue}>Add Value</button>
      <br/>
      <button onClick={removeValue}>Remove Value</button>
    </>
  )
}

export default App
