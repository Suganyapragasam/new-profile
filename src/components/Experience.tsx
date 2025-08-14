import React from 'react';
import { Calendar, MapPin, ExternalLink } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'Software Engineer – Flutter Developer',
      company: 'Bhumaha Solution Private Ltd, Chennai, India',
      location: 'Chennai, India',
      period: 'July 2022 - March 2024',
      description: 'Designed, developed, tested, and deployed mobile and PWA applications using Flutter and Dart, contributing to successful project delivery across Android, iOS, and PWA platforms.',
      achievements: [
        'Developed applications with a single codebase for multiple platforms',
        'Implemented REST APIs and integrated backend services using Firebase and Hive',
        'Collaborated with clients to gather requirements and deliver technical solutions',
        'Applied clean architecture, state management (Provider, BLoC), and testing frameworks (Unit, Widget/Integration tests)',
        'Optimized app performance and ensured smooth UI/UX across platforms'
      ],
      technologies: ['Flutter', 'Dart', 'Firebase', 'Hive', 'REST APIs', 'CI/CD']
    },
    {
      title: 'Account Manager',
      company: 'MAST Contracting, Ras al Khaimah, UAE',
      location: 'Ras al Khaimah, UAE',
      period: 'July 2012 – Jan 2017',
      description: 'Managed job vacancies and administrative tasks, including paperwork and website maintenance.',
      achievements: [
        'Handled administrative operations efficiently',
        'Managed documentation and streamlined processes',
        'Maintained website updates and job postings'
      ],
      technologies: ['Microsoft Office', 'Website CMS', 'Project Management']
    },
    {
      title: 'Software Engineer',
      company: 'HCL Technologies, Chennai, India',
      location: 'Chennai, India',
      period: 'Dec 2009 - Aug 2011',
      description: 'Designed interfaces, developed iOS applications, and liaised with clients to deliver software solutions.',
      achievements: [
        'Developed iOS applications and UI components',
        'Coordinated with clients for requirement gathering',
        'Implemented features according to client specifications'
      ],
      technologies: ['iOS Development', 'Objective-C', 'UI Design', 'Client Coordination']
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Work Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-emerald-500 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            My professional journey and the experiences that shaped my career
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 to-emerald-500"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-gradient-to-r from-blue-600 to-emerald-500 rounded-full border-4 border-white shadow-lg z-10"></div>

                {/* Content card */}
                <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                  <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-1">
                          {exp.title}
                        </h3>
                        <h4 className="text-lg font-semibold text-blue-600 mb-2">
                          {exp.company}
                        </h4>
                      </div>
                      <ExternalLink size={20} className="text-gray-400 hover:text-blue-600 transition-colors cursor-pointer" />
                    </div>

                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                      <div className="flex items-center gap-1">
                        <Calendar size={16} />
                        {exp.period}
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin size={16} />
                        {exp.location}
                      </div>
                    </div>

                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {exp.description}
                    </p>

                    <div className="space-y-2 mb-6">
                      {exp.achievements.map((achievement, achIndex) => (
                        <div key={achIndex} className="flex items-start gap-2">
                          <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                          <p className="text-gray-600 text-sm">{achievement}</p>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
