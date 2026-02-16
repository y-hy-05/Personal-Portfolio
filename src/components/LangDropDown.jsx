import TransText from './TransText';
import { useContext, useState, useEffect, useRef } from 'react';
import { MyContext } from '../utils/ContextProvider';

const Radio = () => {
    const [dark, selectedLanguage, setSelectedLanguage] = useContext(MyContext);
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    console.log('from lang dropdown', selectedLanguage);

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const handleLanguageChange = (lang) => {
        setSelectedLanguage(lang);
        setIsOpen(false);
    };

    const getLanguageName = (lang) => {
        switch (lang) {
            case 'en': return 'English';
            case 'fr': return 'Français';
            case 'de': return 'Deutsch';
            default: return 'Language';
        }
    };

    const getFlagIcon = (language) => {
        switch (language) {
            case 'en':
                return (
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1900 1000" width={20} height={12} aria-label="Flag of the United States">
                        <rect width="1900" height="76.92307692307692" y="0" fill="#b22234" />
                        <rect width="1900" height="76.92307692307692" y="76.92307692307692" fill="#ffffff" />
                        <rect width="1900" height="76.92307692307692" y="153.84615384615384" fill="#b22234" />
                        <rect width="1900" height="76.92307692307692" y="230.76923076923077" fill="#ffffff" />
                        <rect width="1900" height="76.92307692307692" y="307.6923076923077" fill="#b22234" />
                        <rect width="1900" height="76.92307692307692" y="384.61538461538464" fill="#ffffff" />
                        <rect width="1900" height="76.92307692307692" y="461.5384615384615" fill="#b22234" />
                        <rect width="1900" height="76.92307692307692" y="538.4615384615384" fill="#ffffff" />
                        <rect width="1900" height="76.92307692307692" y="615.3846153846153" fill="#b22234" />
                        <rect width="1900" height="76.92307692307692" y="692.3076923076923" fill="#ffffff" />
                        <rect width="1900" height="76.92307692307692" y="769.2307692307692" fill="#b22234" />
                        <rect width="1900" height="76.92307692307692" y="846.1538461538461" fill="#ffffff" />
                        <rect width="1900" height="76.92307692307692" y="923.076923076923" fill="#b22234" />
                        <rect width="760" height="538.4615384615385" fill="#3c3b6e" />
                        <defs>
                            <g id="star">
                                <path d="M0,-10 L2.94,-3.09 L9.51,-3.09 L4.29,1.18 L6.18,8.09 L0,4 L-6.18,8.09 L-4.29,1.18 L-9.51,-3.09 L-2.94,-3.09 Z" fill="#ffffff" />
                            </g>
                        </defs>
                        <use href="#star" transform="translate(63.333,53.846) scale(3.8000)" />
                        <use href="#star" transform="translate(190.000,53.846) scale(3.8000)" />
                        <use href="#star" transform="translate(316.667,53.846) scale(3.8000)" />
                        <use href="#star" transform="translate(443.333,53.846) scale(3.8000)" />
                        <use href="#star" transform="translate(570.000,53.846) scale(3.8000)" />
                        <use href="#star" transform="translate(696.667,53.846) scale(3.8000)" />
                        <use href="#star" transform="translate(126.667,107.692) scale(3.8000)" />
                        <use href="#star" transform="translate(253.333,107.692) scale(3.8000)" />
                        <use href="#star" transform="translate(380.000,107.692) scale(3.8000)" />
                        <use href="#star" transform="translate(506.667,107.692) scale(3.8000)" />
                        <use href="#star" transform="translate(633.333,107.692) scale(3.8000)" />
                        <use href="#star" transform="translate(63.333,161.538) scale(3.8000)" />
                        <use href="#star" transform="translate(190.000,161.538) scale(3.8000)" />
                        <use href="#star" transform="translate(316.667,161.538) scale(3.8000)" />
                        <use href="#star" transform="translate(443.333,161.538) scale(3.8000)" />
                        <use href="#star" transform="translate(570.000,161.538) scale(3.8000)" />
                        <use href="#star" transform="translate(696.667,161.538) scale(3.8000)" />
                        <use href="#star" transform="translate(126.667,215.385) scale(3.8000)" />
                        <use href="#star" transform="translate(253.333,215.385) scale(3.8000)" />
                        <use href="#star" transform="translate(380.000,215.385) scale(3.8000)" />
                        <use href="#star" transform="translate(506.667,215.385) scale(3.8000)" />
                        <use href="#star" transform="translate(633.333,215.385) scale(3.8000)" />
                        <use href="#star" transform="translate(63.333,269.231) scale(3.8000)" />
                        <use href="#star" transform="translate(190.000,269.231) scale(3.8000)" />
                        <use href="#star" transform="translate(316.667,269.231) scale(3.8000)" />
                        <use href="#star" transform="translate(443.333,269.231) scale(3.8000)" />
                        <use href="#star" transform="translate(570.000,269.231) scale(3.8000)" />
                        <use href="#star" transform="translate(696.667,269.231) scale(3.8000)" />
                        <use href="#star" transform="translate(126.667,323.077) scale(3.8000)" />
                        <use href="#star" transform="translate(253.333,323.077) scale(3.8000)" />
                        <use href="#star" transform="translate(380.000,323.077) scale(3.8000)" />
                        <use href="#star" transform="translate(506.667,323.077) scale(3.8000)" />
                        <use href="#star" transform="translate(633.333,323.077) scale(3.8000)" />
                        <use href="#star" transform="translate(63.333,376.923) scale(3.8000)" />
                        <use href="#star" transform="translate(190.000,376.923) scale(3.8000)" />
                        <use href="#star" transform="translate(316.667,376.923) scale(3.8000)" />
                        <use href="#star" transform="translate(443.333,376.923) scale(3.8000)" />
                        <use href="#star" transform="translate(570.000,376.923) scale(3.8000)" />
                        <use href="#star" transform="translate(696.667,376.923) scale(3.8000)" />
                        <use href="#star" transform="translate(126.667,430.769) scale(3.8000)" />
                        <use href="#star" transform="translate(253.333,430.769) scale(3.8000)" />
                        <use href="#star" transform="translate(380.000,430.769) scale(3.8000)" />
                        <use href="#star" transform="translate(506.667,430.769) scale(3.8000)" />
                        <use href="#star" transform="translate(633.333,430.769) scale(3.8000)" />
                        <use href="#star" transform="translate(63.333,484.615) scale(3.8000)" />
                        <use href="#star" transform="translate(190.000,484.615) scale(3.8000)" />
                        <use href="#star" transform="translate(316.667,484.615) scale(3.8000)" />
                        <use href="#star" transform="translate(443.333,484.615) scale(3.8000)" />
                        <use href="#star" transform="translate(570.000,484.615) scale(3.8000)" />
                        <use href="#star" transform="translate(696.667,484.615) scale(3.8000)" />
                    </svg>
                );
            case 'fr':
                return (
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 3 2" width={20} height={12} aria-label="Flag of France">
                        <rect width="1" height="2" x="0" fill="#0055A4" />
                        <rect width="1" height="2" x="1" fill="#FFFFFF" />
                        <rect width="1" height="2" x="2" fill="#EF4135" />
                    </svg>
                );
            case 'de':
                return (
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 3 2" width={20} height={12} aria-label="Flag of Germany">
                        <rect width="3" height="0.6667" y="0" fill="#000000" />
                        <rect width="3" height="0.6667" y="0.6667" fill="#DD0000" />
                        <rect width="3" height="0.6667" y="1.3333" fill="#FFCE00" />
                    </svg>
                );
            default:
                return null;
        }
    };

    return (
        <div className="relative" ref={dropdownRef}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className={`
                    relative flex items-center gap-3 px-4 py-3 rounded-lg
                    transition-all duration-300 font-[roboto-regular]
                    text-sm sm:text-base md:text-lg sm:gap-4 sm:px-6 sm:py-4
                    min-w-[140px] sm:min-w-[180px] md:min-w-[200px] overflow-hidden
                    ${dark
                        ? 'border border-black/10 text-black hover:border-black/20'
                        : 'border border-white/10 text-white hover:border-white/20'
                    }
                    ${isOpen ? 'border-[#2596be]' : ''}
                    hover:border-[#2596be]
                `}
            >
                {/* Glass Background Layer */}
                <div
                    className="absolute inset-0 z-0"
                    style={{
                        background: dark ? 'rgba(0, 0, 0, 0.05)' : 'rgba(255, 255, 255, 0.05)',
                        boxShadow: '0 0 10px rgba(0, 0, 0, 0.25)',
                        backdropFilter: 'blur(5px)'
                    }}
                ></div>

                {/* Content Layer */}
                <span className="relative z-10 flex items-center justify-center w-5 h-4 sm:w-6 sm:h-4 md:w-7 md:h-5 rounded-sm overflow-hidden">
                    {getFlagIcon(selectedLanguage)}
                </span>
                <span className="relative z-10 font-medium hidden sm:block text-sm sm:text-base md:text-lg">
                    <TransText en='Language' fr='Langue' de='Sprache' />
                </span>
                <span className="relative z-10 font-medium block sm:hidden text-sm">
                    <TransText en='EN' fr='FR' de='DE' />
                </span>
                <svg
                    className={`relative z-10 w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
            </button>

            {isOpen && (
                <div
                    className={`
                        absolute bottom-full mb-3 right-0 min-w-[160px] sm:min-w-[200px] md:min-w-[220px] rounded-xl
                        z-50 overflow-hidden
                        ${dark
                            ? 'border border-black/10'
                            : 'border border-white/10'
                        }
                    `}
                >
                    {/* Glass Background Layer */}
                    <div
                        className="absolute inset-0 -z-10"
                        style={{
                            background: dark ? 'rgba(0, 0, 0, 0.05)' : 'rgba(255, 255, 255, 0.05)',
                            boxShadow: '0 0 10px rgba(0, 0, 0, 0.25)',
                            backdropFilter: 'blur(5px)'
                        }}
                    ></div>
                    <div className="p-3">
                        {['de', 'en', 'fr'].map((lang) => (
                            <button
                                key={lang}
                                onClick={() => handleLanguageChange(lang)}
                                className={`
                                    w-full flex items-center gap-3 sm:gap-4 px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg
                                    transition-all duration-200 font-[roboto-regular]
                                    text-sm sm:text-base md:text-lg
                                    ${selectedLanguage === lang
                                        ? 'bg-[#2596be]/20 border border-[#2596be]/30'
                                        : dark
                                            ? 'hover:bg-black/10 text-white'
                                            : 'hover:bg-white/10 text-white'
                                    }
                                    hover:transform hover:translateX-1
                                `}
                            >
                                <span className="flex items-center justify-center w-5 h-4 sm:w-6 sm:h-4 md:w-7 md:h-5 rounded-sm overflow-hidden">
                                    {getFlagIcon(lang)}
                                </span>
                                <span className={`${dark ? 'text-black' : 'text-white'} font-medium text-sm sm:text-base md:text-lg`}>
                                    {getLanguageName(lang)}
                                </span>
                                {selectedLanguage === lang && (
                                    <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 ml-auto text-[#2596be]" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                )}
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Radio;
