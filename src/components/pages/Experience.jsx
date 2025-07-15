import React from 'react';
import { motion } from 'framer-motion';
import {
  BeachAccess,
  Pool,
  Restaurant,
  Wifi,
  LocalBar,
  LocationOn,
} from '@mui/icons-material';

const amenitiesData = [
  {
    icon: <BeachAccess className="w-10 h-10 text-blue-400 mb-4" />,
    title: 'Beachfront Location',
    description: 'Direct access to pristine beaches with crystal clear waters.',
  },
  {
    icon: <Pool className="w-10 h-10 text-blue-400 mb-4" />,
    title: 'Swimming Pools',
    description: 'Relax by our infinity pools with stunning sea views.',
  },
  {
    icon: <Restaurant className="w-10 h-10 text-blue-400 mb-4" />,
    title: 'Gourmet Restaurant',
    description: 'Enjoy exquisite local and international cuisine.',
  },
  {
    icon: <Wifi className="w-10 h-10 text-blue-400 mb-4" />,
    title: 'High-Speed Wi-Fi',
    description: 'Stay connected with complimentary high-speed internet.',
  },
  {
    icon: <LocalBar className="w-10 h-10 text-blue-400 mb-4" />,
    title: 'Beach Bar & Café',
    description: 'Refreshing drinks and snacks served right on the beach.',
  },
  {
    icon: <LocationOn className="w-10 h-10 text-blue-400 mb-4" />,
    title: 'Prime Location',
    description: 'Close to local attractions, shops, and restaurants.',
  },
];

const AmenityCard = ({ icon, title, description, index }) => {
  return (
    <motion.div
      className="bg-gray-800 p-6 rounded-lg shadow-lg text-center flex flex-col items-center justify-center h-full"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      {icon}
      <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
      <p className="text-gray-400 text-sm">{description}</p>
    </motion.div>
  );
};

const Amenities = () => {
  return (
    <section className="bg-gray-900 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-blue-400 uppercase tracking-widest text-sm mb-2">Hotel Amenities</p>
        <h2 className="text-4xl font-bold text-white mb-4">Experience The Best</h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-12">
          Enjoy our premium facilities and services designed to make your stay exceptional.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {amenitiesData.map((amenity, index) => (
            <AmenityCard
              key={amenity.title}
              icon={amenity.icon}
              title={amenity.title}
              description={amenity.description}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Amenities;