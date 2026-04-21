import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUp } from 'lucide-react';

export const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          onClick={scrollToTop}
          className="fixed bottom-10 right-10 z-[90] w-14 h-14 bg-depth border border-accent/20 text-accent rounded-sm flex items-center justify-center shadow-[0_20px_50px_rgba(0,0,0,0.5)] hover:border-accent hover:text-black hover:bg-accent transition-all group cursor-pointer"
        >
          <div className="flex flex-col items-center gap-0.5">
            <ArrowUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
            <span className="text-[7px] font-black uppercase tracking-tighter">Top</span>
          </div>
        </motion.button>
      )}
    </AnimatePresence>
  );
};
