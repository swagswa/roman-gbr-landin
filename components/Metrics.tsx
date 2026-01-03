
import React from 'react';
import { motion } from 'framer-motion';
import { Metric } from '../types';

const METRICS: Metric[] = [
  { 
    label: "CUMULATIVE VIEWS", 
    value: "500M+", 
    description: "Generated for clients across TikTok, Reels, and Shorts.",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    )
  },
  { 
    label: "TOTAL SHARES", 
    value: "12M+", 
    description: "Content that demands to be shared. Viral by design.",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6L15.263 6" />
      </svg>
    )
  },
  { 
    label: "AVG. RETENTION", 
    value: "88%", 
    description: "Keeping eyes locked from the first frame to the last.",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  }
];

export const Metrics = () => {
  return (
    <section id="results" className="py-32 bg-black">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {METRICS.map((metric, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="group relative p-8 rounded-3xl bg-[#0a0a0c] border border-white/5 hover:border-white/10 transition-colors"
            >
              <div className="absolute top-0 right-0 p-6 opacity-20 group-hover:opacity-100 transition-opacity">
                {metric.icon}
              </div>
              <p className="text-[10px] font-bold tracking-[0.2em] text-white/40 mb-4">{metric.label}</p>
              <h3 className="text-6xl font-[900] italic tracking-tighter mb-4">{metric.value}</h3>
              <p className="text-sm text-white/50 leading-relaxed max-w-[240px]">{metric.description}</p>
              
              <div className="mt-8 pt-8 border-t border-white/5">
                <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: '100%' }}
                    transition={{ duration: 2, ease: "circOut" }}
                    className="h-full bg-blue-500 opacity-50"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
