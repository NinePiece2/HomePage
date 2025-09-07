"use client";

import { motion } from "framer-motion";

interface TimelineData {
  role?: string;
  degree?: string;
  company?: string;
  school?: string;
  duration: string;
  description: string[];
}

interface TimelineItemProps {
  icon: React.ReactElement;
  data: TimelineData;
  index: number;
}

const TimelineItem: React.FC<TimelineItemProps> = ({ icon, data, index }) => (
  <div className="relative mb-10">
    <motion.div
      className="absolute w-10 h-10 bg-gradient-to-br from-emerald-400 to-emerald-500 rounded-full -left-5 flex items-center justify-center text-white"
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, delay: index * 0.15 }}
      viewport={{ once: true }}
    >
      {icon}
    </motion.div>

    <motion.div
      className="ml-8"
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: index * 0.15 + 0.1 }}
      viewport={{ once: true }}
    >
      <h3 className="text-xl font-bold">{data.role || data.degree}</h3>
      <p className="font-medium text-emerald-400">{data.company || data.school}</p>
      <p className="text-sm text-gray-400 mb-3">{data.duration}</p>
      <ul className="list-disc list-inside text-gray-400 space-y-1">
        {data.description.map((point: string, i: number) => <li key={i}>{point}</li>)}
      </ul>
    </motion.div>
  </div>
);

export default TimelineItem;