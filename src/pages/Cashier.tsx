import React, { useState } from 'react';
import { DollarSign, CreditCard, Wallet, Plus, Search, Receipt, Clock } from 'lucide-react';

interface Transaction {
  id: string;
  amount: number;
  method: string;
  time: string;
  items: string[];
  type: 'income' | 'expense';
}

const Cashier = () => {
  const [showNewTransaction, setShowNewTransaction] = useState(false);

  const transactions: Transaction[] = [
    {
      id: 'TRX-001',
      amount: 85,
      method: 'Nakit',
      time: '14:30',
      items: ['1x Et Döner Dürüm', '1x Ayran'],
      type: 'income'
    },
    {
      id: 'TRX-002',
      amount: 165,
      method: 'Kredi Kartı',
      time: '14:15',
      items: ['2x Tavuk Döner', '2x Kola'],
      type: 'income'
    },
    {
      id: 'TRX-003',
      amount: 250,
      method: 'Yemek Kartı',
      time: '13:45',
      items: ['1x İskender', '1x Künefe', '2x Ayran'],
      type: 'income'
    }
  ];

  const totals = {
    cash: transactions.filter(t => t.method === 'Nakit').reduce((sum, t) => sum + t.amount, 0),
    card: transactions.filter(t => t.method === 'Kredi Kartı').reduce((sum, t) => sum + t.amount, 0),
    meal: transactions.filter(t => t.method === 'Yemek Kartı').reduce((sum, t) => sum + t.amount, 0)
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Kasa</h1>
        <div className="flex space-x-2">
          <button className="px-4 py-2 text-orange-600 border border-orange-600 rounded-lg hover:bg-orange-50">
            Kasa Sayım
          </button>
          <button
            onClick={() => setShowNewTransaction(true)}
            className="flex items-center px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700"
          >
            <Plus className="w-4 h-4 mr-2" />
            Yeni İşlem
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Nakit</p>
              <p className="text-2xl font-semibold text-gray-800 mt-1">
                ₺{totals.cash}
              </p>
            </div>
            <Wallet className="w-12 h-12 text-green-500 opacity-20" />
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Kredi Kartı</p>
              <p className="text-2xl font-semibold text-gray-800 mt-1">
                ₺{totals.card}
              </p>
            </div>
            <CreditCard className="w-12 h-12 text-blue-500 opacity-20" />
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Yemek Kartı</p>
              <p className="text-2xl font-semibold text-gray-800 mt-1">
                ₺{totals.meal}
              </p>
            </div>
            <DollarSign className="w-12 h-12 text-purple-500 opacity-20" />
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm">
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold text-gray-800">İşlem Geçmişi</h2>
            <div className="relative">
              <input
                type="text"
                placeholder="İşlem ara..."
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-orange-500 focus:border-orange-500"
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  İşlem No
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Saat
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Ürünler
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Ödeme
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Tutar
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {transactions.map((transaction) => (
                <tr key={transaction.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <Receipt className="w-4 h-4 text-gray-400 mr-2" />
                      <span className="text-sm font-medium text-gray-900">
                        {transaction.id}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center text-sm text-gray-500">
                      <Clock className="w-4 h-4 mr-2" />
                      {transaction.time}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm text-gray-900">
                      {transaction.items.map((item, index) => (
                        <div key={index}>{item}</div>
                      ))}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="text-sm text-gray-500">
                      {transaction.method}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right">
                    <span className="text-sm font-medium text-gray-900">
                      ₺{transaction.amount}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {showNewTransaction && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl p-6 max-w-md w-full">
            <h2 className="text-xl font-semibold mb-4">Yeni İşlem</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Ödeme Yöntemi
                </label>
                <select className="w-full rounded-lg border-gray-300 focus:ring-orange-500 focus:border-orange-500">
                  <option>Nakit</option>
                  <option>Kredi Kartı</option>
                  <option>Yemek Kartı</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Tutar
                </label>
                <input
                  type="number"
                  className="w-full rounded-lg border-gray-300 focus:ring-orange-500 focus:border-orange-500"
                  placeholder="0.00"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Açıklama
                </label>
                <textarea
                  rows={3}
                  className="w-full rounded-lg border-gray-300 focus:ring-orange-500 focus:border-orange-500"
                  placeholder="İşlem açıklaması..."
                />
              </div>

              <div className="flex justify-end space-x-2 pt-4">
                <button
                  type="button"
                  onClick={() => setShowNewTransaction(false)}
                  className="px-4 py-2 text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50"
                >
                  İptal
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700"
                >
                  Kaydet
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cashier;