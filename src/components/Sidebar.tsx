import React from 'react';
import { NavLink } from 'react-router-dom';
import { Layout } from 'lucide-react';

interface MenuItem {
  icon: React.ReactNode;
  label: string;
  path: string;
}

interface SidebarProps {
  menuItems: MenuItem[];
}

const Sidebar: React.FC<SidebarProps> = ({ menuItems }) => {
  return (
    <div className="w-64 bg-gradient-to-b from-violet-900 to-purple-800 text-white">
      <div className="flex items-center justify-center h-16 border-b border-violet-700/50">
        <Layout className="h-8 w-8" />
        <span className="ml-2 text-xl font-bold">KolaYönetim</span>
      </div>
      <nav className="mt-4">
        {menuItems.map((item, index) => (
          <NavLink
            key={index}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center px-6 py-3 text-gray-100 hover:bg-violet-800/50 transition-colors ${
                isActive ? 'bg-violet-800/50 border-r-4 border-violet-400' : ''
              }`
            }
          >
            {item.icon}
            <span className="ml-3 text-sm">{item.label}</span>
          </NavLink>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;