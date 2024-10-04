import React from 'react';

const MainMenu = () => {
  return (
    <div className=" text-white  min-h-screen">
      <div
        className="min-h-screen bg-cover bg-center bg-no-repeat text-white py-10"
        // style={{
        //   backgroundImage: `url('https://www.themezaa.com/html/leadgen/demo/cafe/images/bg-image/restaurant-menu-bg.jpg')`, // Local image or public folder
        // }}
      >

        <div className="text-center mb-12">
          <h1 className="text-4xl mb-4 pt-14 pb-2">MAIN MENU</h1>
          <p className="text-gray-400 max-w-2xl mx-auto opacity-75">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-6 md:gap-8 lg:space-x-8 px-4 md:px-0 pb-4">
  {['BREAD', 'CAKES', 'PASTRY', 'COOKIE', 'DESSERTS', 'DRINKS'].map((item, index) => (
    <div
      key={index}
      className="text-center "
    >
      <div className="mb-2">
        <img
          src={`https://www.themezaa.com/html/leadgen/demo/cafe/images/restaurant-menu-iteam0${index + 1}.png`}
          alt={`${item}`}
          className="h-12 w-12 sm:h-16 sm:w-16 md:h-20 md:w-16 lg:h-14 lg:w-14 opacity-50 hover:opacity-95 transition-all duration-300 mx-auto"
        />
      </div>
      <span className="font-semibold text-xs sm:text-xl md:text-xl lg:text-lg text-[#d0ae5e] opacity-50 hover:opacity-95 transition-all duration-300">
        {item}
      </span>
    </div>
  ))}
</div>


        <div className='flex justify-center items-center  pb-20 '>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-10/12 ">
            <div className="flex justify-between items-start bg-opacity-60 py-4 border-b border-gray-600">
              <div className="max-w-md">
                <h2 className="text-xl  text-white opacity-95">Green Salad</h2>
                <p className="text-gray-300 text-sm mt-2 opacity-75">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard text.
                </p>
              </div>

              <div className="text-xl text-white font-bold opacity-70">
                $12.00
              </div>
            </div>

            <div className="flex justify-between items-start bg-opacity-60 py-4 border-b border-gray-600">
              <div className="max-w-md">
                <h2 className="text-xl text-white opacity-95">Baked Spinach</h2>
                <p className="text-gray-300 text-sm mt-2 opacity-75">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard text.
                </p>
              </div>

              <div className="text-xl text-white font-bold opacity-70">
                $12.00
              </div>
            </div>

            <div className="flex justify-between items-start bg-opacity-60 py-4 border-b border-gray-600">
              <div className="max-w-md">
                <h2 className="text-xl text-white opacity-95">Eggs Any Style</h2>
                <p className="text-gray-300 text-sm mt-2 opacity-75">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard text.
                </p>
              </div>

              <div className="text-lg text-white font-bold opacity-70">
                $12.00
              </div>
            </div>

            <div className="flex justify-between items-start bg-opacity-60 py-4 border-b border-gray-600">
              <div className="max-w-md">
                <h2 className="text-xl  text-white opacity-95">Soft-Boiled Organic Egg</h2>
                <p className="text-gray-300 text-sm mt-2 opacity-75">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard text.
                </p>
              </div>

              <div className="text-xl text-white font-bold opacity-70">
                $12.00
              </div>
            </div>
            <div className="flex justify-between items-start bg-opacity-60 py-4 ">
              <div className="max-w-md">
                <h2 className="text-xl  text-white opacity-95">Eggs Benedict</h2>
                <p className="text-gray-300 text-sm mt-2 opacity-75">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard text.
                </p>
              </div>


              <div className="text-xl text-white font-bold opacity-70">
                $12.00
              </div>
            </div>
            <div className="flex justify-between items-start bg-opacity-60 py-4">
              <div className="max-w-md">
                <h2 className="text-xl  text-white opacity-95">Eggs Norwegian</h2>
                <p className="text-gray-300 text-sm mt-2 opacity-75">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard text.
                </p>
              </div>

              <div className="text-xl text-white font-bold opacity-70 ">
                $12.00
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainMenu;
