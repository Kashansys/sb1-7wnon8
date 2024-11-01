import React from 'react';
import { NavLink, useNavigate, useLocation } from 'react-router-dom';
import {
  LayoutDashboard,
  LineChart,
  ListPlus,
  BookOpen,
  Trophy,
  UserCircle,
  Sun,
  Moon,
  ArrowLeft,
} from 'lucide-react';
import { useTheme } from '../hooks/useTheme';

const navItems = [
  { to: '/dashboard', icon: LayoutDashboard, label: 'Dashboard' },
  { to: '/activity', icon: ListPlus, label: 'Activity' },
  { to: '/insights', icon: LineChart, label: 'Insights' },
  { to: '/learn', icon: BookOpen, label: 'Learn' },
  { to: '/achievements', icon: Trophy, label: 'Achievements' },
  { to: '/profile', icon: UserCircle, label: 'Profile' },
];

export function Navigation() {
  const navigate = useNavigate();
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();
  const showBackButton = location.pathname !== '/dashboard';

  return (
    <nav className="sticky top-0 z-50 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-700">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-4">
            {showBackButton && (
              <button
                onClick={() => navigate(-1)}
                className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                aria-label="Go back"
              >
                <ArrowLeft className="w-5 h-5" />
              </button>
            )}
            <div className="flex items-center space-x-8">
            {navItems.map(({ to, icon: Icon, label }) => (
              <NavLink
                key={to}
                to={to}
                className={({ isActive }) =>
                  `flex items-center space-x-2 text-sm font-medium transition-colors
                  ${
                    isActive
                      ? 'text-indigo-600'
                      : 'text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white'
                  }`
                }
              >
                <Icon className="w-5 h-5" />
                <span>{label}</span>
              </NavLink>
            ))}
            </div>
          </div>
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            aria-label="Toggle theme"
          >
            {theme === 'light' ? (
              <Moon className="w-5 h-5" />
            ) : (
              <Sun className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>
    </nav>
  );
}