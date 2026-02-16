import React, { useContext, useRef, useState } from 'react';
import "./app.css"
import "./app.sass"
import { FaGithub, FaLinkedin, FaPaperPlane, FaUser, FaEnvelope, FaComment, FaCheckCircle, FaSpinner } from "react-icons/fa";
import { MyContext } from '../../../utils/ContextProvider';
import { Element } from 'react-scroll';
import emailjs from '@emailjs/browser';



export const ContactContainer = () => {
    const [dark, setDark, skills, projects, selectedLanguage, setSelectedLanguage, savedSelectedLanguage] = useContext(MyContext)


    const [message, setMessage] = useState({
        "user_name": "",
        "user_email": "",
        "message": ""
    })

    const handleChange = (e) => {
        setMessage({
            ...message,
            [e.target.name]: e.target.value
        });
    };

    const [messageSent, setMessageSent] = useState(false)
    const [isLoading, setIsLoading] = useState(false)


    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        // Prevent multiple submissions
        if (isLoading) return;

        setIsLoading(true);
        setMessageSent(false);

        emailjs
            .sendForm('service_ehbjxut', 'template_jh8ybkq', form.current, {
                publicKey: 'VXwxzOEtNMX5S8kQL',
            })
            .then(
                () => {
                    setMessageSent(true);
                    setMessage({
                        "user_name": "",
                        "user_email": "",
                        "message": ""
                    });
                    // Hide success message after 5 seconds
                    setTimeout(() => {
                        setMessageSent(false);
                    }, 5000);
                },
                (error) => {
                    console.error('Email sending failed:', error);
                    // You could add error state handling here
                },
            )
            .finally(() => {
                setIsLoading(false);
            });
    };




    return (
        <>
            <Element name='contact' className={`w-full py-16 md:py-24 px-4 md:px-8 ${dark ? 'text-black' : 'text-white'}`}>
                <div className="max-w-7xl mx-auto">
                    {/* Section Header */}
                    <div className="text-center mb-16">
                        <h1 className={`text-4xl md:text-6xl lg:text-7xl font-[roboto-bold] mb-6 ${dark ? 'text-black' : 'text-white'} hover:text-[#2596be] transition-colors duration-500 cursor-pointer`}>
                            <span className="bg-gradient-to-r from-current via-[#2596be] to-current bg-clip-text hover:text-transparent transition-all duration-500">
                                {selectedLanguage === 'en' ? "Let's Work Together" : selectedLanguage === 'fr' ? "Travaillons Ensemble" : "Lass uns zusammenarbeiten"}
                            </span>
                        </h1>
                        <div className="w-24 h-1 bg-gradient-to-r from-[#2596be] to-transparent rounded-full mx-auto"></div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

                        {/* Left Side - Contact Info & Social Links */}
                        <div className="space-y-8 order-2 lg:order-1">
                            {/* Contact Description */}
                            <div className="space-y-6">
                                <h2 className={`text-2xl md:text-3xl font-[roboto-bold] ${dark ? 'text-black' : 'text-white'}`}>
                                    {selectedLanguage === 'en' ? "Get In Touch" : selectedLanguage === 'fr' ? "Entrons en Contact" : "Kontakt aufnehmen"}
                                </h2>
                                <p className={`text-lg md:text-xl font-[roboto-regular] ${dark ? 'text-gray-600' : 'text-gray-300'} leading-relaxed`}>
                                    {selectedLanguage === 'en'
                                        ? "I'm always open to discussing new opportunities, collaborations, or just having a chat about technology and development."
                                        : selectedLanguage === 'fr'
                                        ? "Je suis toujours ouvert à discuter de nouvelles opportunités, collaborations, ou simplement échanger sur la technologie et le développement."
                                        : "Ich bin immer offen für Diskussionen über neue Möglichkeiten, Zusammenarbeit oder einfach nur ein Gespräch über Technologie und Entwicklung."
                                    }
                                </p>
                            </div>

                            {/* Social Links - Enhanced */}
                            <div className="space-y-4">
                                <h3 className={`text-xl font-[roboto-bold] ${dark ? 'text-black' : 'text-white'} mb-6`}>
                                    {selectedLanguage === 'en' ? "Connect With Me" : selectedLanguage === 'fr' ? "Connectez-vous avec Moi" : "Verbinden Sie sich mit mir"}
                                </h3>

                                <div className="space-y-4">
                                    {/* GitHub Link */}
                                    <a
                                        href="https://github.com/y-hy-05"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-[#4c285c]/50 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#4c285c]/20"
                                    >
                                        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#4c285c]/10 group-hover:bg-[#4c285c]/20 transition-colors duration-300">
                                            <FaGithub className="text-[#4c285c] text-xl group-hover:scale-110 transition-transform duration-300" />
                                        </div>
                                        <div className="flex-1">
                                            <p className="font-[roboto-bold] text-lg group-hover:text-[#4c285c] transition-colors duration-300">
                                                {selectedLanguage === 'en' ? "Visit My GitHub" : selectedLanguage === 'fr' ? "Visitez Mon GitHub" : "Besuchen Sie mein GitHub"}
                                            </p>
                                            <p className={`text-sm ${dark ? 'text-gray-600' : 'text-gray-400'}`}>
                                                {selectedLanguage === 'en' ? "Check out my projects and contributions" : selectedLanguage === 'fr' ? "Découvrez mes projets et contributions" : "Schauen Sie sich meine Projekte und Beiträge an"}
                                            </p>
                                        </div>
                                    </a>

                                    {/* LinkedIn Link */}
                                    <a
                                        href="https://www.linkedin.com/in/yahya-jmilou-07567628a/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-[#0077B5]/50 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#0077B5]/20"
                                    >
                                        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#0077B5]/10 group-hover:bg-[#0077B5]/20 transition-colors duration-300">
                                            <FaLinkedin className="text-[#0077B5] text-xl group-hover:scale-110 transition-transform duration-300" />
                                        </div>
                                        <div className="flex-1">
                                            <p className="font-[roboto-bold] text-lg group-hover:text-[#0077B5] transition-colors duration-300">
                                                {selectedLanguage === 'en' ? "Visit My LinkedIn" : selectedLanguage === 'fr' ? "Visitez Mon LinkedIn" : "Besuchen Sie mein LinkedIn"}
                                            </p>
                                            <p className={`text-sm ${dark ? 'text-gray-600' : 'text-gray-400'}`}>
                                                {selectedLanguage === 'en' ? "Let's connect professionally" : selectedLanguage === 'fr' ? "Connectons-nous professionnellement" : "Lassen Sie uns professionell vernetzen"}
                                            </p>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Right Side - Contact Form - Enhanced */}
                        <div className="order-1 lg:order-2">
                            <div className="relative">
                                {/* Background decoration */}
                                <div className="absolute -inset-4 bg-gradient-to-r from-[#2596be]/10 via-transparent to-[#2596be]/5 rounded-2xl blur-xl"></div>

                                <form
                                    ref={form}
                                    onSubmit={sendEmail}
                                    className="relative card-inner rounded-2xl p-8 space-y-6"
                                >
                                    {/* Form Header */}
                                    <div className="text-center mb-8">
                                        <h3 className={`text-2xl font-[roboto-bold] ${dark ? 'text-black' : 'text-white'} mb-2`}>
                                            {selectedLanguage === 'en' ? "Send Me a Message" : selectedLanguage === 'fr' ? "Envoyez-moi un Message" : "Senden Sie mir eine Nachricht"}
                                        </h3>
                                        <p className={`${dark ? 'text-gray-600' : 'text-gray-400'}`}>
                                            {selectedLanguage === 'en' ? "I'll get back to you as soon as possible" : selectedLanguage === 'fr' ? "Je vous répondrai dès que possible" : "Ich werde Ihnen so schnell wie möglich antworten"}
                                        </p>
                                    </div>

                                    {/* Name Field */}
                                    <div className="space-y-2">
                                        <label className={`flex items-center gap-2 text-lg font-[roboto-regular] ${dark ? 'text-black' : 'text-white'} hover:text-[#2596be] transition-colors duration-300`}>
                                            <FaUser className="text-[#2596be]" />
                                            {selectedLanguage === 'en' ? "Your Name" : selectedLanguage === 'fr' ? "Votre Nom" : "Ihr Name"}
                                        </label>
                                        <input
                                            value={message.user_name}
                                            onChange={handleChange}
                                            type="text"
                                            required
                                            name="user_name"
                                            className={`w-full p-4 rounded-xl border backdrop-blur-sm placeholder-gray-500 focus:outline-none focus:border-[#2596be] focus:ring-2 focus:ring-[#2596be]/20 transition-all duration-300 ${dark ? 'bg-white text-black border-gray-300' : 'bg-white/10 text-white border-white/20'}`}
                                            placeholder={selectedLanguage === 'en' ? "Enter your name" : selectedLanguage === 'fr' ? "Entrez votre nom" : "Geben Sie Ihren Namen ein"}
                                        />
                                    </div>

                                    {/* Email Field */}
                                    <div className="space-y-2">
                                        <label className={`flex items-center gap-2 text-lg font-[roboto-regular] ${dark ? 'text-black' : 'text-white'} hover:text-[#2596be] transition-colors duration-300`}>
                                            <FaEnvelope className="text-[#2596be]" />
                                            {selectedLanguage === 'en' ? "Your Email" : selectedLanguage === 'fr' ? "Votre Email" : "Ihre Email"}
                                        </label>
                                        <input
                                            value={message.user_email}
                                            onChange={handleChange}
                                            type="email"
                                            required
                                            name="user_email"
                                            className={`w-full p-4 rounded-xl border backdrop-blur-sm placeholder-gray-500 focus:outline-none focus:border-[#2596be] focus:ring-2 focus:ring-[#2596be]/20 transition-all duration-300 ${dark ? 'bg-white text-black border-gray-300' : 'bg-white/10 text-white border-white/20'}`}
                                            placeholder={selectedLanguage === 'en' ? "Enter your email" : selectedLanguage === 'fr' ? "Entrez votre email" : "Geben Sie Ihre Email ein"}
                                        />
                                    </div>

                                    {/* Message Field */}
                                    <div className="space-y-2">
                                        <label className={`flex items-center gap-2 text-lg font-[roboto-regular] ${dark ? 'text-black' : 'text-white'} hover:text-[#2596be] transition-colors duration-300`}>
                                            <FaComment className="text-[#2596be]" />
                                            {selectedLanguage === 'en' ? "Your Message" : selectedLanguage === 'fr' ? "Votre Message" : "Ihre Nachricht"}
                                        </label>
                                        <textarea
                                            value={message.message}
                                            onChange={handleChange}
                                            name="message"
                                            required
                                            rows={5}
                                            className={`w-full p-4 rounded-xl border backdrop-blur-sm placeholder-gray-500 focus:outline-none focus:border-[#2596be] focus:ring-2 focus:ring-[#2596be]/20 transition-all duration-300 resize-none ${dark ? 'bg-white text-black border-gray-300' : 'bg-white/10 text-white border-white/20'}`}
                                            placeholder={selectedLanguage === 'en' ? "Enter your message" : selectedLanguage === 'fr' ? "Entrez votre message" : "Geben Sie Ihre Nachricht ein"}
                                        ></textarea>
                                    </div>

                                    {/* Success Message */}
                                    {messageSent && (
                                        <div className="flex items-center gap-3 p-4 bg-green-500/10 border border-green-500/20 rounded-xl">
                                            <FaCheckCircle className="text-green-500 text-xl" />
                                            <p className="text-green-500 font-[roboto-regular]">
                                                {selectedLanguage === 'en' ? "Message sent successfully!" : selectedLanguage === 'fr' ? "Message envoyé avec succès!" : "Nachricht erfolgreich gesendet!"}
                                            </p>
                                        </div>
                                    )}

                                    {/* Submit Button */}
                                    <button
                                        type="submit"
                                        disabled={isLoading}
                                        className={`group relative w-full overflow-hidden flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-[roboto-bold] text-lg shadow-xl transition-all duration-300 ${
                                            isLoading
                                                ? 'bg-gray-400 cursor-not-allowed'
                                                : 'bg-gradient-to-r from-[#2596be] to-[#1e7a9a] text-white hover:shadow-2xl hover:shadow-[#2596be]/25 hover:scale-105'
                                        }`}
                                    >
                                        {!isLoading && (
                                            <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                                        )}

                                        {isLoading ? (
                                            <FaSpinner className="text-lg animate-spin" />
                                        ) : (
                                            <FaPaperPlane className="text-lg group-hover:rotate-12 transition-transform duration-300" />
                                        )}

                                        <span className="relative z-10">
                                            {isLoading
                                                ? (selectedLanguage === 'en' ? "Sending..." : selectedLanguage === 'fr' ? "Envoi..." : "Senden...")
                                                : (selectedLanguage === 'en' ? "Send Message" : selectedLanguage === 'fr' ? "Envoyer le Message" : "Nachricht Senden")
                                            }
                                        </span>
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </Element>
        </>
    );
};

