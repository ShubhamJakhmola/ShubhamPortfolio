import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';

const Education: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const education = [
    {
      degree: 'Master of Computer Applications (MCA)',
      specialization: 'Cloud Computing',
      institution: 'Chandigarh University',
      location: 'Chandigarh, India',
      period: '2021 - 2023',
      grade: 'First Class',
      description: [
        'Specialized in cloud computing technologies and distributed systems',
        'Completed advanced coursework in AWS and Microsoft Azure platforms',
        'Developed expertise in system administration and network security',
        'Participated in industry projects and internship programs',
        'Thesis on "Cloud Infrastructure Optimization and Security"'
      ],
      achievements: [
        'Academic Excellence Award',
        'Best Project Award for Cloud Computing',
        'Industry Internship Completion Certificate'
      ]
    },
    {
      degree: 'Bachelor of Computer Applications (BCA)',
      specialization: 'Computer Science',
      institution: 'Khalsa College',
      location: 'India',
      period: '2018 - 2021',
      grade: 'First Class',
      description: [
        'Strong foundation in computer science fundamentals',
        'Coursework in programming languages, databases, and web technologies',
        'Developed skills in software development and system analysis',
        'Active participation in coding competitions and tech events',
        'Final year project on web application development'
      ],
      achievements: [
        'Consistent Academic Performance',
        'Programming Competition Winner',
        'Technical Society Member'
      ]
    }
  ];

  return (
    <section id="education" className="py-20 bg-white dark:bg-secondary-900">
      <div className="container-max section-padding">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 dark:text-white mb-4">
            Education
          </h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto mb-6"></div>
          <p className="text-lg text-secondary-600 dark:text-secondary-300 max-w-2xl mx-auto">
            My academic journey in computer science and cloud computing.
          </p>
        </motion.div>

        <div className="space-y-12">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="card p-8"
            >
              <div className="grid lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-secondary-900 dark:text-white mb-2">
                        {edu.degree}
                      </h3>
                      <div className="text-primary-600 dark:text-primary-400 font-semibold mb-2">
                        {edu.specialization}
                      </div>
                      <div className="flex items-center text-secondary-600 dark:text-secondary-400 mb-1">
                        <GraduationCap size={16} className="mr-2" />
                        {edu.institution}
                      </div>
                      <div className="flex items-center text-secondary-600 dark:text-secondary-400 mb-1">
                        <MapPin size={16} className="mr-2" />
                        {edu.location}
                      </div>
                      <div className="flex items-center text-secondary-600 dark:text-secondary-400">
                        <Calendar size={16} className="mr-2" />
                        {edu.period}
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-sm font-medium rounded-full">
                        {edu.grade}
                      </span>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-secondary-900 dark:text-white mb-3">
                      Key Highlights
                    </h4>
                    <ul className="space-y-2">
                      {edu.description.map((item, i) => (
                        <li key={i} className="text-secondary-600 dark:text-secondary-300 flex items-start">
                          <span className="w-1.5 h-1.5 bg-primary-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-secondary-900 dark:text-white mb-4 flex items-center">
                    <Award size={20} className="mr-2 text-primary-600" />
                    Achievements
                  </h4>
                  <div className="space-y-3">
                    {edu.achievements.map((achievement, i) => (
                      <div
                        key={i}
                        className="p-3 bg-primary-50 dark:bg-primary-900/20 rounded-lg border-l-4 border-primary-600"
                      >
                        <span className="text-secondary-700 dark:text-secondary-300 text-sm font-medium">
                          {achievement}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="card p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold text-secondary-900 dark:text-white mb-6">
              Continuous Learning
            </h3>
            <p className="text-secondary-600 dark:text-secondary-300 mb-6 leading-relaxed">
              Beyond formal education, I'm committed to continuous learning and staying updated with the latest 
              technologies. I regularly participate in online courses, webinars, and industry conferences to 
              enhance my skills and knowledge in cloud computing, system administration, and emerging technologies.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <span className="px-4 py-2 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-lg font-medium">
                AWS Training
              </span>
              <span className="px-4 py-2 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-lg font-medium">
                Microsoft Learn
              </span>
              <span className="px-4 py-2 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-lg font-medium">
                Coursera Courses
              </span>
              <span className="px-4 py-2 bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200 rounded-lg font-medium">
                Industry Webinars
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;