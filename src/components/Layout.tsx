import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { Navigation } from './Navigation';
import { useAuth } from '../hooks/useAuth';
import { useTheme } from '../hooks/useTheme';

export function Layout() {
  const { isOnboarded } = useAuth();
  const { theme } = useTheme();

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 dark:text-white transition-colors duration-200">
      {isOnboarded && <Navigation />}
      <main className="container mx-auto px-4 py-8">
        <Outlet />
      </main>
    </div>
  );
}