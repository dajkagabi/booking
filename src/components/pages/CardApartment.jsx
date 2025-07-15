import React from 'react';
import AccommodationCard from '../AccommodationCard';
import { motion } from 'framer-motion'; 
import ap1 from '../../assets/ap.jpg';
import ex from '../../assets/ex.jpg'
import k from '../../assets/k.jpg';
import { Link } from "react-router-dom";


const accommodations = [
  {
    id: 1,
    image: ap1, 
    title: 'Deluxe Sea View Suite',
    subtitle: 'Beachfront',
    guests: 2,
    size: '45 m²',
    description: 'Luxurious suite with panoramic sea views, modern amenities, and a private balcony.',
    amenities: ['Wi-Fi', 'Kitchen', 'Bathroom', '+3 more'],
    price: 180,
  },
  {
    id: 2,
    image: ex, 
    title: 'Premium Family Apartment',
    subtitle: 'Second row',
    guests: 4,
    size: '75 m²',
    description: 'Spacious apartment ideal for families, with full kitchen and stunning coastal views.',
    amenities: ['Wi-Fi', 'Kitchen', 'Bathroom', '+3 more'],
    price: 250,
  },
  {
    id: 3,
    image: k, 
    title: 'Executive Beach Studio',
    subtitle: 'Beachfront',
    guests: 2,
    size: '35 m²',
    description: 'Elegant studio with direct beach access, modern design, and premium finishes.',
    amenities: ['Wi-Fi', 'Kitchenette', 'Bathroom', '+2 more'],
    price: 150,
  },
];

const AccommodationSection = () => {
  return (
    <section className="bg-gray-900 py-16 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center text-white mb-12">Our Accommodations</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {accommodations.map((acc) => (
            <motion.div
              key={acc.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: acc.id * 0.1 }} 
            >
              <AccommodationCard
                image={acc.image}
                title={acc.title}
                subtitle={acc.subtitle}
                guests={acc.guests}
                size={acc.size}
                description={acc.description}
                amenities={acc.amenities}
                price={acc.price}
              />
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-12">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition duration-300"
          >
         <Link to="/apartments" className="text-white text-2xl font-bold">
               View All Apartments
            </Link>
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default AccommodationSection;