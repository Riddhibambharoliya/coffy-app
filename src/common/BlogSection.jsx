import React from 'react';

const BlogSection = () => {
    const blogPosts = [
        {
            id: 1,
            title: 'Warm Hummus with Spiced Lamb',
            author: 'Martin Smith',
            date: '29 July, 2016',
            description:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.",
            image:
                'https://www.themezaa.com/html/leadgen/demo/cafe/images/agency-content-img01.jpg',
        },
        {
            id: 2,
            title: 'Scratch Made Moscow Mules',
            author: 'Paul Scrivens',
            date: '26 July, 2016',
            description:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.",
            image:
                'https://www.themezaa.com/html/leadgen/demo/cafe/images/agency-content-img02.jpg',
        },
        {
            id: 3,
            title: 'Crumb Topped Apple Slab Pie',
            author: 'Martin Smith',
            date: '24 July, 2016',
            description:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.",
            image:
                'https://www.themezaa.com/html/leadgen/demo/cafe/images/agency-content-img03.jpg',
        },
    ];

    return (
    <div className='flex justify-center items-center'>
        <div className="px-4 md:py-16 py-20 md:w-10/12 w-full ">
            {/* Header Section */}
            <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-gray-800 md:py-6 py-3">OUR BLOGS</h2>
                <div className='flex justify-center items-center'>

                    <p className="text-base text-gray-500 mt-4 md:w-3/6 w-full  ">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    </p>
                </div>
            </div>

            {/* Blog Cards Container */}
            <div className='flex justify-center items-center'>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 w-full">
                    {blogPosts.map((post) => (
                        <div key={post.id} className="h-11/12 bg-white  overflow-hidden ">
                            {/* Image Section */}
                            <div className="relative  hover:opacity-75 overflow-hidden ">
                                <img src={post.image} alt={post.title} className="h-64 w-full object-cover hover:scale-125 transform transition duration-500" />
                            </div>

                            {/* Content Section */}
                            <div className="h-full p-6 bg-[#242526]">
                                {/* Author & Date Section */}
                                <div className="bg-[#d0ae5e] text-xs font-bold uppercase text-white text-center flex justify-center items-center mb-4 px-2 py-1 ">
                                    {post.author} | {post.date}
                                </div>

                                {/* Blog Title */}
                                <h3 className="text-lg font-bold text-slate-300 text-center mb-4">{post.title}</h3>

                                {/* Description */}
                                <p className="text-sm text-gray-400 text-center">
                                    {post.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
        </div>
    );
};

export default BlogSection;
