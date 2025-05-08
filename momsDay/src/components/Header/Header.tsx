// Header.tsx
import React from 'react';
import { Menu, X } from 'lucide-react';
import { Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Header() {
  const [menuOpen, setMenuOpen] = React.useState(false);

  return (
    <header className="bg-pink-200 shadow-md sticky top-0 z-50 font-poppins">
      <div className="max-w-7xl mx-auto px-4 py-5 flex items-center justify-between">
        <Heart size={30} color='#670D2F' className='ml-4'/>

        {/* Desktop menu */}
        <nav className="hidden md:flex gap-6 text-pink-800 font-medium tracking-wide">
          <Link to={"/rosangela"} className="hover:text-pink-600 transition">Rosângela</Link>
          <Link to={"/jessica"}  className="hover:text-pink-600 transition">Jéssica</Link>
        </nav>

        {/* Mobile menu button */}
        <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-pink-800">
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <nav className="md:hidden bg-pink-100 px-4 pb-4 text-pink-800 tracking-wide">
          <Link to={"/rosangela"}  className="block py-2 hover:text-pink-600">Rosângela</Link>
          <Link to={"/jessica"}  className="block py-2 hover:text-pink-600">Jéssica</Link>
        </nav>
      )}
    </header>
  );
}
