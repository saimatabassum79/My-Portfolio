import React, { useContext } from 'react';
import CircularText from './CircularText';
import photo from '../assets/WhatsApp_Image_2025-11-13_at_11.33.50_AM-removebg-preview.png'
import TextType from './TextType';
import ShinyText from './ShinyText';

import { FaLinkedin, FaGithub, FaFacebook } from "react-icons/fa";

import { AuthContext } from '../Context/AuthContext';

const Hero = () => {
    const { homeRef ,contactRef ,goToProjectSection } = useContext(AuthContext)
    return (
        <div ref={homeRef} className="flex flex-col px-4 sm:px-10 md:flex-row my-10 justify-between items-center max-w-[1400px] mx-auto ">


            <div className="flex-1 space-y-6 border md:pr-10 md:pl-20 pl-5 my-4 sm:my-0">
                <h1 className="sm:text-5xl text-3xl font-bold text-[#56c5f4]">
                    <TextType text={["Saima Tabassum"]}
                        typingSpeed={75}
                        pauseDuration={1500}
                        showCursor={true}
                        cursorCharacter="|"></TextType>
                </h1>
                <h2 className="text-2xl font-semibold text-[#56c5f4]">
                    <ShinyText
                        text="Mern Stack Developer"
                        disabled={false}
                        speed={3}
                        className='custom-class'
                    />
                </h2>
                <p className="text-gray-300 text-[14px] sm:text-lg max-w-lg">
                    Web developer from <span className="text-[#56c5f4]">Bangladesh</span>, building modern & responsive web applications.
                </p>

                <div className="flex items-center gap-3">
                    <a
                        href="https://www.linkedin.com/in/saima-tabassum-460430396/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn"
                        className="flex items-center justify-center p-2 rounded-full shadow-md bg-white/10 text-[#56c5f4] hover:bg-[#23aae4] hover:text-black transition"
                    >
                        <FaLinkedin className="w-5 h-5 sm:w-6 sm:h-6" />
                    </a>


                    <a
                        href="https://github.com/saimatabassum79"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub"
                        className="flex items-center justify-center p-2  shadow-md bg-white/10 rounded-full text-[#56c5f4] hover:bg-[#23aae4]  hover:text-black transition"
                    >
                        <FaGithub className="w-5 h-5 sm:w-6 sm:h-6" />
                    </a>


                    <a
                        href="https://www.facebook.com/saima.tabassum.738227"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Facebook"
                        className="flex items-center justify-center p-2 shadow-md bg-white/10 rounded-full text-[#56c5f4] hover:bg-[#23aae4]  hover:text-black transition"
                    >
                        <FaFacebook className="w-5 h-5 sm:w-6 sm:h-6" />
                    </a>


                   
                </div>
                <div className="flex flex-wrap lg:gap-2 gap-4 sm:gap-4">
                    <a
                        href="https://drive.google.com/file/d/1GEzadpX_VzFhHknYlF3cc_YuccfI3wIt/view?usp=sharing"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LeetCode"
                        className="px-3 sm:px-6 py-1 sm:py-2 bg-[#56c5f4] shadow-lg shadow-white/30 text-black rounded-lg hover:bg-[#0591cd] transition text-sm sm:text-base"
                    >
                        Resume
                    </a>
                    <button
                        onClick={()=>goToProjectSection(contactRef)}
                        className="px-3 sm:px-6 py-1 sm:py-2 border border-[#56c5f4]  shadow-lg shadow-white/30 text-[#56c5f4] rounded-lg hover:bg-[#0e9ddb] hover:text-white transition text-sm sm:text-base"
                    >
                        Contact Me
                    </button>
                </div>
            </div>



            <div className="flex-1 sm:py-10 py-0    flex justify-center items-center relative w-full  mt-12 md:mt-0 overflow-hidden">
                <div className="relative w-full mt-10  h-[40vh] md:w-[540px] md:h-[450px]">
                    <CircularText
                        text="REACT*BITS*COMPONENTS*"
                        spinDuration={20}
                        className="absolute top-0 left-0 w-full h-full"
                    />
                    <img
                        src={photo}
                        alt="center"
                        className="absolute lg:px-13 px-10  lg:py-1  top-1/2 left-1/2 shadow-lg shadow-[#56c5f4]  w-[80%] sm:w-[90%] -translate-x-1/2 -translate-y-1/2 rounded-full"
                    />
                </div>
            </div>

        </div>
    );
};

export default Hero;
