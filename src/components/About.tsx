
import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useSpring, useMotionValue } from 'motion/react';
import { Lightbulb, ArrowUpRight, Star, Plus, GraduationCap, BookOpen, Sparkles, Target, Zap, Languages, MonitorPlay, Laptop, LineChart, Code } from 'lucide-react';
import { PERSONAL_INFO, PERSONAL_KEYWORDS, PERSONAL_PHOTOS, RESUME_SKILLS } from '../constants';

// Interactive Eye Component
const EyeFollower: React.FC = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Highly responsive springs for extremely snappy eye movement
  const springConfig = { damping: 10, stiffness: 500, mass: 0.5 }; 
  const eyeX = useSpring(mouseX, springConfig);
  const eyeY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // High sensitivity divisor (8 instead of 12 or 25)
      const x = (e.clientX - window.innerWidth / 2) / 8;
      const y = (e.clientY - window.innerHeight / 2) / 8;
      
      // Allow slightly wider range for pupils (up to 14px)
      mouseX.set(Math.max(-14, Math.min(14, x)));
      mouseY.set(Math.max(-12, Math.min(12, y)));
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div className="flex gap-4 p-8 bg-white/40 backdrop-blur-xl rounded-[2.5rem] border border-white/60 shadow-internet relative group">
       <div className="absolute -top-4 -right-4 bg-yellow-400 p-2 rounded-xl border-2 border-slate-900 rotate-12 shadow-hard-sm">
         < Zap size={20} className="fill-current text-slate-900" />
       </div>
       
       <div className="flex gap-3 items-center py-4">
         {/* Left Eye */}
         <div className="w-16 h-16 bg-white rounded-full border-2 border-slate-900 shadow-inner flex items-center justify-center overflow-hidden">
            <motion.div 
              style={{ x: eyeX, y: eyeY }}
              className="w-7 h-7 bg-slate-900 rounded-full relative"
            >
              {/* Eye Shine */}
              <div className="absolute top-1 left-1 w-2 h-2 bg-white rounded-full opacity-60" />
            </motion.div>
         </div>
         {/* Right Eye */}
         <div className="w-16 h-16 bg-white rounded-full border-2 border-slate-900 shadow-inner flex items-center justify-center overflow-hidden">
            <motion.div 
              style={{ x: eyeX, y: eyeY }}
              className="w-7 h-7 bg-slate-900 rounded-full relative"
            >
              {/* Eye Shine */}
              <div className="absolute top-1 left-1 w-2 h-2 bg-white rounded-full opacity-60" />
            </motion.div>
         </div>
       </div>

       <div className="flex flex-col justify-center ml-2">
         <div className="flex items-center gap-2 text-indigo-500 font-black text-[10px] uppercase tracking-widest italic">
            <Sparkles size={14} />
            <span>WATCHING  FOR TREND</span>
         </div>
         <p className="text-[11px] font-bold text-slate-400 mt-1.5 leading-tight max-w-[160px]">
           Thinking like a strategist; Creating like a storyteller.
         </p>
       </div>
    </div>
  );
};

