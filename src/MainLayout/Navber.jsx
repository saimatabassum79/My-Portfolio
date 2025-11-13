import React, { useContext, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router";
import logo from '../assets/Untitled-gh-removebg-preview.png'
import { AuthContext } from "../Context/AuthContext";

const Navber = () => {
    const [isOpen, setIsOpen] = useState(false);

    const menuItems = [
        { name: "Home" },
        { name: 'Skill' },
        { name: "About" },
        { name: "Projects" },
        { name: "Contact" },
    ];


    const { goToProjectSection, homeRef, targetRef, SkillRef, aboutRef, contactRef } = useContext(AuthContext)


    return (
        <nav className="sticky top-0 bg-white/10 backdrop-blur-md shadow-md z-50">
            <div className="max-w-[1500px] mx-auto px-4 flex justify-between items-center h-16">
                <button

                    className="text-2xl font-bold text-green-400"
                    onClick={() => goToProjectSection(homeRef)}
                >
                    <img className="w-18 " src={logo} alt="" />
                </button>



                <ul className="hidden md:flex space-x-8 font-medium">
                    {menuItems.map((item) => (
                        <li key={item.name}>
                            <button
                                onClick={() => {
                                    if (item.name === "Projects") {

                                        goToProjectSection(targetRef)
                                    }
                                    else if (item?.name == 'Skill') {
                                        goToProjectSection(SkillRef)
                                    }
                                    else if (item?.name == 'About') {
                                        goToProjectSection(aboutRef)
                                    }
                                    else if (item?.name === 'Contact') {
                                        goToProjectSection(contactRef)
                                    } else {
                                        goToProjectSection(homeRef)
                                    }
                                }}
                                className="text-white hover:text-[#56c5f4] transition"
                            >
                                {item.name}
                            </button>
                        </li>
                    ))}
                </ul>


                <div className="">
                    <a
                        href="https://drive.google.com/file/d/1GEzadpX_VzFhHknYlF3cc_YuccfI3wIt/view?usp=sharing"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="resume"
                        className="hidden w-full md:inline-block bg-[#56c5f4] text-black px-4 py-2 rounded-lg shadow-md shadow-white/40 transition"
                    >
                        Resume
                    </a>
                </div>
                <button
                    className="md:hidden text-2xl text-gray-600"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <FaTimes /> : <FaBars />}
                </button>
            </div>


            {isOpen && (
                <div className="md:hidden bg-white/10 backdrop-blur-lg shadow-md">
                    <ul className="flex flex-col space-y-4 p-4 font-medium">
                        {menuItems.map((item) => (
                            <li key={item.name}>
                                <button
                                    onClick={() => {
                                        if (item.name === "Projects") {

                                            goToProjectSection(targetRef)
                                        }
                                        else if (item?.name == 'Skill') {
                                            goToProjectSection(SkillRef)
                                        }
                                        else if (item?.name == 'About') {
                                            goToProjectSection(aboutRef)
                                        }
                                        else if (item?.name === 'Contact') {
                                            goToProjectSection(contactRef)
                                        } else {
                                            goToProjectSection(homeRef)
                                        }
                                    }}
                                    className="text-white hover:text-green-400 transition"
                                >
                                    {item.name}
                                </button>
                            </li>
                        ))}
                        <li>
                            <li className=" w-full">
                                <a
                                    href="https://drive.google.com/file/d/1XSQxAI_RwonvghV6mtSdy9iYxvyVcB7F/view?usp=sharing"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block w-full px-3 sm:px-6 py-1 sm:py-2 bg-green-400 shadow-lg shadow-white/30 text-black rounded-lg hover:bg-green-600 transition text-sm sm:text-base text-center"
                                >
                                    Resume
                                </a>
                            </li>
                        </li>
                    </ul>
                </div>
            )}
        </nav>
    );
};

export default Navber;
