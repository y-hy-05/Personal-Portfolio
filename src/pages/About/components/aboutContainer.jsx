import React, { useContext } from 'react';
import { MyContext } from '../../../utils/ContextProvider';
import { Element, Link } from 'react-scroll';
import TransText from '../../../components/TransText';

const AboutContainer = () => {
    const [dark] = useContext(MyContext)
    const aboutText = {
        en: 'Yahya Jmilou, a passionate young software developer with a love for creating dynamic and responsive applications. I enjoy transforming ideas into interactive digital experiences, while continuously improving my skills to build innovative and user-friendly applications.',
        fr: 'Yahya Jmilou, un jeune développeur passionné, animé par la création d’applications dynamiques et réactives. J’aime transformer des idées en expériences numériques interactives, tout en perfectionnant mes compétences pour concevoir des solutions innovantes',
        de: 'Yahya Jmilou, ein leidenschaftlicher junger Softwareentwickler, der Freude daran hat, dynamische und responsive Anwendungen zu gestalten. Es begeistert mich, Ideen in interaktive digitale Erlebnisse zu verwandeln und meine Fähigkeiten weiterzuentwickeln, um innovative und benutzerfreundliche Lösungen zu schaffen.',
    }

    return (
        <>
            <Element name="about" className=" about-container w-[100%] py-20 md:py-16 flex items-center justify-center md:p-8 p-4 ">
                <div className={`textarea  w-[100%] flex justify-center flex-col gap-10  shadow-xl ${dark ? "text-black" : "text-white"}  rounded-[14px] transition duration-150`}>
                    <h1 className='text-[43px] md:text-[35px] lg:text-[40px] xl:text-[58px] font-[briem-extrabold] cursor-pointer text-center hover:text-[#2596be] transition duration-300'>
                        <TransText en='About Me' fr='A Propos De Moi' de='Über Mich' />
                    </h1>
                    <p className='text-[25px] md:text-[24px] backdrop-blur-[1.5px] lg:text-[30px] xl:text-[32px] text-center md:text-start   font-[briem-medium] w-[100%]'>
                        <TransText
                            en={aboutText.en}
                            fr={aboutText.fr}
                            de={aboutText.de}
                        />
                    </p>
                </div>
            </Element>
        </>
    );
};

export default AboutContainer;