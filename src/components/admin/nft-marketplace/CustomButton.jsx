import React from 'react';
import styled from 'styled-components';

const Button = () => {
  return (
    <StyledWrapper>
      <div className="btn-container">
        <button id="space-btn" name="space-button" type="submit">
          <span>Let&apos;s Go to Space</span>
          {Array.from({ length: 40 }, (_, i) => (
            <div
              key={i}
              style={{
                position: 'absolute',
                left: `${Math.random() * 240}px`,
                top: `${Math.random() * 60}px`,
                animationDelay: `${Math.random() * 5}s`,
                transform: `scale(${Math.random() * 2})`,
              }}
              className="star"
            />
          ))}
          {Array.from({ length: 4 }, (_, i) => (
            <div
              key={i}
              style={{ animationDelay: `${Math.random() * 5}s` }}
              className={`shooting-star shooting-star-${i + 1}`}
            />
          ))}
        </button>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  button#space-btn {
    width: 80%;
    height: 80%;
    position: relative;
    overflow: hidden;
    border: 0;
    outline: 0;
    border-radius: 11px;
    background: #03001e;
    background: radial-gradient(
      circle at 3% 7.4%,
      rgb(0, 144, 243) 0%,
      rgb(0, 86, 240) 90%
    );

    cursor: pointer;
  }

  .btn-container {
    width: 200px;
    height: 60px;
    position: relative;
    overflow: visible;
  }

  .btn-container::after {
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 20px;
    z-index: -1;
    background: #03001e;
    background: linear-gradient(80deg, #ffcbf2, #ec38bc, #7303c0, #03001e);
    filter: blur(20px);
    opacity: 0;
  }

  .btn-container:hover {
    transform: scale(1.1);
    transition: all 0.6s cubic-bezier(0.15, 0.83, 0.66, 1);
  }

  .btn-container:hover:after {
    transition: all 0.6s cubic-bezier(0.15, 0.83, 0.66, 1);
    opacity: 1;
  }

  .btn-container:active {
    transform: scale(1);
  }

  .btn-container:active:after {
    opacity: 0;
  }

  button span {
    color: white;
    font-weight: 700;
    font-size: 16px;
  }

  button#space-btn div.star {
    width: 1px;
    height: 1px;
    background-color: white;
    border-radius: 50%;
    animation: blink 2s cubic-bezier(0.15, 0.83, 0.66, 1) infinite;
  }

  button#space-btn div.shooting-star {
    width: 80px;
    height: 1px;
    position: absolute;
    background: linear-gradient(80deg, #ffffffff, #ffffff00);
    border-radius: 50%;
    transform: rotate(-40deg);
    opacity: 0;
  }

  button#space-btn div.shooting-star-1 {
    animation: fallingStar1 4s 6s cubic-bezier(0.15, 0.83, 0.66, 1) infinite;
  }

  button#space-btn div.shooting-star-2 {
    animation: fallingStar2 2s 10s cubic-bezier(0.15, 0.83, 0.66, 1) infinite;
  }

  button#space-btn div.shooting-star-3 {
    animation: fallingStar3 8s 20s cubic-bezier(0.15, 0.83, 0.66, 1) infinite;
  }

  button#space-btn div.shooting-star-4 {
    animation: fallingStar4 4s 6s cubic-bezier(0.15, 0.83, 0.66, 1) infinite;
  }

  @keyframes blink {
    0% {
      box-shadow: 0 0 10px 0 white;
    }
    50% {
      box-shadow: 0 0 10px 2px white;
    }
    100% {
      box-shadow: 0 0 10px 0 white;
    }
  }

  @keyframes fallingStar1 {
    0% {
      top: -10px;
      left: 220px;
      opacity: 1;
    }
    100% {
      top: 200px;
      left: -20px;
      opacity: 1;
    }
  }

  @keyframes fallingStar2 {
    0% {
      top: -10px;
      left: 150px;
      opacity: 1;
    }
    100% {
      top: 200px;
      left: -90px;
      opacity: 1;
    }
  }

  @keyframes fallingStar3 {
    0% {
      top: -10px;
      left: 80px;
      opacity: 1;
    }
    100% {
      top: 200px;
      left: -160px;
      opacity: 1;
    }
  }

  @keyframes fallingStar4 {
    0% {
      top: -10px;
      left: 50px;
      opacity: 1;
    }
    100% {
      top: 200px;
      left: -190px;
      opacity: 1;
    }
  }
`;

export default Button;
