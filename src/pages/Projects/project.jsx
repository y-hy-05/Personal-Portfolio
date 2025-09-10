import React, { useContext, useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
    FaReact, FaNodeJs, FaPython, FaHtml5, FaCss3, FaJs, FaGithub, FaExternalLinkAlt, FaDatabase, FaMobile, FaArrowLeft, FaCheck, FaCog, FaLightbulb, FaImages, FaChevronLeft, FaChevronRight
} from 'react-icons/fa';
import {
    SiTailwindcss, SiMongodb, SiExpress, SiFirebase, SiTypescript, SiNextdotjs, SiFlutter, SiDjango
} from 'react-icons/si';
import ParticlesComponentlight from '../Layout/components/particleslight';
import ParticlesComponentDark from '../Layout/components/particlesdark';
import { MyContext } from '../../utils/ContextProvider';
import { ProjectHeader } from '../../layouts/ProjectHeader';
import './projects.css';

export const Project = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [dark, setDark, skills, projects, selectedLanguage, setSelectedLanguage, savedSelectedLanguage] = useContext(MyContext);

    // Carousel state
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        if (dark) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [dark]);
    
    const currentProject = projects.find(project => project.id === parseInt(id)) || projects[0];

    console.log(currentProject);
    

    return (
        <>
            {/* Particle Background */}
            {dark ? <ParticlesComponentlight id="particles" /> : <ParticlesComponentDark id="particles" className="transition duration-1000 ease-in-out" />}

            {/* Header */}
            <ProjectHeader />

            {/* Main Content */}
            <main className={`min-h-screen ${dark ? 'text-black' : 'text-white'} font-[briem-medium] pt-8 pb-20`}>
                <div className="max-w-6xl mx-auto px-4 md:px-8">

                    {/* Back Button */}
                    <button
                        onClick={() => navigate('/')}
                        className={`back-button flex items-center gap-2 mb-8 px-4 py-2 rounded-lg border-2 border-[#2596be] hover:bg-[#2596be] ${dark ? 'text-black hover:text-white' : 'text-white'} transition-colors duration-200 font-[briem-medium]`}
                    >
                        <FaArrowLeft className="text-sm" />
                        {selectedLanguage === 'en' ? 'Back to Portfolio' : selectedLanguage === 'fr' ? 'Retour au Portfolio' : 'Zurück zum Portfolio'}
                    </button>

                    {/* Hero Section */}
                    {/* Enhanced Hero Section */}
                    <div className="relative overflow-hidden rounded-2xl mb-8">
                        {/* Background with gradient overlay */}
                        <div className="absolute inset-0 bg-gradient-to-br from-[#2596be]/5 via-transparent to-[#2596be]/10"></div>

                        <div className="card-inner rounded-2xl p-6 md:p-10 relative">
                            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 items-center">

                                {/* Project Image - Enhanced */}
                                <div className="lg:col-span-2 order-2 lg:order-1">
                                    <div className="relative group">
                                        {/* Decorative background elements */}
                                        <div className="absolute -inset-4 bg-gradient-to-r from-[#2596be]/20 to-transparent rounded-2xl blur-xl opacity-50 group-hover:opacity-70 transition-opacity duration-500"></div>

                                        <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-white to-gray-50 p-6 shadow-2xl">
                                            <img
                                                src={currentProject.logo}
                                                alt={currentProject.title}
                                                className="w-full h-48 md:h-64 object-contain transition-all duration-500 group-hover:scale-110 group-hover:rotate-2"
                                            />

                                            {/* Floating elements */}
                                            <div className="absolute top-4 right-4 w-3 h-3 bg-[#2596be] rounded-full animate-ping"></div>
                                            <div className="absolute bottom-4 left-4 w-2 h-2 bg-[#2596be]/60 rounded-full animate-pulse"></div>
                                        </div>
                                    </div>
                                </div>

                                {/* Project Info - Enhanced */}
                                <div className="lg:col-span-3 order-1 lg:order-2 space-y-8">
                                    {/* Header Section */}
                                    <div className="space-y-4">
                                        {/* Role Badge - Redesigned */}
                                        {currentProject.role && (
                                            <div className="flex items-center gap-3">
                                                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#2596be]/10 to-[#2596be]/5 border border-[#2596be]/20 backdrop-blur-sm shadow-lg">
                                                    <div className="relative">
                                                        <div className="w-2 h-2 bg-[#2596be] rounded-full"></div>
                                                        <div className="absolute inset-0 w-2 h-2 bg-[#2596be] rounded-full animate-ping opacity-75"></div>
                                                    </div>
                                                    <span className="text-[#2596be] font-[briem-bold] text-sm md:text-base tracking-wide">
                                                        {currentProject.role[selectedLanguage]}
                                                    </span>
                                                </div>
                                            </div>
                                        )}

                                        {/* Project Title - Enhanced */}
                                        <div className="relative">
                                            <h1 className={`text-4xl md:text-5xl lg:text-6xl font-[briem-extrabold] ${dark ? 'text-black' : 'text-white'} leading-tight tracking-tight`}>
                                                <span className="bg-gradient-to-r from-current via-[#2596be] to-current bg-clip-text hover:text-transparent transition-all duration-500 cursor-pointer">
                                                    {currentProject.title}
                                                </span>
                                            </h1>
                                            {/* Decorative underline */}
                                            <div className="absolute -bottom-2 left-0 w-20 h-1 bg-gradient-to-r from-[#2596be] to-transparent rounded-full"></div>
                                        </div>
                                    </div>

                                    {/* Description - Enhanced */}
                                    <div className="relative">
                                        <p className={`text-xl md:text-2xl font-[briem-medium] ${dark ? 'text-gray-600' : 'text-gray-300'} leading-relaxed`}>
                                            {currentProject.description[selectedLanguage]}
                                        </p>
                                        {/* Quote decoration */}
                                        <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-[#2596be] to-transparent rounded-full opacity-30"></div>
                                    </div>

                                    {/* Action Buttons - Redesigned */}
                                    <div className="flex flex-col sm:flex-row gap-4 pt-4">
                                        {currentProject.site && (
                                            <a
                                                href={currentProject.site}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="group relative overflow-hidden flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-[#2596be] to-[#1e7a9a] text-white rounded-xl font-[briem-bold] text-lg shadow-xl hover:shadow-2xl hover:shadow-[#2596be]/25 transition-all duration-300 hover:scale-105"
                                            >
                                                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                                                <FaExternalLinkAlt className="text-lg group-hover:rotate-12 transition-transform duration-300" />
                                                <span className="relative z-10">
                                                    {selectedLanguage === 'en' ? 'View Live Demo' : selectedLanguage === 'fr' ? 'Voir la Démo' : 'Live-Demo Ansehen'}
                                                </span>
                                            </a>
                                        )}
                                        <a
                                            href={currentProject.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={`group relative overflow-hidden flex items-center justify-center gap-3 px-8 py-4 border-2 border-[#2596be] hover:bg-[#2596be] ${dark ? 'text-black hover:text-white' : 'text-white'} rounded-xl font-[briem-bold] text-lg backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-[#2596be]/25`}
                                        >
                                            <div className="absolute inset-0 bg-gradient-to-r from-[#2596be]/0 via-[#2596be]/10 to-[#2596be]/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                                            <FaGithub className="text-xl group-hover:rotate-12 transition-transform duration-300" />
                                            <span className="relative z-10">
                                                {selectedLanguage === 'en' ? 'View Source Code' : selectedLanguage === 'fr' ? 'Voir le Code Source' : 'Quellcode Ansehen'}
                                            </span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Technologies Section */}
                    <div className="card-inner rounded-xl p-8 mb-8">
                        <h2 className={`text-2xl md:text-3xl font-[briem-bold] ${dark ? 'text-black' : 'text-white'} mb-6 flex items-center gap-3`}>
                            <FaCog className="text-[#2596be]" />
                            {selectedLanguage === 'en' ? 'Technologies Used' : selectedLanguage === 'fr' ? 'Technologies Utilisées' : 'Verwendete Technologien'}
                        </h2>
                        <div className="flex flex-wrap gap-3">
                            {currentProject.technologies.map((tech, index) => (
                                <span
                                    key={index}
                                    className="tech-badge inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-[briem-medium] bg-white/10 backdrop-blur-sm border border-white/20"
                                    style={{ color: tech.color }}
                                >
                                    <span className="text-lg">{tech.icon}</span>
                                    {tech.name}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Features Section */}
                    <div className="card-inner rounded-xl p-8 mb-8">
                        <h2 className={`text-2xl md:text-3xl font-[briem-bold] ${dark ? 'text-black' : 'text-white'} mb-6 flex items-center gap-3`}>
                            <FaCheck className="text-[#2596be]" />
                            {selectedLanguage === 'en' ? 'Key Features' : selectedLanguage === 'fr' ? 'Fonctionnalités Clés' : 'Hauptfunktionen'}
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {currentProject.features[selectedLanguage].map((feature, index) => (
                                <div key={index} className="feature-list-item flex items-start gap-3 cursor-pointer">
                                    <FaCheck className="text-[#2596be] mt-1 flex-shrink-0" />
                                    <span className={`font-[briem-medium] ${dark ? 'text-gray-700' : 'text-gray-300'}`}>
                                        {feature}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Pictures Carousel Section */}
                    {currentProject.screenshots && currentProject.screenshots.length > 0 && (
                        <div className="card-inner rounded-xl p-8 mb-8">
                            <h2 className={`text-2xl md:text-3xl font-[briem-bold] ${dark ? 'text-black' : 'text-white'} mb-6 flex items-center gap-3`}>
                                <FaImages className="text-[#2596be]" />
                                {selectedLanguage === 'en' ? 'Project Screenshots' : selectedLanguage === 'fr' ? 'Captures d\'écran du Projet' : 'Projekt-Screenshots'}
                            </h2>

                            {/* Carousel Container */}
                            <div className="relative">
                                {/* Main Image Display */}
                                <div className="relative overflow-hidden rounded-lg mb-4">
                                    <img
                                        src={currentProject.screenshots[currentImageIndex]}
                                        alt={`${currentProject.title} screenshot ${currentImageIndex + 1}`}
                                        className="w-full h-64 md:h-96 object-contain transition-all duration-500"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>

                                    {/* Image Counter */}
                                    <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm rounded-lg px-3 py-1">
                                        <span className="text-white font-[briem-medium] text-sm">
                                            {currentImageIndex + 1} / {currentProject.screenshots.length}
                                        </span>
                                    </div>

                                    {/* Navigation Arrows */}
                                    {currentProject.screenshots.length > 1 && (
                                        <>
                                            <button
                                                onClick={() => setCurrentImageIndex(prev =>
                                                    prev === 0 ? currentProject.screenshots.length - 1 : prev - 1
                                                )}
                                                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 backdrop-blur-sm rounded-full p-3 transition-all duration-200 group"
                                            >
                                                <FaChevronLeft className="text-white text-lg group-hover:scale-110 transition-transform" />
                                            </button>
                                            <button
                                                onClick={() => setCurrentImageIndex(prev =>
                                                    prev === currentProject.screenshots.length - 1 ? 0 : prev + 1
                                                )}
                                                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 backdrop-blur-sm rounded-full p-3 transition-all duration-200 group"
                                            >
                                                <FaChevronRight className="text-white text-lg group-hover:scale-110 transition-transform" />
                                            </button>
                                        </>
                                    )}
                                </div>

                                {/* Thumbnail Navigation */}
                                {currentProject.screenshots.length > 1 && (
                                    <div className="flex gap-2 overflow-x-auto pb-2">
                                        {currentProject.screenshots.map((screenshot, index) => (
                                            <button
                                                key={index}
                                                onClick={() => setCurrentImageIndex(index)}
                                                className={`flex-shrink-0 relative overflow-hidden rounded-lg transition-all duration-200 ${
                                                    index === currentImageIndex
                                                        ? 'ring-2 ring-[#2596be] scale-105'
                                                        : 'hover:scale-105 opacity-70 hover:opacity-100'
                                                }`}
                                            >
                                                <img
                                                    src={screenshot}
                                                    alt={`${selectedLanguage === 'en' ? 'Thumbnail' : selectedLanguage === 'fr' ? 'Miniature' : 'Vorschaubild'} ${index + 1}`}
                                                    className="w-16 h-12 md:w-20 md:h-16 object-cover"
                                                />
                                                {index === currentImageIndex && (
                                                    <div className="absolute inset-0 bg-[#2596be]/20"></div>
                                                )}
                                            </button>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                    )}

                </div>
            </main>
        </>
    );
};

