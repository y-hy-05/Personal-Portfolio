import { useContext } from 'react';
import { MyContext } from '../../../utils/ContextProvider';

export const Container = () => {

    const [dark , toggleBoolean] = useContext(MyContext)
    return (
        <>
                <div className={dark ? "home-container md:h-[80vh] h-[60vh] w-[100%] flex items-center justify-center flex-col text-black transition duration-150 " : "home-container transition duration-150 md:h-[85vh] h-[60vh] w-[100%] flex items-center justify-center flex-col text-white "}>
                    <span className='md:w-[55%]  '><h4 className='font-[briem-bold] flex text-[26px] hover:text-[#2596be] md:mt-0 mt-12 transition cursor-pointer'>Hi , I'm Yahya Jmilou</h4></span>
                    <span className='w-[100%] h-[35%] md:mt-4 mt-10  flex items-center justify-center '><p className='font-[briem-bold] md:text-[90px] text-[65px] text-center hover:text-[#2596be] transition cursor-pointer '>A Web Developer</p></span>
                </div>
        </>
    );
};

