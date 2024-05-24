import React, { useState } from 'react';
import HomeLeftImage from '../assets/home-left-image1.png';
import HomePageRightlogo from '../assets/Home-Page-Image-logo.png';
import HomePageIcons from '../assets/home-page-word-icon.png';
import newbottomlogo from '../assets/new-bottom-bg.svg';
import ColseButtonIcon from '../assets/Close-Button.png'
import { Link } from 'react-router-dom';
import '../App.css';

const Home = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  return (
    <>
      <div className='bg-custom-gradient text-white flex flex-col md:flex-row w-full '>
        <div className='order-2 md:order-none w-full md:w-3/5'>
          <img src={HomeLeftImage} alt="Left Section Image" className='w-full h-full ' />
        </div>

        <div className='order-1 md:order-none flex flex-col items-center md:w-2/5'>
          <div className='h-[300px] w-full flex justify-center md:justify-start'>
            <img src={HomePageRightlogo} alt="Right Section Logo" className='w-full h-full max-w-[500px]' />
          </div>

          <div className='hidden md:flex flex-col items-center justify-center'>
            <Link to="/about" className='relative w-full md:w-[350px] cursor-pointer mb-4'>
              <img src={HomePageIcons} alt="Home Page Icons" className="block mx-auto" />
              <p className='absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center text-xl md:text-2xl font-jeju-hallasan text-[#5E2F2F] font-bold'>
                About
              </p>
            </Link>

            <Link to="/key-stat" className='relative w-full md:w-[350px] cursor-pointer mb-4'>
              <img src={HomePageIcons} alt="Home Page Icons" className="block mx-auto" />
              <p className='absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center text-xl md:text-2xl font-jeju-hallasan text-[#5E2F2F] font-bold'>
                Key Stats
              </p>
            </Link>

            <div className='relative w-full md:w-[350px] cursor-pointer mb-4' onClick={togglePopup}>
              <img src={HomePageIcons} alt="Home Page Icons" className="block mx-auto" />
              <p className='absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center text-xl md:text-2xl font-jeju-hallasan text-[#5E2F2F] font-bold'>
                Links
              </p>
            </div>

            {isPopupOpen && (
              <div className="w-[65%] sm:w-[70%] md:w-[35%] lg:w-[30%] h-[310px] fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#646456] shadow-lg p-4 rounded-md z-50 text-center">
                {/* Heading */}
                <h2 className="text-white text-lg font-bold mb-4 font-jeju-hallasan text-[30px] sm:text-[40px] mt-[20px] p-2">PICK LINK</h2>
                <button
                  className="absolute top-2 right-2 bg-transparent border-none text-white text-xl"
                  onClick={() => setIsPopupOpen(false)}
                >
                  <img
                    src={ColseButtonIcon}
                    alt="CloseButtonIcon"
                    style={{ width: '20px', height: '20px' }} // Adjust the size here
                  />
                </button>
                <button className="font-jeju-hallasan w-[200px] text-center mb-2 py-2 px-4 bg-[#c8b36b] text-white font-bold rounded shadow-md border border-black">
                  Brieye
                </button>
                <button className="font-jeju-hallasan w-[200px] text-center mb-2 py-2 px-4 bg-[#c8b36b] text-white font-bold rounded shadow-md border border-black">
                  Raydium
                </button>
                <button className="font-jeju-hallasan w-[200px] text-center mb-2 py-2 px-4 bg-[#c8b36b] text-white font-bold rounded shadow-md border border-black">
                  DexScreener
                </button>
                <div className="flex justify-center mt-4">
                  <img src="https://seeklogo.com/images/T/twitter-x-logo-0339F999CF-seeklogo.com.png?v=638264860180000000" alt="Twitter Icon" className="h-[40px] mx-2" />
                  <img src="https://seeklogo.com/images/T/telegram-logo-AD3D08A014-seeklogo.com.png" alt="Telegram Icon" className="h-[40px] mx-2" />
                </div>
              </div>
            )}
          </div>



        </div>
      </div>

      {/* Show only on mobile view */}
      <div className='md:hidden w-full h-full flex justify-center items-center'>
        <img src={newbottomlogo} alt="Bottom Logo" className='w-full h-full max-w-[500px]' />
        <div className='absolute top-[110%] left-1/2 transform -translate-x-1/2 -translate-y-1/2'><h1 className='font-jeju-hallasan text-red-500 text-[40px]'>ENTER</h1></div>
      </div>
    </>
  );
};

export default Home;
