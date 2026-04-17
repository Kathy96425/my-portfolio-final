import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Play, ArrowRight, X, ExternalLink, Film, Info } from 'lucide-react';
import { PROJECTS } from '../../constants';
import { ProjectCategory, Project } from '../../types';

const VisualWorks: React.FC = () => {
  const videoProjects = PROJECTS.filter(p => p.category === ProjectCategory.VIDEO);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="visual-works" className="bg-[#1a1a1a] py-32 overflow-hidden text-white relative">
      <div className="absolute top-0 right-0 w-full h-full bg-indigo-600/10 blur-[200px] pointer-events-none" />
      
      <div className="max-w-[1200px] mx-auto px-5 relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-12">
          <div className="max-w-2xl">
             <motion.div 
               initial={{ x: -20, opacity: 0 }}
               whileInView={{ x: 0, opacity: 1 }}
               className="flex items-center gap-4 text-yellow-400 font-black tracking-[0.4em] uppercase text-[10px] mb-8"
             >
                <div className="w-12 h-0.5 bg-yellow-400" />
                <span>Creative Video Archive</span>
             </motion.div>
             <h2 className="text-7xl md:text-9xl font-black leading-[0.75] uppercase tracking-tighter">
                Visual <br/>
                <span className="text-indigo-400">Works</span>
             </h2>
          </div>
          <div className="lg:mb-4">
            <p className="text-slate-400 text-xl max-w-sm leading-relaxed">
              从灵感捕捉到后期剪辑，用镜头语言编织每一个动人瞬间。
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12">
          {videoProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              <div className="relative aspect-video rounded-3xl overflow-hidden mb-6 border border-white/10 shadow-2xl">
                <img 
                  src={project.imageUrl} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500" />
                
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div 
                    whileHover={{ scale: 1.1 }}
                    className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white"
                  >
                    <Play size={32} fill="currentColor" />
                  </motion.div>
                </div>

                <div className="absolute bottom-6 left-6 flex gap-2">
                  <span className="bg-indigo-600 px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest">
                    {project.role}
                  </span>
                </div>
              </div>

              <h3 className="text-3xl font-black mb-3 group-hover:text-indigo-400 transition-colors uppercase tracking-tight">
                {project.title}
              </h3>
              <p className="text-slate-400 text-lg mb-6 max-w-md leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex items-center gap-2 text-yellow-400 font-bold uppercase tracking-widest text-xs group-hover:gap-4 transition-all">
                查看详情 <ArrowRight size={16} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 bg-black/95 backdrop-blur-xl"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="bg-[#222] w-full max-w-5xl rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl flex flex-col md:flex-row h-full max-h-[85vh]"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Left Side: Visual */}
              <div className="md:w-3/5 h-1/2 md:h-full relative bg-black flex items-center justify-center">
                <img 
                  src={selectedProject.imageUrl} 
                  alt={selectedProject.title} 
                  className="w-full h-full object-cover opacity-60"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.a
                    href={selectedProject.link || selectedProject.videoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-24 h-24 rounded-full bg-indigo-600 flex items-center justify-center text-white shadow-2xl shadow-indigo-600/50 group"
                  >
                    <Play size={40} fill="currentColor" className="ml-2 group-hover:scale-110 transition-transform" />
                  </motion.a>
                </div>
                <div className="absolute bottom-8 left-8 right-8 flex justify-between items-center text-white/50 text-xs font-bold tracking-widest uppercase">
                  <div className="flex items-center gap-2">
                    <Film size={14} />
                    <span>4K Ultra HD</span>
                  </div>
                  <span>© 2024 Lai Huiyi</span>
                </div>
              </div>

              {/* Right Side: Info */}
              <div className="md:w-2/5 p-8 md:p-12 flex flex-col justify-between bg-gradient-to-br from-[#222] to-[#1a1a1a]">
                <div>
                  <div className="flex justify-between items-start mb-12">
                    <div className="bg-indigo-600/20 text-indigo-400 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest border border-indigo-600/30">
                      {selectedProject.role}
                    </div>
                    <button 
                      onClick={() => setSelectedProject(null)}
                      className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors"
                    >
                      <X size={20} />
                    </button>
                  </div>

                  <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight tracking-tighter uppercase">
                    {selectedProject.title}
                  </h2>
                  
                  <div className="space-y-8 mb-12">
                    <div className="flex gap-4">
                      <div className="w-10 h-10 rounded-xl bg-yellow-400/10 flex items-center justify-center text-yellow-400 shrink-0">
                        <Info size={20} />
                      </div>
                      <div>
                        <h4 className="text-xs font-black text-white/40 uppercase tracking-widest mb-2">项目描述</h4>
                        <p className="text-slate-300 leading-relaxed">
                          {selectedProject.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-4">
                  <a 
                    href={selectedProject.link || selectedProject.videoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-white text-black py-5 rounded-2xl font-black text-center flex items-center justify-center gap-3 hover:bg-indigo-400 hover:text-white transition-all group"
                  >
                    立即播放 <ExternalLink size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </a>
                  <p className="text-center text-[10px] text-white/20 font-bold uppercase tracking-[0.2em]">
                    点击按钮跳转至播放平台
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default VisualWorks;
