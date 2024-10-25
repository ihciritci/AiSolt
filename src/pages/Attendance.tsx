import React from 'react';
import { Clock, UserCheck, Calendar, Search } from 'lucide-react';

const Attendance = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-800">Attendance Tracking</h2>
        <div className="flex space-x-4">
          <button className="flex items-center px-4 py-2 border rounded-lg hover:bg-gray-50">
            <Calendar className="h-5 w-5 mr-2" />
            View Calendar
          </button>
          <button className="flex items-center px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
            <Clock className="h-5 w-5 mr-2" />
            Mark Attendance
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Present Today</p>
              <p className="text-2xl font-bold">24/30</p>
            </div>
            <UserCheck className="h-8 w-8 text-green-500" />
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Absent</p>
              <p className="text-2xl font-bold">6</p>
            </div>
            <UserCheck className="h-8 w-8 text-red-500" />
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Late Arrivals</p>
              <p className="text-2xl font-bold">3</p>
            </div>
            <Clock className="h-8 w-8 text-yellow-500" />
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">On Time</p>
              <p className="text-2xl font-bold">21</p>
            </div>
            <Clock className="h-8 w-8 text-green-500" />
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow">
        <div className="p-4 border-b flex justify-between items-center">
          <div className="relative flex-1 max-w-md">
            <input
              type="text"
              placeholder="Search staff..."
              className="w-full pl-10 pr-4 py-2 border rounded-lg"
            />
            <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
          </div>
          <div className="flex space-x-4">
            <select className="border rounded-lg px-3 py-2">
              <option>All Departments</option>
              <option>Sales</option>
              <option>Marketing</option>
              <option>IT</option>
            </select>
            <select className="border rounded-lg px-3 py-2">
              <option>Today</option>
              <option>Yesterday</option>
              <option>Last 7 days</option>
              <option>This month</option>
            </select>
          </div>
        </div>

        <div className="p-4">
          <table className="min-w-full">
            <thead>
              <tr className="text-left text-gray-500">
                <th className="pb-4">Employee</th>
                <th className="pb-4">Department</th>
                <th className="pb-4">Clock In</th>
                <th className="pb-4">Clock Out</th>
                <th className="pb-4">Status</th>
                <th className="pb-4">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {[1, 2, 3].map((_, index) => (
                <tr key={index} className="text-gray-800">
                  <td className="py-3">John Doe</td>
                  <td className="py-3">Sales</td>
                  <td className="py-3">09:00 AM</td>
                  <td className="py-3">05:00 PM</td>
                  <td className="py-3">
                    <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                      Present
                    </span>
                  </td>
                  <td className="py-3">
                    <button className="text-indigo-600 hover:text-indigo-800">
                      View Details
                    </button>
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

export default Attendance;