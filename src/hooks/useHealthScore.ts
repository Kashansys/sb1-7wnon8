import { useState, useEffect } from 'react';
import { calculateHealthScore } from '../utils/healthScoreCalculator';
import type { ActivityFormData } from '../components/activity/ActivityForm';

export interface HealthMetrics {
  sleep: number;
  exercise: ActivityFormData[];
  mood: number;
  water: number;
}

export function useHealthScore() {
  const [metrics, setMetrics] = useState<HealthMetrics>({
    sleep: 0,
    exercise: [],
    mood: 0,
    water: 0,
  });

  const [score, setScore] = useState(0);

  useEffect(() => {
    const newScore = calculateHealthScore(metrics);
    setScore(newScore);
  }, [metrics]);

  const updateMetrics = (newMetrics: Partial<HealthMetrics>) => {
    setMetrics(prev => ({ ...prev, ...newMetrics }));
  };

  return {
    score,
    metrics,
    updateMetrics,
  };
}