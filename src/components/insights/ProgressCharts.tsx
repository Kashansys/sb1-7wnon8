import React from 'react';
import type { HealthMetrics } from '../../hooks/useHealthScore';

interface ProgressChartsProps {
  weeklyData: {
    date: string;
    metrics: HealthMetrics;
    score: number;
  }[];
}

export function ProgressCharts({ weeklyData }: ProgressChartsProps) {
  const maxScore = Math.max(...weeklyData.map(d => d.score));

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
      <h3 className="text-lg font-semibold text-gray-900 mb-6">Weekly Progress</h3>
      <div className="h-64 flex items-end justify-between space-x-2">
        {weeklyData.map((day, index) => {
          const height = (day.score / 100) * 100;
          return (
            <div key={index} className="flex-1 flex flex-col items-center">
              <div className="relative w-full">
                <div
                  className="absolute bottom-0 w-full bg-indigo-200 rounded-t"
                  style={{ height: `${height}%` }}
                >
                  <div
                    className="absolute bottom-0 w-full bg-indigo-600 rounded-t transition-all duration-500"
                    style={{ height: `${(day.score / maxScore) * 100}%` }}
                  />
                </div>
              </div>
              <span className="mt-2 text-xs text-gray-600">
                {new Date(day.date).toLocaleDateString('en-US', { weekday: 'short' })}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}