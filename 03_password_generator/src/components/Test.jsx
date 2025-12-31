import {useState, } from 'react'

export default function Test() {

  const [password, setPassword] = useState("")
  const [length, setLength] = useState(10)
  const [numberAllow, setNumberAllow] = useState(true)
  const [charAllow, setCharAllow] = useState(false)

  
  return (
    <div className='bg-amber-100'>
      <input className='border' type="text" placeholder='password' />
      <button>Copy</button>

      <input type="range" min={10} max={30} value={setLength}/><span>Length: {length}</span>
      <input type="checkbox" defaultChecked={numberAllow} /><span>number</span>
      <input type="checkbox" /><span>character</span>
    </div>
  )
}
