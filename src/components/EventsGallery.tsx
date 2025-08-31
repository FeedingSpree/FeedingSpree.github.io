import React, { useState } from 'react';
import { Calendar, Users, Award } from 'lucide-react';

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
    title: "Galactic Gambit CTF",
    date: "Nov 28, 2024",
    description: "💎 Galactic Gambit:Capture the Flag Workshop 💻✨ Step into a universe of adventure and teamwork with Galactic Gambit 🌌, where you will sharpen your cybersecurity skills in a thrilling, hands-on workshop 👾. Inspired by the Crystal Gems resilience and strategy, this event will challenge you to think, solve, and conquer! 🦹‍♂️ \n\n🛡️ What to Expect: \n🔹 Interactive cybersecurity challenges \n 🔹 Team-based flag capturing missions \n 🔹 Immersive Steven Universe-themed activities",
    image: "assets/CTF.jpg",
    participants: 48,
    category: "Workshop"
  },
  {
    id: 2,
    title: "Hack the Beat CTF Collaboration w/ JISSA APC",
    date: "Feb 15, 2025",
    description: "🎵 Hack the Beat 🎵 Get ready to sync your skills to the rhythm of the most electrifying cybersecurity showdown of the year! Hack the Beat is here, and it’s time to turn up the volume on your hacking prowess. 🎧💻\n\nThis year is all about finding the rhythm to beat the competition. Dive into a symphony of challenges where every note hides a clue, every beat conceals a vulnerability, and every flag is a crescendo waiting to be captured. 🎶🔓\nTeams will face a melody of mind-bending puzzles, testing their cybersecurity expertise, teamwork, and creativity. Will your squad hit the high notes and claim victory, or will another team steal the show? 🏆🎤\nAre you ready to hack the beat, crack the code, and seize the flag? Join us at Hack the Beat and let your skills compose the ultimate victory anthem! 🚀🔥",
    image: "assets/HTB.jpg",
    participants: 48,
    category: "Competition"
  },
  {
    id: 3,
    title: "Student Life Fair 2024",
    date: "2024",
    description: "/...🕵🏻‍♂ 𝚆𝚎𝚕𝚌𝚘𝚖𝚎 𝚝𝚘 𝚝𝚑𝚎 [GAME], 𝙰𝚐𝚎𝚗𝚝𝚜! 🏁 🎮...//\n\n👽 A sea of green hex unfolds 💚, and 294 𝙽𝚎𝚠 𝙼𝚎𝚖𝚋𝚎𝚛𝚜 𝙰𝚠𝚊𝚔𝚎𝚗 in the Junior Information Systems and Security Association from Student Life Fair 2024. Each one stepping into a core of encrypted apples, white hats ready for the digital frontier. Unlocking firewalls and breaking anomalies like sympathy in a world of cybersecurity chaos.\n\nTogether, we’re traversing deep into the ancient, tangled tree of vulnerabilities, uncovering hidden threats, and safeguarding the virtual seeds. This is only the beginning...🍏🔚.",
    image: "assets/SLF2024.jpg",
    participants: 294,
    category: "SLF"
  },
  {
    id: 4,
    title: "JISSA General Assembly",
    date: "Nov 15, 2024",
    description: "🌠<_𝙾𝚖𝚗𝚒𝚝𝚛𝚒𝚡 𝙳𝚎𝚏𝚎𝚗𝚜𝚎: 𝙲𝚢𝚋𝚎𝚛𝚜𝚎𝚌𝚞𝚛𝚒𝚝𝚢 𝙶𝚎𝚗𝚎𝚛𝚊𝚕 𝙰𝚜𝚜𝚎𝚖𝚋𝚕𝚢 𝙼𝚊𝚒𝚗 𝙿𝚘𝚜𝚝𝚎𝚛_>👽💚\n\nIn the boundless codon stream 🦠 where aliens lie, We rise as one, our skills profound. We stand to protect, to be brave, and resilient 🚀. Agents from all nations, all paths intertwined, for a secured innovation, for protection of multiverses 🌌\n\nJoin us in our mission towards intergalactic security bravery in our annual 𝙹𝙸𝚂𝚂𝙰 𝙶𝚎𝚗𝚎𝚛𝚊𝚕 𝙰𝚜𝚜𝚎𝚖𝚋𝚕𝚢 2024!",
    image: "assets/GeneralAssembly.jpg",
    participants: 77,
    category: "Assembly"
  },
  {
    id: 5,
    title: "Wickedly Secure",
    date: "Apr 22, 2025",
    description: "The digital spell has been cast 🪄 '𝑾𝒊𝒄𝒌𝒆𝒅𝒍𝒚 𝑺𝒆𝒄𝒖𝒓𝒆: 𝑨 𝑱𝒐𝒖𝒓𝒏𝒆𝒚 𝒊𝒏𝒕𝒐 𝑪𝒚𝒃𝒆𝒓𝒔𝒆𝒄𝒖𝒓𝒊𝒕𝒚 & 𝑫𝒂𝒕𝒂 𝑺𝒐𝒓𝒄𝒆𝒓𝒚' is finally here! ⚡💫\n\n Get ready to be enchanted by data and empowered by cybersecurity as JDSAAP and JISSA take you on an epic seminar experience like no other 🛡️📊. So, open your minds, and prepare to level up. This is where knowledge turns into power! 🌐⚔️",
    image: "assets/WS.jpg",
    participants: 54,
    category: "Seminar"
  },
  
];

const EventsGallery: React.FC = () => {
  const [filter, setFilter] = useState('All');

  const categories = ['All', 'Competition', 'Workshop', 'Panel', 'Seminar', 'Lab'];
  
  const filteredEvents = filter === 'All' 
    ? events 
    : events.filter(event => event.category === filter);
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

      {/* Events List - All Events Displayed */}
      <div className="space-y-8">
        {filteredEvents.map((event) => (
          <div 
            key={event.id}
            className="bg-jissa-dark-gray/30 rounded-2xl p-8 backdrop-blur-sm border border-jissa-light-gray/30 hover:border-jissa-green/50 transition-all duration-300 whitespace-pre-line"
          >
            <div className="flex flex-col lg:flex-row gap-8 items-center">
              <div className="lg:w-1/2">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full object-contain rounded-xl shadow-lg"
                />
              </div>
              <div className="lg:w-1/2 space-y-6">
                <div className="flex items-center gap-4">
                  <span className="bg-jissa-green/20 text-jissa-green px-4 py-2 rounded-full text-sm font-medium">
                    {event.category}
                  </span>
                  <span className="text-gray-400">{event.date}</span>
                </div>
                <h3 className="text-3xl font-bold text-white">{event.title}</h3>
                <p className="text-gray-300 text-lg leading-relaxed">
                  {event.description}
                </p>
                <div className="flex items-center gap-6 text-gray-400">
                  <div className="flex items-center gap-2">
                    <Users className="w-5 h-5" />
                    <span>{event.participants} participants</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-5 h-5" />
                    <span>{event.date}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventsGallery;