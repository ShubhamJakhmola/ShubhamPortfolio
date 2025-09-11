import React from 'react';
import { Heart, Github, Linkedin, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Github,
      href: 'https://github.com/shubhamjakhmola',
      label: 'GitHub'
    },
    {
      icon: Linkedin,
      href: 'https://linkedin.com/in/shubhamjakhmola',
      label: 'LinkedIn'
    },
    {
      icon: Mail,
      href: 'mailto:shubham.jakhmola@email.com',
      label: 'Email'
    }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-secondary-900 dark:bg-secondary-950 text-white py-12">
      <div className="container-max section-padding">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold text-primary-400 mb-4">
              Shubham Jakhmola
            </h3>
            <p className="text-secondary-300 mb-4 leading-relaxed">
              Cloud Engineer, Web Developer, and System Administrator passionate about 
              building scalable solutions and driving digital transformation.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-secondary-800 hover:bg-primary-600 text-secondary-400 hover:text-white rounded-lg flex items-center justify-center transition-all duration-200 transform hover:scale-110"
                  aria-label={social.label}
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { href: '#about', label: 'About' },
                { href: '#skills', label: 'Skills' },
                { href: '#experience', label: 'Experience' },
                { href: '#projects', label: 'Projects' },
                { href: '#education', label: 'Education' },
                { href: '#contact', label: 'Contact' }
              ].map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => {
                      const element = document.querySelector(link.href);
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className="text-secondary-300 hover:text-primary-400 transition-colors duration-200"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Get In Touch</h4>
            <div className="space-y-3">
              <p className="text-secondary-300">
                <span className="font-medium">Email:</span><br />
                shubham.jakhmola@email.com
              </p>
              <p className="text-secondary-300">
                <span className="font-medium">Location:</span><br />
                India
              </p>
              <p className="text-secondary-300">
                <span className="font-medium">Status:</span><br />
                <span className="text-green-400">Available for opportunities</span>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-secondary-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center text-secondary-400 mb-4 md:mb-0">
              <span>Made with</span>
              <Heart size={16} className="mx-2 text-red-500" />
              <span>by Shubham Jakhmola</span>
            </div>
            
            <div className="flex items-center space-x-6 text-secondary-400 text-sm">
              <span>© {currentYear} All rights reserved</span>
              <button
                onClick={scrollToTop}
                className="hover:text-primary-400 transition-colors duration-200"
              >
                Back to top ↑
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;