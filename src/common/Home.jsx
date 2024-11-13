import React from 'react';
import About from './About';
import ImageGrid from './Imagegrid';
import CafeServices from './Services';
import MainMenu from './menu';
import CafeReview from './cafereview';
import ChefRecommendation from './ChefRecommendation';
import BlogSection from './BlogSection';
import ContactSection from './ContactSection';
import Form from './Form';
import Footer from './Footer';

export default function Home() {
  console.log('Home component rendered');

  return (
    <div>
      {/* Hero Section */}
      <section className="h-[70vh] md:h-screen pb-10 relative overflow-hidden bg-slate-900">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center filter opacity-50"
          style={{
            backgroundImage:
              "url(https://www.themezaa.com/html/leadgen/demo/cafe/images/bg-image/hero-bg40.jpg)",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        />
        {/* Hero Content */}
        <div className="pt-20 flex items-center justify-center relative z-10 h-full md:h-auto">
          <div className="text-center z-20 px-4 md:px-0">
            <img
              src="https://www.themezaa.com/html/leadgen/demo/cafe/images/hero-text.png"
              alt="Cafe Hero Text"
              className="max-w-full h-auto mx-auto w-[90%] md:w-[90%]" // Adjust width for responsiveness
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-10 md:py-20 px-4 md:px-8 lg:px-16 bg-white bg-cover" style={{ backgroundImage: "url('https://www.themezaa.com/html/leadgen/demo/cafe/images/bg-image/hero-bg17.jpg')" }}>
        <About />
      </section>

      {/* Image Grid Section */}
      <section id="imagegrid" className="bg-white">
        <ImageGrid />
      </section>

      {/* Services Section */}
      <section id="services" className="py-10 md:py-10 px-4 md:px-8 lg:px-10 bg-white">
        <CafeServices />
      </section>

      {/* Menu Section */}
      <section
        id="menu"
        
        style={{
          backgroundImage: `url('https://www.themezaa.com/html/leadgen/demo/cafe/images/bg-image/restaurant-menu-bg.jpg')`,
        }}
      >
        <MainMenu />
      </section>

      {/* Review Section */}
      <section id="review">
        <CafeReview />
      </section>

      {/* Chef Recommendation Section */}
      <section id="chefrecomdation" >
        <ChefRecommendation />
      </section>

      {/* Blog Section */}
      <section id="blog" >
        <BlogSection />
      </section>

      {/* Contact Section */}
      <section id="contact">
        <ContactSection />
      </section>

      {/* Form Section */}
      <section id="form" >
        <Form />
      </section>

      {/* Footer Section */}
      <section id="footer">
        <Footer />
      </section>
    </div>
  );
}
