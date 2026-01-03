
import React, { useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Metrics } from './components/Metrics';
import { Portfolio } from './components/Portfolio';
import { AIStrategist } from './components/AIStrategist';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  useEffect(() => {
    // Smooth scroll behavior
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const href = this.getAttribute('href');
        if (href) {
          document.querySelector(href)?.scrollIntoView({
            behavior: 'smooth'
          });
        }
      });
    });
  }, []);

  return (
    <div className="bg-[#050507] text-white min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Metrics />
        <Portfolio />
        <AIStrategist />
      </main>
      <Footer />
      
      {/* Global Grain/Noise Overlay */}
      <div className="fixed inset-0 pointer-events-none z-[9999] opacity-[0.03] overflow-hidden">
        <div className="absolute inset-[-200%] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] animate-grain" />
      </div>
      
      <style>{`
        @keyframes grain {
          0%, 100% { transform:translate(0, 0) }
          10% { transform:translate(-5%, -10%) }
          20% { transform:translate(-15%, 5%) }
          30% { transform:translate(7%, -25%) }
          40% { transform:translate(-5%, 25%) }
          50% { transform:translate(-15%, 10%) }
          60% { transform:translate(15%, 0%) }
          70% { transform:translate(0%, 15%) }
          80% { transform:translate(3%, 35%) }
          90% { transform:translate(-10%, 10%) }
        }
        .animate-grain {
          animation: grain 8s steps(10) infinite;
        }
        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </div>
  );
};

export default App;
