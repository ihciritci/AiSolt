import React from 'react';

interface StatsProps {
  currentLang: string;
}

const AutoResponseStats: React.FC<StatsProps> = ({ currentLang }) => {
  const labels = {
    tr: {
      title: 'İstatistikler',
      today: 'Bugün Gönderilen',
      month: 'Bu Ay Gönderilen',
      avgTime: 'Ortalama Yanıt Süresi'
    },
    en: {
      title: 'Statistics',
      today: 'Sent Today',
      month: 'Sent This Month',
      avgTime: 'Average Response Time'
    }
  };

  return (
    <div className="bg-white rounded-lg shadow p-4">
      <h3 className="text-lg font-semibold mb-4">{labels[currentLang].title}</h3>
      <div className="space-y-3">
        <div className="flex justify-between items-center">
          <span className="text-gray-600">{labels[currentLang].today}</span>
          <span className="font-semibold">24</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-gray-600">{labels[currentLang].month}</span>
          <span className="font-semibold">342</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-gray-600">{labels[currentLang].avgTime}</span>
          <span className="font-semibold">2.5s</span>
        </div>
      </div>
    </div>
  );
};

export default AutoResponseStats;