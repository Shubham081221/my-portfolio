// src/components/sections/Projects.tsx
import { projects } from "@/data/projects";
import ProjectCard from "@/components/ui/ProjectCard";

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-gray-50">
      <div className="max-w-5xl mx-auto px-6">

        {/* Heading */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">Projects</h2>
          <p className="text-gray-600 max-w-xl">
            A selection of things I've built — from full-stack apps to frontend experiments.
          </p>
        </div>

        {/* Grid — auto scales as you add more projects */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

      </div>
    </section>
  );
}