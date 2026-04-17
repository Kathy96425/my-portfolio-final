
import React from 'react';
import { motion } from 'motion/react';
import { Play } from 'lucide-react';

const CinemaHero: React.FC = () => {
  return (
    <div className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-black">
      {/* Cinematic Background Video/Image Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://picsum.photos/seed/cinematic/1920/1080?blur=4" 
          alt="Cinematic Background" 
          className="w-full h-full object-cover opacity-40 scale-105"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black" />
      </div>

      {/* Cinematic Elements: Film Grain/Noise Overlay */}
      <div className="absolute inset-0 pointer-events-none z-[1] opacity-[0.03] mix-blend-overlay">
        <div className="w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] bg-repeat" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, scale: 1.2, filter: 'blur(10px)' }}
          animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
          transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
          className="mb-12"
        >
          <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.8em] text-indigo-400 mb-6 block">
            A Visual Journey by Katherine Lay
          </span>
          <h1 className="text-7xl md:text-[12rem] font-black leading-[0.8] uppercase tracking-tighter mb-8 font-display">
            Visual <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-slate-500">
              Works
            </span>
          </h1>
          <p className="text-lg md:text-2xl font-light text-slate-400 tracking-widest uppercase italic max-w-2xl mx-auto leading-relaxed">
            "Capturing the essence of time through the lens of narrative."
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 1 }}
          className="flex flex-col items-center gap-12"
        >
          <div className="w-px h-24 bg-gradient-to-b from-indigo-500 to-transparent" />
          
          <button 
            onClick={() => {
              document.getElementById('visual-works-grid')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="group relative flex items-center gap-4 text-xs font-black uppercase tracking-[0.4em] text-white hover:text-indigo-400 transition-colors"
          >
            <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:border-indigo-400 transition-colors">
              <Play size={16} className="ml-1 fill-current" />
            </div>
            <span>Enter the Gallery</span>
          </button>
        </motion.div>
      </div>

      {/* Cinematic Frame: Letterbox */}
      <div className="absolute top-0 left-0 w-full h-12 bg-black z-20" />
      <div className="absolute bottom-0 left-0 w-full h-12 bg-black z-20" />
      
      {/* Side Rails */}
      <div className="absolute left-12 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-24 items-center z-20">
        <span className="writing-vertical-rl rotate-180 text-[10px] font-black uppercase tracking-[0.5em] text-slate-700">
          Cinematic Portfolio 2026
        </span>
        <div className="w-px h-32 bg-slate-800" />
      </div>

      <div className="absolute right-12 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-24 items-center z-20">
        <div className="w-px h-32 bg-slate-800" />
        <span className="writing-vertical-rl text-[10px] font-black uppercase tracking-[0.5em] text-slate-700">
          Scroll to explore
        </span>
      </div>
    </div>
  );
};

export default CinemaHero;
