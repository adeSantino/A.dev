"use client";
import About from "./components/About";
import Project from "./components/Project";
import "./globals.css";
import Seminars from "./components/Seminars";
import Contact from "./components/Contact";
import { motion } from "framer-motion"; // Import motion from framer-motion

export default function Home() {
  // Animation variants for sequential appearance (hero section)
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3, // Delay between child animations
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
    <main className="w-full min-h-screen bg-[#18191b] text-white font-inter antialiased overflow-x-hidden">
      {/* Hero Section - Remains as is with initial animations */}
      <div
        id="home"
        className="relative flex items-center justify-center min-h-screen text-center px-4 py-20 overflow-hidden"
      >
        {/* Animated Background SVG */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none select-none overflow-hidden"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.1 }}
          transition={{ duration: 2, ease: "easeOut", repeat: Infinity, repeatType: "reverse" }}
        >
          <svg
            className="w-[90vw] h-[90vh] animate-pulse-bg"
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
          >
            <motion.path
              fill="#FFFFFF"
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

        {/* Hero Content with sequential animation */}
        <motion.div
          className="relative z-10 max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          <motion.h1
            className="text-6xl md:text-8xl font-extrabold leading-tight mb-6"
            variants={itemVariants}
          >
            A.Dev
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl font-light mb-8"
            variants={itemVariants}
          >
            Full Stack Developer & Aspiring Cloud Engineer
          </motion.p>
          <motion.a
            href="#projects"
            className="inline-block px-8 py-4 border-2 border-white text-white text-lg font-semibold rounded-full hover:bg-white hover:text-black transition-all duration-300 ease-in-out transform hover:scale-105"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View My Work
          </motion.a>
        </motion.div>
      </div>

      {/* About Section - Now animates on scroll */}
      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }} // Animate once when 30% of section is visible
      >
        <About />
      </motion.div>

      {/* Projects Section - Now animates on scroll */}
      <motion.section
        id="projects"
        className="container mx-auto px-4 py-20 border-t border-gray-800"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <Project />
      </motion.section>

      <motion.section className="container mx-auto px-4 py-20 border-t border-gray-800">
        <Seminars />
      </motion.section>

      {/* Contact Section - Now animates on scroll */}
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