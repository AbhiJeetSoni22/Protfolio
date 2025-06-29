'use client';

import React from 'react';
import Projects from '../components/Projects';
import { motion } from 'framer-motion';

const ProjectPage = () => {
  // Falling stars setup
  const stars = Array.from({ length: 30 }).map((_, i) => ({
    id: i,
    size: Math.random() * 3 + 1,
    left: Math.random() * 100,
    delay: Math.random() * 5,
    duration: Math.random() * 10 + 5,
    opacity: Math.random() * 0.5 + 0.3,
  }));

  return (
    <div className="relative min-h-screen bg-gray-900 overflow-hidden  px-4">
      {/* Falling Stars */}
      <div className="absolute inset-0 overflow-hidden">
        {stars.map((star) => (
          <motion.div
            key={star.id}
            className="absolute rounded-full bg-white"
            initial={{ top: '-10px', y: 0, opacity: 0 }}
            animate={{
              y: '100vh',
              opacity: [0, star.opacity, 0],
              transition: {
                delay: star.delay,
                duration: star.duration,
                repeat: Infinity,
                repeatDelay: Math.random() * 10,
              },
            }}
            style={{
              width: `${star.size}px`,
              height: `${star.size}px`,
              left: `${star.left}%`,
              boxShadow: `0 0 ${star.size * 2}px ${star.size}px rgba(255, 255, 255, 0.2)`,
            }}
          />
        ))}
      </div>

      {/* Twinkling Stars */}
      <div className="absolute inset-0 z-0">
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
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      {/* Page Content */}
      <div className="relative z-10 max-w-7xl mx-auto">
        <Projects />
      </div>
    </div>
  );
};

export default ProjectPage;
