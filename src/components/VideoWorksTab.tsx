import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Clapperboard, User, Star, ArrowLeft, PlayCircle, Image as ImageIcon, FileText, LayoutTemplate, Trophy, Download, X } from 'lucide-react';
import { videoWorks, VideoWork } from '../data/videos';

const VideoWorksTab: React.FC = () => {
  const [selectedVideo, setSelectedVideo] = useState<VideoWork | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  // Reset playing state when selecting a new video
  React.useEffect(() => {
    setIsPlaying(false);
  }, [selectedVideo]);

  if (selectedVideo) {
    return (
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        className="w-full bg-[#0a0a0a] text-white font-sans rounded-3xl overflow-hidden border border-white/10 relative z-20"
      >
        {/* Header Section */}
        <header className="relative h-[50vh] flex items-end pb-16 px-6 md:px-12 lg:px-20">
          <div className="absolute inset-0 z-0">
            <img 
              src={selectedVideo.thumbnail.replace('blur=2', 'blur=4')} 
              alt={selectedVideo.title} 
              className="w-full h-full object-cover opacity-40"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/80 to-transparent" />
          </div>
          
          <div className="relative z-10 w-full">
            <button 
              onClick={() => setSelectedVideo(null)}
              className="inline-flex items-center gap-2 text-gray-400 hover:text-[#FFD166] transition-colors mb-6 group"
            >
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
              返回视频列表
            </button>
            
            <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6 text-white">
              {selectedVideo.title}
            </h1>
            
            <div className="flex flex-wrap gap-3 text-sm text-gray-300 font-medium tracking-wide uppercase">
              <span className="px-4 py-1.5 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm">{selectedVideo.type}</span>
              {selectedVideo.duration && <span className="px-4 py-1.5 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm">{selectedVideo.duration}</span>}
              {selectedVideo.date && <span className="px-4 py-1.5 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm">{selectedVideo.date}</span>}
              <span className="px-4 py-1.5 rounded-full border border-[#FFD166]/30 bg-[#FFD166]/10 text-[#FFD166]">{selectedVideo.roles.join(" / ")}</span>
            </div>
          </div>
        </header>

        <main className="px-6 md:px-12 lg:px-20 py-12 space-y-24">
          
          {/* Video Embed Area */}
          <section>
            <div className="flex items-center gap-3 mb-8">
              <PlayCircle className="w-8 h-8 text-[#FFD166]" />
              <h2 className="text-3xl font-serif font-bold">正片放映</h2>
            </div>
            <div className="aspect-video bg-[#141414] rounded-2xl border border-white/10 flex items-center justify-center relative overflow-hidden group shadow-2xl shadow-black/50">
              {isPlaying && selectedVideo.videoUrl ? (
                selectedVideo.videoUrl.includes('bilibili.com') ? (
                  <iframe 
                    src={selectedVideo.videoUrl} 
                    className="w-full h-full border-0"
                    title={selectedVideo.title}
                    scrolling="no"
                    allowFullScreen={true}
                  />
                ) : (
                  <video 
                    src={selectedVideo.videoUrl} 
                    controls 
                    autoPlay 
                    className="w-full h-full object-cover"
                  />
                )
              ) : (
                <div 
                  className="w-full h-full relative cursor-pointer"
                  onClick={() => setIsPlaying(true)}
                >
                  <img 
                    src={selectedVideo.thumbnail.replace('blur=2', '')} 
                    alt="Video Poster" 
                    className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-20 rounded-full bg-black/50 backdrop-blur-md flex items-center justify-center border border-white/20 group-hover:scale-110 group-hover:bg-[#FFD166]/20 transition-all duration-300">
                      <PlayCircle className="w-10 h-10 text-white group-hover:text-[#FFD166] transition-colors" />
                    </div>
                  </div>
                  <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
                    <span className="text-lg font-medium tracking-wider drop-shadow-lg">预告片 / 全片链接</span>
                  </div>
                </div>
              )}
            </div>
          </section>

          {/* Stills Gallery */}
          {selectedVideo.stills && (
            <section>
              <div className="flex items-center gap-3 mb-8">
                <ImageIcon className="w-8 h-8 text-[#FFD166]" />
                <h2 className="text-3xl font-serif font-bold">剧照画廊</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {selectedVideo.stills.map((still, idx) => (
                  <motion.div 
                    key={idx}
                    whileHover={{ scale: 1.02 }}
                    className="rounded-xl overflow-hidden border border-white/10 shadow-xl"
                  >
                    <img src={still} alt={`剧照 ${idx + 1}`} className="w-full h-auto object-cover aspect-video" referrerPolicy="no-referrer" />
                  </motion.div>
                ))}
              </div>
            </section>
          )}

          {/* Creation Analysis */}
          {(selectedVideo.theme || selectedVideo.coreImagery || selectedVideo.narrative) && (
            <section className="bg-[#141414] rounded-3xl p-8 md:p-12 border border-white/5 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-2 h-full bg-[#FFD166]" />
              <div className="flex items-center gap-3 mb-8">
                <FileText className="w-8 h-8 text-[#FFD166]" />
                <h2 className="text-3xl font-serif font-bold">创作解析</h2>
              </div>
              <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
                {selectedVideo.theme && (
                  <div className="flex flex-col md:flex-row gap-4 md:gap-8">
                    <span className="text-[#FFD166] font-bold min-w-[100px]">▸ 主题</span>
                    <p>{selectedVideo.theme}</p>
                  </div>
                )}
                {selectedVideo.coreImagery && (
                  <div className="flex flex-col md:flex-row gap-4 md:gap-8">
                    <span className="text-[#FFD166] font-bold min-w-[100px]">▸ 核心意象</span>
                    <p>{selectedVideo.coreImagery}</p>
                  </div>
                )}
                {selectedVideo.narrative && (
                  <div className="flex flex-col md:flex-row gap-4 md:gap-8">
                    <span className="text-[#FFD166] font-bold min-w-[100px]">▸ 双线叙事</span>
                    <p>{selectedVideo.narrative}</p>
                  </div>
                )}
              </div>
            </section>
          )}

          {/* Storyboard Comparison */}
          {selectedVideo.storyboards && (
            <section>
              <div className="flex items-center gap-3 mb-8">
                <LayoutTemplate className="w-8 h-8 text-[#FFD166]" />
                <h2 className="text-3xl font-serif font-bold">分镜对比</h2>
              </div>
              <div className="space-y-12">
                {selectedVideo.storyboards.map((sb, idx) => (
                  <div key={idx} className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                    <div className="space-y-3">
                      <div className="rounded-xl overflow-hidden border border-white/10">
                        <img src={sb.storyboard} alt="分镜稿" className="w-full aspect-video object-cover" referrerPolicy="no-referrer" />
                      </div>
                      <p className="text-center text-sm text-gray-400 font-mono tracking-widest uppercase">分镜稿</p>
                    </div>
                    <div className="space-y-3">
                      <div className="rounded-xl overflow-hidden border border-[#FFD166]/30">
                        <img src={sb.finalFrame} alt="成片帧" className="w-full aspect-video object-cover" referrerPolicy="no-referrer" />
                      </div>
                      <p className="text-center text-sm text-[#FFD166] font-mono tracking-widest uppercase">成片帧</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Script Excerpt */}
          {selectedVideo.scriptExcerpt && (
            <section className="relative py-12">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#141414] to-transparent -z-10" />
              <div className="text-center max-w-3xl mx-auto space-y-8">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#1a1a1a] border border-white/10 mb-2">
                  <FileText className="w-8 h-8 text-[#FFD166]" />
                </div>
                <h2 className="text-3xl font-serif font-bold">剧本节选</h2>
                <blockquote className="text-xl md:text-2xl font-serif italic text-gray-300 leading-relaxed">
                  {selectedVideo.scriptExcerpt}
                </blockquote>
                <button className="inline-flex items-center gap-2 text-[#FFD166] hover:text-white transition-colors mt-8 border-b border-[#FFD166]/30 hover:border-white pb-1">
                  <Download className="w-5 h-5" />
                  下载完整剧本PDF
                </button>
              </div>
            </section>
          )}

          {/* Honors & Feedback */}
          {(selectedVideo.honors || selectedVideo.judgeComment) && (
            <section className="bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] rounded-3xl p-8 md:p-12 border border-[#FFD166]/20 text-center relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#FFD166]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
              <Trophy className="w-16 h-16 text-[#FFD166] mx-auto mb-6" />
              <h2 className="text-3xl font-serif font-bold mb-6">荣誉与反响</h2>
              <div className="space-y-4">
                {selectedVideo.honors && <p className="text-xl text-white font-medium">{selectedVideo.honors}</p>}
                {selectedVideo.judgeComment && (
                  <p className="text-lg text-gray-400 italic">
                    评审评语：{selectedVideo.judgeComment}
                  </p>
                )}
              </div>
            </section>
          )}
          
        </main>
      </motion.div>
    );
  }

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="w-full"
    >
      <div className="mb-12">
        <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 flex items-center gap-4 text-white">
          <Clapperboard className="w-10 h-10 text-[#FFD166]" />
          视频作品
        </h2>
        <p className="text-lg text-gray-400 font-sans tracking-wide">
          镜头为笔，光影为墨，讲述流动的故事
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {videoWorks.map((work, index) => (
          <motion.div
            key={work.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -8, scale: 1.02 }}
            onClick={() => setSelectedVideo(work)}
            className="group cursor-pointer relative overflow-hidden rounded-2xl bg-[#141414] border border-white/5 shadow-2xl transition-all duration-300 hover:border-[#FFD166]/30"
          >
            <div className="aspect-video overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-transparent to-transparent z-10" />
              <img 
                src={work.thumbnail} 
                alt={work.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-4 right-4 z-20 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-sm font-medium border border-white/10 text-white">
                {work.type}
              </div>
            </div>
            
            <div className="p-8 relative z-20 -mt-8">
              <h3 className="text-2xl font-serif font-bold mb-4 text-white group-hover:text-[#FFD166] transition-colors">
                {work.title}
              </h3>
              
              <div className="space-y-3 text-gray-300 font-sans">
                <div className="flex items-start gap-3">
                  <User className="w-5 h-5 text-[#FFD166] shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{work.roles.join(" / ")}</span>
                </div>
                <div className="flex items-start gap-3">
                  <Star className="w-5 h-5 text-[#FFD166] shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{work.highlight}</span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default VideoWorksTab;
