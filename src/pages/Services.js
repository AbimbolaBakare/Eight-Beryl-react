import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Container } from 'mdbreact';
import Wedding from '../components/Services/Wedding';
import PrivateParties from '../components/Services/PrivateParties';
import CorporateEvents from '../components/Services/CorporateEvents';

export default function Services() {
    return (
        <>
            <div className='pb-5 py-5'>
                <Navigation />
            </div>

            <Container className='text-center mt-5 pt-5'>
                <h3 className='h3-responsive title sectionSpace'>SERVICES</h3>
            </Container>

            <Wedding/>

            <PrivateParties/>

            <CorporateEvents/>
            
            <Footer />
        </>
    )
};