import React from "react";

const VisionAndMission: React.FC = () => {
  return (
    <section className="w-full bg-neutralDark px-4 py-16 text-white">
      {/* Title and Description (Full Width) */}
      <div className="md:mx-40 mx-4 mb-7">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          This Is Who We Are — Kool Katz
        </h1>
        <p className="mb-4 text-lg leading-relaxed">
          Kool Katz is a passionate and creative media company that specializes
          in capturing unforgettable moments through photography, videography,
          and post-production editing. Whether it’s a romantic wedding, a
          high-stakes corporate event, or a visually captivating music video, we
          bring stories to life with precision, emotion, and flair.
        </p>
        <p className="text-lg leading-relaxed">
          What started as a small team with a big dream has grown into a trusted
          brand known for quality and creativity. Over the years, we’ve built
          strong relationships with couples, companies, and artists—each one
          with a unique story we were proud to tell through our lens.
        </p>
      </div>

      {/* Vision & Mission (Full Width) */}
      <div className="md:mx-40 mx-4 mb-16">
        <h3 className="text-2xl font-semibold mb-2">Our Vision</h3>
        <p className="text-lg mb-6">
          To become a leading creative force in the media industry—delivering
          visuals that inspire, connect, and last a lifetime.
        </p>

        <h3 className="text-2xl font-semibold mb-2">Our Mission</h3>
        <p className="text-lg">
          To capture life’s most meaningful moments and produce exceptional
          visual content that reflects the heart of every story, using
          innovative techniques, professional service, and an unwavering
          commitment to excellence.
        </p>
      </div>

      {/* Team Cards */}
      <div className="max-w-7xl mx-auto mb-4 grid grid-cols-1 md:grid-cols-2 gap-10 px-4 md:px-16">
        {/* Team Member 1 */}
        <div className="overflow-hidden shadow-lg">
          <img
            src="/assets/Athini Dubula – Photographer.jpg"
            alt="Athini Dubula – Photographer"
            className="w-full h-80 object-cover rounded-md mb-2"
          />
          <div className="text-left">
            <h4 className="text-xl font-semibold mb-4">
              Athini Dubula – Photographer
            </h4>
            <p className="text-base text-gray-300">
              Athini Dubula is a passionate photographer with a keen eye for
              capturing authentic moments. From portraits to events, her work
              blends creativity and precision, turning fleeting scenes into
              timeless memories.
            </p>
          </div>
        </div>

        {/* Team Member 2 */}
        <div className="overflow-hidden shadow-lg">
          <img
            src="/assets/Katlego Montewa – Videographer.jpg"
            alt="Katlego Montewa – Videographer"
            className="w-full h-80 object-cover rounded-md mb-2"
          />
          <div className="text-left">
            <h4 className="text-xl font-semibold mb-4">
              Katlego Montewa – Videographer
            </h4>
            <p className="text-base text-gray-300">
              Katlego Montewa is a skilled videographer dedicated to telling
              powerful visual stories. With a talent for cinematic composition
              and smooth editing, he transforms ideas into engaging videos that
              captivate audiences.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionAndMission;
