"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface ProfileHeaderProps {
  name: string;
  title: string;
  description: string;
  avatar: string;
}

export function ProfileHeader({
  name,
  title,
  description,
  avatar,
}: ProfileHeaderProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <motion.div
      className="flex flex-col sm:flex-row justify-between items-center sm:items-start gap-4 sm:gap-6 mb-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Avatar for mobile (top position) */}
      <motion.div
        className="relative h-24 w-24 rounded-full overflow-hidden sm:hidden mb-3"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          delay: 0.3,
          duration: 0.5,
          type: "spring",
          stiffness: 200,
        }}
      >
        <Image
          src={avatar}
          alt="Profile avatar"
          fill
          className="object-cover"
          sizes="96px"
          priority
        />
      </motion.div>

      {/* Content */}
      <div className="text-center sm:text-left flex-1">
        <motion.h1
          className="text-3xl sm:text-4xl font-bold flex items-center justify-center sm:justify-start gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          {name}
          <motion.span
            initial={{ opacity: 0, rotate: -20 }}
            animate={{ opacity: 1, rotate: 0 }}
            transition={{
              delay: 0.4,
              duration: 0.5,
              type: "spring",
              stiffness: 200,
            }}
          >
            👋
          </motion.span>
        </motion.h1>
        <motion.p
          className="text-lg sm:text-xl mt-1"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          {title}
        </motion.p>
        <motion.p
          className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mt-1 max-w-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          {description}
        </motion.p>
      </div>

      {/* Avatar for tablet and desktop (right position) */}
      <motion.div
        className="relative hidden sm:block h-24 w-24 md:h-28 md:w-28 rounded-full overflow-hidden flex-shrink-0"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          delay: 0.3,
          duration: 0.5,
          type: "spring",
          stiffness: 200,
        }}
      >
        <Image
          src={avatar}
          alt="Profile avatar"
          fill
          className="object-cover"
          sizes="(max-width: 768px) 96px, 112px"
          priority
        />
      </motion.div>
    </motion.div>
  );
}