import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';

const Button = () => {
  return (
    <Link href="/admin/default/Quiz">
      <StyledWrapper>
        <button className="button" />
      </StyledWrapper>
    </Link>
  );
};

const StyledWrapper = styled.div`
  .button {
    position: relative;
    background-color: transparent;
    color: #e8e8e8;
    font-size: 17px;
    font-weight: 600;
    border-radius: 15px;
    width: 150px;
    height: 60px;
    border: none;
    text-transform: uppercase;
    cursor: pointer;
    overflow: hidden;
    box-shadow: 0 10px 20px rgba(51, 51, 51, 0.2);
    transition: all 0.3s cubic-bezier(0.23, 1, 0.32, 1);
    margin-left:20px;
  }

  .button::before {
    content: 'Lets Go🚀!';
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    pointer-events: none;
    transform: translate(0%, 90%);
    z-index: 99;
    position: relative;
    transform-origin: bottom;
    transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);
    color: #333; /* Darker text color for light theme */
  }

  .button::after {
    content: 'Take Quiz🔖';
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #3311DB;
    width: 100%;
    height: 100%;
    pointer-events: none;
    transform-origin: top;
    transform: translate(0%, -100%);
    transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);
  }

  .button:hover::before {
    transform: translate(0%, 0%);
    background-color: #4f46e5; /* Purple color for light theme on hover */
    color: white; /* White text on hover */
  }

  .button:hover::after {
    transform: translate(0%, -200%);
  }

  .button:focus {
    outline: none;
  }

  .button:active {
    scale: 0.95;
  }

  /* Dark mode styles */
  @media (prefers-color-scheme: dark) {
    .button:hover::before {
      background-color: #6366f1; /* Different purple for dark theme */
    }
  }
`;

export default Button;