const About: React.FC = () => {
  const [photos, setPhotos] = useState<string[]>(PERSONAL_PHOTOS.map(p => p.src));
  const [photoIndex, setPhotoIndex] = useState(0);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Auto-switch photos
  useEffect(() => {
    if (photos.length <= 1) return;
    const timer = setInterval(() => {
      setPhotoIndex((prev) => (prev + 1) % photos.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [photos.length]);

  const nextPhoto = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (photos.length <= 1) return;
    setPhotoIndex((prev) => (prev + 1) % photos.length);
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      const newPhotos = [...photos];
      newPhotos.splice(photoIndex + 1, 0, url);
      setPhotos(newPhotos);
      setPhotoIndex(photoIndex + 1);
    }
  };

  return (
    <section id="about" className="py-32 relative overflow-hidden bg-transparent">
      {/* Dynamic Background Decorations */}
      <motion.div 
        animate={{ scale: [1, 1.1, 1], rotate: [0, 90, 0] }}
        transition={{ duration: 20, repeat: Infinity }}
        className="absolute top-40 right-10 w-96 h-96 bg-indigo-200/30 rounded-full blur-[80px] -z-10" 
      />
      <motion.div 
        animate={{ scale: [1, 1.2, 1], x: [0, 50, 0] }}
        transition={{ duration: 15, repeat: Infinity }}
        className="absolute bottom-40 left-10 w-80 h-80 bg-rose-200/30 rounded-full blur-[100px] -z-10" 
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12 mb-24">
          <div className="max-w-2xl">
             <motion.div 
               initial={{ width: 0 }} 
               whileInView={{ width: '120px' }} 
               className="h-2 bg-gradient-to-r from-blue-600 to-indigo-400 mb-8 rounded-full" 
             />
             <h2 className="text-7xl md:text-9xl font-black text-slate-900 leading-[0.8] font-display uppercase tracking-tighter">
               ABOUT <br/>
               <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">ME</span>
             </h2>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
          >
             <EyeFollower />
          </motion.div>
        </div>

        {/* Main Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Photo & Education vertical stack (lg:col-span-5) */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            
            {/* 1. Photo Frame Card - Balanced to 520px */}
            <motion.div 
              className="relative h-[520px] w-full flex items-center justify-center cursor-pointer group"
              initial={{ opacity: 0, x: -30 }} 
              whileInView={{ opacity: 1, x: 0 }}
              onClick={nextPhoto}
            >
              <div className="absolute inset-0 bg-slate-900/5 rounded-[4rem] translate-x-4 translate-y-4 blur-3xl opacity-0 group-hover:opacity-100 transition-all duration-500" />
              
              <div className="relative w-full h-full max-w-md">
                <AnimatePresence mode="popLayout">
                  {photos.map((src, i) => {
                    const position = (i - photoIndex + photos.length) % photos.length;
                    if (position > 2) return null;

                    return (
                      <motion.div
                        key={src}
                        layout
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ 
                          opacity: 1 - position * 0.3, 
                          scale: 1 - position * 0.05, 
                          x: position * 30, 
                          y: position * 20, 
                          rotate: position * 5 + (position === 0 ? 0 : (i % 2 === 0 ? 8 : -8)),
                          zIndex: photos.length - position
                        }}
                        exit={{ opacity: 0, x: -100, rotate: -20, scale: 0.5 }}
                        className="absolute inset-0 bg-white p-4 pb-20 rounded-[3rem] shadow-internet overflow-hidden border border-slate-100"
                      >
                        <div className="w-full h-full rounded-[2.5rem] overflow-hidden">
                          <img src={src} className="w-full h-full object-cover pointer-events-none" alt="Gallery" />
                        </div>
                        <div className="absolute bottom-8 left-0 right-0 text-center">
                          <span className="text-[10px] font-black text-slate-300 uppercase tracking-widest">
                            Identity Frame // 0{i + 1}
                          </span>
                        </div>
                      </motion.div>
                    );
                  })}
                </AnimatePresence>

                <motion.div 
                  whileHover={{ scale: 1.1, rotate: 0 }}
                  onClick={(e) => { e.stopPropagation(); fileInputRef.current?.click(); }}
                  className="absolute -bottom-6 -right-6 w-20 h-20 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-2xl flex flex-col items-center justify-center shadow-lg border-4 border-white z-[60] rotate-12 cursor-pointer transition-transform"
                >
                  <Plus size={28} className="text-white" />
                  <input type="file" ref={fileInputRef} className="hidden" accept="image/*" onChange={handleImageUpload} />
                </motion.div>
              </div>
            </motion.div>

            {/* 2. Education Card - Lengthened and enriched */}
            <motion.div 
              className="relative group cursor-default flex-1"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              <div className="absolute inset-0 bg-slate-900/10 rounded-[3rem] translate-x-4 translate-y-4 -z-10 opacity-0 group-hover:opacity-40 group-hover:translate-x-6 group-hover:translate-y-6 blur-2xl transition-all duration-500" />
              
              <div className="h-full bg-gradient-to-br from-blue-600 to-indigo-700 text-white p-12 rounded-[3rem] relative overflow-hidden border border-white/10 shadow-pop transition-all duration-300 group-hover:-translate-y-2 flex flex-col justify-center">
                <GraduationCap size={160} className="absolute -right-10 -bottom-10 opacity-10 group-hover:scale-110 transition-transform duration-700" />
                <div className="relative z-10 space-y-6">
                  <div>
                    <div className="bg-white/20 backdrop-blur-md inline-block px-4 py-1.5 rounded-full font-black text-[10px] uppercase tracking-widest mb-4 border border-white/20">
                      Academic Pillar
                    </div>
                    <h3 className="text-3xl font-black font-display tracking-tight leading-tight mb-2">{PERSONAL_INFO.university}</h3>
                    <div className="flex items-center gap-3 text-indigo-100 font-bold text-lg">
                      <span>{PERSONAL_INFO.major}</span>
                      <div className="w-2 h-2 rounded-full bg-yellow-400" />
                      <span className="text-white/60 text-xs tracking-wider uppercase">Rank 15%</span>
                    </div>
                  </div>
                  
                  <div className="pt-6 border-t border-white/10">
                    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-indigo-200 mb-4 flex items-center gap-2">
                      <BookOpen size={14} /> Major Highlights
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {PERSONAL_INFO.courses.map((course, i) => (
                        <span key={i} className="text-[11px] font-bold bg-white/10 px-4 py-2 rounded-full border border-white/10 transition-all cursor-default hover:bg-white/20">
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Core Value pillar (lg:col-span-7) */}
          <div className="lg:col-span-7">
            {/* 3. Core Value Card (Tall, detailed, acting as the main anchor) */}
            <motion.div 
              className="relative group cursor-default h-full"
              initial={{ opacity: 0, x: 30 }} 
              whileInView={{ opacity: 1, x: 0 }}
            >
              <div className="absolute inset-0 bg-indigo-600/10 rounded-[3.5rem] translate-x-4 translate-y-4 -z-10 opacity-0 group-hover:opacity-40 group-hover:translate-x-8 group-hover:translate-y-8 blur-3xl transition-all duration-500" />
              
              <div className="h-full bg-white p-12 rounded-[3.5rem] shadow-internet border border-slate-100 relative overflow-hidden transition-all duration-300 group-hover:-translate-y-4 flex flex-col">
                <div className="flex items-center justify-between mb-10">
                  <div className="flex items-center gap-5">
                    <div className="w-14 h-14 bg-indigo-600 rounded-2xl flex items-center justify-center text-white shadow-lg rotate-3 group-hover:rotate-0 transition-transform">
                      <Star size={28} fill="currentColor" />
                    </div>
                    <div>
                      <h3 className="text-4xl font-black text-slate-900 font-display uppercase tracking-tight">Core Values</h3>
                      <p className="text-[10px] font-black text-indigo-400 uppercase tracking-widest mt-1">Signal · Create · Story · Optimize · Growth</p>
                    </div>
                  </div>
                  <div className="hidden sm:flex items-center gap-2 bg-slate-50 px-4 py-2 rounded-2xl border border-slate-100">
                    <Target size={16} className="text-indigo-500" />
                    <span className="text-[10px] font-black text-slate-400 uppercase">Growth DNA</span>
                  </div>
                </div>

                <div className="relative flex-1">
                  <div className="grid grid-cols-1 gap-8">
                    {PERSONAL_INFO.advantages.split('\n').map((line, i) => {
                      const cleanLine = line.replace(/^\d+\.\s*/, '').replace(/\*\*/g, '');
                      const parts = cleanLine.split('：');
                      const title = parts[0];
                      const content = parts.slice(1).join('：');

                      return (
                        <div key={i} className="group/line relative pl-8 border-l-2 border-slate-50 hover:border-indigo-400 transition-colors">
                          <div className="absolute left-0 top-1 -translate-x-1/2 w-3 h-3 bg-white border-2 border-indigo-500 rounded-full group-hover/line:bg-indigo-500 transition-colors" />
                          <p className="text-[17px] font-bold text-slate-700 leading-relaxed">
                            {title && (
                              <span className="bg-yellow-100/60 px-1 mr-1 rounded-sm text-slate-900 font-black">
                                {title}：
                              </span>
                            )}
                            <span className="opacity-90 group-hover/line:opacity-100 transition-opacity">
                              {content}
                            </span>
                          </p>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div className="mt-12 pt-8 border-t border-slate-50 flex items-center justify-between">
                   <motion.div 
                     animate={{ 
                       scale: [1, 1.05, 1],
                       opacity: [0.9, 1, 0.9]
                     }}
                     transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                     className="text-yellow-400 relative"
                   >
                     {/* Lightbulb in drawing/sketch style */}
                     <Lightbulb 
                        size={38} 
                        strokeWidth={1.5} 
                        className="filter drop-shadow-[0_0_12px_rgba(250,204,21,0.5)]" 
                     />
                     <motion.div 
                        animate={{ opacity: [0, 0.4, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="absolute inset-0 bg-yellow-400/20 blur-xl rounded-full -z-10"
                     />
                   </motion.div>
                   <p className="text-xs font-bold text-slate-400 italic">A creative soul.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Keywords Section */}
        <div className="relative pt-40">
          <div className="flex items-center gap-6 mb-20">
             <div className="flex items-center gap-3 bg-indigo-600 text-white px-6 py-2.5 rounded-full text-[10px] sm:text-xs font-black tracking-[0.3em] uppercase shadow-xl">
                <Sparkles size={16} className="text-yellow-400" />
                THREE KEY WORDS ABOUT ME
             </div>
             <div className="flex-1 h-[2px] bg-slate-200" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {PERSONAL_KEYWORDS.map((keyword) => {
              const isK1 = keyword.id === 'k1'; // "创意" Keyword
              const textColor = isK1 ? 'text-slate-900' : 'text-white';
              const borderColor = isK1 ? 'border-slate-900/20' : 'border-white/20';

              return (
                <motion.div 
                  key={keyword.id}
                  whileHover={{ y: -24, scale: 1.05 }}
                  className="group relative h-[480px] cursor-pointer"
                >
                  <div className={`absolute inset-0 ${keyword.iconBg} rounded-[4rem] translate-x-4 translate-y-4 -z-10 opacity-0 group-hover:opacity-25 group-hover:translate-x-12 group-hover:translate-y-12 blur-[48px] transition-all duration-700`} />

                  <div className="absolute inset-0 bg-white rounded-[4rem] border border-slate-100 overflow-hidden flex flex-col items-center justify-center p-12 transition-all duration-300 group-hover:shadow-2xl">
                    {/* Default State */}
                    <div className="flex flex-col items-center transition-all duration-500 group-hover:scale-0 group-hover:opacity-0">
                        <div className={`w-24 h-24 ${keyword.iconBg} rounded-[2rem] flex items-center justify-center mb-10 shadow-lg`}>
                          <Lightbulb size={48} className={keyword.iconColor} />
                        </div>
                        <h4 className="text-4xl font-black text-slate-900 mb-2 font-display uppercase">{keyword.title}</h4>
                        <p className="text-xs font-black text-slate-400 tracking-[0.3em] uppercase">{keyword.engTitle}</p>
                    </div>

                    {/* Hover State Detail */}
                    <div className={`absolute inset-0 ${keyword.color} rounded-[4rem] p-12 flex flex-col justify-center translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-[cubic-bezier(0.23, 1, 0.32, 1)]`}>
                        <div className="flex justify-between items-center mb-6">
                          <h4 className={`text-4xl font-black ${textColor} font-display uppercase tracking-tight`}>{keyword.title}</h4>
                          <ArrowUpRight className={textColor} size={32} />
                        </div>
                        
                        <p className={`font-black text-xl leading-tight ${textColor} mb-6 border-b-2 ${borderColor} pb-4`}>
                          {keyword.subtitle}
                        </p>
                        
                        <div className="flex-1 overflow-y-auto pr-2 custom-scrollbar">
                          <p className={`font-bold text-base leading-relaxed ${textColor} opacity-95 whitespace-pre-wrap`}>
                            {keyword.description}
                          </p>
                        </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Skills Section */}
        <div className="relative pt-40">
          <div className="flex items-center gap-6 mb-20">
             <div className="flex items-center gap-3 bg-slate-900 text-white px-6 py-2.5 rounded-full text-[10px] sm:text-xs font-black tracking-[0.3em] uppercase shadow-xl">
                <Code size={16} className="text-emerald-400" />
                PROFESSIONAL SKILLS
             </div>
             <div className="flex-1 h-[2px] bg-slate-200" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 px-2 md:px-4">
            {RESUME_SKILLS.map((skill, index) => {
              const IconMap: Record<string, React.ElementType> = {
                Languages: Languages,
                MonitorPlay: MonitorPlay,
                Laptop: Laptop,
                LineChart: LineChart
              };
              const Icon = IconMap[skill.icon] || Star;
              
              // Clean, simple themes with color differentiation, distinct borders and shadows
              const themes = [
                { bg: 'bg-rose-50', border: 'border-rose-200', iconBg: 'bg-rose-100', iconColor: 'text-rose-600' },
                { bg: 'bg-sky-50', border: 'border-sky-200', iconBg: 'bg-sky-100', iconColor: 'text-sky-600' },
                { bg: 'bg-amber-50', border: 'border-amber-200', iconBg: 'bg-amber-100', iconColor: 'text-amber-600' },
                { bg: 'bg-purple-50', border: 'border-purple-200', iconBg: 'bg-purple-100', iconColor: 'text-purple-600' }
              ];
              const theme = themes[index % themes.length];

              return (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ y: -5 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className={`relative p-6 rounded-[1.5rem] ${theme.bg} border ${theme.border} shadow-md hover:shadow-xl transition-all duration-300 group flex flex-col items-center text-center z-10`}
                >
                  {/* Icon Container */}
                  <div className={`w-14 h-14 rounded-full flex items-center justify-center shrink-0 ${theme.iconBg} ${theme.iconColor} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon size={24} strokeWidth={2} />
                  </div>
                  
                  <h4 className="text-lg font-bold text-slate-900 mb-2 tracking-tight">{skill.title}</h4>
                  <p className="text-slate-600 text-xs font-medium leading-relaxed w-full">
                    {skill.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
      <style dangerouslySetInnerHTML={{ __html: `
        .custom-scrollbar::-webkit-scrollbar { width: 4px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: rgba(255, 255, 255, 0.2); border-radius: 10px; }
      `}} />
    </section>
  );
};

export default About;
