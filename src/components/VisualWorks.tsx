
import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Play, X, Maximize2, Volume2, VolumeX, Info, ExternalLink, Award, Film, Clapperboard, FileText, Layout } from 'lucide-react';
import { PROJECTS } from '../constants';
import { ProjectCategory } from '../types';

const VisualWorks: React.FC = () => {
  const videoProjects = PROJECTS.filter(p => p.category === ProjectCategory.VIDEO);
  const [selectedVideo, setSelectedVideo] = useState(videoProjects[0]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isVideoEnded, setIsVideoEnded] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [isVideoLoading, setIsVideoLoading] = useState(false);
  const [fullscreenImage, setFullscreenImage] = useState<string | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const videoContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsVideoEnded(false);
    setIsVideoLoading(false);
  }, [selectedVideo, isPlaying]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isPlaying && videoContainerRef.current && !videoContainerRef.current.contains(event.target as Node)) {
        setIsPlaying(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isPlaying]);

  const tabs = [
    { id: ProjectCategory.COPYWRITING, label: '文案作品', icon: FileText, href: '#portfolio' },
    { id: ProjectCategory.VIDEO, label: '视频作品', icon: Play, href: '#visual-works' },
  ];

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  return (
    <section id="visual-works" className="bg-[#050505] py-32 relative overflow-hidden">
      {/* Atmospheric Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-indigo-600/10 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-rose-600/5 blur-[150px] rounded-full" />
      </div>

      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="max-w-3xl">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3 text-indigo-400 font-black tracking-[0.3em] uppercase text-[10px] mb-6"
            >
              <div className="w-8 h-[2px] bg-indigo-500" />
              <span>Cinematic Portfolio</span>
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-6xl md:text-8xl font-black text-white leading-[0.9] uppercase tracking-tighter mb-8"
            >
              Visual <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-rose-400">
                Works
              </span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-slate-400 text-base md:text-lg max-w-xl leading-relaxed"
            >
              从微电影到MV，从MV到广告片——场景在变，讲故事的方式没变。<br />
              把情绪埋进画面，将节奏藏在剪辑，让创意落在最后一秒。
            </motion.p>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="hidden lg:flex flex-col items-end gap-4"
          >
            <div className="flex flex-wrap gap-2 bg-white/5 backdrop-blur-md p-2 rounded-[2.5rem] border border-white/10">
              {tabs.map((tab) => (
                <a
                  key={tab.id}
                  href={tab.href}
                  className={`px-8 py-3.5 rounded-full font-black text-[10px] uppercase tracking-widest transition-all flex items-center gap-2 ${
                    tab.id === ProjectCategory.VIDEO 
                      ? 'bg-yellow-400 text-slate-900 shadow-xl scale-105' 
                      : 'text-slate-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <tab.icon size={14} />
                  {tab.label}
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Featured Video Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Main Showcase */}
          <motion.div 
            ref={videoContainerRef}
            layoutId={`video-${selectedVideo.id}`}
            className="lg:col-span-8 group relative aspect-video rounded-[2rem] overflow-hidden bg-slate-900 shadow-2xl border border-white/5"
          >
            {isPlaying ? (
              <>
                {selectedVideo.videoUrl && selectedVideo.videoUrl.includes('bilibili.com') ? (
                  <iframe 
                    src={selectedVideo.videoUrl} 
                    className="w-full h-full border-0"
                    title={selectedVideo.title}
                    scrolling="no"
                    allowFullScreen={true}
                  />
                ) : (
                  <div className="relative w-full h-full">
                    <video
                      ref={videoRef}
                      src={selectedVideo.videoUrl !== '#' ? selectedVideo.videoUrl : "https://www.w3schools.com/html/mov_bbb.mp4"}
                      className="w-full h-full object-cover"
                      controls
                      controlsList="nodownload"
                      onContextMenu={(e) => e.preventDefault()}
                      autoPlay
                      muted={isMuted}
                      onEnded={() => setIsVideoEnded(true)}
                      onWaiting={() => setIsVideoLoading(true)}
                      onPlaying={() => setIsVideoLoading(false)}
                      onCanPlay={() => setIsVideoLoading(false)}
                    />
                    {isVideoLoading && !isVideoEnded && (
                      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm flex flex-col items-center justify-center z-10 pointer-events-none">
                        <div className="w-10 h-10 border-4 border-indigo-500/30 border-t-indigo-500 rounded-full animate-spin mb-4"></div>
                        <p className="text-white text-sm font-medium tracking-widest">视频加载中，请耐心等待...</p>
                      </div>
                    )}
                    {isVideoEnded && selectedVideo.link && (
                      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm flex flex-col items-center justify-center z-20">
                        <p className="text-white text-lg font-bold mb-4">
                          观看完整版{selectedVideo.title.includes('物执') ? '（16分钟）' : ''}
                        </p>
                        <a 
                          href={selectedVideo.link} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl font-bold transition-colors mb-4 flex items-center gap-2"
                        >
                          <ExternalLink size={18} />
                          前往新片场观看
                        </a>
                        <p className="text-white/60 text-sm">无法点击？ 复制链接到浏览器：</p>
                        <p className="text-white/40 text-xs mt-2 select-all">{selectedVideo.link}</p>
                        <button 
                          onClick={() => {
                            setIsVideoEnded(false);
                            if (videoRef.current) {
                              videoRef.current.play();
                            }
                          }}
                          className="absolute top-4 right-4 text-white/60 hover:text-white"
                        >
                          <X size={24} />
                        </button>
                      </div>
                    )}
                  </div>
                )}
                {selectedVideo.id !== 'p-video-3' && (
                  <button 
                    onClick={() => setIsModalOpen(true)}
                    className="absolute top-4 right-4 px-4 py-2 bg-black/50 backdrop-blur-md text-white rounded-lg font-black text-xs uppercase tracking-widest flex items-center gap-2 hover:bg-black/70 transition-all border border-white/10 z-10"
                  >
                    <Info size={14} /> Details
                  </button>
                )}
              </>
            ) : (
              <>
                <img 
                  src={selectedVideo.imageUrl} 
                  alt={selectedVideo.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80" />
                
                {/* Overlay Content */}
                <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-end">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-4 py-1.5 bg-indigo-600 text-white text-[10px] font-black uppercase tracking-widest rounded-full">
                      Featured Work
                    </span>
                    {selectedVideo.role.includes('奖') && (
                      <span className="px-4 py-1.5 bg-yellow-500 text-black text-[10px] font-black uppercase tracking-widest rounded-full flex items-center gap-1">
                        <Award size={12} /> Award Winning
                      </span>
                    )}
                  </div>
                  
                  <h3 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tight">
                    {selectedVideo.title}
                  </h3>
                  
                  <p className="text-slate-300 text-lg max-w-2xl mb-8 line-clamp-2">
                    {selectedVideo.description} — {selectedVideo.role}
                  </p>
                  
                  <div className="flex flex-wrap gap-4">
                    {['p-video-2', 'p-video-3', 'p-video-4'].includes(selectedVideo.id) && selectedVideo.link ? (
                      <a 
                        href={selectedVideo.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-8 py-4 bg-white text-black rounded-2xl font-black text-sm uppercase tracking-widest flex items-center gap-3 hover:bg-indigo-400 hover:text-white transition-all active:scale-95"
                      >
                        <Play size={20} fill="currentColor" /> Watch Now
                      </a>
                    ) : (
                      <button 
                        onClick={() => setIsPlaying(true)}
                        className="px-8 py-4 bg-white text-black rounded-2xl font-black text-sm uppercase tracking-widest flex items-center gap-3 hover:bg-indigo-400 hover:text-white transition-all active:scale-95"
                      >
                        <Play size={20} fill="currentColor" /> Watch Now
                      </button>
                    )}
                    {selectedVideo.id !== 'p-video-3' && (
                      <button 
                        onClick={() => setIsModalOpen(true)}
                        className="px-8 py-4 bg-white/10 backdrop-blur-md text-white rounded-2xl font-black text-sm uppercase tracking-widest flex items-center gap-3 hover:bg-white/20 transition-all border border-white/10"
                      >
                        <Info size={20} /> Details
                      </button>
                    )}
                  </div>
                </div>

                {/* Floating Play Button for Mobile */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 lg:hidden">
                  {['p-video-2', 'p-video-3', 'p-video-4'].includes(selectedVideo.id) && selectedVideo.link ? (
                    <a 
                      href={selectedVideo.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-20 h-20 bg-white/20 backdrop-blur-xl rounded-full flex items-center justify-center text-white border border-white/30"
                    >
                      <Play size={32} fill="currentColor" className="ml-1" />
                    </a>
                  ) : (
                    <button 
                      onClick={() => setIsPlaying(true)}
                      className="w-20 h-20 bg-white/20 backdrop-blur-xl rounded-full flex items-center justify-center text-white border border-white/30"
                    >
                      <Play size={32} fill="currentColor" className="ml-1" />
                    </button>
                  )}
                </div>
              </>
            )}
          </motion.div>

          {/* Sidebar Playlist */}
          <div className="lg:col-span-4 space-y-6">
            <h4 className="text-white font-black text-xs uppercase tracking-[0.3em] mb-8 flex items-center gap-3">
              <Film size={16} className="text-indigo-400" /> More Visual Works
            </h4>
            
            <div className="space-y-4 max-h-[600px] overflow-y-auto pr-2 custom-scrollbar">
              {videoProjects.map((project) => (
                <motion.button
                  key={project.id}
                  onClick={() => {
                    setSelectedVideo(project);
                    setIsPlaying(false);
                  }}
                  className={`w-full group flex gap-4 p-4 rounded-3xl transition-all border ${
                    selectedVideo.id === project.id 
                      ? 'bg-white/10 border-white/20' 
                      : 'bg-transparent border-transparent hover:bg-white/5'
                  }`}
                >
                  <div className="relative w-32 aspect-video rounded-xl overflow-hidden flex-shrink-0">
                    <img 
                      src={project.imageUrl} 
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                    {selectedVideo.id === project.id && (
                      <div className="absolute inset-0 bg-indigo-600/40 flex items-center justify-center">
                        <div className="w-2 h-2 bg-white rounded-full animate-ping" />
                      </div>
                    )}
                  </div>
                  <div className="flex flex-col items-start text-left py-1">
                    <span className="text-[10px] font-black text-indigo-400 uppercase tracking-widest mb-1">
                      {project.role.split('/')[0] || 'Video'}
                    </span>
                    <h5 className={`font-bold text-sm leading-tight transition-colors ${
                      selectedVideo.id === project.id ? 'text-white' : 'text-slate-400 group-hover:text-white'
                    }`}>
                      {project.title}
                    </h5>
                  </div>
                </motion.button>
              ))}
            </div>

            {/* Decorative Sticker */}
            <div className="mt-12 flex justify-center opacity-50 hover:opacity-100 transition-opacity">
              <div className="w-24 h-24 rounded-full bg-indigo-900/20 border border-indigo-500/20 flex items-center justify-center rotate-12 hover:rotate-0 transition-transform duration-500">
                <Clapperboard size={40} className="text-indigo-400" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-12">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="absolute inset-0 bg-black/95 backdrop-blur-2xl"
            />
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-6xl max-h-[90vh] bg-[#0a0a0a] rounded-[2.5rem] overflow-hidden shadow-2xl border border-white/10 z-10 flex flex-col"
            >
              {/* Close Button */}
              <button 
                onClick={() => setIsModalOpen(false)}
                className="absolute top-6 right-6 w-12 h-12 bg-white/10 hover:bg-rose-500 text-white rounded-full flex items-center justify-center transition-all z-30 backdrop-blur-md border border-white/10"
              >
                <X size={24} />
              </button>

              <div className="flex-1 overflow-y-auto custom-scrollbar">
                {/* Detailed Information */}
                <div className="bg-[#0a0a0a] relative z-20 pt-16 pb-24 px-8 md:px-16 lg:px-24 space-y-24">
                  
                  {/* Header / Meta */}
                  <div className="flex flex-col md:flex-row gap-12 justify-between items-start border-b border-white/10 pb-12">
                    <div className="max-w-2xl">
                      <h2 className="text-4xl md:text-5xl font-black text-white mb-6 uppercase tracking-tight" style={{ fontFamily: "'Source Han Serif', serif" }}>
                        {selectedVideo.title}
                      </h2>
                      <div className="flex flex-wrap gap-3 mb-6">
                        {selectedVideo.tags?.map(tag => (
                          <span key={tag} className="px-4 py-1.5 bg-white/5 border border-white/10 rounded-full text-[10px] text-slate-300 tracking-widest uppercase">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="flex flex-col gap-6 text-sm text-slate-400 font-mono uppercase tracking-widest min-w-[200px]">
                      <div>
                        <span className="text-indigo-400 block text-[10px] mb-2">Role / 担当</span>
                        <span className="text-white text-xs">{selectedVideo.role}</span>
                      </div>
                      <div>
                        <span className="text-indigo-400 block text-[10px] mb-2">Category / 类型</span>
                        <span className="text-white text-xs">{selectedVideo.category}</span>
                      </div>
                    </div>
                  </div>

                  {/* Full Video Link Box */}
                  {selectedVideo.link && (
                    <section className="mb-12">
                      <div className="bg-indigo-900/10 border border-indigo-500/20 rounded-2xl p-4 md:p-6 flex flex-col sm:flex-row items-center justify-between text-center sm:text-left gap-4">
                        <div>
                          <p className="text-white text-base font-bold mb-1">观看完整版</p>
                          <p className="text-slate-400 text-xs">无法点击？ 复制链接到浏览器：<span className="text-slate-500 select-all">{selectedVideo.link}</span></p>
                        </div>
                        <a 
                          href={selectedVideo.link} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg text-sm font-bold transition-colors flex items-center gap-2 shrink-0"
                        >
                          <ExternalLink size={16} />
                          前往观看
                        </a>
                      </div>
                    </section>
                  )}

                  {/* Content Analysis */}
                  {selectedVideo.analysis && (
                    <section className="relative">
                      <div className="absolute -left-4 md:-left-12 -top-12 text-[8rem] text-white/[0.03] font-serif leading-none select-none pointer-events-none">
                        “
                      </div>
                      <div className="flex items-center gap-4 text-indigo-400 font-black tracking-[0.3em] uppercase text-[10px] mb-8">
                        <div className="w-12 h-[1px] bg-indigo-500" />
                        <span>Director's Note / 创意解析</span>
                      </div>
                      <p className="text-slate-300 text-lg md:text-xl leading-relaxed max-w-4xl font-light text-justify whitespace-pre-wrap" style={{ fontFamily: "'Source Han Serif', serif" }}>
                        {selectedVideo.analysis}
                      </p>
                    </section>
                  )}

                  {/* Storyboard */}
                  {selectedVideo.storyboard && selectedVideo.storyboard.length > 0 && (
                    <section>
                      <div className="flex items-center gap-4 text-indigo-400 font-black tracking-[0.3em] uppercase text-[10px] mb-8">
                        <div className="w-12 h-[1px] bg-indigo-500" />
                        <span>Storyboard / 剧本分镜</span>
                      </div>

                      {selectedVideo.storyboardDescription && (
                        <div className="mb-12 p-8 md:p-12 bg-[#111] border border-white/5 rounded-[2rem] relative overflow-hidden">
                          <div className="absolute top-0 right-0 p-8 opacity-[0.02] pointer-events-none">
                            <Layout size={200} />
                          </div>
                          <h4 className="text-xl md:text-2xl font-black text-white mb-6 text-center tracking-widest relative z-10">
                            分镜设计思路
                          </h4>
                          <div className="w-12 h-1 bg-indigo-500 mx-auto mb-8 rounded-full relative z-10" />
                          <p 
                            className="text-slate-300 text-sm md:text-base leading-relaxed whitespace-pre-wrap font-light [&>strong]:font-bold [&>strong]:text-indigo-300 relative z-10"
                            dangerouslySetInnerHTML={{ __html: selectedVideo.storyboardDescription }}
                          />
                        </div>
                      )}
                      
                      {/* Film strip style */}
                      <div className="bg-[#111] p-6 md:p-10 rounded-[2rem] border border-white/5 overflow-x-auto custom-scrollbar">
                        <div className="flex gap-6 md:gap-8 min-w-max pb-4">
                          {selectedVideo.storyboard.map((img, idx) => {
                            const hasPlot = selectedVideo.storyboard.some(s => s.includes('plot'));
                            const isPlot = img.includes('plot');
                            const sceneNum = hasPlot ? idx : idx + 1;
                            
                            return (
                              <div key={idx} className="w-[280px] md:w-[400px] shrink-0 group">
                                <div 
                                  className="aspect-[16/9] bg-black rounded-xl overflow-hidden relative mb-5 border border-white/10 shadow-2xl cursor-pointer"
                                  onClick={() => setFullscreenImage(img)}
                                >
                                  <img src={img} alt={`Storyboard ${idx + 1}`} className="w-full h-full object-cover filter grayscale-[30%] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105" />
                                  {/* Film holes decoration */}
                                  <div className="absolute top-3 left-0 right-0 flex justify-between px-6 opacity-40">
                                    <div className="w-3 h-1.5 bg-black/80 rounded-sm"></div>
                                    <div className="w-3 h-1.5 bg-black/80 rounded-sm"></div>
                                    <div className="w-3 h-1.5 bg-black/80 rounded-sm"></div>
                                  </div>
                                  <div className="absolute bottom-3 left-0 right-0 flex justify-between px-6 opacity-40">
                                    <div className="w-3 h-1.5 bg-black/80 rounded-sm"></div>
                                    <div className="w-3 h-1.5 bg-black/80 rounded-sm"></div>
                                    <div className="w-3 h-1.5 bg-black/80 rounded-sm"></div>
                                  </div>
                                </div>
                                <div className="flex justify-between items-center text-white font-mono text-[10px] uppercase tracking-widest px-2">
                                  <span>{isPlot ? '剧情梗概' : `Scene ${String(sceneNum).padStart(2, '0')}`}</span>
                                  <span className="text-indigo-500/50">Ext / Int</span>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </section>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Fullscreen Image Viewer */}
      <AnimatePresence>
        {fullscreenImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[300] flex items-center justify-center bg-black/95 backdrop-blur-sm p-4 md:p-12 cursor-zoom-out"
            onClick={() => setFullscreenImage(null)}
          >
            <button
              className="absolute top-6 right-6 w-12 h-12 bg-white/10 hover:bg-rose-500 text-white rounded-full flex items-center justify-center transition-all z-30 backdrop-blur-md border border-white/10"
              onClick={(e) => {
                e.stopPropagation();
                setFullscreenImage(null);
              }}
            >
              <X size={24} />
            </button>
            <motion.img
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              src={fullscreenImage}
              alt="Fullscreen view"
              className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default VisualWorks;
