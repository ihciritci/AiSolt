import React from 'react';
import { Package, Search, Filter, BarChart2 } from 'lucide-react';

const Inventory = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-800">Inventory Management</h2>
        <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 flex items-center">
          <Package className="h-5 w-5 mr-2" />
          Add New Item
        </button>
      </div>

      <div className="bg-white rounded-lg shadow">
        <div className="p-4 border-b flex justify-between items-center">
          <div className="relative flex-1 max-w-md">
            <input
              type="text"
              placeholder="Search inventory..."
              className="w-full pl-10 pr-4 py-2 border rounded-lg"
            />
            <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
          </div>
          <button className="ml-4 p-2 border rounded-lg hover:bg-gray-50">
            <Filter className="h-5 w-5 text-gray-500" />
          </button>
        </div>

        <div className="p-4">
          <table className="min-w-full">
            <thead>
              <tr className="text-left text-gray-500">
                <th className="pb-4">Item Name</th>
                <th className="pb-4">SKU</th>
                <th className="pb-4">Quantity</th>
                <th className="pb-4">Status</th>
                <th className="pb-4">Last Updated</th>
                <th className="pb-4">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {[1, 2, 3].map((_, index) => (
                <tr key={index} className="text-gray-800">
                  <td className="py-3">Product Name</td>
                  <td className="py-3">SKU-12345</td>
                  <td className="py-3">150</td>
                  <td className="py-3">
                    <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                      In Stock
                    </span>
                  </td>
                  <td className="py-3">2 hours ago</td>
                  <td className="py-3">
                    <button className="text-indigo-600 hover:text-indigo-800 mr-3">
                      Edit
                    </button>
                    <button className="text-red-600 hover:text-red-800">
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow p-4">
          <h3 className="text-lg font-semibold mb-4 flex items-center">
            <BarChart2 className="h-5 w-5 mr-2 text-indigo-600" />
            Stock Alerts
          </h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-2 bg-red-50 rounded">
              <span className="text-red-700">Low Stock Alert</span>
              <span className="text-red-700 font-medium">3 items</span>
            </div>
            <div className="flex items-center justify-between p-2 bg-yellow-50 rounded">
              <span className="text-yellow-700">Reorder Soon</span>
              <span className="text-yellow-700 font-medium">5 items</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Inventory;