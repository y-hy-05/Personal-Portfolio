import React, { useContext, useRef, useState } from 'react';
import "./app.css"
import "./app.sass"
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MyContext } from '../../../utils/ContextProvider';
import { Element } from 'react-scroll';
import emailjs from '@emailjs/browser';



export const ContactContainer = () => {
    const [dark, toggleBoolean] = useContext(MyContext)


    const [message, setMessage] = useState({
        "name": "",
        "email": "",
        "message": ""
    })

    const handleChange = (e) => {
        setMessage({

            [e.target.name]: e.target.value,
            [e.target.email]: e.target.value,
            [e.target.message]: e.target.value
        });
    };

    const [messageSent, setMessageSent] = useState(false)


    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_ehbjxut', 'template_jh8ybkq', form.current, {
                publicKey: 'VXwxzOEtNMX5S8kQL',
            })
            .then(
                () => {
                    // console.log('SUCCESS!');
                    setMessageSent(true)
                    setMessage({
                        "name": "",
                        "email": "",
                        "message": ""
                    })
                },
                (error) => {
                    // console.log('FAILED...', error.text);
                },
            );
    };




    return (
        <>
            <Element name='contact' className={dark ? " w-[100%] py-10 p-3 md:py-24  flex md:flex-row flex-col-reverse items-center justify-center gap-6 text-black  " : "  w-[100%] py-8 p-3 md:py-24  flex md:flex-row flex-col-reverse items-center justify-center gap-6 text-white  "}>
                <span className=' md:w-[40%] w-[100%] flex flex-col justify-center text-center  md:mt-0 mt-3 md:gap-10 items-center'>
                    <h1 className='md:text-[60px] text-[28px] md:flex hidden font-[briem-extrabold] hover:text-[#2596be]  transition duration-300 cursor-pointer '>Let's Work Together</h1>
                    <div className="md:w-full w-[100%] flex flex-col  justify-center items-center gap-3 md:mt-0 mt-8">
                        <span className='flex font-[briem-bold] md:text-[30px] text-nowrap text-[18px] hover:text-[#4c285c] transition duration-300 w-[100%] items-center justify-center md:gap-3 gap-2'>
                            <p className='cursor-pointer'>Visit My Github</p>
                            <FaGithub className='text-[#4c285c] md:text-[28px] text-[30px]' />
                        </span>
                        <span className='flex font-[briem-bold] md:text-[30px] text-nowrap text-[18px] hover:text-[#0077B5] transition duration-300 w-[100%] items-center justify-center md:gap-3 gap-2'>
                            <p className='cursor-pointer'>Visit My LinkedIn</p>
                            <FaLinkedin className='text-[#0077B5] md:text-[28px] text-[30px]' />
                        </span>
                    </div>
                </span>

                <form ref={form} onSubmit={sendEmail} className={dark ? "contactForm md:p-4 backdrop-blur-[5px] shadow-xl p-3 flex flex-col items-center md:w-[40%] w-[100%] gap-2 font-[briem-medium] rounded-[20px]" : "contactForm md:p-4  flex flex-col backdrop-blur-[5px] shadow-xl items-center md:w-[40%] w-[100%] gap-2 font-[briem-medium] rounded-[20px]"}>
                    <span className=' flex flex-col gap-[6px] w-[90%]'>
                        <label htmlFor="" className='text-[22px]  hover:text-[#2596be] transition duration-300  ' >Your Name</label>
                        <input value={message.name} onChange={handleChange} type="text" required name="user_name" id="" className='p-2 rounded-[14px]  text-black' placeholder='enter your name' />
                    </span>

                    <span className='flex flex-col gap-[6px] w-[90%]'>
                        <label htmlFor="" className='text-[22px] hover:text-[#2596be] transition duration-300  ' >Your Email</label>
                        <input value={message.email} onChange={handleChange} type="email" placeholder='enter your email' required name="user_email" id="" className='p-2 rounded-[14px] text-black' />
                    </span>

                    <span className=' flex flex-col gap-[6px] w-[90%]'>
                        <label htmlFor="" className='text-[22px]  hover:text-[#2596be]  transition duration-300  '>Your Message</label>
                        <textarea value={message.message} onChange={handleChange} name="message" required id="" rows={3} className='p-2 rounded-[14px] text-black' placeholder='enter your Message'></textarea>
                    </span>

                    {messageSent && <p>Message Sent Succesfully</p> }

                    <button value="Send" className='btn bg-[#2596be] md:w-[25%] w-[40%] p-2 hover:bg-[#4ac452] transition duration-300 rounded-[20px] md:mt-0 mt-3 '>Send</button>
                </form>

                <h1 className='md:text-[60px] text-[28px] md:hidden md:p-0 p-3 flex font-[briem-extrabold] hover:text-[#2596be]  transition duration-300 cursor-pointer '>Let's Work Together</h1>
            </Element>
        </>
    );
};

