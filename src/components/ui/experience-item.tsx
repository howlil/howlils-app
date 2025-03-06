"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, ChevronDown } from "lucide-react";

interface ExperienceItemProps {
  company: string;
  role: string;
  period: string;
  logo: string;
  logoBackground?: string;
  description: string;
  achievements?: string[]; // Optional array of achievements
  index: number;
}

export function ExperienceItem({
  company,
  role,
  period,
  logo,
  logoBackground,
  description,
  achievements,
  index,
}: ExperienceItemProps) {
  // Fix for hydration errors - only enable interactivity after mounting
  const [mounted, setMounted] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Company logo colors based on the design or use provided background
  const getLogoBackground = () => {
    if (logoBackground) return logoBackground;

    const logoMap: Record<string, string> = {
      "Atomic Finance": "bg-indigo-100",
      Shopify: "bg-green-100",
      Nvidia: "bg-green-100",
      Splunk: "bg-red-100",
      Lime: "bg-lime-100",
      "Mitre Media": "bg-gray-100",
    };

    return logoMap[company] || "bg-gray-100";
  };

  return (
    <motion.div
      className="mb-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 * index }}
      onMouseEnter={mounted ? () => setIsHovering(true) : undefined}
      onMouseLeave={mounted ? () => setIsHovering(false) : undefined}
    >
      <div
        className="flex items-start group cursor-pointer relative"
        onClick={mounted ? () => setIsExpanded(!isExpanded) : undefined}
      >
        {/* Company Logo */}
        <div
          className={` flex-shrink-0 rounded-full overflow-hidden mr-4 ${getLogoBackground()} flex items-center justify-center`}
        >
          {logo ? (
            <Image
              src={logo}
              alt={`${company} logo`}
              width={56}
              height={56}
              className="object-contain "
            />
          ) : (
            <span className="text-xl font-bold">{company.charAt(0)}</span>
          )}
        </div>

        {/* Content */}
        <div className="flex-1">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div className="flex items-center gap-2">
              <h3 className="text-lg font-medium transition-colors duration-200">
                {company}
              </h3>
              {mounted && (
                <AnimatePresence>
                  {(isHovering || isExpanded) && (
                    <motion.div
                      initial={{ opacity: 0, x: -5 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -5 }}
                      transition={{ duration: 0.2 }}
                    >
                      {isExpanded ? (
                        <ChevronDown className="w-4 h-4 text-gray-800" />
                      ) : (
                        <ChevronRight className="w-4 h-4 text-gray-800" />
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              )}
            </div>
            <span className="text-gray-500 text-sm md:text-right">
              {period}
            </span>
          </div>
          <p className="text-gray-600 dark:text-gray-400 text-sm">{role}</p>

          {mounted && (
            <AnimatePresence>
              {isExpanded && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  {/* Description text */}
                  <p className="text-sm text-gray-700 dark:text-gray-300 mt-3 pr-4">
                    {description}
                  </p>
                  
                  {/* Achievements list - only rendered if achievements exist */}
                  {achievements && achievements.length > 0 && (
                    <div className="mt-3">
                      <h4 className="text-sm font-medium mb-2">Key Achievements:</h4>
                      <ul className="list-disc pl-5 text-sm text-gray-700 dark:text-gray-300 space-y-1">
                        {achievements.map((achievement, i) => (
                          <motion.li 
                            key={i}
                            initial={{ opacity: 0, x: -5 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.1 + (i * 0.05) }}
                          >
                            {achievement}
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          )}
        </div>
      </div>
    </motion.div>
  );
}