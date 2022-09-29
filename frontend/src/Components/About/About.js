import React from 'react';
import AboutUsBanner from './AboutUsBanner';
import Teams from './Teams';
import Title from '../Title';

const About = () => {
    return (
        <>
            <Title title="Team" />
            <AboutUsBanner />
            <Teams />
        </>
    )
}

export default About