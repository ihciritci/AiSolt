import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import Attendance from './pages/Attendance';
import Cashier from './pages/Cashier';
import Surveillance from './pages/Surveillance';
import Orders from './pages/Orders';
import Documents from './pages/Documents';
import Inventory from './pages/Inventory';
import Analytics from './pages/Analytics';

const App = () => {
  return (
    <Router>
      <div className="flex h-screen bg-gray-50">
        <Sidebar />
        <div className="flex-1 overflow-auto">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/attendance" element={<Attendance />} />
            <Route path="/cashier" element={<Cashier />} />
            <Route path="/surveillance" element={<Surveillance />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/documents" element={<Documents />} />
            <Route path="/inventory" element={<Inventory />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;