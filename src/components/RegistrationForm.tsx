import React, { useState } from 'react';
import { X, User, Mail, GraduationCap, Calendar, Shield, CheckCircle } from 'lucide-react';
import { useRegistration } from '../context/RegistrationContext';

interface RegistrationFormProps {
  onClose: () => void;
}

const RegistrationForm: React.FC<RegistrationFormProps> = ({ onClose }) => {
  const { addStudent } = useRegistration();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    major: '',
    year: '',
    experience: '',
    interests: [] as string[]
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const interestOptions = [
    'Web Security',
    'Network Security',
    'Cryptography',
    'Digital Forensics',
    'Penetration Testing',
    'Incident Response',
    'Malware Analysis',
    'Cloud Security',
    'IoT Security',
    'Social Engineering'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleInterestChange = (interest: string) => {
    setFormData(prev => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter(i => i !== interest)
        : [...prev.interests, interest]
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addStudent(formData);
    setIsSubmitted(true);
    setTimeout(() => onClose(), 2000);
  };

  if (isSubmitted) {
    return (
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
        <div className="bg-jissa-dark-gray rounded-2xl p-8 max-w-md w-full text-center border border-jissa-light-gray">
          <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-8 h-8 text-green-400" />
          </div>
          <h3 className="text-2xl font-bold text-white mb-4">Welcome to JISSA!</h3>
          <p className="text-gray-300 mb-6">
            Your registration has been successfully submitted. We'll be in touch soon with more information about upcoming events and meetings.
          </p>
          <div className="text-sm text-gray-400">
            Redirecting in a moment...
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4 overflow-y-auto">
      <div className="bg-jissa-dark-gray rounded-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-jissa-light-gray">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-3xl font-bold text-white mb-2">Join JISSA</h2>
            <p className="text-gray-300">Start your cybersecurity journey with us</p>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Personal Information */}
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-300 text-sm font-medium mb-2">
                <User className="w-4 h-4 inline mr-2" />
                Full Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 bg-jissa-gray/50 border border-jissa-light-gray rounded-lg text-white placeholder-gray-400 focus:border-jissa-green focus:outline-none focus:ring-2 focus:ring-jissa-green/20 transition-colors"
                placeholder="Enter your full name"
              />
            </div>

            <div>
              <label className="block text-gray-300 text-sm font-medium mb-2">
                <Mail className="w-4 h-4 inline mr-2" />
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 bg-jissa-gray/50 border border-jissa-light-gray rounded-lg text-white placeholder-gray-400 focus:border-jissa-green focus:outline-none focus:ring-2 focus:ring-jissa-green/20 transition-colors"
                placeholder="your.email@student.edu"
              />
            </div>
          </div>

          {/* Academic Information */}
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-300 text-sm font-medium mb-2">
                <GraduationCap className="w-4 h-4 inline mr-2" />
                Major
              </label>
              <select
                name="major"
                value={formData.major}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 bg-jissa-gray/50 border border-jissa-light-gray rounded-lg text-white focus:border-jissa-green focus:outline-none focus:ring-2 focus:ring-jissa-green/20 transition-colors"
              >
                <option value="">Select your major</option>
                <option value="Computer Science">Computer Science</option>
                <option value="Information Systems">Information Systems</option>
                <option value="Cybersecurity">Cybersecurity</option>
                <option value="Information Technology">Information Technology</option>
                <option value="Software Engineering">Software Engineering</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div>
              <label className="block text-gray-300 text-sm font-medium mb-2">
                <Calendar className="w-4 h-4 inline mr-2" />
                Academic Year
              </label>
              <select
                name="year"
                value={formData.year}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 bg-jissa-gray/50 border border-jissa-light-gray rounded-lg text-white focus:border-jissa-green focus:outline-none focus:ring-2 focus:ring-jissa-green/20 transition-colors"
              >
                <option value="">Select your year</option>
                <option value="Freshman">Freshman</option>
                <option value="Sophomore">Sophomore</option>
                <option value="Junior">Junior</option>
                <option value="Senior">Senior</option>
                <option value="Graduate">Graduate</option>
              </select>
            </div>
          </div>

          {/* Experience Level */}
          <div>
            <label className="block text-gray-300 text-sm font-medium mb-2">
              <img src="/JISSA FINAL LOGO.png" alt="JISSA" className="w-4 h-4 inline mr-2" />
              Cybersecurity Experience
            </label>
            <select
              name="experience"
              value={formData.experience}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 bg-jissa-gray/50 border border-jissa-light-gray rounded-lg text-white focus:border-jissa-green focus:outline-none focus:ring-2 focus:ring-jissa-green/20 transition-colors"
            >
              <option value="">Select your experience level</option>
              <option value="Beginner">Beginner - New to cybersecurity</option>
              <option value="Intermediate">Intermediate - Some coursework/projects</option>
              <option value="Advanced">Advanced - Internships/competitions</option>
              <option value="Expert">Expert - Professional experience</option>
            </select>
          </div>

          {/* Interests */}
          <div>
            <label className="block text-gray-300 text-sm font-medium mb-4">
              Areas of Interest (Select all that apply)
            </label>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {interestOptions.map((interest) => (
                <label
                  key={interest}
                  className={`flex items-center p-3 rounded-lg border cursor-pointer transition-all duration-200 ${
                    formData.interests.includes(interest)
                      ? 'bg-jissa-green/20 border-jissa-green text-jissa-light-green'
                      : 'bg-jissa-gray/30 border-jissa-light-gray text-gray-300 hover:border-jissa-light-gray'
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={formData.interests.includes(interest)}
                    onChange={() => handleInterestChange(interest)}
                    className="sr-only"
                  />
                  <span className="text-sm font-medium">{interest}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Submit Button */}
          <div className="pt-6">
            <button
              type="submit"
              disabled={!formData.name || !formData.email || !formData.major || !formData.year || !formData.experience}
              className="w-full bg-gradient-to-r from-jissa-green to-jissa-dark-green hover:from-jissa-dark-green hover:to-green-700 disabled:from-jissa-gray disabled:to-jissa-light-gray text-white font-semibold py-4 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 disabled:scale-100 disabled:cursor-not-allowed"
            >
              Join JISSA Community
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegistrationForm;