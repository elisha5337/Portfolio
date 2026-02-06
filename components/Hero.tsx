import React from "react";
import heroImg from "../src/pc1.jpg";

const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      <div className="absolute inset-0 z-0">
        <img
          src={heroImg}
          alt="Technical Background"
          className="w-full h-full object-cover opacity-100 scale-100"
        />
        {/* Very light gradient overlay to maintain text readability while keeping image visible */}
        <div className="absolute inset-0 bg-slate-50/20 dark:bg-slate-950/30 backdrop-blur-[1px]"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-slate-50 via-transparent to-slate-50 dark:from-slate-950 dark:via-transparent dark:to-slate-950 opacity-40"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-20 text-center">
        <div className="mb-8 inline-block animate-reveal">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-cornflower to-primary-600 rounded-full blur opacity-40 group-hover:opacity-60 transition duration-1000"></div>
            <div className="relative px-6 py-2.5 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md ring-1 ring-slate-200 dark:ring-slate-800 rounded-full leading-none flex items-center space-x-3 shadow-lg">
              <span className="flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-[10px] font-black text-slate-700 dark:text-slate-300 uppercase tracking-[0.4em]">
                Available for Strategic Projects
              </span>
            </div>
          </div>
        </div>

        <h1
          className="text-[14vw] md:text-[9vw] lg:text-[7.5rem] font-extrabold text-slate-900 dark:text-white leading-[0.9] tracking-tighter mb-8 animate-reveal drop-shadow-2xl"
          style={{ animationDelay: "0.2s" }}
        >
          <span className="moveable-text animate-float-vertical [animation-duration:8s]">
            WEAVING
          </span>{" "}
          <br />
          <span className="moveable-text animate-float-vertical [animation-duration:9s] text-gradient italic">
            IMPOSSIBLE
          </span>{" "}
          <br />
          <span className="moveable-text animate-float-vertical [animation-duration:10s]">
            INTERFACES.
          </span>
        </h1>

        <div
          className="mb-12 animate-reveal opacity-0"
          style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}
        >
          <h2 className="text-2xl md:text-4xl font-black text-[#318ce7] tracking-[0.15em] uppercase">
            Lead Software Architect
          </h2>
        </div>

        <p
          className="max-w-2xl mx-auto text-lg md:text-xl text-slate-900 dark:text-white mb-16 font-bold leading-relaxed animate-reveal opacity-0 drop-shadow-md"
          style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}
        >
          Specializing in pixel-perfect, high-performance digital ecosystems. I
          engineer scalable solutions that bridge the gap between complex logic
          and human-centric design.
        </p>

        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-6 animate-reveal opacity-0"
          style={{ animationDelay: "0.6s", animationFillMode: "forwards" }}
        >
          <a
            href="#projects"
            className="group relative px-14 py-5 bg-slate-900 dark:bg-white text-white dark:text-slate-950 rounded-2xl font-black text-[10px] uppercase tracking-[0.3em] overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-2xl shadow-cornflower/20"
          >
            Explore
          </a>
          <a
            href="#contact"
            className="group px-14 py-5 bg-white/10 backdrop-blur-md text-slate-900 dark:text-white border-2 border-slate-900 dark:border-white rounded-2xl font-black text-[10px] uppercase tracking-[0.3em] hover:bg-slate-900 dark:hover:bg-white hover:text-white dark:hover:text-slate-950 transition-all hover:scale-105 active:scale-95 shadow-xl"
          >
            Initiate Contact
          </a>
        </div>
      </div>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 opacity-50 animate-float-subtle">
        <div className="w-[1.5px] h-20 bg-gradient-to-b from-slate-900 dark:from-white to-transparent"></div>
      </div>
    </section>
  );
};

export default Hero;
