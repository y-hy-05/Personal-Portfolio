import React, { useContext } from 'react';
import "./app.css"
import { FaBootstrap, FaCss3, FaHtml5, FaLaravel, FaReact, FaSass } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiTailwindcss } from "react-icons/si";
import { MyContext } from '../../../utils/ContextProvider';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Element } from 'react-scroll';

export const SkillsContainer = () => {
    const [dark, toggleBoolean] = useContext(MyContext)
    // AOS.init();
    let skills = [
        {
            name: "HTML",
            color: "#E34F26",
            icon: <FaHtml5 />
        },
        {
            name: "CSS",
            color: `#2965F1`,
            icon: <FaCss3 />
        },
        {
            name: "JAVASCRIPT",
            color: `#F7DF1E`,
            icon: <IoLogoJavascript />
        },
        {
            name: "SASS/SCSS",
            color: `#CC6699`,
            icon: <FaSass />
        },
        {
            name: "TAILWIND",
            color: `#06B6D4`,
            icon: <SiTailwindcss />
        },
        {
            name: "BOOTSTRAP",
            color: `#602C50`,
            icon: <FaBootstrap />
        },
        {
            name: "REACT",
            color: `#61DAFB`,
            icon: <FaReact />
        },
        {
            name: "LARAVEL",
            color: `#FF2D20`,
            icon: <FaLaravel />
        }
    ]
    
    return (
        <>
            <Element name='skills' className="w-[100%]  md:py-14 lg:py-16 py-20  md:px-0 px-2  flex flex-col items-center justify-center md:gap-14 lg:gap-20 xl:gap-16 gap-12">
                <h1 className={`text-[35px] md:text-[35px] lg:text-[50px] xl:text-[60px] ${dark ? 'text-black' : 'text-white ' }  font-[briem-extrabold] cursor-pointer hover:text-[#2596be] transition duration-300 `}>My Skills</h1>
                <div className="skillsContainer md:w-[80%] md:h-[70%] h-[80%] flex flex-wrap   justify-center items-center md:gap-9 gap-7  ">
                    {
                        skills.map((e,index) => (
                            <>
                                <div key={index} className="card md:w-[160px] lg:w-[200px] xl:w-[300px] md:h-[130px] lg:h-[150px] xl:h-[200px] w-[120px] h-[100px]  hover:rotate-1 hover:scale-105">
                                    <div style={{ backgroundColor: e.color }} className={`circle md:h-[50px] md:w-[50px] lg:w-[60px] lg:h-[60px] xl:h-[70px] xl:w-[70px] h-[35px] w-[35px]`}></div>
                                    <div style={{ backgroundColor: e.color }} className={`circle md:h-[50px] md:w-[50px] lg:w-[60px] lg:h-[60px] xl:h-[70px] xl:w-[70px] h-[35px] w-[35px]`}></div>
                                    <div style={{ color: e.color }} className={`card-inner flex flex-col items-center justify-center text-[40px] md:text-[45px] lg:text-[55px] xl:text-[70px]`}>{e.icon}<p className='text-[20px] md:text-[25px] font-[briem-bold] '>{e.name}</p></div>
                                </div>
                            </>
                        ))
                    }
                </div>
            </Element>
        </>
    );
};

