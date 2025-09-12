"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Link as ScrollLink } from "react-scroll";
import { ArrowRight, ArrowDown } from "lucide-react";
import { HeroParticles } from "@/components/HeroParticles";
import { GithubIcon, LinkedinIcon } from "@/components/icons";

const HeroSection: React.FC = () => (
  <section
    id="hero"
    className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 pt-20 overflow-hidden"
  >
    <HeroParticles />
    
    <div className="relative z-10 flex flex-col justify-center items-center text-center max-w-4xl w-full mx-auto">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-5xl md:text-7xl font-extrabold mb-4 tracking-tight leading-tight bg-gradient-to-br from-emerald-400 to-emerald-600 bg-clip-text text-transparent"
      >
        Romit Sagu
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="text-lg md:text-xl text-gray-300 mb-10 max-w-3xl"
      >
        Computer Engineering Graduate specializing in building robust and scalable software solutions.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        className="flex flex-col sm:flex-row gap-4"
      >
        <Link
          href="/Projects"
          className="group px-7 py-3 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white rounded-full shadow-lg hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
        >
          Explore Projects <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
        </Link>
        <ScrollLink
          to="contact"
          spy
          smooth
          duration={500}
          className="group px-7 py-3 bg-gray-800/50 border border-gray-700 text-gray-200 rounded-full hover:bg-gray-800 hover:border-gray-600 transition-colors duration-300 flex items-center justify-center gap-2 cursor-pointer"
        >
          Get in Touch
        </ScrollLink>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.5 }}
        className="flex gap-6 mt-12"
      >
        <a
          href="https://github.com/NinePiece2"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-emerald-400 transition-colors"
        >
          <GithubIcon className="w-8 h-8" />
        </a>
        <a
          href="https://linkedin.com/in/romit-sagu"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-emerald-400 transition-colors"
        >
          <LinkedinIcon className="w-8 h-8" />
        </a>
      </motion.div>
    </div>
    
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4, duration: 0.5 }}
      className="absolute bottom-12 flex flex-col items-center"
    >
      <ScrollLink
        to="about"
        spy
        smooth
        duration={500}
        aria-label="Scroll to About section"
        className="
          relative flex items-center justify-center 
          w-14 h-14 sm:w-16 sm:h-16 
          cursor-pointer rounded-full border-2 border-emerald-600 
          bg-emerald-500 text-white
          shadow-lg shadow-emerald-500/40
          transition-all duration-700 ease-out
          hover:opacity-60 hover:shadow-emerald-500/20
          group
        "
      >
        <span
          className="
            absolute inset-0 rounded-full bg-emerald-400 
            opacity-0 group-hover:opacity-30 
            scale-100 group-hover:scale-125 
            transition-all duration-1000 ease-out
          "
        />
        
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{
            duration: 1.5,
            ease: "easeInOut",
            repeat: Infinity,
          }}
        >
          <ArrowDown size={26} />
        </motion.div>
      </ScrollLink>
      <span className="mt-4 text-emerald-400 text-sm font-medium tracking-wide animate-pulse">
        Scroll to Explore
      </span>
    </motion.div>
  </section>
);

export default HeroSection;