import Card from './components/Card'
import ColorChanger from './components/ColorChanger'

function App() {

  const  imageUrl = "https://images.pexels.com/photos/6598961/pexels-photo-6598961.jpeg"
  const  name = "Ravinder"

  return (
    <>
      <div className="card flex flex-col m-4 ">
       <Card imageUrl={imageUrl} name={name}/>
      </div>
     
    </>
  )
}

export default App