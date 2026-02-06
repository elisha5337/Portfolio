import React, { useState, useRef, useEffect } from "react";
import { PROJECTS, SKILLS } from "../constants";

const AiAssistant: React.FC = () => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<
    { role: "user" | "ai"; text: string }[]
  >([]);
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  // This component now uses a server-side proxy at `/api/genai`.

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  const quickPrompts = [
    "What are your core technical skills?",
    "Tell me about your projects.",
    "Are you available for work?",
    "What is your philosophy?",
  ];

  const handleSend = async (text: string) => {
    if (!text.trim() || isLoading) return;

    const userMessage = text.trim();
    setInput("");
    setMessages((prev) => [...prev, { role: "user", text: userMessage }]);
    setIsLoading(true);

    try {
      const skillsContext = SKILLS.map((s) => `${s.name}: ${s.detailedDescription}`).join("\n");
      const projectsContext = PROJECTS.map((p) => `${p.title}: ${p.fullDescription}`).join("\n");

      const resp = await fetch("/api/genai", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt: userMessage, skillsContext, projectsContext }),
      });

      if (!resp.ok) {
        const body = await resp.json().catch(() => ({}));
        const msg = body?.error || `GenAI server error: ${resp.status}`;
        setMessages((prev) => [...prev, { role: "ai", text: msg }]);
        setIsLoading(false);
        return;
      }

      const data = await resp.json();
      const aiText = data?.text || "I'm having trouble thinking right now. Please try again later!";
      setMessages((prev) => [...prev, { role: "ai", text: aiText }]);
    } catch (error: any) {
      console.error("GenAI proxy error:", error);
      setMessages((prev) => [...prev, { role: "ai", text: String(error?.message || error) }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section
      id="ai-faq"
      className="py-24 bg-slate-50/50 dark:bg-slate-900/10 border-y border-slate-200/60 dark:border-slate-800/60"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-400 text-[10px] font-black uppercase tracking-widest mb-6 border border-slate-300/50 dark:border-slate-700/50">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#91a3b0] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#91a3b0]"></span>
            </span>
            Neural Intelligence Core
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tighter mb-6">
            Interactive{" "}
            <span className="moveable-text animate-drift text-gradient">
              AI Insights
            </span>
          </h2>
        </div>

        {/* AI Container - Updated to #91a3b0 */}
        <div className="bg-[#91a3b0] rounded-[3rem] border border-white/10 shadow-2xl overflow-hidden flex flex-col h-[700px] transition-all relative">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-[100px] pointer-events-none"></div>

          <div
            ref={scrollRef}
            className="flex-grow overflow-y-auto p-8 md:p-12 space-y-8 scroll-smooth scrollbar-hide relative z-10"
          >
            {messages.length === 0 && (
              <div className="h-full flex flex-col items-center justify-center text-center space-y-12 animate-in fade-in duration-1000">
                <div className="relative">
                  <div className="absolute -inset-6 bg-white/20 rounded-full blur-2xl animate-pulse"></div>
                  <div className="relative w-28 h-28 bg-white rounded-[2rem] flex items-center justify-center text-5xl shadow-2xl animate-float">
                    🤖
                  </div>
                </div>
                <div className="space-y-6 max-w-sm">
                  <p className="text-2xl font-black text-white tracking-tight">
                    How may I assist you today?
                  </p>
                  <div className="flex flex-wrap justify-center gap-3">
                    {quickPrompts.map((prompt, i) => (
                      <button
                        key={i}
                        onClick={() => handleSend(prompt)}
                        className="px-5 py-3 bg-white/10 border border-white/20 rounded-2xl text-[11px] font-black uppercase tracking-widest text-white hover:bg-white hover:text-[#91a3b0] transition-all active:scale-95 shadow-sm"
                      >
                        {prompt}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex flex-col ${msg.role === "user" ? "items-end" : "items-start"} animate-in slide-in-from-bottom-6 duration-500`}
              >
                <span className="text-[9px] font-black uppercase tracking-widest mb-2 text-white/50 px-2">
                  {msg.role === "user" ? "Operator" : "AI Architect Twin"}
                </span>
                <div
                  className={`max-w-[90%] px-8 py-6 rounded-[2.5rem] text-[15px] font-medium leading-relaxed shadow-sm ${
                    msg.role === "user"
                      ? "bg-slate-950 text-white rounded-tr-none"
                      : "bg-white text-slate-800 rounded-tl-none"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}

            {isLoading && (
              <div className="flex flex-col items-start animate-in fade-in duration-300">
                <span className="text-[9px] font-black uppercase tracking-widest mb-2 text-white/50 px-2">
                  Processing...
                </span>
                <div className="bg-white px-8 py-5 rounded-[2rem] rounded-tl-none flex gap-2">
                  <span className="w-2.5 h-2.5 bg-[#91a3b0] rounded-full animate-bounce"></span>
                  <span className="w-2.5 h-2.5 bg-[#91a3b0] rounded-full animate-bounce [animation-delay:0.2s]"></span>
                  <span className="w-2.5 h-2.5 bg-[#91a3b0] rounded-full animate-bounce [animation-delay:0.4s]"></span>
                </div>
              </div>
            )}
          </div>

          <div className="p-8 bg-slate-950/20 backdrop-blur-md border-t border-white/10 relative z-10">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSend(input);
              }}
              className="flex gap-4"
            >
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Message your AI twin..."
                className="flex-grow px-8 py-6 bg-white/10 border border-white/20 rounded-3xl focus:outline-none focus:ring-2 focus:ring-white/50 transition-all font-medium text-base text-white placeholder:text-white/40 shadow-inner"
              />
              <button
                type="submit"
                disabled={!input.trim() || isLoading}
                className="p-6 bg-white text-[#91a3b0] rounded-3xl hover:bg-slate-100 transition-all shadow-xl active:scale-95 disabled:opacity-50"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-7 w-7 rotate-90"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={3}
                    d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                  />
                </svg>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AiAssistant;
