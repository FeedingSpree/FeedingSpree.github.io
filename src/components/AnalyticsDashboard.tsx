import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line } from 'recharts';
import { useRegistration } from '../context/RegistrationContext';
import { TrendingUp, Users, GraduationCap, Shield } from 'lucide-react';

const COLORS = ['#22c55e', '#16a34a', '#4ade80', '#EF4444', '#8B5CF6', '#F97316'];

const AnalyticsDashboard: React.FC = () => {
  const { getAnalytics } = useRegistration();
  const analytics = getAnalytics();

  const majorData = Object.entries(analytics.majorDistribution).map(([major, count]) => ({
    name: major,
    value: count
  }));

  const yearData = Object.entries(analytics.yearDistribution).map(([year, count]) => ({
    year,
    students: count
  }));

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold text-white mb-6">Analytics Dashboard</h2>
        
        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-jissa-gray/30 rounded-lg p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm">Total Members</p>
                <p className="text-2xl font-bold text-white">{analytics.totalMembers}</p>
              </div>
              <Users className="w-8 h-8 text-jissa-green" />
            </div>
          </div>
          
          <div className="bg-jissa-gray/30 rounded-lg p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm">This Month</p>
                <p className="text-2xl font-bold text-white">{analytics.recentRegistrations}</p>
              </div>
              <TrendingUp className="w-8 h-8 text-jissa-light-green" />
            </div>
          </div>
          
          <div className="bg-jissa-gray/30 rounded-lg p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm">This Week</p>
                <p className="text-2xl font-bold text-white">{analytics.weeklyRegistrations}</p>
              </div>
              <img src="/JISSA FINAL LOGO.png" alt="JISSA" className="w-8 h-8" />
            </div>
          </div>
          
          <div className="bg-jissa-gray/30 rounded-lg p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm">Avg per Day</p>
                <p className="text-2xl font-bold text-white">
                  {(analytics.recentRegistrations / 30).toFixed(1)}
                </p>
              </div>
              <GraduationCap className="w-8 h-8 text-green-400" />
            </div>
          </div>
        </div>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Daily Registrations */}
        <div className="bg-jissa-gray/30 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-white mb-4">Daily Registrations (Last 7 Days)</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={analytics.dailyRegistrations}>
              <CartesianGrid strokeDasharray="3 3" stroke="#404040" />
              <XAxis 
                dataKey="date" 
                stroke="#9CA3AF"
                fontSize={12}
              />
              <YAxis 
                stroke="#9CA3AF"
                fontSize={12}
              />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#1a1a1a', 
                  border: '1px solid #404040',
                  borderRadius: '8px',
                  color: '#F8FAFC'
                }}
              />
              <Line 
                type="monotone" 
                dataKey="registrations" 
                stroke="#22c55e" 
                strokeWidth={3}
                dot={{ fill: '#22c55e', strokeWidth: 2, r: 4 }}
                activeDot={{ r: 6, stroke: '#22c55e', strokeWidth: 2 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Major Distribution */}
        <div className="bg-jissa-gray/30 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-white mb-4">Students by Major</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={majorData}
                cx="50%"
                cy="50%"
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
              >
                {majorData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#1a1a1a', 
                  border: '1px solid #404040',
                  borderRadius: '8px',
                  color: '#F8FAFC'
                }}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Year Distribution */}
        <div className="bg-jissa-gray/30 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-white mb-4">Students by Academic Year</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={yearData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#404040" />
              <XAxis 
                dataKey="year" 
                stroke="#9CA3AF"
                fontSize={12}
              />
              <YAxis 
                stroke="#9CA3AF"
                fontSize={12}
              />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#1a1a1a', 
                  border: '1px solid #404040',
                  borderRadius: '8px',
                  color: '#F8FAFC'
                }}
              />
              <Bar 
                dataKey="students" 
                fill="#22c55e"
                radius={[4, 4, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Engagement Metrics */}
        <div className="bg-jissa-gray/30 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-white mb-4">Engagement Summary</h3>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-gray-300">Active Members</span>
              <span className="text-white font-semibold">94%</span>
            </div>
            <div className="w-full bg-jissa-light-gray rounded-full h-2">
              <div className="bg-jissa-green h-2 rounded-full" style={{ width: '94%' }}></div>
            </div>
            
            <div className="flex justify-between items-center">
              <span className="text-gray-300">Event Participation</span>
              <span className="text-white font-semibold">87%</span>
            </div>
            <div className="w-full bg-jissa-light-gray rounded-full h-2">
              <div className="bg-jissa-light-green h-2 rounded-full" style={{ width: '87%' }}></div>
            </div>
            
            <div className="flex justify-between items-center">
              <span className="text-gray-300">Retention Rate</span>
              <span className="text-white font-semibold">92%</span>
            </div>
            <div className="w-full bg-jissa-light-gray rounded-full h-2">
              <div className="bg-jissa-dark-green h-2 rounded-full" style={{ width: '92%' }}></div>
            </div>
          </div>
        </div>
      </div>

      {/* Detailed Insights */}
      <div className="bg-jissa-gray/30 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-white mb-4">Insights & Recommendations</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-medium text-jissa-green mb-2">Growth Trends</h4>
            <ul className="text-gray-300 text-sm space-y-1">
              <li>• {analytics.weeklyRegistrations > 0 ? 'Positive' : 'Stable'} registration trend this week</li>
              <li>• Computer Science majors represent the largest segment</li>
              <li>• Strong participation across all academic years</li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium text-jissa-light-green mb-2">Action Items</h4>
            <ul className="text-gray-300 text-sm space-y-1">
              <li>• Consider targeted outreach to underrepresented majors</li>
              <li>• Plan advanced workshops for experienced members</li>
              <li>• Develop freshman-specific onboarding program</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsDashboard;