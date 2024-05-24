import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/Home-Page-Image-logo.png';
import '../../App.css'; // Header styles
import ColseButtonIcon from '../../assets/Close-Button.png'
const navLinks = [
  {
    path: "/about",
    display: "About",
  },
  {
    path: "/key-stat",
    display: "KeyStat",
  },
   {
    path: "/link",
    //  display: "Linkss",
   }
];

const Header = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  return (
    <div className='w-full bg-[#2a2a27]'>
      <div className='container mx-auto flex flex-col md:flex-row md:items-center justify-between text-[30px]'>
      {/* Logo */}
      <img className='w-[150px] md:w-[200px] mx-auto md:mx-0  hidden md:block' src={logo} alt="Logo" />

      {/* Navigation links */}
      <nav className='mt-4 md:mt-0 hidden md:block'> {/* Hide on small screens */}
        <ul className="flex flex-col md:flex-row justify-center md:justify-end items-center md:mr-[80px]">
          {navLinks.map((link, index) => (
            <li key={index} className="mx-4 text-white font-jeju-hallasan mt-2 md:mt-0">
              <Link to={link.path}>{link.display}</Link>
            </li>
          ))}
          {/* Button for Links */}
          <li className="mx-4 text-white mt-2 md:mt-0">
            <button className='font-jeju-hallasan' onClick={togglePopup}>Links</button>
          </li>
        </ul>
      </nav>
    </div>
      {/* Popup for Linkss */}
      {isPopupOpen && (
        <div className="w-[65%] sm:w-[70%] md:w-[35%] lg:w-[30%] h-[310px] fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#646456] shadow-lg p-4 rounded-md z-50 text-center">
          {/* Heading */}
          <h2 className="text-white text-lg font-bold mb-4 font-jeju-hallasan text-[30px] sm:text-[40px] mt-[20px] p-2">PICK LINK</h2>
        
        
          {/* Close icon */}
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
          {/* Buttons with black border */}
          <button className="font-jeju-hallasan w-[200px] text-center mb-2 py-2 px-4 bg-[#c8b36b] text-white font-bold rounded shadow-md border border-black">
            Brieye
          </button>
          <button className="font-jeju-hallasan w-[200px] text-center mb-2 py-2 px-4 bg-[#c8b36b] text-white font-bold rounded shadow-md border border-black">
            Raydium
          </button>
          <button className="font-jeju-hallasan w-[200px] text-center mb-2 py-2 px-4 bg-[#c8b36b] text-white font-bold rounded shadow-md border border-black">
            DexScreener
          </button>
          {/* Telegram and Twitter icons */}
          <div className="flex justify-center mt-2">
            <img src="https://seeklogo.com/images/T/twitter-x-logo-0339F999CF-seeklogo.com.png?v=638264860180000000" alt="Twitter Icon" className="h-[30px] sm:h-[40px] mx-2" />
            <img src="https://seeklogo.com/images/T/telegram-logo-AD3D08A014-seeklogo.com.png" alt="Telegram Icon" className="h-[30px] sm:h-[40px] mx-2" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
