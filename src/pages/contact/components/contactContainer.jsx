import React, { useContext } from 'react';
import "./app.css"
import "./app.sass"
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MyContext } from '../../../utils/ContextProvider';
export const ContactContainer = () => {
    const [dark, toggleBoolean] = useContext(MyContext)
    return (
        <>
            <div className={dark ? " w-[100%] py-8 p-3 md:py-16  flex md:flex-row flex-col-reverse items-center justify-center gap-6 text-black  " : "  w-[100%] py-8 p-3 md:py-16  flex md:flex-row flex-col-reverse items-center justify-center gap-6 text-white  "}>
                <span className=' md:w-[40%] w-[100%] flex flex-col justify-center text-center  md:mt-0 mt-3 md:gap-10 items-center'>
                    <h1 className='md:text-[60px] text-[28px] md:flex hidden font-[briem-extrabold] hover:text-[#2596be]  transition duration-300 cursor-pointer '>Let's Work Together</h1>
                    <div className="md:w-full w-[100%] flex flex-col  justify-center items-center gap-3 md:mt-0 mt-8">
                        <span className='flex font-[briem-bold] md:text-[30px] text-nowrap text-[18px] hover:text-[#4c285c] transition duration-300 w-[100%] items-center justify-center md:gap-3 gap-2'>
                            <p className=''>Visit My Github</p>
                            <FaGithub className='text-[#4c285c] md:text-[28px] text-[30px]' />
                        </span>
                        <span className='flex font-[briem-bold] md:text-[30px] text-nowrap text-[18px] hover:text-[#0077B5] transition duration-300 w-[100%] items-center justify-center md:gap-3 gap-2'>
                            <p className=''>Visit My LinkedIn</p>
                            <FaLinkedin className='text-[#0077B5] md:text-[28px] text-[30px]' />
                        </span>
                    </div>
                </span>
                <form className={dark ? "contactForm md:p-4 bg-[#c2bbbb81] p-3 flex flex-col items-center md:w-[40%] w-[100%] gap-2 font-[briem-medium] rounded-[20px]" : "contactForm md:p-4 bg-[#0000007e] flex flex-col items-center md:w-[40%] w-[100%] gap-2 font-[briem-medium] rounded-[20px]"}>
                    <span className=' flex flex-col gap-[6px] w-[90%]'>
                        <label htmlFor="" className='text-[22px]  hover:text-[#2596be] transition duration-300  ' >Your Name</label>
                        <input type="text" required name="" id="" className='p-2 rounded-[14px]  text-black' placeholder='enter your name' />
                    </span>
                    <span className=' flex flex-col gap-[6px] w-[90%]'>
                        <label htmlFor=""  className='text-[22px]  hover:text-[#2596be] transition duration-300  ' >Your Email</label>
                        <input type="email" placeholder='enter your email' required name="" id="" className='p-2 rounded-[14px] text-black' />
                    </span>
                    <span className=' flex flex-col gap-[6px] w-[90%]'>
                        <label htmlFor="" className='text-[22px]  hover:text-[#2596be]  transition duration-300  '>Your Message</label>
                        <textarea name="" required id="" rows={3} className='p-2 rounded-[14px] text-black' placeholder='enter your Message'></textarea>
                    </span>
                    <button className='btn bg-[#2596be] md:w-[25%] w-[40%] p-2 hover:bg-[#4ac452] transition duration-300 rounded-[20px] md:mt-0 mt-3 '>Send</button>
                </form>
                <h1 className='md:text-[60px] text-[28px] md:hidden md:p-0 p-3 flex font-[briem-extrabold] hover:text-[#2596be]  transition duration-300 cursor-pointer '>Let's Work Together</h1>
            </div>
        </>
    );
};

