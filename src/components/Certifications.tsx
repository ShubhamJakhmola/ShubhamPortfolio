import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Award, ExternalLink, Calendar, CheckCircle } from 'lucide-react';

const Certifications: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const certifications = [
    {
      title: 'Microsoft Azure Fundamentals',
      code: 'AZ-900',
      issuer: 'Microsoft',
      date: '2023',
      status: 'Active',
      description: 'Foundational knowledge of cloud services and how those services are provided with Microsoft Azure.',
      skills: ['Azure Services', 'Cloud Concepts', 'Security', 'Pricing', 'Support'],
      logo: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=200',
      color: 'from-blue-500 to-blue-600',
      verifyLink: '#'
    },
    {
      title: 'AWS Cloud Practitioner',
      code: 'CloudQuest',
      issuer: 'Amazon Web Services',
      date: '2023',
      status: 'Active',
      description: 'Comprehensive understanding of AWS Cloud concepts, services, security, architecture, pricing, and support.',
      skills: ['AWS Services', 'Cloud Architecture', 'Security', 'Cost Management', 'Well-Architected Framework'],
      logo: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=200',
      color: 'from-orange-500 to-orange-600',
      verifyLink: '#'
    }
  ];

  const upcomingCertifications = [
    {
      title: 'AWS Solutions Architect Associate',
      code: 'SAA-C03',
      issuer: 'Amazon Web Services',
      targetDate: '2024 Q2',
      description: 'Advanced AWS certification focusing on designing distributed systems and architectures on AWS.'
    },
    {
      title: 'Microsoft Azure Administrator',
      code: 'AZ-104',
      issuer: 'Microsoft',
      targetDate: '2024 Q3',
      description: 'Intermediate-level certification for Azure administrators managing cloud services.'
    }
  ];

  return (
    <section id="certifications" className="py-20 bg-secondary-50 dark:bg-secondary-800">
      <div className="container-max section-padding">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 dark:text-white mb-4">
            Certifications
          </h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto mb-6"></div>
          <p className="text-lg text-secondary-600 dark:text-secondary-300 max-w-2xl mx-auto">
            Professional certifications that validate my expertise in cloud technologies and system administration.
          </p>
        </motion.div>

        {/* Active Certifications */}
        <div className="mb-16">
          <motion.h3
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-2xl font-semibold text-secondary-900 dark:text-white mb-8 flex items-center"
          >
            <CheckCircle size={24} className="mr-3 text-green-600" />
            Active Certifications
          </motion.h3>

          <div className="grid md:grid-cols-2 gap-8">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.code}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                className="card p-6 relative overflow-hidden"
              >
                {/* Background gradient */}
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${cert.color} opacity-10 rounded-full transform translate-x-16 -translate-y-16`}></div>
                
                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center">
                      <div className={`w-12 h-12 bg-gradient-to-br ${cert.color} rounded-lg flex items-center justify-center text-white font-bold text-lg mr-4`}>
                        {cert.issuer === 'Microsoft' ? 'MS' : 'AWS'}
                      </div>
                      <div>
                        <h4 className="text-xl font-semibold text-secondary-900 dark:text-white">
                          {cert.title}
                        </h4>
                        <p className="text-primary-600 dark:text-primary-400 font-medium">
                          {cert.code}
                        </p>
                      </div>
                    </div>
                    <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-sm font-medium rounded-full">
                      {cert.status}
                    </span>
                  </div>

                  <div className="flex items-center text-secondary-600 dark:text-secondary-400 mb-4">
                    <Calendar size={16} className="mr-2" />
                    <span className="mr-4">Earned: {cert.date}</span>
                    <span className="text-secondary-500">•</span>
                    <span className="ml-4">{cert.issuer}</span>
                  </div>

                  <p className="text-secondary-600 dark:text-secondary-300 mb-4 leading-relaxed">
                    {cert.description}
                  </p>

                  <div className="mb-6">
                    <h5 className="text-sm font-semibold text-secondary-900 dark:text-white mb-2">
                      Key Skills Covered:
                    </h5>
                    <div className="flex flex-wrap gap-2">
                      {cert.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-2 py-1 bg-primary-50 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-xs rounded font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <a
                    href={cert.verifyLink}
                    className="inline-flex items-center text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-medium text-sm transition-colors duration-200"
                  >
                    <ExternalLink size={16} className="mr-2" />
                    Verify Certification
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Upcoming Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h3 className="text-2xl font-semibold text-secondary-900 dark:text-white mb-8 flex items-center">
            <Award size={24} className="mr-3 text-primary-600" />
            Upcoming Certifications
          </h3>

          <div className="grid md:grid-cols-2 gap-6">
            {upcomingCertifications.map((cert, index) => (
              <motion.div
                key={cert.code}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                className="card p-6 border-2 border-dashed border-primary-200 dark:border-primary-800"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h4 className="text-lg font-semibold text-secondary-900 dark:text-white">
                      {cert.title}
                    </h4>
                    <p className="text-primary-600 dark:text-primary-400 font-medium">
                      {cert.code}
                    </p>
                  </div>
                  <span className="px-3 py-1 bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 text-sm font-medium rounded-full">
                    In Progress
                  </span>
                </div>

                <div className="flex items-center text-secondary-600 dark:text-secondary-400 mb-4">
                  <Calendar size={16} className="mr-2" />
                  <span className="mr-4">Target: {cert.targetDate}</span>
                  <span className="text-secondary-500">•</span>
                  <span className="ml-4">{cert.issuer}</span>
                </div>

                <p className="text-secondary-600 dark:text-secondary-300 text-sm">
                  {cert.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Certification Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16"
        >
          <div className="card p-8 text-center">
            <h3 className="text-2xl font-semibold text-secondary-900 dark:text-white mb-6">
              Certification Journey
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2">
                  {certifications.length}
                </div>
                <div className="text-secondary-600 dark:text-secondary-400">
                  Active Certifications
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2">
                  {upcomingCertifications.length}
                </div>
                <div className="text-secondary-600 dark:text-secondary-400">
                  In Progress
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2">
                  100%
                </div>
                <div className="text-secondary-600 dark:text-secondary-400">
                  Pass Rate
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;