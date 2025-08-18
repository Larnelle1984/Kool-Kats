import React from "react";

const BiographySection: React.FC = () => {
  return (
    <section className="relative w-full h-[70vh] overflow-hidden">
      {/* Background Image */}
      <img
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="/assets/biography.jpg"
        alt="Hero Background"
      />

      {/* Optional Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-80" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-start md:ml-7 md:mt-52 mt-64 h-full px-6 md:px-16 text-lighter">
        <h1 className="md:text-6xl text-4xl md:ml-20 font-bold sm:mb-6">
          Weddings. Brands. Beats.
          <br />
          This Is Kool Katz.
        </h1>
      </div>
    </section>
  );
};

export default BiographySection;
