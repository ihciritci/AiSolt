import React from 'react';
import { Bell, Settings, User } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-white border-b border-gray-200 z-30">
      <div className="px-6">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <input
              type="search"
              placeholder="Ara..."
              className="w-72 px-4 py-2 rounded-lg bg-gray-100 border-none focus:ring-2 focus:ring-violet-500"
            />
          </div>
          <div className="flex items-center space-x-4">
            <button className="p-2 rounded-full hover:bg-gray-100 relative">
              <Bell size={20} className="text-gray-600" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>
            <button className="p-2 rounded-full hover:bg-gray-100">
              <Settings size={20} className="text-gray-600" />
            </button>
            <div className="flex items-center space-x-2 ml-2">
              <div className="w-8 h-8 bg-violet-100 rounded-full flex items-center justify-center">
                <User size={20} className="text-violet-600" />
              </div>
              <div className="text-sm">
                <div className="font-medium text-gray-700">Yönetici</div>
                <div className="text-gray-500 text-xs">Admin</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;