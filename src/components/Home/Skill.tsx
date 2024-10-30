import React from "react";
import Docker from "../../../public/skills/Docker.svg";
import Express from "../../../public/skills/ExpressJS-Dark.svg";
import Firebase from "../../../public/skills/Firebase-Dark.svg";
import GCP from "../../../public/skills/GCP-Dark.svg";
import GitHubActions from "../../../public/skills/GithubActions-Dark.svg";
import Java from "../../../public/skills/Java-Dark.svg";
import JavaScript from "../../../public/skills/JavaScript.svg";
import Kotlin from "../../../public/skills/Kotlin-Dark.svg";
import MySQL from "../../../public/skills/MySQL-Dark.svg";
import NextJS from "../../../public/skills/NextJS-Dark.svg";
import NodeJS from "../../../public/skills/NodeJS-Dark.svg";
import PostgreSQL from "../../../public/skills/PostgreSQL-Dark.svg";
import Prisma from "../../../public/skills/Prisma.svg";
import Python from "../../../public/skills/Python-Dark.svg";
import ReactIcon from "../../../public/skills/React-Dark.svg";
import Redux from "../../../public/skills/Redux.svg";
import Supabase from "../../../public/skills/Supabase-Dark.svg";
import TailwindCSS from "../../../public/skills/TailwindCSS-Dark.svg";
import Terraform from "../../../public/skills/Terraform-Dark.svg";
import TypeScript from "../../../public/skills/TypeScript.svg";
import VueJS from "../../../public/skills/VueJS-Dark.svg";
import Image from "next/image";

export default function Skill() {
  const skills = [
    { name: "Docker", image: Docker },
    { name: "Express", image: Express },
    { name: "Firebase", image: Firebase },
    { name: "GCP", image: GCP },
    { name: "GitHub", image: GitHubActions },
    { name: "Java", image: Java },
    { name: "JavaScript", image: JavaScript },
    { name: "Kotlin", image: Kotlin },
    { name: "MySQL", image: MySQL },
    { name: "NextJS", image: NextJS },
    { name: "NodeJS", image: NodeJS },
    { name: "PostgreSQL", image: PostgreSQL },
    { name: "Prisma", image: Prisma },
    { name: "Python", image: Python },
    { name: "React", image: ReactIcon },
    { name: "Redux", image: Redux },
    { name: "Supabase", image: Supabase },
    { name: "TailwindCSS", image: TailwindCSS },
    { name: "Terraform", image: Terraform },
    { name: "TypeScript", image: TypeScript },
    { name: "VueJS", image: VueJS },
  ];

  return (
    <section className="flex flex-wrap items-center gap-4 p-4 border border-neutral-50 border-opacity-15 bg-neutral-50 bg-opacity-5 rounded-2xl backdrop-blur-md">
      {skills.map((skill) => (
        <Image key={skill.name} src={skill.image} height={52} alt={skill.name} />
      ))}
    </section>
  );
}
