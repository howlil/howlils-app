"use client";

import { motion } from "framer-motion";

interface SkillItemProps {
  name: string;
  index: number;
  category?: string;
}

export function SkillItem({ name, index, category }: SkillItemProps) {
  

  return (
    <motion.div
      className="inline-block mr-2 mb-2"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ 
        duration: 0.4, 
        delay: 0.1 + (index * 0.05),
        type: "spring",
        stiffness: 200
      }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <span className="bg-gray-900 dark:bg-gray-800 text-white px-3 py-1 rounded-md text-sm">
        {name}
      </span>
    </motion.div>
  );
}