import React from 'react';
import { Users, ShoppingBag, AlertTriangle, TrendingUp } from 'lucide-react';

const Dashboard = () => {
  const stats = [
    {
      title: 'Total Customers',
      value: '2,345',
      icon: <Users className="h-6 w-6 text-blue-600" />,
      change: '+12.5%',
    },
    {
      title: 'Inventory Items',
      value: '1,234',
      icon: <ShoppingBag className="h-6 w-6 text-green-600" />,
      change: '+3.2%',
    },
    {
      title: 'Alerts',
      value: '5',
      icon: <AlertTriangle className="h-6 w-6 text-red-600" />,
      change: '-2',
    },
    {
      title: 'Revenue',
      value: '$12,345',
      icon: <TrendingUp className="h-6 w-6 text-purple-600" />,
      change: '+15.3%',
    },
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-800">Dashboard Overview</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                <p className="text-2xl font-semibold text-gray-900">{stat.value}</p>
              </div>
              {stat.icon}
            </div>
            <div className="mt-4">
              <span className={`text-sm ${
                stat.change.startsWith('+') ? 'text-green-600' : 'text-red-600'
              }`}>
                {stat.change}
              </span>
              <span className="text-gray-600 text-sm ml-2">vs last month</span>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold mb-4">Recent Activities</h3>
          <div className="space-y-4">
            {/* Activity items would go here */}
            <div className="flex items-center justify-between py-2 border-b">
              <div className="flex items-center">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                <span>New inventory arrived</span>
              </div>
              <span className="text-sm text-gray-500">2 hours ago</span>
            </div>
            <div className="flex items-center justify-between py-2 border-b">
              <div className="flex items-center">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                <span>Staff meeting scheduled</span>
              </div>
              <span className="text-sm text-gray-500">4 hours ago</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold mb-4">Quick Actions</h3>
          <div className="grid grid-cols-2 gap-4">
            <button className="p-4 bg-indigo-50 rounded-lg text-indigo-700 hover:bg-indigo-100 transition-colors">
              Add New Staff
            </button>
            <button className="p-4 bg-green-50 rounded-lg text-green-700 hover:bg-green-100 transition-colors">
              Update Inventory
            </button>
            <button className="p-4 bg-purple-50 rounded-lg text-purple-700 hover:bg-purple-100 transition-colors">
              View Reports
            </button>
            <button className="p-4 bg-blue-50 rounded-lg text-blue-700 hover:bg-blue-100 transition-colors">
              Send Notifications
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;