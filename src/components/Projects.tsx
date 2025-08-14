import React from 'react';
import { Eye } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Hiwelinked',
      description: 'A social-based Alumni Engagement app featuring a job portal, event management, and chat functionalities. Designed and developed UI components, seamlessly integrating with backend servers.',
      technologies: ['Flutter', 'Dart', 'Firebase', 'Hive'],
      liveUrl: 'https://play.google.com/store/apps/details?id=com.bhumaha.hiwelinked',
    },
    {
      title: 'Siddhi Super App (TATA AIA)',
      description: 'A distributor servicing application catering to TATA AIA agents, partners, and employees. Developed intuitive front-end UI elements and logic, facilitating seamless backend integration.',
      technologies: ['Flutter', 'Dart', 'Firebase', 'Hive'],
      liveUrl: 'https://play.google.com/store/apps/details?id=com.tataaialife',
    },
    {
      title: 'NamChat',
      description: 'A Business Engagement platform aimed at optimizing enterprise communication. Spearheaded the design and development of UI components, ensuring smooth backend integration.',
      technologies: ['Flutter', 'Dart', 'Firebase', 'Hive'],
      liveUrl: '#',
    }
  ];

  const ProjectCard = ({ project }: { project: any }) => (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 p-6">
      <h3 className="text-xl font-bold text-gray-900 mb-2 hover:text-blue-600 transition-colors duration-300">
        {project.title}
      </h3>
      <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>

      <div className="flex flex-wrap gap-2 mb-4">
        {project.technologies.map((tech: string, index: number) => (
          <span
            key={index}
            className="px-3 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full"
          >
            {tech}
          </span>
        ))}
      </div>

      {project.liveUrl !== '#' && (
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium transition-colors duration-300"
        >
          <Eye size={16} />
          View on Play Store
        </a>
      )}
    </div>
  );

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-emerald-500 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Some of the projects I worked on as a Flutter Developer
          </p>
        </div>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
