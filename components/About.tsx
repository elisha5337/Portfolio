import React from "react";
import profileImg from "../src/Elsapc.png";

const About: React.FC = () => {
  const stats = [
    { label: "Experience", value: "2+", icon: "⏳" },
    { label: "Delivery", value: "Quick", icon: "🚀" },
    { label: "Precision", value: "100%", icon: "⭐️" },
    { label: "Global", value: "Design", icon: "🌍" },
  ];

  return (
    <section id="about" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="relative group">
            <div className="absolute -top-12 -left-12 w-64 h-64 bg-cornflower/10 rounded-full blur-3xl"></div>
            <div className="relative aspect-[4/5] rounded-[3.5rem] overflow-hidden shadow-[0_32px_64px_-16px_rgba(100,149,237,0.3)] border-8 border-white dark:border-slate-800 image-zoom-container">
              <img
                src={profileImg}
                alt="Elsaye Arba"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-60"></div>
              <div className="absolute bottom-12 left-12">
                <p className="text-white text-4xl font-black tracking-tighter">
                  Elsaye Arba
                </p>
                <p className="text-white/80 text-xs font-black uppercase tracking-[0.3em] mt-2">
                  Computer scientist and Software engineer
                </p>
              </div>
            </div>

            <div className="absolute -bottom-8 -right-8 p-12 bg-[#99badd] text-white rounded-[3rem] shadow-2xl border border-white/20 animate-float-subtle">
              <p className="text-6xl font-black tracking-tighter">2+</p>
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-white/80 mt-2">
                Years of <br />
                Innovation
              </p>
            </div>
          </div>

          <div className="space-y-12">
            <div>
              <h2 className="text-sm font-black text-[#99badd] uppercase tracking-[0.5em] mb-6 topic-accent animate-sway-minimal">
                About Me
              </h2>
              <h3 className="text-5xl md:text-7xl font-extrabold text-slate-900 dark:text-white leading-[1.05] tracking-tighter">
                Engineering{" "}
                <span className="text-gradient topic-accent animate-drift-minimal">
                  Impact
                </span>{" "}
                Through Precise Design.
              </h3>
            </div>

            <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
              As a Computer Scientist, I specialize in the architecture of
              robust digital systems. My technical foundation drives my
              multidisciplinary expertise in Web and Mobile development,
              ensuring every codebase is scalable, secure, and optimized for
              performance.{" "}
              <p>
                Beyond pure engineering, I bridge the gap into the creative
                domain with professional-grade skills in{" "}
                <span className="text-cornflower">
                  Graphics Design, Video Editing, and Photo Retouching.
                </span>{" "}
              </p>
              This dual mastery allows me to oversee the entire digital
              lifecycle—from the algorithmic core to the final pixel-perfect
              aesthetic.
            </p>

            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, idx) => (
                <div
                  key={idx}
                  className="p-10 rounded-[2.5rem] bg-[#99badd] dark:bg-[#99badd] border border-white/10 transition-all duration-500 group shadow-lg shadow-[#99badd]/20 hover:shadow-[#99badd]/40 hover:-translate-y-2"
                >
                  <div className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-500">
                    {stat.icon}
                  </div>
                  <p className="text-5xl font-black text-white tracking-tighter mb-2">
                    {stat.value}
                  </p>
                  <p className="text-[10px] font-black text-white/80 uppercase tracking-widest">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
