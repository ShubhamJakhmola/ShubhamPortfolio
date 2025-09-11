import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github, Globe, Server, Cloud, Code } from 'lucide-react';

const Projects: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projects = [
    {
      title: 'Cloud Infrastructure Automation',
      description: 'Automated cloud infrastructure deployment using Infrastructure as Code (IaC) principles. Built scalable, secure, and cost-effective cloud solutions on AWS and Azure.',
      image: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['AWS', 'Azure', 'Terraform', 'CloudFormation', 'Python'],
      category: 'Cloud Computing',
      icon: Cloud,
      links: {
        github: '#',
        demo: '#'
      }
    },
    {
      title: 'Enterprise Network Management System',
      description: 'Developed a comprehensive network management solution for enterprise environments. Features include VLAN configuration, access point management, and real-time monitoring.',
      image: 'https://images.pexels.com/photos/1181354/pexels-photo-1181354.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Python', 'Ruckus Controller', 'SNMP', 'React', 'Node.js'],
      category: 'System Administration',
      icon: Server,
      links: {
        github: '#',
        demo: '#'
      }
    },
    {
      title: 'WordPress Business Solutions',
      description: 'Custom WordPress websites for various clients including e-commerce stores, corporate websites, and portfolio sites. Focus on performance, SEO, and user experience.',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['WordPress', 'PHP', 'MySQL', 'JavaScript', 'CSS'],
      category: 'Web Development',
      icon: Globe,
      links: {
        github: '#',
        demo: '#'
      }
    },
    {
      title: 'Cloud Security Monitoring Dashboard',
      description: 'Real-time security monitoring dashboard for cloud environments. Provides insights into security threats, compliance status, and automated incident response.',
      image: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Python', 'AWS CloudWatch', 'React', 'D3.js', 'Docker'],
      category: 'Cybersecurity',
      icon: Server,
      links: {
        github: '#',
        demo: '#'
      }
    },
    {
      title: 'DevOps Pipeline Automation',
      description: 'Implemented CI/CD pipelines for automated testing, building, and deployment. Reduced deployment time by 70% and improved code quality through automated testing.',
      image: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Jenkins', 'Docker', 'Kubernetes', 'Git', 'Bash'],
      category: 'DevOps',
      icon: Code,
      links: {
        github: '#',
        demo: '#'
      }
    },
    {
      title: 'Modern Portfolio Website',
      description: 'Responsive portfolio website built with React and Tailwind CSS. Features dark mode, smooth animations, and optimized performance for all devices.',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
      category: 'Web Development',
      icon: Globe,
      links: {
        github: '#',
        demo: '#'
      }
    }
  ];

  return (
    <section id="projects" className="py-20 bg-secondary-50 dark:bg-secondary-800">
      <div className="container-max section-padding">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto mb-6"></div>
          <p className="text-lg text-secondary-600 dark:text-secondary-300 max-w-2xl mx-auto">
            A showcase of my work in cloud computing, system administration, and web development.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="project-card group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex space-x-4">
                    <a
                      href={project.links.github}
                      className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors duration-200"
                      aria-label="View source code"
                    >
                      <Github size={20} />
                    </a>
                    <a
                      href={project.links.demo}
                      className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors duration-200"
                      aria-label="View live demo"
                    >
                      <ExternalLink size={20} />
                    </a>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 text-sm rounded-full font-medium">
                    {project.category}
                  </span>
                  <project.icon size={20} className="text-primary-600 dark:text-primary-400" />
                </div>

                <h3 className="text-xl font-semibold text-secondary-900 dark:text-white mb-3">
                  {project.title}
                </h3>

                <p className="text-secondary-600 dark:text-secondary-300 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-secondary-100 dark:bg-secondary-700 text-secondary-700 dark:text-secondary-300 text-xs rounded font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/shubhamjakhmola"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center gap-2"
          >
            <Github size={20} />
            View More on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;