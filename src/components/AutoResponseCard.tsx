import React from 'react';
import { MessageSquare, Clock } from 'lucide-react';

interface ResponseTemplate {
  id: string;
  title: Record<string, string>;
  message: Record<string, string>;
  active: boolean;
  schedule: string;
}

interface AutoResponseCardProps {
  response: ResponseTemplate;
  currentLang: string;
  onToggle: (id: string) => void;
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
}

const AutoResponseCard: React.FC<AutoResponseCardProps> = ({
  response,
  currentLang,
  onToggle,
  onEdit,
  onDelete
}) => {
  return (
    <div className="bg-white rounded-lg shadow p-4">
      <div className="flex items-start space-x-4">
        <div className={`p-2 rounded-lg ${response.active ? 'bg-green-100' : 'bg-gray-100'}`}>
          <MessageSquare className={`h-6 w-6 ${response.active ? 'text-green-600' : 'text-gray-600'}`} />
        </div>
        <div className="flex-1">
          <div className="flex items-center justify-between">
            <h3 className="font-semibold">{response.title[currentLang]}</h3>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                className="sr-only peer"
                checked={response.active}
                onChange={() => onToggle(response.id)}
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
            </label>
          </div>
          <p className="text-gray-600 mt-1">{response.message[currentLang]}</p>
          <div className="mt-3 flex items-center text-sm text-gray-500">
            <Clock className="h-4 w-4 mr-1" />
            <span>{response.schedule}</span>
          </div>
          <div className="mt-3 flex space-x-3">
            <button
              onClick={() => onEdit(response.id)}
              className="text-sm text-indigo-600 hover:text-indigo-800"
            >
              {currentLang === 'tr' ? 'Düzenle' : 'Edit'}
            </button>
            <button
              onClick={() => onDelete(response.id)}
              className="text-sm text-red-600 hover:text-red-800"
            >
              {currentLang === 'tr' ? 'Sil' : 'Delete'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AutoResponseCard;