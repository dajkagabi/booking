import React from 'react';

const Confirmation = ({ bookingDetails, onConfirm, onBack }) => {
  const { room, guests, payment, dates, priceSummary } = bookingDetails;

  if (!room) {
    return (
      <div className="p-4 text-center text-gray-400">
        <p>No room selected. Please go back to the first step.</p>
        <button
          onClick={onBack}
          className="mt-4 bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-6 rounded-md transition duration-300 ease-in-out"
        >
          Back
        </button>
      </div>
    );
  }

  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-6 text-gray-200">Booking Review and Confirmation</h2>

      <div className="bg-gray-700 p-6 rounded-lg shadow-md mb-6">
        <h3 className="text-lg font-bold mb-4 text-blue-400">Accommodation Details</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-300">
          <div>
            <img src={room.image} alt={room.name} className="w-full h-48 object-cover rounded-md mb-2" />
            <p className="font-semibold">{room.name}</p>
            <p className="text-sm">{room.description}</p>
          </div>
          <div>
            <p>Check-in: <span className="font-semibold">{dates.checkIn.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric', year: 'numeric' })}</span></p>
            <p>Check-out: <span className="font-semibold">{dates.checkOut.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric', year: 'numeric' })}</span></p>
            <p>Number of nights: <span className="font-semibold">{dates.nights} nights</span></p>
            <p>Guests: <span className="font-semibold">{guests.numberOfAdults || 2} adults</span></p>
          </div>
        </div>
      </div>

      <div className="bg-gray-700 p-6 rounded-lg shadow-md mb-6">
        <h3 className="text-lg font-bold mb-4 text-blue-400">Guest Information</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-300">
          <div>
            <p><span className="font-semibold">Name:</span> {guests.firstName} {guests.lastName}</p>
            <p><span className="font-semibold">Email:</span> {guests.email}</p>
            <p><span className="font-semibold">Phone:</span> {guests.phone}</p>
          </div>
          <div>
            <p><span className="font-semibold">Address:</span> {guests.address}</p>
            <p><span className="font-semibold">City:</span> {guests.city}</p>
            <p><span className="font-semibold">Zip Code:</span> {guests.zipCode}</p>
            <p><span className="font-semibold">Country:</span> {guests.country}</p>
          </div>
        </div>
        {guests.specialRequests && (
            <p className="mt-4"><span className="font-semibold">Special Requests:</span> {guests.specialRequests}</p>
        )}
      </div>

      <div className="bg-gray-700 p-6 rounded-lg shadow-md mb-6">
        <h3 className="text-lg font-bold mb-4 text-blue-400">Payment Details</h3>
        <div className="text-gray-300">
          <p><span className="font-semibold">Payment Method:</span> {payment.method === 'creditCard' ? 'Credit Card' : 'Pay at Property'}</p>
          {payment.method === 'creditCard' && (
            <>
              <p><span className="font-semibold">Cardholder Name:</span> {payment.cardName}</p>
              <p><span className="font-semibold">Card Number:</span> **** **** **** {payment.cardNumber.slice(-4)}</p>
              <p><span className="font-semibold">Expiry Date:</span> {payment.expiryDate}</p>
            </>
          )}
        </div>
      </div>

      <div className="bg-gray-700 p-6 rounded-lg shadow-md mb-6">
        <h3 className="text-lg font-bold mb-4 text-blue-400">Price Summary</h3>
        <div className="space-y-2 text-gray-300">
          <p className="flex justify-between">Base Price ({dates.nights} nights): <span>${priceSummary.basePrice}</span></p>
          <p className="flex justify-between">Cleaning Fee: <span>${priceSummary.cleaningFee}</span></p>
          <p className="flex justify-between">Service Fee: <span>${priceSummary.serviceFee}</span></p>
          <p className="flex justify-between font-bold text-xl mt-4 text-white">Total: <span>${priceSummary.total}</span></p>
        </div>
      </div>

      <div className="bg-gray-700 p-6 rounded-lg shadow-md mb-6">
        <p className="text-sm text-gray-400">
          By clicking "Confirm Booking", you agree to the <a href="#" className="text-blue-400 hover:underline">Terms and Conditions</a> and <a href="#" className="text-blue-400 hover:underline">Privacy Policy</a>.
        </p>
      </div>

      <div className="flex justify-between mt-6">
        <button
          onClick={onBack}
          className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-6 rounded-md transition duration-300 ease-in-out"
        >
          Back
        </button>
        <button
          onClick={onConfirm}
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-md transition duration-300 ease-in-out"
        >
          Confirm Booking
        </button>
      </div>
    </div>
  );
};

export default Confirmation;