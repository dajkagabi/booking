import React from 'react';
import Hero from './Hero';
import IntroSection from './IntroSection';
import CheckDate from './CheckDate';
import CardApartment from './CardApartment';
import GuestsSay from './GuestsSay';
import Experience from './Experience';


const Home = () => {
  return (
    <>
    <Hero/>
   <IntroSection/>
   <CheckDate/>
   <CardApartment/>
   <GuestsSay/>
   <Experience/>
   </>
  )
}

export default Home