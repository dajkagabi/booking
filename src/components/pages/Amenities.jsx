import React from 'react';

import PoolIcon from '@mui/icons-material/Pool';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import WifiIcon from '@mui/icons-material/Wifi';
import LocalParkingIcon from '@mui/icons-material/LocalParking';
import RoomServiceIcon from '@mui/icons-material/RoomService';
import SpaIcon from '@mui/icons-material/Spa';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import DriveEtaIcon from '@mui/icons-material/DriveEta'; 
import ChildFriendlyIcon from '@mui/icons-material/ChildFriendly'; 


//Kártyák, ikonok
const Amenities = () => {
  const amenityItems = [
    {
      icon: <PoolIcon className="text-blue-400 text-5xl" />,
      title: 'Swimming Pools',
      description: 'Relax in our stunning indoor and outdoor swimming pools, perfect for all ages.',
    },
    {
      icon: <FitnessCenterIcon className="text-blue-400 text-5xl" />,
      title: 'Fitness Center',
      description: 'Stay active in our state-of-the-art gym, equipped with modern cardio and strength training equipment.',
    },
    {
      icon: <RestaurantIcon className="text-blue-400 text-5xl" />,
      title: 'Fine Dining & Bars',
      description: 'Savor exquisite cuisine at our restaurants and enjoy refreshing drinks at our stylish bars.',
    },
    {
      icon: <WifiIcon className="text-blue-400 text-5xl" />,
      title: 'Free Wi-Fi',
      description: 'Enjoy high-speed internet access throughout the property, keeping you connected.',
    },
    {
      icon: <LocalParkingIcon className="text-blue-400 text-5xl" />,
      title: 'Complimentary Parking',
      description: 'Hassle-free parking is available for all our guests.',
    },
    {
      icon: <RoomServiceIcon className="text-blue-400 text-5xl" />,
      title: '24/7 Room Service',
      description: 'Indulge in delicious meals and snacks delivered directly to your room anytime.',
    },
    {
      icon: <SpaIcon className="text-blue-400 text-5xl" />,
      title: 'Spa & Wellness',
      description: 'Rejuvenate your mind and body with our luxurious spa treatments and wellness programs.',
    },
    {
      icon: <BusinessCenterIcon className="text-blue-400 text-5xl" />,
      title: 'Business Facilities',
      description: 'Access our fully equipped business center and meeting rooms for your professional needs.',
    },
    {
      icon: <DriveEtaIcon className="text-blue-400 text-5xl" />,
      title: 'Airport Shuttle',
      description: 'Convenient airport transfer services available upon request for a smooth journey.',
    },
    {
      icon: <ChildFriendlyIcon className="text-blue-400 text-5xl" />,
      title: 'Kids Club & Activities',
      description: 'Engaging and fun activities for children, ensuring a memorable stay for the whole family.',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <div className="max-w-6xl mx-auto pt-24">
        <h1 className="text-4xl font-bold text-center mb-4 text-blue-400">Our Amenities</h1>
        <p className="text-center text-gray-300 mb-12">
          Discover the wide range of services and facilities designed to make your stay exceptionally comfortable and enjoyable.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {amenityItems.map((item, index) => (
            <div key={index} className="bg-gray-800 rounded-lg p-6 shadow-lg flex flex-col items-center text-center">
              <div className="mb-4">
                {item.icon}
              </div>
              <h2 className="text-xl font-semibold mb-2 text-gray-200">{item.title}</h2>
              <p className="text-gray-300 text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Amenities;