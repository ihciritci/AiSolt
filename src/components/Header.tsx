import React from 'react';
import { Camera } from 'lucide-react';

const Header: React.FC<{ language: string }> = ({ language }) => {
  // ... mevcut kod ...

  return (
    <header className="bg-gray-800 shadow-lg">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <Camera className="w-8 h-8 text-cyan-400 mr-2" />
          <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-400">AI Vision</span>
        </div>
        <img src="/path/to/your/image.jpg" alt="AI Vision Logo" className="h-12 w-auto" />
        <nav>
          {/* ... mevcut nav kodu ... */}
        </nav>
      </div>
    </header>
  );
};

export default Header;