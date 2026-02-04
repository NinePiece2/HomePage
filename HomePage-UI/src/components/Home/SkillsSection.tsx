"use client";

import { motion } from "framer-motion";
import { skills } from "@/lib/data";

const SkillsSection: React.FC = () => (
  <section id="skills" className="py-24 bg-[#111111]">
    <div className="max-w-6xl mx-auto px-6">
      <h2 className="text-4xl font-bold mb-12 text-center">Technical Skills</h2>

      {Object.entries(skills).map(([category, skillList]) => (
        <div key={category} className="mb-12">
          <h3 className="text-2xl font-semibold mb-6 text-center text-emerald-400">
            {category}
          </h3>

          <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-8 gap-x-4 gap-y-8 place-items-center">
            {skillList.map((skill, index) => (
              <motion.div
                key={skill.name}
                className="flex flex-col items-center text-center gap-2 group cursor-progress"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1, y: -5 }}
              >
                <div className="w-20 h-20 flex items-center justify-center bg-neutral-950/50 rounded-full shadow-lg shadow-neutral-700/30 group-hover:shadow-xl group-hover:shadow-emerald-400/60 transition-all duration-300">
                  {skill.icon}
                </div>
                <p className="font-semibold text-sm group-hover:text-emerald-400 transition-colors duration-300">
                  {skill.name}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default SkillsSection;
