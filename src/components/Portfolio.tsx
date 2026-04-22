import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, X, ArrowRight, Layers, Maximize2 } from 'lucide-react';
import { PROJECTS } from '../constants';
import { BeforeAfterSlider } from './BeforeAfterSlider';

type CategoryName =
  | 'Web Development'
  | 'Mobile App Development'
  | 'Logo Design'
  | 'Photo Editing'
  | 'Graphics Design';

type CategoryTheme = {
  selectorTitle: string;
  selectorDescription: string;
  selectorLine: string;
  projectSurface: string;
  projectBorder: string;
  projectOverlay: string;
  projectLabel: string;
  projectLine: string;
  projectPlus: string;
};

const CATEGORY_ORDER: CategoryName[] = [
  'Web Development',
  'Mobile App Development',
  'Logo Design',
  'Photo Editing',
  'Graphics Design',
];

const CATEGORY_THEMES: Record<CategoryName, CategoryTheme> = {
  'Web Development': {
    selectorTitle: 'text-slate-900',
    selectorDescription: 'Responsive websites, dashboards, and custom tools built with clean structure and fast user flows.',
    selectorLine: 'bg-cyan-400/40',
    projectSurface: 'bg-white',
    projectBorder: 'border-slate-200',
    projectOverlay: 'from-black/90 via-black/20 to-black/95',
    projectLabel: 'text-slate-500',
    projectLine: 'bg-slate-300',
    projectPlus: 'bg-slate-100 text-slate-700',
  },
  'Mobile App Development': {
    selectorTitle: 'text-slate-900',
    selectorDescription: 'Touch-first app interfaces, smooth interactions, and mobile layouts designed for everyday use.',
    selectorLine: 'bg-emerald-400/40',
    projectSurface: 'bg-white',
    projectBorder: 'border-slate-200',
    projectOverlay: 'from-black/90 via-black/20 to-black/95',
    projectLabel: 'text-slate-500',
    projectLine: 'bg-slate-300',
    projectPlus: 'bg-slate-100 text-slate-700',
  },
  'Logo Design': {
    selectorTitle: 'text-slate-900',
    selectorDescription: 'Simple brand marks and identity concepts focused on clarity, memorability, and visual balance.',
    selectorLine: 'bg-amber-400/40',
    projectSurface: 'bg-white',
    projectBorder: 'border-slate-200',
    projectOverlay: 'from-black/90 via-black/20 to-black/95',
    projectLabel: 'text-slate-500',
    projectLine: 'bg-slate-300',
    projectPlus: 'bg-slate-100 text-slate-700',
  },
  'Photo Editing': {
    selectorTitle: 'text-slate-900',
    selectorDescription: 'Retouching, color correction, and before-and-after editing with precise detail control.',
    selectorLine: 'bg-violet-400/40',
    projectSurface: 'bg-white',
    projectBorder: 'border-slate-200',
    projectOverlay: 'from-black/90 via-black/20 to-black/95',
    projectLabel: 'text-slate-500',
    projectLine: 'bg-slate-300',
    projectPlus: 'bg-slate-100 text-slate-700',
  },
  'Graphics Design': {
    selectorTitle: 'text-slate-900',
    selectorDescription: 'Posters, flyers, banners, and promotional visuals with strong hierarchy and clear impact.',
    selectorLine: 'bg-rose-400/40',
    projectSurface: 'bg-white',
    projectBorder: 'border-slate-200',
    projectOverlay: 'from-black/90 via-black/20 to-black/95',
    projectLabel: 'text-slate-500',
    projectLine: 'bg-slate-300',
    projectPlus: 'bg-slate-100 text-slate-700',
  },
};

const getCategoryTheme = (category: string) =>
  CATEGORY_THEMES[category as CategoryName] ?? CATEGORY_THEMES['Web Development'];

