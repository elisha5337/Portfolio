import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { PERSONAL_INFO } from "../constants";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(() => {
    if (typeof window === "undefined") return false;

    try {
      const savedTheme = window.localStorage.getItem("theme");
      if (savedTheme) return savedTheme === "dark";
    } catch (error) {
      // Ignore storage errors and fall back to the light default.
    }

    return false;
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);

    try {
      window.localStorage.setItem("theme", isDark ? "dark" : "light");
    } catch (error) {
      // Ignore storage errors.
    }
  }, [isDark]);

  const toggleDarkMode = () => {
    setIsDark((prev) => !prev);
  };

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ];

  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 w-full bg-panel border-b border-border shadow-2xl"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-5">
        <a
          href="#"
          onClick={scrollToTop}
          className="flex items-center gap-3 group"
        >
          <div className="w-10 h-10 bg-accent rounded flex items-center justify-center font-bold text-black text-xl shadow-[0_0_20px_rgba(245,158,11,0.2)]">
            EA
          </div>
          <div>
            <h1 className="text-lg font-bold tracking-tight text-current uppercase leading-none">
              {PERSONAL_INFO.name}
            </h1>
            <p className="text-[10px] text-accent uppercase tracking-widest font-bold opacity-80">
              {PERSONAL_INFO.profession}
            </p>
          </div>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-bold uppercase tracking-widest text-slate-500 hover:text-accent transition-colors"
            >
              {link.name}
            </a>
          ))}
          <button
            onClick={toggleDarkMode}
            className="p-2 text-slate-500 hover:text-accent transition-colors cursor-pointer"
          >
            {isDark ? (
              <Sun className="w-4 h-4" />
            ) : (
              <Moon className="w-4 h-4" />
            )}
          </button>
          <a
            href="#contact"
            className="bg-accent text-black px-6 py-2.5 rounded font-bold text-xs uppercase tracking-widest hover:bg-white hover:text-black transition-all shadow-lg hover:shadow-accent/20"
          >
            Hire Me
          </a>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center gap-4">
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded border border-border"
          >
            {isDark ? (
              <Sun className="w-4 h-4" />
            ) : (
              <Moon className="w-4 h-4" />
            )}
          </button>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`p-2 transition-colors ${
              isMenuOpen ? "text-red-500 hover:text-red-400" : "text-accent"
            }`}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            className="fixed top-0 right-0 h-screen w-full max-w-xs bg-panel border-l border-border p-8 md:hidden flex flex-col pt-24"
          >
            <button
              onClick={() => setIsMenuOpen(false)}
              className="absolute top-8 right-8 p-2 text-red-500 hover:text-red-400 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
            <div className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-2xl font-serif font-light text-current hover:text-accent transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
            <a
              href="#contact"
              onClick={() => setIsMenuOpen(false)}
              className="mt-12 bg-accent text-black px-8 py-4 rounded font-bold text-center uppercase tracking-widest text-xs"
            >
              HIRE ME
            </a>

            <div className="mt-12 pt-8 border-t border-border grid grid-cols-2 gap-4">
              {Object.entries(PERSONAL_INFO.socials).map(([platform, url]) => (
                <a
                  key={platform}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[10px] font-bold uppercase tracking-widest text-slate-500 hover:text-accent transition-colors py-2"
                >
                  {platform}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
