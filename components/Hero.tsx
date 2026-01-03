
import React from 'react';
import { motion } from 'framer-motion';
import { Hero3D } from './ThreeScene';

export const Hero = () => {
  return (
    <section className="relative min-h-[100svh] w-full flex flex-col items-center justify-center overflow-hidden bg-[#050507]">
      {/* Perfectly Centered Background Scene */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <Hero3D />
      </div>
      
      {/* Decorative Gradient Background for Depth */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-[1400px] max-h-[1400px] bg-blue-500/5 blur-[180px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 z-10 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-black/40 backdrop-blur-xl text-[9px] font-bold uppercase tracking-[0.3em] text-blue-400 mb-10"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
          </span>
          Retention Architect
        </motion.div>

        <div className="relative">
          <h1 className="flex flex-col items-center leading-[0.85] select-none">
            <motion.span 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-[16vw] md:text-[12rem] font-[900] italic tracking-tighter text-white"
            >
              ROMAN
            </motion.span>
            <motion.span 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              /* Увеличен pr-[0.2em] для запаса под наклон буквы 'R' */
              className="text-[16vw] md:text-[12rem] font-[900] italic tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-white via-white/70 to-white/10 -mt-2 md:-mt-8 pr-[0.2em]"
            >
              GBR
            </motion.span>
          </h1>
          
          {/* Subtle accent glow behind the name to ground the 3D model */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-500/5 blur-[100px] rounded-full -z-10" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 1 }}
          className="mt-12 md:mt-20 max-w-2xl mx-auto"
        >
          <p className="text-lg md:text-2xl text-white/50 font-medium tracking-tight leading-relaxed px-4">
            Transforming raw footage into <span className="text-white">retention machines</span>. <br className="hidden md:block" />
            Scaling creators to millions through <span className="text-white italic">motion psychology</span>.
          </p>
          
          <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="h-14 px-10 bg-white text-black font-bold rounded-full text-xs uppercase tracking-widest hover:bg-blue-400 transition-colors shadow-2xl shadow-blue-500/10"
            >
              The Portfolio
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="h-14 px-10 border border-white/10 bg-white/5 backdrop-blur-md text-white font-bold rounded-full text-xs uppercase tracking-widest hover:bg-white/10 transition-colors"
            >
              Get Started
            </motion.button>
          </div>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
      >
        <div className="w-[1px] h-12 bg-gradient-to-b from-blue-500 to-transparent opacity-50" />
        <span className="text-white/20 text-[8px] uppercase tracking-[0.6em]">Scroll to Explore</span>
      </motion.div>
    </section>
  );
};
