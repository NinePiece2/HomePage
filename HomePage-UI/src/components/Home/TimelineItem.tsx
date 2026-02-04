"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface TimelineData {
  role?: string;
  degree?: string;
  company?: string;
  school?: string;
  logo?: string;
  logoZoom?: number;
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
      className="absolute w-16 h-16 rounded-full -left-8 flex items-center justify-center text-white overflow-hidden border-2 border-emerald-400 bg-[#151515]"
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, delay: index * 0.15 }}
      viewport={{ once: true }}
    >
      {data.logo ? (
        <Image
          src={data.logo}
          alt={data.company || data.school || "Logo"}
          width={64}
          height={64}
          className="w-full h-full object-contain p-1"
          style={{ transform: `scale(${data.logoZoom || 1})` }}
        />
      ) : (
        icon
      )}
    </motion.div>

    <motion.div
      className="ml-12"
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: index * 0.15 + 0.1 }}
      viewport={{ once: true }}
    >
      <div>
        <h3 className="text-xl font-bold">{data.role || data.degree}</h3>
        <p className="font-medium text-emerald-400">
          {data.company || data.school}
        </p>
        <p className="text-sm text-gray-400 mb-3">{data.duration}</p>
        <ul className="list-disc list-inside text-gray-400 space-y-1">
          {data.description.map((point: string, i: number) => (
            <li key={i}>{point}</li>
          ))}
        </ul>
      </div>
    </motion.div>
  </div>
);

export default TimelineItem;
