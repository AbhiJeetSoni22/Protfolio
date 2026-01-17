"use client";
import { motion, Variants } from "framer-motion";
import { FiCode, FiDatabase, FiCpu, FiLayers } from "react-icons/fi";

const skills = {
  Frontend: [
    { name: "React", level: 85 },
    { name: "Next.js", level: 80 },
    { name: "TypeScript", level: 75 },
    { name: "Tailwind CSS", level: 90 },
  ],
  Backend: [
    { name: "Node.js", level: 85 },
    { name: "Express.js", level: 80 },
    { name: "Django Rest Framework", level: 70 }, 
    { name: "REST APIs", level: 85 },
    { name: "JWT Authentication", level: 75 },
    { name: "TypeScript", level: 75 },
  ],
  Database: [
    { name: "MongoDB", level: 85 },
    { name: "Mongoose", level: 80 },
    { name: "Firebase", level: 60 },
  ],
  "DevOps & Tools": [
    { name: "Git & GitHub", level: 85 },
    { name: "GitHub Actions (CI/CD)", level: 75 },
    { name: "Docker", level: 65 },
    { name: "AWS (S3, IAM)", level: 70 },
  ],
};

const Skills = () => {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const item: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const getIcon = (category: string) => {
    switch (category) {
      case "Frontend":
        return <FiCode className="w-6 h-6" />;
      case "Backend":
        return <FiCpu className="w-6 h-6" />;
      case "Database":
        return <FiDatabase className="w-6 h-6" />;
      default:
        return <FiLayers className="w-6 h-6" />;
    }
  };

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900/50">
      <div className="container max-w-7xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-bold mb-12 text-center text-gray-800 dark:text-white"
        >
          My{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyan-500">
            Skills
          </span>
        </motion.h2>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {Object.entries(skills).map(([category, skills]) => (
            <motion.div
              key={category}
              variants={item}
              whileHover={{ y: -5 }}
              className="bg-white dark:bg-gray-800/50 rounded-xl shadow-lg p-6 border border-gray-100 dark:border-gray-700 hover:shadow-xl dark:hover:shadow-gray-700/30 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-lg bg-primary/10 text-primary dark:bg-cyan-400/20 dark:text-cyan-400">
                  {getIcon(category)}
                </div>
                <h3 className="text-xl font-bold text-gray-800 dark:text-white">
                  {category}
                </h3>
              </div>

              <div className="space-y-4">
                {skills.map((skill) => (
                  <div key={skill.name} className="space-y-1">
                    <div className="flex justify-between">
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        {skill.name}
                      </span>
                      <span className="text-xs text-gray-500 dark:text-gray-400">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.3 }}
                        className="h-full rounded-full bg-gradient-to-r from-primary to-cyan-500"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
