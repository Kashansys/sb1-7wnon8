import { useNavigate } from 'react-router-dom';
import React from 'react';
import {
  Moon,
  Sun,
  Heart,
  Dumbbell,
  Brain,
  TrendingUp,
  Award,
} from 'lucide-react';

const metrics = [
  { label: 'Sleep Quality', value: '85%', icon: Moon, color: 'text-blue-600' },
  {
    label: 'Energy Level',
    value: 'Good',
    icon: Sun,
    color: 'text-yellow-600',
  },
  {
    label: 'Heart Rate',
    value: '72 bpm',
    icon: Heart,
    color: 'text-red-600',
  },
  {
    label: 'Exercise',
    value: '45 min',
    icon: Dumbbell,
    color: 'text-green-600',
  },
  {
    label: 'Mood',
    value: 'Happy',
    icon: Brain,
    color: 'text-purple-600',
  },
];

export function Dashboard() {
  const navigate = useNavigate();

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-gray-600">Track your daily wellness journey</p>
        </div>
        <button
          onClick={() => navigate('/activity')}
          className="inline-flex items-center px-4 py-2 bg-indigo-600 
                     text-white rounded-lg hover:bg-indigo-700 transition-colors"
        >
          <TrendingUp className="w-5 h-5 mr-2" />
          Log Activity
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
        {metrics.map(({ label, value, icon: Icon, color }) => (
          <div
            key={label}
            className="bg-white p-6 rounded-lg shadow-sm border border-gray-100
                       hover:shadow-md transition-shadow"
          >
            <div className="flex items-center justify-between mb-4">
              <Icon className={`w-6 h-6 ${color}`} />
              <Award
                className="w-5 h-5 text-gray-400"
                title="Achievement unlocked"
              />
            </div>
            <div className="space-y-1">
              <p className="text-sm font-medium text-gray-600">{label}</p>
              <p className="text-2xl font-bold text-gray-900">{value}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">
            Today's Goals
          </h2>
          <div className="space-y-4">
            {['Get 8 hours of sleep', 'Exercise for 30 minutes', 'Drink 8 glasses of water'].map(
              (goal) => (
                <div
                  key={goal}
                  className="flex items-center space-x-3 text-gray-700"
                >
                  <input
                    type="checkbox"
                    className="w-5 h-5 text-indigo-600 rounded
                             focus:ring-indigo-500 border-gray-300"
                  />
                  <span>{goal}</span>
                </div>
              )
            )}
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">
            Recent Achievements
          </h2>
          <div className="space-y-4">
            {[
              'Completed 7-day exercise streak',
              'Achieved sleep goal 5 days in a row',
              'Logged meals for 10 consecutive days',
            ].map((achievement) => (
              <div
                key={achievement}
                className="flex items-center space-x-3 text-gray-700"
              >
                <Award className="w-5 h-5 text-yellow-500" />
                <span>{achievement}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}