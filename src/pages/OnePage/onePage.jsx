import React from 'react';
import { Container } from '../Home/components/homeContainer';
import AboutContainer from '../About/components/aboutContainer';
import { Layout } from '../Layout/layout';
import Skills from '../skills/skills';
import { Contact } from '../contact/contact';

export const OnePage = () => {
    return (
        <>
            <Layout />
            <Container/>
            <AboutContainer/>
            <Skills/>
            <Contact/>
        </>
    );
};

