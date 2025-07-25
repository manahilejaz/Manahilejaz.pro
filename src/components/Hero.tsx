"use client"

import { useEffect, useState } from 'react';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentRole, setCurrentRole] = useState(0);
  
  const roles = [
    "Software Engineer",
    "Cybersecurity Expert", 
    "Tech Innovator",
    "Security Architect"
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="min-h-screen relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      {/* Floating Code Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 text-blue-400/20 font-mono text-sm animate-float">
          {"{ secure: true }"}
        </div>
        <div className="absolute top-40 right-20 text-purple-400/20 font-mono text-sm animate-float delay-500">
          {"function() { ... }"}
        </div>
        <div className="absolute bottom-32 left-20 text-cyan-400/20 font-mono text-sm animate-float delay-1000">
          {"<security />"}
        </div>
        <div className="absolute bottom-20 right-10 text-pink-400/20 font-mono text-sm animate-float delay-1500">
          {"const innovation = true;"}
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[80vh]">
          {/* Left Content */}
          <div className={`text-center lg:text-left transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {/* Profile Image/Avatar */}
            <div className="relative mb-8 mx-auto lg:mx-0 w-fit">
              <div className="w-36 h-36 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full flex items-center justify-center relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 animate-spin-slow opacity-75"></div>
                <div className="relative z-10 w-32 h-32 bg-slate-900 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-3xl bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    ME
                  </span>
                </div>
              </div>
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center animate-bounce">
                <div className="w-3 h-3 bg-white rounded-full"></div>
              </div>
            </div>
            
            <div className="space-y-6">
              {/* Name and Dynamic Role */}
              <div>
                <h1 className="text-4xl lg:text-7xl font-bold text-white mb-4 tracking-tight">
                  <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                    Manahil
                  </span>
                  <br />
                  <span className="text-white">Ejaz</span>
                </h1>
                
                <div className="h-16 flex items-center">
                  <h2 className="text-2xl lg:text-4xl font-semibold text-transparent bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text transition-all duration-500">
                    {roles[currentRole]}
                  </h2>
                </div>
                
                <div className="flex items-center justify-center lg:justify-start gap-2 text-blue-300 mb-6">
                  <div className="flex items-center gap-1">
                    <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                    <span className="text-lg font-medium">7+ Years Experience</span>
                  </div>
                  <div className="w-1 h-1 bg-purple-400 rounded-full"></div>
                  <div className="flex items-center gap-1">
                    <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse delay-500"></div>
                    <span className="text-lg font-medium">Security Focused</span>
                  </div>
                </div>
              </div>
              
              <p className="text-xl text-gray-300 leading-relaxed max-w-2xl font-light">
                Transforming ideas into secure, scalable solutions. I bridge the gap between 
                <span className="text-blue-400 font-semibold"> innovative software development</span> and 
                <span className="text-purple-400 font-semibold"> bulletproof security</span>, 
                delivering enterprise-grade applications that drive business growth.
              </p>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mt-10">
                <button className="group relative bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/25 hover:scale-105">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <span className="relative flex items-center gap-2">
                    Explore My Work
                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </button>
                
                <button className="group border-2 border-purple-400/50 text-purple-300 px-8 py-4 rounded-xl font-semibold hover:bg-purple-400/10 hover:border-purple-400 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25">
                  <span className="flex items-center gap-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    Download Resume
                  </span>
                </button>
              </div>

              {/* Social Links */}
              <div className="flex justify-center lg:justify-start gap-6 mt-8">
                {['github', 'linkedin', 'twitter'].map((social) => (
                  <button
                    key={social}
                    className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-white/20 transition-all duration-300 hover:scale-110 hover:shadow-lg"
                  >
                    <div className="w-6 h-6 bg-gradient-to-r from-blue-400 to-purple-400 rounded-sm"></div>
                  </button>
                ))}
              </div>
            </div>
          </div>
          
          {/* Right Visual */}
          <div className={`hidden lg:block transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="relative">
              {/* Main Card */}
              <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-2xl hover:shadow-purple-500/20 transition-all duration-500 hover:scale-105">
                {/* Floating Icons */}
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center animate-bounce shadow-lg">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"></path>
                  </svg>
                </div>

                <div className="absolute -bottom-4 -left-4 w-14 h-14 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center animate-pulse shadow-lg">
                  <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z" clipRule="evenodd"></path>
                  </svg>
                </div>

                {/* Content */}
                <div className="text-center text-white space-y-6">
                  <div className="w-24 h-24 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-6 backdrop-blur-sm">
                    <svg className="w-12 h-12 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    Secure by Design
                  </h3>
                  
                  <p className="text-gray-300 leading-relaxed">
                    Every line of code crafted with security-first mindset, 
                    ensuring robust protection against modern threats.
                  </p>

                  {/* Skills Preview */}
                  <div className="flex flex-wrap gap-2 justify-center mt-6">
                    {['React', 'Node.js', 'Python', 'Security', 'DevOps'].map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-sm text-blue-300 border border-white/20"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Background Decorations */}
              <div className="absolute inset-0 -z-10">
                <div className="absolute top-8 right-8 w-32 h-32 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-2xl"></div>
                <div className="absolute bottom-8 left-8 w-24 h-24 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-2xl"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
      `}</style>
    </section>
  );
}