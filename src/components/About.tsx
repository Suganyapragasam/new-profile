import React from 'react';
import { Code, Lightbulb, Users, Trophy } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: Code,
      title: 'Clean Code',
      description: 'Writing maintainable, scalable, and efficient code following best practices.'
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'Always exploring new technologies and creative solutions to complex problems.'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'Strong team player with excellent communication and leadership skills.'
    },
    {
      icon: Trophy,
      title: 'Excellence',
      description: 'Committed to delivering high-quality results that exceed expectations.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-emerald-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left column - Image */}
          <div className="relative">
            <div className="relative z-10">
              <img
                src="https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="About me"
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
            <div className="absolute -top-6 -right-6 w-full h-full bg-gradient-to-br from-blue-600 to-emerald-500 rounded-2xl -z-10"></div>
          </div>

          {/* Right column - Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900">
                Passionate Developer with a Vision
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                With over 5 years of experience in software development, I specialize in creating 
                robust, scalable applications that solve real-world problems. My journey began with 
                a curiosity for how things work, which evolved into a passion for building 
                innovative digital solutions.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                I believe in the power of clean code, thoughtful design, and continuous learning. 
                Whether working on complex backend systems or intuitive user interfaces, I strive 
                to deliver excellence in every project.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 py-8 border-t border-gray-200">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">50+</div>
                <div className="text-sm text-gray-500">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">5+</div>
                <div className="text-sm text-gray-500">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">20+</div>
                <div className="text-sm text-gray-500">Happy Clients</div>
              </div>
            </div>
          </div>
        </div>

        {/* Highlights */}
        <div className="mt-20">
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