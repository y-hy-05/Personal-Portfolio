import React, { useContext } from 'react';
import "./app.css"
import { FaBootstrap, FaCss3, FaHtml5, FaLaravel, FaReact, FaSass } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiTailwindcss } from "react-icons/si";
import { MyContext } from '../../../utils/ContextProvider';

export const SkillsContainer = () => {
    const [dark , toggleBoolean] = useContext(MyContext)
    return (
        <>
            <div className="w-[100%] md:h-[85vh] h-[70vh] flex flex-col items-center justify-center md:gap-9 gap-12">
                <h1 className={dark? 'text-[33px] text-black font-[briem-extrabold] cursor-pointer hover:text-[#2596be] transition duration-300 ' :'text-[33px] text-white font-[briem-extrabold] cursor-pointer hover:text-[#2596be] transition duration-300 ' }>My Skills</h1>
                <div className="skillsContainer md:w-[80%] md:h-[70%] h-[80%] flex flex-wrap   justify-center items-center md:gap-9 gap-7  ">
                    <div class="card  md:w-[160px] md:h-[130px] w-[120px] h-[90px]  hover:rotate-2 hover:scale-105">
                        <div class="circle bg-[#E34F26] md:h-[50px] md:w-[50px]  h-[35px] w-[35px]"></div>
                        <div class="circle bg-[#E34F26] md:h-[50px] md:w-[50px] h-[35px] w-[35px]"></div>
                        <div class="card-inner flex flex-col items-center justify-center text-[40px] text-[#E34F26]"><FaHtml5 /><p className='text-[20px] font-[briem-bold] '>HTML</p></div>
                    </div>
                    <div class="card md:w-[160px] md:h-[130px] w-[120px] h-[100px]  hover:-rotate-2 hover:scale-105">
                        <div class="circle bg-[#2965F1]  md:h-[50px] md:w-[50px] h-[35px] w-[35px]"></div>
                        <div class="circle bg-[#2965F1] md:h-[50px] md:w-[50px] h-[35px] w-[35px]"></div>
                        <div class="card-inner flex flex-col items-center justify-center text-[40px] text-[#2965F1]"><FaCss3 /><p className='text-[20px] font-[briem-bold] '>CSS</p></div>
                    </div>
                    <div class="card md:w-[160px] md:h-[130px] w-[120px] h-[100px]  hover:rotate-2 hover:scale-105">
                        <div class="circle bg-[#F7DF1E]  md:h-[50px] md:w-[50px] h-[35px] w-[35px]"></div>
                        <div class="circle bg-[#F7DF1E] md:h-[50px] md:w-[50px] h-[35px] w-[35px]"></div>
                        <div class="card-inner flex flex-col items-center justify-center text-[40px] text-[#F7DF1E]"><IoLogoJavascript /><p className='text-[20px] font-[briem-bold] '>JAVASCRIPT</p></div>
                    </div>
                    <div class="card md:w-[160px] md:h-[130px] w-[120px] h-[100px]  hover:-rotate-2 hover:scale-105">
                        <div class="circle bg-[#CC6699]  md:h-[50px] md:w-[50px] h-[35px] w-[35px]"></div>
                        <div class="circle bg-[#CC6699] md:h-[50px] md:w-[50px] h-[35px] w-[35px]"></div>
                        <div class="card-inner flex flex-col items-center justify-center text-[40px] text-[#CC6699]"><FaSass /><p className='text-[20px] font-[briem-bold] '>SASS/SCSS</p></div>
                    </div>
                    <div class="card md:w-[160px] md:h-[130px] w-[120px] h-[100px]  hover:rotate-2 hover:scale-105">
                        <div class="circle bg-[#06B6D4]  md:h-[50px] md:w-[50px] h-[35px] w-[35px]"></div>
                        <div class="circle bg-[#06B6D4] md:h-[50px] md:w-[50px] h-[35px] w-[35px]"></div>
                        <div class="card-inner flex flex-col items-center justify-center text-[40px] text-[#06B6D4]"><SiTailwindcss /><p className='text-[20px] font-[briem-bold] '>TAILWIND</p></div>
                    </div>
                    <div class="card md:w-[160px] md:h-[130px] w-[120px] h-[100px]  hover:rotate-2 hover:scale-105">
                        <div class="circle bg-[#602C50]  md:h-[50px] md:w-[50px] h-[35px] w-[35px]"></div>
                        <div class="circle bg-[#602C50] md:h-[50px] md:w-[50px] h-[35px] w-[35px]"></div>
                        <div class="card-inner flex flex-col items-center justify-center text-[40px] text-[#602C50]"><FaBootstrap /><p className='text-[20px] font-[briem-bold] '>BOOTSTRAP</p></div>
                    </div>
                    <div class="card md:w-[160px] md:h-[130px] w-[120px] h-[100px]  hover:-rotate-2 hover:scale-105">
                        <div class="circle bg-[#61DAFB]  md:h-[50px] md:w-[50px] h-[35px] w-[35px]"></div>
                        <div class="circle bg-[#61DAFB] md:h-[50px] md:w-[50px] h-[35px] w-[35px]"></div>
                        <div class="card-inner flex flex-col items-center justify-center text-[40px] text-[#61DAFB]"><FaReact /><p className='text-[20px] font-[briem-bold] '>REACT</p></div>
                    </div>
                    <div class="card md:w-[160px] md:h-[130px] w-[120px] h-[100px]  hover:rotate-1 hover:scale-105">
                        <div class="circle bg-[#FF2D20]  md:h-[50px] md:w-[50px] h-[35px] w-[35px]"></div>
                        <div class="circle bg-[#FF2D20] md:h-[50px] md:w-[50px] h-[35px] w-[35px]"></div>
                        <div class="card-inner flex flex-col items-center justify-center text-[40px] text-[#FF2D20]"><FaLaravel /><p className='text-[20px] font-[briem-bold] '>LARAVEL</p></div>
                    </div>
                </div>
            </div>
        </>
    );
};

