import { useState, useEffect } from 'react';

interface User {
  isOnboarded: boolean;
  name?: string;
  age?: number;
  gender?: string;
  height?: number;
  weight?: number;
  goals?: string[];
}

export function useAuth() {
  const [user, setUser] = useState<User>(() => {
    const saved = localStorage.getItem('health_tracker_user');
    return saved ? JSON.parse(saved) : { isOnboarded: false };
  });

  useEffect(() => {
    localStorage.setItem('health_tracker_user', JSON.stringify(user));
  }, [user]);

  const updateUser = (data: Partial<User>) => {
    setUser((prev) => ({ ...prev, ...data }));
  };

  return {
    user,
    updateUser,
    isOnboarded: user.isOnboarded,
  };
}