import React from 'react'
import Welcome from './components/Welcome';
import OurStory from './components/OurStory';
import About from './components/About';
import WhoWeR from './components/WhoWeR';
import Slogan from './components/Slogan';
import Images from './components/Images';
import Reviews from './components/Reviews';
import Social from './components/Social';
import Features from '../../components/Features';


export default function AboutPage() {
    return (
        <>
            {/* WELCOME */}
            <Welcome />

            {/* OUR STORY */}
            <OurStory />

            {/* ABOUT */}
            <About />

            {/* OUR STORY - who we r*/}
            <WhoWeR />

            {/* SLOGAN */}
            <Slogan />

            {/* IMAGES */}
            <Images />

            {/* REVIEWS */}
            <Reviews />

            {/* SOCIAL */}
            <Social />

            {/* FEATURES */}
            <Features />

        </>
    )
}
