import { motion, AnimatePresence } from "motion/react";
import { Project } from "../data/projects";
import { X, Play, ChevronLeft, ChevronRight, Trophy } from "lucide-react";
import { useState, useRef } from "react";
import ImageWithFallback from "./ui/ImageWithFallback";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  const galleryRef = useRef<HTMLDivElement>(null);

  if (!project) return null;

  const scrollGallery = (dir: "left" | "right") => {
    if (galleryRef.current) {
      const scrollAmount = 400;
      galleryRef.current.scrollBy({
        left: dir === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth"
      });
    }
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-[#0f0c0a]/95 backdrop-blur-md p-4 md:p-8"
      >
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 text-[#B8A99A] hover:text-[#C73D2E] transition-colors z-50"
        >
          <X size={32} />
        </button>

        <motion.div
          initial={{ scale: 0.95, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.95, opacity: 0, y: 20 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="w-full max-w-[1000px] max-h-[90vh] overflow-y-auto modal-scrollbar bg-[#1a1512] border border-[#9B7B4C]/30 rounded-sm shadow-[0_0_50px_rgba(199,61,46,0.15)] relative"
        >
          {/* Header */}
          <div className="p-8 md:p-12 border-b border-[#9B7B4C]/20">
            <h2 className="font-serif text-4xl md:text-5xl text-[#E8E2D4] tracking-wider mb-4">{project.title}</h2>
            <div className="w-16 h-[2px] bg-[#C73D2E] mb-6"></div>
            <div className="flex flex-wrap gap-4 text-sm font-serif text-[#9B7B4C] mb-4">
              <span>{project.year}</span>
              <span>•</span>
              <span>{project.duration}</span>
              <span>•</span>
              <span>制作周期：{project.period}</span>
            </div>
            <div className="text-[#B8A99A] text-sm">
              <span className="text-[#C73D2E] font-medium">{project.roles.join(" / ")}</span>
              {project.otherRoles && <span> / {project.otherRoles}</span>}
            </div>
          </div>

          {/* Video Placeholder */}
          <div className="relative aspect-video bg-[#0f0c0a] border-y border-[#C73D2E]/30 group cursor-pointer overflow-hidden">
            <ImageWithFallback 
              src={project.cover} 
              alt={project.title} 
              className="w-full h-full object-cover opacity-50 group-hover:opacity-40 transition-opacity duration-500" 
              containerClassName="w-full h-full"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-20 h-20 rounded-full border-2 border-[#9B7B4C] flex items-center justify-center text-[#9B7B4C] group-hover:bg-[#C73D2E] group-hover:border-[#C73D2E] group-hover:text-[#E8E2D4] transition-all duration-300 shadow-[0_0_20px_rgba(155,123,76,0.2)] group-hover:shadow-[0_0_30px_rgba(199,61,46,0.5)]">
                <Play size={32} className="ml-2" />
              </div>
            </div>
          </div>

          {/* Gallery */}
          {project.stills.length > 0 && (
            <div className="p-8 md:p-12 border-b border-[#9B7B4C]/20 relative">
              <h3 className="font-serif text-2xl text-[#E8E2D4] mb-6 tracking-widest">剧照画廊</h3>
              <div className="relative group">
                <div 
                  ref={galleryRef}
                  className="flex gap-6 overflow-x-auto hide-scrollbar snap-x snap-mandatory"
                >
                  {project.stills.map((still, idx) => (
                    <div key={idx} className="min-w-[80%] md:min-w-[60%] snap-center shrink-0">
                      <ImageWithFallback 
                        src={still} 
                        alt={`Still ${idx + 1}`} 
                        className="w-full aspect-video object-cover rounded-sm border border-[#9B7B4C]/20" 
                      />
                      <p className="text-[#B8A99A] text-sm mt-3 italic text-center">Scene {idx + 1}</p>
                    </div>
                  ))}
                </div>
                <button onClick={() => scrollGallery("left")} className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-[#1a1512]/80 border border-[#9B7B4C]/50 rounded-full flex items-center justify-center text-[#9B7B4C] hover:text-[#C73D2E] hover:border-[#C73D2E] opacity-0 group-hover:opacity-100 transition-all">
                  <ChevronLeft />
                </button>
                <button onClick={() => scrollGallery("right")} className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-[#1a1512]/80 border border-[#9B7B4C]/50 rounded-full flex items-center justify-center text-[#9B7B4C] hover:text-[#C73D2E] hover:border-[#C73D2E] opacity-0 group-hover:opacity-100 transition-all">
                  <ChevronRight />
                </button>
              </div>
            </div>
          )}

          {/* Storyboard Comparison */}
          {project.storyboards.length > 0 && (
            <div className="p-8 md:p-12 border-b border-[#9B7B4C]/20">
              <h3 className="font-serif text-2xl text-[#E8E2D4] mb-6 tracking-widest">分镜对比</h3>
              {project.storyboards.map((sb, idx) => (
                <div key={idx} className="group">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-[#1f2a2a] p-2 rounded-sm border border-[#2C5F5F]/30 relative overflow-hidden">
                      <div className="absolute top-2 left-2 bg-[#1a1512]/80 px-2 py-1 text-xs text-[#B8A99A] font-serif z-10">分镜稿</div>
                      <ImageWithFallback 
                        src={sb.sketch} 
                        alt="Sketch" 
                        className="w-full aspect-video object-cover opacity-80 group-hover:opacity-100 transition-opacity" 
                      />
                    </div>
                    <div className="bg-[#2a1f1a] p-2 rounded-sm border border-[#C73D2E]/30 relative overflow-hidden">
                      <div className="absolute top-2 left-2 bg-[#1a1512]/80 px-2 py-1 text-xs text-[#B8A99A] font-serif z-10">成片画面</div>
                      <ImageWithFallback 
                        src={sb.final} 
                        alt="Final" 
                        className="w-full aspect-video object-cover opacity-80 group-hover:opacity-100 transition-opacity" 
                      />
                    </div>
                  </div>
                  <p className="text-[#B8A99A] text-sm mt-4 text-center italic group-hover:text-[#E8E2D4] transition-colors">{sb.desc}</p>
                </div>
              ))}
            </div>
          )}

          {/* Creation Analysis & Script */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8 md:p-12 border-b border-[#9B7B4C]/20">
            <div className="bg-[#231e1a] p-6 border-l-2 border-[#C73D2E] rounded-r-sm shadow-lg">
              <h3 className="font-serif text-xl text-[#E8E2D4] mb-4 tracking-widest">创作解析</h3>
              <p className="text-[#B8A99A] text-sm leading-relaxed text-justify">
                {project.analysis.split(/([，。])/).map((part, i) => 
                  part.includes("意象") || part.includes("结构") || part.includes("风格") || part.includes("镜头") ? 
                  <strong key={i} className="text-[#C73D2E] font-normal">{part}</strong> : part
                )}
              </p>
            </div>
            
            <div className="p-6 border-l-2 border-[#9B7B4C]">
              <h3 className="font-serif text-xl text-[#E8E2D4] mb-4 tracking-widest">剧本节选</h3>
              <blockquote className="text-[#E8E2D4] text-sm italic leading-loose whitespace-pre-line mb-6 opacity-80">
                {project.scriptExcerpt}
              </blockquote>
              <button className="px-6 py-2 border border-[#C73D2E] text-[#9B7B4C] text-sm font-serif hover:bg-[#C73D2E] hover:text-[#E8E2D4] transition-colors rounded-sm">
                下载完整剧本 PDF
              </button>
            </div>
          </div>

          {/* Honors & Team */}
          <div className="p-8 md:p-12 text-center bg-gradient-to-t from-[#0f0c0a] to-transparent">
            <Trophy className="mx-auto text-[#9B7B4C] mb-4" size={40} />
            <h3 className="font-serif text-2xl text-[#C73D2E] mb-2 tracking-widest">{project.honors}</h3>
            <p className="text-[#B8A99A] text-sm italic mb-8">“{project.views} 播放量”</p>
            
            <div className="max-w-md mx-auto border-t border-[#9B7B4C]/20 pt-8">
              <h4 className="font-serif text-lg text-[#E8E2D4] mb-4 tracking-widest">团队与角色</h4>
              <p className="text-[#B8A99A] text-sm leading-relaxed">
                本项目由独立团队完成。<br/>
                特别鸣谢所有参与拍摄与后期的伙伴。
              </p>
            </div>
          </div>

        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
