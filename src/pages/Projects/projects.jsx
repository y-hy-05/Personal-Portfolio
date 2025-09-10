import React, { useContext, useEffect } from 'react';
import { MyContext } from '../../utils/ContextProvider';
import { Element } from 'react-scroll';
import './projects.css';

import { useNavigate } from 'react-router-dom';
import TransText from '../../components/TransText';

export const Projects = () => {
    const [dark, , , projects, selectedLanguage] = useContext(MyContext);

    useEffect(() => {
        if (dark) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [dark]);

    const navigate = useNavigate();

    return (
        <>
            <Element name='projects' className="text-white dark:text-black font-[briem-medium] md:py-14 lg:py-16 py-20">
                <span className='w-[100%] flex justify-center'>
                    <h1 className='text-[35px] md:text-[35px] lg:text-[50px] xl:text-[60px] cursor-pointer hover:text-[#2596be] transition duration-300 font-[briem-bold]'>
                        <TransText en='Projects' fr='Projets' de='Projekte' />
                    </h1>
                </span>

                <div className="p-4 md:p-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto">
                        {projects.map((project) => (
                            <div
                                key={project.id}
                                className={`project-card group relative overflow-hidden rounded-xl`}
                            >
                                {/* Card Background with Glassmorphism Effect */}
                                <div className="card-inner h-full p-6">

                                    {/* Project Image */}
                                    <div className="relative overflow-hidden rounded-lg mb-4">
                                        <img
                                            src={project.logo}
                                            alt={project.title}
                                            className="w-full h-48 object-contain bg-white p-3 transition-transform duration-300 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                    </div>

                                    {/* Project Content */}
                                    <div className="space-y-4">
                                        <h3 className={`text-xl md:text-2xl font-[briem-bold] ${dark ? 'text-black' : 'text-white'} group-hover:text-[#2596be] transition-colors duration-300`}>
                                            {project.title}
                                        </h3>

                                        <p className={`text-sm md:text-base font-[briem-medium] ${dark ? 'text-gray-700' : 'text-gray-300'} line-clamp-3`}>
                                            <TransText en={project.description.en} fr={project.description.fr} de={project.description.de} />
                                        </p>

                                        {/* Technologies */}
                                        <div className="flex flex-wrap gap-2">
                                            {project.technologies.map((tech, index) => (
                                                <span
                                                    key={index}
                                                    className="tech-badge inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-[briem-medium] bg-white/10 backdrop-blur-sm border border-white/20"
                                                    style={{ color: tech?.color }}
                                                >
                                                    {tech?.icon}
                                                    {tech?.name}
                                                </span>
                                            ))}
                                        </div>

                                        {/* Action Buttons */}
                                        <div className="flex gap-3 pt-2">
                                            <p
                                                onClick={() => navigate(`/project/${project.id}`)}
                                                rel="noopener noreferrer"
                                                className={`project-button flex items-center gap-2 px-4 py-2 border-2 border-[#2596be] hover:bg-[#2596be] ${dark ? 'text-black hover:text-white' : 'text-white'} rounded-lg font-[briem-medium] text-sm flex-1 justify-center`}
                                            >
                                                {selectedLanguage === 'en' ? 'See more' : selectedLanguage === 'fr' ? 'Voir plus' : 'Mehr sehen'}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </Element>
        </>
    );
};

