import React, { useState } from 'react';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline'; 
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline'; 
import LocalParkingIcon from '@mui/icons-material/LocalParking'; 
import PetsIcon from '@mui/icons-material/Pets';
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import CommuteIcon from '@mui/icons-material/Commute'; 
import SpaIcon from '@mui/icons-material/Spa'; 

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //Űrlap kezelés
    console.log('Form data submitted:', formData);
    alert('Üzenetét elküldtük! Hamarosan felvesszük Önnel a kapcsolatot.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    });
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <div className="max-w-6xl mx-auto pt-24">
        <h1 className="text-4xl font-bold text-center mb-4 text-blue-400">Contact Us</h1>
        <p className="text-center text-gray-300 mb-12">
          We're here to help! Make your stay unforgettable. Reach out with any questions or special requests.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
         
          <div className="bg-gray-800 rounded-lg p-6 shadow-lg">
            <h2 className="text-2xl font-semibold mb-6 text-gray-200">Get In Touch</h2>
            <div className="space-y-4 text-gray-300">
              <div>
                <h3 className="font-bold text-lg text-blue-400">Address</h3>
                <p>123 Ocean View Drive</p>
                <p>Coastal City, CA 90210, USA</p>
              </div>
              <div>
                <h3 className="font-bold text-lg text-blue-400">Phone</h3>
                <p>+1 (555) 123-4567</p>
                <p>+1 (555) 987-6543 (Reservations)</p>
              </div>
              <div>
                <h3 className="font-bold text-lg text-blue-400">Email</h3>
                <p>info@seasidetranquility.com</p>
                <p>reservations@seasidetranquility.com</p>
              </div>
              <div>
                <h3 className="font-bold text-lg text-blue-400">Reception Hours</h3>
                <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                <p>Check-in: After 3:00 PM</p>
                <p>Check-out: Before 11:00 AM</p>
              </div>
            </div>
            <div className="mt-6">
              {/*  Google Maps*/}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d20000.0!2d-122.419416!3d37.774929!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085806497f1f99b%3A0x6b40e34c1b9b1a0!2sSan%20Francisco%2C%20CA%2C%20USA!5e0!3m2!1sen!2shu!4v1678912345678!5m2!1sen!2shu"
                width="100%"
                height="250"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-md"
                title="Our Location"
              ></iframe>
            </div>
          </div>

    
          <div className="bg-gray-800 rounded-lg p-6 shadow-lg">
            <h2 className="text-2xl font-semibold mb-6 text-gray-200">Send Us A Message</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="sr-only">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    className="mt-1 block w-full p-3 bg-gray-700 border border-gray-600 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-gray-100 placeholder-gray-400"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="sr-only">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your Email"
                    className="mt-1 block w-full p-3 bg-gray-700 border border-gray-600 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-gray-100 placeholder-gray-400"
                    required
                  />
                </div>
              </div>
              <div>
                <label htmlFor="phone" className="sr-only">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone Number"
                  className="mt-1 block w-full p-3 bg-gray-700 border border-gray-600 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-gray-100 placeholder-gray-400"
                />
              </div>
              <div>
                <label htmlFor="subject" className="sr-only">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Subject"
                  className="mt-1 block w-full p-3 bg-gray-700 border border-gray-600 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-gray-100 placeholder-gray-400"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="sr-only">How can we help you?</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  placeholder="How can we help you?"
                  className="mt-1 block w-full p-3 bg-gray-700 border border-gray-600 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-gray-100 placeholder-gray-400"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-md transition duration-300 ease-in-out focus:outline-none focus:shadow-outline flex items-center justify-center"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.928-5.5L20 8M4 12v6a2 2 0 002 2h12a2 2 0 002-2v-6M4 12h16m-7 6h-2"></path></svg>
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/*Kérdések és válaszok*/}
        <div className="bg-gray-800 rounded-lg p-6 shadow-lg">
          <h2 className="text-2xl font-semibold text-center mb-8 text-gray-200">Frequently Asked Questions</h2>
          <p className="text-center text-gray-300 mb-8">
            Find answers to commonly asked questions about our accommodations and services.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6 text-gray-300">
         
            <div className="flex items-start">
              <CheckCircleOutlineIcon className="text-blue-400 mr-3 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-bold text-lg mb-2 text-blue-400">What are your check-in and check-out times?</h3>
                <p className="text-sm">Check-in is from 3:00 PM onwards, and check-out is until 11:00 AM. Early check-in or late check-out may be available for an additional fee upon request.</p>
              </div>
            </div>
           
            <div className="flex items-start">
              <LocalParkingIcon className="text-blue-400 mr-3 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-bold text-lg mb-2 text-blue-400">Is parking available at the property?</h3>
                <p className="text-sm">Yes, we offer complimentary parking to all guests. Valet parking service is available upon request for an additional fee.</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <PetsIcon className="text-blue-400 mr-3 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-bold text-lg mb-2 text-blue-400">Are pets allowed in the apartments?</h3>
                <p className="text-sm">We welcome pets in designated pet-friendly apartments. Please inform us in advance if you plan to bring your pet, as additional fees may apply.</p>
              </div>
            </div>
          
            <div className="flex items-start">
              <RestaurantMenuIcon className="text-blue-400 mr-3 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-bold text-lg mb-2 text-blue-400">Is breakfast included in the room rate?</h3>
                <p className="text-sm">Breakfast is included in select room packages. You can check the inclusions during the booking process or inquire with our reception team.</p>
              </div>
            </div>
          
            <div className="flex items-start">
              <CommuteIcon className="text-blue-400 mr-3 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-bold text-lg mb-2 text-blue-400">Do you offer airport transfers?</h3>
                <p className="text-sm">Yes, we offer airport transfers for an additional fee. Please contact our concierge team to arrange your transfers and ensure a smooth arrival and departure.</p>
              </div>
            </div>
          
            <div className="flex items-start">
              <SpaIcon className="text-blue-400 mr-3 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-bold text-lg mb-2 text-blue-400">What amenities are available at the property?</h3>
                <p className="text-sm">Our property features swimming pools, a gym, restaurants, a beach bar, business center, and concierge services. Each apartment includes Wi-Fi, air conditioning, and kitchen amenities.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;