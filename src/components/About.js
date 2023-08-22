import React from "react";
import headshot from '../assets/Headshot.jpeg';

const About = () => {
    return (
        <div name='about' className="w-full h-screen bg-blue-800 text-gray-50">
            <div className="flex flex-col justify-center items-center w-full h-full">
                <div className="max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8">
                    <div className="sm:text-right pb-8 pl-4">
                        <p className="text-4xl font-bold inline border-b-4 border-red-700">About</p>
                    </div>
                    <div></div>
                </div>
                <div className="max-w-[1000px] w-full px-4 sm:grid grid-cols-2 gap-8 px-4">
                    <div className="sm:text-right text-4xl font-bold">
                        <img src={headshot} alt="Just a handsome dude" />
                    </div>
                    <div>
                        <p>Originally from rural Illinois, I enlisted in the Army in order to afford to go to college. While in community college and at the University of Illinois, I began to pursue a career in education. In a GenEd class, I was introduced to coding for the first time. I found myself very interested in writing Python, but I continued to study History and French. After graduating, I spent some time assistant teaching in Ribérac, France. After being accepted into a master's program, I decided that, perhaps, education was not the correct path for me, so I pivoted and took a full stack web development bootcamp from Northwestern University's Professional School.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;