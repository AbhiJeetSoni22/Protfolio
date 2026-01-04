"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
// import { usePathname } from 'next/navigation';
import { FiBriefcase, FiCode } from "react-icons/fi";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";


const AboutMe = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    return () => setIsMounted(false);
  }, []);

  const stars = Array.from({ length: 30 }).map((_, i) => ({
    id: i,
    size: Math.random() * 3 + 1,
    left: Math.random() * 100,
    delay: Math.random() * 5,
    duration: Math.random() * 10 + 5,
    opacity: Math.random() * 0.5 + 0.3,
  }));

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut" as const,
      },
    },
  };

  const stats = [
    {
      value: "7+",
      label: "months Experience",
      icon: <FiBriefcase className="w-6 h-6" />,
    },
    {
      value: "40+",
      label: "Projects Completed",
      icon: <FiCode className="w-6 h-6" />,
    },
  ];

  
  const skills = [
    { name: "Frontend (Next.js, Tailwind)", level: 85 },
    { name: "Backend (Node.js, MongoDB)", level: 85 },
    { name: "CI/CD & Deployment", level: 75 },
    { name: "Git & Collaboration", level: 85 },
  ];

  if (!isMounted) return null;
  return (
    <section className="relative min-h-screen bg-gray-900 overflow-hidden py-10">
      {/* Falling Stars */}
      <div className="absolute inset-0 overflow-hidden">
        {stars.map((star) => (
          <motion.div
            key={star.id}
            className="absolute rounded-full bg-white"
            initial={{ top: "-10px", y: 0, opacity: 0 }}
            animate={{
              y: "100vh",
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
              boxShadow: `0 0 ${star.size * 2}px ${
                star.size
              }px rgba(255, 255, 255, 0.2)`,
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

      {/* Main Content */}
      <div className="relative z-10 container max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyan-500">
              Me
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Here&apos;s my story and what makes me passionate about development
          </p>
        </motion.div>

        {/* Grid Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Profile Section */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="space-y-8"
          >
            <motion.div variants={itemVariants}>
              <div className="relative w-full aspect-square max-w-md mx-auto rounded-2xl overflow-hidden border-4 border-white/10 shadow-xl bg-gray-100 dark:bg-gray-800">
                {imageError ? (
                  <div className="w-full h-full flex items-center justify-center text-gray-500 dark:text-gray-400">
                    Profile Image
                  </div>
                ) : (
                  <Image
                    src="/profile_image.jpg"
                    alt="Abhijeet Soni"
                    fill
                    className="object-cover"
                    onError={() => setImageError(true)}
                    priority
                  />
                )}
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="bg-gray-800/70 rounded-xl shadow-lg p-8 border border-gray-700"
            >
              <h3 className="text-2xl font-bold text-white mb-6">
                Personal Info
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-300">
                <div>
                  <p>Name:</p>
                  <p className="font-medium text-white">Abhijeet Soni</p>
                </div>
                <div>
                  <p>Email:</p>
                  <p className="font-medium text-white">
                    abhisonijeet123@gmail.com
                  </p>
                </div>
                <div>
                  <p>Location:</p>
                  <p className="font-medium text-white">Sagar, MP, India</p>
                </div>
                <div>
                  <p>Education:</p>
                  <p className="font-medium text-white">
                    BCA - Dr. Harisingh Gour University
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Details */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="space-y-8"
          >
            {/* Who I Am */}
            <motion.div
              variants={itemVariants}
              className="bg-gray-800/70 rounded-xl shadow-lg p-8 border border-gray-700"
            >
              <h3 className="text-2xl font-bold text-white mb-6">Who I Am</h3>

              <p className="text-gray-300 mb-4">
                I&apos;m Abhijeet Soni, a passionate Full-Stack (MERN) Developer
                who enjoys building modern, scalable web applications with a
                strong focus on performance and clean user experience.
              </p>

              <p className="text-gray-300 mb-4">
                My journey into development started with curiosity and evolved
                through hackathons, internships, and hands-on projects, where I
                worked on real-world problems using React, Next.js, Node.js,
                MongoDB, and cloud technologies.
              </p>

              <p className="text-gray-300">
                I love learning new tools, improving my backend skills, and
                experimenting with DevOps practices like CI/CD and cloud
                deployment to deliver reliable, production-ready applications.
              </p>
            </motion.div>
            <motion.div
              variants={itemVariants}
              className="bg-gray-800/70 rounded-xl shadow-lg p-6 border border-gray-700"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-cyan-500/20 text-cyan-400">
                  <FiBriefcase className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-white">Experience</h3>
              </div>

              <p className="text-sm text-gray-400 mb-3">
                Backend Developer Intern · Shambho.ai <br />
                <span className="italic">Aug 2025 – Dec 2025</span>
              </p>

              <p className="text-gray-300 text-sm leading-relaxed mb-3">
                Worked on backend development for{" "}
                <span className="text-cyan-400">Agentic AI systems</span>,
                building flow-based agents and ReAct agent patterns using
                Node.js and TypeScript.
              </p>

              <p className="text-gray-300 text-sm leading-relaxed">
                Gained hands-on experience with{" "}
                <span className="text-cyan-400">RAG / RAGA</span>, integrating
                vector search, context retrieval, and LLM-based reasoning into
                production-ready workflows.
              </p>
            </motion.div>
            {/* Stats */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-2 gap-4"
            >
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -5 }}
                  className="bg-gray-800/70 p-6 rounded-xl text-center border border-gray-700 text-white shadow-lg"
                >
                  <div className="flex justify-center mb-2 text-cyan-400">
                    {stat.icon}
                  </div>
                  <h4 className="text-2xl font-bold">{stat.value}</h4>
                  <p className="text-gray-300">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>

            {/* Skills */}
            <motion.div
              variants={itemVariants}
              className="bg-gray-800/70 p-8 rounded-xl border border-gray-700 shadow-lg"
            >
              <h3 className="text-2xl font-bold text-white mb-6">My Skills</h3>
              <div className="space-y-4">
                {skills.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between text-sm text-gray-300">
                      <span>{skill.name}</span>
                      <span>{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700 h-2 rounded-full">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                        className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Socials */}
            <motion.div
              variants={itemVariants}
              className="bg-gray-800/70 p-6 rounded-xl border border-gray-700 shadow-lg"
            >
              <div className="flex justify-center gap-4">
                {[
                  {
                    href: "https://github.com/AbhiJeetSoni22",
                    icon: <FaGithub className="w-6 h-6" />,
                  },
                  {
                    href: "https://www.linkedin.com/in/abhijeet-soni04/",
                    icon: <FaLinkedin className="w-6 h-6" />,
                  },
                  {
                    href: "https://x.com/Abhijee97748833",
                    icon: <FaTwitter className="w-6 h-6" />,
                  },
                ].map((link, i) => (
                  <motion.a
                    key={i}
                    whileHover={{ y: -5 }}
                    whileTap={{ scale: 0.9 }}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-gray-700 hover:bg-cyan-500/20 text-white rounded-full transition-all"
                  >
                    {link.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
