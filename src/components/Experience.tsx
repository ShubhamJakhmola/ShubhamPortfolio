import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Briefcase, Calendar, MapPin, ExternalLink } from 'lucide-react';

const Experience: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const experiences = [
    {
      title: 'System Administrator',
      company: 'Itechserv',
      type: 'Full-time',
      location: 'Remote',
      period: '2024 - Present',
      description: [
        'Managing and maintaining Windows and Linux server infrastructure',
        'Implementing cloud solutions using AWS and Microsoft Azure',
        'Configuring and managing Ruckus wireless controllers and access points',
        'Setting up VLANs, switches, and network security protocols',
        'Providing technical support and troubleshooting complex system issues',
        'Developing automation scripts using PowerShell and Bash'
      ],
      technologies: ['AWS', 'Azure', 'Windows Server', 'Linux', 'Ruckus', 'PowerShell', 'Bash'],
      current: true
    },
    {
      title: 'System Administrator Intern',
      company: 'Itechserv',
      type: 'Internship',
      location: 'Remote',
      period: '2023 - 2024 (5 months)',
      description: [
        'Gained hands-on experience in system administration and cloud technologies',
        'Assisted in server maintenance and network configuration tasks',
        'Learned enterprise-level security practices and implementation',
        'Supported senior administrators in troubleshooting and problem resolution',
        'Participated in cloud migration projects and infrastructure planning'
      ],
      technologies: ['Windows Server', 'Linux', 'Networking', 'Cloud Computing', 'Cybersecurity'],
      current: false
    },
    {
      title: 'Cloud & DevOps Virtual Intern',
      company: 'Cognizant (via Forage)',
      type: 'Virtual Internship',
      location: 'Online',
      period: '2023',
      description: [
        'Completed virtual internship program focused on cloud technologies',
        'Learned DevOps practices and cloud architecture principles',
        'Worked on real-world scenarios and case studies',
        'Gained exposure to enterprise cloud solutions and best practices'
      ],
      technologies: ['Cloud Computing', 'DevOps', 'AWS', 'Azure'],
      current: false
    },
    {
      title: 'Cloud Engineering Virtual Intern',
      company: 'Datacom (via Forage)',
      type: 'Virtual Internship',
      location: 'Online',
      period: '2023',
      description: [
        'Participated in cloud engineering simulation program',
        'Learned cloud infrastructure design and implementation',
        'Worked on cloud migration strategies and optimization',
        'Developed understanding of cloud security and compliance'
      ],
      technologies: ['Cloud Architecture', 'Infrastructure', 'Security', 'Migration'],
      current: false
    }
  ];

  return (
    <section id="experience" className="py-20 bg-white dark:bg-secondary-900">
      <div className="container-max section-padding">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 dark:text-white mb-4">
            Professional Experience
          </h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto mb-6"></div>
          <p className="text-lg text-secondary-600 dark:text-secondary-300 max-w-2xl mx-auto">
            My journey in cloud computing, system administration, and technology leadership.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-primary-200 dark:bg-primary-800"></div>

          {experiences.map((experience, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`relative flex items-center mb-12 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary-600 rounded-full border-4 border-white dark:border-secondary-900 z-10">
                {experience.current && (
                  <div className="absolute inset-0 bg-primary-600 rounded-full animate-ping"></div>
                )}
              </div>

              {/* Content */}
              <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'} ml-12 md:ml-0`}>
                <div className="card p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-secondary-900 dark:text-white mb-1">
                        {experience.title}
                      </h3>
                      <div className="flex items-center text-primary-600 dark:text-primary-400 font-medium mb-2">
                        <Briefcase size={16} className="mr-2" />
                        {experience.company}
                      </div>
                    </div>
                    {experience.current && (
                      <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-xs font-medium rounded-full">
                        Current
                      </span>
                    )}
                  </div>

                  <div className="flex flex-wrap gap-4 text-sm text-secondary-600 dark:text-secondary-400 mb-4">
                    <div className="flex items-center">
                      <Calendar size={14} className="mr-1" />
                      {experience.period}
                    </div>
                    <div className="flex items-center">
                      <MapPin size={14} className="mr-1" />
                      {experience.location}
                    </div>
                    <span className="px-2 py-1 bg-secondary-100 dark:bg-secondary-700 rounded text-xs">
                      {experience.type}
                    </span>
                  </div>

                  <ul className="space-y-2 mb-4">
                    {experience.description.map((item, i) => (
                      <li key={i} className="text-secondary-600 dark:text-secondary-300 text-sm flex items-start">
                        <span className="w-1.5 h-1.5 bg-primary-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        {item}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {experience.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-primary-50 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-xs rounded font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;