import React from "react";

const HeroSection: React.FC = () => {
  return (
    <section className="relative w-full h-[90vh] overflow-hidden">
      {/* Background Image */}
      {/*<img
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="/assets/hero.jpg"
        alt="Hero Background"
      />*/}

      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="/assets/HeroSection/hero.mp4" // Make sure the path matches your video file
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Optional Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-start md:ml-7 md:mt-60 mt-64 h-full px-6 md:px-16 text-lighter">
        <h1 className="md:text-6xl text-4xl md:ml-20 font-bold sm:mb-6">
          Kool Katz Captures It All,
          <br />
          Weddings, Brands & Beats
        </h1>

        <div className="mt-6 md:ml-20 sm:flex sm:justify-center md:justify-start">
          <button
            className="bg-primary text-lg text-black font-semibold py-3 px-6 rounded-md transition hover:bg-gray-300"
            onClick={(e) => {
              e.preventDefault();
              const el = document.getElementById('contact-form');
              if (el) {
                el.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
