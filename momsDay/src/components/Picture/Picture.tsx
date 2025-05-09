import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface Slide {
  imagemUrl: string;
  legenda: string;
  alt?: string;
}

const CarrosselDeFotos: React.FC<{ slides: Slide[] }> = ({ slides }) => {
  return (
    <div className="w-full max-w-2xl mx-auto bg-white rounded-2xl shadow-lg p-4 py-10">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        navigation
        autoplay={{ delay: 4000 }}
        className="rounded-xl"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col items-center">
              <img
                src={slide.imagemUrl}
                alt={slide.alt || `Slide ${index + 1}`}
                className="w-full h-80 object-cover rounded-lg mb-4"
              />
              <p className="text-center text-shadow-rose-950 font-semibold text-lg px-4">
                {slide.legenda}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CarrosselDeFotos;
