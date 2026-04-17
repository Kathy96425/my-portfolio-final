
import React from 'react';
import { motion } from 'motion/react';
import { Project } from '../../types';
import { Play, ArrowUpRight } from 'lucide-react';

interface ProjectGridProps {
  projects: Project[];
  onSelect: (project: Project) => void;
}

const ProjectGrid: React.FC<ProjectGridProps> = ({ projects, onSelect }) => {
  return (
    <div id="visual-works-grid" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-24">
      {projects.map((project, index) => (
        <motion.div
          key={project.id}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1, duration: 0.8 }}
          onClick={() => onSelect(project)}
          className="group cursor-pointer"
        >
          {/* Cinematic Card Container */}
          <div className="relative aspect-[4/5] rounded-3xl overflow-hidden mb-8 bg-slate-900 shadow-2xl shadow-black/50 border border-white/5">
            {/* Background Image */}
            <img 
              src={project.imageUrl} 
              alt={project.title} 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-1"
              referrerPolicy="no-referrer"
            />
            
            {/* Cinematic Overlay: Gradient & Noise */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500" />
            
            {/* Hover Content: Play Icon & Slogan */}
            <div className="absolute inset-0 flex flex-col items-center justify-center p-12 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
              <div className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center mb-6">
                <Play size={32} className="text-white fill-current ml-1" />
              </div>
              <p className="text-center text-sm font-light italic text-slate-300 tracking-widest max-w-[200px]">
                {project.slogan || "A cinematic exploration of narrative and form."}
              </p>
            </div>

            {/* Bottom Info Overlay */}
            <div className="absolute bottom-0 left-0 w-full p-10 flex flex-col gap-4">
              <div className="flex items-center gap-4">
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-indigo-400 bg-indigo-500/10 px-3 py-1 rounded-full border border-indigo-500/20">
                  {project.role}
                </span>
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">
                  {project.subCategory || "Short Film"}
                </span>
              </div>
              <h3 className="text-3xl font-black uppercase tracking-tighter leading-none group-hover:text-indigo-400 transition-colors">
                {project.title}
              </h3>
            </div>

            {/* Top Right Arrow */}
            <div className="absolute top-8 right-8 w-12 h-12 rounded-full bg-white/5 backdrop-blur-md border border-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <ArrowUpRight size={20} className="text-white" />
            </div>
          </div>

          {/* Cinematic Metadata: Description & Tags */}
          <div className="px-4">
            <p className="text-slate-400 text-sm leading-relaxed mb-6 line-clamp-2 font-light">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-3">
              {project.tags.map(tag => (
                <span key={tag} className="text-[10px] font-bold uppercase tracking-widest text-slate-600 border-b border-slate-800 pb-1">
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default ProjectGrid;
