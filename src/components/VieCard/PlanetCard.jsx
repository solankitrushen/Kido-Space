import React, { useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'; // Importing arrow icons
import Button1 from './MyButton.jsx';

const exoplanetList = [
  [
    {
      img: '/planet1.png', // Using public folder path
      planetName: 'Kepler-22b',
      atmosphere: 'Nitrogen-Rich',
      distance: '600 light years',
    },
    {
      img: '/planet2.png', // Using public folder path
      planetName: 'TRAPPIST-1e',
      atmosphere: 'Carbon Dioxide-Rich',
      distance: '40 light years',
    },
    {
      img: '/planet3.jpg', // Using public folder path
      planetName: 'Proxima Centauri b',
      atmosphere: 'Oxygen-Rich',
      distance: '4.2 light years',
    },
  ],
  [
    {
      img: '/planet3.jpg',
      planetName: 'Kepler-22b',
      atmosphere: 'Nitrogen-Rich',
      distance: '600 light years',
    },
    {
      img: '/planet2.png',
      planetName: 'TRAPPIST-1e',
      atmosphere: 'Carbon Dioxide-Rich',
      distance: '40 light years',
    },
    {
      img: '/planet1.png',
      planetName: 'Proxima Centauri b',
      atmosphere: 'Oxygen-Rich',
      distance: '4.2 light years',
    },
  ],
  [
    {
      img: '/planet1.png',
      planetName: 'Kepler-22b',
      atmosphere: 'Nitrogen-Rich',
      distance: '600 light years',
    },
    {
      img: '/planet2.png',
      planetName: 'TRAPPIST-1e',
      atmosphere: 'Carbon Dioxide-Rich',
      distance: '40 light years',
    },
    {
      img: '/planet3.jpg',
      planetName: 'Proxima Centauri b',
      atmosphere: 'Oxygen-Rich',
      distance: '4.2 light years',
    },
  ],
];

const PlanetCard = () => {
  const [index, setIndex] = useState(0);

  // Handle left arrow click (navigate to the previous set of planets)
  const handlePrev = () => {
    setIndex((prevIndex) =>
      prevIndex === 0 ? exoplanetList.length - 1 : prevIndex - 1,
    );
  };

  // Handle right arrow click (navigate to the next set of planets)
  const handleNext = () => {
    setIndex((prevIndex) =>
      prevIndex === exoplanetList.length - 1 ? 0 : prevIndex + 1,
    );
  };

  const handleSelect = (selectedIndex) => setIndex(selectedIndex);

  const handleExplore = (exoplanet) => {
    console.log(exoplanet);
  };

  return (
    <div className="container mx-auto pt-4">
      <div className="mb-8">
        <h2 className="text-black text-left text-4xl font-bold dark:text-white ">
          Exoplanets Exploration
        </h2>
      </div>

      {/* Planet cards and arrows in a relative container */}
      <div className="relative flex items-center">
        {/* Left arrow */}
        <button
          onClick={handlePrev}
          className="absolute left-0 top-1/2 -translate-y-1/2 transform p-2"
        >
          <FaArrowLeft className="text-2xl text-Brand-900 dark:text-white" />
        </button>

        {/* Planet cards with smooth animation */}
        <div
          className="mx-auto grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3"
          style={{
            transition: 'transform 0.6s ease-in-out', // Smooth animation for swiping effect
          }}
        >
          {exoplanetList[index].map((exoplanet, i) => (
            <div
              key={i}
              className="bg-Gray-900 transform overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
              style={{
                height: '380px', // Reduced the card height
                width: '300px', // Reduced the card width
                animation: `slideIn 0.5s ease-in-out ${i * 0.1}s both`,
              }}
            >
              <div className="w-full">
                <img
                  src={exoplanet.img}
                  alt={exoplanet.planetName}
                  className="h-48 w-full rounded-2xl object-cover transition-transform duration-300 hover:scale-110"
                />
              </div>
              <div className="p-4">
                <h5 className="text-black mb-2 text-lg font-bold dark:text-white">
                  {exoplanet.planetName}
                </h5>
                <p className="text-black mb-1 font-bold dark:text-white">
                  Atmosphere: {exoplanet.atmosphere}
                </p>
                <p className="text-black mb-3 font-bold dark:text-white">
                  Distance: {exoplanet.distance}
                </p>
                <Button1 onClick={() => handleExplore(exoplanet)}>
                  Explore
                </Button1>
              </div>
            </div>
          ))}
        </div>

        {/* Right arrow */}
        <button
          onClick={handleNext}
          className="absolute right-0 top-1/2 -translate-y-1/2 transform p-2"
        >
          <FaArrowRight className="text-2xl text-black dark:text-white" />
        </button>
      </div>

      {/* Dot navigation */}
      <div className="mt-8 flex justify-center">
        {exoplanetList.map((item, i) => (
          <button
            key={i}
            onClick={() => handleSelect(i)}
            className={`mx-1 h-3 w-3 rounded-full ${
              index === i ? 'bg-blue-500' : 'bg-gray-500'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default PlanetCard;
