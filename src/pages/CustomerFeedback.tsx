import React from 'react';
import { MessageSquare, Star, ThumbsUp, BarChart2 } from 'lucide-react';

const CustomerFeedback = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-800">Customer Feedback</h2>
        <div className="flex space-x-4">
          <button className="bg-white border px-4 py-2 rounded-lg hover:bg-gray-50">
            Export Data
          </button>
          <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700">
            View Analytics
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold">Overall Rating</h3>
            <div className="flex items-center">
              <Star className="h-5 w-5 text-yellow-400 fill-current" />
              <span className="ml-2 font-bold">4.8</span>
            </div>
          </div>
          <div className="space-y-2">
            {[5, 4, 3, 2, 1].map((rating) => (
              <div key={rating} className="flex items-center">
                <span className="w-4">{rating}</span>
                <Star className="h-4 w-4 text-yellow-400 ml-1" />
                <div className="flex-1 ml-2 h-2 bg-gray-100 rounded-full">
                  <div
                    className="h-2 bg-yellow-400 rounded-full"
                    style={{ width: `${Math.random() * 100}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="md:col-span-2 bg-white rounded-lg shadow">
          <div className="p-6 border-b">
            <h3 className="text-lg font-semibold">Recent Feedback</h3>
          </div>
          <div className="p-6 space-y-6">
            {[1, 2, 3].map((_, index) => (
              <div key={index} className="border-b last:border-0 pb-6 last:pb-0">
                <div className="flex justify-between items-start">
                  <div>
                    <div className="flex items-center">
                      <span className="font-medium">John Doe</span>
                      <span className="mx-2">•</span>
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className="h-4 w-4 text-yellow-400 fill-current"
                          />
                        ))}
                      </div>
                    </div>
                    <p className="mt-2 text-gray-600">
                      Great service and friendly staff! Would definitely recommend.
                    </p>
                  </div>
                  <span className="text-sm text-gray-500">2 days ago</span>
                </div>
                <div className="mt-3 flex items-center space-x-4">
                  <button className="flex items-center text-gray-500 hover:text-gray-700">
                    <ThumbsUp className="h-4 w-4 mr-1" />
                    <span>Helpful</span>
                  </button>
                  <button className="flex items-center text-gray-500 hover:text-gray-700">
                    <MessageSquare className="h-4 w-4 mr-1" />
                    <span>Reply</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold">Feedback Analytics</h3>
          <select className="border rounded-lg px-3 py-2">
            <option>Last 7 days</option>
            <option>Last 30 days</option>
            <option>Last 90 days</option>
          </select>
        </div>
        <div className="flex items-center justify-center h-64">
          <BarChart2 className="h-full w-full text-gray-200" />
        </div>
      </div>
    </div>
  );
};

export default CustomerFeedback;