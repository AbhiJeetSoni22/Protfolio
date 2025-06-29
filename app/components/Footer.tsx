"use client";
import { motion,Variants } from "framer-motion";

import { FaGithub, FaLinkedin, FaTwitter, FaRegCopyright } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/AbhiJeetSoni22",
      icon: <FaGithub className="w-5 h-5" />,
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/abhijeet-soni04/",
      icon: <FaLinkedin className="w-5 h-5" />,
    },
    {
      name: "Twitter",
      url: "https://x.com/Abhijee97748833",
      icon: <FaTwitter className="w-5 h-5" />,
    },
    {
      name: "Email",
      url: "abhisonijeet123@gmail.com",
      icon: <MdEmail className="w-5 h-5" />,
    },
  ];

  const footerVariants:Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const itemVariants :Variants = {
    hidden: { opacity: 0, y: 10 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
      },
    }),
  };

  return (
    <motion.footer
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={footerVariants}
      className="border-t border-gray-200 dark:border-gray-800 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm"
    >
      <div className="container max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Social Links */}
          <motion.div className="flex space-x-6">
            {socialLinks.map((link, i) => (
              <motion.a
                key={link.name}
                custom={i}
                initial="hidden"
                animate="visible"
                variants={itemVariants}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3, scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-cyan-400 transition-colors"
                aria-label={link.name}
              >
                {link.icon}
              </motion.a>
            ))}
          </motion.div>

        
        </div>

        {/* Copyright */}
        <motion.div
          custom={socialLinks.length + 5}
          initial="hidden"
          animate="visible"
          variants={itemVariants}
          className="mt-8 text-center text-sm text-gray-500 dark:text-gray-400 flex items-center justify-center gap-1"
        >
          <FaRegCopyright className="inline" />
          <span>{currentYear} Abhijeet Soni. All rights reserved.</span>
        </motion.div>

        {/* Made with love */}
        <motion.div
          custom={socialLinks.length + 6}
          initial="hidden"
          animate="visible"
          variants={itemVariants}
          className="mt-2 text-center text-xs text-gray-400 dark:text-gray-500"
        >
          Crafted with <span className="text-red-500">♥</span> and Next.js
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;