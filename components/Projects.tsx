import React, { useState, useEffect } from "react";
import { PROJECTS } from "../constants";
import { Project } from "../types";
import ProjectDetailView from "./ProjectDetailView";

const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [viewMode, setViewMode] = useState<"grid" | "detail">("grid");
  const filters = ["All", "Web", "Mobile", "Design"];

  // Handle scrolling when switching to detail view
  useEffect(() => {
    if (viewMode === "detail") {
      const element = document.getElementById("projects");
      element?.scrollIntoView({ behavior: "smooth" });
    }
  }, [viewMode]);

  const filteredProjects =
    activeFilter === "All"
      ? PROJECTS
      : PROJECTS.filter((p) =>
          p.tags.some((tag) =>
            tag.toLowerCase().includes(activeFilter.toLowerCase()),
          ),
        );

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
    setViewMode("detail");
  };

  const handleBackToGrid = () => {
    setViewMode("grid");
  };

  if (viewMode === "detail" && selectedProject) {
    return (
      <ProjectDetailView project={selectedProject} onBack={handleBackToGrid} />
    );
  }

  return (
    <section
      id="projects"
      className="py-32 relative overflow-hidden bg-slate-50/50 dark:bg-transparent min-h-[800px]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 animate-in fade-in duration-700">
        <div className="flex flex-col md:flex-row items-end justify-between mb-24 gap-12">
          <div className="max-w-2xl">
            <h2 className="text-sm font-black text-[#318ce7] uppercase tracking-[0.5em] mb-6 topic-accent animate-sway-minimal">
              {" "}
            </h2>
            <h3 className="text-5xl md:text-7xl font-extrabold text-slate-900 dark:text-white tracking-tighter leading-none mb-8">
              The{" "}
              <span className="text-gradient italic topic-accent animate-drift-minimal">
                Project
              </span>{" "}
              Archive.
            </h3>
            <p className="text-lg text-slate-500 dark:text-slate-400 font-medium">
              Standardized engineering solutions executed for all. Each project
              is a testament to my commitment to excellence, innovation, and the
              relentless pursuit of crafting digital experiences that resonate
              and endure.
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-10 py-5 rounded-2xl text-[10px] font-black uppercase tracking-[0.3em] transition-all duration-300 ${
                  activeFilter === filter
                    ? "bg-[#318ce7] text-white shadow-xl shadow-[#318ce7]/30 scale-105"
                    : "bg-white dark:bg-slate-900 text-slate-500 border border-slate-200 dark:border-slate-800 hover:border-[#318ce7]"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => handleProjectClick(project)}
              className="group relative bg-[#318ce7] rounded-[3rem] overflow-hidden border border-white/10 transition-all duration-700 hover:-translate-y-4 hover:shadow-[0_40px_80px_-15px_rgba(49,140,231,0.4)] cursor-pointer"
            >
              <div className="aspect-[16/11] image-zoom-container">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0"
                />
              </div>

              <div className="p-12">
                <div className="flex gap-2 mb-8">
                  {project.tags.slice(0, 2).map((tag) => (
                    <span
                      key={tag}
                      className="px-4 py-1.5 bg-white/20 backdrop-blur-md text-white text-[9px] font-black rounded-lg uppercase tracking-widest border border-white/10"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h4 className="text-3xl font-black text-white mb-4 tracking-tighter transition-colors">
                  {project.title}
                </h4>
                <p className="text-white/80 text-sm font-medium leading-relaxed mb-10 line-clamp-2">
                  {project.description}
                </p>
                <div className="flex items-center gap-4 text-white font-black text-[10px] uppercase tracking-[0.3em] group-hover:translate-x-2 transition-all">
                  View more detail
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={3}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
