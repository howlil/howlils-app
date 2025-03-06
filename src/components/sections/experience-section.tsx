"use client";

import { motion } from "framer-motion";
import { ExperienceItem } from "../ui/experience-item";

interface Experience {
  company: string;
  role: string;
  period: string;
  logo: string;
  description: string;
}

interface ExperienceSectionProps {
  experiences: Experience[];
}

export function ExperienceSection({ experiences }: ExperienceSectionProps) {
  return (
    <motion.section 
      className="mb-12"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.3 }}
    >
      <motion.h2 
        className="text-2xl font-bold mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        Work Experience
      </motion.h2>
      
      <div>
        {experiences.map((experience, index) => (
          <ExperienceItem 
            key={`${experience.company}-${index}`} 
            {...experience} 
            index={index}
          />
        ))}
      </div>
    </motion.section>
  );
}