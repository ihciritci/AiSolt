import React, { useState } from 'react';
import Webcam from 'react-webcam';
import { Camera, Users, AlertCircle } from 'lucide-react';

const CameraAnalytics = () => {
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-800">Camera Analytics</h2>
        <button 
          onClick={() => setIsAnalyzing(!isAnalyzing)}
          className={`px-4 py-2 rounded-lg ${
            isAnalyzing 
              ? 'bg-red-100 text-red-700 hover:bg-red-200' 
              : 'bg-green-100 text-green-700 hover:bg-green-200'
          }`}
        >
          {isAnalyzing ? 'Stop Analysis' : 'Start Analysis'}
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white rounded-lg shadow p-4">
          <div className="aspect-video bg-gray-100 rounded-lg overflow-hidden">
            <Webcam
              className="w-full h-full object-cover"
              mirrored={false}
              screenshotFormat="image/jpeg"
            />
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-white rounded-lg shadow p-4">
            <h3 className="text-lg font-semibold mb-4">Real-time Analytics</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Users className="h-5 w-5 text-blue-600 mr-2" />
                  <span>Current Occupancy</span>
                </div>
                <span className="font-semibold">24</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <AlertCircle className="h-5 w-5 text-yellow-600 mr-2" />
                  <span>Anomalies Detected</span>
                </div>
                <span className="font-semibold">2</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Camera className="h-5 w-5 text-green-600 mr-2" />
                  <span>Camera Status</span>
                </div>
                <span className="text-green-600 font-semibold">Active</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-4">
            <h3 className="text-lg font-semibold mb-4">Recent Events</h3>
            <div className="space-y-3">
              <div className="flex items-center text-sm">
                <span className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></span>
                <span>Unusual movement detected - Zone A</span>
              </div>
              <div className="flex items-center text-sm">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                <span>Peak hour traffic detected</span>
              </div>
              <div className="flex items-center text-sm">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                <span>Customer count updated</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CameraAnalytics;