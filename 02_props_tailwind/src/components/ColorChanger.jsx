import { useState } from 'react';

export default function ColorChanger() { 

    const [color, setColor] = useState("Black");
    
  return (

    <div className=' rounded-2xl duration-200'
    style={{backgroundColor: color}}
    >
      <button className='rounded-xl shadow-xl p-2 m-2 w-20 cursor-pointer bg-red-400' 
      onClick={()=> setColor('red')} 
      > Red </button>

      <button className='rounded-xl shadow-lg p-2 m-2 w-20 cursor-pointer bg-yellow-400' 
      onClick={() => setColor('yellow')} 
      > Yellow </button>

      <button className='rounded-xl shadow-lg p-2 m-2 w-20 cursor-pointer bg-blue-400'
      onClick={()=> setColor('blue')}
      > Blue </button>

      <button className='rounded-xl shadow-lg p-2 m-2 w-20 cursor-pointer bg-purple-400'
      onClick={()=> setColor('purple')}
      > Purple </button>

      <button className='rounded-xl shadow-lg p-2 m-2 w-20 cursor-pointer bg-pink-400'
      onClick={()=> setColor('pink')}
      > Pink </button>

      <button className='rounded-xl shadow-lg p-2 m-2 w-20 cursor-pointer bg-white'
      onClick={()=> setColor('white')}
      > white </button>
      
      <button className='rounded-xl shadow-lg p-2 m-2 w-20 cursor-pointer bg-gray-400'
      onClick={()=> setColor('gray')}
      > Gray </button>

      <button className='rounded-xl shadow-lg p-2 m-2 w-20 cursor-pointer bg-black text-white'
      onClick={()=>setColor('black')}
      > Black </button>
    </div>
  )
}
