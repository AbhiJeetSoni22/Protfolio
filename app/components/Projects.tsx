"use client";
import { projects } from '@/contents/project';
import Image from 'next/image';
import Link from 'next/link';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import { motion, Variants } from 'framer-motion';
import { useState, useEffect } from 'react';

interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubLink: string;
  demoLink: string;
}

const Projects = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});

  useEffect(() => {
    setIsMounted(true);
    return () => setIsMounted(false);
  }, []);

  const handleImageError = (src: string) => {
    setImageErrors(prev => ({ ...prev, [src]: true }));
  };

  const container: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const item: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  if (!isMounted) {
    return (
      <section className='py-10 container max-w-7xl mx-auto px-4'>
        <div className='text-4xl md:text-5xl font-bold mb-12 text-center text-gray-800 dark:text-white'>
          Loading Projects...
        </div>
      </section>
    );
  }

  return (
    <section className='py-15 container max-w-7xl mx-auto px-4'>
      <motion.h2 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className='text-4xl md:text-5xl font-bold mb-12 text-center text-gray-500 dark:text-white'
      >
        Featured <span className='text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyan-500'>Projects</span>
      </motion.h2>

      <motion.div 
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'
      >
        {projects.map((project: Project) => (
          <motion.article 
            key={project.title}
            variants={item}
            whileHover={{ y: -5 }}
            className='group bg-white dark:bg-gray-800/50 rounded-xl shadow-lg hover:shadow-xl dark:hover:shadow-gray-700/30 transition-all duration-300 overflow-hidden border border-gray-100 dark:border-gray-700'
          >
            <div className='relative aspect-video overflow-hidden bg-gray-100 dark:bg-gray-700'>
              {imageErrors[project.image] ? (
                <div className='w-full h-full flex items-center justify-center text-gray-500 dark:text-gray-400'>
                  Project Image
                </div>
              ) : (
                <Image 
                  src={project.image} 
                  alt={project.title} 
                  fill 
                  className='object-cover transition-transform duration-500 group-hover:scale-105'
                  sizes='(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw'
                  onError={() => handleImageError(project.image)}
                  priority={projects.indexOf(project) < 3} // Prioritize first 3 images
                />
              )}
              <div className='absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
            </div>

            <div className='p-6'>
              <h3 className='text-xl font-bold mb-2 text-gray-800 dark:text-white'>{project.title}</h3>
              <p className='text-gray-600 dark:text-gray-300 mb-4'>{project.description}</p>
              
              <div className='flex flex-wrap gap-2 mb-6'>
                {project.technologies.map((tech, index) => (
                  <motion.span 
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    className='px-3 py-1 bg-primary/10 text-primary dark:bg-cyan-400/20 dark:text-cyan-400 rounded-full text-xs font-medium'
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>

              <div className='flex gap-4'>
                <motion.div whileHover={{ x: 5 }} whileTap={{ scale: 0.95 }}>
                  <Link 
                    href={project.githubLink} 
                    target='_blank'
                    rel="noopener noreferrer"
                    className='flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-cyan-400 transition-colors'
                  >
                    <FaGithub className='w-5 h-5'/>
                    <span className='font-medium'>Code</span>
                  </Link>
                </motion.div>
                <motion.div whileHover={{ x: 5 }} whileTap={{ scale: 0.95 }}>
                  <Link 
                    href={project.demoLink} 
                    target='_blank'
                    rel="noopener noreferrer"
                    className='flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-cyan-400 transition-colors'
                  >
                    <FaExternalLinkAlt className='w-5 h-5'/>
                    <span className='font-medium'>Live Demo</span>
                  </Link>
                </motion.div>
              </div>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
};

export default Projects;