import React from 'react';
import { Settings } from 'lucide-react';

interface SettingsProps {
  currentLang: string;
  settings: {
    autoResponse: boolean;
    workHours: boolean;
    holidays: boolean;
  };
  onToggle: (setting: string) => void;
}

const AutoResponseSettings: React.FC<SettingsProps> = ({ currentLang, settings, onToggle }) => {
  const labels = {
    tr: {
      title: 'Yanıt Ayarları',
      autoResponse: 'Otomatik Yanıt Aktif',
      workHours: 'Mesai Saati Kontrolü',
      holidays: 'Tatil Günü Kontrolü'
    },
    en: {
      title: 'Response Settings',
      autoResponse: 'Auto Response Active',
      workHours: 'Work Hours Check',
      holidays: 'Holiday Check'
    }
  };

  return (
    <div className="bg-white rounded-lg shadow p-4">
      <h3 className="text-lg font-semibold mb-4 flex items-center">
        <Settings className="h-5 w-5 mr-2 text-gray-500" />
        {labels[currentLang].title}
      </h3>
      <div className="space-y-4">
        {Object.entries(settings).map(([key, value]) => (
          <div key={key} className="flex items-center justify-between">
            <span>{labels[currentLang][key]}</span>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                className="sr-only peer"
                checked={value}
                onChange={() => onToggle(key)}
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AutoResponseSettings;