import React, { useContext } from 'react';
import GlassIcons from './GlassIcons';
import { AuthContext } from '../Context/AuthContext';
  import {motion} from "framer-motion";
const Skill = () => {
    const { SkillRef } = useContext(AuthContext)
    return (
        <div ref={SkillRef} className='px-5 lg:px-0'>
          

            <div className="  ">
                <motion.h1
                    initial={{ opacity: 0, y: -30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="relative text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text 
               bg-gradient-to-r from-[#09b2fa] text-center  via-[#99d6ef] to-[#10a8ea] tracking-wide"
                >
                    My Skills
                    {/* glowing line */}
                    <motion.span
                        initial={{ width: 0, opacity: 0 }}
                        whileInView={{ width: "80px", opacity: 1 }}
                        transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
                        viewport={{ once: true }}
                        className="absolute bottom-[-8px] left-1/2 -translate-x-1/2 h-[3px] 
                 rounded-full bg-gradient-to-r from-[#09b2fa] via-[#addff3] to-[#10a8ea] 
                 shadow-[0_0_10px_#22c55e]"
                    ></motion.span>
                </motion.h1>
                  <GlassIcons></GlassIcons>
                </div>
              
            



           
        </div>
    );
};

export default Skill;