import React, { useState } from 'react';
import { ShoppingCart, Clock, Check, Truck, ChevronDown, ChevronUp, Phone, MapPin } from 'lucide-react';

interface Order {
  id: string;
  customer: string;
  items: string[];
  total: string;
  status: 'pending' | 'preparing' | 'delivering' | 'delivered';
  time: string;
  phone?: string;
  address?: string;
  paymentMethod: string;
  deliveryNotes?: string;
}

interface CollapsibleSectionProps {
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
  count: number;
}

const CollapsibleSection: React.FC<CollapsibleSectionProps> = ({ 
  title, 
  icon, 
  children,
  count
}) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="bg-white rounded-xl shadow-sm">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-6 text-left border-b border-gray-200"
      >
        <div className="flex items-center">
          {icon}
          <h2 className="text-lg font-semibold text-gray-900 ml-2">
            {title} <span className="text-gray-500">({count})</span>
          </h2>
        </div>
        {isOpen ? (
          <ChevronUp className="w-5 h-5 text-gray-500" />
        ) : (
          <ChevronDown className="w-5 h-5 text-gray-500" />
        )}
      </button>
      {isOpen && <div className="p-6">{children}</div>}
    </div>
  );
};

const Orders = () => {
  const orders: Order[] = [
    {
      id: '#S1234',
      customer: 'Ahmet K.',
      items: ['1x Et Döner Dürüm', '1x Ayran'],
      total: '₺85',
      status: 'preparing',
      time: '5 dk önce',
      phone: '0532 XXX XX XX',
      address: 'Merkez Mah. 123 Sok. No:4 D:5',
      paymentMethod: 'Online Ödeme',
      deliveryNotes: 'Kapıda zil çalınmasın'
    },
    {
      id: '#S1235',
      customer: 'Fatma Y.',
      items: ['2x Tavuk Döner', '2x Kola', '1x Pide'],
      total: '₺165',
      status: 'delivering',
      time: '15 dk önce',
      phone: '0533 XXX XX XX',
      address: 'Yeni Mah. 456 Sok. No:8',
      paymentMethod: 'Kapıda Ödeme'
    },
    {
      id: '#S1236',
      customer: 'Mehmet A.',
      items: ['1x İskender', '1x Künefe', '2x Ayran'],
      total: '₺175',
      status: 'pending',
      time: '2 dk önce',
      phone: '0534 XXX XX XX',
      address: 'Atatürk Mah. 789 Sok. No:12',
      paymentMethod: 'Online Ödeme'
    }
  ];

  const getStatusColor = (status: Order['status']) => {
    switch (status) {
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'preparing':
        return 'bg-blue-100 text-blue-800';
      case 'delivering':
        return 'bg-purple-100 text-purple-800';
      case 'delivered':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusText = (status: Order['status']) => {
    switch (status) {
      case 'pending':
        return 'Onay Bekliyor';
      case 'preparing':
        return 'Hazırlanıyor';
      case 'delivering':
        return 'Yolda';
      case 'delivered':
        return 'Teslim Edildi';
      default:
        return status;
    }
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Online Siparişler</h1>
        <div className="flex space-x-2">
          <button className="px-4 py-2 text-orange-600 border border-orange-600 rounded-lg hover:bg-orange-50">
            Geçmiş Siparişler
          </button>
          <button className="flex items-center px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700">
            <ShoppingCart className="w-4 h-4 mr-2" />
            Yeni Sipariş
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {orders.map((order) => (
          <div key={order.id} className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex justify-between items-start mb-4">
              <div>
                <span className="text-sm font-medium text-gray-900">
                  {order.id}
                </span>
                <h3 className="text-lg font-semibold text-gray-900 mt-1">
                  {order.customer}
                </h3>
              </div>
              <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(order.status)}`}>
                {getStatusText(order.status)}
              </span>
            </div>

            <div className="space-y-1 mb-4">
              {order.items.map((item, index) => (
                <p key={index} className="text-sm text-gray-600">
                  {item}
                </p>
              ))}
            </div>

            <div className="border-t border-gray-200 pt-4 space-y-2">
              <div className="flex items-center text-sm text-gray-600">
                <Phone className="w-4 h-4 mr-2" />
                {order.phone}
              </div>
              <div className="flex items-start text-sm text-gray-600">
                <MapPin className="w-4 h-4 mr-2 mt-0.5" />
                <span>{order.address}</span>
              </div>
              {order.deliveryNotes && (
                <p className="text-sm text-gray-600 italic">
                  Not: {order.deliveryNotes}
                </p>
              )}
            </div>

            <div className="flex justify-between items-center mt-4 pt-4 border-t border-gray-200">
              <div className="flex items-center text-sm text-gray-500">
                <Clock className="w-4 h-4 mr-1" />
                {order.time}
              </div>
              <div className="text-right">
                <span className="text-sm text-gray-500">{order.paymentMethod}</span>
                <p className="text-lg font-semibold text-gray-900 mt-1">
                  {order.total}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders;