import React, { useState } from 'react';
import { Camera, Bell, Search } from 'lucide-react';
import CameraFeed from '../components/CameraFeed';

const Surveillance = () => {
  const [selectedCamera, setSelectedCamera] = useState(1);
  const [mutedCameras, setMutedCameras] = useState<number[]>([]);
  const [searchQuery, setSearchQuery] = useState('');

  const cameras = [
    { id: 1, name: 'Mutfak', status: 'active' },
    { id: 2, name: 'Kasa', status: 'active' },
    { id: 3, name: 'Depo', status: 'active' },
    { id: 4, name: 'Giriş', status: 'warning' },
    { id: 5, name: 'Servis Alanı', status: 'active' },
    { id: 6, name: 'Arka Kapı', status: 'active' }
  ];

  const handleMuteToggle = (cameraId: number) => {
    setMutedCameras(prev => 
      prev.includes(cameraId) 
        ? prev.filter(id => id !== cameraId)
        : [...prev, cameraId]
    );
  };

  const handleFullscreen = (cameraId: number) => {
    const videoElement = document.querySelector(`video[data-camera-id="${cameraId}"]`) as HTMLVideoElement;
    if (videoElement) {
      videoElement.requestFullscreen();
    }
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Kamera Sistemi</h1>
        <button className="flex items-center px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700">
          <Bell className="w-4 h-4 mr-2" />
          Bildirimler
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Ana Kamera Görüntüsü */}
        <div className="lg:col-span-3">
          <CameraFeed
            id={selectedCamera}
            name={cameras.find(c => c.id === selectedCamera)?.name || ''}
            status={cameras.find(c => c.id === selectedCamera)?.status || 'active'}
            muted={mutedCameras.includes(selectedCamera)}
            onMuteToggle={handleMuteToggle}
            onFullscreen={handleFullscreen}
          />
        </div>

        {/* Kamera Listesi */}
        <div className="lg:col-span-1 space-y-4">
          <div className="bg-white rounded-xl shadow-sm p-4">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Kameralar</h2>
            <div className="space-y-2">
              {cameras.map((camera) => (
                <button
                  key={camera.id}
                  onClick={() => setSelectedCamera(camera.id)}
                  className={`flex items-center justify-between w-full p-3 rounded-lg transition-colors ${
                    selectedCamera === camera.id
                      ? 'bg-orange-50 text-orange-600'
                      : 'hover:bg-gray-50 text-gray-700'
                  }`}
                >
                  <div className="flex items-center">
                    <Camera className="w-4 h-4 mr-2" />
                    <span>{camera.name}</span>
                  </div>
                  <span
                    className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs ${
                      camera.status === 'active'
                        ? 'bg-green-100 text-green-800'
                        : 'bg-yellow-100 text-yellow-800'
                    }`}
                  >
                    {camera.status === 'active' ? 'Aktif' : 'Uyarı'}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Kayıt Arama */}
          <div className="bg-white rounded-xl shadow-sm p-4">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Kayıt Arama</h2>
            <div className="space-y-4">
              <div className="relative">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Kayıtlarda ara..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-orange-500 focus:border-orange-500"
                />
                <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
              </div>
              <button className="w-full flex items-center justify-center px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700">
                <Search className="w-4 h-4 mr-2" />
                Kayıtları Ara
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Surveillance;