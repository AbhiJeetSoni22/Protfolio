"use client";

import { motion } from "framer-motion";
import { FiBriefcase } from "react-icons/fi";

const InternshipExperience = () => {
  return (
    <section className="relative py-20 bg-gray-900">
      <div className="container max-w-5xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Internship{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyan-500">
              Experience
            </span>
          </h2>
          <p className="text-gray-300 mt-4">
            Hands-on industry experience and real-world problem solving
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gray-800/70 rounded-xl shadow-lg p-8 border border-gray-700"
        >
          <div className="flex items-center gap-3 mb-4 text-cyan-400">
            <FiBriefcase className="w-6 h-6" />
            <h3 className="text-xl font-bold text-white">
              Backend Developer Intern – Shambho.ai
            </h3>
          </div>

          <p className="text-sm text-gray-400 mb-4">
            Aug 2025 – Dec 2025 · Project-Based Internship
          </p>

          <p className="text-gray-300 mb-4">
            I completed a project-based internship at <span className="text-cyan-400 font-medium">Shambho.ai</span>,
            where I worked on backend development for Agentic AI systems using
            Node.js and TypeScript.
          </p>

          <ul className="list-disc list-inside space-y-2 text-gray-300">
            <li>
              Implemented <span className="text-white font-medium">flow-based agent frameworks</span> for predictable decision-making
              and controlled multi-step interactions.
            </li>
            <li>
              Built backend logic for <span className="text-white font-medium">ReAct agents</span>, enabling dynamic reasoning
              and tool usage with large language models.
            </li>
            <li>
              Developed <span className="text-white font-medium">RAG / RAGA systems </span> integrating vector search,
              context retrieval, and LLM orchestration.
            </li>
            <li>
              Gained experience in writing clean, scalable backend code and
              working with production-level AI workflows.
            </li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default InternshipExperience;
