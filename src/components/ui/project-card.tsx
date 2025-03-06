"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Badge } from "./badge";
import { Button } from "./button";
import { Card, CardContent, CardFooter, CardHeader } from "./card";
import Link from "next/link";
import { Globe, Github, FileCode } from "lucide-react";

export type Tech = {
  name: string;
  type: string; // Changed from restricted enum to string to match data
};

export interface ProjectCardProps {
  id: string;
  title: string;
  description: string;
  image: string;
  startDate: string;
  endDate: string;
  technologies: Tech[];
  links: {
    website?: string;
    source?: string;
  };
}

export function ProjectCard({
  id,
  title,
  description,
  image,
  startDate,
  endDate,
  technologies,
  links,
}: ProjectCardProps) {
  const [imageError, setImageError] = useState(false);
  const router = useRouter();
  const period = `${startDate} - ${
    endDate === "Present" ? "Present" : endDate
  }`;

  const handleCardClick = (e: React.MouseEvent) => {
    if ((e.target as Element).closest("a")) {
      return;
    }

    router.push(`/projects/${id}`);
  };

  return (
    <Card
      onClick={handleCardClick}
      className="overflow-hidden border h-full flex flex-col cursor-pointer hover:shadow-md transition-all duration-300"
    >
      <div className="relative h-48 overflow-hidden bg-gray-100 dark:bg-gray-800">
        {!imageError ? (
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-all hover:scale-105"
            sizes="(max-width: 768px) 100vw, 50vw"
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <div className="flex flex-col items-center text-gray-400">
              <FileCode className="h-12 w-12 mb-2" />
              <span className="text-sm">{title}</span>
            </div>
          </div>
        )}
      </div>
      <CardHeader>
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-lg font-bold">{title}</h3>
            <p className="text-sm text-muted-foreground">{period}</p>
          </div>
        </div>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-sm text-muted-foreground mb-2">{description}</p>
      </CardContent>
      <CardFooter className="flex flex-col items-start gap-2">
        <div className="flex flex-wrap gap-1">
          {technologies.map((tech, index) => (
            <Badge key={index} variant="secondary">
              {tech.name}
            </Badge>
          ))}
        </div>
        <div className="flex gap-2 mt-2.5">
          {links.website && (
            <Button
              variant="custom"
              size="custom"
              asChild
              onClick={(e) => e.stopPropagation()}
            >
              <Link
                href={links.website}
                className="text-xs font-medium"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Globe className="mr-1 h-3.5 w-3.5" />
                Visit
              </Link>
            </Button>
          )}
          {links.source && (
            <Button
              variant="custom"
              size="custom"
              asChild
              onClick={(e) => e.stopPropagation()}
            >
              <Link
                href={links.source}
                target="_blank"
                className="text-xs font-medium"
                rel="noopener noreferrer"
              >
                <Github className="mr-1 h-3.5 w-3.5" />
                Source
              </Link>
            </Button>
          )}
        </div>
      </CardFooter>
    </Card>
  );
}
