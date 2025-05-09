import React, { useState } from 'react';

interface CarrosselProps {
  imagens: string[];
}

const CarrosselSimples: React.FC<CarrosselProps> = ({ imagens }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? imagens.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === imagens.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto p-5 bg-pink-300">
      <div className="relative overflow-hidden">
        <img
          src={imagens[currentIndex]}
          alt={`Imagem ${currentIndex}`}
          className="w-full h-80 md:h-[50rem] object-cover rounded-xl shadow-lg"
        />
      </div>

      {/* Botões de Navegação */}
      <button
        onClick={handlePrev}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white text-gray-800 p-4 rounded-full shadow-lg hover:bg-gray-200"
      >
        &#8592;
      </button>
      <button
        onClick={handleNext}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white text-gray-800 p-4 rounded-full shadow-lg hover:bg-gray-200"
      >
        &#8594;
      </button>

      {/* Indicadores de Navegação */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {imagens.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full ${
              currentIndex === index ? 'bg-pink-600' : 'bg-gray-400'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default CarrosselSimples;
