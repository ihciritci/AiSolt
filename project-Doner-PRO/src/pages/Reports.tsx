import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { Download, Filter, Calendar } from 'lucide-react';

const Reports = () => {
  const [dateRange, setDateRange] = useState('week');

  const salesData = [
    { name: 'Pzt', sales: 4200, orders: 52 },
    { name: 'Sal', sales: 3800, orders: 45 },
    { name: 'Çar', sales: 4100, orders: 48 },
    { name: 'Per', sales: 5200, orders: 63 },
    { name: 'Cum', sales: 6100, orders: 72 },
    { name: 'Cmt', sales: 5800, orders: 68 },
    { name: 'Paz', sales: 4900, orders: 58 }
  ];

  const productData = [
    { name: 'Et Döner', value: 45 },
    { name: 'Tavuk Döner', value: 30 },
    { name: 'İskender', value: 15 },
    { name: 'Pide', value: 10 }
  ];

  const COLORS = ['#f97316', '#fb923c', '#fdba74', '#fed7aa'];

  const staffPerformance = [
    { name: 'Mehmet', orders: 145, rating: 4.8 },
    { name: 'Ayşe', orders: 132, rating: 4.7 },
    { name: 'Ali', orders: 128, rating: 4.9 },
    { name: 'Fatma', orders: 118, rating: 4.6 }
  ];

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Raporlar</h1>
        <div className="flex space-x-2">
          <div className="relative">
            <select
              value={dateRange}
              onChange={(e) => setDateRange(e.target.value)}
              className="appearance-none bg-white border border-gray-300 rounded-lg py-2 pl-4 pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
            >
              <option value="week">Son 7 Gün</option>
              <option value="month">Son 30 Gün</option>
              <option value="year">Son 1 Yıl</option>
            </select>
            <Calendar className="absolute right-3 top-2.5 w-4 h-4 text-gray-400 pointer-events-none" />
          </div>
          <button className="flex items-center px-4 py-2 text-orange-600 border border-orange-600 rounded-lg hover:bg-orange-50">
            <Filter className="w-4 h-4 mr-2" />
            Filtrele
          </button>
          <button className="flex items-center px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700">
            <Download className="w-4 h-4 mr-2" />
            İndir
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Satış Grafiği</h2>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={salesData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="sales" fill="#f97316" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Ürün Dağılımı</h2>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={productData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {productData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-800">Personel Performansı</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Personel
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Tamamlanan Sipariş
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Müşteri Puanı
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Performans
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {staffPerformance.map((staff, index) => (
                <tr key={staff.name}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="text-sm font-medium text-gray-900">
                      {staff.name}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="text-sm text-gray-500">{staff.orders}</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="text-sm text-gray-500">{staff.rating}</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div
                        className="bg-orange-600 h-2.5 rounded-full"
                        style={{ width: `${(staff.rating / 5) * 100}%` }}
                      ></div>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Reports;