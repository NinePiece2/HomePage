"use client";

import { LaptopCodeIcon, CodeIcon } from "@/components/icons";
import TimelineItem from "@/components/Home/TimelineItem";
import { experience, education } from "@/lib/data";

const ExperienceSection: React.FC = () => (
  <section id="experience" className="py-24 max-w-4xl mx-auto px-6">
    <h2 className="text-4xl font-bold mb-12 text-center">Career & Education</h2>
    <div
      className="relative border-l-2 border-emerald-400/30"
      style={{ marginLeft: "1rem" }}
    >
      {experience.map((exp, index) => (
        <TimelineItem
          key={index}
          icon={<LaptopCodeIcon />}
          data={exp}
          index={index}
        />
      ))}
      <TimelineItem
        icon={<CodeIcon />}
        data={education}
        index={experience.length}
      />
    </div>
  </section>
);

export default ExperienceSection;
