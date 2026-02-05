import React, { useState, useRef } from "react";
import { TESTIMONIALS } from "../constants";
import { Testimonial } from "../types";

const Testimonials: React.FC = () => {
  const [testimonials, setTestimonials] = useState<Testimonial[]>(TESTIMONIALS);
  const [formState, setFormState] = useState({
    name: "",
    role: "",
    content: "",
  });
  const [avatarPreview, setAvatarPreview] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 2 * 1024 * 1024) {
        alert("Image size too large. Please select an image under 2MB.");
        return;
      }
      const reader = new FileReader();
      reader.onloadend = () => {
        setAvatarPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.content) return;

    setIsSubmitting(true);

    setTimeout(() => {
      const newTestimony: Testimonial = {
        id: Date.now().toString(),
        author: formState.name,
        role: formState.role || "Strategic Partner",
        content: formState.content,
        avatar:
          avatarPreview ||
          `https://ui-avatars.com/api/?name=${encodeURIComponent(formState.name)}&background=91a3b0&color=fff&size=256`,
      };

      setTestimonials([newTestimony, ...testimonials]);
      setFormState({ name: "", role: "", content: "" });
      setAvatarPreview(null);
      setIsSubmitting(false);

      document
        .getElementById("partnerships-anchor")
        ?.scrollIntoView({ behavior: "smooth" });
    }, 800);
  };

  return (
    <section className="py-32 relative overflow-hidden">
      <div
        id="partnerships-anchor"
        className="absolute top-0 left-0 w-full h-1"
      ></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-28">
          <h2 className="text-sm font-black text-[#91a3b0] uppercase tracking-[0.6em] mb-6">
            Partnerships
          </h2>
          <h3 className="text-5xl md:text-7xl font-extrabold text-slate-900 dark:text-white tracking-tighter mb-10">
            Validated{" "}
            <span className="text-gradient topic-accent animate-drift-minimal">
              Impact.
            </span>
          </h3>
          <p className="max-w-xl mx-auto text-slate-500 dark:text-slate-400 font-medium">
            Real-time feedback from global collaborators and project
            stakeholders.
          </p>
        </div>

        {/* Testimonials Grid - Using blue-gray theme #91a3b0 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-32">
          {testimonials.map((testimonial, idx) => (
            <div
              key={testimonial.id}
              className="p-16 md:p-20 bg-[#91a3b0] rounded-[4rem] border border-white/10 relative overflow-hidden group hover:bg-slate-950 transition-all duration-700 hover:-translate-y-4 hover:shadow-[0_40px_80px_-15px_rgba(145,163,176,0.5)] cursor-default animate-in slide-in-from-bottom-10 fade-in duration-700"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              {idx === 0 &&
                !TESTIMONIALS.find((t) => t.id === testimonial.id) && (
                  <div className="absolute top-8 left-8 px-4 py-1.5 bg-emerald-500 text-white text-[9px] font-black uppercase tracking-widest rounded-full z-20 animate-pulse shadow-lg">
                    New Signal
                  </div>
                )}

              <div className="absolute top-0 right-0 p-16 text-white opacity-[0.2] group-hover:opacity-[0.1] group-hover:scale-150 transition-all duration-1000">
                <svg
                  width="180"
                  height="180"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C20.1216 16 21.017 15.1046 21.017 14V9C21.017 7.89543 20.1216 7 19.017 7H16.017C14.9124 7 14.017 7.89543 14.017 9V12M3.017 21L3.017 18C3.017 16.8954 3.91243 16 5.017 16H8.017C9.12157 16 10.017 15.1046 10.017 14V9C10.017 7.89543 9.12157 7 8.017 7H5.017C3.91243 7 3.017 7.89543 3.017 9V12" />
                </svg>
              </div>

              <div className="relative z-10">
                <div className="flex gap-2 mb-12">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg
                      key={star}
                      className="w-6 h-6 text-white transition-all group-hover:scale-125 group-hover:text-white/60"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                <p className="text-3xl md:text-4xl font-light text-white mb-16 leading-relaxed italic tracking-tighter transition-colors">
                  "{testimonial.content}"
                </p>

                <div className="flex items-center gap-8">
                  <div className="relative image-zoom-container rounded-full shadow-2xl border-4 border-white/30 overflow-hidden w-24 h-24 shrink-0">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.author}
                      className="w-full h-full grayscale-0 transition-all duration-1000 object-cover"
                    />
                  </div>
                  <div>
                    <h5 className="font-black text-3xl tracking-tight text-white transition-colors">
                      {testimonial.author}
                    </h5>
                    <p className="text-white/80 group-hover:text-white text-[10px] font-black uppercase tracking-[0.3em] mt-2 transition-colors uppercase">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="max-w-4xl mx-auto bg-slate-900 dark:bg-slate-900/40 rounded-[4rem] p-12 md:p-20 relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#91a3b0]/10 rounded-full blur-[100px] animate-pulse"></div>

          <div className="relative z-10 text-center mb-16">
            <h4 className="text-[10px] font-black text-[#91a3b0] uppercase tracking-[0.5em] mb-6">
              Leave Your Testimony
            </h4>
            <h5 className="text-4xl font-extrabold text-white tracking-tighter">
              Contribute to the <span className="text-gradient">Legacy.</span>
            </h5>
            <p className="text-white/60 mt-4 font-medium">
              Your feedback drives the next phase of architectural evolution.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-12">
            <div className="flex flex-col items-center gap-6">
              <label className="text-[9px] font-black text-white/40 uppercase tracking-[0.5em] block text-center">
                Identity Visualization
              </label>
              <div
                onClick={() => fileInputRef.current?.click()}
                className="relative w-40 h-40 group cursor-pointer"
              >
                <div className="absolute -inset-4 bg-gradient-to-r from-[#91a3b0] to-primary-600 rounded-full blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
                <div className="relative w-full h-full bg-white/5 border-2 border-dashed border-white/20 rounded-full flex items-center justify-center overflow-hidden transition-all group-hover:border-[#91a3b0] group-hover:bg-white/10">
                  {avatarPreview ? (
                    <img
                      src={avatarPreview}
                      alt="Avatar Preview"
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="flex flex-col items-center gap-2 text-white/40 group-hover:text-[#91a3b0]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-10 w-10"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                      <span className="text-[8px] font-black uppercase tracking-widest">
                        Upload Photo
                      </span>
                    </div>
                  )}
                  {avatarPreview && (
                    <div className="absolute inset-0 bg-slate-950/60 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                      <span className="text-white text-[9px] font-black uppercase tracking-widest">
                        Change
                      </span>
                    </div>
                  )}
                </div>
              </div>
              <input
                type="file"
                ref={fileInputRef}
                onChange={handleImageChange}
                className="hidden"
                accept="image/*"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-3">
                <label className="text-[9px] font-black text-white/40 uppercase tracking-widest block px-2">
                  Professional Name
                </label>
                <input
                  type="text"
                  value={formState.name}
                  onChange={(e) =>
                    setFormState({ ...formState, name: e.target.value })
                  }
                  placeholder="e.g. Dr. Helena Thorne"
                  required
                  className="w-full px-8 py-6 bg-white/5 border border-white/10 rounded-3xl text-white placeholder:text-white/20 focus:outline-none focus:ring-2 focus:ring-[#91a3b0]/50 transition-all font-medium"
                />
              </div>
              <div className="space-y-3">
                <label className="text-[9px] font-black text-white/40 uppercase tracking-widest block px-2">
                  Professional Role
                </label>
                <input
                  type="text"
                  value={formState.role}
                  onChange={(e) =>
                    setFormState({ ...formState, role: e.target.value })
                  }
                  placeholder="e.g. CTO @ NeuroLink"
                  className="w-full px-8 py-6 bg-white/5 border border-white/10 rounded-3xl text-white placeholder:text-white/20 focus:outline-none focus:ring-2 focus:ring-[#91a3b0]/50 transition-all font-medium"
                />
              </div>
            </div>

            <div className="space-y-3">
              <label className="text-[9px] font-black text-white/40 uppercase tracking-widest block px-2">
                The Testimony
              </label>
              <textarea
                rows={4}
                value={formState.content}
                onChange={(e) =>
                  setFormState({ ...formState, content: e.target.value })
                }
                placeholder="Describe the impact of our collaboration..."
                required
                className="w-full px-8 py-6 bg-white/5 border border-white/10 rounded-3xl text-white placeholder:text-white/20 focus:outline-none focus:ring-2 focus:ring-[#91a3b0]/50 transition-all font-medium resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="group w-full py-8 bg-white text-slate-950 rounded-[2.5rem] font-black text-xs uppercase tracking-[0.5em] hover:scale-[1.02] active:scale-[0.98] transition-all shadow-2xl flex items-center justify-center gap-6 disabled:opacity-50"
            >
              {isSubmitting ? (
                <div className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-slate-950 rounded-full animate-bounce"></span>
                  <span className="w-2 h-2 bg-slate-950 rounded-full animate-bounce [animation-delay:0.2s]"></span>
                  <span className="w-2 h-2 bg-slate-950 rounded-full animate-bounce [animation-delay:0.4s]"></span>
                </div>
              ) : (
                <>
                  Seal Testimony
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 transform group-hover:translate-x-2 transition-transform"
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
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
