import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2, ArrowRight, X, Sparkles, Box, ShieldCheck } from 'lucide-react';
import { PERSONAL_INFO, SERVICES, WHY_CHOOSE_ME } from '../constants';

export const AboutServices = () => {
  const [selectedService, setSelectedService] = useState<null | typeof SERVICES[0]>(null);

  // Lock scroll when modal is open
  React.useEffect(() => {
    if (selectedService) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [selectedService]);

  return (
    <div id="about">
      {/* About Section */}
      <section className="py-24 px-6 bg-panel border-y border-border">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square bg-depth p-4 border border-border transition-all duration-700">
              <img 
                src="https://picsum.photos/seed/elsaye/800/800" 
                alt={PERSONAL_INFO.name}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-[10px] font-bold uppercase tracking-[0.4em] text-accent mb-6">Introduction</h2>
            <h3 className="text-4xl md:text-5xl font-serif font-light mb-8 leading-[1.1]">
              A Creative Partner for Your <span className="text-accent italic">Digital Evolution</span>.
            </h3>
            <p className="text-sm text-slate-400 leading-relaxed mb-8 font-medium">
              {PERSONAL_INFO.bio}
            </p>
            <div className="grid grid-cols-2 gap-y-6 mb-12">
              {WHY_CHOOSE_ME.map((item, i) => (
                <div key={i} className="flex gap-3 items-start">
                   <div className="w-1.5 h-1.5 bg-accent mt-1.5" />
                  <div>
                    <h4 className="font-bold text-xs mb-1 uppercase tracking-wider">{item.title}</h4>
                    <p className="text-slate-500 text-[11px] leading-relaxed font-medium">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <button className="px-8 py-3 bg-accent text-black font-bold text-[10px] uppercase tracking-widest hover:bg-black hover:text-white transition-colors">
              Download Credentials
            </button>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 px-6 bg-depth">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
            <div>
              <h2 className="text-[10px] font-bold uppercase tracking-[0.4em] text-accent mb-6">Expertise</h2>
              <h3 className="text-4xl md:text-5xl font-serif font-light">Service Ecosystem</h3>
            </div>
            <p className="text-slate-500 text-sm max-w-xs font-medium">Providing end-to-end digital growth through specialized creative intervention.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-1 p-1 bg-muted border border-border">
            {SERVICES.map((service, i) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                onClick={() => setSelectedService(service)}
                className="group p-0 bg-depth hover:bg-panel transition-all cursor-pointer flex flex-col h-full border border-transparent hover:border-accent/20"
              >
                <div className="w-full aspect-[16/9] overflow-hidden transition-all duration-500">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-8 flex-1 flex flex-col">
                  <div className="w-10 h-10 bg-muted rounded flex items-center justify-center mb-8 text-accent group-hover:bg-accent group-hover:text-black transition-all">
                    <service.icon className="w-5 h-5" />
                  </div>
                  <h4 className="text-sm font-bold mb-3 uppercase tracking-wider">{service.title}</h4>
                  <p className="text-slate-500 text-[11px] leading-relaxed mb-6 font-medium">
                    {service.description}
                  </p>
                  <div className="mt-auto pt-6 border-t border-border flex items-center justify-between text-[9px] font-bold text-slate-500 uppercase tracking-widest group-hover:text-accent transition-colors">
                    View Detail <ArrowRight className="w-3 h-3 text-accent" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Detail Modal */}
      <AnimatePresence>
        {selectedService && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedService(null)}
              className="absolute inset-0 bg-black/90 backdrop-blur-sm"
            />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-full max-w-2xl bg-panel border border-white/10 p-8 md:p-12 overflow-y-auto max-h-[90vh]"
            >
              <button 
                onClick={() => setSelectedService(null)}
                className="absolute top-6 right-6 w-10 h-10 bg-red-500/10 backdrop-blur-md rounded border border-red-500/20 flex items-center justify-center text-red-500 hover:bg-red-500/20 hover:text-red-400 transition-all"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-accent rounded flex items-center justify-center text-black">
                  <selectedService.icon className="w-6 h-6" />
                </div>
                <div>
                   <h2 className="text-[10px] font-bold uppercase tracking-[0.4em] text-accent mb-1">Service Detail</h2>
                   <h3 className="text-3xl font-serif font-light text-white uppercase">{selectedService.title}</h3>
                </div>
              </div>

              <div className="mb-10 w-full aspect-video overflow-hidden rounded border border-white/10">
                <img 
                  src={selectedService.image} 
                  alt={selectedService.title} 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="space-y-10">
                <div>
                  <p className="text-slate-400 text-base leading-relaxed font-medium">
                    {selectedService.description}
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <div className="flex items-center gap-2 mb-4 text-accent">
                      <Box className="w-4 h-4" />
                      <h4 className="text-[10px] font-bold uppercase tracking-widest">Deliverables</h4>
                    </div>
                    <ul className="space-y-3">
                      {selectedService.deliverables.map((item, idx) => (
                        <li key={idx} className="flex items-center gap-3 text-xs text-slate-300 font-medium">
                          <CheckCircle2 className="w-3 h-3 text-accent/50" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <div className="flex items-center gap-2 mb-4 text-accent">
                      <ShieldCheck className="w-4 h-4" />
                      <h4 className="text-[10px] font-bold uppercase tracking-widest">Business Benefits</h4>
                    </div>
                    <ul className="space-y-3">
                      {selectedService.benefits.map((item, idx) => (
                        <li key={idx} className="flex items-center gap-3 text-xs text-slate-300 font-medium">
                          <Sparkles className="w-3 h-3 text-accent/50" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row gap-4">
                   <a 
                    href="#contact" 
                    onClick={() => setSelectedService(null)}
                    className="flex-1 bg-accent text-black px-8 py-4 rounded font-bold text-center uppercase tracking-widest text-[10px] hover:bg-white transition-colors"
                   >
                    Select this Service
                   </a>
                   <button 
                    onClick={() => setSelectedService(null)}
                    className="flex-1 border border-white/10 px-8 py-4 rounded font-bold text-center uppercase tracking-widest text-[10px] hover:bg-white/5 transition-colors"
                   >
                    Close Window
                   </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};
