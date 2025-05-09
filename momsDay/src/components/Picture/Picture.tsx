import React, { useState } from 'react';

interface Slide {
  imagemUrl: string;
  legenda: string;
}

interface CarrosselProps {
  slides: Slide[];
}

const CarrosselDeFotos: React.FC<CarrosselProps> = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto bg-pink-100 rounded-xl shadow-lg p-4">
      <div className="relative overflow-hidden">
        <img
          src={slides[currentIndex].imagemUrl}
          alt={`Slide ${currentIndex + 1}`}
          className="w-full h-80 md:h-[36rem] object-cover rounded-xl transition-all duration-500"
        />
      </div>

      <p className="mt-4 text-center text-rose-700 font-semibold text-lg px-6">
        {slides[currentIndex].legenda}
      </p>

      {/* Botões de Navegação */}
      <button
        onClick={handlePrev}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white text-gray-800 p-3 rounded-full shadow-lg hover:bg-gray-200"
      >
        &#8592;
      </button>
      <button
        onClick={handleNext}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white text-gray-800 p-3 rounded-full shadow-lg hover:bg-gray-200"
      >
        &#8594;
      </button>
    </div>
  );
};

export default CarrosselDeFotos;
