import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Cloud, 
  Code, 
  Server, 
  Shield, 
  Database, 
  Globe, 
  Terminal,
  GitBranch,
  Smartphone,
  Settings
} from 'lucide-react';

const Skills: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skillCategories = [
    {
      title: 'Cloud Platforms',
      icon: Cloud,
      skills: ['AWS', 'Microsoft Azure', 'Cloud Architecture', 'DevOps'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Web Development',
      icon: Code,
      skills: ['HTML/CSS', 'JavaScript', 'React', 'WordPress'],
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Programming',
      icon: Terminal,
      skills: ['Python', 'Bash', 'PowerShell', 'Git'],
      color: 'from-purple-500 to-violet-500'
    },
    {
      title: 'System Administration',
      icon: Server,
      skills: ['Windows Server', 'Linux', 'Networking', 'VLANs'],
      color: 'from-orange-500 to-red-500'
    },
    {
      title: 'Security & Tools',
      icon: Shield,
      skills: ['Cybersecurity', 'Ruckus Controller', 'WLAN', 'Access Points'],
      color: 'from-indigo-500 to-blue-500'
    },
    {
      title: 'Development Tools',
      icon: Settings,
      skills: ['VS Code', 'GitHub', 'Project Management', 'Problem Solving'],
      color: 'from-pink-500 to-rose-500'
    }
  ];

  return (
    <section id="skills" className="py-20 bg-secondary-50 dark:bg-secondary-800">
      <div className="container-max section-padding">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 dark:text-white mb-4">
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto mb-6"></div>
          <p className="text-lg text-secondary-600 dark:text-secondary-300 max-w-2xl mx-auto">
            A comprehensive toolkit of modern technologies and methodologies for building 
            scalable solutions and managing complex systems.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="skill-card"
            >
              <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${category.color} text-white rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <category.icon size={32} />
              </div>
              
              <h3 className="text-xl font-semibold text-secondary-900 dark:text-white mb-4">
                {category.title}
              </h3>
              
              <div className="flex flex-wrap gap-2 justify-center">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 text-sm rounded-full font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="card p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold text-secondary-900 dark:text-white mb-6">
              Certifications & Achievements
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-center justify-center p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                <div className="text-center">
                  <div className="w-12 h-12 bg-blue-600 text-white rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Award size={24} />
                  </div>
                  <h4 className="font-semibold text-secondary-900 dark:text-white">Microsoft Azure Fundamentals</h4>
                  <p className="text-sm text-secondary-600 dark:text-secondary-400">AZ-900 Certified</p>
                </div>
              </div>
              <div className="flex items-center justify-center p-4 bg-orange-50 dark:bg-orange-900/20 rounded-lg">
                <div className="text-center">
                  <div className="w-12 h-12 bg-orange-600 text-white rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Award size={24} />
                  </div>
                  <h4 className="font-semibold text-secondary-900 dark:text-white">AWS Cloud Practitioner</h4>
                  <p className="text-sm text-secondary-600 dark:text-secondary-400">Amazon CloudQuest</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;