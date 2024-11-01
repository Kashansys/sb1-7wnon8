import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Welcome } from './pages/Welcome';
import { Dashboard } from './pages/Dashboard';
import { ActivityLog } from './pages/ActivityLog';
import { Insights } from './pages/Insights'; // Add this import
import { useAuth } from './hooks/useAuth';

function App() {
  const { isOnboarded } = useAuth();

  return (
    <Routes>
      <Route element={<Layout />}>
        <Route
          path="/"
          element={
            isOnboarded ? (
              <Navigate to="/dashboard" replace />
            ) : (
              <Navigate to="/welcome" replace />
            )
          }
        />
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/activity" element={<ActivityLog />} />
        <Route path="/insights" element={<Insights />} />
      </Route>
    </Routes>
  );
}

export default App;
