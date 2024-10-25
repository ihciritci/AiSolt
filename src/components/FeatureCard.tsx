import React from 'react';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, icon }) => {
  return (
    <div className="bg-gray-800 bg-opacity-50 rounded-lg shadow-lg p-6 transition-all transform hover:scale-105 hover:bg-opacity-70 border border-transparent hover:border-cyan-400">
      <div className="flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2 text-center text-cyan-300">{title}</h3>
      <p className="text-gray-300 text-center">{description}</p>
    </div>
  );
};

export default FeatureCard;