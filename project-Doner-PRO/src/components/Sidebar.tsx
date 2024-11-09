import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  LayoutDashboard,
  Clock,
  Camera,
  ShoppingCart,
  Package,
  BarChart3,
  FileText,
  LogOut,
  ChefHat,
  Store,
  DollarSign
} from 'lucide-react';

const Sidebar = () => {
  const menuItems = [
    { 
      icon: LayoutDashboard, 
      label: 'Ana Sayfa', 
      path: '/',
      description: 'Genel durum özeti',
      color: 'text-emerald-500'
    },
    { 
      icon: Clock, 
      label: 'Personel Mesai', 
      path: '/attendance',
      description: 'Mesai takibi',
      color: 'text-purple-500'
    },
    { 
      icon: DollarSign, 
      label: 'Kasa', 
      path: '/cashier',
      description: 'Günlük kasa işlemleri',
      color: 'text-green-500'
    },
    { 
      icon: Camera, 
      label: 'Güvenlik', 
      path: '/surveillance',
      description: 'Kamera sistemi',
      color: 'text-red-500'
    },
    { 
      icon: ShoppingCart, 
      label: 'Online Sipariş', 
      path: '/orders',
      description: 'Sipariş yönetimi',
      color: 'text-yellow-500'
    },
    { 
      icon: FileText, 
      label: 'Faturalar', 
      path: '/documents',
      description: 'Alım belgeleri',
      color: 'text-blue-500'
    },
    { 
      icon: Package, 
      label: 'Stok', 
      path: '/inventory',
      description: 'Stok yönetimi',
      color: 'text-cyan-500'
    },
    { 
      icon: BarChart3, 
      label: 'Raporlar', 
      path: '/analytics',
      description: 'Satış raporları',
      color: 'text-indigo-500'
    }
  ];

  return (
    <div className="w-72 bg-white border-r border-gray-200 flex flex-col h-full">
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center gap-3">
          <ChefHat className="w-8 h-8 text-orange-600" />
          <div>
            <h1 className="text-xl font-bold text-gray-900">Döner Pro</h1>
            <p className="text-sm text-gray-500">İşletme Yönetimi</p>
          </div>
        </div>
      </div>
      
      <div className="flex-1 overflow-y-auto py-4">
        <nav className="px-3 space-y-1">
          {menuItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center px-4 py-3 rounded-lg transition-all duration-200 ${
                  isActive
                    ? 'bg-orange-50 text-orange-600 shadow-sm'
                    : 'text-gray-700 hover:bg-gray-50'
                }`
              }
            >
              <div className={`p-2 rounded-lg ${item.color} bg-opacity-10`}>
                <item.icon className={`w-5 h-5 ${item.color}`} />
              </div>
              <div className="ml-3">
                <div className="font-medium">{item.label}</div>
                <div className="text-xs text-gray-500">{item.description}</div>
              </div>
            </NavLink>
          ))}
        </nav>
      </div>

      <div className="p-4 border-t border-gray-200">
        <div className="flex items-center gap-3 px-4 py-2 text-gray-700">
          <Store className="w-5 h-5 text-gray-400" />
          <div className="flex-1">
            <div className="text-sm font-medium">Merkez Şube</div>
            <div className="text-xs text-gray-500">Aktif</div>
          </div>
        </div>
        <button className="flex items-center w-full px-4 py-3 mt-2 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors">
          <LogOut className="w-5 h-5 mr-3" />
          <span className="font-medium">Çıkış Yap</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;