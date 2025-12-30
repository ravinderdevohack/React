// useCallback is a React Hook that lets you cache a function definition between re-renders.
// React Compiler automatically memoizes values and functions, reducing the need for manual useCallback calls. You can use the compiler to handle memoization automatically.

// useState is a React Hook that lets you add a state variable to your component.

import { useState, useCallback, useEffect, useRef } from "react"

export default function PasswordGenerator() {

    const [length, setLength] = useState(15)
    const [numberAllowed, setNumberAllowed] = useState(false)
    const [charAllowed, setCharAllowed] = useState(false)
    const [password, setPassword] = useState("")
    const passwordRef = useRef(null)

    const imageUrl = "https://images.pexels.com/photos/112811/pexels-photo-112811.jpeg"

    // useCallback
    const passwordGenrator = useCallback(() => {
      console.log("password Generator function runn");
      
      let pass = ""
      let str = "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz"

      if (numberAllowed) str += "012345689"
      if (charAllowed) str += "!@#$%^&*()_+-={}[]\|~"

      for (let i = 1; i <= length; i++) {
        let char = Math.floor(Math.random() * str.length + 1)
        pass += str.charAt(char)
        
      }  
      setPassword(pass)
      
    }, [length, numberAllowed, charAllowed])

    // function copyPasswordToClipboard() {
    //   window.navigator.clipboard.writeText(password)
    // }

    const copyPasswordToClipboard = useCallback(() => {
      passwordRef.current?.select()
      passwordRef.current?.setSelectionRange(0, 30)
      window.navigator.clipboard.writeText(password)
    }, [password])

    // userEffect    
    useEffect(() => {
      passwordGenrator()
    }, [length, numberAllowed, charAllowed])


  return (
    <div className="relative h-screen w-full  bg-amber-100 flex flex-col items-center justify-center ">

      {/* Background Image */}
      <div className="fixed inset-0 ">
        <img className="h-full w-full "
        src={imageUrl} alt="bg-image" />
      </div>

      
      {/* Passowrd Generator Card */}
      <div className="z-10 w-90 rounded-2xl bg-white/90 backdrop-blur-md p-6 shadow-2xl">
        <h2 className="text-2xl font-semibold text-center "
        >Password Generator</h2>
      </div>
      
      {/* Password Output */}
      <div className="flex gap-2 z-10 w-90 my-4">
        <input className="flex-1 rounded-lg border px-3 py-2 text-sm" 
        type="text" 
        placeholder="password" 
        value={password}
        readOnly
        ref={passwordRef}
        ></input>
        
        <button className=" rounded-lg bg-yellow-400 px-4 py-2 font-medium hover:bg-yellow-500 "
        onClick={copyPasswordToClipboard}
        >COPY</button>
      </div>


      {/* Controls */}
      <div className="z-10 space-y-3 text-sm">

        {/* Range */}
        <div className=" ">
          <input className="w-full"
          type="range"
          min={8}
          max={30}
          value={length}
          onChange={(e) => {setLength(e.target.value)}}
          /><p className="text-center mt-1"> Length {length} </p>
        </div>

        {/* checkbox */}
        <div className="flex justify-between p-2  gap-2 ">
          <label className="flex gap-2 items-center">
            <input 
            type="checkbox" 
            defaultChecked={numberAllowed}
            onChange={() => {setNumberAllowed((prev) => !prev)}}
            /> 
            Numbers
          </label>
          
          <label  className="flex gap-2 items-center"> 
            <input
            type="checkbox" 
            defaultChecked={charAllowed}
            onChange={() => {setCharAllowed(prev => !prev)}}
            /> 
            Character
          </label>
        </div>
      </div>
    </div>
  )
}
