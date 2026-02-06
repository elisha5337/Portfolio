import React from "react";
import logoImg from "../src/myLogo.png";
const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: "Facebook", url: "https://web.facebook.com/?_rdc=1&_rdr#" },
    { name: "Instagram", url: "https://www.instagram.com/elishaarba/" },
    { name: "Telegram", url: "https://t.me/onetruthlife" },
    { name: "TikTok", url: "https://www.tiktok.com/@elishaelegant" },
  ];

  return (
    <footer className="py-24 border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start gap-16">
          <div className="flex flex-col gap-8 max-w-sm">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-cornflower rounded-2xl flex items-center justify-center shadow-2xl animate-float overflow-hidden">
                <img
                  src={logoImg}
                  alt="Logo"
                  className="w-full h-full object-cover p-1"
                />
              </div>
              <span className="text-2xl font-black tracking-tighter text-slate-900 dark:text-white">
                <span className="moveable-text animate-drift">ELSAYE</span>.
                <span className="moveable-text animate-sway">ARBA</span>
              </span>
            </div>
            <p className="text-slate-500 dark:text-slate-400 text-lg font-medium leading-relaxed">
              Architecting{" "}
              <span className="moveable-text animate-drift text-cornflower">
                premium digital experiences
              </span>{" "}
              with a focus on high-performance code and human-centric design.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-16 lg:gap-24">
            <div className="space-y-6">
              <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400">
                Navigation
              </h4>
              <ul className="space-y-4">
                {["Manifesto", "Vault", "Stack", "AI Core"].map((item) => (
                  <li key={item}>
                    <a
                      href={`#${item === "Manifesto" ? "about" : item === "Vault" ? "projects" : item === "Stack" ? "skills" : "ai-faq"}`}
                      className="text-sm font-bold text-slate-600 dark:text-slate-400 hover:text-cornflower transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-6">
              <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400">
                Socials
              </h4>
              <ul className="space-y-4">
                {socialLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-bold text-slate-600 dark:text-slate-400 hover:text-cornflower transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-6 hidden sm:block">
              <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400">
                Status
              </h4>
              <div className="flex items-center gap-3 text-sm font-bold text-emerald-500">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                Operational
              </div>
            </div>
          </div>
        </div>

        <div className="mt-24 pt-10 border-t border-slate-100 dark:border-slate-800 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-slate-500 dark:text-slate-400 text-[10px] font-black uppercase tracking-widest text-center md:text-left">
            © {currentYear} ELSAYE ARBA.{" "}
            <span className="moveable-text animate-drift text-cornflower">
              CRAFTED WITH PRECISION.
            </span>
          </p>
          <div className="flex gap-10">
            <a
              href="#"
              className="text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-cornflower transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-cornflower transition-colors"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