export const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState<null | typeof PROJECTS[0]>(null);
  const [expandedVisualProject, setExpandedVisualProject] = useState<null | typeof PROJECTS[0]>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  const groupedSections = CATEGORY_ORDER.map((category) => {
    const theme = getCategoryTheme(category);
    const projects = PROJECTS.filter((project) => project.category === category);

    return {
      category,
      theme,
      projects,
    };
  }).filter((section) => section.projects.length > 0);

  const closeSelectedProject = () => {
    setSelectedProject(null);
    setExpandedVisualProject(null);
  };

  const closeExpandedVisualProject = () => {
    setExpandedVisualProject(null);
  };

  const openVisualFullscreen = () => {
    if (selectedProject) {
      setExpandedVisualProject(selectedProject);
    }
  };

  // Lock scroll while the modal is open.
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [selectedProject]);

  useEffect(() => {
    if (!selectedProject) {
      setExpandedVisualProject(null);
    }
  }, [selectedProject]);

  return (
    <section id="portfolio" ref={sectionRef} className="py-24 px-6 bg-white transition-colors scroll-mt-20">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div>
            <h2 className="text-[10px] font-bold uppercase tracking-[0.4em] text-accent mb-6">Works</h2>
            <h3 className="text-4xl md:text-5xl font-serif font-light">Portfolio Index</h3>
          </div>

          <div className="max-w-xl">
            <p className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.35em] text-accent mb-2">
              Topics
            </p>
            <p className="text-[9px] md:text-[10px] font-medium uppercase tracking-[0.35em] text-slate-500">
              Each topic is listed below with its matching projects
            </p>
          </div>
        </div>

        <div className="space-y-14">
          {groupedSections.map(({ category, theme, projects }) => {
            const isVisualProject = ['Logo Design', 'Photo Editing', 'Graphics Design'].includes(category);

            return (
              <motion.section
                key={category}
                layout
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.55 }}
                className="space-y-5"
              >
                <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
                  <div className="min-w-0">
                    <p className={`text-[9px] font-black uppercase tracking-[0.35em] ${theme.projectLabel}`}>
                      {projects.length} Projects
                    </p>
                    <h4 className={`mt-2 text-5xl md:text-7xl font-serif font-light leading-none tracking-tight ${theme.selectorTitle}`}>
                      {category}
                    </h4>
                    <p className="mt-3 max-w-2xl text-[11px] md:text-sm leading-relaxed text-slate-500">
                      {theme.selectorDescription}
                    </p>
                  </div>

                  <div className={`hidden md:block h-px flex-1 self-center ${theme.selectorLine} opacity-60`} />
                </div>

                <motion.div
                  layout
                  className="grid md:grid-cols-2 gap-1 bg-white border border-slate-200 p-1"
                >
                  <AnimatePresence mode="popLayout">
                    {projects.map((project) => (
                      <motion.div
                        key={project.id}
                        layout
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedProject(project)}
                        className="group relative aspect-video bg-white overflow-hidden cursor-pointer p-4"
                      >
                        <div className={`w-full h-full relative overflow-hidden flex items-center justify-center border transition-colors ${theme.projectSurface} ${theme.projectBorder}`}>
                          <img 
                            src={project.image} 
                            alt={project.title}
                            className={`transition-transform duration-700 ease-out group-hover:scale-105 ${
                              isVisualProject
                                ? 'max-w-[90%] max-h-[90%] w-auto h-auto object-contain drop-shadow-2xl'
                                : 'w-full h-full object-cover'
                            }`}
                            referrerPolicy="no-referrer"
                          />
                          
                          {/* Content Overlay */}
                          <div className={`absolute inset-0 bg-gradient-to-t ${theme.projectOverlay} transition-opacity duration-500 ${
                            isVisualProject
                              ? 'opacity-0 group-hover:opacity-100'
                              : 'opacity-70 group-hover:opacity-100'
                          }`} />
                          
                          <div className="absolute inset-0 p-8 flex flex-col justify-end">
                            <p className={`text-[9px] ${theme.projectLabel} font-bold uppercase tracking-[0.4em] mb-3 transform translate-y-0 opacity-100 transition-all duration-500`}>
                              {project.category}
                            </p>
                            <h4 className="text-lg md:text-xl font-serif font-light text-white mb-2 transform translate-y-0 opacity-100 transition-all duration-500">
                              {project.title}
                            </h4>
                            
                            {/* Expandable description container */}
                            <div className="relative overflow-hidden transition-all duration-500 max-h-4 group-hover:max-h-24">
                              <p className="text-[10px] text-white/70 leading-relaxed font-medium">
                                {project.description}
                              </p>
                            </div>

                            <motion.div 
                              className={`h-0.5 ${theme.projectLine} w-12 mt-4 group-hover:w-full transition-all duration-700`} 
                            />
                          </div>

                          {/* Comparison Badge */}
                          {project.category === 'Photo Editing' && (project as any).beforeImage && (
                            <div className="absolute top-6 left-6 z-10">
                              <div className="flex items-center gap-1.5 rounded-sm border border-slate-200 bg-white/95 px-2 py-1 text-[7px] font-black uppercase tracking-[0.2em] text-slate-700 shadow-lg">
                                <Plus className="w-2.5 h-2.5" /> Comparison Study
                              </div>
                            </div>
                          )}

                          <div className="absolute top-6 right-6">
                            <div className={`w-10 h-10 rounded-full ${theme.projectPlus} flex items-center justify-center shadow-2xl transition-all duration-500 hover:scale-110 active:scale-95`}>
                              <Plus className="w-5 h-5" />
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </motion.div>
              </motion.section>
            );
          })}
        </div>
      </div>

      {/* Desktop/Tablet/Mobile Responsive Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-0 md:p-8 overflow-hidden">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeSelectedProject}
              className="absolute inset-0 bg-black/98 backdrop-blur-xl"
            />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.98, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.98, y: 20 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full h-full md:h-auto md:max-h-[92vh] max-w-[96rem] bg-panel border-y md:border border-white/5 flex flex-col md:flex-row overflow-hidden shadow-2xl md:rounded-3xl z-[110]"
            >
              {/* Universal Close Handle */}
              <button 
                onClick={closeSelectedProject}
                className="absolute top-6 right-6 z-[150] w-12 h-12 bg-red-500/10 hover:bg-red-500/20 hover:text-red-400 rounded-full border border-red-500/20 flex items-center justify-center text-red-500 transition-all backdrop-blur-md group/close"
              >
                <X className="w-5 h-5 transition-transform group-hover/close:rotate-90" />
              </button>

              {/* Viewport Area: Representing the Creative Work */}
              <div className="w-full md:w-[68%] lg:w-[70%] bg-depth relative flex flex-col h-[48vh] md:h-auto border-b md:border-b-0 md:border-r border-white/5 shrink-0">
                
                {/* Visual Content Stage */}
                <div className="flex-1 relative flex flex-col items-center justify-center p-3 md:p-8 overflow-hidden">
                  <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
                  {(selectedProject.category === 'Photo Editing' || selectedProject.category === 'Graphics Design' || selectedProject.category === 'Logo Design') && (
                    <button
                      type="button"
                      onClick={openVisualFullscreen}
                      aria-label="Open fullscreen preview"
                      className="absolute bottom-4 right-4 z-20 inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/65 px-3 py-2 text-[9px] font-black uppercase tracking-[0.25em] text-white/80 backdrop-blur-md transition-all hover:border-accent/40 hover:bg-accent hover:text-black md:bottom-auto md:top-4"
                    >
                      <Maximize2 className="h-3.5 w-3.5" />
                      Full Screen
                    </button>
                  )}
                  
                  {/* Photo Editing Logic */}
                  {selectedProject.category === 'Photo Editing' && (selectedProject as any).beforeImage && (selectedProject as any).afterImage ? (
                    <div className="relative w-full h-full flex flex-col">
                      <div className="absolute top-4 left-4 md:top-10 md:left-10 z-10 pointer-events-none">
                        <p className="text-[7px] md:text-[9px] font-black text-accent uppercase tracking-[0.4em] mb-1">Editor Suite</p>
                        <div className="h-[1px] w-4 md:w-6 bg-accent" />
                      </div>

                      <div className="relative flex-1 min-h-0">
                        <BeforeAfterSlider
                          before={(selectedProject as any).beforeImage}
                          after={(selectedProject as any).afterImage}
                        />
                      </div>
                    </div>
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center">
                      <img 
                        src={selectedProject.image} 
                        alt={selectedProject.title}
                        className={`transition-all duration-700 ${
                          selectedProject.category === 'Logo Design' || selectedProject.category === 'Photo Editing' || selectedProject.category === 'Graphics Design'
                            ? 'max-w-[95%] max-h-full object-contain drop-shadow-[0_15px_40px_rgba(0,0,0,1)] rounded-sm'
                            : 'w-full h-full object-cover shadow-2xl'
                        }`}
                        referrerPolicy="no-referrer"
                      />
                    </div>
                  )}
                </div>

                {/* Instruction Banner - Bottom Fixed */}
                {selectedProject.category === 'Photo Editing' && (
                  <div className="bg-accent/5 border-t border-accent/10 px-4 py-3 text-center hidden md:block">
                     <p className="text-[8px] md:text-[10px] font-black text-accent uppercase tracking-[0.3em] md:tracking-[0.5em] animate-pulse">
                       Interactive Portfolio: Use the eye button for instant preview and drag the slider to compare
                     </p>
                  </div>
                )}
              </div>

              {/* Context Area: Detailed Information */}
              <div className="flex-1 bg-panel overflow-hidden">
                <ProjectDetails 
                  project={selectedProject} 
                  onClose={closeSelectedProject} 
                />
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {expandedVisualProject && (
          <div className="fixed inset-0 z-[200] flex items-center justify-center p-0">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeExpandedVisualProject}
              className="absolute inset-0 bg-black/95 backdrop-blur-xl"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.985, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.985, y: 16 }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              role="dialog"
              aria-modal="true"
              className="relative flex h-full w-full flex-col overflow-hidden bg-black shadow-2xl"
            >
              <button
                onClick={closeExpandedVisualProject}
                className="absolute top-4 right-4 z-20 flex h-12 w-12 items-center justify-center rounded-full border border-red-500/20 bg-red-500/10 text-red-500 transition-all hover:bg-red-500/20 hover:text-red-400"
              >
                <X className="h-5 w-5 transition-transform hover:rotate-90" />
              </button>

              <div className="flex h-full flex-1 flex-col p-4 sm:p-6 lg:p-8">
                <div className="mb-4 flex items-center justify-between gap-4 text-[9px] font-black uppercase tracking-[0.35em] text-accent/70">
                  <span>{expandedVisualProject.category}</span>
                  <span>{expandedVisualProject.title}</span>
                </div>

                {expandedVisualProject.category === 'Photo Editing' && (expandedVisualProject as any).beforeImage && (expandedVisualProject as any).afterImage ? (
                  <div className="flex h-full min-h-0 flex-col gap-4">
                    <p className="text-[9px] font-black uppercase tracking-[0.35em] text-white/45">
                      Use the eye button for instant preview and drag to compare
                    </p>
                    <div className="relative min-h-0 flex-1 overflow-hidden rounded-[1.5rem] border border-white/10 bg-black">
                      <BeforeAfterSlider
                        before={(expandedVisualProject as any).beforeImage}
                        after={(expandedVisualProject as any).afterImage}
                      />
                    </div>
                  </div>
                ) : (
                  <div className="flex h-full items-center justify-center overflow-hidden rounded-[1.5rem] border border-white/10 bg-black p-2 sm:p-4">
                    <img
                      src={expandedVisualProject.image}
                      alt={expandedVisualProject.title}
                      className="max-h-full max-w-full object-contain"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

interface ProjectDetailsProps {
  project: typeof PROJECTS[0];
  onClose: () => void;
}

const ProjectDetails = ({ project, onClose }: ProjectDetailsProps) => {
  const p = project as any;
  return (
    <div className="flex flex-col h-full overflow-y-auto custom-scrollbar">
      <div className="p-5 md:p-12">
        <div className="mb-6 md:mb-10">
          <div className="inline-flex items-center gap-2 px-2 py-0.5 md:px-3 md:py-1 bg-accent/10 border border-accent/20 rounded text-[8px] md:text-[10px] font-black text-accent uppercase tracking-[0.2em] mb-4 md:mb-6">
            <Layers className="w-2.5 h-2.5 md:w-3 md:h-3" /> {project.category}
          </div>
          <h3 className="text-2xl md:text-5xl font-serif font-light text-white mb-4 md:mb-6 uppercase leading-tight md:leading-[0.95] tracking-tight">
            {project.title}
          </h3>
          <p className="text-xs md:text-base text-slate-400 font-medium leading-relaxed max-w-prose">
            {project.description}
          </p>
        </div>

        <div className="space-y-6 md:space-y-12 mb-10 md:mb-16">
          {p.objective && (
            <div className="group/item">
              <h4 className="text-[8px] md:text-[10px] font-black text-accent uppercase tracking-[0.3em] mb-2 md:mb-4 flex items-center gap-3">
                <span className="w-6 h-px bg-accent/30 group-hover/item:w-10 transition-all" /> Objective
              </h4>
              <p className="text-[11px] md:text-sm text-slate-300 font-medium leading-relaxed italic border-l border-white/5 pl-3 md:pl-4">
                {p.objective}
              </p>
            </div>
          )}
          
          {p.challenge && (
            <div className="group/item">
              <h4 className="text-[8px] md:text-[10px] font-black text-accent uppercase tracking-[0.3em] mb-2 md:mb-4 flex items-center gap-3">
                <span className="w-6 h-px bg-accent/30 group-hover/item:w-10 transition-all" /> Challenge
              </h4>
              <p className="text-[11px] md:text-sm text-slate-300 font-medium leading-relaxed border-l border-white/5 pl-3 md:pl-4">
                {p.challenge}
              </p>
            </div>
          )}

          {p.outcome && (
            <div className="group/item">
              <h4 className="text-[8px] md:text-[10px] font-black text-accent uppercase tracking-[0.3em] mb-2 md:mb-4 flex items-center gap-3">
                <span className="w-6 h-px bg-accent/30 group-hover/item:w-10 transition-all" /> Outcome
              </h4>
              <p className="text-[11px] md:text-sm text-slate-300 font-medium leading-relaxed border-l border-white/5 pl-3 md:pl-4">
                {p.outcome}
              </p>
            </div>
          )}
        </div>

        <div className="space-y-8 md:space-y-10">
          <div className="hidden sm:block">
            <h4 className="text-[10px] font-black text-white uppercase tracking-[0.3em] mb-6">Built With</h4>
            <div className="flex flex-wrap gap-2.5">
              {project.tools.map((tool) => (
                <span key={tool} className="px-4 py-2 bg-depth/50 border border-white/5 text-[9px] font-black uppercase tracking-widest text-white/50 rounded hover:text-accent hover:border-accent/30 transition-colors">
                  {tool}
                </span>
              ))}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4">
            {!(project.category === 'Photo Editing' || project.category === 'Graphics Design') && (
              <button className="w-full sm:flex-1 inline-flex items-center justify-center gap-3 md:gap-4 text-[9px] md:text-[10px] font-black text-accent uppercase tracking-[0.3em] md:tracking-[0.4em] group/btn py-4 md:py-5 border border-accent/20 hover:bg-accent hover:text-black transition-all relative overflow-hidden">
                <span className="relative z-10">Launch Project</span>
                <ArrowRight className="w-3.5 h-3.5 md:w-4 md:h-4 relative z-10 group-hover/btn:translate-x-2 transition-transform" />
              </button>
            )}
            
            <button 
              onClick={onClose}
              className={`w-full ${!(project.category === 'Photo Editing' || project.category === 'Graphics Design') ? 'sm:w-auto' : 'sm:flex-1'} inline-flex items-center justify-center gap-3 px-8 py-4 md:py-5 text-[9px] md:text-[10px] font-black text-white/30 hover:text-white uppercase tracking-widest border border-white/5 hover:border-white/10 transition-all cursor-pointer`}
              id="desktop-close-btn"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
