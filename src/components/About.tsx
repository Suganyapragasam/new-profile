import React from 'react';
import { Code, Lightbulb, Users, Trophy } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: Code,
      title: 'Flutter & Dart',
      description: 'Developing high-quality mobile & PWA applications using Flutter framework and Dart.'
    },
    {
      icon: Lightbulb,
      title: 'UI/UX Design',
      description: 'Designing intuitive and user-friendly interfaces for mobile apps.'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'Working with teams and clients to deliver projects efficiently.'
    },
    {
      icon: Trophy,
      title: 'Integration & Testing',
      description: 'Integrating APIs, Firebase, and performing thorough testing for stable apps.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50 w-full">
      <div className="px-8 lg:px-16">
        
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-emerald-500 mx-auto rounded-full"></div>
        </div>

        {/* Main content full width */}
        {/* <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center w-full"> */}
          {/* Right column - Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div>
              <h3 className="text-2xl font-bold text-gray-900">
                Mobile App Developer | Flutter Specialist
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                I am a Mobile App Developer specializing in Flutter and Dart, creating sleek, responsive, 
                and user-friendly applications. My focus is on clean architecture, efficient state management, 
                and delivering high-quality solutions.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Experienced in UI/UX design, custom widget development, Firebase integration, REST API integration, 
                testing, debugging, and performance optimization. Committed to continuous learning and delivering 
                apps that provide real value to users.
              </p>
              </div>
            </div>

            {/* Stats */}
            <div>
            <div className="grid grid-cols-3 gap-6 py-8 border-t border-gray-200">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">5+</div>
                <div className="text-sm text-gray-500">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">10+</div>
                <div className="text-sm text-gray-500">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">3+</div>
                <div className="text-sm text-gray-500">Companies Worked</div>
              </div>
            </div>
            </div>
          {/* </div> */}
        </div>

        {/* Highlights */}
        <div className="mt-20 w-full">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {highlights.map((highlight, index) => (
              <div
                key={index}
                className="group bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-emerald-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <highlight.icon size={24} className="text-white" />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2">
                  {highlight.title}
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  {highlight.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
