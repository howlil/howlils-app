"use client";

import { useState, useEffect } from "react";
import { ProjectCard } from "@/components/ui/project-card";
import { Input } from "@/components/ui/input";
import { 
  Pagination, 
  PaginationContent, 
  PaginationEllipsis, 
  PaginationItem, 
  PaginationLink, 
  PaginationNext, 
  PaginationPrevious 
} from "@/components/ui/pagination";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Search } from "lucide-react";
import { PROJECTS_DATA } from '../../data/project-data';

type ProjectCategory = "all" | "project kuliah" | "project pribadi" | "project lomba" | "project pelatihan" | "project kerja";

export default function Project() {
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("all");
  const [filteredProjects, setFilteredProjects] = useState(PROJECTS_DATA);
  
  const projectsPerPage = 8;
  
  useEffect(() => {
    let result = PROJECTS_DATA;
    
    if (activeCategory !== "all") {
      result = result.filter(project => project.category === activeCategory);
    }
    
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(project => 
        project.title.toLowerCase().includes(query) || 
        project.description.toLowerCase().includes(query) ||
        project.technologies.some(tech => tech.name.toLowerCase().includes(query))
      );
    }
    
    setFilteredProjects(result);
    setCurrentPage(1);
  }, [searchQuery, activeCategory]);
  
  const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);
  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = filteredProjects.slice(indexOfFirstProject, indexOfLastProject);
  
  const categories: {id: ProjectCategory; label: string}[] = [
    { id: "all", label: "All Projects" },
    { id: "project kuliah", label: "Academic Projects" },
    { id: "project pribadi", label: "Personal Projects" },
    { id: "project lomba", label: "Competition Projects" },
    { id: "project pelatihan", label: "Training Projects" },
    { id: "project kerja", label: "Work Projects" }
  ];
  
  const getCategoryCount = (category: ProjectCategory) => {
    if (category === "all") return PROJECTS_DATA.length;
    return PROJECTS_DATA.filter(project => project.category === category).length;
  };
  
  const generatePaginationItems = () => {
    const items = [];
    
    // Previous button
    items.push(
      <PaginationItem key="prev">
        <PaginationPrevious 
          onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
          className={currentPage === 1 ? "pointer-events-none opacity-50" : "cursor-pointer"} 
        />
      </PaginationItem>
    );
    
    // Show first page
    items.push(
      <PaginationItem key={1}>
        <PaginationLink 
          isActive={currentPage === 1}
          onClick={() => setCurrentPage(1)}
        >
          1
        </PaginationLink>
      </PaginationItem>
    );
    
    if (currentPage > 3) {
      items.push(
        <PaginationItem key="ellipsis1">
          <PaginationEllipsis />
        </PaginationItem>
      );
    }
    
    for (let i = Math.max(2, currentPage - 1); i <= Math.min(totalPages - 1, currentPage + 1); i++) {
      if (i === 1 || i === totalPages) continue; // Skip first and last page as they're handled separately
      items.push(
        <PaginationItem key={i}>
          <PaginationLink 
            isActive={currentPage === i}
            onClick={() => setCurrentPage(i)}
          >
            {i}
          </PaginationLink>
        </PaginationItem>
      );
    }
    
    if (currentPage < totalPages - 2) {
      items.push(
        <PaginationItem key="ellipsis2">
          <PaginationEllipsis />
        </PaginationItem>
      );
    }
    
    if (totalPages > 1) {
      items.push(
        <PaginationItem key={totalPages}>
          <PaginationLink 
            isActive={currentPage === totalPages}
            onClick={() => setCurrentPage(totalPages)}
          >
            {totalPages}
          </PaginationLink>
        </PaginationItem>
      );
    }
    
    items.push(
      <PaginationItem key="next">
        <PaginationNext 
          onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
          className={currentPage === totalPages ? "pointer-events-none opacity-50" : "cursor-pointer"} 
        />
      </PaginationItem>
    );
    
    return items;
  };
  
  return (
    <div className=" max-w-6xl mx-auto ">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">My Projects</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          A collection of my work across different domains, from personal projects to academic and professional work.
        </p>
      </div>
      
      {/* Search and Filter */}
      <div className="mb-8 flex flex-col sm:flex-row gap-4 items-center justify-between">
        <div className="relative w-full sm:w-64">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search projects..."
            className="pl-9"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        
        <Select 
          value={activeCategory} 
          onValueChange={(value) => setActiveCategory(value as ProjectCategory)}
        >
          <SelectTrigger className="w-full sm:w-[200px]">
            <SelectValue placeholder="Filter by category" />
          </SelectTrigger>
          <SelectContent>
            {categories.map(category => (
              <SelectItem key={category.id} value={category.id}>
                {category.label} ({getCategoryCount(category.id)})
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      
      <div className="mb-6 text-sm text-muted-foreground">
        Showing {Math.min(filteredProjects.length, currentProjects.length)} of {filteredProjects.length} results
        {searchQuery && <span> for {searchQuery}</span>}
        {activeCategory !== "all" && (
          <span> in {categories.find(c => c.id === activeCategory)?.label}</span>
        )}
      </div>
      
      {currentProjects.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-2 mb-8">
          {currentProjects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
      ) : (
        <div className="text-center py-20 bg-gray-50 dark:bg-gray-900 rounded-lg">
          <h3 className="text-xl font-medium mb-2">No projects found</h3>
          <p className="text-muted-foreground">
            Try adjusting your search or filter criteria.
          </p>
        </div>
      )}
      
      {filteredProjects.length > projectsPerPage && (
        <Pagination className="mt-8 mb-16">
          <PaginationContent>
            {generatePaginationItems()}
          </PaginationContent>
        </Pagination>
      )}
    </div>
  );
}