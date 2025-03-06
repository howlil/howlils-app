"use client";

import { motion } from "framer-motion";
import { OrganizationItem } from "../ui/organization-item";

interface Organization {
  organization: string;
  role: string;
  period: string;
  logo: string;
  description?: string;
  achievements?: string[];
}

interface OrganizationSectionProps {
  organizations: Organization[];
  title?: string;
}

export function OrganizationSection({ 
  organizations,
  title = "Organizations & Volunteering" 
}: OrganizationSectionProps) {
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
        {title}
      </motion.h2>
      
      <div>
        {organizations.map((org, index) => (
          <OrganizationItem 
            key={`${org.organization}-${index}`} 
            {...org} 
            index={index}
          />
        ))}
      </div>
    </motion.section>
  );
}