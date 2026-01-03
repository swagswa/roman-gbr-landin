
import React from 'react';
import { motion } from 'framer-motion';

export const Navbar = () => {
  const navItems = [
    { name: 'WORK', href: '#work' },
    { name: 'RESULTS', href: '#results' },
    { name: 'THE HOOK', href: '#the-hook' },
    { name: 'CONNECT', href: '#connect' },
  ];

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 w-full z-50 p-6 md:p-10 pointer-events-none"
    >
      <div className="container mx-auto flex items-center justify-between pointer-events-auto">
        <a href="#" className="text-xl font-[900] italic tracking-tighter">ROMANGBR</a>
        
        <div className="hidden md:flex items-center gap-10">
          {navItems.map((item) => (
            <a 
              key={item.name} 
              href={item.href}
              className="text-[10px] font-bold tracking-[0.3em] text-white/40 hover:text-white transition-colors"
            >
              {item.name}
            </a>
          ))}
        </div>

        <button className="md:hidden w-8 h-8 flex flex-col justify-center gap-1.5 items-end group">
           <div className="w-8 h-0.5 bg-white/60 group-hover:bg-white transition-all" />
           <div className="w-4 h-0.5 bg-white/60 group-hover:bg-white transition-all" />
        </button>
      </div>
    </motion.nav>
  );
};
