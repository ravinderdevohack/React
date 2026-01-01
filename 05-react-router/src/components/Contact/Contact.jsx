import React from 'react'

export default function Contact() {
  return (
    <div className='mt-6 min-h-160 flex  items-center justify-center'>
      <div className='flex justify-center flex-col lg:flex-row '>
        <div className='bg-gray-100 rounded-lg p-6 m-2'>
          <h1 className='text-3xl sm:4xl tex-gray-800 font-extrabold tracking-tight'>
            Get in touch:
          </h1>
          <p className='text-lg sm-text-xl font-medium text-gray-600 mt-2'>
            Fill in the form to start a conversation
          </p>

          {/* location info + location SVG tag */}
          <div className="flex items-center mt-8 text-gray-600">
              <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  viewBox="0 0 24 24"
                  className="w-8 h-8 text-gray-500"
              >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <div className="ml-4 text-md tracking-wide font-semibold w-50">
                  I-13/2, Block A, DLF Industrial Area, Sector 32, FBD, Postal Code-121003
              </div>
          </div>

          {/* telphone no + telophone svg tag */}
          <div className="flex items-center mt-4 text-gray-600">
              <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  viewBox="0 0 24 24"
                  className="w-8 h-7 text-gray-500"
              >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              <div className="ml-4  tracking-wide font-semibold w-40">
                  +44 1234567890
              </div>
          </div>

          {/* mail info + mail SVG tag */}
          <div className="flex items-center mt-4 text-gray-600">
              <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  viewBox="0 0 24 24"
                  className="w-8 h-7 text-gray-500"
              >
                  <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
              </svg>
              <div className="ml-4 text-md tracking-wide font-semibold w-40">
                  info@acme.org
              </div>
          </div>
        </div>

        <div>
          <form  className='p-6 flex flex-col justify-center'
            action="">
            <input 
              type="text" 
              id="name"
              placeholder='Full name'
              className='w-90 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 semi-bold focus:border-orange-500 focus:ouline-none'
            />
            <input 
              type="text" 
              id="email"
              placeholder='Email' 
              className='w-90 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 semi-bold focus:border-orange-500 focus:ouline-none'
            />
            <input 
              type="tel"  
              placeholder='TelephoneNumber'
              id='tel'
              className='w-90 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 semi-bold focus:border-orange-500 focus:ouline-none'
            />
            <button 
              className='w-90 md:w-32 mt-2 bg-orange-700 text-white rounded-md hover:bg-orange-800 font-bold py-2 px-4 transition ease-in-out duration-300'
              type='submit'>
                Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
