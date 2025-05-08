// src/components/CarrosselImagens.tsx
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

interface CarrosselImagensProps {
  imagens: string[];
}

export default function CarrosselImagens({ imagens }: CarrosselImagensProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % imagens.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [imagens.length]);

  return (
    <div className="bg-pink-100 py-12 flex justify-center items-center font-poppins relative">
      <div className="w-[300px] h-[400px] relative overflow-hidden rounded-xl shadow-xl border-4 border-pink-700 shadow-xl
      ">
        <AnimatePresence mode="wait">
          <motion.img
            key={index}
            src={imagens[index]}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 0.8 }}
            className="w-full h-full object-cover absolute top-0 left-0 rounded-md"
            alt={`Imagem ${index + 1}`}
          />
        </AnimatePresence>
      </div>
    </div>
  );
}
