import React from 'react';
import { Volume2, VolumeX, Maximize2, AlertTriangle, Camera } from 'lucide-react';

interface CameraFeedProps {
  id: number;
  name: string;
  status: 'active' | 'warning';
  muted: boolean;
  onMuteToggle: (id: number) => void;
  onFullscreen: (id: number) => void;
}

const CameraFeed = ({ id, name, status, muted, onMuteToggle, onFullscreen }: CameraFeedProps) => {
  // Test stream URL'leri
  const getStreamUrl = (id: number) => {
    const streams = {
      1: 'https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8',
      2: 'https://cph-p2p-msl.akamaized.net/hls/live/2000341/test/master.m3u8',
      3: 'https://demo.unified-streaming.com/k8s/features/stable/video/tears-of-steel/tears-of-steel.ism/.m3u8',
      4: 'https://test-streams.mux.dev/test.m3u8'
    };
    return streams[id as keyof typeof streams] || streams[1];
  };

  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden">
      <div className="p-4 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Camera className="w-5 h-5 text-gray-400 mr-2" />
            <h2 className="text-lg font-semibold text-gray-900">{name}</h2>
          </div>
          <span
            className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
              status === 'active'
                ? 'bg-green-100 text-green-800'
                : 'bg-yellow-100 text-yellow-800'
            }`}
          >
            {status === 'active' ? (
              'Aktif'
            ) : (
              <>
                <AlertTriangle className="w-3 h-3 mr-1" />
                Kontrol Gerekli
              </>
            )}
          </span>
        </div>
      </div>
      
      <div className="relative aspect-video bg-gray-900">
        <video
          key={id}
          data-camera-id={id}
          src={getStreamUrl(id)}
          autoPlay
          playsInline
          muted={muted}
          controls
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-4 right-4 flex space-x-2">
          <button
            onClick={() => onMuteToggle(id)}
            className="p-2 bg-black bg-opacity-50 rounded-full text-white hover:bg-opacity-75"
          >
            {muted ? (
              <VolumeX className="w-4 h-4" />
            ) : (
              <Volume2 className="w-4 h-4" />
            )}
          </button>
          <button
            onClick={() => onFullscreen(id)}
            className="p-2 bg-black bg-opacity-50 rounded-full text-white hover:bg-opacity-75"
          >
            <Maximize2 className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div className="p-4">
        <div className="flex justify-between items-center text-sm text-gray-500">
          <span>Son güncelleme: 1 dk önce</span>
          <button 
            onClick={() => onFullscreen(id)}
            className="text-orange-600 hover:text-orange-900"
          >
            Tam Ekran
          </button>
        </div>
      </div>
    </div>
  );
};

export default CameraFeed;