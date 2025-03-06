"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { SkillItem } from "../ui/skill-item";

interface Skill {
  name: string;
  category: string;
}

interface SkillsByCategory {
  [category: string]: string[];
}

interface SkillsSectionProps {
  skills: (string | Skill)[];
  defaultCategory?: string;
  colorByCategory?: boolean;
}

export function SkillsSection({ 
  skills, 
  defaultCategory = "All",
  colorByCategory = true
}: SkillsSectionProps) {
  const [mounted, setMounted] = useState(false);
  const [skillsByCategory, setSkillsByCategory] = useState<SkillsByCategory>({});
  const [categories, setCategories] = useState<string[]>([]);
  const [activeCategory, setActiveCategory] = useState<string>(defaultCategory);
  const [allSkills, setAllSkills] = useState<string[]>([]);

  useEffect(() => {
    setMounted(true);

    // Organize skills by category
    const categorized: SkillsByCategory = {};
    const all: string[] = [];
    
    skills.forEach((skill) => {
      if (typeof skill === 'string') {
        // Handle plain string skills (assign to default category)
        if (!categorized[defaultCategory]) {
          categorized[defaultCategory] = [];
        }
        categorized[defaultCategory].push(skill);
        all.push(skill);
      } else {
        // Handle skills with explicit categories
        const { name, category } = skill;
        if (!categorized[category]) {
          categorized[category] = [];
        }
        categorized[category].push(name);
        all.push(name);
      }
    });
    
    // Add "All" category with all skills
    categorized["All"] = all;
    
    // Sort categories alphabetically, but keep "All" first
    const sortedCategories = Object.keys(categorized).sort();
    const allIndex = sortedCategories.indexOf("All");
    if (allIndex > 0) {
      sortedCategories.splice(allIndex, 1);
      sortedCategories.unshift("All");
    }
    
    setSkillsByCategory(categorized);
    setCategories(sortedCategories);
    setAllSkills(all);
    setActiveCategory("All");
  }, [skills, defaultCategory]);

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
        
        {mounted && categories.length > 1 && (
          <div className="mt-2 sm:mt-0">
            <Tabs 
              defaultValue="All" 
              value={activeCategory}
              onValueChange={setActiveCategory}
              className="w-full"
            >
              <TabsList className="grid grid-flow-col auto-cols-max gap-1 overflow-x-auto">
                {categories.map((category) => (
                  <TabsTrigger 
                    key={category} 
                    value={category}
                    className="text-xs sm:text-sm px-2 py-1"
                  >
                    {category}
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>
          </div>
        )}
      </div>
      
      {mounted && (
        <motion.div
          className="flex flex-wrap"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          {skillsByCategory[activeCategory]?.map((skill, index) => (
            <SkillItem 
              key={`${skill}-${index}`} 
              name={skill} 
              index={index}
              category={colorByCategory ? activeCategory !== "All" ? activeCategory : undefined : undefined}
            />
          ))}
        </motion.div>
      )}
    </motion.section>
  );
}