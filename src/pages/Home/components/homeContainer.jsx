import { useContext } from 'react';
import { MyContext } from '../../../utils/ContextProvider';
import { TypeAnimation } from 'react-type-animation';

export const Container = () => {

    const [dark, , , , selectedLanguage] = useContext(MyContext)
    return (
        <>
            <div className={`home-container transition duration-150  w-[100%] flex ${dark ? "text-black" : "text-white"}`}>
                <span className='w-[100%] md:py-36 py-20 flex flex-col gap-8 items-center justify-center'>
                    <p className='font-[roboto-bold] text-[38px] md:text-[35px] lg:text-[6em] overflow-hidden  flex items-center justify-center text-center hover:text-[#2596be] transition cursor-pointer '>
                        <TypeAnimation
                            key={`name-${selectedLanguage}`} // Unique key for name animation
                            sequence={[
                                'Yahya Jmilou', //? Types 'Yahya Jmilou'
                            ]}
                            wrapper="span"
                            cursor={false}
                            repeat={0}
                            speed={200}
                        />
                    </p>
                    <p className='font-[roboto-bold] text-[28px] md:text-[35px] lg:text-[3rem] overflow-hidden  flex items-center justify-center text-center hover:text-[#2596be] transition cursor-pointer '>
                        <TypeAnimation
                            key={`title-${selectedLanguage}`} // Unique key for title animation
                            sequence={[
                                `${selectedLanguage === 'en' ? 'A Software Developer' : selectedLanguage === 'fr' ? 'Un Développeur Logiciel' : 'Ein Software-Entwickler'}`,
                            ]}
                            wrapper="span"
                            cursor={false}
                            repeat={false}
                            speed={200}
                        />
                    </p>
                </span>
            </div>
        </>
    );
};

