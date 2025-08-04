import React from "react";
import { motion } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Experience", href: "#work" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#tech" },
    { name: "Education", href: "#testimonials" },
    { name: "Contact", href: "#contact" },
  ];

  const socialLinks = [
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/sanjay-anbazhagan",
      icon: "💼",
    },
    {
      name: "GitHub",
      url: "https://github.com/sanjayanbu12",
      icon: "💻",
    },
    {
      name: "Email",
      url: "mailto:sanjayanbazhagan12@gmail.com",
      icon: "📧",
    },
    {
      name: "Phone",
      url: "tel:+919003386363",
      icon: "📞",
    },
  ];

  const skills = [
    "React.js", "Node.js", "MongoDB", "Express.js", "JavaScript",
    "TypeScript", "Python", "LangChain", "Socket.io", "Redux Toolkit"
  ];

  return (
    <footer className="bg-black-100 border-t border-tertiary">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          
          {/* About Section */}
          <motion.div 
            className="lg:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-white font-bold text-[24px] mb-4">
              Sanjay <span className="text-[#915EFF]">Anbazhagan</span>
            </h3>
            <p className="text-secondary text-[16px] leading-[24px] mb-4 max-w-md">
              Full-stack MERN & Generative AI Developer passionate about building 
              scalable web applications and AI-powered solutions. Transforming ideas 
              into reality with modern technologies and clean code.
            </p>
            <div className="flex flex-wrap gap-2">
              {skills.slice(0, 6).map((skill, index) => (
                <span 
                  key={skill}
                  className="bg-tertiary text-secondary px-3 py-1 rounded-full text-[12px] hover:text-white transition-colors duration-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-white font-semibold text-[18px] mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-secondary hover:text-white transition-colors duration-300 text-[14px] hover:translate-x-1 transform transition-transform inline-block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact & Social */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-white font-semibold text-[18px] mb-4">Connect</h4>
            <div className="space-y-3 mb-6">
              <p className="text-secondary text-[14px]">
                📍 Coimbatore, Tamil Nadu
              </p>
              <p className="text-secondary text-[14px]">
                📧 sanjayanbazhagan12@gmail.com
              </p>
              <p className="text-secondary text-[14px]">
                📞 +91 90033 86363
              </p>
            </div>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target={social.name === "LinkedIn" || social.name === "GitHub" ? "_blank" : "_self"}
                  rel="noopener noreferrer"
                  className="bg-tertiary p-3 rounded-full hover:bg-[#915EFF] transition-all duration-300 group"
                  title={social.name}
                >
                  <span className="text-lg group-hover:scale-110 transform transition-transform inline-block">
                    {social.icon}
                  </span>
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-tertiary my-8"></div>

        {/* Bottom Section */}
        <motion.div 
          className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="text-secondary text-[14px] text-center md:text-left">
            <p>© {currentYear} Sanjay Anbazhagan. All rights reserved.</p>
            {/* <p className="mt-1">
              Built with ❤️ using React.js, Three.js & Framer Motion
            </p> */}
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="text-secondary text-[12px] text-center">
              <p>Available for</p>
              <p className="text-[#915EFF] font-semibold">Freelance Projects</p>
            </div>
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
          </div>
        </motion.div>

        {/* Back to Top Button */}
        <motion.button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-8 right-8 bg-[#915EFF] p-3 rounded-full shadow-lg hover:bg-purple-600 transition-all duration-300 z-50 group"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <svg 
            className="w-6 h-6 text-white group-hover:animate-bounce" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </motion.button>
      </div>
    </footer>
  );
};

export default Footer;