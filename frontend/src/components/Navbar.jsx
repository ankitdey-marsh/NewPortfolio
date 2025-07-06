import React from 'react';
import DirtColor from '../assets/images/dirtColor.png';
import LinkedIn from '../assets/icons/linkedin.png';
import Twitter from '../assets/icons/twitter.png';
import Instagram from '../assets/icons/instagram.png';
import IceColor from '../assets/images/iceColor.png';

const Navbar = () => {
  return (
    <div className="relative flex justify-center">
      <div
        className="absolute px-6 py-3 -top-32 rounded-xl flex gap-6 items-center transition-transform duration-300 hover:scale-110"
        style={{
          backgroundImage: `url(${DirtColor})`,
          backgroundSize: 'contain',
          backgroundRepeat: 'repeat',
          backgroundPosition: 'center',
        }}
      >
        {/* LinkedIn */}
        <a href='https://www.linkedin.com/in/ankit-dey-kiit/' target="_blank" rel="noopener noreferrer">
          <div
            className="w-10 h-10 transition-transform duration-300 hover:scale-125"
            style={{
              WebkitMaskImage: `url(${LinkedIn})`,
              WebkitMaskRepeat: 'no-repeat',
              WebkitMaskPosition: 'center',
              WebkitMaskSize: 'contain',
              backgroundImage: `url(${IceColor})`,
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
              filter: 'brightness(1.5)',
            }}
          ></div>
        </a>

        {/* Instagram */}
        <a href='https://www.instagram.com/anxit_dxy/' target="_blank" rel="noopener noreferrer">
          <div
            className="w-12 h-12 transition-transform duration-300 hover:scale-125"
            style={{
              WebkitMaskImage: `url(${Instagram})`,
              WebkitMaskRepeat: 'no-repeat',
              WebkitMaskPosition: 'center',
              WebkitMaskSize: 'contain',
              backgroundImage: `url(${IceColor})`,
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
              filter: 'brightness(1.5)',
            }}
          ></div>
        </a>

        {/* Twitter */}
        <a href="https://twitter.com/marshdit" target="_blank" rel="noopener noreferrer">
          <div
            className="w-10 h-10 transition-transform duration-300 hover:scale-125"
            style={{
              WebkitMaskImage: `url(${Twitter})`,
              WebkitMaskRepeat: 'no-repeat',
              WebkitMaskPosition: 'center',
              WebkitMaskSize: 'contain',
              backgroundImage: `url(${IceColor})`,
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
              filter: 'brightness(1.5)',
            }}
          ></div>
        </a>
      </div>
    </div>
  );
};

export default Navbar;
