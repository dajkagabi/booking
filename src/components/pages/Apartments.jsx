import React, { useState, useEffect } from 'react';
import ap1 from '../../assets/ap.jpg';

const apartmentsData = [
  {
    id: 1,
    name: 'Deluxe Sea View Suite',
    description: 'Luxurious suite with panoramic sea views, modern amenities, and a private balcony.',
    image: ap1,
    guests: 2,
    size: '45 m²',
    view: 'Beachfront',
    price: 180,
    location: 'Coastal',
  },
  {
    id: 2,
    name: 'Standard City View Room',
    description: 'Comfortable room with city views, ideal for short stays.',
    image: ap1,
    guests: 1,
    size: '25 m²',
    view: 'City view',
    price: 90,
    location: 'City Center',
  },
  {
    id: 3,
    name: 'Family Garden Apartment',
    description: 'Spacious apartment with a private garden access, perfect for families.',
    image: ap1,
    guests: 4,
    size: '70 m²',
    view: 'Garden view',
    price: 250,
    location: 'Suburban',
  },
  {
    id: 4,
    name: 'Penthouse with Rooftop Pool',
    description: 'Exclusive penthouse with private rooftop pool and stunning panoramic views.',
    image: ap1,
    guests: 6,
    size: '120 m²',
    view: 'Panoramic',
    price: 500,
    location: 'Coastal',
  },
  {
    id: 5,
    name: 'Cozy Studio Downtown',
    description: 'Small but comfortable studio apartment in the heart of the city.',
    image: ap1,
    guests: 1,
    size: '20 m²',
    view: 'City view',
    price: 120,
    location: 'City Center',
  },
  {
    id: 6,
    name: 'Luxury Villa with Private Beach',
    description: 'Spacious villa offering direct access to a private beach.',
    image: 'https://via.placeholder.com/400x300?text=Apartment+6',
    guests: 8,
    size: '200 m²',
    view: 'Beachfront',
    price: 800,
    location: 'Coastal',
  },
  {
    id: 7,
    name: 'Modern Lakeside Retreat',
    description: 'Contemporary apartment with stunning lake views, perfect for a peaceful getaway.',
    image: 'https://via.placeholder.com/400x300?text=Apartment+7',
    guests: 3,
    size: '55 m²',
    view: 'Lake view',
    price: 200,
    location: 'Lakeside',
  },
  {
    id: 8,
    name: 'Charming Old Town Studio',
    description: 'Quaint studio located in the historic old town, steps away from attractions.',
    image: 'https://via.placeholder.com/400x300?text=Apartment+8',
    guests: 2,
    size: '30 m²',
    view: 'Street view',
    price: 150,
    location: 'City Center',
  },
  {
    id: 9,
    name: 'Mountain View Chalet',
    description: 'Rustic yet luxurious chalet nestled in the mountains with breathtaking views.',
    image: 'https://via.placeholder.com/400x300?text=Apartment+9',
    guests: 5,
    size: '90 m²',
    view: 'Mountain view',
    price: 350,
    location: 'Mountain',
  },
  {
    id: 10,
    name: 'Riverside Loft',
    description: 'Stylish loft apartment overlooking the river, ideal for urban explorers.',
    image: 'https://via.placeholder.com/400x300?text=Apartment+10',
    guests: 2,
    size: '60 m²',
    view: 'River view',
    price: 220,
    location: 'City Center',
  },
];

