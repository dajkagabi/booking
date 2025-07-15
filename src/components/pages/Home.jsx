import React from 'react';
import Hero from './Hero';
import IntroSection from './IntroSection';
import CheckDate from './CheckDate';
import CardApartment from './CardApartment';
import GuestsSay from './GuestsSay';


const Home = () => {
  return (
    <>
    <Hero/>
   <IntroSection/>
   <CheckDate/>
   <CardApartment/>
   <GuestsSay/>
   </>
  )
}

export default Home