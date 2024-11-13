import { MdOutlineKeyboardArrowRight } from "react-icons/md";

export default function About() {
    return (
        <div className="flex justify-center items-center">
            <div className="relative w-full min-h-screen bg-[url('https://www.themezaa.com/html/leadgen/demo/cafe/images/bg-image/hero-bg17.jpg')] bg-cover bg-center">
                <div className="inset-0 md:p-10" />
                <div className="z-10 grid grid-cols-1 md:grid-cols-2 mx-auto px-4 md:py-16 py-5 max-w-screen-xl md:w-10/12">
                    <div className="md:w-4/5 flex flex-col justify-center items-center text-center">
                        <h3 className="text-[#d0ae5e] font-semibold mb-4 text-sm md:text-lg lg:text-xl">
                            WELCOME TO COFFEE SHOP.
                        </h3>
                        <h1 className="font-sans text-3xl sm:text-4xl md:text-4xl opacity-95 text-gray-700 mb-8 sm:mb-10">
                            We created best coffee experience for you and your family.
                        </h1>
                        <p className="text-gray-600 opacity-75 mb-6 text-sm md:text-base">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                        </p>
                        <p className="text-gray-600 mb-8 opacity-75 text-sm md:text-base">
                            Lorem Ipsum has been the industry's standard dummy text ever since when an unknown printer took a galley of type scrambled it to make a type specimen book.
                        </p>
                        <button className="bg-[#d0ae5e] hover:bg-[#f0d492] text-white w-fit font-semibold py-2 px-4 text-xs sm:text-sm rounded-full flex items-center">
                            BOOK NOW
                            <MdOutlineKeyboardArrowRight className="text-white ml-1" />
                        </button>
                    </div>
                    <div className="h-full w-full flex justify-center items-center z-20">
                        <img
                            src="https://www.themezaa.com/html/leadgen/demo/cafe/images/application-screenshot-img-06.png"
                            alt="Coffee cup"
                            className="w-full md:py-0 py-5  md:w-full h-auto"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
