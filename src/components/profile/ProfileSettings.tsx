import React from 'react';
import { User, Target, Bell } from 'lucide-react';
import { useAuth } from '../../hooks/useAuth';

const healthGoals = [
  'Improve Sleep Quality',
  'Increase Physical Activity',
  'Maintain Healthy Diet',
  'Reduce Stress',
  'Stay Hydrated',
  'Build Strength',
  'Improve Flexibility',
  'Better Mental Health',
];

export function ProfileSettings() {
  const { user, updateUser } = useAuth();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const goals = Array.from(formData.getAll('goals')) as string[];
    
    updateUser({
      name: formData.get('name') as string,
      age: Number(formData.get('age')),
      gender: formData.get('gender') as string,
      height: Number(formData.get('height')),
      weight: Number(formData.get('weight')),
      goals,
    });
  };

  return (
    <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-sm border border-gray-100 p-6">
      <div className="flex items-center space-x-3 mb-6">
        <User className="w-6 h-6 text-indigo-600" />
        <h2 className="text-xl font-semibold text-gray-900">Profile Settings</h2>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              defaultValue={user.name}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Age</label>
              <input
                type="number"
                name="age"
                defaultValue={user.age}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Gender</label>
              <select
                name="gender"
                defaultValue={user.gender}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              >
                <option value="">Select gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Height (cm)</label>
              <input
                type="number"
                name="height"
                defaultValue={user.height}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Weight (kg)</label>
              <input
                type="number"
                name="weight"
                defaultValue={user.weight}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <div className="flex items-center space-x-2">
                <Target className="w-4 h-4" />
                <span>Health Goals</span>
              </div>
            </label>
            <div className="grid grid-cols-2 gap-2">
              {healthGoals.map(goal => (
                <label key={goal} className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    name="goals"
                    value={goal}
                    defaultChecked={user.goals?.includes(goal)}
                    className="rounded text-indigo-600 focus:ring-indigo-500"
                  />
                  <span className="text-sm text-gray-700">{goal}</span>
                </label>
              ))}
            </div>
          </div>
        </div>

        <div className="flex justify-end">
          <button
            type="submit"
            className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
}