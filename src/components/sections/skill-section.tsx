"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { SkillItem } from "../ui/skill-item";

interface Skill {
  name: string;
  category: string;
}


interface SkillsSectionProps {
  skills: (string | Skill)[];
}

export function SkillsSection({ 
  skills, 
}: SkillsSectionProps) {
  const [mounted, setMounted] = useState(false);
  const [skillsList, setSkillsList] = useState<string[]>([]);

  useEffect(() => {
    setMounted(true);

    // Flatten skills into a single array
    const allSkills: string[] = skills.map((skill) => {
      if (typeof skill === 'string') {
        return skill;
      } else {
        return skill.name;
      }
    });
    
    setSkillsList(allSkills);
  }, [skills]);

  return (
    <motion.section 
      className="mb-12"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.3 }}
    >
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
        <motion.h2 
          className="text-2xl font-bold"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Skills
        </motion.h2>
      </div>
      
      {mounted && (
        <motion.div
          className="flex flex-wrap"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          {skillsList.map((skill, index) => (
            <SkillItem 
              key={`${skill}-${index}`} 
              name={skill} 
              index={index}
            />
          ))}
        </motion.div>
      )}
    </motion.section>
  );
}