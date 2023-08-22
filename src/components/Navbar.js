import React, { useState } from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin, FaBriefcase, FaInstagramSquare } from 'react-icons/fa';
import { Link } from 'react-scroll';

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav);

    return (
        <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-gray-800 text-gray-50 text-[24px]">
            <div>
                {/* Logo for my Portfolio img tag used. also use in-line styling to make it the right size*/}
            </div>


            {/* menu */}
            <ul className="hidden md:flex">
                <li>
                    <Link to="home" smooth={true} duration={500}>
                        Home
                    </Link>
                </li>
                <li>
                    <Link to="about" smooth={true} duration={500}>
                        About
                    </Link>
                </li>
                <li>
                    <Link to="skills" smooth={true} duration={500}>
                        Skills
                    </Link>
                </li>
                <li>
                    <Link to="work" smooth={true} duration={500}>
                        Work
                    </Link>
                </li>
                <li>
                    <Link to="contact" smooth={true} duration={500}>
                        Contact
                    </Link>
                </li>
            </ul>

            {/* Hamburger */}
            <div onClick={handleClick} className="md:hidden z-10">
                {!nav ? <FaBars /> : <FaTimes />}
            </div>

            {/* Mobile Menu*/}
            <ul className={
                !nav 
                ? 'hidden' 
                : 'absolute top-0 left-0 w-full h-screen bg-dark-800 text-gray-50'
                }
            >

                <li className="py-6 text-4xl">
                    <Link onClick={handleClick} to="home" smooth={true} duration={500}>
                        Home
                    </Link>
                </li>
                <li className="py-6 text-4xl">
                    <Link onClick={handleClick} to="about" smooth={true} duration={500}>
                        About
                    </Link>
                </li>
                <li className="py-6 text-4xl">
                    <Link onClick={handleClick} to="skills" smooth={true} duration={500}>
                        Skills
                    </Link>
                </li>
                <li className="py-6 text-4xl">
                    <Link onClick={handleClick} to="work" smooth={true} duration={500}>
                        Work
                    </Link>
                </li>
                <li className="py-6 text-4xl">
                    <Link onClick={handleClick} to="contact" smooth={true} duration={500}>
                        Contact
                    </Link>
                </li>
            </ul>

            {/* Social Icons */}
            <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
                <ul>
                    <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-red-800">
                        <a className="flex justify-between items-center w-full text-gray-50" href='https://www.linkedin.com/in/ryan-pinkston-01b2b927b/'>LinkedIn <FaLinkedin size={30} /> </a>
                    </li>
                    <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-800">
                        <a className="flex justify-between items-center w-full text-gray-50" href='https://github.com/rjpinks'>GitHub <FaGithub size={30} /> </a>
                    </li>
                    <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-green-500">
                        <a className="flex justify-between items-center w-full text-gray-50" href='https://www.instagram.com/pinky11570/'>Instagram <FaInstagramSquare size={30} /> </a>
                    </li>
                    <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-yellow-400">
                        <a className="flex justify-between items-center w-full text-gray-50" href='https://docs.google.com/document/d/164qb7Qvft8HejG0ya4mdl3ZqlXROT4xdyN_-mKwe8cI/edit'>Resume <FaBriefcase /></a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar;