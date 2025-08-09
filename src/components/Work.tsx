import React from "react";
import { workItems } from "../data/workData";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Work: React.FC = () => {
  return (
    <>
      <style>{`
        .border-primaryLight {
          border-color: #cc2b2b;
        }

        .swiper-pagination-bullet {
          background-color: #a86a6a;
          opacity: 0.6;
          transition: opacity 0.3s ease;
        }

        .swiper-pagination-bullet-active {
          background-color: #cc2b2b;
          opacity: 1;
        }

        /* Hover with grayed-out red */
        .custom-prev:hover svg,
        .custom-next:hover svg {
          stroke: #b34a4a;
        }
      `}</style>

      <div>
        <h1 className="lg:text-6xl md:text-5xl text-center text-lighter text-4xl font-bold mt-20 mb-12">
          A Glimpse of My Work
        </h1>

        <div className="container mx-auto md:px-16 px-6 py-8 relative">
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            navigation={{
              prevEl: ".custom-prev",
              nextEl: ".custom-next",
            }}
            pagination={{ clickable: true }}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 2 },
            }}
          >
            {workItems.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="flex flex-col items-center px-4">
                  {item.type === "youtube" ? (
                    <div className="w-full aspect-video max-w-[640px] lg:max-w-[768px] mx-auto">
                      <iframe
                        src={item.url}
                        title={item.title}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="w-full h-full rounded-lg shadow-md"
                      />
                    </div>
                  ) : item.type === "local" ? (
                    <video
                      src={item.url}
                      controls
                      className="w-full max-w-[640px] lg:max-w-[768px] h-auto rounded-lg shadow-md mx-auto"
                    />
                  ) : (
                    <img
                      src={item.url}
                      alt={item.title}
                      className="w-full max-w-[640px] lg:max-w-[768px] h-auto rounded-lg shadow-md mx-auto"
                    />
                  )}

                  <div className="mt-4 text-left w-full">
                    <div className="flex items-start space-x-2">
                      <sup className="text-xs text-gray-500 mt-1">[{item.id}]</sup>
                      <span className="text-lighter md:text-3xl text-2xl font-bold">
                        {item.title}
                      </span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="swiper-pagination mt-2 flex justify-center" />

          {/* Arrows always visible + responsive */}
          <button
            className="custom-prev flex absolute top-1/2 -translate-y-1/2 left-2 z-10 text-primary p-0 bg-transparent"
            aria-label="Previous Slide"
          >
            <svg
              className="w-6 h-6 md:w-10 md:h-10 transition-all duration-200"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            className="custom-next flex absolute top-1/2 -translate-y-1/2 right-2 z-10 text-primary p-0 bg-transparent"
            aria-label="Next Slide"
          >
            <svg
              className="w-6 h-6 md:w-10 md:h-10 transition-all duration-200"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
};

export default Work;
