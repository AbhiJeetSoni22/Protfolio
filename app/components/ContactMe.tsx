"use client";
import { motion, Variants } from "framer-motion";
import { FiMail, FiMapPin, FiClock } from "react-icons/fi";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";
import { useState, useEffect } from "react";
interface Formdata{
  name:string;
  email:string;
  message:string;
}
const ContactMe = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [formData, setFormData] = useState<Formdata>({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    return () => setIsMounted(false);
  }, []);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants: Variants = {
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

  const titleVariants: Variants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = async(e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Add your form submission logic here
    try {
      const res = await fetch('/api/contact',{
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify(formData)
      })

      if(!res.ok){
        throw new Error("Failed to send message")
      }
      console.log('response data :',res)
      setFormData({
        name:'',
        email:'',
        message:''
      })
    } catch (error) {
      throw new Error('Internal Server error')
    }
    console.log('Form submitted:', formData);
    setTimeout(() => {
      setIsSubmitting(false);
      // Reset form or show success message
    }, 1500);
  };

  if (!isMounted) {
    return (
      <section id="contact" className="py-10 bg-white dark:bg-gray-900">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="text-center py-20">
            <p className="text-gray-600 dark:text-gray-300">Loading contact information...</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-10 bg-white dark:bg-gray-900">
      <div className="container max-w-7xl mx-auto px-4">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={titleVariants}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4">
            Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyan-500">Touch</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach out!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="bg-white dark:bg-gray-800/50 rounded-xl shadow-lg p-8 border border-gray-100 dark:border-gray-700"
          >
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">Send Me a Message</h3>
            
            <form className="space-y-6" onSubmit={handleSubmit}>
              <motion.div variants={itemVariants}>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  placeholder="John Doe"
                  required
                />
              </motion.div>

              <motion.div variants={itemVariants}>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  placeholder="john@example.com"
                  required
                />
              </motion.div>

              <motion.div variants={itemVariants}>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  placeholder="Hello, I'd like to talk about..."
                  required
                ></textarea>
              </motion.div>

              <motion.div variants={itemVariants}>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full px-6 py-3 bg-gradient-to-r from-primary to-cyan-500 text-white font-medium rounded-lg hover:shadow-lg hover:shadow-primary/30 transition-all duration-300 hover:-translate-y-1 ${isSubmitting ? 'opacity-75 cursor-not-allowed' : ''}`}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </motion.div>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="space-y-8"
          >
            <motion.div 
              variants={itemVariants}
              className="bg-white dark:bg-gray-800/50 rounded-xl shadow-lg p-8 border border-gray-100 dark:border-gray-700"
            >
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <motion.div 
                  whileHover={{ x: 5 }}
                  className="flex items-start gap-4"
                >
                  <div className="p-3 rounded-lg bg-primary/10 text-primary dark:bg-cyan-400/20 dark:text-cyan-400">
                    <FiMail className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-700 dark:text-gray-300">Email</h4>
                    <a 
                      href="mailto:abhisonijeet123@gmail.com" 
                      className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-cyan-400 transition-colors"
                    >
                      abhisonijeet123@gmail.com
                    </a>
                  </div>
                </motion.div>

                <motion.div 
                  whileHover={{ x: 5 }}
                  className="flex items-start gap-4"
                >
                  <div className="p-3 rounded-lg bg-primary/10 text-primary dark:bg-cyan-400/20 dark:text-cyan-400">
                    <FiMapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-700 dark:text-gray-300">Location</h4>
                    <p className="text-gray-600 dark:text-gray-400">Sagar, MP, India</p>
                  </div>
                </motion.div>

                <motion.div 
                  whileHover={{ x: 5 }}
                  className="flex items-start gap-4"
                >
                  <div className="p-3 rounded-lg bg-primary/10 text-primary dark:bg-cyan-400/20 dark:text-cyan-400">
                    <FiClock className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-700 dark:text-gray-300">Availability</h4>
                    <p className="text-gray-600 dark:text-gray-400">Monday - Friday, 11AM - 5PM IST</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Social Links */}
            <motion.div 
              variants={itemVariants}
              className="bg-white dark:bg-gray-800/50 rounded-xl shadow-lg p-8 border border-gray-100 dark:border-gray-700"
            >
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">Connect With Me</h3>
              <div className="flex gap-4">
                <motion.a
                  whileHover={{ y: -5 }}
                  whileTap={{ scale: 0.9 }}
                  href="https://linkedin.com/in/abhijeet-soni04"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-primary/10 hover:text-primary dark:hover:bg-cyan-400/10 dark:hover:text-cyan-400 transition-all"
                  aria-label="LinkedIn Profile"
                >
                  <FaLinkedin className="w-6 h-6" />
                </motion.a>
                <motion.a
                  whileHover={{ y: -5 }}
                  whileTap={{ scale: 0.9 }}
                  href="https://github.com/AbhiJeetSoni22"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-primary/10 hover:text-primary dark:hover:bg-cyan-400/10 dark:hover:text-cyan-400 transition-all"
                  aria-label="GitHub Profile"
                >
                  <FaGithub className="w-6 h-6" />
                </motion.a>
                <motion.a
                  whileHover={{ y: -5 }}
                  whileTap={{ scale: 0.9 }}
                  href="https://x.com/Abhijee97748833"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-primary/10 hover:text-primary dark:hover:bg-cyan-400/10 dark:hover:text-cyan-400 transition-all"
                  aria-label="Twitter Profile"
                >
                  <FaTwitter className="w-6 h-6" />
                </motion.a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;