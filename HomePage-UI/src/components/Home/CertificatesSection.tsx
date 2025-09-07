"use client";

import { motion } from "framer-motion";
import { certificates } from "@/lib/data";
import type { Certificate } from "@/types/types";

const CertificatesSection: React.FC = () => (
  <section id="certificates" className="py-24 bg-[#111111]">
    <div className="max-w-6xl mx-auto px-6">
      <h2 className="text-4xl font-bold mb-12 text-center">Professional Certificates</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {certificates.map((cert: Certificate, index: number) => (
          <motion.div
            key={index}
            className="bg-neutral-950/50 rounded-xl p-6 shadow-md border border-gray-700 hover:border-emerald-500 transition-all duration-300 transform hover:scale-105"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <a href={cert.link} target="_blank" rel="noopener noreferrer" className="block h-full">
              <div className="flex items-center gap-4 mb-4">
                <div className="text-emerald-500 h-10 w-10 flex items-center justify-center">{cert.companyIcon}</div>
                <h3 className="text-xl font-semibold hover:underline">{cert.title}</h3>
              </div>
              <p className="text-sm text-gray-400 mb-4">{cert.company}</p>
              <div className="flex flex-wrap gap-2">
                {cert.skills.map((skill: string, i: number) => (
                  <span
                    key={i}
                    className="px-2 py-1 text-xs bg-emerald-400/10 text-emerald-400 rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default CertificatesSection;