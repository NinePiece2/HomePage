"use client";

import { motion } from "framer-motion";
import { testimonials } from "@/lib/data";
import Image from "next/image";

const TestimonialsSection: React.FC = () => (
  <section
    id="testimonials"
    className="py-24 mx-auto px-6 text-center bg-[#111111]"
  >
    <div className="max-w-4xl mx-auto px-6 text-center">
      <h2 className="text-4xl font-bold mb-4">What Others Say</h2>
      <div className="w-20 h-1 bg-gradient-to-r from-emerald-400 to-emerald-500 mx-auto mb-8 rounded-full"></div>
      <div className="grid md:grid-cols-2 gap-8">
        {testimonials.map((t, index) => (
          <motion.div
            key={index}
            className="bg-neutral-950/50 rounded-lg p-6 shadow-md"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <p className="italic text-gray-400 mb-4">&quot;{t.text}&quot;</p>
            <div className="flex items-center justify-center gap-4">
              <Image
                src={t.image}
                alt={t.name}
                width={48}
                height={48}
                className="rounded-full border-2 border-emerald-400 object-cover w-12 h-12"
              />
              <div>
                <h4 className="font-semibold">{t.name}</h4>
                <p className="text-sm text-gray-400">{t.position}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
