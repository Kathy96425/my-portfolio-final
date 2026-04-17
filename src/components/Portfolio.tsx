import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { motion, AnimatePresence } from 'motion/react';
import { ProjectCategory, Project } from '../types';
import { PROJECTS } from '../constants';
import CampusNews from './CampusNews';
import PersonalCreationsSubTab from './PersonalCreationsSubTab';
import MediaManuscriptsSubTab from './MediaManuscriptsSubTab';
import ImageWithFallback from './ui/ImageWithFallback';
import { 
  FileText, 
  Layout, 
  Plus, 
  X, 
  Trophy,
  Edit3,
  Save,
  Layers,
  Play,
  ArrowRight
} from 'lucide-react';

const Portfolio: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>(ProjectCategory.COPYWRITING);
  const [activeSubCategory, setActiveSubCategory] = useState<string>('个人创作');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isEditMode, setIsEditMode] = useState(false);
  const [editingProject, setEditingProject] = useState<Project | null>(null);

  useEffect(() => {
    setActiveSubCategory('个人创作');
  }, [activeCategory]);

  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
      setEditingProject({...selectedProject});
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [selectedProject]);

  useEffect(() => {
    if (!selectedProject) return;
    
    // Use setTimeout to ensure DOM is updated
    const timer = setTimeout(() => {
      const container = document.getElementById('detailed-content-container');
      if (!container) return;
      
      const imgs = container.querySelectorAll('img');
      imgs.forEach(img => {
        if (img.dataset.processed) return;
        img.dataset.processed = 'true';
        
        const src = img.getAttribute('src') || '';
        const alt = img.getAttribute('alt') || '';
        const className = img.getAttribute('class') || '';
        
        // Create wrapper
        const wrapper = document.createElement('div');
        wrapper.className = 'w-full my-4';
        img.parentNode?.insertBefore(wrapper, img);
        
        // Hide original image
        img.style.display = 'none';
        
        // Render ImageWithFallback into wrapper
        const root = createRoot(wrapper);
        root.render(
          <ImageWithFallback 
            src={src} 
            alt={alt} 
            className={className} 
            containerClassName="w-full rounded-xl overflow-hidden" 
          />
        );
      });
    }, 100);
    
    return () => clearTimeout(timer);
  }, [selectedProject]);

  const handleTextChange = (field: keyof Project, value: string) => {
    if (!editingProject) return;
    setEditingProject({ ...editingProject, [field]: value });
  };

  const handleDetailChange = (index: number, content: string) => {
    if (!editingProject || !editingProject.detailedContent) return;
    const newContent = [...editingProject.detailedContent];
    newContent[index] = { ...newContent[index], content };
    setEditingProject({ ...editingProject, detailedContent: newContent });
  };

  const tabs = [
    { id: ProjectCategory.COPYWRITING, label: '文案作品', icon: FileText, href: '#portfolio' },
    { id: ProjectCategory.VIDEO, label: '视频作品', icon: Play, href: '#visual-works' },
  ];

  const copywritingSubTabs = [
    { id: '个人创作', label: '个人创作' },
    { id: '媒体稿件', label: '媒体稿件' },
    { id: '校园新闻', label: '校园新闻' },
  ];

  const filteredProjects = PROJECTS.filter(p => {
    if (p.category !== activeCategory) return false;
    if (activeCategory === ProjectCategory.COPYWRITING && p.subCategory !== activeSubCategory) return false;
    return true;
  });

  return (
    <section id="portfolio" className="bg-[#1a1a1a] py-32 overflow-hidden text-white relative">
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
                <span>Visual Works</span>
             </motion.div>
             <h2 className="text-7xl md:text-9xl font-black font-display leading-[0.75] uppercase tracking-tighter">
                Visual <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-rose-400">Works</span>
             </h2>
          </div>
          
          <div className="flex flex-col items-end gap-4">
            <div className="flex flex-wrap gap-2 bg-white/5 backdrop-blur-md p-2 rounded-[2.5rem] border border-white/10">
              {tabs.map((tab) => (
                <a
                  key={tab.id}
                  href={tab.href}
                  onClick={(e) => {
                    if (tab.id !== ProjectCategory.VIDEO) {
                      e.preventDefault();
                      setActiveCategory(tab.id as any);
                    }
                  }}
                  className={`px-8 py-3.5 rounded-full font-black text-[10px] uppercase tracking-widest transition-all flex items-center gap-2 ${
                    activeCategory === tab.id 
                      ? 'bg-yellow-400 text-slate-900 shadow-xl scale-105' 
                      : 'text-slate-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <tab.icon size={14} />
                  {tab.label}
                </a>
              ))}
            </div>

            {/* Sub Tabs for Copywriting */}
            <AnimatePresence>
              {activeCategory === ProjectCategory.COPYWRITING && (
                <motion.div
                  initial={{ opacity: 0, y: -10, height: 0 }}
                  animate={{ opacity: 1, y: 0, height: 'auto' }}
                  exit={{ opacity: 0, y: -10, height: 0 }}
                  className="flex flex-wrap gap-2 justify-end overflow-hidden"
                >
                  {copywritingSubTabs.map(tab => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveSubCategory(tab.id)}
                      className={`px-5 py-2 rounded-full text-[12px] font-bold transition-all ${
                        activeSubCategory === tab.id
                          ? 'bg-indigo-500 text-white shadow-lg'
                          : 'bg-white/5 text-slate-400 hover:bg-white/10 hover:text-white border border-white/10'
                      }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {activeCategory === ProjectCategory.COPYWRITING && activeSubCategory === '校园新闻' ? (
          <CampusNews onSelectProject={setSelectedProject} />
        ) : activeCategory === ProjectCategory.COPYWRITING && activeSubCategory === '个人创作' ? (
          <PersonalCreationsSubTab />
        ) : activeCategory === ProjectCategory.COPYWRITING && activeSubCategory === '媒体稿件' ? (
          <MediaManuscriptsSubTab onSelectProject={setSelectedProject} />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode='popLayout'>
              {filteredProjects.map((project, idx) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                onClick={() => (project.subCategory === '媒体稿件' || project.detailedContent || !project.link) ? setSelectedProject(project) : window.open(project.link, '_blank')}
                className="group cursor-pointer flex flex-col"
              >
                {/* Thumbnail */}
                <div className="relative aspect-video rounded-lg overflow-hidden">
                  <img src={project.imageUrl} alt={project.title} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.02]" />
                  {/* Dark overlay on hover */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                  
                  {/* Category Label */}
                  <div className="absolute bottom-2 left-2 flex gap-2">
                    <div className="bg-black/50 backdrop-blur-sm text-white text-[12px] px-[10px] py-[4px] rounded-2xl">
                      {project.category}
                    </div>
                    {project.subCategory && (
                      <div className="bg-indigo-600/80 backdrop-blur-sm text-white text-[12px] px-[10px] py-[4px] rounded-2xl">
                        {project.subCategory}
                      </div>
                    )}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-[18px] font-bold text-white mb-1 leading-snug mt-3">
                  {project.title}
                </h3>

                {/* Short Description */}
                <p className="text-[14px] text-[#b0b0b0] leading-[1.5] mb-1">
                  {project.description}
                </p>

                {/* Role/Data */}
                <p className="text-[14px] text-[#FFD166] font-bold mb-3">
                  {project.role}
                </p>

                {/* Link/Button */}
                <div className="mt-auto flex items-center text-[14px] text-white group/link w-fit">
                  {project.subCategory === '媒体稿件' ? '阅读全文' : '查看作品'}
                  <ArrowRight size={16} className="ml-1 transition-transform duration-300 group-hover/link:translate-x-1" />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
        )}
      </div>

      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setSelectedProject(null)} className="absolute inset-0 bg-slate-950/98 backdrop-blur-2xl" />
            {selectedProject.subCategory === '媒体稿件' || selectedProject.subCategory === '校园新闻' ? (
              <motion.div 
                layoutId={selectedProject.id} 
                className="relative w-full max-w-[800px] max-h-[90vh] bg-[#1a1a1a] text-[#e0e0e0] rounded-2xl overflow-y-auto shadow-2xl flex flex-col border border-white/10 z-10"
                style={{ fontFamily: "'Source Han Sans', '思源黑体', 'Inter', sans-serif", lineHeight: 1.8 }}
              >
                <button onClick={() => setSelectedProject(null)} className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors z-10 bg-black/50 rounded-full p-2">
                  <X size={24} />
                </button>
                
                <div className="p-8 md:p-12">
                  <div id="detailed-content-container" className="mb-12">
                    {selectedProject.detailedContent?.map((section, idx) => (
                      <div key={idx} className="mb-6">
                        {section.content.includes('<') ? (
                          <div dangerouslySetInnerHTML={{ __html: section.content }} />
                        ) : (
                          <p className="text-[1.1rem] mb-[1.5rem] text-justify">{section.content}</p>
                        )}
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex justify-start mb-8">
                    <button onClick={() => setSelectedProject(null)} className="inline-block mt-[30px] px-[28px] py-[10px] text-[14px] bg-transparent border-2 border-[#FFD166] text-[#FFD166] no-underline rounded-[40px] font-semibold transition-colors duration-300 hover:bg-[#FFD166] hover:text-[#1a1a1a]" style={{ fontFamily: "'Inter', sans-serif" }}>
                      ← 返回作品列表
                    </button>
                  </div>
                  
                  <div className="flex justify-between items-center pt-[30px] mt-[50px] border-t border-[#333]">
                    {(() => {
                      const currentCategoryArticles = activeSubCategory === '校园新闻' 
                        ? PROJECTS.filter(p => p.subCategory === '校园新闻')
                        : PROJECTS.filter(p => p.subCategory === activeSubCategory);
                      const currentIndex = currentCategoryArticles.findIndex(p => p.id === selectedProject.id);
                      const prevArticle = currentIndex > 0 ? currentCategoryArticles[currentIndex - 1] : null;
                      const nextArticle = currentIndex < currentCategoryArticles.length - 1 ? currentCategoryArticles[currentIndex + 1] : null;
                      
                      return (
                        <>
                          {prevArticle ? (
                            <button onClick={() => setSelectedProject(prevArticle)} className="text-left group/nav max-w-[45%] text-[#FFD166] hover:underline">
                              <div className="truncate">上一篇：{prevArticle.title.replace(/<br>/g, ' ')}</div>
                            </button>
                          ) : <div />}
                          
                          {nextArticle ? (
                            <button onClick={() => setSelectedProject(nextArticle)} className="text-right group/nav max-w-[45%] text-[#FFD166] hover:underline">
                              <div className="truncate">下一篇：{nextArticle.title.replace(/<br>/g, ' ')}</div>
                            </button>
                          ) : <div />}
                        </>
                      );
                    })()}
                  </div>
                </div>
              </motion.div>
            ) : (
              <motion.div 
                layoutId={selectedProject.id} 
                className="relative w-full max-w-7xl h-[90vh] bg-white text-slate-900 rounded-[4rem] overflow-hidden shadow-2xl flex flex-col md:flex-row border border-white/10 z-10"
              >
                <div className="absolute top-8 right-8 z-[110] flex gap-3">
                  <button onClick={() => setIsEditMode(!isEditMode)} className={`px-6 py-3 rounded-full transition-all shadow-lg flex items-center gap-2 font-black text-xs ${isEditMode ? 'bg-emerald-500 text-white' : 'bg-indigo-600 text-white'}`}>
                    {isEditMode ? <><Save size={18}/> Save</> : <><Edit3 size={18}/> Edit</>}
                  </button>
                  <button onClick={() => setSelectedProject(null)} className="w-12 h-12 bg-slate-900 text-white rounded-full flex items-center justify-center hover:bg-rose-500 transition-all shadow-lg"><X size={24} strokeWidth={3} /></button>
                </div>

                <div className="w-full md:w-[40%] bg-slate-50 p-12 flex flex-col overflow-y-auto border-r border-slate-100">
                    <h3 contentEditable={isEditMode} onBlur={(e) => handleTextChange('title', e.currentTarget.innerText)} suppressContentEditableWarning className={`text-4xl font-black mb-10 leading-none font-display uppercase outline-none ${isEditMode ? 'bg-yellow-100 p-4 rounded-2xl border-2 border-dashed border-yellow-400' : ''}`}>
                      {(editingProject || selectedProject).title}
                    </h3>
                    
                    <div className="bg-white p-10 rounded-[2.5rem] mb-10 shadow-xl shadow-slate-900/5 border border-slate-100">
                      <p className="text-[10px] font-black text-slate-300 mb-2 uppercase tracking-widest">Core Impact</p>
                      <p contentEditable={isEditMode} onBlur={(e) => handleTextChange('role', e.currentTarget.innerText)} className="text-xl font-black text-indigo-600 mb-6">{(editingProject || selectedProject).role}</p>
                      <div className="h-px bg-slate-100 w-full mb-6" />
                      <p className="text-[10px] font-black uppercase tracking-widest mb-2 text-yellow-500">Metric</p>
                      <p contentEditable={isEditMode} onBlur={(e) => handleTextChange('metrics', e.currentTarget.innerText)} className="text-3xl font-black italic tracking-tighter">{(editingProject || selectedProject).metrics}</p>
                    </div>
                    
                    <div className="aspect-video w-full rounded-[2.5rem] overflow-hidden shadow-lg border-2 border-white">
                      <img src={(editingProject || selectedProject).imageUrl} className="w-full h-full object-cover" alt="" />
                    </div>
                </div>

                <div className="flex-1 p-12 md:p-24 overflow-y-auto bg-white">
                  <div className="max-w-3xl mx-auto space-y-12">
                     {(editingProject || selectedProject).detailedContent?.map((section, idx) => (
                       <div key={idx} className="group">
                         <span className="text-[10px] font-black uppercase tracking-[0.4em] text-indigo-400 mb-6 block">{section.subtitle}</span>
                         <div contentEditable={isEditMode} onBlur={(e) => handleDetailChange(idx, e.currentTarget.innerText)} className="text-xl font-bold text-slate-600 leading-[1.8] outline-none group-hover:text-slate-900 transition-colors whitespace-pre-wrap">
                           {section.content}
                         </div>
                       </div>
                     ))}
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Portfolio;
