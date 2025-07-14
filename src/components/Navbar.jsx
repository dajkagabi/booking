import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="fixed w-full top-0 z-50 bg-transparent"> {/* Mindig átlátszó háttér */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="text-white text-2xl font-bold">
          SEASIDE TRANQUILITY
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-white hover:text-blue-400 transition-colors duration-200">Home</Link>
            <Link to="/apartments" className="text-white hover:text-blue-400 transition-colors duration-200">Apartments</Link>
            <Link to="/amenities" className="text-white hover:text-blue-400 transition-colors duration-200">Amenities</Link>
            <Link to="/gallery" className="text-white hover:text-blue-400 transition-colors duration-200">Contact</Link>
            <Link
              to="/book-now"
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md transition-colors duration-200"
            >
              Book Now
            </Link>
          </div>
          <div className="md:hidden flex items-center">
            <button className="text-white focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;