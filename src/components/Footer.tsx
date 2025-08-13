import React from 'react';
import { Heart, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center space-y-8">
          {/* Back to top button */}
          <button
            onClick={scrollToTop}
            className="group p-3 bg-blue-600 hover:bg-blue-700 rounded-full transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-xl"
            aria-label="Back to top"
          >
            <ArrowUp size={24} className="group-hover:-translate-y-1 transition-transform duration-300" />
          </button>

          {/* Logo/Name */}
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-2">Your Name</h3>
            <p className="text-gray-400">Software Developer & Creative Problem Solver</p>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-wrap justify-center gap-8">
            {['About', 'Skills', 'Experience', 'Projects', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => {
                  const element = document.getElementById(item.toLowerCase());
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="text-gray-300 hover:text-white transition-colors duration-300 font-medium"
              >
                {item}
              </button>
            ))}
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-gray-700"></div>

          {/* Copyright */}
          <div className="text-center text-gray-400">
            <p className="flex items-center justify-center gap-2">
              © {new Date().getFullYear()} Your Name. Made with 
              <Heart size={16} className="text-red-500 animate-pulse" />
              and lots of coffee.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;