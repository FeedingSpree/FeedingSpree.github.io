import React from 'react';
import { Trophy } from 'lucide-react';

interface AwardItem {
  id: number;
  title: string;
  description: string;
  year: string;
  icon: React.ReactNode;
  category: string;
  level: 'GAWAD T.I.P' | 'GAWAD T.I.P 2025' | 'Regional' | 'State' | 'University';
}

const awards: AwardItem[] = [
  {
    id: 1,
    title: "Best Student Organization Program",
    description: "First place in the National CyberPatriot Competition, demonstrating excellence in cybersecurity defense and system administration.",
    year: "2024",
    icon: <Trophy className="w-8 h-8" />,
    category: "Award",
    level: "GAWAD T.I.P"
  },
  {
    id: 2,
    title: "Best Student Organization Program",
    description: "Recognized by the university as the best student organization for exceptional leadership, community service, and academic achievement.",
    year: "2024",
    icon: <Trophy className="w-8 h-8" />,
    category: "Award",
    level: "GAWAD T.I.P"
  },
  {
    id: 3,
    title: "Outstanding Student Organization - SILVER Award",
    description: "Recognized by the university with the Silver Award for outstanding leadership, service, and contributions to the student community",
    year: "2024",
    icon: <Trophy className="w-8 h-8" />,
    category: "Award",
    level: "GAWAD T.I.P"
  },
  {
    id: 4,
    title: "GAWAD T.I.P. 2025 Awardees",
    description: "4 Officers were awarded during the Prestigious event",
    year: "2024",
    icon: <Trophy className="w-8 h-8" />,
    category: "Leadership",
    level: "GAWAD T.I.P"
  },
];

const levelColors = {
  "GAWAD T.I.P": 'from-jissa-light-green to-jissa-green',
  "GAWAD T.I.P 2025": 'from-jissa-green to-jissa-dark-green',
  Regional: 'from-green-400 to-green-600',
  State: 'from-green-400 to-green-600',
  University: 'from-pink-400 to-rose-500'
};

const AwardsSection: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white mb-6">Awards & Recognition</h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Our commitment to excellence in cybersecurity education and competition has earned us recognition at every level
        </p>
      </div>

      {/* Featured Award */}
      <div className="mb-16">
        <div className="bg-gradient-to-r from-jissa-light-green/10 to-jissa-green/10 rounded-2xl p-8 border border-jissa-green/30 backdrop-blur-sm">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-shrink-0">
              <div className="w-24 h-24 bg-gradient-to-r from-jissa-light-green to-jissa-green rounded-full flex items-center justify-center">
                <Trophy className="w-12 h-12 text-white" />
              </div>
            </div>
            <div className="flex-1 text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
                <span className="bg-gradient-to-r from-jissa-light-green to-jissa-green text-transparent bg-clip-text font-bold text-sm">
                  1st RUNNER UP
                </span>
                <span className="text-gray-400">2024</span>
              </div>
              <h3 className="text-3xl font-bold text-white mb-4">𝐇𝐚𝐜𝐤𝐅𝐨𝐫𝐆𝐨𝐯 𝟑 by DICT and Philippines National CERT</h3>
              <p className="text-gray-300 text-lg leading-relaxed">

              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Awards Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {awards.slice(1).map((award) => (
          <div
            key={award.id}
            className="bg-jissa-dark-gray/30 rounded-xl p-6 backdrop-blur-sm border border-jissa-light-gray/30 hover:border-jissa-gray/50 transition-all duration-300 hover:transform hover:scale-105"
          >
            <div className="flex items-start gap-4 mb-4">
              <div className={`p-3 rounded-lg bg-gradient-to-r ${levelColors[award.level]}/20`}>
                <div className={`text-transparent bg-clip-text bg-gradient-to-r ${levelColors[award.level]}`}>
                  {award.icon}
                </div>
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${levelColors[award.level]}/20`}>
                    <span className={`text-transparent bg-clip-text bg-gradient-to-r ${levelColors[award.level]}`}>
                      {award.level}
                    </span>
                  </span>
                  <span className="text-gray-400 text-sm">{award.year}</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{award.title}</h3>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">{award.description}</p>
            <div className="mt-4 pt-4 border-t border-jissa-light-gray/30">
              <span className="text-gray-400 text-xs font-medium">{award.category}</span>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default AwardsSection;
