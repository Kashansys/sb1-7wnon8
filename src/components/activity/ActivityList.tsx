import React from 'react';
import { Calendar, Clock, Activity } from 'lucide-react';
import type { ActivityFormData } from './ActivityForm';

interface ActivityListProps {
  activities: ActivityFormData[];
}

export function ActivityList({ activities }: ActivityListProps) {
  return (
    <div className="space-y-4">
      {activities.map((activity, index) => (
        <div
          key={index}
          className="bg-white rounded-lg shadow-sm border border-gray-100 p-4 hover:shadow-md transition-shadow"
        >
          <div className="flex items-start justify-between">
            <div className="space-y-1">
              <h3 className="text-lg font-medium text-gray-900">
                {activity.type}
              </h3>
              <div className="flex items-center space-x-4 text-sm text-gray-500">
                <div className="flex items-center space-x-1">
                  <Calendar className="w-4 h-4" />
                  <span>{activity.date}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Clock className="w-4 h-4" />
                  <span>{activity.duration} minutes</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Activity className="w-4 h-4" />
                  <span className="capitalize">{activity.intensity}</span>
                </div>
              </div>
              {activity.notes && (
                <p className="text-sm text-gray-600 mt-2">{activity.notes}</p>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}