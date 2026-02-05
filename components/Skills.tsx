import React, { useState } from "react";
import { SKILLS } from "../constants";
import { Skill } from "../types";

const Skills: React.FC = () => {
  const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null);

  return (
    <section id="skills" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-28">
          <h2 className="text-sm font-black text-[#99badd] uppercase tracking-[0.6em] mb-6 animate-sway-minimal">
            Technical Stack
          </h2>
          <h3 className="text-5xl md:text-7xl font-extrabold text-slate-900 dark:text-white tracking-tighter mb-10">
            Expertise &{" "}
            <span className="text-gradient topic-accent animate-float-subtle">
              Solutions.
            </span>
          </h3>
          <p className="max-w-xl mx-auto text-xl text-slate-500 font-medium leading-relaxed">
            Sophisticated mastery over modern software design and implementation
            across Web and Mobile platforms.
          </p>
        </div>

        {/* Skills Grid - Using blue theme #99badd */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {SKILLS.map((skill, idx) => (
            <div
              key={idx}
              onClick={() => setSelectedSkill(skill)}
              className="p-10 bg-[#99badd] rounded-[3rem] border border-white/10 shadow-2xl shadow-[#99badd]/20 transition-all duration-500 hover:-translate-y-4 hover:bg-slate-950 hover:shadow-slate-900/40 group cursor-pointer relative overflow-hidden"
            >
              <div className="absolute -bottom-6 -right-6 text-9xl opacity-10 transform rotate-12 group-hover:scale-150 transition-transform duration-700 text-white">
                {skill.icon}
              </div>

              <div className="text-6xl mb-8 transform transition-all duration-500 group-hover:scale-110 group-hover:-rotate-6 relative z-10">
                {skill.icon}
              </div>

              <h4 className="font-black text-2xl mb-4 tracking-tight text-white transition-colors relative z-10">
                {skill.name}
              </h4>

              <p className="text-white/80 text-sm font-medium leading-relaxed line-clamp-2 mb-8 relative z-10">
                {skill.detailedDescription}
              </p>

              <div className="flex items-center gap-2 text-[9px] font-black uppercase tracking-widest text-white/70 group-hover:text-white transition-colors relative z-10">
                View more
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={3}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Simplified Scrollable Modal */}
      {selectedSkill && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-10">
          <div
            className="absolute inset-0 bg-slate-950/95 backdrop-blur-xl animate-in fade-in duration-500"
            onClick={() => setSelectedSkill(null)}
          ></div>

          <div className="relative w-full max-w-5xl bg-white dark:bg-slate-900 rounded-[2.5rem] md:rounded-[4rem] shadow-[0_0_80px_rgba(0,0,0,0.5)] border border-slate-200 dark:border-slate-800 animate-in zoom-in-95 duration-500 max-h-[85vh] overflow-y-auto overscroll-contain">
            <div className="sticky top-0 right-0 z-[120] p-4 flex justify-end pointer-events-none">
              <button
                onClick={() => setSelectedSkill(null)}
                className="p-3 md:p-4 bg-white/90 dark:bg-slate-800/90 backdrop-blur-xl rounded-full text-slate-500 hover:text-slate-900 dark:hover:text-white transition-all shadow-xl border border-slate-200 dark:border-slate-700 pointer-events-auto"
                aria-label="Close"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            <div className="flex flex-col md:flex-row min-h-full">
              {/* Left Side: Summary */}
              <div className="md:w-[38%] p-10 md:p-16 bg-slate-50 dark:bg-slate-800/30 flex flex-col items-center justify-center text-center border-b md:border-b-0 md:border-r border-slate-200 dark:border-slate-800 shrink-0">
                <div className="text-8xl md:text-9xl mb-10 transform animate-float drop-shadow-2xl">
                  {selectedSkill.icon}
                </div>
                <h3 className="text-4xl md:text-5xl font-black mb-10 tracking-tighter text-slate-900 dark:text-white">
                  {selectedSkill.name}
                </h3>

                <div className="w-full space-y-4 max-w-[220px]">
                  <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">
                    Technical Foundation
                  </p>
                  <div className="w-full h-1 bg-[#99badd] rounded-full opacity-30"></div>
                </div>
              </div>

              {/* Right Side: Detailed Description */}
              <div className="md:w-[62%] p-10 md:p-16 lg:p-24 flex flex-col justify-center bg-white dark:bg-slate-900">
                <div className="space-y-14">
                  <div>
                    <h4 className="text-[10px] font-black uppercase tracking-[0.6em] text-[#99badd] mb-8"></h4>
                    <p className="text-2xl md:text-3xl lg:text-4xl text-slate-700 dark:text-slate-200 leading-tight font-light tracking-tight">
                      {selectedSkill.detailedDescription}
                    </p>
                  </div>

                  <div>
                    <h5 className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400 mb-8">
                      Module Specializations
                    </h5>
                    <div className="flex flex-wrap gap-4">
                      {selectedSkill.subSkills.map((sub, i) => (
                        <span
                          key={i}
                          className="px-6 py-4 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700 rounded-2xl text-[11px] font-black uppercase tracking-widest hover:border-[#99badd] hover:bg-[#99badd] hover:text-white transition-all cursor-default shadow-sm"
                        >
                          {sub}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-8">
                    <button
                      onClick={() => setSelectedSkill(null)}
                      className="group w-full md:w-auto px-14 py-7 bg-slate-900 dark:bg-white text-white dark:text-slate-950 rounded-[2.5rem] font-black text-xs uppercase tracking-[0.4em] hover:scale-105 active:scale-95 transition-all shadow-2xl flex items-center justify-center gap-6"
                    >
                      Exit
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 transform group-hover:translate-x-3 transition-transform"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={3}
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Skills;
