import { useContext } from 'react';
import { MyContext } from '../../../utils/ContextProvider';
import { TypeAnimation } from 'react-type-animation';

export const Container = () => {

    const [dark, toggleBoolean] = useContext(MyContext)
    return (
        <>
            <div className={dark ? "home-container transition duration-150 md:py-20 lg:py-20 xl:py-20 py-14 w-[100%] flex items-center justify-center flex-col text-black  " : "home-container transition duration-150   md:py-20 lg:py-20 xl:py-20 py-14  w-[100%] flex items-center justify-center flex-col text-white  "}>
                <span className='w-[100%] md:mt-4 mt-10  flex items-center justify-center '>
                    <p className='font-[briem-bold] text-[28px] md:text-[35px] lg:text-[45px] xl:text-[55px]  text-center hover:text-[#2596be] transition cursor-pointer '>
                        <TypeAnimation
                            sequence={[
                                'I am Yahya Jmilou', // Types 'Yahya Jmilou'
                                5000, // Waits 5s
                                'I am a Web Developer', // Deletes 'Yahya Jmilou' and types 'a Web Developer'
                                10000, // Waits 10s
                            ]}
                            wrapper="span"
                            cursor={true}
                            repeat={Infinity}
                            speed={200}
                            style={{ fontSize: '2em', display: 'inline-block' }}
                        />
                    </p>
                </span>
            </div>
        </>
    );
};

