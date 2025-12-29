
export default function Card({imageUrl, name}) {

  return(
    <>
      <div className="relative h-100 w-80 rounded-xl overflow-x-hidden shadow-2xl ">
        <img 
        src={imageUrl} alt=""
        className="z-0 h-full w-full rounded-md object-cover" 
        />
        <div className="absolute inset-0 bg-linear-to-t from-gray-800 to-transparent"></div>
        <div className="absolute bottom-4 left-4 text-left text-white">
          <h1 className="text-lg font-semibol">{name}</h1>
          <p className="mt-2 tex-sm text-gray-200">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, error.</p>
          <button className="mt-2 inline-flex  cursor-pointer items-center text-sm font-semibold hover:underline">
            View Profile 
          </button>
        </div>
      </div>
    </>     
  )
}