import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Lock, User, AlertCircle } from 'lucide-react';

interface AdminLoginProps {
  onLogin: () => void;
}

const AdminLogin: React.FC<AdminLoginProps> = ({ onLogin }) => {
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simple authentication for demo purposes
    if (credentials.username === 'admin' && credentials.password === 'jissa2024') {
      onLogin();
    } else {
      setError('Invalid credentials. Use: admin / jissa2024');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-jissa-black via-jissa-dark-gray to-jissa-gray flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        <div className="text-center mb-8">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
          
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-jissa-green/20 rounded-full backdrop-blur-sm border border-jissa-green/30">
              <img src="/JISSA FINAL LOGO.png" alt="JISSA Logo" className="w-12 h-12" />
            </div>
          </div>
          
          <h1 className="text-3xl font-bold text-white mb-2">Admin Access</h1>
          <p className="text-gray-300">Enter your credentials to access the dashboard</p>
        </div>

        <div className="bg-jissa-dark-gray/50 backdrop-blur-sm border border-jissa-light-gray/50 rounded-xl p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-gray-300 text-sm font-medium mb-2">
                <User className="w-4 h-4 inline mr-2" />
                Username
              </label>
              <input
                type="text"
                value={credentials.username}
                onChange={(e) => setCredentials(prev => ({ ...prev, username: e.target.value }))}
                required
                className="w-full px-4 py-3 bg-jissa-gray/50 border border-jissa-light-gray rounded-lg text-white placeholder-gray-400 focus:border-jissa-green focus:outline-none focus:ring-2 focus:ring-jissa-green/20 transition-colors"
                placeholder="Enter username"
              />
            </div>

            <div>
              <label className="block text-gray-300 text-sm font-medium mb-2">
                <Lock className="w-4 h-4 inline mr-2" />
                Password
              </label>
              <input
                type="password"
                value={credentials.password}
                onChange={(e) => setCredentials(prev => ({ ...prev, password: e.target.value }))}
                required
                className="w-full px-4 py-3 bg-jissa-gray/50 border border-jissa-light-gray rounded-lg text-white placeholder-gray-400 focus:border-jissa-green focus:outline-none focus:ring-2 focus:ring-jissa-green/20 transition-colors"
                placeholder="Enter password"
              />
            </div>

            {error && (
              <div className="bg-red-600/20 border border-red-500/30 rounded-lg p-3 flex items-center gap-2">
                <AlertCircle className="w-4 h-4 text-red-400" />
                <span className="text-red-300 text-sm">{error}</span>
              </div>
            )}

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-jissa-green to-jissa-dark-green hover:from-jissa-dark-green hover:to-green-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              Access Dashboard
            </button>
          </form>

          <div className="mt-6 p-4 bg-jissa-gray/30 rounded-lg border border-jissa-light-gray/30">
            <p className="text-gray-400 text-sm mb-2">Demo Credentials:</p>
            <p className="text-gray-300 text-sm font-mono">Username: admin</p>
            <p className="text-gray-300 text-sm font-mono">Password: jissa2024</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;