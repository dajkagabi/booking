import React from 'react';

const CheckDate = () => {
  return (
    <section className="bg-gray-900 text-white py-16 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start justify-between">
       
        <div className="lg:w-1/2 mb-10 lg:mb-0">
          <p className="text-sm font-semibold text-blue-400 mb-2 uppercase tracking-wider">
            Book Your Stay
          </p>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            Reserve Your Perfect Getaway
          </h1>
          <p className="text-gray-300 text-lg mb-8">
            Take the first step towards your dream vacation by checking availability and securing
            your preferred dates. Our simple booking process ensures a seamless experience
            from reservation to arrival.
          </p>
          <ul className="space-y-3">
            <li className="flex items-center text-gray-200">
              <svg
                className="w-5 h-5 mr-2 text-blue-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              Instant confirmation
            </li>
            <li className="flex items-center text-gray-200">
              <svg
                className="w-5 h-5 mr-2 text-blue-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              Best rate guarantee
            </li>
            <li className="flex items-center text-gray-200">
              <svg
                className="w-5 h-5 mr-2 text-blue-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              Flexible cancellation options
            </li>
            <li className="flex items-center text-gray-200">
              <svg
                className="w-5 h-5 mr-2 text-blue-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              Secure payment
            </li>
          </ul>
        </div>

   
        <div className="lg:w-2/5 w-full bg-gray-800 p-8 rounded-lg shadow-xl">
          <h2 className="text-2xl font-bold text-center mb-6">Book Your Stay</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div>
              <label htmlFor="checkin-date" className="block text-gray-300 text-sm font-semibold mb-2">
                Check-in Date
              </label>
              <div className="relative">
                <input
                  type="date"
                  id="checkin-date"
                  className="w-full p-3 pl-10 rounded-md bg-gray-700 border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  defaultValue="2025-07-15"
                />
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg
                    className="w-5 h-5 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>

            <div>
              <label htmlFor="checkout-date" className="block text-gray-300 text-sm font-semibold mb-2">
                Check-out Date
              </label>
              <div className="relative">
                <input
                  type="date"
                  id="checkout-date"
                  className="w-full p-3 pl-10 rounded-md bg-gray-700 border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  defaultValue="2025-07-18" 
                />
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg
                    className="w-5 h-5 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <div>
              <label htmlFor="adults" className="block text-gray-300 text-sm font-semibold mb-2">
                Adults
              </label>
              <div className="relative">
                <select
                  id="adults"
                  className="w-full p-3 pr-10 rounded-md bg-gray-700 border border-gray-600 text-white appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="1">1 Adult</option>
                  <option value="2" selected>2 Adults</option>
                  <option value="3">3 Adults</option>
                  <option value="4">4 Adults</option>
                </select>
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                  <svg
                    className="w-5 h-5 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>

            <div>
              <label htmlFor="children" className="block text-gray-300 text-sm font-semibold mb-2">
                Children
              </label>
              <div className="relative">
                <select
                  id="children"
                  className="w-full p-3 pr-10 rounded-md bg-gray-700 border border-gray-600 text-white appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="0" selected>0 Children</option>
                  <option value="1">1 Child</option>
                  <option value="2">2 Children</option>
                  <option value="3">3 Children</option>
                  <option value="4">4 Children</option>
                  <option value="5">5 Children</option>
                </select>
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                  <svg
                    className="w-5 h-5 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>

          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-md flex items-center justify-center transition duration-300 ease-in-out">
            <svg
              className="w-5 h-5 mr-2"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
                clipRule="evenodd"
              />
            </svg>
            Check Availability
          </button>
        </div>
      </div>
    
    </section>
  );
};

export default CheckDate;