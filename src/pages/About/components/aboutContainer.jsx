import React, { useContext } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { MyContext } from '../../../utils/ContextProvider';

const AboutContainer = () => {
    const [dark , toggleBoolean] = useContext(MyContext)

    const navigate = useNavigate()
    return (
        <>
            <div className="about-container w-[100%] md:h-[85vh] h-[75vh]  flex items-center justify-center p-5 ">
                <div className={dark ? "textarea h-[100%] md:w-[80%] w-[100%] flex justify-center flex-col md:gap-10 gap-[40px] bg-[#f0f0f0a0] text-black rounded-[20px] md:p-0 p-4  transition duration-300" :"textarea h-[100%] md:w-[80%] w-[100%] flex justify-center flex-col md:gap-10 gap-[40px] bg-[#00000085] text-white rounded-[20px] md:p-0 p-4 transition duration-300 "}>
                    <h1 className='md:text-[35px] text-[43px] font-[briem-extrabold] cursor-pointer hover:text-[#2596be]'>About Me</h1>
                    <p className='md:text-[24px] text-[20px] font-[briem-medium] w-[100%]'>Hi! I'm Yahya Jmilou, a passionate young web developer with a love for creating dynamic
                        and responsive websites. With a solid foundation in HTML, CSS, and JavaScript, I enjoy
                        turning ideas into interactive digital experiences. I’m always open to learn new technologies
                        and improve my skills to build innovative and user-friendly web applications. <span  onClick={() => navigate("/contact")} className='text-[#2596be] font-[briem-extrabold] md:text-[26px] text-[20px] cursor-pointer'>Let's connect</span> and
                        create something amazing together!</p>
                </div>
            </div>
        </>
    );
};

export default AboutContainer;