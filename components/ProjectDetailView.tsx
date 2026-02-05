import React, { useState, useEffect } from "react";
import { Project } from "../types";

interface ProjectDetailViewProps {
  project: Project;
  onBack: () => void;
}

const ProjectDetailView: React.FC<ProjectDetailViewProps> = ({
  project,
  onBack,
}) => {
  const [selectedGalleryImage, setSelectedGalleryImage] = useState<
    string | null
  >(null);

  // Prevent body scroll when lightbox is open
  useEffect(() => {
    if (selectedGalleryImage) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedGalleryImage]);

  return (
    <section
      id="projects"
      className="py-24 bg-white dark:bg-slate-950 animate-in fade-in slide-in-from-bottom-10 duration-700"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Navigation Header */}
        <div className="mb-16 flex items-center justify-between">
          <button
            onClick={onBack}
            className="group flex items-center gap-4 px-8 py-4 bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl text-[10px] font-black uppercase tracking-[0.3em] hover:bg-[#318ce7] hover:text-white transition-all active:scale-95"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 transform group-hover:-translate-x-1 transition-transform"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={3}
                d="M7 16l-4-4m0 0l4-4m-4 4h18"
              />
            </svg>
            Back to home
          </button>
          <div className="hidden sm:flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">
              Viewing Case Study: {project.id}
            </span>
          </div>
        </div>

        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mb-24">
          <div className="order-2 lg:order-1 flex flex-col justify-center">
            <div className="flex gap-3 mb-8">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-5 py-2.5 bg-[#318ce7]/10 dark:bg-[#318ce7]/20 text-[#318ce7] text-[10px] font-black rounded-xl uppercase tracking-widest"
                >
                  {tag}
                </span>
              ))}
            </div>
            <h1 className="text-6xl md:text-8xl font-extrabold text-slate-900 dark:text-white tracking-tighter leading-[0.9] mb-12">
              {project.title.split(" ").slice(0, -1).join(" ")} <br />
              <span className="text-gradient italic">
                {project.title.split(" ").pop()}
              </span>
            </h1>
            <p className="text-2xl text-slate-500 dark:text-slate-400 font-light leading-relaxed mb-12 max-w-xl">
              {project.fullDescription}
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <a
                href={project.link}
                className="px-12 py-6 bg-slate-900 dark:bg-white text-white dark:text-slate-950 rounded-3xl font-black text-center text-[10px] uppercase tracking-[0.4em] hover:scale-105 active:scale-95 transition-all shadow-2xl"
              >
                Deployment Live
              </a>
              <a
                href={project.github}
                className="px-12 py-6 bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white rounded-3xl font-black text-center text-[10px] uppercase tracking-[0.4em] hover:bg-slate-200 dark:hover:bg-slate-700 transition-all"
              >
                Source code
              </a>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div
              className="aspect-[4/5] rounded-[4rem] overflow-hidden shadow-2xl shadow-[#318ce7]/20 border-8 border-slate-50 dark:border-slate-900 image-zoom-container relative cursor-pointer"
              onClick={() => setSelectedGalleryImage(project.image)}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 to-transparent pointer-events-none"></div>
            </div>
          </div>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-24">
          <div className="md:col-span-2">
            <h3 className="text-[10px] font-black uppercase tracking-[0.5em] text-slate-400 mb-10">
              Architectural Highlights
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {project.features.map((feature, i) => (
                <div
                  key={i}
                  className="group p-10 bg-slate-50 dark:bg-slate-900/50 rounded-[3rem] border border-slate-100 dark:border-slate-800 hover:border-[#318ce7] transition-all"
                >
                  <div className="w-12 h-12 bg-white dark:bg-slate-800 rounded-2xl flex items-center justify-center text-xl mb-8 shadow-sm group-hover:scale-110 transition-transform">
                    ✨
                  </div>
                  <p className="text-lg font-bold text-slate-900 dark:text-white leading-snug">
                    {feature}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="p-12 bg-[#318ce7] rounded-[4rem] text-white flex flex-col justify-center shadow-2xl shadow-[#318ce7]/20 relative overflow-hidden">
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
            <h4 className="text-sm font-black uppercase tracking-[0.3em] mb-8 opacity-80">
              Execution Strategy
            </h4>
            <div className="space-y-6">
              {project.tags.map((tag) => (
                <div
                  key={tag}
                  className="flex items-center justify-between pb-4 border-b border-white/10"
                >
                  <span className="font-bold tracking-tight">{tag}</span>
                  <span className="text-[9px] font-black uppercase tracking-widest px-3 py-1 bg-white/20 rounded-lg"></span>
                </div>
              ))}
            </div>
            <div className="mt-12">
              <p className="text-[10px] font-black uppercase tracking-widest opacity-60 mb-2 text-center">
                Quality Assurance
              </p>
              <div className="w-full h-1.5 bg-white/20 rounded-full overflow-hidden">
                <div className="w-full h-full bg-white animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Graphics / Gallery Card */}
        {project.gallery && project.gallery.length > 0 && (
          <div className="mt-12">
            <h3 className="text-[10px] font-black uppercase tracking-[0.5em] text-slate-400 mb-6">
              Graphics Designing — Gallery
            </h3>
            <div className="p-8 bg-slate-50 dark:bg-slate-900 rounded-[2rem] border border-slate-100 dark:border-slate-800">
              <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {project.gallery.map((img, idx) => {
                  const src = img.trim();
                  return (
                    <div
                      key={idx}
                      className="w-full h-56 sm:h-64 md:h-56 lg:h-64 rounded-xl overflow-hidden cursor-pointer transform transition-transform hover:scale-105 shadow-lg"
                      onClick={() => setSelectedGalleryImage(src)}
                    >
                      <img
                        src={src}
                        alt={`${project.title} ${idx + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {/* Lightbox */}
        {selectedGalleryImage && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-6"
            role="dialog"
            aria-modal="true"
            onClick={() => setSelectedGalleryImage(null)}
          >
            <div
              className="relative max-w-5xl w-full rounded-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedGalleryImage(null)}
                className="absolute top-4 right-4 z-50 w-10 h-10 rounded-full bg-white/90 text-slate-900 flex items-center justify-center shadow-lg"
                aria-label="Close"
              >
                ✕
              </button>
              <img
                src={selectedGalleryImage}
                alt="Enlarged preview"
                className="w-full h-[70vh] object-contain bg-black"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectDetailView;
