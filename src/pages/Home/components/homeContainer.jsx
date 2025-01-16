import { useContext } from 'react';
import { MyContext } from '../../../utils/ContextProvider';
import { TypeAnimation } from 'react-type-animation';

export const Container = () => {

    const [dark] = useContext(MyContext)
    return (
        <>
            <div className={`home-container  transition duration-150 md:py-28 py-20 w-[100%] flex ${dark ? "text-black" : "text-white"}`}>
                <span className='w-[100%] md:mt-4 mt-10  flex items-center justify-center lg:h-fit h-[20rem]'>
                    <p className='font-[briem-bold] text-[28px] md:text-[35px] lg:text-[45px] xl:text-[55px] overflow-hidden  flex items-center justify-center text-center hover:text-[#2596be] transition cursor-pointer '>
                        <TypeAnimation
                            sequence={[
                                'I am Yahya Jmilou', // Types 'I am Yahya Jmilou'
                                5000, // Waits 5s
                                'I am a Web Developer', // Deletes 'Yahya Jmilou' and types 'a Web Developer'
                                10000, // Waits 10s
                            ]}
                            wrapper="span"
                            cursor={true}
                            repeat={0}
                            speed={200}
                            style={{ fontSize: '2em'}}
                        />
                    </p>
                </span>
            </div>
        </>
    );
};

