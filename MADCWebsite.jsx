import React, { useState, useEffect } from 'react';
import { Menu, X, Code, Smartphone, Users, Calendar, ChevronRight, Zap, Target, Rocket, Github, Linkedin, Mail, ExternalLink } from 'lucide-react';

export default function MADCWebsite() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
      setIsMenuOpen(false);
    }
  };

  const teamMembers = {
    secretary: {
      name: "Arjun Kumar",
      role: "Secretary",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
      linkedin: "#",
      github: "#"
    },
    core: [
      {
        name: "Priya Sharma",
        role: "Technical Lead",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
        linkedin: "#"
      },
      {
        name: "Rohit Patel",
        role: "Android Development Head",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
        linkedin: "#"
      },
      {
        name: "Sneha Reddy",
        role: "iOS Development Head",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
        linkedin: "#"
      },
      {
        name: "Vikram Singh",
        role: "Event Coordinator",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
        linkedin: "#"
      }
    ],
    faculty: [
      {
        name: "Dr. Rajesh Malhotra",
        role: "Faculty Coordinator",
        department: "Computer Science & Engineering"
      },
      {
        name: "Prof. Anita Desai",
        role: "Co-Coordinator",
        department: "Information Technology"
      }
    ]
  };

  const opportunities = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Skill Development",
      description: "Master Android, iOS, Flutter, and React Native through hands-on projects and expert-led workshops."
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Hackathons & Challenges",
      description: "Participate in intensive coding competitions and showcase your problem-solving abilities."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Industry Mentorship",
      description: "Connect with industry professionals and gain insights into real-world app development."
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "Real Projects",
      description: "Build production-ready applications that solve actual problems and make an impact."
    }
  ];

  const activities = [
    {
      title: "Technical Workshops",
      description: "Regular hands-on sessions covering latest mobile development frameworks and best practices.",
      frequency: "Bi-weekly"
    },
    {
      title: "Coding Bootcamps",
      description: "Intensive training programs to fast-track your journey from beginner to proficient developer.",
      frequency: "Quarterly"
    },
    {
      title: "Guest Lectures",
      description: "Industry experts share insights on emerging trends, career paths, and success stories.",
      frequency: "Monthly"
    },
    {
      title: "App-A-Thon",
      description: "Our flagship annual hackathon where teams compete to build innovative mobile applications.",
      frequency: "Annual"
    },
    {
      title: "Code Review Sessions",
      description: "Collaborative learning through peer code reviews and best practice discussions.",
      frequency: "Weekly"
    },
    {
      title: "Project Showcases",
      description: "Platform to present your completed projects to peers, faculty, and potential recruiters.",
      frequency: "Semester-end"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-900 text-white font-sans">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-slate-950/95 backdrop-blur-lg shadow-lg shadow-purple-500/10' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center transform rotate-6">
                <Smartphone className="w-6 h-6 -rotate-6" />
              </div>
              <div className="font-black text-xl sm:text-2xl tracking-tight">
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">MADC</span>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              {['home', 'about', 'opportunities', 'team', 'activities'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`px-4 py-2 rounded-lg text-sm font-semibold uppercase tracking-wider transition-all duration-200 ${
                    activeSection === item
                      ? 'bg-purple-500/20 text-purple-300'
                      : 'text-gray-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {item}
                </button>
              ))}
              <button className="ml-4 px-6 py-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg font-bold text-sm uppercase tracking-wider hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-200 hover:scale-105">
                Join Now
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 rounded-lg hover:bg-white/10 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-slate-950/98 backdrop-blur-xl border-t border-purple-500/20">
            <div className="px-4 py-4 space-y-2">
              {['home', 'about', 'opportunities', 'team', 'activities'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="block w-full text-left px-4 py-3 rounded-lg text-sm font-semibold uppercase tracking-wider text-gray-300 hover:text-white hover:bg-purple-500/20 transition-all"
                >
                  {item}
                </button>
              ))}
              <button className="w-full px-4 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg font-bold text-sm uppercase tracking-wider">
                Join Now
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Animated Background Grid */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: 'linear-gradient(rgba(139, 92, 246, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(139, 92, 246, 0.3) 1px, transparent 1px)',
            backgroundSize: '50px 50px',
            animation: 'gridMove 20s linear infinite'
          }}></div>
        </div>

        {/* Floating Shapes */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-500/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <div className="inline-block px-4 py-2 bg-purple-500/20 border border-purple-500/30 rounded-full backdrop-blur-sm mb-4">
              <span className="text-purple-300 font-semibold text-sm uppercase tracking-wider">Mobile Application Development Club</span>
            </div>
            
            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tighter leading-none">
              <span className="block bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent animate-gradient">
                BUILD THE FUTURE
              </span>
              <span className="block mt-2 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent animate-gradient">
                ONE APP AT A TIME
              </span>
            </h1>

            <p className="text-xl sm:text-2xl text-gray-300 max-w-3xl mx-auto font-light leading-relaxed">
              Empowering students to create innovative mobile solutions through collaboration, continuous learning, and hands-on development.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
              <button onClick={() => scrollToSection('about')} className="group px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl font-bold text-lg uppercase tracking-wider hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105 flex items-center gap-2">
                Explore Club
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button onClick={() => scrollToSection('activities')} className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl font-bold text-lg uppercase tracking-wider hover:bg-white/20 transition-all duration-300 hover:scale-105">
                View Activities
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-16 max-w-4xl mx-auto">
              {[
                { number: "500+", label: "Active Members" },
                { number: "50+", label: "Projects Built" },
                { number: "100+", label: "Workshops Held" },
                { number: "20+", label: "Hackathons Won" }
              ].map((stat, index) => (
                <div key={index} className="text-center" style={{ animation: 'fadeInUp 0.6s ease-out forwards', animationDelay: `${index * 0.1}s`, opacity: 0 }}>
                  <div className="text-3xl sm:text-4xl font-black bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-400 uppercase tracking-wider font-semibold mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 sm:py-32 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="space-y-6">
              <div className="inline-block px-4 py-2 bg-purple-500/20 border border-purple-500/30 rounded-full backdrop-blur-sm">
                <span className="text-purple-300 font-semibold text-sm uppercase tracking-wider">About MADC</span>
              </div>
              
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight">
                <span className="bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
                  Shaping Tomorrow's
                </span>
                <br />
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  App Developers
                </span>
              </h2>

              <div className="space-y-4 text-gray-300 text-lg leading-relaxed">
                <p>
                  The Mobile Application Development Club (MADC) is a student-driven community dedicated to fostering innovation and technical excellence in mobile app development.
                </p>
                <p>
                  In today's digital-first world, mobile applications are the gateway to billions of users. From e-commerce to healthcare, education to entertainment, apps are transforming every industry.
                </p>
                <p>
                  Our club provides the perfect platform for students to learn, build, and innovate while developing industry-ready skills in Android, iOS, and cross-platform development.
                </p>
              </div>

              <div className="pt-6 space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Target className="w-6 h-6 text-purple-400" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-2">Our Mission</h3>
                    <p className="text-gray-400">
                      Empower students with cutting-edge mobile development skills and foster a culture of innovation and collaboration.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-pink-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Rocket className="w-6 h-6 text-pink-400" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-2">Our Vision</h3>
                    <p className="text-gray-400">
                      Create a thriving ecosystem where students build industry-ready applications and become future tech leaders.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10 grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-6 hover:scale-105 transition-transform duration-300">
                    <Code className="w-12 h-12 text-purple-400 mb-4" />
                    <h4 className="font-bold text-lg mb-2">Android Dev</h4>
                    <p className="text-sm text-gray-400">Kotlin & Java mastery</p>
                  </div>
                  <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-sm border border-blue-500/30 rounded-2xl p-6 hover:scale-105 transition-transform duration-300">
                    <Smartphone className="w-12 h-12 text-blue-400 mb-4" />
                    <h4 className="font-bold text-lg mb-2">iOS Dev</h4>
                    <p className="text-sm text-gray-400">Swift & SwiftUI</p>
                  </div>
                </div>
                <div className="space-y-4 pt-8">
                  <div className="bg-gradient-to-br from-pink-500/20 to-purple-500/20 backdrop-blur-sm border border-pink-500/30 rounded-2xl p-6 hover:scale-105 transition-transform duration-300">
                    <Zap className="w-12 h-12 text-pink-400 mb-4" />
                    <h4 className="font-bold text-lg mb-2">Flutter</h4>
                    <p className="text-sm text-gray-400">Cross-platform apps</p>
                  </div>
                  <div className="bg-gradient-to-br from-purple-500/20 to-blue-500/20 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-6 hover:scale-105 transition-transform duration-300">
                    <Rocket className="w-12 h-12 text-purple-400 mb-4" />
                    <h4 className="font-bold text-lg mb-2">React Native</h4>
                    <p className="text-sm text-gray-400">JavaScript mobile apps</p>
                  </div>
                </div>
              </div>
              <div className="absolute -top-10 -right-10 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Opportunities Section */}
      <section id="opportunities" className="py-20 sm:py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-950/50 to-transparent"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-purple-500/20 border border-purple-500/30 rounded-full backdrop-blur-sm mb-6">
              <span className="text-purple-300 font-semibold text-sm uppercase tracking-wider">What We Offer</span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Unlock Your Potential
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Join MADC and access exclusive opportunities designed to accelerate your journey in mobile development.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {opportunities.map((opportunity, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-slate-900/50 to-purple-950/30 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-8 hover:border-purple-500/50 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/20"
                style={{ animation: 'fadeInUp 0.6s ease-out forwards', animationDelay: `${index * 0.1}s`, opacity: 0 }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <div className="text-purple-400 group-hover:text-pink-400 transition-colors">
                    {opportunity.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3">{opportunity.title}</h3>
                <p className="text-gray-400 leading-relaxed">{opportunity.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20 sm:py-32 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-purple-500/20 border border-purple-500/30 rounded-full backdrop-blur-sm mb-6">
              <span className="text-purple-300 font-semibold text-sm uppercase tracking-wider">Our Team</span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Meet The Leaders
              </span>
            </h2>
          </div>

          {/* Secretary */}
          <div className="max-w-4xl mx-auto mb-20">
            <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-sm border border-purple-500/30 rounded-3xl p-8 sm:p-12">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="w-40 h-40 rounded-2xl overflow-hidden flex-shrink-0 ring-4 ring-purple-500/50">
                  <img src={teamMembers.secretary.image} alt={teamMembers.secretary.name} className="w-full h-full object-cover" />
                </div>
                <div className="text-center md:text-left flex-1">
                  <div className="inline-block px-3 py-1 bg-purple-500/30 rounded-full text-sm font-semibold text-purple-300 uppercase tracking-wider mb-3">
                    Club Secretary
                  </div>
                  <h3 className="text-3xl sm:text-4xl font-black mb-2">{teamMembers.secretary.name}</h3>
                  <p className="text-xl text-purple-300 mb-4">{teamMembers.secretary.role}</p>
                  <div className="flex items-center justify-center md:justify-start gap-3">
                    <a href={teamMembers.secretary.linkedin} className="w-10 h-10 bg-white/10 hover:bg-purple-500/30 rounded-lg flex items-center justify-center transition-colors">
                      <Linkedin className="w-5 h-5" />
                    </a>
                    <a href={teamMembers.secretary.github} className="w-10 h-10 bg-white/10 hover:bg-purple-500/30 rounded-lg flex items-center justify-center transition-colors">
                      <Github className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Core Members */}
          <div className="mb-20">
            <h3 className="text-3xl font-black mb-8 text-center">Core Team</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {teamMembers.core.map((member, index) => (
                <div
                  key={index}
                  className="group bg-gradient-to-br from-slate-900/50 to-purple-950/30 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-6 hover:border-purple-500/50 transition-all duration-300 hover:scale-105"
                  style={{ animation: 'fadeInUp 0.6s ease-out forwards', animationDelay: `${index * 0.1}s`, opacity: 0 }}
                >
                  <div className="w-full aspect-square rounded-xl overflow-hidden mb-4 ring-2 ring-purple-500/30 group-hover:ring-purple-500/60 transition-all">
                    <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                  </div>
                  <h4 className="text-xl font-bold mb-1">{member.name}</h4>
                  <p className="text-purple-300 mb-3">{member.role}</p>
                  <a href={member.linkedin} className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-purple-300 transition-colors">
                    <Linkedin className="w-4 h-4" />
                    Connect
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Faculty Coordinators */}
          <div>
            <h3 className="text-3xl font-black mb-8 text-center">Faculty Coordinators</h3>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {teamMembers.faculty.map((faculty, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-slate-900/50 to-purple-950/30 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-8"
                >
                  <div className="text-center">
                    <div className="w-20 h-20 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Users className="w-10 h-10 text-purple-400" />
                    </div>
                    <h4 className="text-2xl font-bold mb-1">{faculty.name}</h4>
                    <p className="text-purple-300 font-semibold mb-2">{faculty.role}</p>
                    <p className="text-gray-400 text-sm">{faculty.department}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Activities Section */}
      <section id="activities" className="py-20 sm:py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-950/50 to-transparent"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-purple-500/20 border border-purple-500/30 rounded-full backdrop-blur-sm mb-6">
              <span className="text-purple-300 font-semibold text-sm uppercase tracking-wider">Club Activities</span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Year-Round Learning
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From workshops to hackathons, we keep you engaged with diverse learning opportunities throughout the year.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {activities.map((activity, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-slate-900/50 to-purple-950/30 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-8 hover:border-purple-500/50 transition-all duration-300 hover:scale-105"
                style={{ animation: 'fadeInUp 0.6s ease-out forwards', animationDelay: `${index * 0.1}s`, opacity: 0 }}
              >
                <div className="flex items-start justify-between mb-4">
                  <Calendar className="w-8 h-8 text-purple-400" />
                  <span className="px-3 py-1 bg-purple-500/20 rounded-full text-xs font-semibold text-purple-300 uppercase">
                    {activity.frequency}
                  </span>
                </div>
                <h3 className="text-2xl font-bold mb-3">{activity.title}</h3>
                <p className="text-gray-400 leading-relaxed">{activity.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 sm:py-32 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-sm border border-purple-500/30 rounded-3xl p-12 sm:p-16 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10"></div>
            <div className="relative z-10">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight mb-6">
                <span className="bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
                  Ready to Build?
                </span>
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Join MADC today and start your journey toward becoming an exceptional mobile app developer. No experience required—just passion and curiosity.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <button className="group px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl font-bold text-lg uppercase tracking-wider hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105 flex items-center gap-2">
                  Join MADC
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl font-bold text-lg uppercase tracking-wider hover:bg-white/20 transition-all duration-300 hover:scale-105 flex items-center gap-2">
                  <Mail className="w-5 h-5" />
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-purple-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center transform rotate-6">
                  <Smartphone className="w-6 h-6 -rotate-6" />
                </div>
                <span className="font-black text-2xl bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">MADC</span>
              </div>
              <p className="text-gray-400">
                Building the future, one app at a time.
              </p>
            </div>
            
            <div>
              <h4 className="font-bold text-lg mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {['Home', 'About', 'Opportunities', 'Team', 'Activities'].map((link) => (
                  <li key={link}>
                    <button
                      onClick={() => scrollToSection(link.toLowerCase())}
                      className="text-gray-400 hover:text-purple-300 transition-colors"
                    >
                      {link}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold text-lg mb-4">Connect</h4>
              <div className="flex gap-3">
                <a href="#" className="w-10 h-10 bg-white/10 hover:bg-purple-500/30 rounded-lg flex items-center justify-center transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-white/10 hover:bg-purple-500/30 rounded-lg flex items-center justify-center transition-colors">
                  <Github className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-white/10 hover:bg-purple-500/30 rounded-lg flex items-center justify-center transition-colors">
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
          
          <div className="pt-8 border-t border-purple-500/20 text-center text-gray-400">
            <p>© 2025 Mobile Application Development Club. Built with passion by MADC Team.</p>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes gridMove {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(50px);
          }
        }
        
        @keyframes gradient {
          0%, 100% {
            background-size: 200% 200%;
            background-position: left center;
          }
          50% {
            background-size: 200% 200%;
            background-position: right center;
          }
        }
        
        .animate-gradient {
          animation: gradient 3s ease infinite;
        }
        
        @import url('https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&family=Outfit:wght@300;400;600;700;900&display=swap');
        
        * {
          font-family: 'Outfit', sans-serif;
        }
      `}</style>
    </div>
  );
}
