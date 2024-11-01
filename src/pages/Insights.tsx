import React, { useState, useEffect } from 'react';
import { InsightCards } from '../components/insights/InsightCards';
import { ProgressCharts } from '../components/insights/ProgressCharts';
import { useHealthScore } from '../hooks/useHealthScore';

export function Insights() {
  const { score, metrics } = useHealthScore();
  const [previousScore, setPreviousScore] = useState(0);
  const [weeklyData, setWeeklyData] = useState([
    { date: '2024-03-10', metrics, score: 75 },
    { date: '2024-03-11', metrics, score: 78 },
    { date: '2024-03-12', metrics, score: 82 },
    { date: '2024-03-13', metrics, score: 80 },
    { date: '2024-03-14', metrics, score: 85 },
    { date: '2024-03-15', metrics, score: 83 },
    { date: '2024-03-16', metrics, score },
  ]);

  useEffect(() => {
    setPreviousScore(weeklyData[weeklyData.length - 2].score);
  }, [weeklyData]);

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Health Insights</h1>
        <p className="text-gray-600">Track your progress and analyze your health patterns</p>
      </div>

      <InsightCards
        metrics={metrics}
        score={score}
        previousScore={previousScore}
      />

      <ProgressCharts weeklyData={weeklyData} />
    </div>
  );
}