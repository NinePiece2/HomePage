"use client";

import { motion } from "framer-motion";
import { ArrowRight, BookOpen } from "lucide-react";
import Link from "next/link";
import { GithubIcon } from "@/components/icons";
import { projects } from "@/lib/data";

const ProjectsSection: React.FC = () => (
  <section id="projects" className="py-24">
    <div className="max-w-7xl mx-auto px-6">
      <h2 className="text-4xl font-bold mb-12 text-center">
        Highlighted Projects
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((proj, index) => (
          <motion.div
            key={index}
            className="bg-neutral-950/50 rounded-2xl shadow-lg overflow-hidden group border border-transparent hover:border-emerald-500 transition-all duration-300 transform hover:scale-105"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <div className="p-6">
              <Link href={proj.projectLink} className="block">
                <h3 className="text-xl font-bold mb-2 hover:underline">
                  {proj.title}
                </h3>
              </Link>
              <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                {proj.desc}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {proj.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 text-xs bg-emerald-400/10 text-emerald-400 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex items-center gap-4 mt-auto">
                <a
                  href={proj.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-sm font-medium hover:text-emerald-400 transition-colors"
                >
                  <GithubIcon className="w-4 h-4" /> GitHub
                </a>
                {proj.live && (
                  <a
                    href={proj.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-sm font-medium hover:text-emerald-400 transition-colors"
                  >
                    <ArrowRight className="w-4 h-4" /> Live Demo
                  </a>
                )}
                {proj.projectLink && (
                  <Link
                    href={proj.projectLink}
                    className="flex items-center gap-1 text-sm font-medium hover:text-emerald-400 transition-colors"
                  >
                    <BookOpen className="w-4 h-4" /> Learn More
                  </Link>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      <div className="text-center mt-12">
        <Link
          href="/Projects"
          className="inline-flex items-center px-6 py-3 border border-emerald-500 text-emerald-500 rounded-full text-lg font-medium hover:bg-emerald-500 hover:text-white transition-colors duration-300"
        >
          More Projects
          <ArrowRight className="ml-2 h-5 w-5" />
        </Link>
      </div>
    </div>
  </section>
);

export default ProjectsSection;
