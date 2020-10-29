import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Container } from 'mdbreact';
import SectionOne from '../components/About/SectionOne';
import SectionTwo from '../components/About/SectionTwo';
import SectionThree from '../components/About/SectionThree';

export default function About() {
    return (
        <>
            <div className='pb-5 py-5'>
                <Navigation />
            </div>

            <Container className='text-center mt-5 pt-5'>
                <h3 className='h1-responsive title sectionSpace'>ABOUT</h3>
            </Container>
            <SectionOne />
            <SectionTwo/>
            <SectionThree/>
            <Footer />
        </>
    )
};