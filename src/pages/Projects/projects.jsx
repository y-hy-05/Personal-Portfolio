import React, { useContext, useEffect } from 'react';
import { MyContext } from '../../utils/ContextProvider';
import { FaHtml5 } from 'react-icons/fa6';

export const Projects = () => {


    const [dark, setDark] = useContext(MyContext)


    useEffect(() => {
        if (dark) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [dark]);


    return (
        <>
            <div className="text-white  dark:text-black font-[briem-medium] md:py-14 lg:py-16 py-20">
                <span className='w-[100%] flex justify-center'><h1 className='text-[35px] md:text-[35px] lg:text-[50px] xl:text-[60px] cursor-pointer hover:text-[#2596be] transition duration-300 font-[briem-bold]'>Projects</h1></span>
                <div className="p-10">
                    
                </div>
            </div>
        </>
    );
};