const ApartmentsPage = () => {
  const [guests, setGuests] = useState('');
  const [location, setLocation] = useState('');
  const [minPrice, setMinPrice] = useState(100);
  const [maxPrice, setMaxPrice] = useState(350);
  const [filteredApartments, setFilteredApartments] = useState(apartmentsData);

  const allLocations = [...new Set(apartmentsData.map(apt => apt.location))];

  useEffect(() => {
    const applyFilters = () => {
      let tempApartments = apartmentsData;

      if (guests !== '' && guests !== 'Any number of guests') {
        tempApartments = tempApartments.filter(apartment => apartment.guests >= parseInt(guests));
      }

      if (location !== '' && location !== 'All locations') {
        tempApartments = tempApartments.filter(apartment => apartment.location === location);
      }

      tempApartments = tempApartments.filter(apartment =>
        apartment.price >= minPrice && apartment.price <= maxPrice
      );

      setFilteredApartments(tempApartments);
    };

    applyFilters();
  }, [guests, location, minPrice, maxPrice]);

  const resetFilters = () => {
    setGuests('');
    setLocation('');
    setMinPrice(100);
    setMaxPrice(350);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      
      <div className="max-w-6xl mx-auto pt-24">
        <h1 className="text-4xl font-bold text-center mb-8">Our Apartments & Rooms</h1>
        <p className="text-center text-white mb-8">
          Discover our selection of premium accommodations, ranging from cozy studios to luxurious penthouses.
        </p>

        <div className="bg-gray-800 rounded-lg p-6 mb-8 shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-end">
            <div>
              <label htmlFor="guests" className="block text-white text-sm font-bold mb-2">Guests</label>
              <select
                id="guests"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline bg-gray-700 border-gray-600"
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
              >
                <option value="">Any number of guests</option>
                {[...Array(10).keys()].map(i => (
                  <option key={i + 1} value={i + 1}>{i + 1} {i + 1 > 1 ? 'Guests' : 'Guest'}</option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="location" className="block text-white text-sm font-bold mb-2">Location</label>
              <select
                id="location"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline bg-gray-700 border-gray-600"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              >
                <option value="">All locations</option>
                {allLocations.map(loc => (
                  <option key={loc} value={loc}>{loc}</option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="price-range" className="block text-white text-sm font-bold mb-2">Price Range: ${minPrice} - ${maxPrice}</label>
              <input
                type="range"
                id="price-range"
                min="0"
                max="1000"
                value={maxPrice}
                onChange={(e) => setMaxPrice(Number(e.target.value))}
                className="w-full h-2 bg-gray-600 rounded-lg appearance-none cursor-pointer"
              />
            </div>
          </div>
          <div className="flex justify-between items-center mt-6 pt-4 border-t border-gray-700">
            <span className="text-white">Showing {filteredApartments.length} of {apartmentsData.length} accommodations</span>
            <button
              onClick={resetFilters}
              className="bg-transparent hover:bg-gray-700 text-gray-300 font-bold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline border border-gray-600"
            >
              Reset Filters
            </button>
          </div>
        </div>

        <h2 className="text-2xl font-semibold mb-4">Select Your Accommodation</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredApartments.length > 0 ? (
            filteredApartments.map(apartment => (
              <div key={apartment.id} className="bg-gray-800 rounded-lg shadow-lg overflow-hidden">
                <img src={apartment.image} alt={apartment.name} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{apartment.name}</h3>
                  <p className="text-gray-400 mb-4 text-sm">{apartment.description}</p>
                  <div className="flex items-center text-gray-300 text-sm mb-4">
                    <span className="flex items-center mr-4">
                      <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path></svg>
                      {apartment.guests} Guests
                    </span>
                    <span className="flex items-center mr-4">
                      <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M4 3a2 2 0 100 4h12a2 2 0 100-4H4z"></path><path fillRule="evenodd" d="M3 8h14v7a2 2 0 01-2 2H5a2 2 0 01-2-2V8zm5 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                      {apartment.size}
                    </span>
                    <span className="flex items-center">
                      <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h12v6a2 2 0 002-2V6a2 2 0 00-2-2H4zm12 14v-6a2 2 0 00-2-2H8a2 2 0 00-2 2v6H4v2h12v-2h-2z" clipRule="evenodd"></path></svg>
                      {apartment.view}
                    </span>
                  </div>
                  <div className="flex justify-between items-center mt-auto">
                    <span className="text-2xl font-bold text-blue-400">${apartment.price} <span className="text-lg font-normal text-gray-400">/ night</span></span>
                    <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline">
                      Select
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-400 col-span-full">No apartments found matching your criteria.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ApartmentsPage;