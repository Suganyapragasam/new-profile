import React from 'react';
import { ChevronDown,  Github, Linkedin, Mail } from 'lucide-react';
import profilePic from '../assets/sugan_profile_pic.jpg';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900">
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      {/* Animated background particles */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="space-y-8 animate-fade-in">
          {/* Profile Image */}
          <div className="mx-auto w-32 h-32 rounded-full overflow-hidden border-4 border-white/20 backdrop-blur-sm shadow-2xl">
            <img
              src={profilePic}
              alt="Suganya Pragasam"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Main heading */}
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight">
              Hi, I'm{' '}
              <span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
                Suganya Pragasam
              </span>
            </h1>
            <p className="text-xl sm:text-2xl lg:text-3xl text-white/90 font-light">
              Mobile App Developer | Freelancer | flutter Developer
            </p>
          </div>

        
          {/* Description */}
<p className="text-lg sm:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
  Mobile App Developer specializing in Flutter and Dart, creating sleek, 
  responsive, and user-friendly applications. Focused on delivering 
  high-quality solutions with clean architecture and exceptional UI/UX.
</p>


          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
            <button 
              onClick={() => scrollToSection('projects')}
              className="group bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl shadow-lg"
            >
              View My Work
            </button>
            <a
  href="/resume.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className="group flex items-center gap-2 bg-white/10 backdrop-blur-md hover:bg-white/20 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 border border-white/20"
>
  View Resume
</a>

          </div>

          {/* Social Links */}
<div className="flex items-center justify-center gap-6 pt-8">
  {[
    { icon: Github, href: 'https://github.com/Suganyapragasam', label: 'GitHub' },
    { 
      icon: Linkedin, 
      href: 'https://www.linkedin.com/in/suganya-pragasam-53a771217', 
      label: 'LinkedIn' 
    },
    { icon: Mail, href: 'mailto:suganya.pragasam28@gmail.com', label: 'Email' }
  ].map(({ icon: Icon, href, label }) => (
    <a
      key={label}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group p-3 rounded-full bg-white/10 backdrop-blur-md hover:bg-white/20 transition-all duration-300 transform hover:scale-110 border border-white/20"
      aria-label={label}
    >
      <Icon size={24} className="text-white group-hover:text-blue-300 transition-colors duration-300" />
    </a>
  ))}
</div>

        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button 
            onClick={() => scrollToSection('about')}
            className="p-2 rounded-full bg-white/10 backdrop-blur-md hover:bg-white/20 transition-all duration-300"
          >
            <ChevronDown size={24} className="text-white" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;