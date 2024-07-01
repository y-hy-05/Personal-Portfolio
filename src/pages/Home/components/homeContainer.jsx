import { useContext } from 'react';
import { MyContext } from '../../../utils/ContextProvider';

export const Container = () => {

    const [dark , toggleBoolean] = useContext(MyContext)
    return (
        <>
                <div  className={dark ? "home-container transition duration-150   md:py-32 lg:py-24 xl:py-28 py-14  w-[100%] flex items-center justify-center flex-col text-black  " : "home-container transition duration-150   md:py-32 lg:py-24 xl:py-28 py-14  w-[100%] flex items-center justify-center flex-col text-white  "}>
                    <span className='md:w-[55%]  '><h4 className='font-[briem-bold] flex text-[20px] md:text-[26px] lg:text-[28px] xl:text-[35px] hover:text-[#2596be] md:mt-0 mt-12 transition cursor-pointer'>Hi , I'm Yahya Jmilou</h4></span>
                    <span className='w-[100%] h-[35%] md:mt-4 mt-10  flex items-center justify-center '><p className='font-[briem-bold] text-[65px] md:text-[75px] lg:text-[95px] xl:text-[120px]  text-center hover:text-[#2596be] transition cursor-pointer '>A Web Developer</p></span>
                </div>
        </>
    );
};

