import React, { useState } from 'react';
import { Calendar, Users, Award, ChevronLeft, ChevronRight } from 'lucide-react';

interface Event {
  id: number;
  title: string;
  date: string;
  description: string;
  image: string;
  participants: number;
  category: string;
}

const events: Event[] = [
  {
    id: 1,
    title: "Capture The Flag",
    date: "2025",
    description: "Our team secured 3rd place nationally in the CyberPatriot competition, demonstrating exceptional skills in network security and system hardening.",
    image: "https://images.pexels.com/photos/5380664/pexels-photo-5380664.jpeg?auto=compress&cs=tinysrgb&w=600",
    participants: 24,
    category: "Competition"
  },
  {
    id: 2,
    title: "Ethical Hacking Workshop",
    date: "February 2024",
    description: "Hands-on workshop covering penetration testing techniques, vulnerability assessment, and responsible disclosure practices.",
    image: "https://images.pexels.com/photos/5380792/pexels-photo-5380792.jpeg?auto=compress&cs=tinysrgb&w=600",
    participants: 45,
    category: "Workshop"
  },
  {
    id: 3,
    title: "Industry Panel: Careers in Cybersecurity",
    date: "January 2024",
    description: "Leading cybersecurity professionals shared insights about career paths, certifications, and industry trends with our members.",
    image: "https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=600",
    participants: 78,
    category: "Panel"
  },
  {
    id: 4,
    title: "Capture The Flag Tournament",
    date: "December 2023",
    description: "Annual CTF event featuring challenges in cryptography, web security, forensics, and reverse engineering. Record participation this year!",
    image: "https://images.pexels.com/photos/5380590/pexels-photo-5380590.jpeg?auto=compress&cs=tinysrgb&w=600",
    participants: 92,
    category: "Competition"
  },
  {
    id: 5,
    title: "Blockchain Security Seminar",
    date: "November 2023",
    description: "Deep dive into blockchain technology, smart contract vulnerabilities, and decentralized security principles.",
    image: "https://images.pexels.com/photos/7567486/pexels-photo-7567486.jpeg?auto=compress&cs=tinysrgb&w=600",
    participants: 35,
    category: "Seminar"
  },
  {
    id: 6,
    title: "Network Defense Lab",
    date: "October 2023",
    description: "Practical session on network monitoring, intrusion detection systems, and incident response procedures.",
    image: "https://images.pexels.com/photos/5380791/pexels-photo-5380791.jpeg?auto=compress&cs=tinysrgb&w=600",
    participants: 28,
    category: "Lab"
  }
];

const EventsGallery: React.FC = () => {
  const [currentEvent, setCurrentEvent] = useState(0);
  const [filter, setFilter] = useState('All');

  const categories = ['All', 'Competition', 'Workshop', 'Panel', 'Seminar', 'Lab'];
  
  const filteredEvents = filter === 'All' 
    ? events 
    : events.filter(event => event.category === filter);

  const nextEvent = () => {
    setCurrentEvent((prev) => (prev + 1) % filteredEvents.length);
  };

  const prevEvent = () => {
    setCurrentEvent((prev) => (prev - 1 + filteredEvents.length) % filteredEvents.length);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white mb-6">Our Events & Activities</h2>
        <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
          From competitive challenges to educational workshops, discover the exciting events that make JISSA a vibrant community
        </p>
        
        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => {
                setFilter(category);
                setCurrentEvent(0);
              }}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                filter === category
                  ? 'bg-jissa-green text-white shadow-lg'
                  : 'bg-jissa-gray/50 text-gray-300 hover:bg-jissa-light-gray/50 hover:text-white'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {filteredEvents.length > 0 && (
        <div className="relative">
          {/* Main Event Display */}
          <div className="bg-jissa-dark-gray/50 rounded-2xl backdrop-blur-sm border border-jissa-light-gray/50 overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/2">
                <img
                  src={filteredEvents[currentEvent].image}
                  alt={filteredEvents[currentEvent].title}
                  className="w-full h-64 md:h-full object-cover"
                />
              </div>
              <div className="md:w-1/2 p-8">
                <div className="flex items-center gap-2 mb-4">
                  <span className="bg-jissa-green/20 text-jissa-green px-3 py-1 rounded-full text-sm font-medium">
                    {filteredEvents[currentEvent].category}
                  </span>
                  <span className="text-gray-400 text-sm">
                    {filteredEvents[currentEvent].date}
                  </span>
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4">
                  {filteredEvents[currentEvent].title}
                </h3>
                
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {filteredEvents[currentEvent].description}
                </p>
                
                <div className="flex items-center gap-6 text-sm text-gray-400">
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4" />
                    <span>{filteredEvents[currentEvent].participants} participants</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{filteredEvents[currentEvent].date}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          {filteredEvents.length > 1 && (
            <>
              <button
                onClick={prevEvent}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-jissa-dark-gray/80 hover:bg-jissa-gray/80 text-white p-3 rounded-full backdrop-blur-sm border border-jissa-light-gray/50 transition-all duration-300"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              
              <button
                onClick={nextEvent}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-jissa-dark-gray/80 hover:bg-jissa-gray/80 text-white p-3 rounded-full backdrop-blur-sm border border-jissa-light-gray/50 transition-all duration-300"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </>
          )}

          {/* Dots Indicator */}
          {filteredEvents.length > 1 && (
            <div className="flex justify-center mt-8 gap-2">
              {filteredEvents.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentEvent(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentEvent
                      ? 'bg-jissa-green scale-125'
                      : 'bg-jissa-light-gray hover:bg-jissa-gray'
                  }`}
                />
              ))}
            </div>
          )}
        </div>
      )}

      {/* Event Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
        {filteredEvents.slice(0, 6).map((event, index) => (
          <div
            key={event.id}
            onClick={() => setCurrentEvent(index)}
            className={`bg-jissa-dark-gray/30 rounded-xl overflow-hidden backdrop-blur-sm border cursor-pointer transition-all duration-300 hover:scale-105 hover:border-jissa-green/50 ${
              index === currentEvent ? 'border-jissa-green/50 ring-2 ring-jissa-green/20' : 'border-jissa-light-gray/30'
            }`}
          >
            <img
              src={event.image}
              alt={event.title}
              className="w-full h-32 object-cover"
            />
            <div className="p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="bg-jissa-gray/50 text-gray-300 px-2 py-1 rounded text-xs">
                  {event.category}
                </span>
                <span className="text-gray-400 text-xs">{event.date}</span>
              </div>
              <h4 className="text-white font-semibold text-sm mb-2 line-clamp-2">
                {event.title}
              </h4>
              <div className="flex items-center gap-2 text-xs text-gray-400">
                <Users className="w-3 h-3" />
                <span>{event.participants}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventsGallery;