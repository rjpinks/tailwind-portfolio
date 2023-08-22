import React from "react";
import { HiArrowNarrowRight } from 'react-icons/hi';

const Home = () => {
    return (
        <div name='home' className="w-full h-screen text-gray-50">
            {/* Container */}
            <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
                <p className="text-blue-700">How're you doing? My name is</p>
                <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">Ryan Pinkston</h1>
                <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">Full Stack Developer</h2>
                <p className="text-[#8892b0] py-4 max-w-[700px]">I love challenging myself and learning, which is how I found myself pursuing software development</p>
            </div>

            <div>
                <button className="text-white border-2 group px-6 py-3 my-2 flex items-center text-[24px] hover:bg-blue-700 hover:border-red-600">View Work 
                    <span className="group-hover:rotate-90 duration-300"><HiArrowNarrowRight className="ml-3" /></span>
                </button>
            </div>
        </div>
    )
}

export default Home;