
import React from 'react';
import { motion } from 'framer-motion';

export const Footer = () => {
  return (
    <footer id="connect" className="relative pt-48 pb-24 bg-black overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/10 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-6xl md:text-9xl font-[900] italic tracking-tighter leading-none mb-8 text-white">
            READY TO <br />
            <span className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-white to-purple-500 bg-[length:200%_auto] animate-slow-gradient pr-[0.2em] pb-2">
              GO VIRAL?
            </span>
          </h2>
          
          <p className="text-white/50 text-xl font-medium mb-12 max-w-xl mx-auto">
            Stop posting edits. Start posting movements. I take your raw vision and turn it into millions of views.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.dispatchEvent(new CustomEvent('open-contact-modal'))}
              className="px-10 py-5 bg-white text-black font-bold rounded-full text-lg hover:bg-blue-400 transition-colors w-full sm:w-auto"
            >
              START A PROJECT
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.dispatchEvent(new CustomEvent('open-contact-modal'))}
              className="px-10 py-5 bg-white/5 border border-white/10 font-bold rounded-full text-lg hover:bg-white/10 transition-all w-full sm:w-auto"
            >
              CONTACT ME
            </motion.button>
          </div>
        </motion.div>

        <div className="mt-48 pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-8 text-[10px] font-bold text-white/30 uppercase tracking-[0.3em]">
          <p>© 2025 ROMANGBR STUDIOS</p>
          <div className="flex gap-12">
            <a href="#" className="hover:text-white transition-colors">IG: @ROMANGBR</a>
            <a href="#" className="hover:text-white transition-colors">YT: @ROMANGBR_EDITS</a>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes slow-gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-slow-gradient {
          animation: slow-gradient 8s ease infinite;
        }
      `}</style>
    </footer>
  );
};
