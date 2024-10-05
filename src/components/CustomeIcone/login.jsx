import React, { useState } from 'react';

const Login = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="w-10 h-10 cursor-pointer" // Set size and cursor
      onMouseEnter={() => setIsHovered(true)} // Set hover state to true
      onMouseLeave={() => setIsHovered(false)} // Set hover state to false
    >
      <img
        src={isHovered ? '/login.gif' : '/login.gif'} // Change path to your images
        alt="Market Icon"
        className="w-full h-full object-cover" // Adjust size and positioning
      />
    </div>
  );
};

export default Login;
