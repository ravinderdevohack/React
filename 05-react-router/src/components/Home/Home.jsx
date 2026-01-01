import React from 'react'
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <div className="mx-auto w-full max-w-7xl">
            <aside className="relative overflow-hidden text-black rounded-lg sm:mx-16 mx-2 sm:py-16">
                <div className="relative z-10 max-w-7xl px-4  pb-20 pt-10 sm:py-24 mx-auto sm:px-6 lg:px-8">
                    <div className="max-w-xl sm:mt-1 mt-80 space-y-8 text-center sm:text-right sm:ml-auto">
                        <h2 className="text-4xl font-bold text-white lg:text-black sm:text-5xl">
                            Shubham Enterprises
                            <span className="hidden sm:block text-4xl opacity-50">Faridabad</span>
                        </h2>

                        <Link
                            className="inline-flex text-white items-center px-6 py-3 font-medium bg-orange-700 rounded-lg hover:opacity-75"
                            to="/"
                        > Order | Call NOW
                        </Link>
                    </div>
                </div>

                <div className="absolute inset-0 w-full sm:my-20 sm:pt-1 pt-12 h-full pl-2 ">
                    <img className="w-96 rounded-lg" src="https://images.pexels.com/photos/34484706/pexels-photo-34484706.jpeg" alt="image1" />
                </div>
            </aside>

            <div className="flex flex-row justify-around mt-2 place-items-center sm:mt-20">
                <img className="sm:w-96 w-48 rounded-lg" src="https://images.pexels.com/photos/532079/pexels-photo-532079.jpeg" alt="image2" />
                <img className="sm:w-96 w-48 rounded-lg" src="https://images.pexels.com/photos/532079/pexels-photo-532079.jpeg" alt="image2" />
            </div>
           

            <h1 className="text-center text-2xl sm:text-5xl py-10 font-medium">Shubham Enterprises</h1>
        </div>
    );
}
