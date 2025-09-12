"use client";

import { motion } from "framer-motion";
import { skills } from "@/lib/data";

const SkillsSection: React.FC = () => (
  <section id="skills" className="py-24 bg-[#111111]">
    <div className="max-w-6xl mx-auto px-6">
      <h2 className="text-4xl font-bold mb-12 text-center">Technical Skills</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4"> 
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center text-center gap-1 group"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            viewport={{ once: true }}
          >
            <div className="w-20 h-20 flex items-center justify-center bg-neutral-950/50 rounded-full shadow-lg group-hover:scale-110 group-hover:shadow-emerald-400/20 transition-all duration-300">
              {skill.icon}
            </div>
            <p className="font-semibold text-sm">{skill.name}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default SkillsSection;