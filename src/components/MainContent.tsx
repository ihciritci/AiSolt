import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import CameraAnalytics from '../pages/CameraAnalytics';
import StaffManagement from '../pages/StaffManagement';
import WorkPlanning from '../pages/WorkPlanning';
import AutomatedResponse from '../pages/AutomatedResponse';
import Inventory from '../pages/Inventory';
import CustomerFeedback from '../pages/CustomerFeedback';
import Reports from '../pages/Reports';
import Attendance from '../pages/Attendance';

const MainContent = () => {
  return (
    <main className="flex-1 overflow-y-auto bg-gray-50 p-6">
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/camera" element={<CameraAnalytics />} />
        <Route path="/staff" element={<StaffManagement />} />
        <Route path="/planning" element={<WorkPlanning />} />
        <Route path="/auto-response" element={<AutomatedResponse />} />
        <Route path="/inventory" element={<Inventory />} />
        <Route path="/feedback" element={<CustomerFeedback />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/attendance" element={<Attendance />} />
      </Routes>
    </main>
  );
};

export default MainContent;