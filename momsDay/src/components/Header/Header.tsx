// Header.tsx
import { Heart } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-pink-200 shadow-md sticky top-0 z-50 font-poppins">
      <div className="max-w-7xl mx-auto px-4 py-5 flex items-center justify-between">
        <Heart size={30} color='#670D2F' className='ml-4'/>

      </div>
    </header>
  );
}
