import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Activity, Heart, Brain, Moon } from 'lucide-react';
import { useAuth } from '../hooks/useAuth';

const steps = [
  {
    title: 'Track Your Journey',
    description:
      'Monitor your daily activities, sleep patterns, and emotional well-being to understand your health better.',
    icon: Activity,
  },
  {
    title: 'Get Personalized Insights',
    description:
      'Receive tailored recommendations and insights based on your unique health data and goals.',
    icon: Brain,
  },
  {
    title: 'Improve Your Well-being',
    description:
      'Make informed decisions about your lifestyle with our AI-powered analysis and support.',
    icon: Heart,
  },
];

export function Welcome() {
  const navigate = useNavigate();
  const { updateUser } = useAuth();
  const [step, setStep] = useState(0);

  const handleStart = () => {
    updateUser({ isOnboarded: true });
    navigate('/dashboard');
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <div className="flex justify-center mb-6">
          <Moon className="w-16 h-16 text-indigo-600" />
        </div>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Welcome to HealthTracker
        </h1>
        <p className="text-xl text-gray-600">
          Your personal companion for a healthier lifestyle
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mb-12">
        {steps.map(({ title, description, icon: Icon }, index) => (
          <div
            key={index}
            className="bg-white rounded-lg p-6 shadow-sm border border-gray-100
                       hover:shadow-md transition-shadow"
          >
            <div className="flex justify-center mb-4">
              <Icon className="w-10 h-10 text-indigo-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
            <p className="text-gray-600">{description}</p>
          </div>
        ))}
      </div>

      <div className="flex justify-center">
        <button
          onClick={handleStart}
          className="bg-indigo-600 text-white px-8 py-3 rounded-lg
                     font-medium hover:bg-indigo-700 transition-colors
                     focus:outline-none focus:ring-2 focus:ring-indigo-500
                     focus:ring-offset-2"
        >
          Get Started
        </button>
      </div>
    </div>
  );
}