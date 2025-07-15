import React from 'react';
import { motion } from 'framer-motion'; 

const AccommodationCard = ({ image, title, subtitle, guests, size, description, amenities, price }) => {
  return (
    <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden flex flex-col h-full">
      <img src={image} alt={title} className="w-full h-88 object-cover" />
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
        <p className="text-gray-400 text-sm mb-4">{subtitle}</p>
        <div className="flex items-center text-gray-300 text-sm mb-4">
          <span className="mr-4 flex items-center">
            <svg className="w-4 h-4 mr-1 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
            </svg>
            {guests} Guests
          </span>
          <span className="flex items-center">
            <svg className="w-4 h-4 mr-1 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a3 3 0 00-3-3H8z" clipRule="evenodd" />
            </svg>
            {size}
          </span>
        </div>
        <p className="text-gray-300 text-sm flex-grow mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 text-sm text-gray-400 mb-4">
          {amenities.map((amenity, index) => (
            <span key={index} className="flex items-center bg-gray-700 px-3 py-1 rounded-full">
           
              {amenity}
            </span>
          ))}
        </div>
        <div className="mt-auto flex justify-between items-center pt-4 border-t border-gray-700">
          <span className="text-2xl font-bold text-white">${price}<span className="text-sm text-gray-400">/night</span></span>
          <motion.button
            whileHover={{ scale: 1.05 }} 
            whileTap={{ scale: 0.95 }}   
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition duration-300"
          >
            View Details
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default AccommodationCard;