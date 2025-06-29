"use client";
import {
  Bars3Icon,
  MoonIcon,
  SunIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { useTheme } from "../context/ThemeContext";
import { motion, AnimatePresence } from "framer-motion";


const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const pathname = usePathname();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const menuItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/projects", label: "Projects" },
   
    { href: "/contact", label: "Contact" },
  ];

  const menuVariants = {
    open: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.3,
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        staggerChildren: 0.1,
        staggerDirection: -1,
      },
    },
  };

  const itemVariants = {
    open: {
      y: 0,
      opacity: 1,
      transition: {
        y: { stiffness: 1000, velocity: -100 },
      },
    },
    closed: {
      y: -20,
      opacity: 0,
      transition: {
        y: { stiffness: 1000 },
      },
    },
  };

  return (
    <nav className="fixed w-full bg-white/80 dark:bg-gray-900/80 border-b border-gray-200 dark:border-gray-800 backdrop-blur-sm z-50">
      <div className="container max-w-7xl mx-auto px-4">
        {/* Desktop menu */}
        <div className="h-16 flex items-center justify-between">
          <Link href={"/"} className="text-xl font-bold text-primary dark:text-cyan-400">
            Abhijeet.dev&trade;
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  className={`hover:text-primary dark:hover:text-cyan-400 hover:translate-y-0.5 transition-all ${
                    isActive ? "text-primary dark:text-cyan-400 font-medium" : "text-gray-800 dark:text-gray-300"
                  }`}
                  href={item.href}
                >
                  {item.label}
                </Link>
              );
            })}
            <motion.button 
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={toggleTheme} 
              className="p-2 text-primary dark:text-cyan-400 cursor-pointer rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
            >
              {theme == "dark" ? (
                <SunIcon className="w-6 text-amber-400 h-6" />
              ) : (
                <MoonIcon className="w-6 h-6" />
              )}
            </motion.button>
          </div>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={toggleMobileMenu}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors cursor-pointer"
          >
            {isMobileMenuOpen ? (
              <XMarkIcon className="w-6 h-6 text-gray-800 dark:text-gray-300" />
            ) : (
              <Bars3Icon className="w-7 h-7 text-gray-800 dark:text-gray-300" />
            )}
          </motion.button>
        </div>

        {/* Mobile menu with animations */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial="closed"
              animate="open"
              exit="closed"
              variants={menuVariants}
              className="md:hidden overflow-hidden"
            >
              <motion.div className="space-y-3 pb-4">
                {menuItems.map((item, index) => {
                  const isActive = pathname === item.href;
                  return (
                    <motion.div
                      key={index}
                      variants={itemVariants}
                      whileHover={{ x: 5 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Link
                        className={`block py-2 px-2 rounded-lg transition-colors ${
                          isActive 
                            ? "bg-primary/10 text-primary dark:bg-cyan-400/10 dark:text-cyan-400" 
                            : "hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-800 dark:text-gray-300"
                        }`}
                        href={item.href}
                        onClick={toggleMobileMenu}
                      >
                        {item.label}
                      </Link>
                    </motion.div>
                  );
                })}
                <motion.div
                  variants={itemVariants}
                  whileHover={{ x: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <button
                    onClick={toggleTheme}
                    className={`w-full text-left py-2 px-2 rounded-lg flex items-center gap-2 ${
                      theme === "dark" 
                        ? "hover:bg-gray-800 text-gray-300" 
                        : "hover:bg-gray-100 text-gray-800"
                    }`}
                  >
                    {theme == "dark" ? (
                      <>
                        <SunIcon className="w-5 text-amber-400 h-5" />
                        <span>Light Mode</span>
                      </>
                    ) : (
                      <>
                        <MoonIcon className="w-5 h-5" />
                        <span>Dark Mode</span>
                      </>
                    )}
                  </button>
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;