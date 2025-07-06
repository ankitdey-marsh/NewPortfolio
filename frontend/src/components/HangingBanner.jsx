import React from 'react';
import './HangingBanner.css';
import WoodColor from '../assets/images/woodColor.png'; 
import SandColor from '../assets/images/sandColor.png';

const HangingBanner = () => {
  return (
    <div className="w-full h-96 flex justify-left items-start overflow-hidden absolute top-0 left-0">
      <div className="relative -top-2 left-12 animate-sway origin-top">
        <div className="rope ml-7 inline-block" />
        <div className="rope ml-44 inline-block" />
        <a
          href="https://github.com/ankitdey-marsh"
          rel="noopener noreferrer"
          target="_blank"
          className="absolute left-0 top-20 transition-transform duration-300 hover:scale-110"
          style={{
            backgroundImage: `url(${WoodColor})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            transformOrigin: 'top center',
            cursor: 'pointer',
          }}
        >
          <div className="text-center font-minecraft text-4xl px-8 py-4 shadow-lg">
            <span
              className="mx-8 mr-9 inline-block text-transparent bg-clip-text"
              style={{
                backgroundImage: `url(${SandColor})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                filter: 'brightness(1.2)',
              }}
            >
              Github
            </span>
          </div>
        </a>
      </div>
    </div>
  );
};

export default HangingBanner;
