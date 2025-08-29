import React, { useState } from 'react';
import { Award, Users, Calendar, Mail, Phone, MapPin, ChevronRight, Star, Trophy, Medal, Target } from 'lucide-react';
import Navbar from '../components/Navbar';
import EventsGallery from '../components/EventsGallery';
import AwardsSection from '../components/AwardsSection';

const HomePage: React.FC = () => {

  return (
    <div className="min-h-screen bg-gradient-to-br from-jissa-black via-jissa-dark-gray to-jissa-gray">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-32">
        <div className="absolute inset-0">
          <img 
            src="assets/banner.png" 
            alt="JISSA Banner" 
            className="w-full h-full object-cover"
          /> 
          <div className="absolute inset-0 bg-jissa-black/70"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-8">
              <div className="p-4 bg-jissa-green/20 rounded-full backdrop-blur-sm border border-jissa-green/30">
                <img src="/JISSA FINAL LOGO.png" alt="JISSA Logo" className="w-16 h-16" />
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
              <span className="bg-gradient-to-r from-jissa-green to-jissa-light-green bg-clip-text text-transparent">
                JISSA
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-white mb-4 font-medium drop-shadow-lg">
              Junior Information Systems Security Association
            </p>
            <p className="text-lg text-gray-100 mb-12 max-w-3xl mx-auto leading-relaxed drop-shadow-md">
              Empowering the next generation of cybersecurity professionals through hands-on learning, 
              competitive challenges, and industry connections. Join us in securing the digital future.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => window.open('https://web.facebook.com/jissa.tipqc', '_blank')}
                className="bg-gradient-to-r from-jissa-green to-jissa-dark-green hover:from-jissa-dark-green hover:to-green-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
              >
                Join JISSA Today
                <ChevronRight className="w-5 h-5" />
              </button>
              
            </div>
          </div>
        </div>
      </section>

      {/* Promotional Video Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">See JISSA in Action</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Watch our promotional video to get a glimpse of what makes JISSA an exceptional cybersecurity community
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="relative bg-jissa-dark-gray/50 rounded-2xl overflow-hidden backdrop-blur-sm border border-jissa-light-gray/50 shadow-2xl">
              <div className="aspect-video bg-jissa-gray/30 flex items-center justify-center">
               
                
                {/* Uncomment and replace with your actual video */}
                { 
                <video 
                  controls 
                  className="w-full h-full"
                >
                  <source src="assets/promo.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                }
              </div>
              
              {/* Video Info Overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-jissa-black/80 to-transparent p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-white font-semibold text-lg">JISSA: Securing Tomorrow</h3>
                    <p className="text-gray-300 text-sm">Learn about our mission, achievements, and community</p>
                  </div>
                  <div className="flex items-center gap-2 text-gray-300 text-sm">
                    <span>Duration: 1:59</span>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-jissa-dark-gray/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">About JISSA</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Building tomorrow's cybersecurity leaders through education, competition, and community
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-jissa-gray/50 p-8 rounded-xl backdrop-blur-sm border border-jissa-light-gray/50 hover:border-jissa-green/50 transition-all duration-300">
              <div className="w-12 h-12 bg-jissa-green/20 rounded-lg flex items-center justify-center mb-6">
                <Target className="w-6 h-6 text-jissa-green" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Our Mission</h3>
              <p className="text-gray-300">
                Lorem Ipsum muna.
              </p>
            </div>
            
            <div className="bg-jissa-gray/50 p-8 rounded-xl backdrop-blur-sm border border-jissa-light-gray/50 hover:border-jissa-light-green/50 transition-all duration-300">
              <div className="w-12 h-12 bg-jissa-light-green/20 rounded-lg flex items-center justify-center mb-6">
                <Users className="w-6 h-6 text-jissa-light-green" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Community</h3>
              <p className="text-gray-300">
                Lorem Ipsum.
              </p>
            </div>
            
            <div className="bg-jissa-gray/50 p-8 rounded-xl backdrop-blur-sm border border-jissa-light-gray/50 hover:border-orange-500/50 transition-all duration-300">
              <div className="w-12 h-12 bg-orange-600/20 rounded-lg flex items-center justify-center mb-6">
                <Award className="w-6 h-6 text-orange-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Excellence</h3>
              <p className="text-gray-300">
                Lorem Ipsum.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Events Gallery */}
      <section id="events" className="py-20">
        <EventsGallery />
      </section>

      {/* Awards Section */}
      <section className="py-20 bg-jissa-dark-gray/50 backdrop-blur-sm">
        <AwardsSection />
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Get In Touch</h2>
            <p className="text-xl text-gray-300">
              Ready to start your cybersecurity journey? We'd love to hear from you!
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="bg-jissa-gray/30 p-8 rounded-xl backdrop-blur-sm border border-jissa-light-gray/30">
              <Mail className="w-8 h-8 text-jissa-green mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
              <p className="text-gray-300">jissa@university.edu</p>
            </div>
            
            <div className="bg-jissa-gray/30 p-8 rounded-xl backdrop-blur-sm border border-jissa-light-gray/30">
              <Phone className="w-8 h-8 text-jissa-light-green mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Phone</h3>
              <p className="text-gray-300">(555) 123-JISSA</p>
            </div>
            
            <div className="bg-jissa-gray/30 p-8 rounded-xl backdrop-blur-sm border border-jissa-light-gray/30">
              <MapPin className="w-8 h-8 text-orange-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Location</h3>
              <p className="text-gray-300">Computer Science Building, Room 201</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;