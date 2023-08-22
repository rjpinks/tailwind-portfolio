import React from "react";

const Skills = () => {
    return (
        <div name="skills" className="w-full h-screen text-blue-700">
            <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
                <p className="text-4xl font-bold inline border-b-4 border-red-600 text-blue-700 py-4">Skills</p>
                <p className="py-4 font-bold">Tech that I'm Familiar With:</p>
                <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-2 text-center py-6 flex">
                    <ul className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 bg-red-600 text-gray-100">
                        {/* I could make little images of these in canva. ~50 minutes into the video */}
                        <li className="my-4">HTML</li>
                        <li className="my-4">CSS/Bootstrap/Tailwinds</li>
                        <li className="my-4">JavaScript/jQuery/React.js</li>
                    </ul>
                    <ul className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 bg-red-600 text-gray-100">
                        <li className="my-4">Node.js/Express.js</li>
                        <li className="my-4">SQL/NoSQL/GraphQL</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Skills