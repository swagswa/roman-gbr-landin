
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Mechanic } from '../types';

const MECHANICS: Mechanic[] = [
  { title: "THE HOOK", description: "The first 3 seconds dictate your growth. I craft hooks that stop the scroll instantly.", color: "from-blue-500" },
  { title: "PATTERN BREAKS", description: "Disrupting the viewer's rhythm to reset attention. Keeping the brain curious.", color: "from-purple-500" },
  { title: "PACING", description: "Rhythm is everything. I edit for the heartbeat of the modern viewer.", color: "from-green-500" },
  { title: "SOUND DESIGN", description: "Audio is 50% of the video. Cinematic foley that creates a physical reaction.", color: "from-red-500" },
  { title: "VISUAL RHYTHM", description: "Syncing movement with meaning. Every cut has a purpose.", color: "from-yellow-500" },
];

export const AttentionMechanics = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-60%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-black">
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-8 px-12 md:px-24">
          <div className="flex-shrink-0 w-[400px] flex flex-col justify-center pr-12">
            <h2 className="text-6xl font-[900] italic tracking-tighter uppercase mb-6">
              ATTENTION <br />
              <span className="text-white/20">MECHANICS</span>
            </h2>
            <p className="text-white/40 text-sm leading-relaxed max-w-xs uppercase tracking-widest font-bold">
              Mastering the psychology of short-form retention through precise motion.
            </p>
          </div>
          
          {MECHANICS.map((m, i) => (
            <motion.div
              key={i}
              className="flex-shrink-0 w-[450px] p-12 rounded-[2.5rem] bg-[#0a0a0c] border border-white/5 flex flex-col justify-between group relative overflow-hidden"
            >
              <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${m.color} to-transparent opacity-30`} />
              <div>
                <span className="text-[10px] font-bold text-white/20 tracking-[0.4em] mb-8 block">STEP 0{i + 1}</span>
                <h3 className="text-4xl font-[900] italic tracking-tight mb-6 group-hover:text-blue-400 transition-colors">{m.title}</h3>
                <p className="text-lg text-white/60 leading-relaxed font-medium">{m.description}</p>
              </div>
              
              <div className="mt-12 flex items-center justify-end">
                 <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center opacity-40 group-hover:opacity-100 transition-opacity">
                   <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                   </svg>
                 </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
