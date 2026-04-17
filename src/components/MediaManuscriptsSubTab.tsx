import React from 'react';
import { motion } from 'motion/react';
import { PROJECTS } from '../constants';
import { ProjectCategory } from '../types';
import { ExternalLink, ArrowRight, Quote } from 'lucide-react';

interface MediaManuscriptsSubTabProps {
  onSelectProject: (project: any) => void;
}

const MediaManuscriptsSubTab: React.FC<MediaManuscriptsSubTabProps> = ({ onSelectProject }) => {
  const mediaProjects = PROJECTS.filter(
    (p) => p.category === ProjectCategory.COPYWRITING && p.subCategory === "媒体稿件"
  );

  return (
    <div className="py-12">
      <div className="flex flex-col lg:flex-row gap-12 xl:gap-16">
        {/* Left Side: Slogan & Info (Balanced width) */}
        <div className="lg:w-[38%] relative pr-12">
          {/* Vertical Separator Line */}
          <div className="hidden lg:block absolute right-0 top-0 bottom-0 w-px bg-gradient-to-b from-white/20 via-white/10 to-transparent"></div>
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="sticky top-24"
          >
            <div className="relative">
              {/* Background Decorative Line */}
              <div className="absolute -left-6 top-0 bottom-0 w-px bg-gradient-to-b from-yellow-500/50 via-yellow-500/10 to-transparent"></div>
              
              <div className="text-[10px] tracking-[0.5em] uppercase text-[#E6B84D] mb-8 font-mono flex items-center gap-4">
                <span className="w-8 h-px bg-[#E6B84D]/20"></span>
                MEDIA MANUSCRIPTS
              </div>
              
              {/* Specialized Slogan - Serif & Impactful Staggered - Stretched & Tighter */}
              <div className="mb-12 mt-16 space-y-8 text-left pl-4">
                {/* Group 1: 现场即真相 (White) */}
                <div className="relative transform scale-y-[1.2] origin-left">
                  <div className="text-6xl md:text-7xl lg:text-[6.2rem] font-serif font-black italic tracking-tighter leading-[0.8] text-white whitespace-nowrap">
                    现场即
                  </div>
                  <div className="text-6xl md:text-7xl lg:text-[6.2rem] font-serif font-black italic tracking-tighter leading-[0.8] text-white">
                    真相
                  </div>
                </div>

                {/* Group 2: 落笔即见证 (Yellow) */}
                <div className="relative mt-12 transform scale-y-[1.2] origin-left">
                  <div className="text-6xl md:text-7xl lg:text-[6.2rem] font-serif font-black italic tracking-tighter leading-[0.8] text-[#E6B84D] whitespace-nowrap">
                    落笔即
                  </div>
                  <div className="text-6xl md:text-7xl lg:text-[6.2rem] font-serif font-black italic tracking-tighter leading-[0.8] text-[#E6B84D]">
                    见证
                  </div>
                </div>
              </div>

              {/* Internship & Extra Info */}
              <div className="space-y-12 border-t border-white/5 pt-12">
                {/* Journalist's Creed - Moved down to be above Internship */}
                <div className="space-y-2 pl-7">
                  <p className="text-sm text-white/40 leading-relaxed font-light">
                    记录时代脉搏，捕捉社会切面。
                  </p>
                  <p className="text-sm text-white/40 leading-relaxed font-light">
                    在文字中寻找事实的重量。
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-[10px] text-yellow-500/60 font-mono tracking-widest uppercase">
                    <span className="w-4 h-px bg-yellow-500/40"></span>
                    Internship Experience
                  </div>
                  <div className="space-y-2 pl-7">
                    <p className="text-base font-medium text-white/80" style={{ fontFamily: "'Source Han Serif', serif" }}>《湛江日报》</p>
                    <p className="text-base font-medium text-white/80" style={{ fontFamily: "'Source Han Serif', serif" }}>《湛江晚报》</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right Side: Project Cards (Expanded width) */}
        <div className="lg:w-[62%] lg:pt-[6rem]">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 xl:gap-12">
            {mediaProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (index % 2) * 0.1 }}
                className="group cursor-pointer"
                onClick={() => onSelectProject(project)}
              >
                {/* Balanced Card Image */}
                <div className="relative aspect-[16/10] overflow-hidden rounded-xl mb-6 bg-white/5 border border-white/5 group-hover:border-yellow-500/20 transition-all duration-500 shadow-2xl">
                  <img 
                    src={project.imageUrl} 
                    alt={project.title}
                    className="w-full h-full object-cover grayscale-[0.1] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                    referrerPolicy="no-referrer"
                  />
                  
                  {/* Hover Overlay - Interaction Guide */}
                  <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 backdrop-blur-[2px]">
                    <div className="flex flex-col items-center gap-3 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      <div className="w-12 h-12 rounded-full border border-yellow-500/50 flex items-center justify-center text-yellow-500">
                        <ArrowRight size={20} />
                      </div>
                      <span className="text-[10px] font-mono text-yellow-500 uppercase tracking-[0.3em]">View Details</span>
                    </div>
                  </div>

                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-50 group-hover:opacity-0 transition-opacity duration-500"></div>
                  
                  {/* Floating Index */}
                  <div className="absolute top-4 left-4 text-[10px] font-mono text-white/20 group-hover:text-yellow-500/40 transition-colors">
                    {(index + 1).toString().padStart(2, '0')}
                  </div>
                </div>

                {/* Content */}
                <div className="px-2">
                  <div className="flex items-center gap-2 text-[9px] tracking-[0.3em] uppercase text-yellow-500/50 font-mono mb-3">
                    <span>{project.role}</span>
                  </div>
                  
                  <h3 className="text-xl font-medium text-white/90 group-hover:text-yellow-500 transition-colors duration-300 leading-snug mb-3" style={{ fontFamily: "'Source Han Serif', serif" }}>
                    {project.title}
                  </h3>
                  
                  <p className="text-sm text-white/40 leading-relaxed line-clamp-2 font-light mb-6">
                    {project.description}
                  </p>

                  <div className="flex items-center gap-6">
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        onSelectProject(project);
                      }}
                      className="text-[10px] text-white/30 group-hover:text-yellow-500 transition-colors flex items-center gap-2 uppercase tracking-widest"
                    >
                      <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                      View Details
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MediaManuscriptsSubTab;
