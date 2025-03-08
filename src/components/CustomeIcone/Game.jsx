import React, { useState } from 'react';

const Login = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="h-10 w-10 cursor-pointer" // Set size and cursor
      onMouseEnter={() => setIsHovered(true)} // Set hover state to true
      onMouseLeave={() => setIsHovered(false)} // Set hover state to false
    >
      <img
        src={isHovered ? '/videogame.gif' : '/videogame.gif'} // Change path to your images
        alt="Market Icon"
        className="h-full w-full object-cover" // Adjust size and positioning
      />
    </div>
  );
};

export default Login;
