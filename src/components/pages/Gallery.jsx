import React, { useState, useEffect } from 'react';

import galleryImg1 from '../../assets/gal1.jpg';
import galleryImg2 from '../../assets/gal2.jpg';
import galleryImg3 from '../../assets/gal3.jpg';
import galleryImg4 from '../../assets/gal4.jpg';
import galleryImg5 from '../../assets/gal5.jpeg';
import galleryImg6 from '../../assets/gal6.jpeg';
import galleryImg7 from '../../assets/gal7.jpeg';
import galleryImg8 from '../../assets/gal8.jpg';
import galleryImg9 from '../../assets/gal9.jpg';
import galleryImg10 from '../../assets/gal10.jpg';
import galleryImg11 from '../../assets/gal11.jpg';
import galleryImg12 from '../../assets/gal12.jpg';

const galleryImages = [
  { id: 1, src: galleryImg1, category: 'rooms', alt: 'Modern hotel room' },
  { id: 2, src: galleryImg2, category: 'spa', alt: 'Relaxing spa area' },
  { id: 3, src: galleryImg3, category: 'rooms', alt: 'Luxurious bedroom' },
  { id: 4, src: galleryImg4, category: 'food', alt: 'Gourmet dining experience' },
  { id: 5, src: galleryImg5, category: 'rooms', alt: 'Spacious living area' },
  { id: 6, src: galleryImg6, category: 'spa', alt: 'Massage therapy room' },
  { id: 7, src: galleryImg7, category: 'food', alt: 'Breakfast buffet' },
  { id: 8, src: galleryImg8, category: 'rooms', alt: 'Suite with ocean view' },
  { id: 9, src: galleryImg9, category: 'spa', alt: 'Outdoor swimming pool' },
  { id: 10, src: galleryImg10, category: 'food', alt: 'Fine dining dish' },
  { id: 11, src: galleryImg11, category: 'rooms', alt: 'Cozy guest room' },
  { id: 12, src: galleryImg12, category: 'spa', alt: 'Fitness center' },
];

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [filteredImages, setFilteredImages] = useState(galleryImages);

  useEffect(() => {
    if (selectedCategory === 'all') {
      setFilteredImages(galleryImages);
    } else {
      setFilteredImages(galleryImages.filter(image => image.category === selectedCategory));
    }
  }, [selectedCategory]);

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <div className="max-w-6xl mx-auto pt-24">
        <h1 className="text-4xl font-bold text-center mb-4 text-blue-400">Photo Gallery</h1>
        <p className="text-center text-gray-300 mb-12">
          Explore our stunning collection of images showcasing our beautiful rooms, exquisite dining, and relaxing spa facilities.
        </p>

        {/* Category Filters */}
        <div className="flex justify-center space-x-4 mb-8">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`py-2 px-6 rounded-full font-semibold transition duration-300 ease-in-out
              ${selectedCategory === 'all' ? 'bg-blue-600 text-white' : 'bg-gray-700 text-gray-300 hover:bg-gray-600'}`}
          >
            ALL
          </button>
          <button
            onClick={() => setSelectedCategory('rooms')}
            className={`py-2 px-6 rounded-full font-semibold transition duration-300 ease-in-out
              ${selectedCategory === 'rooms' ? 'bg-blue-600 text-white' : 'bg-gray-700 text-gray-300 hover:bg-gray-600'}`}
          >
            ROOMS
          </button>
          <button
            onClick={() => setSelectedCategory('food')}
            className={`py-2 px-6 rounded-full font-semibold transition duration-300 ease-in-out
              ${selectedCategory === 'food' ? 'bg-blue-600 text-white' : 'bg-gray-700 hover:bg-gray-600'}`}
          >
            FOOD
          </button>
          <button
            onClick={() => setSelectedCategory('spa')}
            className={`py-2 px-6 rounded-full font-semibold transition duration-300 ease-in-out
              ${selectedCategory === 'spa' ? 'bg-blue-600 text-white' : 'bg-gray-700 text-gray-300 hover:bg-gray-600'}`}
          >
            SPA
          </button>
        </div>

        {/*Képek */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredImages.length > 0 ? (
            filteredImages.map(image => (
              <div key={image.id} className="bg-gray-800 rounded-lg shadow-lg overflow-hidden">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-56 object-cover transform hover:scale-105 transition duration-300 ease-in-out"
                />

                <div className="p-4">
                  <p className="text-gray-300 text-sm capitalize">{image.category}</p>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-400 col-span-full">No images found for this category.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Gallery;