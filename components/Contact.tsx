import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle",
  );
  const [errorMessage, setErrorMessage] = useState("");

  const getEnv = (key: string) => {
    try {
      // Prefer Vite env vars (must be prefixed with VITE_)
      const mapped: Record<string, string> = {
        EMAILJS_SERVICE_ID: "VITE_EMAILJS_SERVICE_ID",
        EMAILJS_TEMPLATE_ID: "VITE_EMAILJS_TEMPLATE_ID",
        EMAILJS_PUBLIC_KEY: "VITE_EMAILJS_PUBLIC_KEY",
      };
      const viteKey = mapped[key];
      const viteVal = viteKey
        ? ((import.meta as any).env?.[viteKey] as string | undefined)
        : undefined;
      if (viteVal && viteVal !== "undefined") return viteVal;

      // Fallback to process.env if available
      if (typeof process !== "undefined" && process.env) {
        const val = (process.env as any)[key];
        return val && val !== "undefined" ? val : "";
      }
    } catch (e) {
      return "";
    }
    return "";
  };

  const EMAILJS_SERVICE_ID = getEnv("EMAILJS_SERVICE_ID");
  const EMAILJS_TEMPLATE_ID = getEnv("EMAILJS_TEMPLATE_ID");
  const EMAILJS_PUBLIC_KEY = getEnv("EMAILJS_PUBLIC_KEY");

  const handleSubmit = async (e: React.FormEvent) => {
    setErrorMessage("");
    setStatus("sending");
    e.preventDefault();

    if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
      console.error("EmailJS configuration missing.");
      setStatus("error");
      setErrorMessage("Service unconfigured.");
      return;
    }

    try {
      const templateParams = {
        from_name: formState.name,
        reply_to: formState.email,
        from_email: formState.email,
        sender_email: formState.email,
        message: formState.message,
        to_name: "Elisha Arba",
      };

      console.log("EmailJS: sending with params", templateParams);

      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY,
      );

      console.log("EmailJS: send successful");
      setStatus("sent");
      setFormState({ name: "", email: "", message: "" });
      setTimeout(() => setStatus("idle"), 5000);
    } catch (error) {
      console.error("EmailJS send error:", error);
      setStatus("error");
      setErrorMessage("Transmission failed.");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  const socialLinks = [
    {
      name: "Facebook",
      url: "https://web.facebook.com/?_rdc=1&_rdr#",
      icon: "FB",
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/elishaarba/",
      icon: "IG",
    },
    { name: "Telegram", url: "https://t.me/onetruthlife", icon: "TG" },
    {
      name: "TikTok",
      url: "https://www.tiktok.com/@elishaelegant",
      icon: "TT",
    },
  ];

  return (
    <section id="contact" className="py-24 bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div className="flex flex-col justify-center">
            <h2 className="text-sm font-bold text-[#91a3b0] uppercase tracking-[0.3em] mb-4">
              Connect
            </h2>
            <h3 className="text-5xl md:text-6xl font-extrabold mb-8 leading-tight tracking-tight text-slate-900 dark:text-white">
              Let's Build{" "}
              <span className="topic-accent animate-float-subtle">
                Something
              </span>{" "}
              <br />
              <span className="bg-gradient-to-r from-[#91a3b0] to-primary-500 bg-clip-text text-transparent underline decoration-[#91a3b0]/20 topic-accent animate-drift-minimal">
                Extraordinary.
              </span>
            </h3>

            <p className="text-xl text-slate-500 dark:text-slate-400 mb-12 font-medium leading-relaxed max-w-lg">
              Currently accepting{" "}
              <span className="text-[#91a3b0]">new projects</span> and
              consulting engagements. Reach out via the form or direct channels.
            </p>

            <div className="space-y-6 mb-16">
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-center text-[#91a3b0] group-hover:bg-[#91a3b0] group-hover:text-white transition-all duration-300">
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
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-1">
                    Direct Email
                  </p>
                  <a
                    href="mailto:elsayearba@gmail.com"
                    className="text-xl font-bold text-slate-900 dark:text-white hover:text-[#91a3b0] transition-colors tracking-tight"
                  >
                    elsayearba@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-center text-[#91a3b0] group-hover:bg-[#91a3b0] group-hover:text-white transition-all duration-300">
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
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-1">
                    Mobile Access
                  </p>
                  <a
                    href="tel:0924274666"
                    className="text-xl font-bold text-slate-900 dark:text-white hover:text-[#91a3b0] transition-colors tracking-tight"
                  >
                    0924 274 666
                  </a>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-4 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl text-[10px] font-black uppercase tracking-widest hover:border-[#91a3b0] hover:text-[#91a3b0] transition-all active:scale-95 shadow-sm flex items-center gap-2"
                >
                  <span className="opacity-50">{social.icon}</span>
                  {social.name}
                </a>
              ))}
            </div>
          </div>

          <div className="bg-[#91a3b0] p-10 md:p-14 rounded-[3rem] border border-white/10 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-[100px] pointer-events-none"></div>

            <form onSubmit={handleSubmit} className="space-y-10 relative z-10">
              <div className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-white/60">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      value={formState.name}
                      onChange={(e) =>
                        setFormState({ ...formState, name: e.target.value })
                      }
                      className="w-full px-7 py-5 bg-white/10 border border-white/20 rounded-2xl focus:outline-none focus:ring-2 focus:ring-white/50 transition-all font-medium text-white placeholder:text-white/30 shadow-inner"
                      placeholder="e.g. Alex Chen"
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-white/60">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      value={formState.email}
                      onChange={(e) =>
                        setFormState({ ...formState, email: e.target.value })
                      }
                      className="w-full px-7 py-5 bg-white/10 border border-white/20 rounded-2xl focus:outline-none focus:ring-2 focus:ring-white/50 transition-all font-medium text-white placeholder:text-white/30 shadow-inner"
                      placeholder="alex@example.com"
                    />
                  </div>
                </div>
                <div className="space-y-3">
                  <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-white/60">
                    Project Vision
                  </label>
                  <textarea
                    required
                    rows={6}
                    value={formState.message}
                    onChange={(e) =>
                      setFormState({ ...formState, message: e.target.value })
                    }
                    className="w-full px-7 py-5 bg-white/10 border border-white/20 rounded-2xl focus:outline-none focus:ring-2 focus:ring-white/50 transition-all resize-none font-medium text-white placeholder:text-white/30 shadow-inner"
                    placeholder="Tell me about your goals..."
                  ></textarea>
                </div>
              </div>

              <div className="space-y-4">
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className={`w-full py-6 rounded-2xl font-black text-sm uppercase tracking-[0.3em] transition-all shadow-2xl disabled:opacity-50 flex items-center justify-center gap-4 active:scale-[0.98] ${
                    status === "error"
                      ? "bg-red-600 shadow-red-500/20"
                      : "bg-white hover:bg-slate-100 shadow-white/20 text-slate-900"
                  }`}
                >
                  {status === "sending"
                    ? "Transmitting..."
                    : status === "sent"
                      ? "Success!"
                      : status === "error"
                        ? "Error"
                        : "Send Message"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
