import React from 'react';
import Navigation from '../components/Navigation';
import ContentSection from '../components/Home/ContentSection';
import Testimonial from '../components/Home/Testimonial';
import BannerTwo from '../components/Home/BannerTwo';
import Footer from '../components/Footer';
import BannerOne from '../components/Home/BannerOne';
//import LightToggle from '../components/lightToggle';

export default function Home(){
    return(
        <>
             <Navigation/>
            
             <BannerOne/>
            
             <ContentSection/>
             <Testimonial/>
             <BannerTwo/>
             <Footer/>
        </>     
    )
};