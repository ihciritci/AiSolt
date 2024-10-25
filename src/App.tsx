import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import MainContent from './components/MainContent';
import { Camera, Users, Calendar, MessageSquare, Package, MessageSquare as FeedbackIcon, BarChart2, Database, Clock } from 'lucide-react';

function App() {
  const menuItems = [
    { icon: <Database size={20} />, label: 'Gösterge Paneli', path: '/' },
    { icon: <Camera size={20} />, label: 'Kamera Analizi', path: '/camera' },
    { icon: <Clock size={20} />, label: 'Personel Takibi', path: '/attendance' },
    { icon: <Calendar size={20} />, label: 'İş Planı', path: '/planning' },
    { icon: <MessageSquare size={20} />, label: 'Otomatik Yanıt', path: '/auto-response' },
    { icon: <Package size={20} />, label: 'Envanter', path: '/inventory' },
    { icon: <FeedbackIcon size={20} />, label: 'Müşteri Geri Bildirimi', path: '/feedback' },
    { icon: <BarChart2 size={20} />, label: 'Raporlar', path: '/reports' },
    { icon: <Users size={20} />, label: 'Personel Yönetimi', path: '/staff' }
  ];

  return (
    <Router>
      <div className="flex h-screen bg-gray-50">
        <Sidebar menuItems={menuItems} />
        <div className="flex-1 flex flex-col overflow-hidden">
          <Header />
          <MainContent />
        </div>
      </div>
    </Router>
  );
}

export default App;