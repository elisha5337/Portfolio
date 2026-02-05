
import React from 'react';
import { BLOG_POSTS } from '../constants';

const Blog: React.FC = () => {
  return (
    <section id="blog" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-24 gap-12">
          <div className="relative">
            <h2 className="text-sm font-black text-[#318ce7] uppercase tracking-[0.5em] mb-6">Thoughts</h2>
            <h3 className="text-5xl md:text-7xl font-extrabold text-slate-900 dark:text-white tracking-tighter">
              Latest <span className="text-gradient italic topic-accent animate-drift-minimal">Intelligence.</span>
            </h3>
          </div>
          <a href="#" className="flex items-center gap-6 text-slate-900 dark:text-white font-black hover:text-white hover:bg-[#318ce7] transition-all group uppercase tracking-[0.3em] text-[10px] bg-white dark:bg-slate-800 px-10 py-5 rounded-3xl border border-slate-200 dark:border-slate-700 shadow-xl">
            The Full Archive
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 transform group-hover:translate-x-3 transition-transform" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {BLOG_POSTS.map((post) => (
            <article 
              key={post.id}
              className="flex flex-col lg:flex-row bg-[#318ce7] rounded-[3.5rem] overflow-hidden border border-white/10 hover:bg-slate-950 transition-all duration-700 group cursor-pointer shadow-2xl hover:shadow-slate-900/40 hover:-translate-y-4"
            >
              <div className="lg:w-[45%] aspect-video lg:aspect-auto image-zoom-container">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover grayscale-0 group-hover:grayscale transition-all duration-1000"
                />
              </div>
              <div className="lg:w-[55%] p-14 flex flex-col justify-center">
                <div className="flex items-center gap-4 text-[10px] font-black text-white/70 mb-8 uppercase tracking-[0.3em] transition-colors">
                  <span className="text-white">{post.date}</span>
                  <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
                  <span>{post.readTime}</span>
                </div>
                <h4 className="text-3xl font-black mb-8 leading-tight text-white tracking-tighter transition-colors">{post.title}</h4>
                <p className="text-white/80 text-base mb-10 leading-relaxed font-medium line-clamp-2 transition-colors">
                  {post.excerpt}
                </p>
                <div className="inline-flex items-center gap-4 text-[10px] font-black text-white uppercase tracking-[0.3em] group-hover:translate-x-4 transition-all">
                  Unpack Wisdom
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
