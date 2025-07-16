import React, { useState, useEffect } from 'react';

const ChooseRoom = ({ rooms, selectedRoom, onSelectRoom, onNext, bookingDetails, updateBookingDetails }) => {
  const [checkInDate, setCheckInDate] = useState(bookingDetails.dates.checkIn.toISOString().split('T')[0]);
  const [checkOutDate, setCheckOutDate] = useState(bookingDetails.dates.checkOut.toISOString().split('T')[0]);
  const [numberOfGuests, setNumberOfGuests] = useState(2);

  useEffect(() => {
    const calculateNights = (start, end) => {
        const diffTime = Math.abs(new Date(end) - new Date(start));
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        return diffDays;
    };

    const nights = calculateNights(checkInDate, checkOutDate);

    updateBookingDetails({
      dates: {
        checkIn: new Date(checkInDate),
        checkOut: new Date(checkOutDate),
        nights: nights > 0 ? nights : 1,
      },
      guests: {
        ...bookingDetails.guests,
        numberOfAdults: numberOfGuests,
      }
    });
  }, [checkInDate, checkOutDate, numberOfGuests]);

  const handleNextClick = () => {
    if (!selectedRoom) {
      alert('Please select a room!');
      return;
    }
    if (new Date(checkInDate) >= new Date(checkOutDate)) {
        alert('Check-out date must be after check-in date!');
        return;
    }
    onNext();
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-4 text-gray-200">Choose Room and Dates</h2>

      <div className="bg-gray-700 p-4 rounded-lg mb-6 shadow-md">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          <div>
            <label htmlFor="checkIn" className="block text-sm font-medium text-gray-300">Check-in</label>
            <input
              type="date"
              id="checkIn"
              className="mt-1 block w-full p-2 bg-gray-900 border border-gray-600 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-gray-100"
              value={checkInDate}
              onChange={(e) => setCheckInDate(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="checkOut" className="block text-sm font-medium text-gray-300">Check-out</label>
            <input
              type="date"
              id="checkOut"
              className="mt-1 block w-full p-2 bg-gray-900 border border-gray-600 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-gray-100"
              value={checkOutDate}
              onChange={(e) => setCheckOutDate(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="guests" className="block text-sm font-medium text-gray-300">Guests</label>
            <select
              id="guests"
              className="mt-1 block w-full p-2 bg-gray-900 border border-gray-600 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-gray-100"
              value={numberOfGuests}
              onChange={(e) => setNumberOfGuests(parseInt(e.target.value, 10))}
            >
              <option value="1">1 adult</option>
              <option value="2">2 adults</option>
              <option value="3">3 adults</option>
              <option value="4">4 adults</option>
            </select>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        {rooms.map((room) => (
          <div
            key={room.id}
            className={`flex items-center bg-gray-700 rounded-lg shadow-md overflow-hidden cursor-pointer
                        ${selectedRoom && selectedRoom.id === room.id ? 'border-2 border-blue-500 ring-2 ring-blue-500' : 'border border-gray-600'}`}
            onClick={() => onSelectRoom(room)}
          >
            <img src={room.image} alt={room.name} className="w-32 h-32 object-cover" />
            <div className="p-4 flex-grow">
              <h3 className="text-lg font-bold text-blue-400">{room.name}</h3>
              <p className="text-gray-300 text-sm">{room.description}</p>
              <p className="text-lg font-semibold mt-2 text-gray-100">${room.pricePerNight} / night</p>
            </div>
            {selectedRoom && selectedRoom.id === room.id && (
              <svg className="w-6 h-6 text-blue-500 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
            )}
          </div>
        ))}
      </div>

      <div className="flex justify-end mt-6">
        <button
          onClick={handleNextClick}
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-md transition duration-300 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={!selectedRoom || new Date(checkInDate) >= new Date(checkOutDate)}
        >
          Proceed to Guest Details
        </button>
      </div>
    </div>
  );
};

export default ChooseRoom;