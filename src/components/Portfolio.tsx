import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ExternalLink, Plus, X, ArrowRight, MousePointer2, Eye, EyeOff, Layers } from 'lucide-react';
import { PROJECTS } from '../constants';

export const Portfolio = () => {
  const [filter, setFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState<null | typeof PROJECTS[0]>(null);
  const [showAfter, setShowAfter] = useState(true);
  const sectionRef = useRef<HTMLDivElement>(null);
  
  const categories = ['All', ...new Set(PROJECTS.map(p => p.category))];

  const filteredProjects = filter === 'All' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === filter);

  const handleFilterChange = (cat: string) => {
    setFilter(cat);
    sectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  // Lock scroll and reset toggle when modal is open/closed
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
      setShowAfter(true);
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [selectedProject]);

  return (
    <section id="portfolio" ref={sectionRef} className="py-24 px-6 bg-depth transition-colors scroll-mt-20">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div>
            <h2 className="text-[10px] font-bold uppercase tracking-[0.4em] text-accent mb-6">Works</h2>
            <h3 className="text-4xl md:text-5xl font-serif font-light">Portfolio Index</h3>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => handleFilterChange(cat)}
                className={`px-5 py-2 rounded text-[10px] font-bold uppercase tracking-widest transition-all cursor-pointer ${
                  filter === cat 
                    ? 'bg-accent text-black underline underline-offset-4' 
                    : 'text-slate-500 hover:text-accent'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <motion.div 
          layout
          className="grid md:grid-cols-2 lg:grid-cols-2 gap-1 bg-muted border border-border p-1"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedProject(project)}
                className="group relative aspect-video bg-depth overflow-hidden cursor-pointer p-4"
              >
                <div className={`w-full h-full relative overflow-hidden flex items-center justify-center border border-border transition-colors ${
                  project.category.toLowerCase().includes('design') || project.category.toLowerCase().includes('editing')
                    ? 'bg-depth/40 group-hover:bg-depth/20'
                    : 'bg-panel'
                }`}>
                   <img 
                    src={project.image} 
                    alt={project.title}
                    className={`transition-transform duration-700 ease-out group-hover:scale-105 ${
                      project.category.toLowerCase().includes('design') || project.category.toLowerCase().includes('editing')
                        ? 'max-w-[90%] max-h-[90%] w-auto h-auto object-contain drop-shadow-2xl'
                        : 'w-full h-full object-cover'
                    }`}
                    referrerPolicy="no-referrer"
                  />
                  
                  {/* Subtle Grain/Texture Overlay for Design Stages */}
                  {(project.category.toLowerCase().includes('design') || project.category.toLowerCase().includes('editing')) && (
                    <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
                  )}
                  
                  {/* Content Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-t from-black/95 via-black/20 to-transparent transition-opacity duration-500 ${
                    project.category.toLowerCase().includes('design') || project.category.toLowerCase().includes('editing')
                      ? 'opacity-0 group-hover:opacity-100'
                      : 'opacity-70 group-hover:opacity-100'
                  }`} />
                  
                  <div className="absolute inset-0 p-8 flex flex-col justify-end">
                    <p className="text-[9px] text-accent font-bold uppercase tracking-[0.4em] mb-3 transform translate-y-0 opacity-100 transition-all duration-500">
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
                      className="h-0.5 bg-accent/30 w-12 mt-4 group-hover:w-full transition-all duration-700" 
                    />
                  </div>

                  {/* Comparison Badge */}
                  {project.category === 'Photo Editing' && (project as any).beforeImage && (
                    <div className="absolute top-6 left-6 z-10">
                      <div className="bg-accent/90 backdrop-blur-md text-black text-[7px] font-black uppercase tracking-[0.2em] px-2 py-1 rounded-sm shadow-xl flex items-center gap-1.5">
                        <Plus className="w-2.5 h-2.5" /> Comparison Study
                      </div>
                    </div>
                  )}

                  <div className="absolute top-6 right-6">
                    <div className="w-10 h-10 rounded-full bg-accent text-black flex items-center justify-center shadow-2xl transition-all duration-500 hover:scale-110 active:scale-95">
                      <Plus className="w-5 h-5" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <div className="mt-20 flex justify-center">
          <button className="px-12 py-4 border border-border text-slate-500 font-bold text-[10px] uppercase tracking-widest hover:bg-accent hover:text-black hover:border-accent transition-all cursor-pointer">
            See All Case Studies
          </button>
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
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-black/98 backdrop-blur-xl"
            />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.98, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.98, y: 20 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full h-full md:h-auto md:max-h-[90vh] max-w-7xl bg-panel border-y md:border border-white/5 flex flex-col md:flex-row overflow-hidden shadow-2xl md:rounded-3xl z-[110]"
            >
              {/* Universal Close Handle */}
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 z-[150] w-12 h-12 bg-white/5 hover:bg-accent hover:text-black rounded-full border border-white/10 flex items-center justify-center text-white transition-all backdrop-blur-md group/close"
              >
                <X className="w-5 h-5 transition-transform group-hover/close:rotate-90" />
              </button>

              {/* Viewport Area: Representing the Creative Work */}
              <div className="w-full md:w-[62%] bg-depth relative flex flex-col h-[35vh] md:h-auto border-b md:border-b-0 md:border-r border-white/5 shrink-0">
                
                {/* Visual Content Stage */}
                <div className="flex-1 relative flex flex-col items-center justify-center p-4 md:p-12 overflow-hidden">
                  <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
                  
                  {/* Photo Editing Logic */}
                  {selectedProject.category === 'Photo Editing' && (selectedProject as any).beforeImage && (selectedProject as any).afterImage ? (
                    <div className="w-full h-full flex flex-col">
                      <div className="absolute top-4 left-4 md:top-10 md:left-10 z-10 pointer-events-none">
                        <p className="text-[7px] md:text-[9px] font-black text-accent uppercase tracking-[0.4em] mb-1">Editor Suite</p>
                        <div className="h-[1px] w-4 md:w-6 bg-accent" />
                      </div>

                      <div 
                        className="relative flex-1 flex items-center justify-center cursor-crosshair select-none group/canvas min-h-0"
                        onClick={() => setShowAfter(!showAfter)}
                      >
                        <img 
                          src={showAfter ? (selectedProject as any).afterImage : (selectedProject as any).beforeImage} 
                          alt="Process Preview"
                          className="max-w-[95%] max-h-full object-contain rounded-sm drop-shadow-[0_10px_30px_rgba(0,0,0,0.9)]"
                          referrerPolicy="no-referrer"
                        />

                        {/* Interactive Hint */}
                        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-0 group-hover/canvas:opacity-100 transition-all duration-500 transform translate-y-2 group-hover/canvas:translate-y-0">
                           <div className="bg-accent text-black px-4 py-1.5 rounded-full text-[8px] font-black uppercase tracking-[0.2em] shadow-2xl flex items-center gap-2">
                             <MousePointer2 className="w-2.5 h-2.5" /> Toggle
                           </div>
                        </div>
                      </div>

                      <div className="mt-2 md:mt-8 flex items-center justify-between px-2">
                        <div className="flex items-center gap-2 md:gap-4">
                          <div className="flex bg-white/5 p-0.5 md:p-1 rounded-full border border-white/5">
                            <button 
                              onClick={() => setShowAfter(false)}
                              className={`px-3 md:px-6 py-1 md:py-2 rounded-full text-[7px] md:text-[9px] font-black uppercase tracking-widest transition-all ${!showAfter ? 'bg-accent text-black shadow-xl' : 'text-slate-500 hover:text-white'}`}
                            >
                              RAW
                            </button>
                            <button 
                              onClick={() => setShowAfter(true)}
                              className={`px-3 md:px-6 py-1 md:py-2 rounded-full text-[7px] md:text-[9px] font-black uppercase tracking-widest transition-all ${showAfter ? 'bg-accent text-black shadow-xl' : 'text-slate-500 hover:text-white'}`}
                            >
                              EDITED
                            </button>
                          </div>
                          
                          <div className="h-4 md:h-6 w-px bg-white/10 hidden sm:block" />
                          
                          <p className="hidden md:block text-[9px] font-bold text-slate-500 uppercase tracking-widest">
                            Ability check: <span className="text-accent underline underline-offset-4 decoration-accent/30">{showAfter ? 'Post-Processing' : 'Input Analysis'}</span>
                          </p>
                        </div>

                        <button 
                          onClick={() => setShowAfter(!showAfter)}
                          className={`w-8 h-8 md:w-12 md:h-12 rounded-full flex items-center justify-center transition-all ${showAfter ? 'bg-accent text-black' : 'bg-white/5 text-white shadow-inner border border-white/10'}`}
                        >
                          {showAfter ? <Eye className="w-4 h-4 md:w-5 md:h-5 text-black" /> : <EyeOff className="w-4 h-4 md:w-5 md:h-5 opacity-40 text-white" />}
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center">
                      <img 
                        src={selectedProject.image} 
                        alt={selectedProject.title}
                        className={`transition-all duration-700 ${
                          selectedProject.category.toLowerCase().includes('design') || selectedProject.category.toLowerCase().includes('editing')
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
                       Interactive Portfolio: Select states to witness the transformation
                     </p>
                  </div>
                )}
              </div>

              {/* Context Area: Detailed Information */}
              <div className="flex-1 bg-panel overflow-hidden">
                <ProjectDetails 
                  project={selectedProject} 
                  onClose={() => setSelectedProject(null)} 
                />
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
