'use client'
import { motion } from "framer-motion";
import Image from 'next/image';
import Link from 'next/link';
import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa';

const Hero = () => {
  // Generate falling stars
  const stars = Array.from({ length: 30 }).map((_, i) => ({
    id: i,
    size: Math.random() * 3 + 1,
    left: Math.random() * 100,
    delay: Math.random() * 5,
    duration: Math.random() * 10 + 5,
    opacity: Math.random() * 0.5 + 0.3
  }));

  return (
    <div className="relative flex items-center justify-center md:min-h-[92vh] bg-gray-900 overflow-hidden">
      {/* Animated falling stars background */}
      <div className="absolute inset-0 overflow-hidden">
        {stars.map((star) => (
          <motion.div
            key={star.id}
            className="absolute rounded-full bg-white"
            initial={{
              top: '-10px',
              y: 0,
              opacity: 0
            }}
            animate={{
              y: '100vh',
              opacity: [0, star.opacity, 0],
              transition: {
                delay: star.delay,
                duration: star.duration,
                repeat: Infinity,
                repeatDelay: Math.random() * 10
              }
            }}
            style={{
              width: `${star.size}px`,
              height: `${star.size}px`,
              left: `${star.left}%`,
              boxShadow: `0 0 ${star.size * 2}px ${star.size}px rgba(255, 255, 255, 0.2)`
            }}
          />
        ))}
      </div>

      {/* Twinkling stars */}
      <div className="absolute inset-0">
        {Array.from({ length: 100 }).map((_, i) => (
          <div 
            key={i}
            className="absolute rounded-full bg-white animate-pulse"
            style={{
              width: `${Math.random() * 2 + 1}px`,
              height: `${Math.random() * 2 + 1}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.8 + 0.2,
              animationDuration: `${Math.random() * 5 + 3}s`,
              animationDelay: `${Math.random() * 5}s`
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-4xl px-4 py-8 md:py-12">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="flex flex-col items-center text-center"
        >
          {/* Profile Image */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="mb-8 relative group"
          >
            <Image 
              src="/profile_image.jpg" 
              alt="profile image" 
              width={160} 
              height={160} 
              className="rounded-full w-40 h-40 object-cover ring-4 ring-cyan-500/30 group-hover:ring-cyan-400/70 transition-all duration-500 shadow-xl"
            />
            <div className="absolute inset-0 rounded-full border-4 border-transparent group-hover:border-cyan-400/30 group-hover:animate-ping opacity-0 group-hover:opacity-100 transition-all duration-1000 pointer-events-none" />
          </motion.div>

          {/* Title */}
          <motion.h1 
            className="text-4xl md:text-6xl font-bold mb-4 md:mb-6 text-white"
            initial={{ y: -20 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Hi, I&apos;m <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Abhijeet Soni</span>
          </motion.h1>

          {/* Description */}
          <motion.p 
            className="text-xl md:text-2xl mb-6 md:mb-8 text-gray-300 font-medium max-w-2xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 1 }}
          >
            Full-stack web developer with expertise in NextJs, React, Node.js, MongoDB, and clean UI design.
          </motion.p>

          {/* Social Links */}
          <motion.div 
            className="flex justify-center space-x-6 mb-7 md:mb-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            <Link 
              href="https://github.com/AbhiJeetSoni22/" 
              className="text-3xl text-gray-400 hover:text-cyan-400 transition-all duration-300 hover:-translate-y-1"
            >
              <FaGithub />
            </Link>
            <Link 
              href="https://www.linkedin.com/in/abhijeet-soni04/" 
              className="text-3xl text-gray-400 hover:text-cyan-400 transition-all duration-300 hover:-translate-y-1"
            >
              <FaLinkedin />
            </Link>
            <Link 
              href="https://x.com/Abhijee97748833" 
              className="text-3xl text-gray-400 hover:text-cyan-400 transition-all duration-300 hover:-translate-y-1"
            >
              <FaTwitter />
            </Link>
          </motion.div>

          {/* Buttons */}
          <motion.div 
            className="flex flex-col md:flex-row gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            <Link 
              href="/projects" 
              className="px-8 py-3 rounded-lg bg-gradient-to-r from-cyan-600 to-blue-700 text-white font-medium hover:shadow-lg hover:shadow-cyan-500/30 transition-all duration-300 hover:-translate-y-1 hover:brightness-110"
            >
              View Projects
            </Link>
            <Link 
              href="/about" 
              className="px-8 py-3 rounded-lg bg-gray-800/70 text-white font-medium backdrop-blur-sm border border-gray-700 hover:border-cyan-400/50 hover:bg-gray-700/50 transition-all duration-300 hover:-translate-y-1"
            >
             About Me
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;