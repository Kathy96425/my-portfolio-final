
import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { X, Play, Image as ImageIcon, FileText, Layout, ArrowRight } from 'lucide-react';
import { Project } from '../../types';

interface ProjectDetailProps {
  project: Project;
  onClose: () => void;
}

const ProjectDetail: React.FC<ProjectDetailProps> = ({ project, onClose }) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-12 overflow-hidden"
    >
      {/* Cinematic Background: Blurred Image & Gradient Overlay */}
      <motion.div 
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        className="absolute inset-0 bg-black"
      >
        <img 
          src={project.imageUrl} 
          alt={project.title} 
          className="w-full h-full object-cover opacity-30 blur-3xl scale-125"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black" />
      </motion.div>

      {/* Main Content Container: Glassmorphism */}
      <motion.div
        initial={{ y: 100, opacity: 0, scale: 0.95 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        exit={{ y: 100, opacity: 0, scale: 0.95 }}
        transition={{ type: 'spring', damping: 25, stiffness: 150 }}
        className="relative w-full max-w-7xl h-full bg-slate-950/40 backdrop-blur-3xl border border-white/10 rounded-[4rem] overflow-hidden shadow-2xl flex flex-col z-10"
      >
        {/* Header: Fixed Top */}
        <div className="absolute top-0 left-0 w-full p-12 flex items-center justify-between z-50 pointer-events-none">
          <div className="flex flex-col gap-2 pointer-events-auto">
            <span className="text-[10px] font-black uppercase tracking-[0.5em] text-indigo-400">
              {project.role} ✦ {project.subCategory || "Visual Work"}
            </span>
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none text-white">
              {project.title}
            </h2>
          </div>
          
          <button 
            onClick={onClose}
            className="w-16 h-16 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 flex items-center justify-center text-white hover:bg-rose-500 hover:border-rose-500 transition-all pointer-events-auto"
          >
            <X size={32} strokeWidth={3} />
          </button>
        </div>

        {/* Scrollable Content Area */}
        <div className="flex-1 overflow-y-auto pt-48 pb-24 px-12 md:px-24 scrollbar-hide">
          <div className="max-w-5xl mx-auto space-y-32">
            
            {/* 1. Hero Visual: Video or Large Image */}
            <section className="relative aspect-video rounded-[3rem] overflow-hidden shadow-2xl border border-white/5 bg-black group">
              {project.videoUrl ? (
                <iframe 
                  src={project.videoUrl} 
                  className="w-full h-full border-0"
                  title={project.title}
                  scrolling="no"
                  allowFullScreen={true}
                />
              ) : (
                <div className="relative w-full h-full">
                  <img 
                    src={project.imageUrl} 
                    alt={project.title} 
                    className="w-full h-full object-cover opacity-80"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-24 h-24 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center">
                      <Play size={40} className="text-white fill-current ml-2" />
                    </div>
                  </div>
                </div>
              )}
            </section>

            {/* 2. Narrative & Analysis */}
            <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-24">
              <div className="lg:col-span-4 flex flex-col gap-8">
                <div className="flex flex-col gap-4">
                  <span className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-500">The Slogan</span>
                  <p className="text-2xl font-light italic text-indigo-400 tracking-widest leading-relaxed">
                    "{project.slogan || "A cinematic journey into the unknown."}"
                  </p>
                </div>
                
                <div className="flex flex-col gap-4">
                  <span className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-500">Core Metrics</span>
                  <p className="text-4xl font-black tracking-tighter text-white uppercase italic">
                    {project.metrics || "Impactful Storytelling"}
                  </p>
                </div>

                <div className="flex flex-wrap gap-3 pt-8">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold uppercase tracking-widest text-slate-400">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-8 flex flex-col gap-12">
                <div className="flex items-center gap-6">
                  <div className="w-12 h-px bg-indigo-500" />
                  <span className="text-[10px] font-black uppercase tracking-[0.5em] text-indigo-400">Project Analysis</span>
                </div>
                <div className="space-y-8">
                  <p className="text-xl font-light text-slate-300 leading-[1.8] whitespace-pre-wrap">
                    {project.analysis || project.description}
                  </p>
                  {project.detailedContent?.map((section, idx) => (
                    <div key={idx} className="flex flex-col gap-4">
                      <span className="text-xs font-black uppercase tracking-widest text-white">{section.subtitle}</span>
                      <p className="text-lg font-light text-slate-400 leading-relaxed">{section.content}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* 3. Stills Gallery */}
            {project.stills && project.stills.length > 0 && (
              <section className="space-y-12">
                <div className="flex items-center gap-6">
                  <div className="w-12 h-px bg-rose-500" />
                  <span className="text-[10px] font-black uppercase tracking-[0.5em] text-rose-400">Cinematic Stills</span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {project.stills.map((still, idx) => (
                    <motion.div 
                      key={idx}
                      whileHover={{ scale: 1.02 }}
                      className="aspect-video rounded-3xl overflow-hidden border border-white/5 shadow-xl bg-slate-900"
                    >
                      <img 
                        src={still} 
                        alt={`Still ${idx}`} 
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                    </motion.div>
                  ))}
                </div>
              </section>
            )}

            {/* 4. Storyboards & Script */}
            {project.storyboards && project.storyboards.length > 0 && (
              <section className="space-y-12">
                <div className="flex items-center gap-6">
                  <div className="w-12 h-px bg-emerald-500" />
                  <span className="text-[10px] font-black uppercase tracking-[0.5em] text-emerald-400">Storyboards & Script</span>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  {project.storyboards.map((sb, idx) => (
                    <div key={idx} className="aspect-[3/4] rounded-2xl overflow-hidden border border-white/5 bg-white/5 p-2">
                       <img 
                        src={sb} 
                        alt={`Storyboard ${idx}`} 
                        className="w-full h-full object-cover rounded-xl opacity-60 hover:opacity-100 transition-opacity"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* 5. Deep Resources */}
            {project.resource && (
              <section className="p-12 md:p-24 rounded-[4rem] bg-gradient-to-br from-indigo-600/20 to-rose-600/20 border border-white/10 flex flex-col md:flex-row items-center justify-between gap-12">
                <div className="max-w-xl">
                  <h4 className="text-4xl font-black uppercase tracking-tighter mb-4">Deep Resource Pack</h4>
                  <p className="text-slate-400 font-light leading-relaxed">
                    Access the complete project archive, including raw footage, high-res stills, and the full script.
                  </p>
                </div>
                <div className="flex flex-col items-center gap-6">
                  {project.resource.qrcode && (
                    <div className="w-32 h-32 bg-white p-2 rounded-2xl shadow-2xl">
                      <img src={project.resource.qrcode} alt="QR Code" className="w-full h-full object-contain" />
                    </div>
                  )}
                  <a 
                    href={project.resource.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="px-10 py-5 rounded-full bg-white text-slate-950 font-black uppercase tracking-widest text-xs flex items-center gap-3 hover:scale-105 transition-transform shadow-xl"
                  >
                    Download Archive <ArrowRight size={16} />
                  </a>
                  {project.resource.pwd && (
                    <span className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-500">
                      Password: {project.resource.pwd}
                    </span>
                  )}
                </div>
              </section>
            )}
          </div>
        </div>

        {/* Cinematic Footer Bar */}
        <div className="absolute bottom-0 left-0 w-full p-12 flex items-center justify-center pointer-events-none">
          <div className="flex items-center gap-12 pointer-events-auto">
            <div className="flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.4em] text-slate-500">
              <ImageIcon size={14} />
              <span>{project.stills?.length || 0} Stills</span>
            </div>
            <div className="w-px h-4 bg-slate-800" />
            <div className="flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.4em] text-slate-500">
              <Layout size={14} />
              <span>{project.storyboards?.length || 0} Boards</span>
            </div>
            <div className="w-px h-4 bg-slate-800" />
            <div className="flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.4em] text-slate-500">
              <FileText size={14} />
              <span>Analysis Included</span>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProjectDetail;
