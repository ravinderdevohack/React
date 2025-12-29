import { useState } from 'react';

export default function ColorChanger() { 

    const [color, setColor] = useState("Black");
    
  return (

    <div className=' rounded-2xl duration-200'
    style={{backgroundColor: color}}
    >
      <button className='rounded-xl shadow-lg p-2 m-2 w-20 bg-red-400' 
      onClick={()=> setColor('red')} 
      > Red </button>

      <button className='rounded-xl shadow-lg p-2 m-2 w-20 bg-yellow-400' 
      onClick={() => setColor('yellow')} 
      > Yellow </button>

      <button className='rounded-xl shadow-lg p-2 m-2 w-20 bg-blue-400'
      onClick={()=> setColor('blue')}
      > Blue </button>

      <button className='rounded-xl shadow-lg p-2 m-2 w-20 bg-purple-400'
      onClick={()=> setColor('purple')}
      > Purple </button>

      <button className='rounded-xl shadow-lg p-2 m-2 w-20 bg-pink-400'
      onClick={()=> setColor('pink')}
      > Pink </button>

      <button className='rounded-xl shadow-lg p-2 m-2 w-20 bg-white'
      onClick={()=> setColor('white')}
      > white </button>
      
      <button className='rounded-xl shadow-lg p-2 m-2 w-20 bg-gray-400'
      onClick={()=> setColor('gray')}
      > Gray </button>

      <button className='rounded-xl shadow-lg p-2 m-2 w-20 bg-black text-white'
      onClick={()=>setColor('black')}
      > Black </button>
    </div>
  )
}
