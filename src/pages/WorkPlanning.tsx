import React from 'react';
import { Calendar as CalendarIcon, Clock, Users } from 'lucide-react';

const WorkPlanning = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-800">Work Planning</h2>
        <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 flex items-center">
          <CalendarIcon className="h-5 w-5 mr-2" />
          Create Schedule
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold mb-4">Weekly Schedule</h3>
          <div className="grid grid-cols-7 gap-4">
            {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day) => (
              <div key={day} className="text-center">
                <div className="font-medium text-gray-500">{day}</div>
                <div className="mt-2 h-24 border rounded-lg p-2">
                  <div className="text-xs bg-blue-100 text-blue-800 rounded p-1 mb-1">
                    Morning Shift
                  </div>
                  <div className="text-xs bg-green-100 text-green-800 rounded p-1">
                    Evening Shift
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-white rounded-lg shadow p-4">
            <h3 className="text-lg font-semibold mb-4">Today's Shifts</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
                <div className="flex items-center">
                  <Clock className="h-5 w-5 text-gray-500 mr-2" />
                  <div>
                    <div className="font-medium">Morning Shift</div>
                    <div className="text-sm text-gray-500">08:00 - 16:00</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <Users className="h-5 w-5 text-gray-500 mr-1" />
                  <span>4</span>
                </div>
              </div>
              <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
                <div className="flex items-center">
                  <Clock className="h-5 w-5 text-gray-500 mr-2" />
                  <div>
                    <div className="font-medium">Evening Shift</div>
                    <div className="text-sm text-gray-500">16:00 - 00:00</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <Users className="h-5 w-5 text-gray-500 mr-1" />
                  <span>3</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkPlanning;