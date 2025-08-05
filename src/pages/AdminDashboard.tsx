import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Users, TrendingUp, Filter, Search, Download, Eye, BarChart3 } from 'lucide-react';
import { useRegistration } from '../context/RegistrationContext';
import AdminLogin from '../components/AdminLogin';
import StudentTable from '../components/StudentTable';
import AnalyticsDashboard from '../components/AnalyticsDashboard';

const AdminDashboard: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');
  const { students, getAnalytics } = useRegistration();
  
  const analytics = getAnalytics();

  if (!isAuthenticated) {
    return <AdminLogin onLogin={() => setIsAuthenticated(true)} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-jissa-black via-jissa-dark-gray to-jissa-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <Link
              to="/"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <ArrowLeft className="w-6 h-6" />
            </Link>
            <div>
              <h1 className="text-3xl font-bold text-white">Admin Dashboard</h1>
              <p className="text-gray-300">JISSA Registration Management</p>
            </div>
          </div>
          
          <button
            onClick={() => setIsAuthenticated(false)}
            className="bg-jissa-gray hover:bg-jissa-light-gray text-white px-4 py-2 rounded-lg transition-colors"
          >
            Logout
          </button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-jissa-dark-gray/50 backdrop-blur-sm border border-jissa-light-gray/50 rounded-xl p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm font-medium">Total Members</p>
                <p className="text-3xl font-bold text-white">{analytics.totalMembers}</p>
              </div>
              <div className="p-3 bg-jissa-green/20 rounded-lg">
                <Users className="w-6 h-6 text-jissa-green" />
              </div>
            </div>
          </div>

          <div className="bg-jissa-dark-gray/50 backdrop-blur-sm border border-jissa-light-gray/50 rounded-xl p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm font-medium">This Week</p>
                <p className="text-3xl font-bold text-white">{analytics.weeklyRegistrations}</p>
              </div>
              <div className="p-3 bg-jissa-light-green/20 rounded-lg">
                <TrendingUp className="w-6 h-6 text-jissa-light-green" />
              </div>
            </div>
          </div>

          <div className="bg-jissa-dark-gray/50 backdrop-blur-sm border border-jissa-light-gray/50 rounded-xl p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm font-medium">This Month</p>
                <p className="text-3xl font-bold text-white">{analytics.recentRegistrations}</p>
              </div>
              <div className="p-3 bg-orange-600/20 rounded-lg">
                <BarChart3 className="w-6 h-6 text-orange-400" />
              </div>
            </div>
          </div>

          <div className="bg-jissa-dark-gray/50 backdrop-blur-sm border border-jissa-light-gray/50 rounded-xl p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm font-medium">Active Rate</p>
                <p className="text-3xl font-bold text-white">94%</p>
              </div>
              <div className="p-3 bg-green-600/20 rounded-lg">
                <Eye className="w-6 h-6 text-green-400" />
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-jissa-dark-gray/30 backdrop-blur-sm border border-jissa-light-gray/30 rounded-xl mb-8">
          <div className="flex">
            <button
              onClick={() => setActiveTab('overview')}
              className={`px-6 py-4 font-medium transition-colors rounded-l-xl ${
                activeTab === 'overview'
                  ? 'bg-jissa-green text-white'
                  : 'text-gray-300 hover:text-white hover:bg-jissa-gray/50'
              }`}
            >
              Overview
            </button>
            <button
              onClick={() => setActiveTab('students')}
              className={`px-6 py-4 font-medium transition-colors ${
                activeTab === 'students'
                  ? 'bg-jissa-green text-white'
                  : 'text-gray-300 hover:text-white hover:bg-jissa-gray/50'
              }`}
            >
              Student Management
            </button>
            <button
              onClick={() => setActiveTab('analytics')}
              className={`px-6 py-4 font-medium transition-colors rounded-r-xl ${
                activeTab === 'analytics'
                  ? 'bg-jissa-green text-white'
                  : 'text-gray-300 hover:text-white hover:bg-jissa-gray/50'
              }`}
            >
              Analytics
            </button>
          </div>
        </div>

        {/* Tab Content */}
        <div className="bg-jissa-dark-gray/30 backdrop-blur-sm border border-jissa-light-gray/30 rounded-xl p-6">
          {activeTab === 'overview' && (
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-white mb-6">Registration Overview</h2>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-4">Recent Registrations</h3>
                    <div className="space-y-3">
                      {students.slice(-5).reverse().map((student) => (
                        <div key={student.id} className="bg-jissa-gray/30 rounded-lg p-4">
                          <div className="flex justify-between items-start">
                            <div>
                              <p className="font-medium text-white">{student.name}</p>
                              <p className="text-sm text-gray-400">{student.email}</p>
                              <p className="text-sm text-gray-400">{student.major} • {student.year}</p>
                            </div>
                            <span className="text-xs text-gray-400">
                              {new Date(student.registeredAt).toLocaleDateString()}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-4">Quick Actions</h3>
                    <div className="space-y-3">
                      <button
                        onClick={() => setActiveTab('students')}
                        className="w-full bg-jissa-green/20 hover:bg-jissa-green/30 border border-jissa-green/30 text-jissa-light-green py-3 px-4 rounded-lg text-left transition-colors"
                      >
                        View All Students
                      </button>
                      <button
                        onClick={() => setActiveTab('analytics')}
                        className="w-full bg-jissa-light-green/20 hover:bg-jissa-light-green/30 border border-jissa-light-green/30 text-green-300 py-3 px-4 rounded-lg text-left transition-colors"
                      >
                        View Analytics
                      </button>
                      <button className="w-full bg-orange-600/20 hover:bg-orange-600/30 border border-orange-500/30 text-orange-300 py-3 px-4 rounded-lg text-left transition-colors">
                        Export Data
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'students' && <StudentTable />}
          {activeTab === 'analytics' && <AnalyticsDashboard />}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;