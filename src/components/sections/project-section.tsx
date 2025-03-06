"use client";

import { motion } from "framer-motion";
import { ProjectCard, ProjectCardProps } from "../ui/project-card";

interface ProjectSectionProps {
  projects: ProjectCardProps[];
}

export function ProjectSection({ projects }: ProjectSectionProps) {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Check out my latest work
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            I ve worked on a variety of projects, from simple websites to
            complex web applications. Here are a few of my favorites.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {projects.slice(0, 4).map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}