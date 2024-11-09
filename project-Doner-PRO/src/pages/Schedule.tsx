import React, { useState } from 'react';
import { Users, AlertCircle, ChevronLeft, ChevronRight, Plus, X, ChevronDown, ChevronUp } from 'lucide-react';

interface StaffMember {
  id: number;
  name: string;
  role: string;
  image: string;
  status: 'active' | 'leave' | 'sick';
  startDate?: string;
  endDate?: string;
  reason?: string;
}

interface CollapsibleSectionProps {
  title: string;
  count: number;
  icon: React.ReactNode;
  children: React.ReactNode;
  bgColor?: string;
}

const CollapsibleSection: React.FC<CollapsibleSectionProps> = ({ 
  title, 
  count, 
  icon, 
  children,
  bgColor = 'bg-gray-50'
}) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between text-left"
      >
        <h2 className="text-lg font-semibold text-gray-900 flex items-center">
          {icon}
          {title} ({count})
        </h2>
        {isOpen ? (
          <ChevronUp className="w-5 h-5 text-gray-500" />
        ) : (
          <ChevronDown className="w-5 h-5 text-gray-500" />
        )}
      </button>
      {isOpen && (
        <div className={`space-y-3 mt-4 transition-all duration-200 ${bgColor}`}>
          {children}
        </div>
      )}
    </div>
  );
};

