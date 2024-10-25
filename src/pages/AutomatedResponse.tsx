import React, { useState, useEffect } from 'react';
import { Plus } from 'lucide-react';
import AutoResponseCard from '../components/AutoResponseCard';
import AutoResponseSettings from '../components/AutoResponseSettings';
import AutoResponseStats from '../components/AutoResponseStats';

const defaultResponses = [
  {
    id: '1',
    title: {
      tr: 'Mesai Saatleri Dışında',
      en: 'Outside Working Hours'
    },
    message: {
      tr: 'Şu anda mesai saatleri dışındayız. En kısa sürede size dönüş yapacağız.',
      en: 'We are currently outside working hours. We will get back to you as soon as possible.'
    },
    active: true,
    schedule: '18:00 - 09:00'
  },
  {
    id: '2',
    title: {
      tr: 'Tatil Günleri',
      en: 'Holidays'
    },
    message: {
      tr: 'Tatil nedeniyle kapalıyız. İş günü size dönüş yapacağız.',
      en: 'We are closed for the holiday. We will get back to you on the next business day.'
    },
    active: false,
    schedule: 'Weekends/Hafta sonu'
  },
  {
    id: '3',
    title: {
      tr: 'Yoğun Dönem',
      en: 'Peak Hours'
    },
    message: {
      tr: 'Şu anda yoğun bir dönemdeyiz. En kısa sürede size dönüş yapacağız.',
      en: 'We are currently experiencing high volume. We will get back to you as soon as possible.'
    },
    active: true,
    schedule: '24/7'
  }
];

const AutomatedResponse = () => {
  const [currentLang, setCurrentLang] = useState('tr');
  const [responses, setResponses] = useState(defaultResponses);
  const [settings, setSettings] = useState({
    autoResponse: true,
    workHours: true,
    holidays: false
  });

  // Detect browser language on component mount
  useEffect(() => {
    const browserLang = navigator.language.toLowerCase().startsWith('tr') ? 'tr' : 'en';
    setCurrentLang(browserLang);
  }, []);

  const handleToggleResponse = (id: string) => {
    setResponses(responses.map(response =>
      response.id === id ? { ...response, active: !response.active } : response
    ));
  };

  const handleToggleSetting = (setting: string) => {
    setSettings(prev => ({ ...prev, [setting]: !prev[setting] }));
  };

  const handleEditResponse = (id: string) => {
    // Implementation for editing response
    console.log('Edit response:', id);
  };

  const handleDeleteResponse = (id: string) => {
    setResponses(responses.filter(response => response.id !== id));
  };

  const labels = {
    tr: {
      title: 'Otomatik Yanıt',
      newResponse: 'Yeni Yanıt Oluştur'
    },
    en: {
      title: 'Automated Response',
      newResponse: 'Create New Response'
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-800">{labels[currentLang].title}</h2>
        <div className="flex space-x-4">
          <select
            value={currentLang}
            onChange={(e) => setCurrentLang(e.target.value)}
            className="border rounded-lg px-3 py-2"
          >
            <option value="tr">Türkçe</option>
            <option value="en">English</option>
          </select>
          <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 flex items-center">
            <Plus className="h-5 w-5 mr-2" />
            {labels[currentLang].newResponse}
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-4">
          {responses.map(response => (
            <AutoResponseCard
              key={response.id}
              response={response}
              currentLang={currentLang}
              onToggle={handleToggleResponse}
              onEdit={handleEditResponse}
              onDelete={handleDeleteResponse}
            />
          ))}
        </div>

        <div className="space-y-6">
          <AutoResponseSettings
            currentLang={currentLang}
            settings={settings}
            onToggle={handleToggleSetting}
          />
          <AutoResponseStats currentLang={currentLang} />
        </div>
      </div>
    </div>
  );
};

export default AutomatedResponse;