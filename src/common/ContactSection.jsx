import React from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock } from 'react-icons/fa';

const ContactSection = () => {
    return (


        <div className=" mx-auto w-full border-t  px-4 md:py-24 py-14 bg-[#f8f6f1]">
            {/* <p className=' divide-y'> */}
            {/* Header Section */}
            <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-gray-800 py-2">CONTACT</h2>
                <div className='flex justify-center items-center w-full'>

                    <p className="text-sm text-gray-500 mt-4 md:w-6/12">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
                        and scrambled it to make a type specimen book.
                    </p>
                </div>
            </div>


            {/* Contact Cards Container */}
            <div className="flex justify-center w-full px-5">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:w-9/12">
                    {/* Contact Address */}
                    <div className="bg-white p-8 border border-slate-300 flex flex-col items-center text-center">
                        <FaMapMarkerAlt className="text-4xl text-[#d0ae5e] mb-4" />
                        <h3 className="text-base font-semibold text-gray-800 mb-2">Contact Address</h3>
                        <p className="text-gray-600 text-xs font-normal">
                            301 The Greenhouse, Custard Factory, London, E2 8DY.
                        </p>
                    </div>

                    {/* Call Us Today */}
                    <div className="bg-white p-8  border border-slate-300 flex flex-col items-center text-center">
                        <FaPhoneAlt className="text-4xl text-[#d0ae5e] mb-4" />
                        <h3 className="text-base font-semibold text-gray-800 mb-2">Call Us Today!</h3>
                        <p className="text-gray-600 text-xs font-normal">(M) +44 (0) 123 456 7890</p>
                        <p className="text-gray-600 text-xs font-normal">(O) +44 (0) 123 456 7890</p>
                    </div>

                    {/* Email */}
                    <div className="bg-white p-8  border border-slate-300 flex flex-col items-center text-center">
                        <FaEnvelope className="text-4xl text-[#d0ae5e] mb-4" />
                        <h3 className="text-base font-semibold text-gray-800 mb-2">Email</h3>
                        <p className="text-gray-600 text-xs font-normal">no-reply@domain.com</p>
                        <p className="text-gray-600 text-xs font-normal">help@domain.com</p>
                    </div>

                    {/* Working Hours */}
                    <div className="bg-white  p-8 border border-slate-300 flex flex-col items-center text-center">
                        <FaClock className="text-4xl text-[#d0ae5e] mb-4" />
                        <h3 className="text-base font-semibold text-gray-800 mb-2">Working Hours</h3>
                        <p className="text-gray-600 text-xs font-normal">Mon to Sat - 9 AM to 11 PM</p>
                        <p className="text-gray-600 text-xs font-normal">Sunday - 10 AM to 6 PM</p>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default ContactSection;
