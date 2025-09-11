import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Award, Briefcase, GraduationCap, Code } from 'lucide-react';

const About: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const stats = [
    { icon: Briefcase, label: 'Experience', value: '5+ Months' },
    { icon: GraduationCap, label: 'Education', value: 'Master\'s Degree' },
    { icon: Award, label: 'Certifications', value: '2+ Cloud Certs' },
    { icon: Code, label: 'Projects', value: '10+ Completed' },
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-secondary-900">
      <div className="container-max section-padding">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 dark:text-white mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-secondary-600 dark:text-secondary-300 mb-6 leading-relaxed">
                I'm a passionate Cloud Computing professional with a Master's degree from Chandigarh University 
                and a Bachelor's in Computer Applications from Khalsa College. Currently working as a System 
                Administrator at Itechserv, I bring over 5 months of hands-on experience in cloud technologies, 
                system administration, and web development.
              </p>
              
              <p className="text-secondary-600 dark:text-secondary-300 mb-6 leading-relaxed">
                My expertise spans across major cloud platforms including AWS and Microsoft Azure, where I've 
                earned certifications in Azure Fundamentals (AZ-900) and Amazon CloudQuest Cloud Practitioner. 
                I specialize in building scalable cloud solutions, managing enterprise systems, and developing 
                modern web applications.
              </p>

              <p className="text-secondary-600 dark:text-secondary-300 leading-relaxed">
                When I'm not working with cloud infrastructure, you'll find me creating custom WordPress websites 
                for clients, exploring new technologies, or contributing to open-source projects. I'm always eager 
                to take on new challenges and collaborate on innovative solutions.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                className="card p-6 text-center"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-400 rounded-lg mb-4">
                  <stat.icon size={24} />
                </div>
                <div className="text-2xl font-bold text-secondary-900 dark:text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-secondary-600 dark:text-secondary-400 text-sm">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;