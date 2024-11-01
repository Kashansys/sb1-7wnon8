import type { HealthMetrics } from '../hooks/useHealthScore';

const WEIGHTS = {
  sleep: 0.3,
  exercise: 0.3,
  mood: 0.2,
  water: 0.2,
};

export function calculateHealthScore(metrics: HealthMetrics): number {
  const sleepScore = (metrics.sleep / 8) * 100; // Assuming 8 hours is ideal
  const exerciseScore = calculateExerciseScore(metrics.exercise);
  const moodScore = metrics.mood * 20; // Scale 0-5 to 0-100
  const waterScore = (metrics.water / 8) * 100; // Assuming 8 glasses is ideal

  return Math.round(
    sleepScore * WEIGHTS.sleep +
    exerciseScore * WEIGHTS.exercise +
    moodScore * WEIGHTS.mood +
    waterScore * WEIGHTS.water
  );
}

function calculateExerciseScore(activities: HealthMetrics['exercise']): number {
  if (activities.length === 0) return 0;

  const totalMinutes = activities.reduce((sum, activity) => sum + activity.duration, 0);
  const weeklyGoal = 150; // WHO recommended weekly exercise minutes
  return Math.min((totalMinutes / weeklyGoal) * 100, 100);
}