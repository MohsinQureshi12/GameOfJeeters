import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Assuming you are using React Router for navigation
import Header from '../components/Header/Header';
import AboutPagePaperImage from '../assets/AboutPagePaperImage.png';
import bottomlogo from '../assets/bottom-logo.png';
import KeyStatImage from '../assets/keystat-image.png';
import TopBgImage from '../assets/new-bottom-bg.svg';
import AboutMobileViewTopLogo from '../assets/About-Page-Mobile-logo.png';
import MenuButton from '../assets/Menu-Button.svg';
import HomePageIcons from '../assets/home-page-word-icon.png';
import ColseButtonIcon from '../assets/Close-Button.png'
import '../App.css'
const KeyStat = () => {
  const [isLogoFull, setIsLogoFull] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isMenuLogoFull, setIsMenuLogoFull] = useState(false); // Add state for menu logo scroll
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const handleMenuLogoClick = () => {
    setIsMenuLogoFull(!isMenuLogoFull); // Handle menu logo scroll
  };

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  const handleLogoClick = () => {
    setIsLogoFull(!isLogoFull);
  };

  return (
    <>
      <Header />
      <div className='bg-[#646456] flex flex-col md:flex-row h-screen overflow-hidden'>
      <div className='md:hidden w-full relative'>
          {/* Top background image */}
          <img src={TopBgImage} alt="Top Background Image" className='w-full h-full' />

          {/* About Mobile View Top Logo */}
          <img src={AboutMobileViewTopLogo} alt="About Mobile View Logo" className='absolute top-0 left-0 max-w-[120px] ml-4 mt-4' />

          {/* Menu Button */}
          <button onClick={toggleMenu} className='absolute top-0 right-0 max-w-[61px] mr-4 mt-7'>
            <img src={MenuButton} alt="Menu Button" />
          </button>

          {/* Menu bar */}
          {isMenuOpen && (
            <div className='absolute bg-[#272727] shadow-md z-10 h-[526px]'>
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
                <div className="bg-[#353333] shadow-lg p-4 rounded-md text-center w-full mt-4 relative bottom-[50%] ">
                  <h2 className="text-white text-lg font-bold mb-4 font-jeju-hallasan text-[40px] mt-[20px] p-2">PICK LINK</h2>
                  <button
                    className="absolute top-2 right-2 bg-transparent border-none text-white text-lg"
                    onClick={togglePopup}
                  >
                    &times;
                  </button>
                  <button className="font-jeju-hallasan block w-full text-center mb-2 py-2 px-4 bg-[#c8b36b] text-white font-bold rounded shadow-md shadow-bottom border-b transition-all duration-200 border border-black">
                    BriI
                  </button>
                  <button className="font-jeju-hallasan block w-full text-center mb-2 py-2 px-4 bg-[#c8b36b] text-white font-bold rounded shadow-md shadow-bottom border-b transition-all duration-200 border border-black">
                    BrIII
                  </button>
                  <button className="font-jeju-hallasan block w-full text-center mb-2 py-2 px-4 bg-[#c8b36b] text-white font-bold rounded shadow-md shadow-bottom border-b transition-all duration-200 border border-black">
                    BrIV
                  </button>
                  <div className="flex justify-center mt-4">
                  <img src="https://seeklogo.com/images/T/twitter-x-logo-0339F999CF-seeklogo.com.png?v=638264860180000000" alt="Twitter Icon" className="h-[40px] mx-2" />
                  <img src="https://seeklogo.com/images/T/telegram-logo-AD3D08A014-seeklogo.com.png" alt="Telegram Icon" className="h-[40px] mx-2" />
                </div>
                </div>
              )}

              <button
                className="absolute top-2 right-2 bg-transparent border-none text-white text-xl"
                onClick={() => setIsMenuOpen(false)} // Update this line to close the menu
              >
                <img 
                  src={ColseButtonIcon} 
                  alt="CloseButtonIcon" 
                  style={{ width: '20px', height: '20px' }} // Adjust the size here
                />
              </button>

              {/* Logo within menu */}
              <div className={`absolute right-[20%] transition-transform duration-500 ease-in-out ${isMenuLogoFull ? 'bottom-0' : 'bottom-0'}`}>
                <div onClick={handleMenuLogoClick} className='cursor-pointer flex items-center'>
                  {isMenuLogoFull && <p className="text-white font-bold">Hi bro</p>}
                  <img src={bottomlogo} alt="bottomlogo" className={`w-[100px] h-auto transform-gpu transition-transform duration-500 ease-in-out ${isMenuLogoFull ? '' : 'translate-y-[50%]'}`} />
                </div>
              </div>

            </div>
          )}
        </div>

        {/* Remaining content */}
        <div className='w-full md:w-1/2 image-container'>
  <img src={KeyStatImage} alt="KeyStat" className='w-full h-auto md:h-full object-cover' />
</div>

        <div className='relative w-full md:w-1/2'>
          <div className='relative h-full hidden md:block'>
            <img src={AboutPagePaperImage} alt="Paper" className='hidden md:block w-full h-full object-cover' />
          </div>



          <div className='absolute inset-0 flex flex-col items-center justify-center'>
  <div className='text-container text-center'>
    <h1 className='text-[40px] font-bold mb-4 font-krub text-white'>
      KeyStat
    </h1>
    <p className='text-[25px] w-full max-w-[320px] font-bold font-krub text-[#d29129]'>
      MaxTotalSupply :
    </p>
    <p className='text-[22px] w-full max-w-[320px] font-krub text-[#d29129]'>
      $499,980,970,575.97
    </p>
    <div className='flex w-full max-w-[320px] px-4 justify-center'>
      <p className='text-[25px] font-bold font-krub text-[#c8b36b]'>
        FDMC :
      </p>
      <p className='text-[25px] font-krub text-[#d29129]'>
        $25.2555556
      </p>
    </div>
    <div className="flex justify-center w-full max-w-[320px]">
      <p className='text-[22px] w-[100px] font-bold font-krub text-[#c8b36b]'>
        Holders :
      </p>
      <p className='text-[20px] w-[100px] mt-1 font-krub text-[#d29129]'>
        3330.90
      </p>
    </div>
  </div>
</div>

          <div className={`hidden md:block absolute right-[20%] transition-transform duration-500 ease-in-out ${isLogoFull ? 'bottom-[0%]' : 'bottom-0'}`}>
            <div onClick={handleLogoClick} className='cursor-pointer flex items-center'>
              {isLogoFull && <p className="text-white font-bold ">Hi bro</p>}
              <img src={bottomlogo} alt="bottomlogo" className={`w-[100px] h-auto transform-gpu transition-transform duration-500 ease-in-out ${isLogoFull ? '' : 'translate-y-[50%]'} `} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default KeyStat;
