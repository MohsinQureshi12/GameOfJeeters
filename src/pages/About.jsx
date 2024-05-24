import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header/Header';
import AboutPageWomenImage from "../assets/AboutPageWomenImage.png";
import AboutPagePaperImage from '../assets/AboutPagePaperImage.png';
import bottomlogo from '../assets/bottom-logo.png';
import TopBgImage from '../assets/new-bottom-bg.svg';
import AboutMobileViewTopLogo from '../assets/About-Page-Mobile-logo.png';
import MenuButton from '../assets/Menu-Button.svg';
import HomePageIcons from '../assets/home-page-word-icon.png';
import ColseButtonIcon from '../assets/Close-Button.png'

const About = () => {
  const [isLogoFull, setIsLogoFull] = useState(false);
  const [isMobileView, setIsMobileView] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isMenuLogoFull, setIsMenuLogoFull] = useState(false); // Add state for menu logo scroll

  const handleLogoClick = () => {
    setIsLogoFull(!isLogoFull);
  };

  const handleMenuLogoClick = () => {
    setIsMenuLogoFull(!isMenuLogoFull); // Handle menu logo scroll
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth < 768); // Assuming mobile view for width less than 768px
    };

    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <Header />
      <div className='bg-[#646456] flex flex-col md:flex-row h-screen overflow-hidden'>
        {/* Show only on mobile view */}
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

        {/* Left side: Women image */}
        <div className='w-full md:w-1/2'>
          <img src={AboutPageWomenImage} alt="Woman" className='w-full h-auto md:h-full object-cover mt-[-19px]' />
        </div>

        {/* Right side: Paper image */}
        <div className='relative w-full md:w-1/2'>
          <div className='relative h-full'>
            {/* Conditionally render the image based on the screen size */}
            {!isMobileView && (
              <img src={AboutPagePaperImage} alt="Paper" className='w-full h-full object-cover' />
            )}
          </div>
          <div className='absolute inset-0 flex flex-col items-center justify-center '>
            <h1 className='text-2xl md:text-4xl font-bold font-jeju-hallasan text-[#ffffff] mt-[108px]'>
              About!
            </h1>
            <p className='text-[#E0C053] text-center text-base md: w-full md:w-[49%] font-jeju-hallasan text-[16px]'>
              Game of Jeeters is Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla ...........
            </p>
            <div className='mt-5 flex justify-center'>
              <button className='font-jeju-hallasan bg-[#E0C053] hover:bg-[#c8b36b] text-black font-bold py-2 px-4 rounded w-full md:w-[200px] border-2 border-black shadow-lg'>
                Share My Feeling
              </button>
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

export default About;
