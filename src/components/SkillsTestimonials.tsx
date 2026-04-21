import React from 'react';
import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';
import { SKILLS, TESTIMONIALS } from '../constants';

export const SkillsTestimonials = () => {
  return (
    <section id="skills" className="py-32 px-6 bg-depth border-t border-border relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-accent/5 blur-[150px] pointer-events-none -translate-y-1/2" />
      
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-32">
        {/* Skills Side */}
        <div>
          <div className="mb-16">
            <h2 className="text-[10px] font-black uppercase tracking-[0.5em] text-accent mb-6 leading-none">Capabilities</h2>
            <h3 className="text-4xl md:text-5xl font-serif font-light mb-8 italic">Core Inventory</h3>
            <p className="text-slate-500 text-sm font-medium leading-relaxed max-w-lg">
              A comprehensive technical toolkit refined through years of cross-disciplinary digital production.
            </p>
          </div>
          
          <div className="space-y-10">
            {SKILLS.map((skill, i) => (
              <div key={i} className="group">
                <div className="flex justify-between items-end mb-3">
                  <div className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full border border-accent group-hover:bg-accent transition-all duration-500" />
                    <span className="text-[11px] font-black uppercase tracking-widest text-white">{skill.name}</span>
                  </div>
                  <span className="text-[10px] font-black text-slate-500 tracking-tighter opacity-50">{skill.level}% Proficiency</span>
                </div>
                <div className="h-1.5 w-full bg-white/5 relative overflow-hidden rounded-sm">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ 
                      type: "spring",
                      stiffness: 40,
                      damping: 12,
                      delay: i * 0.1,
                      duration: 2 
                    }}
                    className={`absolute inset-0 h-full bg-gradient-to-r ${skill.color || 'from-accent to-accent/60'}`}
                  >
                    <motion.div 
                      initial={{ x: '-100%' }}
                      animate={{ x: '100%' }}
                      transition={{ 
                        repeat: Infinity, 
                        duration: 3, 
                        ease: "linear"
                      }}
                      className="absolute inset-0 w-1/3 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-[-30deg]"
                    />
                  </motion.div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-20 p-10 bg-panel border-l-4 border-accent shadow-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-4 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity">
              <Star className="w-32 h-32 text-accent" />
            </div>
            <h4 className="text-[11px] font-black uppercase tracking-widest mb-6 flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-accent rounded-full" /> Specialized Workflow
            </h4>
            <div className="flex flex-wrap gap-2">
              {['Adobe Creative Suite', 'Blender 3D', 'Three.js', 'Firebase Architecture', 'Motion Graphics'].map(tool => (
                <span key={tool} className="text-[9px] font-bold uppercase tracking-widest text-slate-400 bg-depth/50 border border-white/5 px-4 py-2 hover:border-accent/40 transition-colors">
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Testimonials Side */}
        <div id="testimonials" className="relative">
          <div className="mb-16">
            <h2 className="text-[10px] font-black uppercase tracking-[0.5em] text-accent mb-6">Validation</h2>
            <h3 className="text-4xl md:text-5xl font-serif font-light mb-8">Client Narrative</h3>
          </div>

          <div className="space-y-4">
            {TESTIMONIALS.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="p-12 bg-panel border border-border relative group hover:border-accent/20 transition-all duration-500 rounded-sm"
              >
                <div className="flex items-center gap-1 mb-8">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-accent text-accent opacity-80" />
                  ))}
                </div>
                
                <p className="text-base md:text-lg text-white font-serif font-light leading-relaxed mb-10 opacity-90 italic">
                  "{t.content}"
                </p>

                <div className="flex items-center gap-5">
                  <div className="w-12 h-12 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center font-black text-xs text-accent uppercase tracking-tighter">
                    {t.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div className="border-l border-white/5 pl-5">
                    <h5 className="font-black text-[11px] tracking-widest uppercase mb-1">{t.name}</h5>
                    <p className="text-accent/60 text-[9px] uppercase font-black tracking-[0.2em]">{t.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
