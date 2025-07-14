import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import image1 from '../../assets/bg2.jpg'
import image2 from '../../assets/bg.jpg'
import image3 from '../../assets/bg3.jpg'

const IntroSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    <section className="bg-[#0B283A] text-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            className="lg:pr-10"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.p
              className="text-sm uppercase tracking-widest text-gray-400 mb-4"
              variants={itemVariants}
            >
              Welcome to SEASIDE TRANQUILITY
            </motion.p>
            <motion.h2
              className="text-4xl md:text-5xl font-bold leading-tight mb-6"
              variants={itemVariants}
            >
              Luxury Seaside Accommodations
            </motion.h2>
            <motion.p
              className="text-md md:text-lg text-gray-300 mb-8"
              variants={itemVariants}
            >
              Nested on the pristine Mediterranean coastline, MareSereno offers an exquisite collection of luxury apartments and hotel rooms. Our beachfront accommodations combine elegant design with modern comfort, creating the perfect setting for an unforgettable seaside getaway.
            </motion.p>
            <motion.p
              className="text-md md:text-lg text-gray-300 mb-10"
              variants={itemVariants}
            >
              Whether you're seeking a romantic escape, a family vacation, or a peaceful retreat, our diverse range of accommodations caters to every preference and need. Each space is thoughtfully designed to provide panoramic sea views and direct beach access.
            </motion.p>
            <motion.div variants={itemVariants}>
              <Link
                to="/learn-more"
                className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-md transition-colors duration-300"
              >
                Learn More
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            className="relative grid grid-cols-2 gap-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.img
              src={image1}
              alt="Luxury hotel room"
              className="col-span-2 w-full h-auto rounded-lg shadow-lg object-cover"
              variants={imageVariants}
            />
            <motion.img
              src={image2}
              alt="Tropical beach"
              className="col-span-1 w-full h-auto rounded-lg shadow-lg mt-[-20%] object-cover"
              variants={imageVariants}
            />
            <motion.img
              src={image3}
              alt="Beach umbrella"
              className="col-span-1 w-full h-auto rounded-lg shadow-lg object-cover"
              variants={imageVariants}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;