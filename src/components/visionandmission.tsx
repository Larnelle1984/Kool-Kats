import React from "react";

const VisionAndMission: React.FC = () => {
  return (
    <section className="w-full bg-neutralDark px-4 py-16  text-white">
      {/* Title and Description (Full Width) */}
      <div className="md:mx-40 mx-4 mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          This Is Who We Are — Kool Kats
        </h1>
        <p className="mb-4 text-lg leading-relaxed">
          Kool Kats is a passionate and creative media company that specializes in capturing unforgettable moments
          through photography, videography, and post-production editing. Whether it’s a romantic wedding,
          a high-stakes corporate event, or a visually captivating music video, we bring stories to life
          with precision, emotion, and flair.
        </p>
        <p className="text-lg leading-relaxed">
          What started as a small team with a big dream has grown into a trusted brand known for quality and creativity.
          Over the years, we’ve built strong relationships with couples, companies, and artists—each one with a
          unique story we were proud to tell through our lens.
        </p>
      </div>

      {/* Vision, Mission & Image (Side by Side) */}
      <div className="max-w-7xl md:px-16 px-4 mx-auto flex flex-col md:flex-row gap-6">
        {/* Vision & Mission Text */}
        <div className="w-full md:w-1/2">
            <h3 className="text-2xl font-semibold mb-3">Our Vision</h3>
            <p className="text-lg mb-3">
            To become a leading creative force in the media industry—delivering visuals that inspire, connect,
            and last a lifetime.
            </p>

            <h3 className="text-2xl font-semibold mb-3">Our Mission</h3>
            <p className="text-lg">
            To capture life’s most meaningful moments and produce exceptional visual content that reflects the
            heart of every story, using innovative techniques, professional service, and an unwavering commitment
            to excellence.
            </p>
        </div>

        {/* Image */}
        <div className="w-full md:w-1/2">
            <img
            src="/assets/team.jpg"
            alt="Kool Kats Team"
            className="w-full max-h-[350px] object-cover rounded-2xl shadow-lg"
            />
        </div>
        </div>
    </section>
  );
};

export default VisionAndMission;
