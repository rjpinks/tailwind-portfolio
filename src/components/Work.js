import React from "react";
import firstProject from '../assets/1st-project.jpg';
import secondProject from '../assets/project2-splash2.jpg';
import mongooseImg from '../assets/mongoose-img.jpg';
import regexImg from '../assets/regex-img.jpg';
import sequelizeImg from '../assets/sequelize-img.jpg';
import weatherImg from '../assets/weather-img.jpg';

const Work = () => {
    return (
        <div name='work' className="w-full md:h-screen text-gray-50 bg-[#8892b0]">
            <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
                <div className="pb-8">
                    <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-red-600">Work</p>
                    <p className="py-6">Bootcamp Highlights: </p>
                </div>

                {/* Container */}
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">

                    {/* Grid Items */}
                    <div style={{ backgroundImage: `url(${firstProject})` }} className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">
                        {/* Hover Effects Here */}
                        <div className="opacity-0 group-hover:opacity-100">
                            <span className="text-2xl font-bold text-white tracking-wider">
                                My 1st Group Project
                            </span>

                            <div className="pt-8 text-center">
                                <a href='https://beers-for-jeers-iii.github.io/dad-joke-pairings/'>
                                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Demo</button>
                                </a>
                                <a href='https://github.com/Beers-for-Jeers-III/dad-joke-pairings'>
                                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Code</button>
                                </a>
                            </div>
                        </div>
                    </div>


                    <div style={{ backgroundImage: `url(${secondProject})` }} className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">
                        {/* Hover Effects Here */}
                        <div className="opacity-0 group-hover:opacity-100">
                            <span className="text-2xl font-bold text-white tracking-wider">
                                Phonebook/SQL Practice
                            </span>

                            <div className="pt-8 text-center">
                                <a href='/'>
                                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Demo</button>
                                </a>
                                <a href='https://github.com/rjpinks/user-management-app'>
                                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Code</button>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div style={{ backgroundImage: `url(${weatherImg})` }} className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">
                        {/* Hover Effects Here */}
                        <div className="opacity-0 group-hover:opacity-100">
                            <span className="text-2xl font-bold text-white tracking-wider">
                                Wather App/fetching API
                            </span>

                            <div className="pt-8 text-center">
                                <a href='/'>
                                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Demo</button>
                                </a>
                                <a href='https://github.com/rjpinks/06-weather-app'>
                                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Code</button>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div style={{ backgroundImage: `url(${mongooseImg})` }} className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">
                        {/* Hover Effects Here */}
                        <div className="opacity-0 group-hover:opacity-100">
                            <span className="text-2xl font-bold text-white tracking-wider">
                                Using an Mongoose/MongoDB
                            </span>

                            <div className="pt-8 text-center">
                                <a href='https://www.youtube.com/watch?v=L5iGyYex5sU'>
                                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Demo</button>
                                </a>
                                <a href='https://github.com/rjpinks/18-social-media-nosql'>
                                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Code</button>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div style={{ backgroundImage: `url(${sequelizeImg})` }} className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">
                        {/* Hover Effects Here */}
                        <div className="opacity-0 group-hover:opacity-100">
                            <span className="text-2xl font-bold text-white tracking-wider">
                                Using MySQL/Sequelize
                            </span>

                            <div className="pt-8 text-center">
                                <a href='https://www.youtube.com/watch?v=kHsmDWrRRJs'>
                                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Demo</button>
                                </a>
                                <a href='https://github.com/rjpinks/13-ecommerce-backend'>
                                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Code</button>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div style={{ backgroundImage: `url(${regexImg})` }} className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">
                        {/* Hover Effects Here */}
                        <div className="opacity-0 group-hover:opacity-100">
                            <span className="text-2xl font-bold text-white tracking-wider">
                                Regex Flexin
                            </span>

                            <div className="pt-8 text-center">
                                <a href='/'>
                                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Demo</button>
                                </a>
                                <a href='https://github.com/rjpinks/17-regex-tutorial'>
                                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Code</button>
                                </a>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default Work;