import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
const ChefRecommendation = () => {
    return (
        <div className="bg-[#242526] md:py-12 py-5">
            {/* Header Section */}
            <div className="text-center text-white lg:mb-8 py-10 lg:py-16">
                <h2 className="text-4xl font-normal pb-3 md:text-4xl ">RECOMMENDED BY OUR CHEF</h2>
                <div className="flex justify-center items-center">
                    <p className="mt-2 text-gray-400 text-sm md:text-sm lg:w-2/5 w-full px-5">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    </p>
                </div>
            </div>


            {/* Swiper Container */}
            <Swiper
                modules={[Pagination]}
                spaceBetween={1}
                slidesPerView={1}
                pagination={{ clickable: true }}
                className="lg:w-9/12 w-full mb-5" // Center align
            >
                {/* Slide 1 */}
                <SwiperSlide>
                    <div className="grid grid-cols-1 md:grid-cols-2 bg-[#fbf9f3] overflow-hidden shadow-lg h-full">
                        {/* Left Text Section */}
                        <div className="flex flex-col justify-center items-start gap-5 md:p-8 p-5 text-left text-gray-800">
                            <div>
                                <h3 className="text-xl font-bold text-[#d0ae5e]">Shrimp Curry</h3>
                                <p className="text-gray-700 font-semibold">Recommended by our chef Jeremy Dupont</p>
                            </div>
                            <p className="mt-4 text-gray-600">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                            </p>
                            <p className="mt-2 text-gray-600">
                                When an unknown printer took a galley of type and scrambled it to make a type specimen book.
                            </p>
                            <p className="mt-6 font-signature text-[#d0ae5e]">
                                <img src="https://www.themezaa.com/html/leadgen/demo/cafe/images/signature.png" alt="" />
                            </p>
                        </div>

                        {/* Right Image Section */}
                        <div className="w-full h-full">
                            <img
                                src="https://www.themezaa.com/html/leadgen/demo/cafe/images/bg-image/restaurant-chef-01.jpg"
                                alt="Shrimp Curry"
                                className="object-cover w-full h-full"
                            />
                        </div>
                    </div>
                </SwiperSlide>

                {/* Slide 2 */}
                <SwiperSlide>
                    <div className="grid grid-cols-1 md:grid-cols-2 bg-[#fbf9f3] overflow-hidden shadow-lg h-full">
                        {/* Left Text Section */}
                        <div className="flex flex-col justify-center items-start gap-5 p-8 text-left text-gray-800">
                            <div>
                                <h3 className="text-xl font-bold text-[#d0ae5e]">Shrimp Curry</h3>
                                <p className="text-gray-700 font-semibold">Recommended by our chef Jeremy Dupont</p>
                            </div>
                            <p className="mt-4 text-gray-600">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                            </p>
                            <p className="mt-2 text-gray-600">
                                When an unknown printer took a galley of type and scrambled it to make a type specimen book.
                            </p>
                            <p className="mt-6 font-signature text-[#d0ae5e]">
                                <img src="https://www.themezaa.com/html/leadgen/demo/cafe/images/signature.png" alt="" />
                            </p>
                        </div>

                        {/* Right Image Section */}
                        <div className="w-full h-full">
                            <img
                                src="https://www.themezaa.com/html/leadgen/demo/cafe/images/bg-image/restaurant-chef-01.jpg"
                                alt="Shrimp Curry"
                                className="object-cover w-full h-full"
                            />
                        </div>
                    </div>
                </SwiperSlide>

                {/* Slide 3 */}
                <SwiperSlide>
                    <div className="grid grid-cols-1 md:grid-cols-2 bg-[#fbf9f3] overflow-hidden shadow-lg h-full">
                        {/* Left Text Section */}
                        <div className="flex flex-col justify-center items-start gap-5 p-8 text-left text-gray-800">
                            <div>
                                <h3 className="text-xl font-bold text-[#d0ae5e]">Shrimp Curry</h3>
                                <p className="text-gray-700 font-semibold">Recommended by our chef Jeremy Dupont</p>
                            </div>
                            <p className="mt-4 text-gray-600">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                            </p>
                            <p className="mt-2 text-gray-600">
                                When an unknown printer took a galley of type and scrambled it to make a type specimen book.
                            </p>
                            <p className="mt-6 font-signature text-[#d0ae5e]">
                                <img src="https://www.themezaa.com/html/leadgen/demo/cafe/images/signature.png" alt="" />
                            </p>
                        </div>

                        {/* Right Image Section */}
                        <div className="w-full h-full">
                            <img
                                src="https://www.themezaa.com/html/leadgen/demo/cafe/images/bg-image/restaurant-chef-01.jpg"
                                alt="Shrimp Curry"
                                className="object-cover w-full h-full"
                            />
                        </div>
                    </div>
                </SwiperSlide>

                {/* Additional slides can be added here similarly */}
            </Swiper>

            {/* Pagination Dots */}
            <div className="swiper-pagination mb-16"></div>
        </div>
    );
};

export default ChefRecommendation;
