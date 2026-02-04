"use client";

import { motion } from "framer-motion";
import dynamic from "next/dynamic";

const MapComponent = dynamic(() => import("@/components/MapComponent"), {
  ssr: false,
});

const LocationSection: React.FC = () => {
  const position: [number, number] = [43.6426, -79.3871];

  return (
    <section id="location" className="py-12 bg-[#111111]">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-4">Location</h2>
        <div className="w-16 h-1 bg-gradient-to-r from-emerald-400 to-emerald-500 mx-auto mb-8 rounded-full"></div>
        <motion.div
          className="mx-auto w-full max-w-2xl h-80 rounded-xl overflow-hidden shadow-lg border border-gray-700"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <MapComponent position={position} />
        </motion.div>
        <p className="mt-4 text-gray-400">
          Currently based in Toronto, Ontario, Canada. Open to remote, hybrid
          and on-site opportunities.
        </p>
      </div>
    </section>
  );
};

export default LocationSection;
