import React from "react";
import { Link } from "react-router";
import { FaGithub, FaLinkedin, FaFacebook, FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";

export const Footer = () => {
    return (
       <div className="bg-[#0A0F18]">
         <footer className=" backdrop-blur-md text-gray-300 px-4 lg:pt-16 pt-5 max-w-[1400px] mx-auto md:px-24 lg:px-8">
            <div className="grid gap-16  mb-8 grid-cols-1 lg:grid-cols-5">

              <div className=" hidden md:block">
                       <h3 className="font-semibold text-[#56c5f4] text-lg mb-3">Contact</h3>
                       <ul className="space-y-3 text-sm">
                         <li className="flex items-start justify-center sm:justify-start gap-2">
                           <HiOutlineLocationMarker className="text-[#56c5f4] w-9 h-9 mt-0.5" />
                           <span>2548 Broaddus Maple Court, Madisonville KY 4783, USA.</span>
                         </li>
                        
                         <li className="flex items-center mr-40 lg:mr-0 justify-center sm:justify-start gap-2">
                           <AiOutlineMail className="text-[#56c5f4] lg:w-5 w-7 h-7 lg:h-5" />
                           <span>example@email.com</span>
                         </li>
                       </ul>
             
                       
                     </div>


                <div className="grid grid-cols-2 lg:gap-5 gap-9 row-gap-8 lg:col-span-4 md:grid-cols-4">
                    <div>
                        <p className="font-semibold tracking-wide text-[#56c5f4]">Category</p>
                        <ul className="mt-2 space-y-2">
                            <li><Link to="/news" className="text-gray-400 hover:text-[#56c5f4] transition">News</Link></li>
                            <li><Link to="/world" className="text-gray-400 hover:text-[#56c5f4] transition">World</Link></li>
                            <li><Link to="/games" className="text-gray-400 hover:text-[#56c5f4] transition">Games</Link></li>
                            <li><Link to="/references" className="text-gray-400 hover:text-[#56c5f4] transition">References</Link></li>
                        </ul>
                    </div>
                    <div>
                        <p className="font-semibold tracking-wide text-[#56c5f4]">Business</p>
                        <ul className="mt-2 space-y-2">
                            <li><Link to="/web" className="text-gray-400 hover:text-[#56c5f4] transition">Web</Link></li>
                            <li><Link to="/ecommerce" className="text-gray-400 hover:text-[#56c5f4] transition">Ecommerce</Link></li>
                            <li><Link to="/portfolio" className="text-gray-400 hover:text-[#56c5f4] transition">Portfolio</Link></li>
                            <li><Link to="/entertainment" className="text-gray-400 hover:text-[#56c5f4] transition">Entertainment</Link></li>
                        </ul>
                    </div>
                    <div>
                        <p className="font-semibold tracking-wide text-[#56c5f4]">Apples</p>
                        <ul className="mt-2 space-y-2">
                            <li><Link to="/media" className="text-gray-400 hover:text-[#56c5f4] transition">Media</Link></li>
                            <li><Link to="/brochure" className="text-gray-400 hover:text-[#56c5f4] transition">Brochure</Link></li>
                            <li><Link to="/educational" className="text-gray-400 hover:text-[#56c5f4] transition">Educational</Link></li>
                            <li><Link to="/projects" className="text-gray-400 hover:text-[#56c5f4] transition">Projects</Link></li>
                        </ul>
                    </div>
                    <div className="">
                        <div className="flex items-center justify-center sm:justify-start gap-3 mb-3">
                            <div className="w-10 h-10 mr-1 lg:mr-0 rounded-md bg-[#56c5f4] flex items-center justify-center text-black font-bold text-lg">
                                G
                            </div>
                            <h2 className="text-2xl font-semibold mr-10 lg:mr-0 text-[#56c5f4]">Saima </h2>
                        </div>
                        <p className="text-sm mb-4">
                            Passionate Frontend Developer building responsive & modern web experience.
                            
                        </p>

                        {/* App Store Buttons (text version, no image) */}
                     <div className="flex gap-5 mr-9 lg:mr-0 mt-4 justify-center sm:justify-start text-gray-600 text-lg">
                         <FaFacebookF className="cursor-pointer text-[#56c5f4]" />
                         <a href="" target="_blank" rel="noopener noreferrer" className="text-[#56c5f4]  transition"><FaGithub className="h-5 w-5" /></a>
                         <FaLinkedinIn className="cursor-pointer text-[#56c5f4]" />
                         <FaInstagram className="cursor-pointer text-[#56c5f4]" />
                       </div>
                    </div>
                </div>
            </div>


            <div className=" justify-between pt-5 pb-10 border-t border-gray-700 sm:flex-row">
                <p className="text-sm text-center text-gray-400">
                    © {new Date().getFullYear()} <span className="text-[#35b8f1]">Saima</span>. All rights reserved.
                </p>
               
            </div>
        </footer>
       </div>
    );
};
