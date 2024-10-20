import React from 'react';


const services = [
    {
        id: 1,
        icon: 'https://www.themezaa.com/html/leadgen/demo/cafe/images/restaurant-service-icon01.png',
        title: 'BREAKFAST',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.',
    },
    {
        id: 2,
        icon: 'https://www.themezaa.com/html/leadgen/demo/cafe/images/restaurant-service-icon02.png',
        title: 'CUSTOM ORDER',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.',
    },
    {
        id: 3,
        icon: 'https://www.themezaa.com/html/leadgen/demo/cafe/images/restaurant-service-icon03.png',
        title: 'PARTY ORDER',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.',
    },
    {
        id: 4,
        icon: 'https://www.themezaa.com/html/leadgen/demo/cafe/images/restaurant-service-icon04.png',
        title: 'DRINKS',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.',
    },
];

const CafeServices = () => {
    return (
        <div className='flex justify-center items-center '>

            <div className="text-center py-10 ">
                <h2 className="font-bold mb-4 py-5 font-sans text-3xl">CAFE SERVICES</h2>
                <p className="text-base w-60 mx-auto md:w-8/12 mb-13 mb-19 text-gray-500  ">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam dolorum fuga vero dignissimos hic! Quis cumque eum expedita officia non explicabo eligendi reiciendis beatae, consequuntur dolorem ratione sequi atque minus cum odit dolore nihil eveniet! Molestias magnam repudiandae natus hic!
                </p>
                <div className='flex justify-center items-center'>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 py-20 w-10/12  ">
                    {services.map((service) => (
                        <div key={service.id} className="bg-white rounded-lg  p-6">
                            <div className="flex justify-center mb-4">
                                <img src={service.icon} alt="" />
                                {/* {service.src} */}
                            </div>
                            <h3 className="text-xl font-semibold font-sans mb-2">{service.title}</h3>
                            <p className="text-gray-600">{service.description}</p>
                        </div>
                    ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CafeServices;
