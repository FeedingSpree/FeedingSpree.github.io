import React, { createContext, useContext, useState, useEffect } from 'react';

export interface Student {
  id: string;
  name: string;
  email: string;
  major: string;
  year: string;
  experience: string;
  interests: string[];
  registeredAt: string;
}

interface RegistrationContextType {
  students: Student[];
  addStudent: (student: Omit<Student, 'id' | 'registeredAt'>) => void;
  getFilteredStudents: (filters: any) => Student[];
  getAnalytics: () => any;
}

const RegistrationContext = createContext<RegistrationContextType | undefined>(undefined);

export const useRegistration = () => {
  const context = useContext(RegistrationContext);
  if (!context) {
    throw new Error('useRegistration must be used within a RegistrationProvider');
  }
  return context;
};

export const RegistrationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [students, setStudents] = useState<Student[]>([]);

  useEffect(() => {
    const savedStudents = localStorage.getItem('jissa-students');
    if (savedStudents) {
      setStudents(JSON.parse(savedStudents));
    } else {
      // Mock data for demonstration
      const mockStudents: Student[] = [
        {
          id: '1',
          name: 'Alex Johnson',
          email: 'alex.j@student.edu',
          major: 'Computer Science',
          year: 'Junior',
          experience: 'Beginner',
          interests: ['Web Security', 'Network Security'],
          registeredAt: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString()
        },
        {
          id: '2',
          name: 'Sarah Chen',
          email: 'sarah.c@student.edu',
          major: 'Information Systems',
          year: 'Sophomore',
          experience: 'Intermediate',
          interests: ['Cryptography', 'Digital Forensics'],
          registeredAt: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString()
        },
        {
          id: '3',
          name: 'Mike Rodriguez',
          email: 'mike.r@student.edu',
          major: 'Cybersecurity',
          year: 'Senior',
          experience: 'Advanced',
          interests: ['Penetration Testing', 'Incident Response'],
          registeredAt: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString()
        }
      ];
      setStudents(mockStudents);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('jissa-students', JSON.stringify(students));
  }, [students]);

  const addStudent = (studentData: Omit<Student, 'id' | 'registeredAt'>) => {
    const newStudent: Student = {
      ...studentData,
      id: Date.now().toString(),
      registeredAt: new Date().toISOString()
    };
    setStudents(prev => [...prev, newStudent]);
  };

  const getFilteredStudents = (filters: any) => {
    return students.filter(student => {
      if (filters.major && student.major !== filters.major) return false;
      if (filters.year && student.year !== filters.year) return false;
      if (filters.experience && student.experience !== filters.experience) return false;
      if (filters.search && !student.name.toLowerCase().includes(filters.search.toLowerCase()) && 
          !student.email.toLowerCase().includes(filters.search.toLowerCase())) return false;
      return true;
    });
  };

  const getAnalytics = () => {
    const now = new Date();
    const last30Days = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000);
    const last7Days = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);

    const recentRegistrations = students.filter(s => new Date(s.registeredAt) >= last30Days);
    const weeklyRegistrations = students.filter(s => new Date(s.registeredAt) >= last7Days);

    const majorDistribution = students.reduce((acc, student) => {
      acc[student.major] = (acc[student.major] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);

    const yearDistribution = students.reduce((acc, student) => {
      acc[student.year] = (acc[student.year] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);

    return {
      totalMembers: students.length,
      recentRegistrations: recentRegistrations.length,
      weeklyRegistrations: weeklyRegistrations.length,
      majorDistribution,
      yearDistribution,
      dailyRegistrations: generateDailyData(students)
    };
  };

  const generateDailyData = (students: Student[]) => {
    const last7Days = [];
    for (let i = 6; i >= 0; i--) {
      const date = new Date();
      date.setDate(date.getDate() - i);
      const dateStr = date.toISOString().split('T')[0];
      const count = students.filter(s => s.registeredAt.startsWith(dateStr)).length;
      last7Days.push({
        date: date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
        registrations: count
      });
    }
    return last7Days;
  };

  return (
    <RegistrationContext.Provider value={{ students, addStudent, getFilteredStudents, getAnalytics }}>
      {children}
    </RegistrationContext.Provider>
  );
};