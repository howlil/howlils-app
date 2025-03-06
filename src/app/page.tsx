// app/page.tsx
"use client";

import { ProfileHeader } from "@/components/sections/profile-header";
import { AboutSection } from "@/components/sections/about-section";
import { PORTFOLIO_DATA } from "@/data/portfolio-data";
import { ExperienceSection } from "@/components/sections/experience-section";
import { SkillsSection } from "@/components/sections/skill-section";
import { EducationSection } from "@/components/sections/education-section";

export default function Home() {
  const { profile, about, experience, education, skills } = PORTFOLIO_DATA;

  return (
    <>
      <ProfileHeader
        name={profile.name}
        title={profile.title}
        description={profile.description}
        avatar={profile.avatar}
      />

      <AboutSection
        intro={about.intro}
        highlights={about.highlights}
        conclusion={about.conclusion}
        buildspace={about.buildspace}
      />

      <ExperienceSection experiences={experience} />
      <EducationSection educations={education} />

      <SkillsSection skills={skills} defaultCategory="general" />
    </>
  );
}
