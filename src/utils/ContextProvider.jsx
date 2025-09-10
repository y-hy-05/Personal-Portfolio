import React, { createContext, useEffect, useState } from "react"
import { FaBootstrap, FaCss3, FaDatabase, FaHtml5, FaLaravel, FaPhp, FaReact, FaSass } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiExpo, SiInertia, SiPostman, SiTailwindcss } from "react-icons/si";
import lionsgeek from '../assets/img/lionsgeek.svg'
import yesAfrica from '../assets/img/yesAfrica.png'
import lionsgeek1 from '../assets/img/lg1.png'
import lionsgeek2 from '../assets/img/lg2.png'
import lionsgeek3 from '../assets/img/lg3.png'
import lionsgeek4 from '../assets/img/lg4.png'
import yes1 from '../assets/img/yes1.png'
import yes2 from '../assets/img/yes2.png'
import yes3 from '../assets/img/yes3.png'
import yes4 from '../assets/img/yes4.png'

export const MyContext = createContext()

export const MyProvider = ({ children }) => {

    const [dark, setDark] = useState(false)

    const skills = [
        {
            id: 1,
            name: "JAVASCRIPT",
            color: `#F7DF1E`,
            icon: <IoLogoJavascript />
        },
        {
            id: 2,
            name: "REACT",
            color: `#61DAFB`,
            icon: <FaReact />
        },
        {
            id: 3,
            name: "TAILWIND",
            color: `#06B6D4`,
            icon: <SiTailwindcss />
        },
        {
            id: 4,
            name: "INERTIA JS",
            color: `#e83e8c`,
            icon: <SiInertia />
        },
        {
            id: 5,
            name: "EXPO GO",
            color: `#999`,
            icon: <SiExpo />
        },
        {
            id: 6,
            name: "LARAVEL",
            color: `#FF2D20`,
            icon: <FaLaravel />
        },
        {
            id: 7,
            name: "PHP",
            color: `#777BB4`,
            icon: <FaPhp />
        },
        {
            id: 8,
            name: "POSTMAN",
            color: `#FF6C37`,
            icon: <SiPostman />
        },
        {
            id: 9,
            name: "REST API",
            color: "#FF6B6B",
            icon: <FaDatabase />
        },
    ]
    const projects = [
        {
            id: 1,
            title: "Lionsgeek",
            description: {
                en: 'I collaborated in developing the official website for LionsGeek, a platform that presents the organization’s mission and allows people to apply for in-person technology and media training programs.Together with the team, we built a site that showcases LionsGeek’s vision, programs, and activities, while also offering a structured participant application process. The platform includes a blog, event management tools, and a powerful admin dashboard for managing sessions, posts, and user registrations. Using Laravel, Inertia.js, and React, we ensured a smooth single-page experience for both visitors and administrators.',
                de: 'Ich habe im Team an der Entwicklung der offiziellen Webseite von LionsGeek gearbeitet. Die Seite zeigt die Ziele der Organisation und gibt Besuchern die Möglichkeit, sich für Trainings im Bereich Technik und Medien zu bewerben. Zusammen mit dem Team haben wir eine Plattform gebaut, die die Vision, Programme und Aktivitäten von LionsGeek präsentiert. Sie hat ein klares Bewerbungsformular, einen Blog und eine Verwaltung von Veranstaltungen. Außerdem gibt es ein Admin-Dashboard, mit dem man Sitzungen, Beiträge und Anmeldungen leicht steuern kann. Mit Laravel, Inertia.js und React entwickelt, bietet die Seite eine schnelle und angenehme Nutzererfahrung für Besucher und Administratoren.',
                fr: 'J’ai collaboré au développement du site officiel de LionsGeek, une plateforme qui présente la mission de l’organisation et permet aux utilisateurs de postuler aux programmes de formation en technologie et en médias. Avec l’équipe, nous avons conçu un site qui met en valeur la vision, les programmes et les activités de LionsGeek, tout en offrant un processus de candidature clair pour les participants. Le site intègre également un blog, un système de gestion d’événements et un tableau de bord administrateur complet pour gérer les sessions, les publications et les inscriptions. Construit avec Laravel, Inertia.js et React, il offre une expérience rapide et fluide, aussi bien pour les visiteurs que pour les administrateurs.'
            },
            technologies: [
                skills[1],
                skills[0],
                skills[5],
                skills[6],
                skills[7],
                skills[8],
                skills[2]
            ],
            logo: lionsgeek,
            features: {
                en: [
                    "Application form for in-person bootcamps and training",
                    "Admin dashboard for managing participants, blogs, and events",
                    "Dynamic blog and event section",
                    "Newsletter subscription system",
                    "Role-based access for admins and moderators",
                    "Multilingual interface (Arabic & French)",
                    "Fully responsive frontend with a custom UI"],
                de: [
                    "Bewerbungsformular für Bootcamps und Trainings vor Ort",
                    "Admin-Bereich zur Verwaltung von Teilnehmern, Blogs und Veranstaltungen",
                    "Dynamischer Bereich für Blog und Events",
                    "Newsletter-Anmeldungssystem",
                    "Rollenbasierter Zugang für Admins und Moderatoren",
                    "Mehrsprachige Oberfläche (Arabisch & Französisch)",
                    "Komplett responsive Oberfläche mit eigenem Design"],
                fr: [
                    "Formulaire de candidature pour les bootcamps et formations en présentiel",
                    "Tableau de bord administrateur pour gérer les participants, blogs et événements",
                    "Section dynamique pour le blog et les événements",
                    "Système d’abonnement à la newsletter",
                    "Accès basé sur les rôles pour les administrateurs et modérateurs",
                    "Interface multilingue (arabe et français)",
                    "Frontend entièrement responsive avec une interface personnalisée"]
            },
            screenshots: [
                lionsgeek1,
                lionsgeek2,
                lionsgeek3,
                lionsgeek4,
            ],
            role: {
                en: 'Internship',
                fr: 'Stage',
                de: 'Praktikum'
            },
            site: "https://lionsgeek.ma",
            github: "https://github.com/lionsgeeks/lionsgeek"
        },
        {
            id: 2,
            title: "Yes Africa",
            description: {
                en: 'I collaborated on developing and delivering a modern website for Yes Africa, designed with a focus on user-friendly interfaces and smooth backend integration.The platform is fully responsive, built with a React.js frontend and a Laravel backend, ensuring both an engaging user experience and strong backend functionality for content management and user interactions. My contributions included updating the UI to improve usability and overall design consistency.',
                de: 'Ich habe im Team an der Entwicklung einer modernen Webseite für Yes Africa gearbeitet. Ziel war eine benutzerfreundliche Oberfläche und eine gute Verbindung zum Backend. Die Seite ist komplett responsive und wurde mit React.js im Frontend und Laravel im Backend gebaut. So bietet sie eine gute Nutzererfahrung und eine starke Verwaltung von Inhalten und Benutzern. Mein Beitrag war vor allem das Aktualisieren der UI, um die Bedienung und das Design zu verbessern.',
                fr: 'J’ai collaboré au développement et à la mise en ligne du site web moderne de Yes Africa, conçu avec une interface conviviale et une intégration fluide du backend. Le site est entièrement responsive et combine un frontend en React.js avec un backend en Laravel, garantissant une expérience utilisateur attrayante et une gestion robuste du contenu et des interactions. Ma contribution a porté notamment sur l’amélioration de l’interface utilisateur afin d’optimiser la convivialité et la cohérence visuelle.'
            },
            technologies: [
                skills[1],
                skills[0],
                skills[5],
                skills[6],
                skills[7],
                skills[8],
                skills[2]
            ],
            logo: yesAfrica,
            features: {
                en: [
                    "Responsive and modern design",
                    "Content management system",
                    "User registration and authentication",
                    "Dynamic content rendering",
                    "SEO optimization",
                    "Contact and inquiry forms",
                    "Multi-page navigation with smooth transitions"
                ],
                de: [
                    "Modernes und responsives Design",
                    "Inhaltsverwaltungssystem",
                    "Benutzerregistrierung und Anmeldung",
                    "Dynamische Inhaltsanzeige",
                    "SEO-Optimierung",
                    "Kontakt- und Anfrageformulare",
                    "Mehrseitige Navigation mit weichen Übergängen"
                ],
                fr: [
                    "Design moderne et responsive",
                    "Système de gestion de contenu",
                    "Inscription et authentification des utilisateurs",
                    "Affichage dynamique du contenu",
                    "Optimisation SEO",
                    "Formulaires de contact et de demande",
                    "Navigation multi-page avec transitions fluides"
                ]
            },
            screenshots: [
                yes1,
                yes2,
                yes3,
                yes4,
            ],
            role: {
                en: 'Internship',
                fr: 'Stage',
                de: 'Praktikum'
            },
            site: "https://youthempowermentsummit.africa",
            github: "https://github.com/lionsgeeks/yes-africa"
        },
    ];

    const savedSelectedLanguage = localStorage.getItem('selectedLanguage')
    const [selectedLanguage, setSelectedLanguage] = useState(
        savedSelectedLanguage ?? 'en'
    )

    useEffect(() => {
        localStorage.setItem('selectedLanguage', selectedLanguage)
    }, [selectedLanguage])

    return (
        <>

            <MyContext.Provider value={[dark, setDark, skills, projects, selectedLanguage, setSelectedLanguage, savedSelectedLanguage]} >
                {children}
            </MyContext.Provider>

        </>
    )


}