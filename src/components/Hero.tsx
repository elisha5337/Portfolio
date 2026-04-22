import React from "react";
import { motion } from "motion/react";
import { Mail, Github, Instagram, MapPin, Quote, Sparkles } from "lucide-react";
import { PERSONAL_INFO } from "../constants";
import heroBackground from "../Assets/edited3.png";

const imageVariants = {
  hidden: { opacity: 0, scale: 1.03 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 1, ease: [0.16, 1, 0.3, 1] },
  },
};

const panelVariants = {
  hidden: { opacity: 0, x: 24 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      staggerChildren: 0.08,
      delayChildren: 0.16,
    },
  },
};

const contentItemVariants = {
  hidden: { opacity: 0, y: 14 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut" },
  },
};

export const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-depth px-4 sm:px-6 py-6 sm:py-10">
      <div className="mx-auto grid w-full max-w-7xl gap-6 lg:grid-cols-[minmax(0,1.2fr)_minmax(320px,0.8fr)] lg:items-stretch">
        <motion.div
          variants={imageVariants}
          initial="hidden"
          animate="visible"
          whileHover={{ scale: 1.01 }}
          transition={{ type: "spring", stiffness: 140, damping: 22 }}
          className="relative aspect-[4/3] overflow-hidden rounded-[2rem] border border-border bg-black shadow-[0_30px_80px_rgba(15,23,42,0.15)] sm:aspect-[16/10] lg:aspect-auto lg:min-h-[calc(100svh-8rem)]"
        >
          <img
            src={heroBackground}
            alt="Elsaye Arba working with a laptop"
            className="absolute inset-0 h-full w-full object-cover object-center opacity-100"
          />
        </motion.div>

        <motion.div
          variants={panelVariants}
          initial="hidden"
          animate="visible"
          className="flex h-full flex-col justify-between rounded-[2rem] border border-border bg-panel p-6 text-left shadow-[0_30px_80px_rgba(15,23,42,0.12)] sm:p-8 lg:p-10"
        >
          <div className="space-y-5">
            <motion.div
              variants={contentItemVariants}
              className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/10 px-3 py-1.5 text-[9px] font-black uppercase tracking-[0.2em] text-accent"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
              Available for New Projects
            </motion.div>

            <motion.p
              variants={contentItemVariants}
              className="text-[10px] font-black uppercase tracking-[0.5em] opacity-60"
            >
              Expert Creative Direction
            </motion.p>

            <motion.h2
              variants={contentItemVariants}
              className="max-w-xl text-4xl font-serif font-light leading-[1.02] tracking-tighter sm:text-5xl lg:text-6xl"
            >
              I Create Digital <br className="hidden md:block" />
              <span className="text-accent italic">Experiences</span> That{" "}
              <br className="hidden md:block" />
              Grow Your Business
            </motion.h2>

            <motion.p
              variants={contentItemVariants}
              className="max-w-xl text-sm leading-relaxed opacity-75 sm:text-base"
            >
              Based in Ethiopia, I specialize in high-end design, professional
              video editing, and modern web development solutions for
              forward-thinking brands.
            </motion.p>

            <motion.div
              variants={contentItemVariants}
              className="grid gap-3 sm:grid-cols-2"
            >
              <motion.div
                whileHover={{ y: -2 }}
                transition={{ type: "spring", stiffness: 260, damping: 22 }}
                className="flex items-start gap-3 rounded-2xl border border-border bg-muted px-4 py-4 shadow-sm"
              >
                <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent">
                  <MapPin className="h-4 w-4" />
                </div>
                <div className="min-w-0">
                  <p className="text-[9px] font-black uppercase tracking-[0.3em] text-accent/80">
                    Location
                  </p>
                  <p className="mt-1 text-sm font-medium leading-snug opacity-80">
                    Based in {PERSONAL_INFO.location}
                  </p>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ y: -2 }}
                transition={{ type: "spring", stiffness: 260, damping: 22 }}
                className="flex items-start gap-3 rounded-2xl border border-border bg-muted px-4 py-4 shadow-sm"
              >
                <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent">
                  <Quote className="h-4 w-4" />
                </div>
                <div className="min-w-0">
                  <p className="text-[9px] font-black uppercase tracking-[0.3em] text-accent/80">
                    Tagline
                  </p>
                  <p className="mt-1 text-sm font-medium leading-snug opacity-80">
                    {PERSONAL_INFO.tagline}
                  </p>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ y: -2 }}
                transition={{ type: "spring", stiffness: 260, damping: 22 }}
                className="flex items-start gap-3 rounded-2xl border border-border bg-muted px-4 py-4 shadow-sm"
              >
                <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent">
                  <Sparkles className="h-4 w-4" />
                </div>
                <div className="min-w-0">
                  <p className="text-[9px] font-black uppercase tracking-[0.3em] text-accent/80">
                    Focus
                  </p>
                  <p className="mt-1 text-sm font-medium leading-snug opacity-80">
                    {PERSONAL_INFO.subheadline}
                  </p>
                </div>
              </motion.div>

              <motion.a
                href={`mailto:${PERSONAL_INFO.email}`}
                whileHover={{ y: -2 }}
                transition={{ type: "spring", stiffness: 260, damping: 22 }}
                className="flex items-start gap-3 rounded-2xl border border-accent/20 bg-accent/10 px-4 py-4 shadow-sm transition-all hover:border-accent/40 hover:bg-accent/15"
              >
                <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-accent text-black">
                  <Mail className="h-4 w-4" />
                </div>
                <div className="min-w-0">
                  <p className="text-[9px] font-black uppercase tracking-[0.3em] text-accent">
                    Email
                  </p>
                  <p className="mt-1 break-all text-sm font-medium opacity-90">
                    {PERSONAL_INFO.email}
                  </p>
                </div>
              </motion.a>
            </motion.div>
          </div>

          <motion.div variants={contentItemVariants} className="mt-8 space-y-6">
            <div className="flex flex-col gap-4 sm:flex-row">
              <motion.a
                href="#portfolio"
                whileHover={{ y: -2 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
                className="w-full rounded-sm bg-accent px-8 py-4 text-center text-xs font-black uppercase tracking-[0.2em] text-black transition-all hover:bg-white active:scale-95 sm:w-auto"
              >
                Explore Projects
              </motion.a>
              <motion.a
                href="#contact"
                whileHover={{ y: -2 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
                className="w-full rounded-sm border border-border px-8 py-4 text-center text-xs font-black uppercase tracking-[0.2em] transition-all hover:bg-muted active:scale-95 sm:w-auto"
              >
                Start a Conversation
              </motion.a>
            </div>

            <div className="flex items-center justify-between gap-4 border-t border-border pt-5">
              <p className="text-[10px] font-black uppercase tracking-[0.35em] opacity-60">
                Connect
              </p>
              <div className="flex items-center gap-4 opacity-60">
                <a
                  href={PERSONAL_INFO.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-accent"
                  aria-label="Instagram"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a
                  href={PERSONAL_INFO.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-accent"
                  aria-label="GitHub"
                >
                  <Github className="h-4 w-4" />
                </a>
                <a
                  href={PERSONAL_INFO.socials.tiktok}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-accent"
                  aria-label="TikTok"
                >
                  <span className="text-[10px] font-black italic">Tk</span>
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
