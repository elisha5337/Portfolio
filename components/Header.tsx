
import React, { useState, useEffect } from 'react';

interface HeaderProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const Header: React.FC<HeaderProps> = ({ darkMode, toggleDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Manifesto', href: '#about' },
    { name: 'Vault', href: '#projects' },
    { name: 'Stack', href: '#skills' },
    { name: 'AI Core', href: '#ai-faq' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-700 ease-in-out ${
      scrolled 
        ? 'py-4' 
        : 'py-10'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`transition-all duration-500 border rounded-[2rem] px-10 flex justify-between items-center ${
          scrolled 
            ? 'bg-[#6699cc] backdrop-blur-2xl border-white/20 shadow-[0_20px_50px_rgba(102,153,204,0.4)] h-24' 
            : 'bg-transparent border-transparent h-20'
        }`}>
          <a href="#home" className="flex items-center gap-4 group">
            <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-500 group-hover:rotate-[360deg] shadow-lg overflow-hidden ${
              scrolled ? 'bg-white' : 'bg-slate-900 dark:bg-white'
            }`}>
                <img 
                  src="https://images.unsplash.com/photo-1620288627223-53302f4e8c70?auto=format&fit=crop&q=80&w=100" 
                  alt="Logo" 
                  className="w-full h-full object-cover p-1"
                />
            </div>
            <span className={`text-xl font-black tracking-tighter transition-colors ${
              scrolled ? 'text-white' : 'text-slate-900 dark:text-white'
            }`}>PORTFOLIO.</span>
          </a>

          <nav className="hidden md:flex items-center space-x-14">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm font-black transition-all uppercase tracking-[0.3em] relative group ${
                  scrolled 
                    ? 'text-white/90 hover:text-white' 
                    : 'text-slate-500 hover:text-slate-950 dark:text-slate-400 dark:hover:text-white'
                }`}
              >
                {link.name}
                <span className={`absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-1 rounded-full transition-all group-hover:w-6 ${
                  scrolled ? 'bg-white' : 'bg-primary-600'
                }`}></span>
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={toggleDarkMode}
              className={`p-3.5 rounded-2xl transition-all text-xl ${
                scrolled 
                  ? 'bg-white/10 text-white hover:bg-white/20' 
                  : 'bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700'
              }`}
              aria-label="Toggle dark mode"
            >
              {darkMode ? '☀️' : '🌙'}
            </button>
            <a
              href="#contact"
              className={`px-12 py-5 rounded-2xl text-sm font-black uppercase tracking-widest transition-all hover:scale-105 active:scale-95 shadow-xl ${
                scrolled
                  ? 'bg-white text-[#6699cc]'
                  : 'bg-slate-900 dark:bg-white text-white dark:text-slate-950 shadow-primary-500/10'
              }`}
            >
              Initiate
            </a>
          </div>

          <div className="md:hidden flex items-center gap-4">
            <button onClick={toggleDarkMode} className="p-2 text-xl">{darkMode ? '☀️' : '🌙'}</button>
            <button onClick={() => setIsOpen(!isOpen)} className="p-2">
              <div className="space-y-1.5">
                <span className={`block h-0.5 w-6 transition-all ${
                  scrolled ? 'bg-white' : 'bg-slate-900 dark:bg-white'
                } ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                <span className={`block h-0.5 w-6 transition-all ${
                  scrolled ? 'bg-white' : 'bg-slate-900 dark:bg-white'
                } ${isOpen ? 'opacity-0' : ''}`}></span>
                <span className={`block h-0.5 w-6 transition-all ${
                  scrolled ? 'bg-white' : 'bg-slate-900 dark:bg-white'
                } ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Overlay */}
      <div className={`md:hidden fixed inset-0 bg-white dark:bg-slate-950 z-[90] transition-transform duration-700 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col items-center justify-center h-full space-y-12">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} onClick={() => setIsOpen(false)} className="text-5xl font-black uppercase tracking-tighter text-slate-900 dark:text-white">{link.name}</a>
          ))}
          <a href="#contact" onClick={() => setIsOpen(false)} className="px-14 py-6 bg-primary-600 text-white rounded-[2rem] text-lg font-black uppercase tracking-widest">Connect</a>
        </div>
      </div>
    </header>
  );
};

export default Header;
