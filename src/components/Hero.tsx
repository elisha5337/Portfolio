import React from 'react';
import { motion } from 'motion/react';
import { ArrowDown, Mail, Github, Twitter, Instagram } from 'lucide-react';
import { PERSONAL_INFO } from '../constants';

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-20 px-6 overflow-hidden">
      {/* Background Image Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=2670&auto=format&fit=crop" 
          alt="Technical Studio" 
          className="w-full h-full object-cover opacity-10 grayscale mix-blend-overlay"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-depth via-transparent to-depth/20" />
      </div>

      {/* Background Decorative Elements */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-accent/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-accent/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="relative z-10 flex flex-col items-center text-center max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-6"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-accent/10 border border-accent/20 rounded-full text-[9px] font-black text-accent uppercase tracking-[0.2em] mb-8">
            <span className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse" />
            Available for New Projects
          </div>
          <p className="text-slate-500 text-[10px] uppercase tracking-[0.5em] font-black mb-6">Expert Creative Direction</p>
          <h2 className="text-5xl md:text-8xl font-serif font-light leading-[1.05] mb-8 tracking-tighter">
            I Create Digital <br className="hidden md:block" />
            <span className="text-accent italic">Experiences</span> That <br className="hidden md:block" />
            Grow Your Business
          </h2>
          <p className="max-w-2xl mx-auto text-slate-400 text-sm md:text-base leading-relaxed mb-12 font-medium opacity-80">
            Based in Ethiopia, I specialize in high-end design, professional video editing, and modern web development solutions for forward-thinking brands.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6 w-full sm:w-auto"
        >
          <a 
            href="#portfolio" 
            className="w-full sm:w-auto px-10 py-5 bg-accent text-black font-black text-xs uppercase tracking-[0.2em] hover:bg-white transition-all shadow-2xl shadow-accent/20 rounded-sm active:scale-95"
          >
            Explore Projects
          </a>
          <a 
            href="#contact" 
            className="w-full sm:w-auto px-10 py-5 border border-white/10 text-white font-black text-xs uppercase tracking-[0.2em] hover:bg-white/5 transition-all text-center rounded-sm active:scale-95"
          >
            Start a Conversation
          </a>
        </motion.div>
      </div>

      {/* Social Rail (Recipe 11 inspired) */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute left-6 bottom-12 hidden md:flex flex-col gap-8 text-white/20"
      >
        <a href={PERSONAL_INFO.socials.instagram} target="_blank" className="hover:text-accent transition-colors"><Instagram className="w-5 h-5" /></a>
        <a href={PERSONAL_INFO.socials.tiktok} target="_blank" className="hover:text-accent transition-colors">
          <span className="text-[10px] font-black italic">Tk</span>
        </a>
        <a href={PERSONAL_INFO.socials.github} target="_blank" className="hover:text-accent transition-colors"><Github className="w-4 h-4" /></a>
        <div className="w-px h-24 bg-white/10 mx-auto" />
      </motion.div>

      {/* Scroll Down Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30"
      >
        <span className="text-[10px] font-bold uppercase tracking-[0.3em]">Scroll</span>
        <ArrowDown className="w-4 h-4" />
      </motion.div>

      {/* Side "Rail" Text (From Recipe 11) */}
      <div className="hidden xl:block absolute right-12 top-1/2 -translate-y-1/2 vertical-text text-white/5 font-serif text-8xl font-bold select-none pointer-events-none uppercase">
        Digital Excellence
      </div>
      <div className="hidden xl:block absolute left-12 top-1/2 -translate-y-1/2 vertical-text text-white/5 font-serif text-8xl font-bold select-none pointer-events-none uppercase rotate-0">
        Creative Design
      </div>
    </section>
  );
};
