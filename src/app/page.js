"use client";
import Header from "./components/Header";
import About from "./components/About";
import Project from "./components/Project";
import "./globals.css";
import Seminars from "./components/Seminars";
import Contact from "./components/Contact";
import { motion } from "framer-motion";

export default function Home() {
  // Animation variants for sequential appearance (hero section)
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  // Variants for scroll-triggered animations
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <main className="w-full min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white font-inter antialiased overflow-x-hidden relative">
      {/* Enhanced Animated Background Layers */}
      <div className="fixed inset-0 pointer-events-none">
        {/* Primary gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900/80 to-slate-900"></div>
        
        {/* Animated gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-transparent to-slate-900/30 animate-pulse-bg"></div>
        
        {/* Radial gradient spots */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 left-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-40 right-20 w-80 h-80 bg-blue-400/8 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-20 left-1/4 w-72 h-72 bg-blue-600/12 rounded-full blur-3xl animate-pulse delay-2000"></div>
        </div>
        
        {/* Animated grid pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(59, 130, 246, 0.3) 1px, transparent 0)`,
            backgroundSize: '50px 50px'
          }}></div>
        </div>
        
        {/* Floating particles effect */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-blue-400/30 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
      </div>
      
      {/* Header */}
      <Header />
      
      {/* Hero Section */}
      <div
        id="home"
        className="relative flex items-center justify-center min-h-screen text-center px-4 py-20 overflow-hidden"
      >
        {/* Enhanced Animated Background SVG */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center opacity-30 pointer-events-none select-none overflow-hidden"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.3 }}
          transition={{ duration: 2, ease: "easeOut", repeat: Infinity, repeatType: "reverse" }}
        >
          <svg
            className="w-[90vw] h-[90vh] animate-pulse-bg"
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
          >
            <motion.path
              fill="#3b82f6"
              d="M49.6,-66.1C64.9,-54.6,77.9,-38.7,80.1,-20.9C82.4,-3.2,73.9,16.4,63.1,30.7C52.4,45,39.3,53.9,24.3,60.1C9.3,66.4,-7.6,69.9,-23.4,66.4C-39.2,62.9,-53.9,52.4,-65.4,38.1C-76.9,23.8,-85.2,5.7,-82.9,-12.3C-80.6,-30.3,-67.7,-48.2,-51.9,-59.7C-36.1,-71.2,-18.1,-76.3,0.1,-76.4C18.3,-76.5,36.5,-71.6,49.6,-66.1Z"
              transform="translate(100 100)"
              animate={{
                d: [
                  "M49.6,-66.1C64.9,-54.6,77.9,-38.7,80.1,-20.9C82.4,-3.2,73.9,16.4,63.1,30.7C52.4,45,39.3,53.9,24.3,60.1C9.3,66.4,-7.6,69.9,-23.4,66.4C-39.2,62.9,-53.9,52.4,-65.4,38.1C-76.9,23.8,-85.2,5.7,-82.9,-12.3C-80.6,-30.3,-67.7,-48.2,-51.9,-59.7C-36.1,-71.2,-18.1,-76.3,0.1,-76.4C18.3,-76.5,36.5,-71.6,49.6,-66.1Z",
                  "M47.7,-67.5C62.7,-57.4,75.4,-41.8,79.5,-24.1C83.7,-6.3,79.3,13.6,69.4,27.7C59.5,41.9,44.1,50.2,27.8,56.8C11.5,63.3,-5.7,68,-22.4,64.2C-39.2,60.3,-55.4,48,-65.8,32.2C-76.2,16.5,-80.7,-2.8,-74.6,-19.9C-68.4,-37.1,-51.6,-52.1,-33.9,-61.8C-16.3,-71.4,1.1,-75.7,18.7,-73.4Z",
                ],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
              }}
            />
          </svg>
        </motion.div>

        {/* Additional animated elements */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-32 h-32 bg-blue-500/20 rounded-full blur-xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-blue-400/15 rounded-full blur-xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.15, 0.3, 0.15],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />

        {/* Hero Content with sequential animation */}
        <motion.div
          className="relative z-10 max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          <motion.h1
            className="text-6xl md:text-8xl font-extrabold leading-tight mb-6 bg-gradient-to-r from-blue-400 via-blue-300 to-blue-500 bg-clip-text text-transparent drop-shadow-2xl"
            variants={itemVariants}
          >
            A.Dev
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl font-light mb-8 text-blue-200 drop-shadow-lg"
            variants={itemVariants}
          >
            Full Stack Developer & Aspiring Cloud Engineer
          </motion.p>
          <motion.a
            href="#projects"
            className="inline-block px-8 py-4 bg-gradient-to-r from-blue-600 via-blue-500 to-blue-700 hover:from-blue-700 hover:via-blue-600 hover:to-blue-800 text-white text-lg font-semibold rounded-full transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/50 cool-glow backdrop-blur-sm border border-blue-400/30"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View My Work
          </motion.a>
        </motion.div>
      </div>

      {/* About Section */}
      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <About />
      </motion.div>

      {/* Projects Section */}
      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <Project />
      </motion.div>

      {/* Seminars Section */}
      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <Seminars />
      </motion.div>

      {/* Contact Section */}
      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <Contact />
      </motion.div>
    </main>
  );
}