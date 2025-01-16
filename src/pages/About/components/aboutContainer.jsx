import React, { useContext } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { MyContext } from '../../../utils/ContextProvider';
import { Element, Link } from 'react-scroll';

const AboutContainer = () => {
    const [dark , toggleBoolean] = useContext(MyContext)

    const navigate = useNavigate()
    return (
        <>
            <Element  name="about" className=" about-container w-[100%] py-20 md:py-24 flex items-center justify-center md:p-5 p-4 ">
            <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="50" data-aos-easing="ease-in-out" className={`textarea  w-[100%] flex justify-center flex-col gap-10  shadow-xl ${dark?"text-black":"text-white"}  rounded-[14px] md:p-4 p-3 transition duration-150`}>
                    <h1 className='text-[43px] md:text-[35px] lg:text-[40px] xl:text-[58px] font-[briem-extrabold] cursor-pointer text-center hover:text-[#2596be] transition duration-300'>About Me</h1>
                    <p className='text-[25px] md:text-[24px] backdrop-blur-[1.5px] lg:text-[30px] xl:text-[32px] text-center md:text-start   font-[briem-medium] w-[100%]'>Hi! I'm Yahya Jmilou, a passionate young web developer with a love for creating dynamic
                        and responsive websites & webapps. I enjoy
                        turning ideas into interactive digital experiences. 
                        and improve my skills to build innovative and user-friendly web applications. 
                        <span className='text-[#2596be] font-[briem-extrabold] cursor-pointer underline '><Link to="contact" smooth={true} duration={1000}> Let's connect</Link></span> and
                        create something amazing together!</p>
                </div>
            </Element>
        </>
    );
};

export default AboutContainer;