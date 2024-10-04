import React from 'react';
import { BiSolidQuoteLeft } from "react-icons/bi";
import { GiRoundStar } from "react-icons/gi";

const CafeReview = () => {
    return (
        <div className="flex flex-col items-center py-24 w-full bg-[#fcf8ee]"> {/* Main Container */}
            {/* Title Section */}
            <div className="w-11/12 sm:w-10/12 text-center px-4 sm:px-0">
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4 opacity-95">CAFE REVIEW</h1>
                <div className='flex justify-center items-center'>
                    <p className="text-gray-600 mb-12 w-full sm:w-3/4 lg:w-2/4 opacity-65">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    </p>
                </div>
            </div>

            {/* Reviews Section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-11/12 md:w-10/12 gap-8 px-4 sm:px-7">
                {/* Review Cards */}
                {[...Array(3)].map((_, index) => (
                    <div key={index} className="bg-white p-6 text-center w-full border border-slate-200">
                        <div className="text-[#d0ae5e] text-3xl md:text-4xl font-bold mb-4 flex justify-center items-center">
                            <BiSolidQuoteLeft />
                        </div>
                        <p className="text-gray-600 mb-6 text-sm md:text-base  opacity-65">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since.
                        </p>
                        <div className="flex items-center justify-center mb-5">
                            {[...Array(5)].map((_, index) => (
                                <GiRoundStar key={index} className="text-[#d0ae5e] text-lg md:text-xl mx-0.5" />
                            ))}
                        </div>

                        <div className="text-sm md:text-sm font-bold opacity-80">Nathan Ford</div>
                        <div className="text-gray-500 text-xs md:text-sm">GOOGLE INC</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CafeReview;
