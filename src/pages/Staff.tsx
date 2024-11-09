import React, { useState } from 'react';
import { Users, Mail, Phone, X } from 'lucide-react';

const Staff = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedStaff, setSelectedStaff] = useState(null);

  const staff = [
    {
      id: 1,
      name: 'Mehmet Demir',
      role: 'Şef',
      email: 'mehmet@donerpro.com',
      phone: '0532 XXX XX XX',
      status: 'active',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
      id: 2,
      name: 'Mustafa Yıldız',
      role: 'Döner Ustası',
      email: 'mustafa@donerpro.com',
      phone: '0533 XXX XX XX',
      status: 'active',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
      id: 3,
      name: 'Ali Kaya',
      role: 'Pideci',
      email: 'ali@donerpro.com',
      phone: '0534 XXX XX XX',
      status: 'active',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
      id: 4,
      name: 'Ayşe Arslan',
      role: 'Kasiyer',
      email: 'ayse@donerpro.com',
      phone: '0535 XXX XX XX',
      status: 'active',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
      id: 5,
      name: 'Fatma Çelik',
      role: 'Garson',
      email: 'fatma@donerpro.com',
      phone: '0536 XXX XX XX',
      status: 'active',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
      id: 6,
      name: 'Hasan Şahin',
      role: 'Malzeme Hazırlık',
      email: 'hasan@donerpro.com',
      phone: '0537 XXX XX XX',
      status: 'active',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
      id: 7,
      name: 'Zeynep Öztürk',
      role: 'Bulaşıkçı',
      email: 'zeynep@donerpro.com',
      phone: '0538 XXX XX XX',
      status: 'active',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
      id: 8,
      name: 'İbrahim Aydın',
      role: 'Temizlik Görevlisi',
      email: 'ibrahim@donerpro.com',
      phone: '0539 XXX XX XX',
      status: 'active',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  ];

  const handleEditClick = (person) => {
    setSelectedStaff(person);
    setShowModal(true);
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Personel Yönetimi</h1>
        <button 
          onClick={() => {
            setSelectedStaff(null);
            setShowModal(true);
          }}
          className="flex items-center px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700"
        >
          <Users className="w-4 h-4 mr-2" />
          Personel Ekle
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {staff.map((person) => (
          <div key={person.id} className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center">
              <img
                className="h-16 w-16 rounded-full object-cover"
                src={person.image}
                alt={person.name}
              />
              <div className="ml-4">
                <h2 className="text-lg font-semibold text-gray-900">
                  {person.name}
                </h2>
                <p className="text-sm text-gray-500">{person.role}</p>
              </div>
            </div>
            <div className="mt-4 space-y-2">
              <div className="flex items-center text-sm text-gray-600">
                <Mail className="w-4 h-4 mr-2" />
                {person.email}
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <Phone className="w-4 h-4 mr-2" />
                {person.phone}
              </div>
            </div>
            <div className="mt-4 flex space-x-2">
              <button 
                onClick={() => handleEditClick(person)}
                className="flex-1 px-4 py-2 text-sm text-orange-600 border border-orange-600 rounded-lg hover:bg-orange-50"
              >
                Düzenle
              </button>
              <button className="flex-1 px-4 py-2 text-sm text-white bg-orange-600 rounded-lg hover:bg-orange-700">
                Vardiya Planı
              </button>
            </div>
          </div>
        ))}
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl p-6 w-full max-w-md">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">
                {selectedStaff ? 'Personel Düzenle' : 'Yeni Personel Ekle'}
              </h2>
              <button
                onClick={() => setShowModal(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  İsim Soyisim
                </label>
                <input
                  type="text"
                  defaultValue={selectedStaff?.name}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Pozisyon
                </label>
                <select
                  defaultValue={selectedStaff?.role}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
                >
                  <option>Şef</option>
                  <option>Döner Ustası</option>
                  <option>Pideci</option>
                  <option>Kasiyer</option>
                  <option>Garson</option>
                  <option>Malzeme Hazırlık</option>
                  <option>Bulaşıkçı</option>
                  <option>Temizlik Görevlisi</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  E-posta
                </label>
                <input
                  type="email"
                  defaultValue={selectedStaff?.email}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Telefon
                </label>
                <input
                  type="tel"
                  defaultValue={selectedStaff?.phone}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
                />
              </div>
              <div className="flex space-x-2">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="flex-1 px-4 py-2 text-sm text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50"
                >
                  İptal
                </button>
                <button
                  type="submit"
                  className="flex-1 px-4 py-2 text-sm text-white bg-orange-600 rounded-lg hover:bg-orange-700"
                >
                  {selectedStaff ? 'Güncelle' : 'Ekle'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Staff;