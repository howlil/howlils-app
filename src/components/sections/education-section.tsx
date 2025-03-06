"use client";

import { motion } from "framer-motion";
import { EducationItem } from "../ui/education-item";

interface Education {
  institution: string;
  degree: string;
  period: string;
  logo: string;
  description?: string;
}

interface EducationSectionProps {
  educations: Education[];
}

export function EducationSection({ educations }: EducationSectionProps) {
  return (
    <motion.section 
      className="mb-12"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <motion.h2 
        className="text-2xl font-bold mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        Education
      </motion.h2>
      
      <div>
        {educations.map((education, index) => (
          <EducationItem 
            key={`${education.institution}-${index}`} 
            {...education} 
            index={index}
          />
        ))}
      </div>
    </motion.section>
  );
}