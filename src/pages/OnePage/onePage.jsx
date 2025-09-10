import React from 'react';
import { Container } from '../Home/components/homeContainer';
import AboutContainer from '../About/components/aboutContainer';
import { Layout } from '../Layout/layout';
import Skills from '../skills/skills';
import { Contact } from '../contact/contact';
import { Projects } from '../Projects/projects';
import Radio from '../../components/LangDropDown';

export const OnePage = () => {
    return (
        <>
            <Layout />
            <Container />
            <AboutContainer />
            <Skills />
            <Projects />
            <Contact />
            <div className='fixed right-4 bottom-4 z-50 sm:right-6 sm:bottom-6 md:right-8 md:bottom-8 lg:right-10 lg:bottom-10'>
                <Radio />
            </div>

        </>
    );
};

