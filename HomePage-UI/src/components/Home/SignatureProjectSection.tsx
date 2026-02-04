"use client";

import { motion } from "framer-motion";
import { Sparkles, ArrowRight, BookOpen } from "lucide-react";
import { GithubIcon } from "@/components/icons";
import Image from "next/image";
import React from "react";
import { projectData } from "@/lib/data";

const MarkdownText: React.FC<{ text: string }> = ({ text }) => {
  const parts = text.split(/(\*\*.*?\*\*)/g);

  return (
    <>
      {parts.map((part, index) => {
        if (part.startsWith("**") && part.endsWith("**")) {
          return (
            <span className="font-extrabold" key={index}>
              {part.slice(2, -2)}
            </span>
          );
        }
        return <span key={index}>{part}</span>;
      })}
    </>
  );
};

const SignatureProjectSection: React.FC = () => (
  <section id="signature-project" className="py-24 max-w-7xl mx-auto px-6">
    <h2 className="text-4xl font-extrabold mb-2 pb-2 text-center bg-gradient-to-r from-emerald-400 to-emerald-500 bg-clip-text text-transparent">
      {projectData.title}: {projectData.projectName}{" "}
      <Sparkles className="inline" />
    </h2>
    <div className="w-32 h-1 bg-gradient-to-r from-emerald-400 to-emerald-500 mx-auto mb-8 rounded-full"></div>

    <div className="flex flex-col lg:flex-row gap-12 items-center">
      <motion.div
        className="w-full lg:w-1/2"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <div className="relative w-full aspect-[16/9] bg-neutral-950/50 rounded-xl shadow-lg overflow-hidden">
          <Image
            src={projectData.image}
            alt={projectData.imageAlt}
            fill
            className="object-cover rounded-xl"
          />
        </div>
      </motion.div>

      <motion.div
        className="lg:w-1/2 text-left"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <h3 className="text-3xl font-bold mb-4">Project Overview</h3>
        <p className="text-lg text-gray-400 leading-relaxed mb-6">
          {projectData.overview}
        </p>

        <h4 className="text-2xl font-semibold mb-2">Technical Deep Dive</h4>
        <p className="text-gray-400 leading-relaxed mb-6">
          <MarkdownText text={projectData.technical} />
        </p>

        <div className="flex gap-4">
          {projectData.links.code && (
            <motion.a
              href={projectData.links.code}
              target="_blank"
              rel="noopener noreferrer"
              className="group px-6 py-3 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white rounded-full flex items-center gap-2 transform transition-all duration-300 hover:scale-105 active:scale-95 shadow-md hover:shadow-lg"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              View Code{" "}
              <GithubIcon className="w-4 h-4 transition-transform group-hover:rotate-12" />
            </motion.a>
          )}
          {projectData.links.demo && (
            <motion.a
              href={projectData.links.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="group px-6 py-3 border border-gray-700 rounded-full flex items-center gap-2 transform transition-all duration-300 hover:scale-105 active:scale-95 text-gray-400 hover:text-white hover:border-emerald-500 shadow-md hover:shadow-lg"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              Live Demo{" "}
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-1"
              />
            </motion.a>
          )}
          {projectData.links.portfolio && (
            <motion.a
              href={projectData.links.portfolio}
              className="group px-6 py-3 border border-gray-700 rounded-full flex items-center gap-2 transform transition-all duration-300 hover:scale-105 active:scale-95 text-gray-400 hover:text-white hover:border-emerald-500 shadow-md hover:shadow-lg"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              Portfolio Site Link{" "}
              <BookOpen
                size={16}
                className="transition-transform group-hover:-rotate-12"
              />
            </motion.a>
          )}
        </div>
      </motion.div>
    </div>
  </section>
);

export default SignatureProjectSection;
