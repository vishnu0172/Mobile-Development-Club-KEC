import React, { useState, useEffect, useRef } from 'react';
import { 
  Menu, X, Code, Smartphone, Users, Calendar, ChevronRight, Zap, Target, Rocket, 
  Github, Linkedin, Mail, Award, Globe, Lightbulb, GraduationCap, Trophy, 
  MessageSquare, Monitor, Phone, MapPin, Twitter, Instagram, ArrowUp, CalendarDays,
  MessageCircle, Send, Bot, User, Sparkles, Code2, Layers, Cpu, Database,
  Cloud, Terminal, GitBranch, Boxes, Palette, Shield, BrainCircuit, Workflow,
  ExternalLink, Building2, BookOpen
} from 'lucide-react';

export default function MADCWebsite() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [chatMessages, setChatMessages] = useState([
    { type: 'bot', message: "Hi there! 👋 I'm MADC Bot from Kongu Engineering College. How can I help you today?\n\n• Club membership & joining\n• Activities & events\n• Learning resources\n• Team information\n• Contact details" }
  ]);
  const [userInput, setUserInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const chatEndRef = useRef(null);
  const [visibleSections, setVisibleSections] = useState({});

  // College Information
  const collegeInfo = {
    name: "Kongu Engineering College",
    tagline: "Transform Yourself",
    phone: "04294 - 220555",
    fax: "04294 - 220087",
    email: "Madcofficial2022@gmail.com",
    website: "www.kongu.ac.in",
    clubName: "Mobile Application Development Club"
  };

  // Intersection Observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('section[id]').forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      setShowScrollTop(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [chatMessages]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
      setIsMenuOpen(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Chatbot responses
  const getBotResponse = (input) => {
    const lowerInput = input.toLowerCase();
    
    if (lowerInput.includes('join') || lowerInput.includes('member') || lowerInput.includes('signup') || lowerInput.includes('register')) {
      return "🎉 Great choice! To join MADC at Kongu Engineering College:\n\n1. Contact our Secretary Ms.M.Madhanvarshini\n2. Fill the membership form\n3. Pay the annual membership fee\n\nBenefits:\n• Access to all workshops\n• Hackathon participation\n• Mentorship programs\n• Project collaboration\n\nEmail: Madcofficial2022@gmail.com";
    }
    
    if (lowerInput.includes('event') || lowerInput.includes('activity') || lowerInput.includes('workshop') || lowerInput.includes('hackathon')) {
      return "📅 MADC Activities:\n\n🔹 Flutter Workshop Series\n🔹 Mobile Dev Hackathon\n🔹 Industry Talk Sessions\n🔹 Android/iOS Bootcamps\n\nRegular Activities:\n• Weekly coding sessions\n• Monthly tech talks\n• Quarterly bootcamps\n• Annual hackathon\n\nContact our Event Coordinators for details!";
    }
    
    if (lowerInput.includes('learn') || lowerInput.includes('course') || lowerInput.includes('resource') || lowerInput.includes('tutorial')) {
      return "📚 Learning Resources at MADC:\n\n**Beginner Track:**\n• Android Basics (Kotlin)\n• iOS Fundamentals (Swift)\n• UI/UX Design Principles\n\n**Intermediate Track:**\n• Flutter Development\n• React Native\n• Backend Integration\n\n**Advanced Track:**\n• App Architecture\n• Performance Optimization\n• CI/CD for Mobile\n\nAll resources available for KEC students!";
    }
    
    if (lowerInput.includes('team') || lowerInput.includes('leader') || lowerInput.includes('coordinator') || lowerInput.includes('faculty') || lowerInput.includes('secretary')) {
      return "👥 MADC Leadership Team:\n\n**Chief Patron:**\nThiru.E.R.K.Krishnan, M.Com (Correspondent)\n\n**Patron:**\nDr.R.Parameshwaran, M.E., Ph.D. (Principal)\n\n**President:**\nDr.S.Anandamurugan, M.E., Ph.D. (HOD/IT)\n\n**Staff Coordinators:**\n• Mr.A.P.Ponselvakumar (SLG)\n• Mrs.P.Vanitha (IT)\n\n**Secretary:**\nMs.M.Madhanvarshini (IV-CSE)";
    }
    
    if (lowerInput.includes('contact') || lowerInput.includes('email') || lowerInput.includes('reach') || lowerInput.includes('phone')) {
      return "📞 Contact MADC:\n\n📧 Email: Madcofficial2022@gmail.com\n📱 Phone: 04294 - 220555\n📠 Fax: 04294 - 220087\n🌐 Website: www.kongu.ac.in\n\n📍 Location: Information Technology Department, Kongu Engineering College\n\nOffice Hours: Mon-Fri, 9 AM - 5 PM";
    }
    
    if (lowerInput.includes('android') || lowerInput.includes('kotlin') || lowerInput.includes('java')) {
      return "🤖 Android Development at MADC:\n\n**Languages:** Kotlin (primary), Java\n**Tools:** Android Studio, Gradle\n**Topics Covered:**\n• Material Design 3\n• Jetpack Compose\n• Room Database\n• Retrofit & APIs\n• MVVM Architecture\n\nContact our Joint Secretary Mr.S.Mikel (IV-IT) for Android workshops!";
    }
    
    if (lowerInput.includes('ios') || lowerInput.includes('swift') || lowerInput.includes('apple')) {
      return "🍎 iOS Development at MADC:\n\n**Language:** Swift\n**Tools:** Xcode, SwiftUI\n**Topics Covered:**\n• SwiftUI & UIKit\n• Core Data\n• CloudKit\n• App Store Guidelines\n• TestFlight Distribution\n\nJoin our iOS workshops to get started!";
    }
    
    if (lowerInput.includes('flutter') || lowerInput.includes('dart') || lowerInput.includes('cross-platform')) {
      return "🦋 Flutter Development at MADC:\n\n**Language:** Dart\n**Framework:** Flutter\n**Topics Covered:**\n• Widget-based UI\n• State Management\n• Firebase Integration\n• Platform Channels\n• App Publishing\n\nFlutter Workshop Series coming soon!";
    }
    
    if (lowerInput.includes('college') || lowerInput.includes('kec') || lowerInput.includes('kongu')) {
      return "🎓 Kongu Engineering College\n\n📍 Location: Perundurai, Erode, Tamil Nadu\n🌐 Website: www.kongu.ac.in\n📞 Phone: 04294 - 220555\n\n**Motto:** Transform Yourself\n\nKEC is one of the premier engineering institutions in Tamil Nadu, offering quality education and excellent infrastructure for student development.";
    }
    
    if (lowerInput.includes('hi') || lowerInput.includes('hello') || lowerInput.includes('hey')) {
      return "Hello! 👋 Welcome to MADC - Mobile Application Development Club at Kongu Engineering College!\n\nHow can I assist you today?\n• 📱 Club membership\n• 📅 Events & activities\n• 📚 Learning resources\n• 👥 Team information\n• 💬 Contact details";
    }
    
    if (lowerInput.includes('thank')) {
      return "You're welcome! 😊 Feel free to ask if you have more questions about MADC.\n\nHappy coding! 🚀\n\nContact: Madcofficial2022@gmail.com";
    }
    
    return "I'm not sure about that, but I'd love to help! You can ask me about:\n\n• 📱 Club membership & joining\n• 📅 Events, workshops & hackathons\n• 📚 Learning resources & tracks\n• 🤖 Android, iOS, Flutter development\n• 👥 Team & faculty information\n• 📞 Contact details\n• 🎓 About Kongu Engineering College\n\nOr type 'events' to see upcoming activities!";
  };

  const handleSendMessage = () => {
    if (!userInput.trim()) return;
    
    setChatMessages(prev => [...prev, { type: 'user', message: userInput }]);
    setUserInput('');
    setIsTyping(true);
    
    setTimeout(() => {
      const response = getBotResponse(userInput);
      setChatMessages(prev => [...prev, { type: 'bot', message: response }]);
      setIsTyping(false);
    }, 1000);
  };

  const whyMobileDev = [
    { title: "Massive Market", description: "Over 6.8 billion smartphone users worldwide, creating endless opportunities" },
    { title: "Career Growth", description: "High demand for skilled mobile developers across all industries" },
    { title: "Innovation Hub", description: "Mobile platforms enable rapid prototyping and deployment of ideas" },
    { title: "Entrepreneurship", description: "Launch your own startup or freelance as a mobile app developer" }
  ];

  const opportunities = [
    {
      icon: <Code2 className="w-8 h-8" />,
      title: "Skill Development",
      description: "Master Android (Kotlin, Java), iOS (Swift), and cross-platform frameworks like React Native and Flutter."
    },
    {
      icon: <Layers className="w-8 h-8" />,
      title: "Hands-on Workshops",
      description: "Participate in intensive workshops covering app architecture, UI/UX design, and backend integration."
    },
    {
      icon: <Trophy className="w-8 h-8" />,
      title: "Hackathons & Competitions",
      description: "Compete in national and international hackathons, showcase your skills, and win exciting prizes."
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Industry Exposure",
      description: "Connect with industry professionals, attend guest lectures, and gain insights into real-world app development."
    },
    {
      icon: <Workflow className="w-8 h-8" />,
      title: "Team Projects",
      description: "Collaborate on real-world projects, build your portfolio, and learn agile development methodologies."
    },
    {
      icon: <GraduationCap className="w-8 h-8" />,
      title: "Mentorship Programs",
      description: "Get guidance from experienced developers and alumni working in top tech companies."
    },
    {
      icon: <GitBranch className="w-8 h-8" />,
      title: "Open Source Contribution",
      description: "Contribute to open-source mobile projects and build a strong GitHub profile."
    },
    {
      icon: <BrainCircuit className="w-8 h-8" />,
      title: "Problem Solving",
      description: "Tackle real-world challenges, from ideation to deployment, and create impactful solutions."
    }
  ];

  const techStack = [
    { icon: <Smartphone className="w-6 h-6" />, name: "Android", color: "from-purple-400 to-green-600" },
    { icon: <Smartphone className="w-6 h-6" />, name: "iOS", color: "from-blue-400 to-blue-600" },
    { icon: <Layers className="w-6 h-6" />, name: "Flutter", color: "from-cyan-400 to-blue-500" },
    { icon: <Code2 className="w-6 h-6" />, name: "React Native", color: "from-blue-400 to-cyan-400" },
    { icon: <Database className="w-6 h-6" />, name: "Firebase", color: "from-yellow-400 to-orange-500" },
    { icon: <Cloud className="w-6 h-6" />, name: "Cloud", color: "from-purple-400 to-pink-500" }
  ];

  const activities = [
    {
      icon: <Terminal className="w-8 h-8" />,
      title: "Coding Bootcamps",
      description: "Intensive multi-day bootcamps covering mobile development from basics to advanced topics.",
      frequency: "Quarterly"
    },
    {
      icon: <Monitor className="w-8 h-8" />,
      title: "Tech Talks & Workshops",
      description: "Regular sessions on latest mobile technologies, frameworks, and best practices.",
      frequency: "Monthly"
    },
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: "Guest Lectures",
      description: "Industry experts and alumni share insights on mobile development careers and trends.",
      frequency: "Bi-monthly"
    },
    {
      icon: <Trophy className="w-8 h-8" />,
      title: "App Development Challenges",
      description: "Build apps solving real-world problems and compete for prizes and recognition.",
      frequency: "Semester"
    },
    {
      icon: <Cpu className="w-8 h-8" />,
      title: "Hackathons",
      description: "24-48 hour coding marathons to build innovative mobile solutions in teams.",
      frequency: "Bi-annual"
    },
    {
      icon: <Boxes className="w-8 h-8" />,
      title: "Project Showcases",
      description: "Present your mobile apps to the community and get valuable feedback.",
      frequency: "Semester"
    }
  ];

  const upcomingEvents = [
    {
      date: "Feb 15, 2026",
      title: "Flutter Workshop Series",
      description: "Learn to build cross-platform apps with Flutter",
      tag: "Workshop"
    },
    {
      date: "Mar 8-9, 2026",
      title: "Mobile Dev Hackathon 2026",
      description: "48-hour hackathon with exciting prizes",
      tag: "Hackathon"
    },
    {
      date: "Mar 22, 2026",
      title: "Industry Talk: Mobile AI",
      description: "Guest lecture on AI integration in mobile apps",
      tag: "Guest Lecture"
    }
  ];

  const flagshipEvents = [
    {
      emoji: "🚀",
      title: "MADC Annual Hackathon",
      description: "Our biggest hackathon of the year with industry sponsors, mentors, and amazing prizes",
      details: "March • 2-3 Days • 100+ Participants"
    },
    {
      emoji: "👋",
      title: "Mobile Dev Summit",
      description: "Full-day conference featuring industry leaders, workshops, and networking opportunities",
      details: "September • 1 Day • 300+ Attendees"
    }
  ];

  // Team Members from the document
  const staffCoordinators = [
    { name: "Mr.A.P.Ponselvakumar", designation: "Assistant Professor", department: "SLG" },
    { name: "Mrs.P.Vanitha", designation: "Assistant Professor", department: "IT" }
  ];

  const studentOfficeBearers = {
    secretary: { name: "Ms.M.Madhanvarshini", department: "IV - CSE" },
    jointSecretaries: [
      { name: "Mr.S.Mikel", department: "IV - IT" },
      { name: "Mr.N.Harish Kannan", department: "III - CSE" }
    ],
    additionalSecretaries: [
      { name: "Ms.Harshitha Kannan", department: "IV - CSE" },
      { name: "Mr.P.Yaswanth", department: "IV - IT" },
      { name: "Ms.C.Subaharini", department: "III - CSE" }
    ],
    treasurer: { name: "Mr.R.Narasekumar", department: "IV - IT" },
    jointTreasurer: { name: "Ms.E.Swathi", department: "III - AIDS" },
    additionalTreasurers: [
      { name: "Mr.G.Soorya", department: "III - CSD" },
      { name: "Mr.S. Mohaideen Abdul Kathar", department: "III - EIE" },
      { name: "Ms.K.Tanya", department: "III - AIDS" },
      { name: "Mr.B. Towfeek", department: "III - AIDS" }
    ]
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-900 text-white font-poppins overflow-x-hidden">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'bg-slate-950/95 backdrop-blur-lg shadow-lg shadow-purple-500/10' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            <div className="flex items-center space-x-3 group cursor-pointer" onClick={() => scrollToSection('home')}>
              {/* KEC Header */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-500/30 to-pink-500/30 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Smartphone className="w-6 h-6 text-purple-400" />
                </div>
                <div className="hidden sm:block">
                  <div className="font-bold text-lg sm:text-xl tracking-tight flex items-center gap-2">
                    <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">MADC</span>
                  </div>
                  <div className="text-[10px] text-gray-400 uppercase tracking-wider">Kongu Engineering College</div>
                </div>
                <div className="sm:hidden font-bold text-lg">
                  <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">MADC</span>
                </div>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              {['home', 'about', 'opportunities', 'activities', 'events', 'team'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium uppercase tracking-wider transition-all duration-300 ${
                    activeSection === item
                      ? 'bg-purple-500/20 text-purple-300'
                      : 'text-gray-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {item}
                </button>
              ))}
              <button className="ml-4 px-6 py-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg font-semibold text-sm uppercase tracking-wider hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105 hover:-translate-y-0.5">
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
        <div className={`md:hidden bg-slate-950/98 backdrop-blur-xl border-t border-purple-500/20 transition-all duration-300 ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
          <div className="px-4 py-4 space-y-2">
            {['home', 'about', 'opportunities', 'activities', 'events', 'team'].map((item, index) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="block w-full text-left px-4 py-3 rounded-lg text-sm font-medium uppercase tracking-wider text-gray-300 hover:text-white hover:bg-purple-500/20 transition-all"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {item}
              </button>
            ))}
            <button className="w-full px-4 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg font-semibold text-sm uppercase tracking-wider">
              Join Now
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 opacity-20" style={{
            backgroundImage: 'linear-gradient(rgba(139, 92, 246, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(139, 92, 246, 0.3) 1px, transparent 1px)',
            backgroundSize: '50px 50px',
            animation: 'gridMove 20s linear infinite'
          }}></div>
        </div>

        {/* Floating Shapes */}
        <div className="absolute top-20 left-5 sm:left-10 w-48 sm:w-72 h-48 sm:h-72 bg-purple-500/30 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-5 sm:right-10 w-64 sm:w-96 h-64 sm:h-96 bg-pink-500/30 rounded-full blur-3xl animate-float-delayed"></div>
        <div className="absolute top-1/2 left-1/4 w-32 sm:w-48 h-32 sm:h-48 bg-blue-500/20 rounded-full blur-3xl animate-pulse-slow hidden sm:block"></div>

        {/* Floating Icons - Hidden on small mobile */}
        <div className="absolute top-32 right-10 sm:right-20 animate-float-slow opacity-20 hidden sm:block">
          <Code2 className="w-12 sm:w-16 h-12 sm:h-16 text-purple-400" />
        </div>
        <div className="absolute bottom-32 left-10 sm:left-20 animate-float-delayed opacity-20 hidden sm:block">
          <Smartphone className="w-12 sm:w-16 h-12 sm:h-16 text-pink-400" />
        </div>
        <div className="absolute top-40 left-1/4 animate-float opacity-15 hidden md:block">
          <Layers className="w-12 h-12 text-cyan-400" />
        </div>
        <div className="absolute bottom-40 right-1/4 animate-float-slow opacity-15 hidden md:block">
          <Cpu className="w-14 h-14 text-blue-400" />
        </div>
        <div className="absolute top-1/3 right-1/3 animate-pulse-slow opacity-10 hidden lg:block">
          <Database className="w-10 h-10 text-purple-400" />
        </div>
        <div className="absolute bottom-1/3 left-1/3 animate-float-delayed opacity-15 hidden lg:block">
          <Terminal className="w-12 h-12 text-yellow-400" />
        </div>
        <div className="absolute top-1/4 left-10 animate-float opacity-10 hidden md:block">
          <GitBranch className="w-10 h-10 text-orange-400" />
        </div>
        <div className="absolute bottom-1/4 right-10 animate-float-slow opacity-15 hidden md:block">
          <Cloud className="w-14 h-14 text-indigo-400" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            {/* College Name */}
            <div className="flex flex-col items-center gap-2 sm:gap-4 mb-6 sm:mb-8 animate-fade-in-down">
              <div className="text-center px-2">
                <h2 className="text-xl xs:text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight leading-tight">
                  {collegeInfo.name.toUpperCase()}
                </h2>
                <p className="text-purple-300 italic text-base sm:text-lg mt-1">— {collegeInfo.tagline} —</p>
              </div>
            </div>

            <div className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-purple-500/20 border border-purple-500/30 rounded-full backdrop-blur-sm mb-4 animate-fade-in-down animation-delay-200">
              <span className="text-purple-300 font-medium text-xs sm:text-sm uppercase tracking-wider flex items-center gap-1.5 sm:gap-2">
                <Smartphone className="w-3 h-3 sm:w-4 sm:h-4" />
                <span className="hidden xs:inline">{collegeInfo.clubName}</span>
                <span className="xs:hidden">MADC</span>
                <Code2 className="w-3 h-3 sm:w-4 sm:h-4" />
              </span>
            </div>
            
            <h1 className="text-3xl xs:text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-none">
              <span className="block bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent animate-fade-in-up animation-delay-400">
                BUILD THE FUTURE
              </span>
              <span className="block mt-2 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent animate-fade-in-up animation-delay-600 animate-gradient-x">
                ONE APP AT A TIME
              </span>
            </h1>

            <p className="text-base sm:text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto font-light leading-relaxed animate-fade-in-up animation-delay-800 px-2">
              Empowering students to create innovative mobile solutions through collaboration, continuous learning, and hands-on development.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 pt-6 sm:pt-8 animate-fade-in-up animation-delay-1000 w-full px-4">
              <button onClick={() => scrollToSection('about')} className="group w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl font-semibold text-base sm:text-lg uppercase tracking-wider hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105 hover:-translate-y-1 flex items-center justify-center gap-2">
                Explore Club
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <a href={`https://${collegeInfo.website}`} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl font-semibold text-base sm:text-lg uppercase tracking-wider hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:-translate-y-1 flex items-center justify-center gap-2">
                Visit College
                <ExternalLink className="w-5 h-5" />
              </a>
            </div>

            {/* Contact Info Bar */}
            <div className="flex flex-wrap justify-center gap-3 sm:gap-6 pt-6 sm:pt-8 text-xs sm:text-sm text-gray-400 animate-fade-in-up animation-delay-1000 px-2">
              <div className="flex items-center gap-1.5 sm:gap-2">
                <Phone className="w-3 h-3 sm:w-4 sm:h-4 text-purple-400 flex-shrink-0" />
                <span className="truncate">Ph: {collegeInfo.phone}</span>
              </div>
              <div className="flex items-center gap-1.5 sm:gap-2">
                <Mail className="w-3 h-3 sm:w-4 sm:h-4 text-purple-400 flex-shrink-0" />
                <span className="truncate text-[10px] sm:text-sm">{collegeInfo.email}</span>
              </div>
              <div className="flex items-center gap-1.5 sm:gap-2">
                <Globe className="w-3 h-3 sm:w-4 sm:h-4 text-purple-400 flex-shrink-0" />
                <span className="truncate">{collegeInfo.website}</span>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 pt-10 sm:pt-16 max-w-4xl mx-auto px-2">
              {[
                { number: "500+", label: "Active Members" },
                { number: "50+", label: "Projects Built" },
                { number: "100+", label: "Workshops Held" },
                { number: "20+", label: "Hackathons Won" }
              ].map((stat, index) => (
                <div key={index} className="text-center animate-fade-in-up" style={{ animationDelay: `${1200 + index * 100}ms` }}>
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent animate-count-up">
                    {stat.number}
                  </div>
                  <div className="text-xs sm:text-sm text-gray-400 uppercase tracking-wider font-medium mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Tech Stack Pills */}
            <div className="flex flex-wrap justify-center gap-3 pt-8 animate-fade-in-up animation-delay-1000">
              {techStack.map((tech, index) => (
                <div
                  key={index}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r ${tech.color} bg-opacity-20 border border-white/10 backdrop-blur-sm hover:scale-110 transition-transform duration-300 cursor-default`}
                  style={{ animationDelay: `${1400 + index * 100}ms` }}
                >
                  {tech.icon}
                  <span className="text-sm font-medium">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-purple-400/50 flex justify-center pt-2">
            <div className="w-1.5 h-3 bg-purple-400 rounded-full animate-scroll-indicator"></div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className={`py-12 sm:py-20 md:py-32 relative transition-all duration-1000 ${visibleSections.about ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-16">
            <div className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-purple-500/20 border border-purple-500/30 rounded-full backdrop-blur-sm mb-4 sm:mb-6">
              <span className="text-purple-300 font-medium text-xs sm:text-sm uppercase tracking-wider">About MADC</span>
            </div>
            <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4 sm:mb-6 px-2">
              <span className="bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">Shaping Tomorrow's </span>
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">App Developers</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto px-2">
              The Mobile Application Development Club (MADC) at Kongu Engineering College is a student-driven community dedicated to fostering innovation and technical excellence in mobile app development.
            </p>
          </div>

          {/* Why Mobile App Development */}
          <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 backdrop-blur-sm border border-purple-500/20 rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-12 mb-10 sm:mb-16 hover:border-purple-500/40 transition-all duration-500">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-6 sm:mb-8 flex items-center justify-center gap-2 sm:gap-3">
              <Lightbulb className="w-6 h-6 sm:w-8 sm:h-8 text-yellow-400 animate-pulse" />
              <span>Why Mobile App Development?</span>
            </h3>
            <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
              {whyMobileDev.map((item, index) => (
                <div key={index} className="flex items-start gap-3 group hover:translate-x-2 transition-transform duration-300">
                  <div className="w-3 h-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mt-1.5 flex-shrink-0 group-hover:scale-125 transition-transform"></div>
                  <div>
                    <span className="font-semibold text-white">{item.title}:</span>{' '}
                    <span className="text-gray-300">{item.description}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mission & Vision */}
          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
            <div className="group bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-sm border border-purple-500/20 rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 hover:border-purple-500/40 transition-all duration-500 hover:shadow-xl hover:shadow-purple-500/10 hover:-translate-y-2">
              <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-lg sm:rounded-xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                <Target className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-purple-400" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Our Mission</h3>
              <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                Empower students of Kongu Engineering College with cutting-edge mobile development skills and foster a culture of innovation, collaboration, and continuous learning.
              </p>
            </div>
            <div className="group bg-gradient-to-br from-pink-500/10 to-purple-500/10 backdrop-blur-sm border border-pink-500/20 rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 hover:border-pink-500/40 transition-all duration-500 hover:shadow-xl hover:shadow-pink-500/10 hover:-translate-y-2">
              <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-br from-pink-500/20 to-purple-500/20 rounded-lg sm:rounded-xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 group-hover:-rotate-6 transition-all duration-300">
                <Rocket className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-pink-400" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Our Vision</h3>
              <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                Create a thriving ecosystem where KEC students build industry-ready applications and become future tech leaders in the mobile development space.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Opportunities Section */}
      <section id="opportunities" className={`py-12 sm:py-20 md:py-32 relative transition-all duration-1000 ${visibleSections.opportunities ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-950/50 to-transparent"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-16">
            <div className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-purple-500/20 border border-purple-500/30 rounded-full backdrop-blur-sm mb-4 sm:mb-6">
              <span className="text-purple-300 font-medium text-xs sm:text-sm uppercase tracking-wider">What We Offer</span>
            </div>
            <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4 sm:mb-6 px-2">
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Opportunities Await You
              </span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto px-2">
              Join MADC and unlock a world of possibilities in mobile app development. From learning to building, we've got you covered!
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {opportunities.map((opportunity, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-slate-900/50 to-purple-950/30 backdrop-blur-sm border border-purple-500/20 rounded-xl sm:rounded-2xl p-4 sm:p-6 hover:border-purple-500/50 transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/20 hover:-translate-y-2"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-lg sm:rounded-xl flex items-center justify-center mb-3 sm:mb-5 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                  <div className="text-purple-400 group-hover:text-pink-400 transition-colors duration-300 [&>svg]:w-5 [&>svg]:h-5 sm:[&>svg]:w-6 sm:[&>svg]:h-6 md:[&>svg]:w-8 md:[&>svg]:h-8">
                    {opportunity.icon}
                  </div>
                </div>
                <h3 className="text-base sm:text-lg font-semibold mb-2 sm:mb-3">{opportunity.title}</h3>
                <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">{opportunity.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-20 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-sm border border-purple-500/30 rounded-2xl sm:rounded-3xl p-6 sm:p-10 md:p-12 lg:p-16 relative overflow-hidden group hover:border-purple-500/50 transition-all duration-500">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 group-hover:opacity-75 transition-opacity"></div>
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-purple-500/30 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700"></div>
            <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-pink-500/30 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700"></div>
            
            <div className="relative z-10">
              <Sparkles className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-purple-400 mx-auto mb-4 sm:mb-6 animate-pulse" />
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tight mb-4 sm:mb-6">
                <span className="bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
                  Ready to Start Your Journey?
                </span>
              </h2>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 mb-6 sm:mb-8 max-w-2xl mx-auto">
                Whether you're a beginner or an experienced developer, MADC offers something for everyone. Join us and be part of the mobile revolution!
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
                <a href={`mailto:${collegeInfo.email}`} className="group w-full sm:w-auto px-5 sm:px-6 md:px-8 py-3 sm:py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl font-semibold text-sm sm:text-base md:text-lg uppercase tracking-wider hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105 hover:-translate-y-1 flex items-center justify-center gap-2">
                  Contact Us
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <button onClick={() => scrollToSection('team')} className="w-full sm:w-auto px-5 sm:px-6 md:px-8 py-3 sm:py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl font-semibold text-sm sm:text-base md:text-lg uppercase tracking-wider hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:-translate-y-1">
                  Meet the Team
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Activities Section - Before Team */}
      <section id="activities" className={`py-12 sm:py-20 md:py-32 relative transition-all duration-1000 ${visibleSections.activities ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-950/50 to-transparent"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-16">
            <div className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-purple-500/20 border border-purple-500/30 rounded-full backdrop-blur-sm mb-4 sm:mb-6">
              <span className="text-purple-300 font-medium text-xs sm:text-sm uppercase tracking-wider">Club Activities</span>
            </div>
            <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4 sm:mb-6 px-2">
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Activities & Programs
              </span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto px-2">
              Year-round activities designed to enhance your mobile development skills and connect you with the developer community
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {activities.map((activity, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-slate-900/50 to-purple-950/30 backdrop-blur-sm border border-purple-500/20 rounded-xl sm:rounded-2xl p-4 sm:p-6 hover:border-purple-500/50 transition-all duration-500 hover:scale-105 hover:-translate-y-2"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start justify-between mb-3 sm:mb-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-lg sm:rounded-xl flex items-center justify-center text-purple-400 group-hover:scale-110 group-hover:rotate-6 transition-all [&>svg]:w-5 [&>svg]:h-5 sm:[&>svg]:w-6 sm:[&>svg]:h-6">
                    {activity.icon}
                  </div>
                  <span className="px-2 sm:px-3 py-0.5 sm:py-1 bg-purple-500/20 rounded-full text-[10px] sm:text-xs font-medium text-purple-300 uppercase group-hover:bg-purple-500/30 transition-colors">
                    {activity.frequency}
                  </span>
                </div>
                <h3 className="text-base sm:text-lg font-semibold mb-1.5 sm:mb-2">{activity.title}</h3>
                <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">{activity.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events - Before Team Section */}
      <section id="events" className={`py-12 sm:py-20 relative transition-all duration-1000 ${visibleSections.events ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <div className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-purple-500/20 border border-purple-500/30 rounded-full backdrop-blur-sm mb-4 sm:mb-6">
              <span className="text-purple-300 font-medium text-xs sm:text-sm uppercase tracking-wider">What's Coming Up</span>
            </div>
            <div className="flex items-center justify-center gap-2 sm:gap-3 mb-3 sm:mb-4">
              <CalendarDays className="w-6 h-6 sm:w-8 sm:h-8 text-purple-400 animate-pulse" />
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">Upcoming Events</h2>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mb-10 sm:mb-16">
            {upcomingEvents.map((event, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-slate-900/50 to-purple-950/30 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-6 hover:border-purple-500/50 transition-all duration-500 hover:scale-105 hover:-translate-y-2"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-purple-400 font-semibold mb-2 flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  {event.date}
                </div>
                <h3 className="text-lg font-semibold mb-2">{event.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{event.description}</p>
                <span className="inline-block px-3 py-1 bg-purple-500/20 rounded-full text-xs font-medium text-purple-300 group-hover:bg-purple-500/30 transition-colors">
                  {event.tag}
                </span>
              </div>
            ))}
          </div>

          {/* Annual Flagship Events */}
          <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-sm border border-purple-500/30 rounded-3xl p-8 sm:p-12 hover:border-purple-500/50 transition-all duration-500">
            <div className="text-center mb-8">
              <Trophy className="w-12 h-12 mx-auto mb-4 text-yellow-400 animate-bounce-slow" />
              <h3 className="text-2xl sm:text-3xl font-bold mb-2">Annual Flagship Events</h3>
              <p className="text-gray-300">
                Don't miss our signature events that bring together mobile developers from across the region
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {flagshipEvents.map((event, index) => (
                <div
                  key={index}
                  className="group bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-purple-500/30 hover:bg-white/10 transition-all duration-300"
                >
                  <div className="flex items-start gap-3 mb-3">
                    <span className="text-3xl animate-bounce-slow" style={{ animationDelay: `${index * 200}ms` }}>{event.emoji}</span>
                    <h4 className="text-xl font-semibold">{event.title}</h4>
                  </div>
                  <p className="text-gray-300 mb-3">{event.description}</p>
                  <p className="text-sm text-purple-300 flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    {event.details}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className={`py-12 sm:py-20 md:py-32 relative transition-all duration-1000 ${visibleSections.team ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-16">
            <div className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-purple-500/20 border border-purple-500/30 rounded-full backdrop-blur-sm mb-4 sm:mb-6">
              <span className="text-purple-300 font-medium text-xs sm:text-sm uppercase tracking-wider">Our Team</span>
            </div>
            <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4 sm:mb-6 px-2">
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Meet Our Leaders
              </span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto px-2">
              Dedicated leaders driving innovation in mobile development at Kongu Engineering College
            </p>
          </div>

          {/* Staff Coordinators */}
          <div className="mb-20">
            <h3 className="text-2xl font-bold mb-8 text-center flex items-center justify-center gap-3">
              <BookOpen className="w-6 h-6 text-purple-400" />
              Staff Coordinators
            </h3>
            <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
              {staffCoordinators.map((staff, index) => (
                <div
                  key={index}
                  className="group bg-gradient-to-br from-slate-900/50 to-purple-950/30 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-8 hover:border-purple-500/40 transition-all duration-500 hover:shadow-xl hover:shadow-purple-500/10 hover:-translate-y-2"
                >
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                      <GraduationCap className="w-8 h-8 text-purple-400" />
                    </div>
                    <h4 className="text-lg font-semibold mb-1">{staff.name}</h4>
                    <p className="text-purple-300 font-medium text-sm mb-1">{staff.designation}</p>
                    <p className="text-gray-400 text-sm">{staff.department}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Student Office Bearers */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-8 text-center flex items-center justify-center gap-3">
              <Users className="w-6 h-6 text-purple-400" />
              Student Office Bearers
            </h3>

            {/* Secretary */}
            <div className="max-w-xl mx-auto mb-12">
              <div className="group bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-sm border border-purple-500/30 rounded-3xl p-8 sm:p-10 hover:border-purple-500/50 transition-all duration-500 hover:shadow-xl hover:shadow-purple-500/10">
                <div className="flex flex-col items-center gap-4">
                  <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-purple-500/30 to-pink-500/30 flex items-center justify-center flex-shrink-0 ring-4 ring-purple-500/50 group-hover:ring-purple-400 group-hover:scale-105 transition-all duration-300">
                    <User className="w-12 h-12 text-purple-300" />
                  </div>
                  <div className="text-center">
                    <div className="inline-block px-4 py-1.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-medium uppercase tracking-wider mb-3">
                      Secretary
                    </div>
                    <h3 className="text-2xl font-bold mb-1">{studentOfficeBearers.secretary.name}</h3>
                    <p className="text-purple-300">{studentOfficeBearers.secretary.department}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Joint Secretaries */}
            <div className="mb-10">
              <h4 className="text-lg font-semibold mb-4 text-center text-purple-300">Joint Secretaries</h4>
              <div className="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
                {studentOfficeBearers.jointSecretaries.map((member, index) => (
                  <div
                    key={index}
                    className="group bg-gradient-to-br from-slate-900/50 to-purple-950/30 backdrop-blur-sm border border-purple-500/20 rounded-xl p-5 hover:border-purple-500/40 transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center flex-shrink-0">
                        <User className="w-6 h-6 text-purple-400" />
                      </div>
                      <div>
                        <h5 className="font-semibold">{member.name}</h5>
                        <p className="text-sm text-purple-300">{member.department}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Additional Secretaries */}
            <div className="mb-10">
              <h4 className="text-lg font-semibold mb-4 text-center text-purple-300">Additional Secretaries</h4>
              <div className="grid sm:grid-cols-3 gap-4 max-w-4xl mx-auto">
                {studentOfficeBearers.additionalSecretaries.map((member, index) => (
                  <div
                    key={index}
                    className="group bg-gradient-to-br from-slate-900/50 to-purple-950/30 backdrop-blur-sm border border-purple-500/20 rounded-xl p-5 hover:border-purple-500/40 transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center flex-shrink-0">
                        <User className="w-5 h-5 text-purple-400" />
                      </div>
                      <div>
                        <h5 className="font-medium text-sm">{member.name}</h5>
                        <p className="text-xs text-purple-300">{member.department}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Treasurer */}
            <div className="max-w-xl mx-auto mb-10">
              <div className="group bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-6 hover:border-purple-500/50 transition-all duration-500 hover:shadow-xl hover:shadow-purple-500/10">
                <div className="flex flex-col items-center gap-3">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-purple-500/30 to-pink-500/30 flex items-center justify-center ring-2 ring-purple-500/50 group-hover:scale-105 transition-all duration-300">
                    <Award className="w-8 h-8 text-purple-400" />
                  </div>
                  <div className="text-center">
                    <div className="inline-block px-3 py-1 bg-purple-500/20 rounded-full text-xs font-medium text-purple-300 uppercase tracking-wider mb-2">
                      Treasurer
                    </div>
                    <h4 className="text-xl font-bold mb-1">{studentOfficeBearers.treasurer.name}</h4>
                    <p className="text-purple-300 text-sm">{studentOfficeBearers.treasurer.department}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Joint Treasurer */}
            <div className="mb-10">
              <h4 className="text-lg font-semibold mb-4 text-center text-purple-300">Joint Treasurer</h4>
              <div className="max-w-md mx-auto">
                <div className="group bg-gradient-to-br from-slate-900/50 to-purple-950/30 backdrop-blur-sm border border-purple-500/20 rounded-xl p-5 hover:border-purple-500/40 transition-all duration-300">
                  <div className="flex items-center justify-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center flex-shrink-0">
                      <User className="w-6 h-6 text-purple-400" />
                    </div>
                    <div>
                      <h5 className="font-semibold">{studentOfficeBearers.jointTreasurer.name}</h5>
                      <p className="text-sm text-purple-300">{studentOfficeBearers.jointTreasurer.department}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Treasurers */}
            <div className="mb-12">
              <h4 className="text-lg font-semibold mb-4 text-center text-purple-300">Additional Treasurers</h4>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
                {studentOfficeBearers.additionalTreasurers.map((member, index) => (
                  <div
                    key={index}
                    className="group bg-gradient-to-br from-slate-900/50 to-purple-950/30 backdrop-blur-sm border border-purple-500/20 rounded-xl p-4 hover:border-purple-500/40 transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center flex-shrink-0">
                        <User className="w-5 h-5 text-purple-400" />
                      </div>
                      <div>
                        <h5 className="font-medium text-sm">{member.name}</h5>
                        <p className="text-xs text-purple-300">{member.department}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Join CTA */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xl text-gray-300 mb-6">Want to participate in these amazing activities?</p>
          <a href={`mailto:${collegeInfo.email}`} className="group px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl font-semibold text-lg hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105 hover:-translate-y-1 inline-flex items-center gap-2">
            Join MADC Today
            <Rocket className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 sm:py-16 border-t border-purple-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 mb-8 sm:mb-12">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-500/30 to-pink-500/30 rounded-xl flex items-center justify-center">
                  <Smartphone className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                  <span className="font-bold text-lg bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent block">MADC</span>
                  <span className="text-xs text-gray-400">{collegeInfo.name}</span>
                </div>
              </div>
              <p className="text-gray-400 mb-4 text-sm">
                {collegeInfo.clubName} - Empowering students with mobile development skills and fostering innovation.
              </p>
              <p className="text-purple-300 italic text-sm">"{collegeInfo.tagline}"</p>
            </div>
            
            <div>
              <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
              <ul className="space-y-3">
                {['Home', 'About', 'Opportunities', 'Activities', 'Events', 'Team'].map((link) => (
                  <li key={link}>
                    <button
                      onClick={() => scrollToSection(link.toLowerCase())}
                      className="text-gray-400 hover:text-purple-300 transition-colors hover:translate-x-1 inline-block"
                    >
                      {link}
                    </button>
                  </li>
                ))}
                <li>
                  <a
                    href={`https://${collegeInfo.website}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-purple-300 transition-colors hover:translate-x-1 inline-flex items-center gap-1"
                  >
                    College Website
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-base sm:text-lg mb-3 sm:mb-4">Contact Us</h4>
              <ul className="space-y-2 sm:space-y-3 text-gray-400 text-sm">
                <li className="flex items-center gap-2 hover:text-purple-300 transition-colors">
                  <Mail className="w-4 h-4 text-purple-400 flex-shrink-0" />
                  <a href={`mailto:${collegeInfo.email}`} className="truncate text-xs sm:text-sm">{collegeInfo.email}</a>
                </li>
                <li className="flex items-center gap-2 hover:text-purple-300 transition-colors">
                  <Phone className="w-4 h-4 text-purple-400" />
                  {collegeInfo.phone}
                </li>
                <li className="flex items-center gap-2 hover:text-purple-300 transition-colors">
                  <Phone className="w-4 h-4 text-purple-400" />
                  Fax: {collegeInfo.fax}
                </li>
                <li className="flex items-center gap-2 hover:text-purple-300 transition-colors">
                  <Globe className="w-4 h-4 text-purple-400" />
                  <a href={`https://${collegeInfo.website}`} target="_blank" rel="noopener noreferrer">
                    {collegeInfo.website}
                  </a>
                </li>
                <li className="flex items-start gap-2 hover:text-purple-300 transition-colors">
                  <MapPin className="w-4 h-4 text-purple-400 mt-1" />
                  <span>IT Department, Kongu Engineering College, Perundurai, Erode</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-4">Join MADC</h4>
              <p className="text-gray-400 mb-4">
                Start your mobile development journey with us today!
              </p>
              <a href={`mailto:${collegeInfo.email}`} className="inline-block px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all hover:scale-105">
                Contact Us
              </a>
              <div className="flex gap-3 mt-4">
                {[
                  { icon: <Linkedin className="w-5 h-5" />, href: "#" },
                  { icon: <Instagram className="w-5 h-5" />, href: "#" },
                  { icon: <Github className="w-5 h-5" />, href: "#" }
                ].map((social, index) => (
                  <a key={index} href={social.href} className="w-10 h-10 bg-white/10 hover:bg-purple-500/30 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 hover:-translate-y-1">
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
          
          <div className="pt-8 border-t border-purple-500/20 text-center text-gray-500">
            <p>© 2026 Mobile Application Development Club, {collegeInfo.name}. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Chatbot */}
      <div className="fixed bottom-4 sm:bottom-6 right-4 sm:right-6 z-50 flex flex-col items-end gap-3 sm:gap-4">
        {/* Chat Window */}
        <div className={`w-[calc(100vw-2rem)] sm:w-80 md:w-96 max-w-[350px] sm:max-w-none bg-slate-900/95 backdrop-blur-xl border border-purple-500/30 rounded-2xl shadow-2xl shadow-purple-500/20 transition-all duration-500 ${isChatOpen ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-4 scale-95 pointer-events-none'}`}>
          {/* Chat Header */}
          <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-t-2xl p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <Bot className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-semibold">MADC Bot</h3>
                <p className="text-xs text-white/80 flex items-center gap-1">
                  <span className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></span>
                  KEC Assistant
                </p>
              </div>
            </div>
            <button onClick={() => setIsChatOpen(false)} className="p-1 hover:bg-white/20 rounded-lg transition-colors">
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Chat Messages */}
          <div className="h-80 overflow-y-auto p-4 space-y-4">
            {chatMessages.map((msg, index) => (
              <div key={index} className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] rounded-2xl px-4 py-3 ${
                  msg.type === 'user' 
                    ? 'bg-gradient-to-r from-purple-500 to-pink-500 rounded-br-md' 
                    : 'bg-white/10 rounded-bl-md'
                }`}>
                  <p className="text-sm whitespace-pre-line">{msg.message}</p>
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-white/10 rounded-2xl rounded-bl-md px-4 py-3">
                  <div className="flex gap-1">
                    <span className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></span>
                    <span className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></span>
                    <span className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></span>
                  </div>
                </div>
              </div>
            )}
            <div ref={chatEndRef} />
          </div>

          {/* Chat Input */}
          <div className="p-4 border-t border-purple-500/20">
            <div className="flex gap-2">
              <input
                type="text"
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder="Ask about MADC..."
                className="flex-1 bg-white/10 border border-purple-500/30 rounded-xl px-4 py-2 text-sm focus:outline-none focus:border-purple-500 transition-colors placeholder:text-gray-500"
              />
              <button
                onClick={handleSendMessage}
                className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center hover:shadow-lg hover:shadow-purple-500/50 transition-all hover:scale-105"
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Chat Toggle Button */}
        <button
          onClick={() => setIsChatOpen(!isChatOpen)}
          className={`w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full shadow-lg shadow-purple-500/50 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-xl hover:shadow-purple-500/50 ${isChatOpen ? 'rotate-0' : 'animate-bounce-slow'}`}
        >
          {isChatOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6" />}
        </button>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-4 sm:bottom-6 left-4 sm:left-6 w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full shadow-lg hover:shadow-purple-500/50 transition-all duration-300 flex items-center justify-center z-50 ${showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}
      >
        <ArrowUp className="w-4 h-4 sm:w-5 sm:h-5" />
      </button>
    </div>
  );
}