const Schedule = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [showAddModal, setShowAddModal] = useState(false);
  const [selectedStatus, setSelectedStatus] = useState<'leave' | 'sick'>('leave');
  const [selectedStaff, setSelectedStaff] = useState<StaffMember | null>(null);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [reason, setReason] = useState('');
  
  const [activeStaff, setActiveStaff] = useState<StaffMember[]>([
    {
      id: 1,
      name: 'Mehmet Demir',
      role: 'Şef',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop',
      status: 'active'
    },
    {
      id: 2,
      name: 'Ali Yılmaz',
      role: 'Döner Ustası',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop',
      status: 'active'
    },
    {
      id: 3,
      name: 'Ayşe Kaya',
      role: 'Kasiyer',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop',
      status: 'active'
    },
    {
      id: 4,
      name: 'Fatma Şahin',
      role: 'Garson',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop',
      status: 'active'
    },
    {
      id: 5,
      name: 'Hasan Yıldız',
      role: 'Pideci',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop',
      status: 'active'
    },
    {
      id: 6,
      name: 'Zeynep Çelik',
      role: 'Bulaşıkçı',
      image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop',
      status: 'active'
    }
  ]);

  const [sickStaff, setSickStaff] = useState<StaffMember[]>([]);
  const [leaveStaff, setLeaveStaff] = useState<StaffMember[]>([]);

  const handleAddStaffStatus = () => {
    if (!selectedStaff || !startDate || !endDate) return;

    const updatedStaff = { 
      ...selectedStaff,
      status: selectedStatus,
      startDate,
      endDate,
      reason
    };

    if (selectedStatus === 'sick') {
      setSickStaff([...sickStaff, updatedStaff]);
    } else {
      setLeaveStaff([...leaveStaff, updatedStaff]);
    }

    // Remove from active staff
    setActiveStaff(activeStaff.filter(staff => staff.id !== selectedStaff.id));

    // Reset form
    setSelectedStaff(null);
    setStartDate('');
    setEndDate('');
    setReason('');
    setShowAddModal(false);
  };

  const navigateWeek = (direction: 'prev' | 'next') => {
    const newDate = new Date(currentDate);
    if (direction === 'prev') {
      newDate.setDate(newDate.getDate() - 7);
    } else {
      newDate.setDate(newDate.getDate() + 7);
    }
    setCurrentDate(newDate);
  };

  const formatDateRange = () => {
    const start = new Date(currentDate);
    start.setDate(start.getDate() - start.getDay());
    const end = new Date(start);
    end.setDate(end.getDate() + 6);

    return `${start.toLocaleDateString('tr-TR', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })} - ${end.toLocaleDateString('tr-TR', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })}`;
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Vardiya Planı</h1>
        <div className="flex space-x-2">
          <button 
            onClick={() => setShowAddModal(true)}
            className="flex items-center px-4 py-2 text-orange-600 border border-orange-600 rounded-lg hover:bg-orange-50"
          >
            <Plus className="w-4 h-4 mr-2" />
            İzin/Rapor Ekle
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        {/* Çalışan Personel */}
        <CollapsibleSection
          title="Çalışan Personel"
          count={activeStaff.length}
          icon={<Users className="w-5 h-5 mr-2 text-green-500" />}
        >
          {activeStaff.map(staff => (
            <div key={staff.id} className="flex items-center p-3 bg-gray-50 rounded-lg">
              <img
                src={staff.image}
                alt={staff.name}
                className="w-10 h-10 rounded-full object-cover"
              />
              <div className="ml-3">
                <p className="text-sm font-medium text-gray-900">{staff.name}</p>
                <p className="text-xs text-gray-500">{staff.role}</p>
              </div>
            </div>
          ))}
        </CollapsibleSection>

        {/* İzinli Personel */}
        <CollapsibleSection
          title="İzinli Personel"
          count={leaveStaff.length}
          icon={<Users className="w-5 h-5 mr-2 text-blue-500" />}
          bgColor="bg-blue-50"
        >
          {leaveStaff.map(staff => (
            <div key={staff.id} className="flex items-center p-3 bg-blue-50 rounded-lg">
              <img
                src={staff.image}
                alt={staff.name}
                className="w-10 h-10 rounded-full object-cover"
              />
              <div className="ml-3 flex-1">
                <p className="text-sm font-medium text-gray-900">{staff.name}</p>
                <p className="text-xs text-gray-500">
                  {staff.startDate} - {staff.endDate}
                </p>
              </div>
            </div>
          ))}
        </CollapsibleSection>

        {/* Hasta Personel */}
        <CollapsibleSection
          title="Hasta Personel"
          count={sickStaff.length}
          icon={<AlertCircle className="w-5 h-5 mr-2 text-red-500" />}
          bgColor="bg-red-50"
        >
          {sickStaff.map(staff => (
            <div key={staff.id} className="flex items-center p-3 bg-red-50 rounded-lg">
              <img
                src={staff.image}
                alt={staff.name}
                className="w-10 h-10 rounded-full object-cover"
              />
              <div className="ml-3 flex-1">
                <p className="text-sm font-medium text-gray-900">{staff.name}</p>
                <p className="text-xs text-gray-500">
                  {staff.startDate} - {staff.endDate}
                </p>
              </div>
            </div>
          ))}
        </CollapsibleSection>
      </div>

      {/* Haftalık Plan */}
      <div className="bg-white rounded-lg shadow-sm p-4 mb-6">
        <div className="flex items-center justify-between mb-4">
          <button
            onClick={() => navigateWeek('prev')}
            className="p-2 hover:bg-gray-100 rounded-lg"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <span className="text-lg font-medium">{formatDateRange()}</span>
          <button
            onClick={() => navigateWeek('next')}
            className="p-2 hover:bg-gray-100 rounded-lg"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        <div className="grid grid-cols-7 gap-4">
          {Array.from({ length: 7 }).map((_, index) => {
            const date = new Date(currentDate);
            date.setDate(currentDate.getDate() - currentDate.getDay() + index);
            const isToday = new Date().toDateString() === date.toDateString();
            
            return (
              <div key={index} className={`bg-white rounded-lg ${isToday ? 'ring-2 ring-orange-500' : 'border border-gray-200'}`}>
                <div className={`p-3 border-b text-sm font-medium ${isToday ? 'text-orange-600' : 'text-gray-700'}`}>
                  {date.toLocaleDateString('tr-TR', { weekday: 'short', day: 'numeric' })}
                </div>
                <div className="p-2 space-y-2">
                  {activeStaff.map(employee => (
                    <div
                      key={employee.id}
                      className="flex items-center p-2 bg-orange-50 rounded-lg hover:bg-orange-100 transition-colors"
                    >
                      <img
                        src={employee.image}
                        alt={employee.name}
                        className="w-8 h-8 rounded-full object-cover border-2 border-white"
                      />
                      <div className="ml-2 overflow-hidden">
                        <div className="text-xs font-medium text-gray-900 truncate">
                          {employee.name}
                        </div>
                        <div className="text-xs text-gray-500 truncate">
                          {employee.role}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* İzin/Rapor Ekleme Modal */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl p-6 max-w-md w-full">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">İzin/Rapor Ekle</h2>
              <button
                onClick={() => setShowAddModal(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            
            <form onSubmit={(e) => { e.preventDefault(); handleAddStaffStatus(); }} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Durum
                </label>
                <select
                  value={selectedStatus}
                  onChange={(e) => setSelectedStatus(e.target.value as 'leave' | 'sick')}
                  className="w-full rounded-lg border-gray-300 focus:ring-orange-500 focus:border-orange-500"
                >
                  <option value="leave">İzin</option>
                  <option value="sick">Rapor</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Personel
                </label>
                <select
                  value={selectedStaff?.id || ''}
                  onChange={(e) => {
                    const staff = activeStaff.find(s => s.id === Number(e.target.value));
                    setSelectedStaff(staff || null);
                  }}
                  className="w-full rounded-lg border-gray-300 focus:ring-orange-500 focus:border-orange-500"
                >
                  <option value="">Personel Seçin</option>
                  {activeStaff.map(staff => (
                    <option key={staff.id} value={staff.id}>
                      {staff.name} - {staff.role}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Başlangıç Tarihi
                </label>
                <input
                  type="date"
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                  className="w-full rounded-lg border-gray-300 focus:ring-orange-500 focus:border-orange-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Bitiş Tarihi
                </label>
                <input
                  type="date"
                  value={endDate}
                  onChange={(e) => setEndDate(e.target.value)}
                  className="w-full rounded-lg border-gray-300 focus:ring-orange-500 focus:border-orange-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Açıklama
                </label>
                <textarea
                  value={reason}
                  onChange={(e) => setReason(e.target.value)}
                  rows={3}
                  className="w-full rounded-lg border-gray-300 focus:ring-orange-500 focus:border-orange-500"
                  placeholder="İzin/Rapor sebebi..."
                />
              </div>

              <div className="flex justify-end space-x-2 pt-4">
                <button
                  type="button"
                  onClick={() => setShowAddModal(false)}
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

export default Schedule;