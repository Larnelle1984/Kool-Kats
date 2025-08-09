import React from "react";
import { aboutData } from "../data/aboutData";

const AboutSection: React.FC = () => {
  return (
    <section className="w-full px-6 py-12 md:py-20">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-10">
        {/* Image */}
        <div className="w-full md:w-1/2">
          <img
            src={aboutData.image}
            alt="About"
            className="w-full h-auto object-cover shadow-lg rounded-lg"
          />
        </div>

        {/* Text */}
        <div className="w-full md:w-1/2 flex flex-col justify-center gap-3 text-left">
          <h2 className="text-2xl md:text-4xl font-bold text-white">
            {aboutData.title}
          </h2>
          <h3 className="text-xl font-semibold md:text-xl text-white">
            {aboutData.subtitle}
          </h3>

          {/* Render each paragraph */}
          {aboutData.paragraph.split("\n\n").map((para, index) => (
            <p key={index} className="text-base md:text-lg text-white mb-4">
              {para}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
