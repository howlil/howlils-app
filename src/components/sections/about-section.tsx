"use client";

import Link from "next/link";
import { motion } from "framer-motion";

interface HighlightItem {
  text: string;
  link?: string;
  isHighlighted?: boolean;
}

interface AboutSectionProps {
  intro: string;
  highlights: HighlightItem[];
  conclusion: string;
  buildspace: {
    text: string;
    link: string;
  };
}

export function AboutSection({ intro, highlights, conclusion, buildspace }: AboutSectionProps) {
  return (
    <motion.section 
      className="mb-12"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.3 }}
    >
      <motion.h2 
        className="text-2xl font-bold mb-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        About
      </motion.h2>
      
      <motion.div 
        className="  "
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <p className="text-gray-700 dark:text-gray-300">
          {intro}{" "}
          {highlights.map((item, index) => (
            <span key={index}>
              {item.link ? (
                <Link 
                  href={item.link} 
                  className="font-medium text-black dark:text-white hover:underline"
                >
                  {item.text}
                </Link>
              ) : (
                <span className="font-medium text-black dark:text-white">{item.text}</span>
              )}
              {index < highlights.length - 1 && ", "}
              {index === highlights.length - 1 && ". "}
            </span>
          ))}
          {conclusion}{" "}
          <Link 
            href={buildspace.link} 
            className="font-medium text-black dark:text-white hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            {buildspace.text}
          </Link>
          .
        </p>
      </motion.div>
    </motion.section>
  );
}