import React from 'react';
import { motion } from 'motion/react';
import { Send, Instagram, ArrowUpRight, Github } from 'lucide-react';
import { PERSONAL_INFO } from '../constants';

export const ContactFooter = () => {
  const [formState, setFormState] = React.useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormState('sending');
    
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    const formId = (import.meta as any).env.VITE_FORMSPREE_ID || 'xeevlrwq';

    try {
      const response = await fetch(`https://formspree.io/f/${formId}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setFormState('success');
        (e.target as HTMLFormElement).reset();
      } else {
        setFormState('error');
      }
    } catch (error) {
      setFormState('error');
    }
  };

  return (
    <div id="contact">
      {/* Contact Section */}
      <section className="py-24 px-6 border-t border-border bg-depth">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-[10px] font-bold uppercase tracking-[0.4em] text-accent mb-6">Get In Touch</h2>
            <h3 className="text-4xl md:text-5xl font-serif font-light mb-6">
              Let's <span className="text-accent italic">Connect.</span>
            </h3>
            <p className="text-slate-400 text-sm font-medium max-w-lg mx-auto">
              I'm currently open to new opportunities and freelance collaborations.
            </p>
          </div>

          <div className="grid lg:grid-cols-5 gap-12 items-start">
            {/* Form Column */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-3 p-10 bg-panel border border-border shadow-2xl rounded-2xl relative"
            >
              {formState === 'success' ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-20 text-center space-y-6"
                >
                  <div className="w-20 h-20 bg-accent/20 rounded-full flex items-center justify-center mx-auto text-accent">
                    <Send className="w-10 h-10" />
                  </div>
                  <h4 className="text-2xl font-serif">Message Sent!</h4>
                  <p className="text-slate-400 text-sm">Thank you for reaching out. I'll get back to you shortly.</p>
                  <button 
                    onClick={() => setFormState('idle')}
                    className="text-[10px] font-bold uppercase tracking-widest text-accent hover:underline"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[9px] font-bold uppercase tracking-widest text-slate-500 ml-1">Name</label>
                      <input name="name" type="text" placeholder="Your Name" required className="w-full bg-depth/50 border border-border text-[11px] p-4 rounded-xl outline-none focus:border-accent focus:bg-depth transition-all" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[9px] font-bold uppercase tracking-widest text-slate-500 ml-1">Email</label>
                      <input name="email" type="email" placeholder="email@example.com" required className="w-full bg-depth/50 border border-border text-[11px] p-4 rounded-xl outline-none focus:border-accent focus:bg-depth transition-all" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[9px] font-bold uppercase tracking-widest text-slate-500 ml-1">Message</label>
                    <textarea name="message" rows={5} placeholder="Tell me about your project..." required className="w-full bg-depth/50 border border-border text-[11px] p-4 rounded-xl outline-none focus:border-accent focus:bg-depth transition-all resize-none"></textarea>
                  </div>
                  <button 
                    type="submit" 
                    disabled={formState === 'sending'}
                    className={`w-full py-5 font-bold text-[10px] uppercase tracking-[0.3em] transition-all cursor-pointer shadow-xl rounded-xl active:scale-[0.98] ${
                      formState === 'sending' ? 'bg-slate-700 text-white cursor-wait' : 'bg-accent text-black hover:bg-white hover:text-black'
                    }`}
                  >
                    {formState === 'sending' ? 'Sending...' : 'Send Message'}
                  </button>
                  {formState === 'error' && (
                    <div className="space-y-2 text-center">
                      <p className="text-[10px] text-red-500 font-bold uppercase tracking-widest">
                        Submission Failed
                      </p>
                      <p className="text-[9px] text-slate-500 uppercase tracking-tighter">
                        Please ensure VITE_FORMSPREE_ID is set in Settings {!(import.meta as any).env.VITE_FORMSPREE_ID && '(Missing ID)'}
                      </p>
                    </div>
                  )}
                </form>
              )}
            </motion.div>

            {/* Social Grid Column */}
            <div className="lg:col-span-2 space-y-6">
              <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500 mb-4 px-2">Social Channels</h4>
              <div className="grid gap-4">
                <a 
                  href={PERSONAL_INFO.socials.telegram}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group p-5 bg-panel border border-border hover:border-accent/40 rounded-2xl transition-all flex items-center justify-between"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-blue-500/10 rounded-lg flex items-center justify-center text-blue-500">
                      <Send className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-widest">Telegram</p>
                      <p className="text-[10px] text-slate-500 font-medium">@onetruthlife</p>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-slate-600 group-hover:text-accent transform group-hover:-translate-y-1 group-hover:translate-x-1 transition-all" />
                </a>

                <a 
                  href={PERSONAL_INFO.socials.instagram}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group p-5 bg-panel border border-border hover:border-accent/40 rounded-2xl transition-all flex items-center justify-between"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-purple-500/10 rounded-lg flex items-center justify-center text-purple-500">
                      <Instagram className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-widest">Instagram</p>
                      <p className="text-[10px] text-slate-500 font-medium">@elishaarba</p>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-slate-600 group-hover:text-accent transform group-hover:-translate-y-1 group-hover:translate-x-1 transition-all" />
                </a>

                <a 
                  href={PERSONAL_INFO.socials.github}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group p-5 bg-panel border border-border hover:border-accent/40 rounded-2xl transition-all flex items-center justify-between"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-slate-500/10 rounded-lg flex items-center justify-center text-white">
                      <Github className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-widest">GitHub</p>
                      <p className="text-[10px] text-slate-500 font-medium">@elisha5337</p>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-slate-600 group-hover:text-accent transform group-hover:-translate-y-1 group-hover:translate-x-1 transition-all" />
                </a>

                <a 
                  href={PERSONAL_INFO.socials.tiktok}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group p-5 bg-panel border border-border hover:border-accent/40 rounded-2xl transition-all flex items-center justify-between"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-pink-500/10 rounded-lg flex items-center justify-center text-pink-500">
                      <span className="font-black italic text-base">T</span>
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-widest">TikTok</p>
                      <p className="text-[10px] text-slate-500 font-medium">@elishaelegant</p>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-slate-600 group-hover:text-accent transform group-hover:-translate-y-1 group-hover:translate-x-1 transition-all" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-8 border-t border-border bg-depth">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 text-[9px] text-slate-500 uppercase tracking-widest font-bold">
          <div>
            © 2024 {PERSONAL_INFO.name}. All rights reserved.
          </div>
          
          <div className="flex gap-8">
            <a href="#" className="hover:text-accent transition-colors">Privacy</a>
            <a href="#" className="hover:text-accent transition-colors">Terms</a>
          </div>
          
          <div className="flex items-center gap-1">
            <span className="opacity-20">Studio Core</span> v1.0
          </div>
        </div>
      </footer>
    </div>
  );
};
