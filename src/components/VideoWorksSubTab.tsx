import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform, useSpring } from 'framer-motion';
import { PROJECTS } from '../constants';
import { Play, X, Clapperboard, Award, Film, BookOpen, Layout, MessageSquare, ChevronRight, Camera, Scissors, MonitorPlay } from 'lucide-react';
import { Project, ProjectCategory } from '../types';

const VideoWorksSubTab: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isIntroComplete, setIsIntroComplete] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const videoProjects = PROJECTS.filter(p => p.category === ProjectCategory.VIDEO);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 50,
    damping: 20,
    restDelta: 0.001
  });

  // Film strip path unrolling effect
  const pathLength = useTransform(smoothProgress, [0, 0.8], [0, 1]);

  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [selectedProject]);

  // Intro Countdown Animation
  useEffect(() => {
    const timer = setTimeout(() => setIsIntroComplete(true), 3500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div ref={containerRef} className="relative min-h-screen bg-[#050404] text-[#E8E2D4] overflow-hidden font-serif">
      {/* Intro Animation Layer */}
      <AnimatePresence>
        {!isIntroComplete && (
          <motion.div 
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, y: -100 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[200] bg-[#050404] flex items-center justify-center pointer-events-none"
          >
            <div className="relative flex flex-col items-center">
              {/* Film Leader Countdown */}
              <motion.div 
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="w-64 h-64 rounded-full border-4 border-[#C73D2E]/30 flex items-center justify-center relative overflow-hidden"
              >
                {/* Rotating Line */}
                <motion.div 
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: 3, ease: "linear" }}
                  className="absolute inset-0 border-t-4 border-[#FFD166] rounded-full"
                />
                
                {/* Numbers */}
                <div className="text-8xl font-black text-[#FFD166] italic">
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: [0, 1, 0] }}
                    transition={{ times: [0, 0.1, 1], duration: 1, delay: 0 }}
                  >3</motion.span>
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: [0, 1, 0] }}
                    transition={{ times: [0, 0.1, 1], duration: 1, delay: 1 }}
                    className="absolute inset-0 flex items-center justify-center"
                  >2</motion.span>
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: [0, 1, 0] }}
                    transition={{ times: [0, 0.1, 1], duration: 1, delay: 2 }}
                    className="absolute inset-0 flex items-center justify-center"
                  >1</motion.span>
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2.8 }}
                className="mt-8 flex items-center gap-4"
              >
                <div className="h-px w-12 bg-[#C73D2E]" />
                <span className="text-[#FFD166] tracking-[0.8em] text-[10px] uppercase font-bold">Rolling...</span>
                <div className="h-px w-12 bg-[#C73D2E]" />
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Background Atmosphere */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {/* Deep Red Glows */}
        <div className="absolute top-[-10%] right-[-10%] w-[60%] h-[60%] bg-[#C73D2E]/10 blur-[180px] rounded-full" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[60%] h-[60%] bg-[#C73D2E]/5 blur-[180px] rounded-full" />
        
        {/* Film Grain (Global) */}
        <div className="absolute inset-0 opacity-[0.04] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      </div>

      {/* Winding Film Strip SVG */}
      <div className="absolute inset-0 pointer-events-none z-10 overflow-visible">
        <svg width="100%" height="100%" viewBox="0 0 1000 5000" preserveAspectRatio="none" className="opacity-40">
          <defs>
            <pattern id="sprocketHoles" x="0" y="0" width="24" height="48" patternUnits="userSpaceOnUse">
              <rect x="6" y="8" width="12" height="12" rx="2" fill="#C73D2E" fillOpacity="0.9" />
              <rect x="6" y="28" width="12" height="12" rx="2" fill="#C73D2E" fillOpacity="0.9" />
            </pattern>
            <filter id="neonGlow">
              <feGaussianBlur stdDeviation="8" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>
          
          {/* Film Strip Body */}
          <motion.path
            d="M 900 0 C 800 500, 200 800, 100 1200 S 800 1800, 900 2400 S 200 3000, 100 3600 S 800 4200, 900 5000"
            fill="none"
            stroke="#110d0c"
            strokeWidth="140"
          />
          
          {/* Sprocket Holes */}
          <motion.path
            d="M 900 0 C 800 500, 200 800, 100 1200 S 800 1800, 900 2400 S 200 3000, 100 3600 S 800 4200, 900 5000"
            fill="none"
            stroke="url(#sprocketHoles)"
            strokeWidth="140"
          />

          {/* Golden Thread Line */}
          <motion.path
            d="M 900 0 C 800 500, 200 800, 100 1200 S 800 1800, 900 2400 S 200 3000, 100 3600 S 800 4200, 900 5000"
            fill="none"
            stroke="#FFD166"
            strokeWidth="2"
            style={{ pathLength }}
            filter="url(#neonGlow)"
          />
        </svg>
      </div>

      {/* Main Content */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: isIntroComplete ? 1 : 0 }}
        transition={{ duration: 1.5 }}
        className="relative z-20"
      >
        {/* Hero Section */}
        <section className="pt-48 pb-64 px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-6 mb-12"
          >
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-[#C73D2E]" />
            <span className="text-[#FFD166] tracking-[1em] text-[11px] uppercase font-bold">Cinematic Vision</span>
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-[#C73D2E]" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-7xl md:text-[10rem] font-black text-white italic tracking-tighter leading-none mb-12"
            style={{ fontFamily: "'Source Han Serif', '思源宋体', serif" }}
          >
            光影<span className="text-[#C73D2E] drop-shadow-[0_0_30px_rgba(199,61,46,0.4)]">叙事</span>集
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="max-w-3xl mx-auto text-[#B8A99A] text-xl font-light tracking-[0.2em] leading-relaxed italic"
          >
            “影像不是现实的反映，而是对现实的重塑。”
          </motion.p>
        </section>

        {/* Projects Grid */}
        <div className="max-w-7xl mx-auto px-6 space-y-[40vh] pb-[40vh]">
          {videoProjects.map((project, index) => {
            const isEven = index % 2 === 0;
            return (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 150 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-150px" }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-16 md:gap-32`}
              >
                {/* Cinematic Frame */}
                <div 
                  className="relative group w-full md:w-3/5 aspect-video cursor-pointer overflow-hidden"
                  onClick={() => setSelectedProject(project)}
                >
                  {/* The "Lens" Effect */}
                  <div className="absolute inset-0 z-10 border-[20px] md:border-[40px] border-[#050404] pointer-events-none" />
                  
                  <motion.div 
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                    className="w-full h-full relative"
                  >
                    <img 
                      src={project.imageUrl} 
                      alt={project.title}
                      className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-all duration-1000 grayscale-[40%] group-hover:grayscale-0"
                    />
                    
                    {/* Play Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center bg-[#C73D2E]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                      <div className="w-24 h-24 rounded-full bg-[#FFD166] flex items-center justify-center text-[#050404] shadow-[0_0_60px_rgba(255,209,102,0.5)]">
                        <Play size={36} fill="currentColor" className="ml-1" />
                      </div>
                    </div>

                    {/* Meta Info Overlay */}
                    <div className="absolute bottom-12 left-12 z-20 opacity-0 group-hover:opacity-100 transition-all duration-700 translate-y-4 group-hover:translate-y-0">
                      <div className="flex items-center gap-4 text-[10px] font-mono text-[#FFD166] tracking-[0.3em] uppercase">
                        <span>REC 00:0{index + 1}:42:12</span>
                        <div className="w-2 h-2 rounded-full bg-[#C73D2E] animate-pulse" />
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Content Section */}
                <div className={`w-full md:w-2/5 space-y-10 ${isEven ? 'text-left' : 'text-right md:text-left'}`}>
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <span className="text-[#C73D2E] font-black text-2xl italic tracking-tighter">0{index + 1}</span>
                      <div className="h-px flex-grow bg-gradient-to-r from-[#C73D2E]/40 to-transparent" />
                    </div>
                    <h2 
                      className="text-5xl md:text-7xl font-black text-white leading-tight"
                      style={{ fontFamily: "'Source Han Serif', '思源宋体', serif" }}
                    >
                      {project.title}
                    </h2>
                  </div>

                  <p className="text-[#B8A99A] text-lg font-light leading-relaxed tracking-wide">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-4">
                    {project.tags?.map(tag => (
                      <span key={tag} className="text-[10px] tracking-[0.4em] text-[#FFD166]/60 uppercase font-bold border-b border-[#FFD166]/20 pb-1">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="pt-8">
                    <motion.button
                      whileHover={{ x: 15 }}
                      onClick={() => setSelectedProject(project)}
                      className="group flex items-center gap-6 text-white text-xs font-bold tracking-[0.5em] uppercase"
                    >
                      <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:border-[#FFD166] group-hover:bg-[#FFD166] group-hover:text-black transition-all duration-500">
                        <ChevronRight size={20} />
                      </div>
                      Explore Case
                    </motion.button>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </motion.div>

      {/* Cinematic Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[300] flex flex-col bg-[#050404] overflow-y-auto"
          >
            {/* Modal Header */}
            <div className="sticky top-0 z-[310] flex justify-between items-center px-12 py-8 bg-[#050404]/90 backdrop-blur-3xl border-b border-[#C73D2E]/10">
              <div className="flex items-center gap-6">
                <Clapperboard className="text-[#C73D2E]" size={28} />
                <div>
                  <h2 className="text-3xl font-black text-white tracking-tight" style={{ fontFamily: "'Source Han Serif', '思源宋体', serif" }}>
                    {selectedProject.title}
                  </h2>
                  <p className="text-[10px] text-[#FFD166] tracking-[0.5em] uppercase font-bold mt-1">{selectedProject.role}</p>
                </div>
              </div>
              <button 
                onClick={() => {
                  setSelectedProject(null);
                  setIsPlaying(false);
                }}
                className="group p-4 hover:bg-[#C73D2E]/10 text-[#B8A99A] hover:text-[#FFD166] rounded-full transition-all"
              >
                <X className="w-10 h-10 group-hover:rotate-90 transition-transform duration-500" />
              </button>
            </div>

            <div className="max-w-6xl mx-auto px-6 py-24 space-y-48">
              {/* 1. Main Video Section */}
              <section className="space-y-12">
                <div className="flex items-center gap-6">
                  <MonitorPlay className="text-[#C73D2E]" size={32} />
                  <h3 className="text-3xl font-black text-white tracking-widest uppercase">Video Showcase / 视频展示</h3>
                </div>
                
                <div className="relative aspect-video rounded-none overflow-hidden bg-black shadow-[0_0_100px_rgba(199,61,46,0.2)] group">
                  {isPlaying && selectedProject.videoUrl ? (
                    selectedProject.videoUrl.includes('bilibili.com') ? (
                      <iframe 
                        src={selectedProject.videoUrl} 
                        className="w-full h-full border-0"
                        title={selectedProject.title}
                        scrolling="no"
                        allowFullScreen={true}
                      />
                    ) : (
                      <video 
                        src={selectedProject.videoUrl} 
                        controls 
                        autoPlay 
                        className="w-full h-full object-cover"
                      />
                    )
                  ) : (
                    <>
                      <img 
                        src={selectedProject.imageUrl} 
                        alt="Video Preview"
                        className="w-full h-full object-cover opacity-30 group-hover:opacity-50 transition-opacity duration-1000"
                      />
                      <div className="absolute inset-0 flex flex-col items-center justify-center gap-10">
                        <motion.button 
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          onClick={() => setIsPlaying(true)}
                          className="w-32 h-32 rounded-full bg-[#C73D2E] flex items-center justify-center text-white shadow-[0_0_80px_rgba(199,61,46,0.6)]"
                        >
                          <Play size={48} fill="currentColor" className="ml-2" />
                        </motion.button>
                        <div className="text-center space-y-4">
                          <p className="text-[#FFD166] text-sm tracking-[0.8em] uppercase font-bold">Play Cinematic Version</p>
                          <div className="flex justify-center gap-8 text-white/20 text-[10px] font-mono tracking-widest">
                            <span>4K UHD</span>
                            <span>DOLBY VISION</span>
                            <span>24 FPS</span>
                          </div>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </section>

              {/* 2. Script & Storyboard Section */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-24">
                {/* Script */}
                <div className="lg:col-span-7 space-y-12">
                  <div className="flex items-center gap-6">
                    <BookOpen className="text-[#FFD166]" size={32} />
                    <h3 className="text-3xl font-black text-white tracking-widest uppercase">Script / 剧本</h3>
                  </div>
                  <div className="bg-[#0c0a0a] p-16 border-l-8 border-[#C73D2E] relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-4 text-[80px] font-black text-white/[0.02] select-none">SCENE 01</div>
                    <div className="font-serif text-[#E8E2D4]/90 italic leading-[2.2] space-y-10 text-2xl">
                      <p>“光影在墙壁上跳动，像是一场无声的告解。”</p>
                      <p>“他推开门，冷风灌进领口。镜头拉远，城市在暮色中逐渐模糊。”</p>
                      <p>“沉默。只有老式放映机转动的声音。”</p>
                    </div>
                  </div>
                </div>

                {/* Storyboard */}
                <div className="lg:col-span-5 space-y-12">
                  <div className="flex items-center gap-6">
                    <Layout className="text-[#C73D2E]" size={32} />
                    <h3 className="text-3xl font-black text-white tracking-widest uppercase">Storyboard / 分镜</h3>
                  </div>
                  <div className="grid grid-cols-1 gap-8">
                    {[1, 2, 3].map(i => (
                      <div key={i} className="relative aspect-video bg-[#0c0a0a] border border-white/5 group overflow-hidden">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="text-[10px] text-white/10 uppercase tracking-[0.5em] font-mono">Frame 0{i} / Shot 0{i}</div>
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-t from-[#C73D2E]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                        {/* Corner Accents */}
                        <div className="absolute top-4 left-4 w-4 h-4 border-t border-l border-[#FFD166]/40" />
                        <div className="absolute bottom-4 right-4 w-4 h-4 border-b border-r border-[#FFD166]/40" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* 3. Creative Analysis */}
              <section className="space-y-12">
                <div className="flex items-center gap-6">
                  <MessageSquare className="text-[#FFD166]" size={32} />
                  <h3 className="text-3xl font-black text-white tracking-widest uppercase">Analysis / 创作解析</h3>
                </div>
                <div className="prose prose-invert max-w-none">
                  {selectedProject.detailedContent?.map((section, idx) => (
                    <div 
                      key={idx} 
                      className="text-[#B8A99A] leading-[2.5] text-2xl font-light text-justify italic" 
                      dangerouslySetInnerHTML={{ __html: section.content }} 
                    />
                  ))}
                </div>
              </section>

              {/* 4. Production Credits */}
              <div className="pt-32 border-t border-white/10 grid grid-cols-1 md:grid-cols-4 gap-16">
                <div className="space-y-6">
                  <div className="flex items-center gap-3 text-[#C73D2E]">
                    <Camera size={18} />
                    <h4 className="text-xs tracking-[0.5em] uppercase font-bold">Role</h4>
                  </div>
                  <p className="text-3xl text-white font-serif italic">{selectedProject.role}</p>
                </div>
                
                <div className="space-y-6">
                  <div className="flex items-center gap-3 text-[#C73D2E]">
                    <Award size={18} />
                    <h4 className="text-xs tracking-[0.5em] uppercase font-bold">Honor</h4>
                  </div>
                  <p className="text-3xl text-[#FFD166] font-serif italic">{selectedProject.honor || 'Selected'}</p>
                </div>

                <div className="space-y-6">
                  <div className="flex items-center gap-3 text-[#C73D2E]">
                    <Scissors size={18} />
                    <h4 className="text-xs tracking-[0.5em] uppercase font-bold">Tools</h4>
                  </div>
                  <p className="text-3xl text-white font-serif italic">DaVinci / PR / AE</p>
                </div>

                <div className="space-y-6">
                  <div className="flex items-center gap-3 text-[#C73D2E]">
                    <Film size={18} />
                    <h4 className="text-xs tracking-[0.5em] uppercase font-bold">Links</h4>
                  </div>
                  <div className="flex flex-col gap-4">
                    {selectedProject.link && selectedProject.link !== '#' && (
                      <a href={selectedProject.link} target="_blank" rel="noopener noreferrer" className="text-sm text-white/50 hover:text-[#FFD166] transition-colors flex items-center gap-3">
                        <ChevronRight size={16} /> Online Link
                      </a>
                    )}
                    {selectedProject.videoUrl && selectedProject.videoUrl !== '#' && (
                      <a href={selectedProject.videoUrl} target="_blank" rel="noopener noreferrer" className="text-sm text-white/50 hover:text-[#FFD166] transition-colors flex items-center gap-3">
                        <ChevronRight size={16} /> Watch Video
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="py-32 flex flex-col items-center opacity-20">
              <div className="w-24 h-px bg-[#C73D2E] mb-8" />
              <span className="text-[10px] tracking-[1em] uppercase font-bold text-white">The End of Story</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default VideoWorksSubTab;
