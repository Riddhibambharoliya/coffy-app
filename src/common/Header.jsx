import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false); // State to manage mobile menu visibility

  // Effect to handle scroll event
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30); // Change this value as needed
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <header>
        {/* Navigation Bar */}
        <div className="flex justify-center items-center w-10/12 ">
          <nav
            className={`container fixed top-0 left-0 right-0 z-50 transition duration-300 ${
              isScrolled ? "bg-black shadow-md" : "bg-transparent"
            } py-4 md:py-5 px-4 lg:px-8`} // Responsive padding
          >
            <div className="flex items-center justify-between">
              {/* Logo Section */}
              <a className="flex items-center" href="#">
                <img
                  src="https://www.themezaa.com/html/leadgen/demo/cafe/images/logo.png"
                  alt="LeadGen Logo"
                  className="h-8 md:h-10 mr-2" // Adjust height for medium screens
                />
              </a>

              {/* Desktop Menu */}
              <div className="hidden md:flex md:items-center space-x-4 lg:space-x-8">
                {/* Menu only visible on medium and larger screens */}
                <Link
                  to="about"
                  smooth={true}
                  duration={500}
                  spy={true}
                  offset={-70}
                  className="navbar-item text-white px-4 py-2 cursor-pointer hover:text-[#d0ae5e] transition-colors duration-300"
                >
                  About
                </Link>
                <Link
                  to="services"
                  smooth={true}
                  duration={500}
                  spy={true}
                  offset={-70}
                  className="navbar-item text-white px-4 py-2 cursor-pointer hover:text-[#d0ae5e] transition-colors duration-300"
                >
                  Services
                </Link>
                <Link
                  to="menu"
                  smooth={true}
                  duration={500}
                  spy={true}
                  offset={-70}
                  className="navbar-item text-white px-4 py-2 cursor-pointer hover:text-[#d0ae5e] transition-colors duration-300"
                >
                  Menu
                </Link>
                <Link
                  to="review"
                  smooth={true}
                  duration={500}
                  spy={true}
                  offset={-70}
                  className="navbar-item text-white px-4 py-2 cursor-pointer hover:text-[#d0ae5e] transition-colors duration-300"
                >
                  Review
                </Link>
                <Link  to="blog"
                  smooth={true}
                  duration={500}
                  spy={true}
                  offset={-70} className="navbar-item text-white px-4 py-2 cursor-pointer hover:text-[#d0ae5e] transition-colors duration-300">
                  Blog
                </Link>
                <Link to="contact"
                  smooth={true}
                  duration={500}
                  spy={true}
                  offset={-70} className="navbar-item text-white px-4 py-2 cursor-pointer hover:text-[#d0ae5e] transition-colors duration-300">
                  Contact
                </Link>
                <Link 
                to="form"
                smooth={true}
                duration={500}
                spy={true}
                offset={-70} className="bg-[#d0ae5e] text-black px-4 py-1 text-sm rounded transition hover:bg-[#c9a254]">
                  Reservation
                </Link>
              </div>

              {/* Burger Menu for Mobile */}
              <div
                className="navbar-burger burger cursor-pointer md:hidden"
                onClick={toggleMenu}
              >
                {/* Burger menu for mobile */}
                <span className="block w-6 h-1 bg-white mb-1"></span>
                <span className="block w-6 h-1 bg-white mb-1"></span>
                <span className="block w-6 h-1 bg-white"></span>
              </div>
            </div>

            {/* Horizontal Line only on non-scrolled state */}
            {!isScrolled && <div className="h-[1px] bg-gray-700"></div>}

            {/* Mobile Menu */}
            <div
              className={`md:hidden ${isOpen ? "block" : "hidden"} bg-black py-4`}
            >
              <Link
                to="about"
                smooth={true}
                duration={500}
                spy={true}
                offset={-70}
                className="block text-white px-4 py-2 cursor-pointer hover:text-[#d0ae5e] transition-colors duration-300"
              >
                About
              </Link>
              <Link
                to="services"
                smooth={true}
                duration={500}
                spy={true}
                offset={-70}
                className="block text-white px-4 py-2 cursor-pointer hover:text-[#d0ae5e] transition-colors duration-300"
              >
                Services
              </Link>
              <Link
                to="menu"
                smooth={true}
                duration={500}
                spy={true}
                offset={-70}
                className="block text-white px-4 py-2 cursor-pointer hover:text-[#d0ae5e] transition-colors duration-300"
              >
                Menu
              </Link>
              <Link
                to="review"
                smooth={true}
                duration={500}
                spy={true}
                offset={-70}
                className="block text-white px-4 py-2 cursor-pointer hover:text-[#d0ae5e] transition-colors duration-300"
              >
                Review
              </Link>
              <Link  to="blog"
                  smooth={true}
                  duration={500}
                  spy={true}
                  offset={-70} className="block text-white px-4 py-2 cursor-pointer hover:text-[#d0ae5e] transition-colors duration-300">
                Blog
              </Link>
              <Link  to="contact"
                  smooth={true}
                  duration={500}
                  spy={true}
                  offset={-70}  className="block text-white px-4 py-2 cursor-pointer hover:text-[#d0ae5e] transition-colors duration-300">
                Contact
              </Link>
              <Link 
              to="form"
              smooth={true}
              duration={500}
              spy={true}
              offset={-70}  className="bg-[#d0ae5e] text-black px-4 py-1 text-sm rounded-lg mx-4 mt-2 block w-fit">
                Reservation
              </Link>
            </div>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Header;
