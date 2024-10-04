import React from 'react';

const Footer = () => {
    return (
        <div className='flex justify-center items-center bg-gray-200'>
            <footer className="border-gray-300 flex justify-center items-center h-auto sm:h-20 w-full px-4 sm:px-0">
                <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0 sm:w-10/12 px-4">
                    {/* Left side text */}
                    <div className="text-gray-600 flex flex-col sm:flex-row items-center gap-1 text-center sm:text-left">
                        <span className='font-semibold'>&copy;2024 Copyright. Designed by</span>
                        <span className='text-gray-500 '>RIDDHI BAMBHAROLIYA<span className='text-pink-700'>&#10084;&#65039;</span></span>
                    </div>

                    {/* Right side social icons */}
                    <div className="flex justify-center space-x-4">
                        <a href="#" className="text-gray-600 hover:text-blue-500">
                            <i className="fab fa-facebook-f"></i>
                        </a>
                        <a href="#" className="text-gray-600 hover:text-blue-500">
                            <i className="fab fa-twitter"></i>
                        </a>
                        <a href="#" className="text-gray-600 hover:text-blue-500">
                            <i className="fab fa-google-plus-g"></i>
                        </a>
                        <a href="#" className="text-gray-600 hover:text-blue-500">
                            <i className="fab fa-pinterest-p"></i>
                        </a>
                        <a href="#" className="text-gray-600 hover:text-blue-500">
                            <i className="fab fa-linkedin-in"></i>
                        </a>
                        <a href="#" className="text-gray-600 hover:text-blue-500">
                            <i className="fab fa-youtube"></i>
                        </a>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;
