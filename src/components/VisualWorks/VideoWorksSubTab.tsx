import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Project, ProjectCategory } from '../../types';
import { PROJECTS } from '../../constants';
import { Play, ArrowRight, Film, Info, FileText, Image as ImageIcon, X } from 'lucide-react';

const VideoWorksSubTab: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeTab, setActiveTab] = useState<'video' | 'script' | 'analysis' | 'stills'>('analysis');

  const videoProjects = PROJECTS.filter(p => p.category === ProjectCategory.VIDEO);

  const openProject = (project: Project) => {
    setSelectedProject(project);
    setActiveTab('analysis');
    document.body.style.overflow = 'hidden';
  };

  const closeProject = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'unset';
  };

  return (
    <div className="relative min-h-screen py-24 overflow-hidden">
      {/* Immersive Cinematic Background */}
      <div className="absolute inset-0 bg-[#050505]" />
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_0%,#1a1a1a,transparent)]" />
        <div className="absolute bottom-0 right-0 w-[60%] h-[60%] bg-indigo-500/5 rounded-full blur-[150px]" />
      </div>
      <div className="light-leak opacity-10" />
      <div className="absolute inset-0 film-grain pointer-events-none opacity-5" />
      
      {/* Editorial Slogan Section - Ultra High-end */}
      <div className="relative mb-64 px-8 z-10 pt-48">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-baseline gap-6 mb-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 0.5 }}
              className="flex items-center gap-4"
            >
              <span className="text-[9px] font-black text-yellow-500 uppercase tracking-[1.5em]">Narrative</span>
              <div className="w-8 h-px bg-white/10" />
            </motion.div>
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 0.2 }}
              className="text-[9px] font-mono text-white uppercase tracking-widest"
            >
              Visual Works — 2026
            </motion.span>
          </div>

          <div className="relative">
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col gap-2"
            >
              <h2 className="font-serif text-5xl md:text-7xl text-white tracking-tighter leading-none">
                镜头为笔
              </h2>
              <h2 className="font-serif text-7xl md:text-[10vw] font-light italic text-white/10 ml-[15vw] leading-none">
                光影为墨
              </h2>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 0.02 }}
              transition={{ duration: 3 }}
              className="absolute -top-24 -left-12 text-[30vw] font-serif italic text-white pointer-events-none select-none leading-none z-0"
            >
              Film
            </motion.div>
          </div>
          
          <div className="mt-32 flex justify-start">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="max-w-md space-y-8 border-l border-white/5 pl-12"
            >
              <p className="text-white/30 text-base md:text-lg leading-relaxed font-medium italic serif">
                讲述流动的故事。在光影的交错中寻找情感的共鸣，捕捉时间的碎片。
              </p>
              <div className="flex items-center gap-4">
                <div className="w-1.5 h-1.5 rounded-full bg-yellow-500/40 animate-pulse" />
                <span className="text-[9px] font-black text-white/10 uppercase tracking-[0.8em]">Cinematic Portfolio</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Winding Film Strip Gallery */}
      <div className="relative max-w-7xl mx-auto px-8 pb-64 z-10">
        {/* Central Winding Path (Visual Element) */}
        <div className="absolute left-1/2 top-0 bottom-0 w-32 -translate-x-1/2 hidden md:block overflow-hidden pointer-events-none">
          {/* Animated Film Strip Path */}
          <svg className="absolute top-0 left-0 w-full h-full opacity-10" preserveAspectRatio="none">
            <motion.path
              d="M64,0 Q128,500 64,1000 T64,2000 T64,3000"
              fill="none"
              stroke="white"
              strokeWidth="60"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              transition={{ duration: 5, ease: "linear" }}
            />
            {/* Sprocket Holes along the path */}
            <motion.path
              d="M44,0 Q108,500 44,1000 T44,2000 T44,3000"
              fill="none"
              stroke="black"
              strokeWidth="12"
              strokeDasharray="4,12"
            />
            <motion.path
              d="M84,0 Q148,500 84,1000 T84,2000 T84,3000"
              fill="none"
              stroke="black"
              strokeWidth="12"
              strokeDasharray="4,12"
            />
          </svg>
        </div>

        <div className="space-y-32 md:space-y-0">
          {videoProjects.map((project, idx) => {
            const isEven = idx % 2 === 0;
            const rotation = isEven ? -1.5 : 1.5;
            
            return (
              <div 
                key={project.id} 
                className={`flex flex-col md:flex-row items-center ${isEven ? 'md:justify-start' : 'md:justify-end'} md:min-h-[75vh] relative`}
              >
                {/* Connection Line to Path */}
                <div className={`hidden md:block absolute top-1/2 ${isEven ? 'left-[45%] right-1/2' : 'right-[45%] left-1/2'} h-px bg-gradient-to-r ${isEven ? 'from-white/0 to-white/10' : 'from-white/10 to-white/0'} -translate-y-1/2 z-0`} />

                <motion.div
                  initial={{ opacity: 0, x: isEven ? -100 : 100, y: 50 }}
                  whileInView={{ opacity: 1, x: 0, y: 0 }}
                  transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                  viewport={{ once: true, margin: "-100px" }}
                  className={`w-full md:w-[48%] group relative cursor-pointer`}
                  onClick={() => openProject(project)}
                  style={{ rotate: rotation }}
                  whileHover={{ rotate: 0, scale: 1.03, zIndex: 20 }}
                >
                  {/* Film Edge Numbers */}
                  <div className={`absolute ${isEven ? '-left-12' : '-right-12'} top-1/2 -translate-y-1/2 flex flex-col items-center gap-2 text-[10px] font-mono text-yellow-500/20 font-black`}>
                    <span>{12 + idx}</span>
                    <div className="w-px h-12 bg-yellow-500/10" />
                    <span className="rotate-90">EASTMAN</span>
                  </div>

                  {/* Film Frame Metadata */}
                  <div className="absolute -top-12 left-0 flex items-center gap-4 text-[9px] font-mono text-white/20 uppercase tracking-[0.3em]">
                    <span className="text-yellow-500/40">● REC</span>
                    <div className="w-8 h-px bg-white/5" />
                    <span>SCENE_{idx + 1}</span>
                    <div className="w-8 h-px bg-white/5" />
                    <span>70MM / PANAVISION</span>
                  </div>

                  {/* Viewfinder UI Elements */}
                  <div className="absolute -top-6 -left-6 w-16 h-16 border-t border-l border-white/5 z-20 group-hover:border-yellow-500/20 transition-colors duration-1000" />
                  <div className="absolute -bottom-6 -right-6 w-16 h-16 border-b border-r border-white/5 z-20 group-hover:border-yellow-500/20 transition-colors duration-1000" />
                  
                  {/* Main Card */}
                  <div className={`relative overflow-hidden rounded-sm aspect-video bg-[#0a0a0a] shadow-[0_60px_120px_rgba(0,0,0,0.9)] transition-all duration-1000`}>
                    {/* Film Sprocket Holes (Top & Bottom) */}
                    <div className="absolute inset-x-0 top-1.5 h-3 flex justify-around px-6 z-30 opacity-20">
                      {Array.from({ length: 18 }).map((_, i) => (
                        <div key={i} className="w-2.5 h-1.5 bg-white/40 rounded-[1px]" />
                      ))}
                    </div>
                    <div className="absolute inset-x-0 bottom-1.5 h-3 flex justify-around px-6 z-30 opacity-20">
                      {Array.from({ length: 18 }).map((_, i) => (
                        <div key={i} className="w-2.5 h-1.5 bg-white/40 rounded-[1px]" />
                      ))}
                    </div>

                    <img 
                      src={project.imageUrl} 
                      alt={project.title} 
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-110 opacity-40 group-hover:opacity-100"
                    />
                    
                    {/* Letterbox Effect */}
                    <div className="absolute top-0 left-0 w-full h-[10%] bg-[#050505] z-10 transform -translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-out" />
                    <div className="absolute bottom-0 left-0 w-full h-[10%] bg-[#050505] z-10 transform translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-out" />

                    {/* Content Overlay */}
                    <div className="absolute inset-0 p-12 flex flex-col justify-end z-20 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                      <div className="space-y-6 transform translate-y-12 group-hover:translate-y-0 transition-transform duration-700">
                        <div className="flex items-center gap-4">
                          <div className="w-2 h-2 rounded-full bg-red-600 animate-pulse shadow-[0_0_10px_rgba(220,38,38,0.5)]" />
                          <span className="text-white text-[10px] font-black uppercase tracking-[0.4em]">Recording</span>
                          <div className="h-px w-12 bg-white/20" />
                          <span className="text-white/40 text-[10px] font-mono uppercase tracking-widest">
                            {idx + 1}:42:15:00
                          </span>
                        </div>
                        <h3 className="text-5xl md:text-6xl font-black text-white tracking-tighter leading-none">
                          {project.title}
                        </h3>
                        <p className="text-white/40 text-sm italic font-serif max-w-md">
                          {project.description}
                        </p>
                      </div>
                    </div>

                    {/* Play Icon */}
                    <div className="absolute inset-0 flex items-center justify-center z-30 opacity-0 group-hover:opacity-100 transition-all duration-700 scale-150 group-hover:scale-100">
                      <div className="w-24 h-24 rounded-full border border-white/10 backdrop-blur-xl flex items-center justify-center text-white hover:bg-white hover:text-black transition-all duration-500 hover:scale-110">
                        <Play size={32} fill="currentColor" />
                      </div>
                    </div>
                  </div>

                  {/* Bottom Info */}
                  <div className="mt-8 flex justify-between items-end px-4">
                    <div className="space-y-2">
                      <p className="text-[10px] font-black text-white/10 uppercase tracking-[0.5em]">Production</p>
                      <p className="text-lg font-bold text-white/60 group-hover:text-yellow-500 transition-colors duration-500">{project.title}</p>
                    </div>
                    <div className="text-right space-y-2">
                      <p className="text-[10px] font-black text-white/10 uppercase tracking-[0.5em]">Role</p>
                      <p className="text-sm font-medium text-white/30 italic serif">{project.role}</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Redesigned Detail Modal - Cinematic Theatre Style */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-0 md:p-6">
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              exit={{ opacity: 0 }} 
              onClick={closeProject} 
              className="absolute inset-0 bg-black/95 backdrop-blur-2xl" 
            />
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 30 }}
              className="relative w-full max-w-7xl h-full md:h-[90vh] bg-[#050505] text-white md:rounded-[2.5rem] overflow-hidden shadow-[0_0_100px_rgba(0,0,0,0.5)] flex flex-col md:flex-row border border-white/5 z-10 film-grain"
            >
              {/* Left Side: Project Info & Navigation (Sticky-like) */}
              <div className="w-full md:w-[400px] p-8 md:p-12 border-b md:border-b-0 md:border-r border-white/5 flex flex-col justify-between bg-gradient-to-b from-white/[0.02] to-transparent">
                <div className="space-y-12">
                  <button 
                    onClick={closeProject}
                    className="group flex items-center gap-3 text-white/40 hover:text-white transition-colors text-[10px] font-black uppercase tracking-[0.3em]"
                  >
                    <X size={16} className="group-hover:rotate-90 transition-transform duration-300" />
                    <span>Close Project</span>
                  </button>

                  <div className="space-y-6">
                    <div className="flex items-center gap-3 text-yellow-400 text-[10px] font-black uppercase tracking-[0.5em]">
                      <Film size={14} />
                      <span>Production</span>
                    </div>
                    <h2 className="text-5xl font-black tracking-tighter leading-none uppercase break-words">
                      {selectedProject.title}
                    </h2>
                    <p className="text-slate-400 text-sm leading-relaxed italic border-l-2 border-white/10 pl-4">
                      {selectedProject.description}
                    </p>
                  </div>

                  {/* Vertical Navigation */}
                  <nav className="flex flex-col gap-2">
                    {[
                      { id: 'analysis', label: '内容解析', icon: Info },
                      { id: 'script', label: '剧本分镜', icon: FileText },
                      { id: 'stills', label: '精彩剧照', icon: ImageIcon },
                      { id: 'video', label: '完整正片', icon: Play },
                    ].map(tab => (
                      <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id as any)}
                        className={`group flex items-center justify-between p-4 rounded-2xl transition-all duration-300 ${
                          activeTab === tab.id 
                            ? 'bg-white/10 text-white' 
                            : 'text-white/40 hover:text-white hover:bg-white/5'
                        }`}
                      >
                        <div className="flex items-center gap-4">
                          <tab.icon size={18} className={activeTab === tab.id ? 'text-yellow-400' : 'text-current'} />
                          <span className="text-xs font-black uppercase tracking-widest">{tab.label}</span>
                        </div>
                        {activeTab === tab.id && (
                          <motion.div layoutId="activeTabIndicator" className="w-1.5 h-1.5 rounded-full bg-yellow-400" />
                        )}
                      </button>
                    ))}
                  </nav>
                </div>

                <div className="hidden md:block pt-12 space-y-4">
                  <div className="flex justify-between items-end">
                    <div className="space-y-1">
                      <p className="text-[10px] font-black text-white/20 uppercase tracking-widest">Role</p>
                      <p className="text-sm font-bold text-white/80">{selectedProject.role}</p>
                    </div>
                    <div className="text-right space-y-1">
                      <p className="text-[10px] font-black text-white/20 uppercase tracking-widest">Metrics</p>
                      <p className="text-sm font-bold text-yellow-400 italic">{selectedProject.metrics || 'N/A'}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Side: Content Area (Scrollable) */}
              <div className="flex-1 overflow-y-auto custom-scrollbar bg-black/40">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                    className="p-8 md:p-16"
                  >
                    {activeTab === 'analysis' && (
                      <div className="max-w-3xl space-y-16">
                        {selectedProject.detailedContent?.filter(s => s.subtitle?.includes('解析') || s.subtitle?.includes('主题') || s.subtitle?.includes('创意')).map((section, idx) => (
                          <div key={idx} className="space-y-8">
                            <div className="flex items-center gap-4">
                              <span className="text-4xl font-black text-white/10">0{idx + 1}</span>
                              <h4 className="text-xl font-black text-yellow-400 uppercase tracking-widest">
                                {section.subtitle}
                              </h4>
                            </div>
                            <p className="text-xl md:text-2xl text-slate-200 leading-relaxed font-medium whitespace-pre-wrap">
                              {section.content}
                            </p>
                          </div>
                        ))}
                      </div>
                    )}

                    {activeTab === 'script' && (
                      <div className="max-w-3xl">
                        <div className="bg-white/[0.03] p-8 md:p-12 rounded-[2rem] border border-white/5 shadow-2xl">
                          <div className="flex items-center gap-4 mb-12">
                            <div className="w-12 h-12 rounded-2xl bg-indigo-500/20 flex items-center justify-center text-indigo-400">
                              <FileText size={24} />
                            </div>
                            <h4 className="text-2xl font-black tracking-tighter uppercase">Script / Storyboard</h4>
                          </div>
                          <div className="font-mono text-sm leading-loose text-slate-400 whitespace-pre-wrap space-y-8">
                            {selectedProject.detailedContent?.filter(s => s.subtitle?.includes('剧本') || s.subtitle?.includes('分镜') || s.subtitle?.includes('梗概')).map((section, idx) => (
                              <div key={idx} className="p-6 bg-black/40 rounded-xl border border-white/5">
                                <p className="text-yellow-400/50 text-[10px] font-black mb-4 uppercase tracking-widest">Section {idx + 1}</p>
                                {section.content}
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}

                    {activeTab === 'stills' && (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {selectedProject.gallery?.map((img, idx) => (
                          <motion.div 
                            key={idx}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: idx * 0.1 }}
                            className="group/still relative aspect-video rounded-3xl overflow-hidden border border-white/10"
                          >
                            <img src={img} alt={`Still ${idx}`} className="w-full h-full object-cover transition-transform duration-700 group-hover/still:scale-110" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover/still:opacity-100 transition-opacity flex items-end p-6">
                              <p className="text-[10px] font-black text-white uppercase tracking-widest">Scene Still 0{idx + 1}</p>
                            </div>
                          </motion.div>
                        )) || (
                          <div className="col-span-full py-32 text-center text-white/20 font-black uppercase tracking-[0.5em]">
                            No stills available
                          </div>
                        )}
                      </div>
                    )}

                    {activeTab === 'video' && (
                      <div className="h-full flex flex-col items-center justify-center py-12 md:py-24">
                        <div className="max-w-2xl w-full bg-gradient-to-br from-white/[0.05] to-transparent p-12 md:p-20 rounded-[3rem] border border-white/10 text-center space-y-10">
                          <motion.div 
                            animate={{ scale: [1, 1.1, 1] }}
                            transition={{ duration: 4, repeat: Infinity }}
                            className="w-24 h-24 rounded-full bg-yellow-400/10 flex items-center justify-center text-yellow-400 mx-auto border border-yellow-400/20"
                          >
                            <Play size={40} fill="currentColor" />
                          </motion.div>
                          <div className="space-y-4">
                            <h4 className="text-4xl font-black tracking-tighter uppercase">Watch Production</h4>
                            <p className="text-slate-400 text-lg leading-relaxed">
                              Experience the full story in high definition on our primary hosting platform.
                            </p>
                          </div>
                          <a 
                            href={selectedProject.videoUrl || selectedProject.link} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-4 px-12 py-5 bg-yellow-400 text-slate-950 rounded-full font-black uppercase tracking-widest hover:bg-white transition-all hover:scale-105 shadow-[0_20px_50px_rgba(250,204,21,0.2)]"
                          >
                            Launch Player <ArrowRight size={20} />
                          </a>
                        </div>
                      </div>
                    )}
                  </motion.div>
                </AnimatePresence>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default VideoWorksSubTab;
