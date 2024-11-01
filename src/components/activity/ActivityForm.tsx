import React from 'react';
import { Clock, Dumbbell, MessageSquare, Activity } from 'lucide-react';

interface ActivityFormProps {
  onSubmit: (data: ActivityFormData) => void;
}

export interface ActivityFormData {
  type: string;
  duration: number;
  intensity: 'low' | 'medium' | 'high';
  notes: string;
  date: string;
}

const workoutTypes = [
  'Running',
  'Cycling',
  'Swimming',
  'Weight Training',
  'Yoga',
  'Walking',
  'HIIT',
  'Other',
];

export function ActivityForm({ onSubmit }: ActivityFormProps) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    
    onSubmit({
      type: formData.get('type') as string,
      duration: Number(formData.get('duration')),
      intensity: formData.get('intensity') as 'low' | 'medium' | 'high',
      notes: formData.get('notes') as string,
      date: formData.get('date') as string,
    });
    
    form.reset();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            <div className="flex items-center space-x-2">
              <Dumbbell className="w-4 h-4" />
              <span>Activity Type</span>
            </div>
          </label>
          <select
            name="type"
            required
            className="w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          >
            <option value="">Select activity type</option>
            {workoutTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            <div className="flex items-center space-x-2">
              <Clock className="w-4 h-4" />
              <span>Duration (minutes)</span>
            </div>
          </label>
          <input
            type="number"
            name="duration"
            min="1"
            required
            className="w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            <div className="flex items-center space-x-2">
              <Activity className="w-4 h-4" />
              <span>Intensity</span>
            </div>
          </label>
          <div className="flex space-x-4">
            {['low', 'medium', 'high'].map((level) => (
              <label key={level} className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="intensity"
                  value={level}
                  required
                  className="text-indigo-600 focus:ring-indigo-500"
                />
                <span className="text-sm text-gray-700 capitalize">{level}</span>
              </label>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            <div className="flex items-center space-x-2">
              <MessageSquare className="w-4 h-4" />
              <span>Notes</span>
            </div>
          </label>
          <textarea
            name="notes"
            rows={3}
            className="w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Date
          </label>
          <input
            type="date"
            name="date"
            required
            defaultValue={new Date().toISOString().split('T')[0]}
            className="w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          />
        </div>
      </div>

      <button
        type="submit"
        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        Log Activity
      </button>
    </form>
  );
}