import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export default function HeroCarousel() {
  return (
    <div className="w-3/4 mx-auto my-6 rounded-lg overflow-hidden shadow-md"> 
      {/* ✅ w-3/4 makes it 75% of page width, smaller */}
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 5000 }}
        pagination={{ clickable: true }}
        loop={true}
        className="w-full h-40 md:h-48 lg:h-56" 
        // ✅ modest fixed height for slim banner
      >
        {/* Slide 1 */}
        <SwiperSlide>
          <div className="relative w-full h-full">
            <img
              src="/icons/market-rouge.jpg"
              alt="Fresh market produce"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
              <h2 className="text-white text-sm md:text-lg font-semibold text-center px-2">
                Nourishment from the Land
              </h2>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <div className="relative w-full h-full">
            <img
              src="/icons/OxtailRice.png"
              alt="Farmer in tropical pasture"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
              <h2 className="text-white text-sm md:text-lg font-semibold text-center px-2">
                Heritage & Community
              </h2>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide>
          <div className="relative w-full h-full">
            <video
              src="/media/HeroBanner.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
              <h2 className="text-white text-sm md:text-lg font-semibold text-center px-2">
                Join Our Journey
              </h2>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
    
  );
}
