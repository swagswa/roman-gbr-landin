
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { generateHook } from '../services/geminiService';

export const AIStrategist = () => {
  const [idea, setIdea] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<string | null>(null);

  const handleGenerate = async () => {
    if (!idea.trim()) return;
    setLoading(true);
    setResult(null);
    const hook = await generateHook(idea);
    setResult(hook);
    setLoading(false);
  };

  return (
    <section id="the-hook" className="py-32 bg-[#050507]">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="bg-[#0a0a0c] border border-white/5 rounded-[3rem] p-12 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-green-500 opacity-20" />
          
          <div className="flex items-center gap-4 mb-12">
            <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center border border-blue-500/20 text-blue-500">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2L4.5 20.29l.71.71L12 18l6.79 3 .71-.71z" />
              </svg>
            </div>
            <div>
              <h3 className="text-2xl font-bold tracking-tight">AI Content Strategist</h3>
              <p className="text-white/40 text-xs uppercase tracking-widest font-bold">Powered by Gemini 3 Pro</p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="relative">
              <label className="block text-[10px] font-bold text-white/30 uppercase tracking-[0.2em] mb-3 ml-2">Input your content idea</label>
              <div className="flex flex-col md:flex-row gap-4">
                <input 
                  type="text"
                  value={idea}
                  onChange={(e) => setIdea(e.target.value)}
                  placeholder="e.g. Cooking a giant burger in a forest"
                  className="flex-1 bg-black border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-blue-500/50 transition-colors text-white placeholder:text-white/20"
                />
                <button 
                  onClick={handleGenerate}
                  disabled={loading}
                  className="bg-white text-black font-bold px-8 py-4 rounded-2xl hover:bg-blue-400 transition-all disabled:opacity-50 flex items-center justify-center gap-2 group"
                >
                  {loading ? (
                    <span className="w-5 h-5 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                  ) : (
                    <>
                      <svg className="w-4 h-4 group-hover:rotate-12 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
                      </svg>
                      Generate Hook
                    </>
                  )}
                </button>
              </div>
            </div>

            <AnimatePresence mode="wait">
              {result && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="p-8 rounded-2xl bg-white/5 border border-white/10 relative group"
                >
                  <div className="absolute top-4 right-4 text-[10px] font-bold text-blue-400 uppercase tracking-widest bg-blue-400/10 px-2 py-1 rounded">Strategy</div>
                  <div className="prose prose-invert max-w-none">
                    <p className="text-lg md:text-xl font-medium leading-relaxed italic text-white/90">
                      {result}
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-[10px] text-white/20 uppercase tracking-[0.3em]">Goal: Demonstrate Thinking, not selling SaaS.</p>
          </div>
        </div>
      </div>
    </section>
  );
};
