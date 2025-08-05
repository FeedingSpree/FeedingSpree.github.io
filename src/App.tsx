import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AdminDashboard from './pages/AdminDashboard';
import { RegistrationProvider } from './context/RegistrationContext';

function App() {
  return (
    <RegistrationProvider>
      <Router>
        <div className="min-h-screen bg-gray-50">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/admin" element={<AdminDashboard />} />
          </Routes>
        </div>
      </Router>
    </RegistrationProvider>
  );
}

export default App;