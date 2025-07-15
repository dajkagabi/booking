import React, { useState } from 'react';
import { Avatar } from "@material-tailwind/react"; 

const testimonials = [
  {
    id: 1,
    name: 'Emma Johnson',
    location: 'London, UK',
    avatar: 'https://docs.material-tailwind.com/img/face-2.jpg', 
    rating: 5,
    quote: "We spent a wonderful week at this beachfront paradise. The sunrise views from our terrace were worth the trip alone. Exceptionally clean and beautifully designed spaces."
  },
  {
    id: 2,
    name: 'John Doe',
    location: 'New York, USA',
    avatar: 'https://docs.material-tailwind.com/img/face-3.jpg', 
    rating: 4,
    quote: "A truly relaxing getaway. The amenities were top-notch, and the staff was incredibly attentive. We'll definitely be back for another seaside stay."
  },
  {
    id: 3,
    name: 'Maria Sanchez',
    location: 'Madrid, Spain',
    avatar: 'https://docs.material-tailwind.com/img/face-4.jpg', 
    rating: 5,
    quote: "Simply stunning! The location is perfect, and the attention to detail in the design made our stay unforgettable. Highly recommended for anyone seeking tranquility."
  }
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="bg-gradient-to-b from-gray-900 to-blue-950 text-white py-20 px-4 md:px-8 lg:px-16">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">What Our Guests Say</h2>
        <p className="text-lg text-gray-300 mb-12">
          Discover why our guests keep coming back to MareSereno for their seaside getaways.
        </p>

        <div className="relative overflow-hidden">
          {/* Eltávolítva: AnimatePresence és motion.div */}
          <div className="bg-[#2D3E50] p-8 rounded-lg shadow-xl max-w-2xl mx-auto flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-8">
            <div className="flex-shrink-0 flex flex-col items-center">
              <Avatar
                src={currentTestimonial.avatar}
                alt={`${currentTestimonial.name}'s avatar`}
                size="xxl"
                className="border-4 border-[#2563EB] object-cover"
              />
              <div className="flex justify-center mt-3">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className={`h-5 w-5 ${i < currentTestimonial.rating ? 'text-yellow-400' : 'text-gray-600'}`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.817 2.042a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.538 1.118l-2.817-2.042a1 1 0 00-1.175 0l-2.817 2.042c-.783.57-1.838-.197-1.538-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.462a1 1 0 00.95-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <h3 className="text-xl font-semibold mt-4">{currentTestimonial.name}</h3>
              <p className="text-gray-400">{currentTestimonial.location}</p>
            </div>
            <div className="text-left flex-grow">
              <p className="italic text-lg leading-relaxed">"{currentTestimonial.quote}"</p>
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center mt-12 space-x-4">
          <button
            onClick={handlePrev}
            className="p-3 rounded-full bg-blue-700 hover:bg-blue-600 transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75"
            aria-label="Previous testimonial"
          >
            <svg
              className="h-6 w-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 19l-7-7 7-7"
              ></path>
            </svg>
          </button>

          <div className="flex space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full ${currentIndex === index ? 'bg-blue-600' : 'bg-gray-600'} hover:bg-blue-500 transition duration-300`}
                aria-label={`Go to testimonial ${index + 1}`}
              ></button>
            ))}
          </div>

          <button
            onClick={handleNext}
            className="p-3 rounded-full bg-blue-700 hover:bg-blue-600 transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75"
            aria-label="Next testimonial"
          >
            <svg
              className="h-6 w-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;