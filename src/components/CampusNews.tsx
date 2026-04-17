import React from 'react';
import { motion } from 'motion/react';
import { PROJECTS } from '../constants';
import { ProjectCategory } from '../types';
import { ArrowRight, GraduationCap, Compass } from 'lucide-react';

interface CampusNewsProps {
  onSelectProject: (project: any) => void;
}

const CampusNews: React.FC<CampusNewsProps> = ({ onSelectProject }) => {
  const projects = PROJECTS.filter(
    (p) => p.category === ProjectCategory.COPYWRITING && p.subCategory === '校园新闻'
  );

  return (
    <div className="py-12">
      <div className="flex flex-col lg:flex-row gap-8 xl:gap-16">
        {/* Left Side: Slogan & Info (Compressed width to accommodate cards) */}
        <div className="lg:w-[32%] relative pr-8">
          {/* Vertical Separator Line */}
          <div className="hidden lg:block absolute right-0 top-0 bottom-0 w-px bg-gradient-to-b from-white/20 via-white/10 to-transparent"></div>
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="sticky top-24"
          >
            <div className="relative">
              {/* Background Decorative Line - Yellow for Campus News */}
              <div className="absolute -left-6 top-0 bottom-0 w-px bg-gradient-to-b from-yellow-500/50 via-yellow-500/10 to-transparent"></div>
              
              <div className="text-[10px] tracking-[0.5em] uppercase text-[#E6B84D] mb-8 font-mono flex items-center gap-4">
                <span className="w-8 h-px bg-[#E6B84D]/20"></span>
                Campus Chronicles
              </div>
              
              {/* Staggered Slogan Design: "看见远方，也看见身边" - Adjusted to match image layout */}
              <div className="mb-16 mt-2 relative min-h-[420px] w-full max-w-[420px]">
                {/* Background Decorative "News" Watermark */}
                <div className="absolute -top-10 -left-10 text-[12rem] font-serif font-black text-white/[0.02] select-none pointer-events-none italic">
                  NEWS
                </div>

                <div className="relative z-10 font-serif italic tracking-tight">
                  {/* 1. 看见远方 (Top Left - Moved up to hug header) */}
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="absolute left-0 top-[-12px] text-[46px] md:text-[54px] font-bold text-white whitespace-nowrap transform scale-y-[1.3] origin-top"
                  >
                    看见远方
                  </motion.div>

                  {/* Horizontal Line - Spans from left to vertical line */}
                  <motion.div
                    initial={{ width: "0px", opacity: 0 }}
                    whileInView={{ width: "335px", opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                    className="absolute left-0 top-[142px] h-[1px] bg-gradient-to-r from-transparent via-[#E6B84D]/40 to-[#E6B84D]/80"
                  />

                  {/* Vertical Line (Right) - Moved further right to accommodate text */}
                  <motion.div
                    initial={{ height: "0px", opacity: 0 }}
                    whileInView={{ height: "100%", opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className="absolute left-[335px] top-[38px] w-[2px] bg-[#E6B84D]"
                  />

                  {/* 2. 也看见 (Below line, shifted right) */}
                  <motion.div 
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 }}
                    className="absolute left-[110px] top-[157px] text-[46px] md:text-[54px] font-bold text-white whitespace-nowrap transform scale-y-[1.3] origin-top leading-none"
                  >
                    也看见
                  </motion.div>

                  {/* 3. 身边 (Vertical, to the right of "见", "身" aligned with "见") */}
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                    className="absolute left-[270px] top-[156px] text-[48px] md:text-[56px] flex flex-col leading-none gap-1 text-[#E6B84D] font-bold transform scale-y-[1.3] origin-top"
                  >
                    <span>身</span>
                    <span>边</span>
                  </motion.div>
                </div>
              </div>

              {/* Campus Context & Creed */}
              <div className="space-y-12 border-t border-white/5 pt-12 mt-[-71px]">
                {/* Vision & Mission - Moved to match Media Manuscripts position */}
                <div className="space-y-2 pl-0">
                  <p className="text-sm text-white/40 leading-relaxed font-light">
                    立足校园热点，关注社会议题，<br />用文字连接象牙塔与广阔世界。
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-[10px] text-yellow-500/60 font-mono tracking-widest uppercase">
                    <GraduationCap size={14} className="text-yellow-500/40" />
                    Campus Footprint
                  </div>
                  <div className="space-y-2 pl-7">
                    <p className="text-base font-medium text-white/80" style={{ fontFamily: "'Source Han Serif', serif" }}>校传媒中心·采编部</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right Side: Project Cards (Expanded width) */}
        <div className="lg:w-[68%] lg:pt-[6rem]">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 xl:gap-12">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (index % 2) * 0.1 }}
                className="group cursor-pointer"
                onClick={() => onSelectProject(project)}
              >
                {/* Card Image with Yellow Accents */}
                <div className="relative aspect-[16/10] overflow-hidden rounded-2xl mb-6 bg-white/5 border border-white/5 group-hover:border-yellow-500/20 transition-all duration-500 shadow-2xl">
                  <img 
                    src={project.imageUrl} 
                    alt={project.title}
                    className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                    referrerPolicy="no-referrer"
                  />
                  
                  {/* Hover Overlay - Interaction Guide (Yellow Theme) */}
                  <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 backdrop-blur-[2px]">
                    <div className="flex flex-col items-center gap-3 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      <div className="w-12 h-12 rounded-full border border-yellow-500/50 flex items-center justify-center text-yellow-500">
                        <ArrowRight size={20} />
                      </div>
                      <span className="text-[10px] font-mono text-yellow-500 uppercase tracking-[0.3em]">Read Article</span>
                    </div>
                  </div>

                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-50 group-hover:opacity-0 transition-opacity duration-500"></div>
                  
                  {/* Floating Tag */}
                  <div className="absolute top-4 left-4 px-3 py-1 bg-black/40 backdrop-blur-md rounded-full border border-white/10 text-[9px] font-mono text-white/60 uppercase tracking-widest">
                    {project.tags?.[0] || 'Campus'}
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

export default CampusNews;
