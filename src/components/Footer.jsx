import React from 'react';
import { Link } from 'react-router-dom';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-16 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

        <div>
          <h3 className="text-white text-2xl font-bold mb-4">SEASIDE TRANQUILITY</h3>
          <p className="text-sm leading-relaxed mb-6">
            Luxurious beachfront apartments and hotel rooms with stunning sea views,
            offering the perfect blend of comfort and elegance for your dream vacation.
          </p>
          <div className="flex space-x-4">
           
            <a href="#" className="text-gray-400 hover:text-blue-400 transition duration-300">
              <FacebookIcon sx={{ fontSize: 28 }} /> 
            </a>
           
            <a href="#" className="text-gray-400 hover:text-blue-400 transition duration-300">
              <InstagramIcon sx={{ fontSize: 28 }} /> 
            </a>
          </div>
        </div>

     
        <div>
          <h3 className="text-white text-xl font-bold mb-4">Quick Links</h3>
          <ul className="space-y-3 text-sm">
            <li><Link to="/" className="hover:text-blue-400 transition duration-300">Home</Link></li>
            <li><Link to="/apartments-overview" className="hover:text-blue-400 transition duration-300">Apartments</Link></li>
            <li><Link to="/amenities" className="hover:text-blue-400 transition duration-300">Amenities</Link></li>
            <li><Link to="/gallery" className="hover:text-blue-400 transition duration-300">Gallery</Link></li>
            <li><Link to="/contact" className="hover:text-blue-400 transition duration-300">Contact</Link></li>
            <li><Link to="/book-now" className="hover:text-blue-400 transition duration-300">Book Now</Link></li>
          </ul>
        </div>

       
        <div>
          <h3 className="text-white text-xl font-bold mb-4">Contact</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start">
              <LocationOnIcon className="text-gray-400 mr-2 flex-shrink-0" sx={{ fontSize: 20 }} />
              <span>123 Seaside Boulevard, Costa Bella, 12345 Italy</span>
            </li>
            <li className="flex items-center">
              <PhoneIcon className="text-gray-400 mr-2 flex-shrink-0" sx={{ fontSize: 20 }} />
              <span>+39 123 4567 890</span>
            </li>
            <li className="flex items-center">
              <EmailIcon className="text-gray-400 mr-2 flex-shrink-0" sx={{ fontSize: 20 }} />
              <span>info@maresereno.com</span>
            </li>
          </ul>
        </div>

       
        <div>
          <h3 className="text-white text-xl font-bold mb-4">Newsletter</h3>
          <p className="text-sm mb-4">
            Subscribe to our newsletter for special deals and updates.
          </p>
          <form className="flex flex-col space-y-3">
            <input
              type="email"
              placeholder="Your email address"
              className="p-3 rounded-md bg-gray-700 border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-blue-600 text-white rounded-md font-semibold hover:bg-blue-700 transition duration-300"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;