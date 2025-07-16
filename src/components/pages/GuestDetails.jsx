import React, { useState, useEffect } from "react";

//Űrlapok
const GuestDetails = ({
  guestData,
  paymentData,
  bookingSummary,
  onUpdateGuests,
  onUpdatePayment,
  onNext,
  onBack,
}) => {
  const [formData, setFormData] = useState({ ...guestData, ...paymentData });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    setFormData({ ...guestData, ...paymentData });
  }, [guestData, paymentData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  //Űrlap érvényesítése
  const validateForm = () => {
    const newErrors = {};
    if (!formData.firstName.trim())
      newErrors.firstName = "First name is required.";
    if (!formData.lastName.trim())
      newErrors.lastName = "Last name is required.";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email address.";
    }
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required.";
    if (!formData.address.trim()) newErrors.address = "Address is required.";
    if (!formData.city.trim()) newErrors.city = "City is required.";
    if (!formData.zipCode.trim()) newErrors.zipCode = "Zip code is required.";
    if (!formData.country.trim()) newErrors.country = "Country is required.";

    if (formData.method === "creditCard") {
      if (!formData.cardName.trim())
        newErrors.cardName = "Cardholder name is required.";
      if (!formData.cardNumber.trim()) {
        newErrors.cardNumber = "Card number is required.";
      } else if (!/^\d{16}$/.test(formData.cardNumber.replace(/\s/g, ""))) {
        newErrors.cardNumber = "Card number must be 16 digits.";
      }
      if (!formData.expiryDate.trim()) {
        newErrors.expiryDate = "Expiry date is required.";
      } else if (!/^(0[1-9]|1[0-2])\/?([0-9]{2})$/.test(formData.expiryDate)) {
        newErrors.expiryDate = "Invalid expiry date (MM/YY format).";
      }
      if (!formData.cvc.trim()) {
        newErrors.cvc = "CVC is required.";
      } else if (!/^\d{3,4}$/.test(formData.cvc)) {
        newErrors.cvc = "Invalid CVC (3 or 4 digits).";
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  //Űrlap elküldés
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      const {
        firstName,
        lastName,
        email,
        phone,
        address,
        city,
        zipCode,
        country,
        specialRequests,
        ...paymentFields
      } = formData;
      onUpdateGuests({
        firstName,
        lastName,
        email,
        phone,
        address,
        city,
        zipCode,
        country,
        specialRequests,
      });
      onUpdatePayment(paymentFields);
      onNext();
    }
  };

  //Bankkártya
  const formatCardNumber = (value) => {
    const cleanedValue = value.replace(/\s/g, "");
    const parts = [];
    for (let i = 0; i < cleanedValue.length; i += 4) {
      parts.push(cleanedValue.substring(i, i + 4));
    }
    return parts.join(" ");
  };
  //Lejárati adatok
  const formatExpiryDate = (value) => {
    const cleanedValue = value.replace(/\D/g, "");
    if (cleanedValue.length > 2) {
      return cleanedValue.substring(0, 2) + "/" + cleanedValue.substring(2, 4);
    }
    return cleanedValue;
  };

  return (
    <div className="p-4 grid grid-cols-1 md:grid-cols-3 gap-8">
      <div className="md:col-span-2">
        <h2 className="text-xl font-semibold mb-4 text-gray-200">
          Guest Details
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="firstName"
                className="block text-sm font-medium text-gray-300"
              >
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="mt-1 block w-full p-2 bg-gray-900 border border-gray-600 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-gray-100"
              />
              {errors.firstName && (
                <p className="text-red-400 text-xs mt-1">{errors.firstName}</p>
              )}
            </div>
            <div>
              <label
                htmlFor="lastName"
                className="block text-sm font-medium text-gray-300"
              >
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="mt-1 block w-full p-2 bg-gray-900 border border-gray-600 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-gray-100"
              />
              {errors.lastName && (
                <p className="text-red-400 text-xs mt-1">{errors.lastName}</p>
              )}
            </div>
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-300"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 block w-full p-2 bg-gray-900 border border-gray-600 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-gray-100"
            />
            {errors.email && (
              <p className="text-red-400 text-xs mt-1">{errors.email}</p>
            )}
          </div>
          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-300"
            >
              Phone
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="mt-1 block w-full p-2 bg-gray-900 border border-gray-600 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-gray-100"
            />
            {errors.phone && (
              <p className="text-red-400 text-xs mt-1">{errors.phone}</p>
            )}
          </div>
          <div>
            <label
              htmlFor="address"
              className="block text-sm font-medium text-gray-300"
            >
              Address
            </label>
            <input
              type="text"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="mt-1 block w-full p-2 bg-gray-900 border border-gray-600 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-gray-100"
            />
            {errors.address && (
              <p className="text-red-400 text-xs mt-1">{errors.address}</p>
            )}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label
                htmlFor="city"
                className="block text-sm font-medium text-gray-300"
              >
                City
              </label>
              <input
                type="text"
                id="city"
                name="city"
                value={formData.city}
                onChange={handleChange}
                className="mt-1 block w-full p-2 bg-gray-900 border border-gray-600 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-gray-100"
              />
              {errors.city && (
                <p className="text-red-400 text-xs mt-1">{errors.city}</p>
              )}
            </div>
            <div>
              <label
                htmlFor="zipCode"
                className="block text-sm font-medium text-gray-300"
              >
                Zip Code
              </label>
              <input
                type="text"
                id="zipCode"
                name="zipCode"
                value={formData.zipCode}
                onChange={handleChange}
                className="mt-1 block w-full p-2 bg-gray-900 border border-gray-600 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-gray-100"
              />
              {errors.zipCode && (
                <p className="text-red-400 text-xs mt-1">{errors.zipCode}</p>
              )}
            </div>
            <div>
              <label
                htmlFor="country"
                className="block text-sm font-medium text-gray-300"
              >
                Country
              </label>
              <input
                type="text"
                id="country"
                name="country"
                value={formData.country}
                onChange={handleChange}
                className="mt-1 block w-full p-2 bg-gray-900 border border-gray-600 rounded-md shadow-sm focus:ring-blue-500 focus:border-border-blue-500 text-gray-100"
              />
              {errors.country && (
                <p className="text-red-400 text-xs mt-1">{errors.country}</p>
              )}
            </div>
          </div>
          <div>
            <label
              htmlFor="specialRequests"
              className="block text-sm font-medium text-gray-300"
            >
              Special Requests
            </label>
            <textarea
              id="specialRequests"
              name="specialRequests"
              value={formData.specialRequests}
              onChange={handleChange}
              rows="3"
              className="mt-1 block w-full p-2 bg-gray-900 border border-gray-600 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-gray-100"
            ></textarea>
          </div>

          <h2 className="text-xl font-semibold mb-4 mt-6 text-gray-200">
            Payment Details
          </h2>
          <div className="flex space-x-4 mb-4">
            <button
              type="button"
              className={`py-2 px-4 rounded-md font-semibold ${
                formData.method === "creditCard"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-700 text-gray-300 hover:bg-gray-600"
              }`}
              onClick={() =>
                handleChange({
                  target: { name: "method", value: "creditCard" },
                })
              }
            >
              Credit Card
            </button>
            <button
              type="button"
              className={`py-2 px-4 rounded-md font-semibold ${
                formData.method === "payAtProperty"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-700 text-gray-300 hover:bg-gray-600"
              }`}
              onClick={() =>
                handleChange({
                  target: { name: "method", value: "payAtProperty" },
                })
              }
            >
              Pay at Property
            </button>
          </div>
              {/*Hitelkártya  */}
          {formData.method === "creditCard" && (
            <div className="space-y-4">
              <div>
                <label
                  htmlFor="cardName"
                  className="block text-sm font-medium text-gray-300"
                >
                  Cardholder Name
                </label>
                <input
                  type="text"
                  id="cardName"
                  name="cardName"
                  value={formData.cardName}
                  onChange={handleChange}
                  className="mt-1 block w-full p-2 bg-gray-900 border border-gray-600 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-gray-100"
                />
                {errors.cardName && (
                  <p className="text-red-400 text-xs mt-1">{errors.cardName}</p>
                )}
              </div>
              <div>
                <label
                  htmlFor="cardNumber"
                  className="block text-sm font-medium text-gray-300"
                >
                  Card Number
                </label>
                <input
                  type="text"
                  id="cardNumber"
                  name="cardNumber"
                  value={formatCardNumber(formData.cardNumber)}
                  onChange={(e) => {
                    const cleanedValue = e.target.value.replace(/\s/g, "");
                    if (cleanedValue.length <= 16) {
                      handleChange({
                        target: { name: "cardNumber", value: cleanedValue },
                      });
                    }
                  }}
                  maxLength="19"
                  className="mt-1 block w-full p-2 bg-gray-900 border border-gray-600 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-gray-100"
                  placeholder="0000 0000 0000 0000"
                />
                {errors.cardNumber && (
                  <p className="text-red-400 text-xs mt-1">
                    {errors.cardNumber}
                  </p>
                )}
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="expiryDate"
                    className="block text-sm font-medium text-gray-300"
                  >
                    Expiry Date (MM/YY)
                  </label>
                  <input
                    type="text"
                    id="expiryDate"
                    name="expiryDate"
                    value={formatExpiryDate(formData.expiryDate)}
                    onChange={(e) => {
                      const cleanedValue = e.target.value.replace(/\D/g, "");
                      if (cleanedValue.length <= 4) {
                        handleChange({
                          target: { name: "expiryDate", value: cleanedValue },
                        });
                      }
                    }}
                    maxLength="5"
                    className="mt-1 block w-full p-2 bg-gray-900 border border-gray-600 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-gray-100"
                    placeholder="MM/YY"
                  />
                  {errors.expiryDate && (
                    <p className="text-red-400 text-xs mt-1">
                      {errors.expiryDate}
                    </p>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="cvc"
                    className="block text-sm font-medium text-gray-300"
                  >
                    CVC
                  </label>
                  <input
                    type="text"
                    id="cvc"
                    name="cvc"
                    value={formData.cvc}
                    onChange={handleChange}
                    maxLength="4"
                    className="mt-1 block w-full p-2 bg-gray-900 border border-gray-600 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-gray-100"
                  />
                  {errors.cvc && (
                    <p className="text-red-400 text-xs mt-1">{errors.cvc}</p>
                  )}
                </div>
              </div>
            </div>
          )}

          <div className="flex justify-between mt-6">
            <button
              type="button"
              onClick={onBack}
              className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-6 rounded-md transition duration-300 ease-in-out"
            >
              Back
            </button>
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-md transition duration-300 ease-in-out"
            >
              Review and Confirm
            </button>
          </div>
        </form>
      </div>
        
      {/*Foglalás összegző */}
      <div className="md:col-span-1 bg-gray-700 p-6 rounded-lg shadow-md h-fit">
        <h3 className="text-lg font-bold mb-4 text-gray-200">
          Booking Summary
        </h3>
        {bookingSummary.room ? (
          <div className="space-y-2 text-gray-300">
            <p className="text-lg font-semibold text-blue-400">
              {bookingSummary.room.name}
            </p>
            <p className="text-sm">{bookingSummary.room.description}</p>
            <p>
              Check-in:{" "}
              <span className="font-semibold">
                {bookingSummary.dates.checkIn.toLocaleDateString("en-US", {
                  weekday: "short",
                  month: "short",
                  day: "numeric",
                  year: "numeric",
                })}
              </span>
            </p>
            <p>
              Check-out:{" "}
              <span className="font-semibold">
                {bookingSummary.dates.checkOut.toLocaleDateString("en-US", {
                  weekday: "short",
                  month: "short",
                  day: "numeric",
                  year: "numeric",
                })}
              </span>
            </p>
            <p>
              Number of nights:{" "}
              <span className="font-semibold">
                {bookingSummary.dates.nights} nights
              </span>
            </p>
            <p>
              Guests:{" "}
              <span className="font-semibold">
                {bookingSummary.guests.numberOfAdults || 2} adults
              </span>
            </p>

            <div className="pt-4 mt-4 border-t border-gray-600">
              <p className="flex justify-between">
                Base Price ({bookingSummary.dates.nights} nights):{" "}
                <span>${bookingSummary.priceSummary.basePrice}</span>
              </p>
              <p className="flex justify-between">
                Cleaning Fee:{" "}
                <span>${bookingSummary.priceSummary.cleaningFee}</span>
              </p>
              <p className="flex justify-between">
                Service Fee:{" "}
                <span>${bookingSummary.priceSummary.serviceFee}</span>
              </p>
              <p className="flex justify-between font-bold text-lg mt-2 text-white">
                Total: <span>${bookingSummary.priceSummary.total}</span>
              </p>
            </div>
          </div>
        ) : (
          <p className="text-gray-400">
            Please select a room to view the summary.
          </p>
        )}
      </div>
    </div>
  );
};

export default GuestDetails;
