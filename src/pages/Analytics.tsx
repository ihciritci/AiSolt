import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { TrendingUp, Users, Package } from 'lucide-react';

const Analytics = () => {
  const data = [
    { name: 'Pzt', sales: 4000 },
    { name: 'Sal', sales: 3000 },
    { name: 'Çar', sales: 2000 },
    { name: 'Per', sales: 2780 },
    { name: 'Cum', sales: 1890 },
    { name: 'Cmt', sales: 2390 },
    { name: 'Paz', sales: 3490 },
  ];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Analiz</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Haftalık Satış</p>
              <p className="text-2xl font-semibold text-gray-800 mt-1">₺24,500</p>
              <p className="text-sm text-green-600 mt-1">+12% geçen haftaya göre</p>
            </div>
            <TrendingUp className="w-12 h-12 text-orange-600 opacity-20" />
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Ortalama Sipariş</p>
              <p className="text-2xl font-semibold text-gray-800 mt-1">₺85</p>
              <p className="text-sm text-gray-500 mt-1">Son 7 gün</p>
            </div>
            <Package className="w-12 h-12 text-orange-600 opacity-20" />
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Müşteri Sayısı</p>
              <p className="text-2xl font-semibold text-gray-800 mt-1">284</p>
              <p className="text-sm text-green-600 mt-1">+18% geçen aya göre</p>
            </div>
            <Users className="w-12 h-12 text-orange-600 opacity-20" />
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-sm">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">Haftalık Satış Grafiği</h2>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="sales" fill="#f97316" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Analytics;