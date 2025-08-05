import React, { useState } from 'react';
import { Search, Filter, Download, Eye, Mail, Calendar, GraduationCap, Shield } from 'lucide-react';
import { useRegistration } from '../context/RegistrationContext';

const StudentTable: React.FC = () => {
  const { students, getFilteredStudents } = useRegistration();
  const [filters, setFilters] = useState({
    search: '',
    major: '',
    year: '',
    experience: ''
  });
  const [selectedStudent, setSelectedStudent] = useState<string | null>(null);

  const filteredStudents = getFilteredStudents(filters);

  const majors = [...new Set(students.map(s => s.major))];
  const years = [...new Set(students.map(s => s.year))];
  const experiences = [...new Set(students.map(s => s.experience))];

  const exportToCSV = () => {
    const headers = ['Name', 'Email', 'Major', 'Year', 'Experience', 'Interests', 'Registration Date'];
    const csvContent = [
      headers.join(','),
      ...filteredStudents.map(student => [
        student.name,
        student.email,
        student.major,
        student.year,
        student.experience,
        student.interests.join('; '),
        new Date(student.registeredAt).toLocaleDateString()
      ].join(','))
    ].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'jissa-students.csv';
    a.click();
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row gap-4 justify-between items-start">
        <h2 className="text-2xl font-bold text-white">Student Management</h2>
        <button
          onClick={exportToCSV}
          className="bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded-lg transition-colors flex items-center gap-2"
        >
          <Download className="w-4 h-4" />
          Export CSV
        </button>
      </div>

      {/* Filters */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 bg-jissa-gray/30 p-4 rounded-lg">
        <div>
          <label className="block text-gray-300 text-sm font-medium mb-2">
            <Search className="w-4 h-4 inline mr-1" />
            Search
          </label>
          <input
            type="text"
            placeholder="Name or email..."
            value={filters.search}
            onChange={(e) => setFilters(prev => ({ ...prev, search: e.target.value }))}
            className="w-full px-3 py-2 bg-jissa-light-gray/50 border border-jissa-light-gray rounded text-white placeholder-gray-400 focus:border-jissa-green focus:outline-none text-sm"
          />
        </div>

        <div>
          <label className="block text-gray-300 text-sm font-medium mb-2">
            <GraduationCap className="w-4 h-4 inline mr-1" />
            Major
          </label>
          <select
            value={filters.major}
            onChange={(e) => setFilters(prev => ({ ...prev, major: e.target.value }))}
            className="w-full px-3 py-2 bg-jissa-light-gray/50 border border-jissa-light-gray rounded text-white focus:border-jissa-green focus:outline-none text-sm"
          >
            <option value="">All Majors</option>
            {majors.map(major => (
              <option key={major} value={major}>{major}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-gray-300 text-sm font-medium mb-2">
            <Calendar className="w-4 h-4 inline mr-1" />
            Year
          </label>
          <select
            value={filters.year}
            onChange={(e) => setFilters(prev => ({ ...prev, year: e.target.value }))}
            className="w-full px-3 py-2 bg-jissa-light-gray/50 border border-jissa-light-gray rounded text-white focus:border-jissa-green focus:outline-none text-sm"
          >
            <option value="">All Years</option>
            {years.map(year => (
              <option key={year} value={year}>{year}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-gray-300 text-sm font-medium mb-2">
            <img src="/JISSA FINAL LOGO.png" alt="JISSA" className="w-4 h-4 inline mr-1" />
            Experience
          </label>
          <select
            value={filters.experience}
            onChange={(e) => setFilters(prev => ({ ...prev, experience: e.target.value }))}
            className="w-full px-3 py-2 bg-jissa-light-gray/50 border border-jissa-light-gray rounded text-white focus:border-jissa-green focus:outline-none text-sm"
          >
            <option value="">All Levels</option>
            {experiences.map(exp => (
              <option key={exp} value={exp}>{exp}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Results count */}
      <div className="text-gray-300 text-sm">
        Showing {filteredStudents.length} of {students.length} students
      </div>

      {/* Students Table */}
      <div className="bg-jissa-gray/30 rounded-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-jissa-light-gray/50">
              <tr>
                <th className="px-4 py-3 text-left text-gray-300 font-medium text-sm">Student</th>
                <th className="px-4 py-3 text-left text-gray-300 font-medium text-sm">Academic Info</th>
                <th className="px-4 py-3 text-left text-gray-300 font-medium text-sm">Experience</th>
                <th className="px-4 py-3 text-left text-gray-300 font-medium text-sm">Registration</th>
                <th className="px-4 py-3 text-left text-gray-300 font-medium text-sm">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-jissa-light-gray/50">
              {filteredStudents.map((student) => (
                <tr key={student.id} className="hover:bg-jissa-light-gray/30 transition-colors">
                  <td className="px-4 py-3">
                    <div>
                      <div className="font-medium text-white">{student.name}</div>
                      <div className="text-sm text-gray-400 flex items-center gap-1">
                        <Mail className="w-3 h-3" />
                        {student.email}
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-3">
                    <div>
                      <div className="text-white">{student.major}</div>
                      <div className="text-sm text-gray-400">{student.year}</div>
                    </div>
                  </td>
                  <td className="px-4 py-3">
                    <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${
                      student.experience === 'Beginner'
                        ? 'bg-jissa-green/20 text-jissa-light-green'
                        : student.experience === 'Intermediate'
                        ? 'bg-blue-600/20 text-blue-300'
                        : student.experience === 'Advanced'
                        ? 'bg-orange-600/20 text-orange-300'
                        : 'bg-red-600/20 text-red-300'
                    }`}>
                      {student.experience}
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    <div className="text-white text-sm">
                      {new Date(student.registeredAt).toLocaleDateString()}
                    </div>
                    <div className="text-xs text-gray-400">
                      {new Date(student.registeredAt).toLocaleTimeString()}
                    </div>
                  </td>
                  <td className="px-4 py-3">
                    <button
                      onClick={() => setSelectedStudent(selectedStudent === student.id ? null : student.id)}
                      className="text-jissa-green hover:text-jissa-light-green transition-colors"
                    >
                      <Eye className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Student Details Modal */}
      {selectedStudent && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-jissa-dark-gray rounded-xl p-6 max-w-lg w-full max-h-[80vh] overflow-y-auto border border-jissa-light-gray">
            {(() => {
              const student = students.find(s => s.id === selectedStudent);
              if (!student) return null;
              
              return (
                <>
                  <div className="flex justify-between items-start mb-6">
                    <h3 className="text-xl font-bold text-white">Student Details</h3>
                    <button
                      onClick={() => setSelectedStudent(null)}
                      className="text-gray-400 hover:text-white"
                    >
                      ✕
                    </button>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <label className="text-gray-400 text-sm">Name</label>
                      <p className="text-white font-medium">{student.name}</p>
                    </div>
                    
                    <div>
                      <label className="text-gray-400 text-sm">Email</label>
                      <p className="text-white">{student.email}</p>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="text-gray-400 text-sm">Major</label>
                        <p className="text-white">{student.major}</p>
                      </div>
                      <div>
                        <label className="text-gray-400 text-sm">Year</label>
                        <p className="text-white">{student.year}</p>
                      </div>
                    </div>
                    
                    <div>
                      <label className="text-gray-400 text-sm">Experience Level</label>
                      <p className="text-white">{student.experience}</p>
                    </div>
                    
                    <div>
                      <label className="text-gray-400 text-sm">Areas of Interest</label>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {student.interests.map((interest) => (
                          <span
                            key={interest}
                            className="bg-jissa-green/20 text-jissa-light-green px-2 py-1 rounded text-xs"
                          >
                            {interest}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <label className="text-gray-400 text-sm">Registration Date</label>
                      <p className="text-white">
                        {new Date(student.registeredAt).toLocaleString()}
                      </p>
                    </div>
                  </div>
                </>
              );
            })()}
          </div>
        </div>
      )}
    </div>
  );
};

export default StudentTable;