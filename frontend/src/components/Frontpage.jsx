import React from 'react';
import PumpkinColor from '../assets/images/pumpkinColor.png';
import Creeper from '../assets/images/creeper.png';
import StoneColor from '../assets/images/stoneColor.png';

const Frontpage = () => {
  return (
    <div
      className="bg-[#1A120B] h-screen w-screen flex items-center justify-center px-4"
      style={{
        // backgroundImage: `url(${StoneColor})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'repeat',
        backgroundPosition: 'center',
        backgroundColor: '#1f1c1c', // fallback background color
      }}
    >
      <div className="flex flex-col items-center relative md:-top-7">
        {/* Top Row: Ankit and i (with Creeper) */}
        <div className="flex flex-wrap justify-center gap-1">
          {['A', 'n', 'k'].map((char, index) => (
            <div key={index} className="flex flex-col items-center min-w-[40px]">
              <div className="h-10" />
              <div
                className="font-minecraft text-8xl md:text-9xl text-transparent bg-clip-text leading-none"
                style={{
                  backgroundImage: `url(${PumpkinColor})`,
                  backgroundSize: 'contain',
                  backgroundPosition: 'center',
                  filter: 'brightness(0.9)',
                }}
              >
                {char}
              </div>
            </div>
          ))}

          {/* "i" with Creeper */}
          <div className="flex flex-col items-center min-w-[40px]">
            <div className="w-10 h-10 animate-bounce -ml-2.5 md:-ml-3.5">
              <img src={Creeper} alt="Creeper" className="w-full h-full object-contain" />
            </div>
            <div
              className="font-minecraft text-8xl -ml-2 md:text-9xl text-transparent bg-clip-text leading-none"
              style={{
                backgroundImage: `url(${PumpkinColor})`,
                backgroundSize: 'contain',
                backgroundPosition: 'center',
                filter: 'brightness(0.9)',
              }}
            >
              i
            </div>
          </div>

          {/* "t" and space */}
          {['t', ' '].map((char, index) => (
            <div key={index} className="flex flex-col items-center min-w-[40px]">
              <div className="h-10" />
              <div
                className="font-minecraft text-8xl md:-ml-2 -ml-2.5 md:text-9xl text-transparent bg-clip-text leading-none"
                style={{
                  backgroundImage: `url(${PumpkinColor})`,
                  backgroundSize: 'contain',
                  backgroundPosition: 'center',
                  filter: 'brightness(0.9)',
                }}
              >
                {char === ' ' ? '\u00A0' : char}
              </div>
            </div>
          ))}

          {/* Dey: hidden on small screens, shown inline on md+ */}
          <div className="hidden md:flex gap-1">
            {['D', 'e', 'y'].map((char, index) => (
              <div key={index} className="flex flex-col items-center min-w-[40px]">
                <div className="h-10" />
                <div
                  className="font-minecraft text-9xl text-transparent bg-clip-text leading-none"
                  style={{
                    backgroundImage: `url(${PumpkinColor})`,
                    backgroundSize: 'contain',
                    backgroundPosition: 'center',
                    filter: 'brightness(0.9)',
                  }}
                >
                  {char}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dey: shown only on screens < md */}
        <div className="flex md:hidden gap-1 md:mt-0 -mt-8 -mr-24">
          {['D', 'e', 'y'].map((char, index) => (
            <div key={index} className="flex flex-col items-center min-w-[40px]">
              <div className="h-10" />
              <div
                className="font-minecraft text-8xl text-transparent bg-clip-text leading-none"
                style={{
                  backgroundImage: `url(${PumpkinColor})`,
                  backgroundSize: 'contain',
                  backgroundPosition: 'center',
                  filter: 'brightness(0.9)',
                }}
              >
                {char}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Frontpage;
