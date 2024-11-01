import React from 'react';
import { TrendingUp, TrendingDown, Minus } from 'lucide-react';
import type { HealthMetrics } from '../../hooks/useHealthScore';

interface InsightCardsProps {
  metrics: HealthMetrics;
  score: number;
  previousScore: number;
}

export function InsightCards({ metrics, score, previousScore }: InsightCardsProps) {
  const scoreDiff = score - previousScore;
  const getTrendIcon = (diff: number) => {
    if (diff > 0) return <TrendingUp className="w-4 h-4 text-green-500" />;
    if (diff < 0) return <TrendingDown className="w-4 h-4 text-red-500" />;
    return <Minus className="w-4 h-4 text-gray-500" />;
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-900">Health Score</h3>
          {getTrendIcon(scoreDiff)}
        </div>
        <div className="flex items-baseline">
          <p className="text-3xl font-bold text-indigo-600">{score}</p>
          <span className="ml-2 text-sm text-gray-500">/ 100</span>
        </div>
        <p className="mt-2 text-sm text-gray-600">
          {scoreDiff >= 0 ? 'Up' : 'Down'} {Math.abs(scoreDiff)} points from last week
        </p>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Weekly Activity</h3>
        <div className="space-y-3">
          {metrics.exercise.slice(0, 3).map((activity, index) => (
            <div key={index} className="flex items-center justify-between">
              <span className="text-sm text-gray-600">{activity.type}</span>
              <span className="text-sm font-medium">{activity.duration} min</span>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Daily Goals</h3>
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-600">Sleep</span>
            <span className="text-sm font-medium">{metrics.sleep} hrs</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-600">Water</span>
            <span className="text-sm font-medium">{metrics.water} glasses</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-600">Mood</span>
            <span className="text-sm font-medium">{metrics.mood}/5</span>
          </div>
        </div>
      </div>
    </div>
  );
}