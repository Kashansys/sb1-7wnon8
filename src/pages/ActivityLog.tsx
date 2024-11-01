import React, { useState } from 'react';
import { ActivityForm, type ActivityFormData } from '../components/activity/ActivityForm';
import { ActivityList } from '../components/activity/ActivityList';

export function ActivityLog() {
  const [activities, setActivities] = useState<ActivityFormData[]>([]);

  const handleActivitySubmit = (data: ActivityFormData) => {
    setActivities((prev) => [data, ...prev]);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Activity Log</h1>
        <p className="text-gray-600">Track your daily activities and progress</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">
            Log New Activity
          </h2>
          <ActivityForm onSubmit={handleActivitySubmit} />
        </div>

        <div>
          <h2 className="text-lg font-semibold text-gray-900 mb-4">
            Recent Activities
          </h2>
          <ActivityList activities={activities} />
        </div>
      </div>
    </div>
  );
}