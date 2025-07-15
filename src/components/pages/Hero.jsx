import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import heroBackgroundImage from '../../assets/back.jpg';

const Hero = () => {
  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: "easeOut", delay: 0.3 }
    }
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { delay: 1, duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    <section className="relative h-screen flex items-center justify-center text-white overflow-hidden">
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <img
          src={heroBackgroundImage}
          alt="Luxury beach resort background"
          className="w-full h-full object-cover"
        />
        
        <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#1C2638] to-transparent z-10"></div>
      </div>

      <div className="relative z-20 text-center px-4 max-w-4xl">
        <motion.p
          className="text-lg md:text-xl uppercase tracking-widest mb-4 drop-shadow-md"
          variants={textVariants}
          initial="hidden"
          animate="visible"
        >
          Beachfront Luxury Accommodation
        </motion.p>
        <motion.h1
          className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight drop-shadow-lg"
          variants={textVariants}
          initial="hidden"
          animate="visible"
        >
          Experience Seaside Tranquility
        </motion.h1>
        <motion.p
          className="text-base md:text-lg mb-8 max-w-2xl mx-auto drop-shadow-md"
          variants={textVariants}
          initial="hidden"
          animate="visible"
        >
          Discover our exclusive collection of luxury beachfront apartments and hotel rooms,
          offering unparalleled comfort and breathtaking sea views.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4"
          variants={buttonVariants}
          initial="hidden"
          animate="visible"
        >
          <Link
            to="/book-now"
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-md transition-colors duration-200 shadow-lg"
          >
            Book Your Stay
          </Link>
          <Link
            to="/apartments"
            className="border-2 border-white text-white font-bold py-3 px-8 rounded-md hover:bg-white hover:text-blue-600 transition-colors duration-200 shadow-lg"
          >
            Explore Apartments
          </Link>
        </motion.div>

       
      </div>
       <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ repeat: Infinity, repeatType: "reverse", duration: 1, delay: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center cursor-pointer z-30"
          onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
        >
          <p className="text-sm uppercase tracking-wider mb-2 drop-shadow-md">Scroll Down</p>
          <svg className="w-8 h-8 text-white drop-shadow-md" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </motion.div>
    </section>
  );
};

export default Hero;