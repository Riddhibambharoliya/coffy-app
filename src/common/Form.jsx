import React from 'react';
import Button from '../components/ui/Button'; // Adjust the path as needed
import Input from '../components/ui/Input';   // Adjust the path as needed
import Textarea from '../components/ui/Textarea'; // Adjust the path as needed

export default function Form() {
  return (
    <div
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center p-4 sm:p-8"
      style={{
        backgroundImage:
          "url('https://www.themezaa.com/html/leadgen/demo/cafe/images/bg-image/hero-bg3.jpg')",
      }}
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Form Container */}
      <div className="relative z-10 w-full max-w-lg p-6 sm:p-12 text-center text-white rounded-lg">
        {/* Title */}
        <h2 className="text-2xl sm:text-4xl font-medium mb-4 opacity-90">BOOK A TABLE</h2>

        {/* Description */}
        <p className="mb-8 text-sm sm:text-base opacity-75">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
        </p>

        {/* Form */}
        <form className="space-y-4">
          {/* Name Input */}
          <Input
            type="text"
            placeholder="*Your Name"
            className="w-full bg-white text-gray-900 placeholder-slate-500 placeholder-opacity-70 border-none py-2 px-4 rounded-md"
          />

          {/* Email Input */}
          <Input
            type="email"
            placeholder="*Your Email"
            className="w-full bg-white text-gray-900 placeholder-slate-500 placeholder-opacity-70 border-none py-2 px-4 rounded-md"
          />

          {/* Message Textarea */}
          <Textarea
            placeholder="Your Message"
            className="w-full bg-white text-gray-900 placeholder-slate-500 placeholder-opacity-70 border-none py-2 px-4 rounded-md"
            rows={4}
          />

          {/* Submit Button */}
          <Button className="w-full sm:w-fit bg-[#d0ae5e] hover:bg-amber-200 text-white text-sm py-2 px-4 rounded-md">
            BOOK TABLE
          </Button>
        </form>
      </div>
    </div>
  );
}
