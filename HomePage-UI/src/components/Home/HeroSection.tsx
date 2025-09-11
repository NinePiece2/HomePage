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
    <div className="relative z-10 flex flex-col justify-center items-center text-center">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-5xl md:text-7xl font-extrabold mb-1 pb-3 tracking-tight bg-gradient-to-br from-emerald-500 to-emerald-600 bg-clip-text text-transparent"
      >
        Romit Sagu
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-lg md:text-xl text-gray-400 mb-8 max-w-2xl"
      >
        Computer Engineering Graduate specializing in building robust and scalable software solutions.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="flex flex-col sm:flex-row gap-4"
      >
        <Link
          href="/Projects"
          className="px-6 py-3 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white rounded-full shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2"
        >
          Explore Projects <ArrowRight size={20} />
        </Link>

        <ScrollLink
          to="contact"
          spy
          smooth
          duration={500}
          className="px-6 py-3 bg-gray-800/50 border border-gray-700/50 text-gray-200 rounded-full hover:bg-gray-800 transition-colors duration-300 flex items-center justify-center gap-2 cursor-pointer"
        >
          Get in Touch
        </ScrollLink>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="flex gap-6 mt-12"
      >
        <a
          href="https://github.com/NinePiece2"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-emerald-400 transition-colors"
        >
          <GithubIcon className="w-7 h-7" />
        </a>
        <a
          href="https://linkedin.com/in/romit-sagu"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-emerald-400 transition-colors"
        >
          <LinkedinIcon className="w-7 h-7" />
        </a>
      </motion.div>
    </div>

    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.8 }}
      className="absolute bottom-10"
    >
      <ScrollLink
        to="about"
        spy
        smooth
        className="p-3 bg-gray-800/50 border border-gray-700/50 text-gray-200 rounded-full hover:bg-gray-800 transition-colors duration-300 flex items-center justify-center cursor-pointer animate-bounce"
      >
        <ArrowDown size={24} />
      </ScrollLink>
    </motion.div>
  </section>
);

export default HeroSection;
