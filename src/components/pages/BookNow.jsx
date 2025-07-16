import React, { useState } from 'react';
import ChooseRoom from './ChooseRoom';
import GuestDetails from './GuestDetails';
import Confirmation from './Confirmation';

const BookNow = () => {
  //Állapot kezelés
  const [currentStep, setCurrentStep] = useState(1);
  const [bookingDetails, setBookingDetails] = useState({
    room: null,
    guests: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      address: '',
      city: '',
      zipCode: '',
      country: '',
      specialRequests: '',
    },
    payment: {
      method: 'creditCard',
      cardName: '',
      cardNumber: '',
      expiryDate: '',
      cvc: '',
    },
    dates: {
        checkIn: new Date(),
        checkOut: new Date(new Date().setDate(new Date().getDate() + 7)),
        nights: 7,
    },
    priceSummary: {
        basePrice: 0,
        cleaningFee: 50,
        serviceFee: 30,
        total: 0,
    }
  });

  //szoba lista
  const availableRooms = [
    {
      id: 'executive-beach-studio',
      name: 'Executive Beach Studio',
      description: 'Beachfront',
      pricePerNight: 150,
      image: 'https://via.placeholder.com/400x250?text=Executive+Beach+Studio',
    },
    {
      id: 'luxury-penthouse',
      name: 'Luxury Penthouse',
      description: 'Panoramic views',
      pricePerNight: 300,
      image: 'https://via.placeholder.com/400x250?text=Luxury+Penthouse',
    },
    {
        id: 'family-apartment',
        name: 'Family Apartment',
        description: 'Spacious for families',
        pricePerNight: 200,
        image: 'https://via.placeholder.com/400x250?text=Family+Apartment',
      },
      {
        id: 'standard-double',
        name: 'Standard Double Room',
        description: 'Cozy and comfortable',
        pricePerNight: 100,
        image: 'https://via.placeholder.com/400x250?text=Standard+Double+Room',
      },
  ];

  //Fogalalási részletek
  const updateBookingDetails = (newData) => {
    setBookingDetails((prevDetails) => {
      const updatedDetails = { ...prevDetails, ...newData };
  //Árak újraszámolása (szoba + éjszaka)
      if (updatedDetails.room && updatedDetails.dates.nights) {
          const basePrice = updatedDetails.room.pricePerNight * updatedDetails.dates.nights;
          updatedDetails.priceSummary.basePrice = basePrice;
          updatedDetails.priceSummary.total = basePrice + updatedDetails.priceSummary.cleaningFee + updatedDetails.priceSummary.serviceFee;
      }

      return updatedDetails;
    });
  };

  //Foglalási folyamat továbbiak
  const goToNextStep = () => {
    setCurrentStep((prevStep) => prevStep + 1);
  };

  const goToPreviousStep = () => {
    setCurrentStep((prevStep) => prevStep - 1);
  };

  //Aktuális lépés
  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <ChooseRoom
            rooms={availableRooms}
            selectedRoom={bookingDetails.room}
            onSelectRoom={(room) => updateBookingDetails({ room })}
            onNext={goToNextStep}
            bookingDetails={bookingDetails}
            updateBookingDetails={updateBookingDetails}
          />
        );
      case 2:
        return (
          <GuestDetails
            guestData={bookingDetails.guests}
            paymentData={bookingDetails.payment}
            bookingSummary={bookingDetails}
            onUpdateGuests={(guests) => updateBookingDetails({ guests })}
            onUpdatePayment={(payment) => updateBookingDetails({ payment })}
            onNext={goToNextStep}
            onBack={goToPreviousStep}
          />
        );
      case 3:
        return (
          <Confirmation
            bookingDetails={bookingDetails}
            onConfirm={() => alert('Booking confirmed! (This is just an example)')}
            onBack={goToPreviousStep}
          />
        );
      default:
        return <p>An error occurred.</p>;
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 py-16 px-8">
      <div className="max-w-4xl mx-auto bg-gray-800 rounded-lg shadow-xl p-6">
        <h1 className="text-3xl font-bold text-center mb-8 text-blue-400">Book Your Stay</h1>

        <div className="flex justify-between items-center mb-8 text-sm">
          <div className={`flex flex-col items-center ${currentStep === 1 ? 'text-blue-400' : 'text-gray-500'}`}>
            <div className={`w-8 h-8 flex items-center justify-center rounded-full border-2 ${currentStep === 1 ? 'border-blue-400 bg-blue-400 text-white' : 'border-gray-500'}`}>1</div>
            <span className="mt-2">Choose Room</span>
          </div>
          <div className="flex-1 h-px bg-gray-700 mx-2"></div>
          <div className={`flex flex-col items-center ${currentStep === 2 ? 'text-blue-400' : 'text-gray-500'}`}>
            <div className={`w-8 h-8 flex items-center justify-center rounded-full border-2 ${currentStep === 2 ? 'border-blue-400 bg-blue-400 text-white' : 'border-gray-500'}`}>2</div>
            <span className="mt-2">Guest Details</span>
          </div>
          <div className="flex-1 h-px bg-gray-700 mx-2"></div>
          <div className={`flex flex-col items-center ${currentStep === 3 ? 'text-blue-400' : 'text-gray-500'}`}>
            <div className={`w-8 h-8 flex items-center justify-center rounded-full border-2 ${currentStep === 3 ? 'border-blue-400 bg-blue-400 text-white' : 'border-gray-500'}`}>3</div>
            <span className="mt-2">Confirmation</span>
          </div>
        </div>

        {renderStep()}
      </div>
    </div>
  );
};

export default BookNow;