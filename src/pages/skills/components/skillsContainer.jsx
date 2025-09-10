import React, { useContext } from 'react';
import "./app.css"

import { MyContext } from '../../../utils/ContextProvider';
import 'aos/dist/aos.css';
import { Element } from 'react-scroll';
import TransText from '../../../components/TransText';


export const SkillsContainer = () => {
    const [dark,, skills] = useContext(MyContext)


    return (
        <>
            <Element name='skills' className=" flex flex-col items-center justify-center md:gap-14 lg:gap-20 xl:gap-16 gap-12">
                <h1 className={`text-[35px] md:text-[35px] lg:text-[50px] xl:text-[60px] ${dark ? 'text-black' : 'text-white '}  font-[briem-extrabold] cursor-pointer hover:text-[#2596be] transition duration-300 `}>
                    <TransText en='Skills' fr='Compétences' de='Fähigkeiten' />
                </h1>
                <div
                    className="skillsContainer grid justify-center lg:grid-cols-4 md:grid-cols-3 grid-cols-2 p-5 md:p-10 md:gap-12 gap-8">
                    {
                        skills.map((skill) => (
                            <div
                                key={skill.id} className="card hover:rotate-1 hover:scale-105 text-nowrap ">
                                <div style={{ backgroundColor: skill.color }} className={`circle p-4 md:p-8 `}></div>
                                <div style={{ backgroundColor: skill.color }} className={`circle p-4 md:p-8 `}></div>
                                <div style={{ color: skill.color }} className={`card-inner md:p-12 p-12 flex flex-col items-center justify-center`}>
                                    <span className='text-[40px] md:text-[50px]'>{skill.icon}</span>
                                    <p className='text-[20px] md:text-[25px] font-[briem-bold] '>{skill.name}</p></div>
                            </div>
                        ))
                    }
                </div>
            </Element>
        </>
    );
};

