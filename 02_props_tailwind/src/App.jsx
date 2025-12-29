import { useState } from 'react'

import Card from './components/Card'
import ColorChanger from './components/ColorChanger'

function App() {

  const  imageUrl = "https://images.pexels.com/photos/6598961/pexels-photo-6598961.jpeg"
  const  name = "Ravinder"

  return (
    <>
    <div className='flex justify-center flex-col text-center shadow-2xl ' >
      
      <div className=" flex justify-center  m-4 rounded-xl p-4 bg-gray-100">
       <Card imageUrl={imageUrl} name={name}/>
      </div>
      <div>
        <ColorChanger />
      </div>
    
    </div>
    </>
  )
}

export default App