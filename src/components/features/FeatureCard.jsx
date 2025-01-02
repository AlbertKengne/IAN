import React from 'react';
import { Card } from '../common/Card';

export const FeatureCard = ({ icon, title, description }) => (
  <Card className="p-8 hover:shadow-2xl transition-all duration-300 ease-in-out cursor-pointer 
    transform hover:-translate-y-1 hover:bg-gradient-to-br from-white to-primary/5">
    <div className="rounded-full bg-primary/15 w-16 h-16 flex items-center justify-center mb-6
      transform transition-transform duration-300 hover:scale-110 hover:bg-primary/20">
      <div className="text-primary">{icon}</div>
    </div>
    <h3 className="text-2xl font-bold mb-4 text-gray-800 tracking-tight">{title}</h3>
    <p className="text-gray-600 leading-relaxed text-base">
      {description}
    </p>
    <div className="mt-6 opacity-0 hover:opacity-100 transition-opacity duration-300">
      <span className="text-primary font-medium">En savoir plus →</span>
    </div>
  </Card>
);