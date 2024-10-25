import React from 'react';
import { UserPlus, Search } from 'lucide-react';

const StaffManagement = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-800">Staff Management</h2>
        <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 flex items-center">
          <UserPlus className="h-5 w-5 mr-2" />
          Add New Staff
        </button>
      </div>

      <div className="bg-white rounded-lg shadow">
        <div className="p-4 border-b">
          <div className="relative">
            <input
              type="text"
              placeholder="Search staff..."
              className="w-full pl-10 pr-4 py-2 border rounded-lg"
            />
            <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
          </div>
        </div>

        <div className="p-4">
          <table className="min-w-full">
            <thead>
              <tr className="text-left text-gray-500">
                <th className="pb-4">Name</th>
                <th className="pb-4">Position</th>
                <th className="pb-4">Status</th>
                <th className="pb-4">Last Active</th>
                <th className="pb-4">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {[1, 2, 3].map((_, index) => (
                <tr key={index} className="text-gray-800">
                  <td className="py-3">John Doe</td>
                  <td className="py-3">Manager</td>
                  <td className="py-3">
                    <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                      Active
                    </span>
                  </td>
                  <td className="py-3">2 hours ago</td>
                  <td className="py-3">
                    <button className="text-indigo-600 hover:text-indigo-800">
                      Edit
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

export default StaffManagement;