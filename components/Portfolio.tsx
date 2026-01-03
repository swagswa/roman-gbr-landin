
import React from 'react';
import { motion } from 'framer-motion';
import { CaseStudy } from '../types';

const CASES: CaseStudy[] = [
  { id: '1', title: 'THE TECH HOOK', category: 'Tech Review', views: '1.2M views', gradientClass: 'card-gradient-1', label: 'Viral Match' },
  { id: '2', title: 'NEON LIFESTYLE', category: 'Commercial', views: '850K views', gradientClass: 'card-gradient-2', label: 'Viral Match' },
  { id: '3', title: 'AI TRANSFORMATION', category: 'Educational', views: '3.4M views', gradientClass: 'card-gradient-3', label: 'High Retention' },
  { id: '4', title: 'EXTREME RETENTION', category: 'Entertainment', views: '10M+ views', gradientClass: 'card-gradient-1', label: 'Viral Match' },
];

export const Portfolio = () => {
  return (
    <section id="work" className="py-32 bg-black">
      <div className="container mx-auto px-4">
        <div className="mb-24 text-center">
          <p className="text-blue-500 text-[10px] font-bold tracking-[0.3em] uppercase mb-4">Portfolio</p>
          <h2 className="text-5xl md:text-7xl font-[900] italic tracking-tighter uppercase">
            CRAFTING <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">VIRAL</span> REALITY.
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {CASES.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -10 }}
              className={`relative aspect-[9/16] rounded-[2rem] overflow-hidden group cursor-pointer border border-white/5 ${item.gradientClass}`}
            >
              {/* Background Glow */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60 z-10" />
              
              <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity z-0" />
              
              {/* Media Placeholder - in real app use <video> */}
              <div className="absolute inset-0 flex items-center justify-center">
                 <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/10 group-hover:scale-110 transition-transform">
                   <svg className="w-6 h-6 ml-1 text-white" fill="currentColor" viewBox="0 0 24 24">
                     <path d="M8 5v14l11-7z" />
                   </svg>
                 </div>
              </div>

              {/* Content */}
              <div className="absolute inset-x-0 bottom-0 p-8 z-20 space-y-3">
                <div className="flex flex-col gap-1">
                   <span className="text-blue-400 text-[9px] font-bold tracking-widest uppercase">{item.category}</span>
                   <h4 className="text-2xl font-[900] italic tracking-tight">{item.title}</h4>
                </div>
                
                <div className="flex items-center justify-between pt-4">
                   <div className="flex items-center gap-2 text-white/50 text-[10px] font-bold">
                     <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
                     {item.views}
                   </div>
                   <div className="px-2 py-1 rounded bg-white/10 backdrop-blur-md text-[9px] font-bold text-white/80 border border-white/10">
                     {item.label}
                   </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
