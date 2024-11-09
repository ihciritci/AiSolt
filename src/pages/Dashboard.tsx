import React from 'react';
import { Clock, TrendingUp, Users, AlertCircle, DollarSign, CreditCard, Wallet } from 'lucide-react';

const Dashboard = () => {
  const currentTime = new Date().toLocaleTimeString('tr-TR');
  
  const stats = [
    { label: 'Günlük Satış', value: '₺12,450', trend: '+15%', icon: TrendingUp },
    { label: 'Aktif Personel', value: '8', trend: '2 İzinli', icon: Users },
    { label: 'Stok Uyarıları', value: '3', trend: 'Kritik', icon: AlertCircle },
  ];

  const payments = [
    { method: 'Nakit', amount: 5850, icon: Wallet, color: 'text-green-500' },
    { method: 'Kredi Kartı', amount: 4200, icon: CreditCard, color: 'text-blue-500' },
    { method: 'Yemek Kartı', amount: 2400, icon: DollarSign, color: 'text-purple-500' },
  ];

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Hoş Geldiniz</h1>
        <div className="flex items-center bg-white px-4 py-2 rounded-lg shadow">
          <Clock className="w-5 h-5 text-orange-600 mr-2" />
          <span className="text-gray-600">{currentTime}</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        {stats.map((stat) => (
          <div key={stat.label} className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">{stat.label}</p>
                <p className="text-2xl font-semibold text-gray-800 mt-1">
                  {stat.value}
                </p>
                <p className="text-sm text-gray-500 mt-1">{stat.trend}</p>
              </div>
              <stat.icon className="w-12 h-12 text-orange-600 opacity-20" />
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">
            Günlük Kasa
          </h2>
          <div className="space-y-4">
            {payments.map((payment) => (
              <div key={payment.method} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center">
                  <div className={`p-2 rounded-lg ${payment.color} bg-opacity-10`}>
                    <payment.icon className={`w-5 h-5 ${payment.color}`} />
                  </div>
                  <span className="ml-3 font-medium text-gray-900">
                    {payment.method}
                  </span>
                </div>
                <span className="text-lg font-semibold text-gray-900">
                  ₺{payment.amount.toLocaleString()}
                </span>
              </div>
            ))}
            <div className="flex justify-between items-center pt-4 border-t border-gray-200">
              <span className="font-medium text-gray-900">Toplam</span>
              <span className="text-xl font-bold text-gray-900">
                ₺{payments.reduce((sum, p) => sum + p.amount, 0).toLocaleString()}
              </span>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">
            Günlük Görevler
          </h2>
          <ul className="space-y-3">
            <li className="flex items-center">
              <input
                type="checkbox"
                className="w-4 h-4 text-orange-600 rounded border-gray-300 focus:ring-orange-500"
              />
              <span className="ml-3 text-gray-700">Sabah Stok Kontrolü</span>
            </li>
            <li className="flex items-center">
              <input
                type="checkbox"
                className="w-4 h-4 text-orange-600 rounded border-gray-300 focus:ring-orange-500"
              />
              <span className="ml-3 text-gray-700">Temizlik Kontrolü</span>
            </li>
            <li className="flex items-center">
              <input
                type="checkbox"
                className="w-4 h-4 text-orange-600 rounded border-gray-300 focus:ring-orange-500"
              />
              <span className="ml-3 text-gray-700">Akşam Raporu</span>
            </li>
          </ul>

          <h2 className="text-lg font-semibold text-gray-800 mt-6 mb-4">
            Son Bildirimler
          </h2>
          <div className="space-y-4">
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <span className="inline-block w-2 h-2 bg-red-600 rounded-full"></span>
              </div>
              <div className="ml-3">
                <p className="text-sm text-gray-800">
                  Tavuk döner stoğu azalıyor
                </p>
                <p className="text-xs text-gray-500">10 dakika önce</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <span className="inline-block w-2 h-2 bg-green-600 rounded-full"></span>
              </div>
              <div className="ml-3">
                <p className="text-sm text-gray-800">
                  Yeni sipariş alındı #1234
                </p>
                <p className="text-xs text-gray-500">25 dakika önce</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;