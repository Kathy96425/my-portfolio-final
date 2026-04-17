import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Newspaper, Clapperboard, Radio, Smartphone, TrendingUp, Star, Rocket, Zap, Theater, X, Maximize2, ArrowRight, ChevronUp, ChevronDown } from 'lucide-react';
import { EXPERIENCES } from '../constants';
import Marquee from './Marquee';
import { Experience as ExperienceType } from '../types';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';

const Experience: React.FC = () => {
  const [selectedExp, setSelectedExp] = useState<ExperienceType | null>(null);

  return (
    <section id="experience" className="py-32 pb-0 relative overflow-hidden bg-[#fdf1e9]/50">
      {/* 动态浮动装饰元素 - 还原你之前的视觉细节 */}
      <motion.div 
        animate={{ y: [0, -20, 0], rotate: [0, 15, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
        className="absolute top-20 right-10 p-6 bg-white rounded-3xl shadow-lg border border-slate-100 z-0 hidden lg:block"
      >
        <Zap className="text-yellow-400" size={40} fill="currentColor" />
      </motion.div>
      <motion.div 
        animate={{ y: [0, 20, 0], rotate: [0, -10, 0] }}
        transition={{ duration: 7, repeat: Infinity }}
        className="absolute bottom-40 left-10 p-8 bg-indigo-600 rounded-full shadow-lg z-0 hidden lg:block"
      >
        <Star className="text-white" size={32} fill="currentColor" />
      </motion.div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 mb-20">
        
        {/* 头部标题区域 - 还原错落排版 */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-24 gap-12 text-center md:text-left">
           <div className="max-w-xl">
             <motion.div 
               initial={{ opacity: 0, y: 10 }} 
               whileInView={{ opacity: 1, y: 0 }} 
               className="inline-flex items-center gap-3 bg-indigo-600 text-white px-6 py-2.5 mb-8 rounded-full shadow-lg"
             >
                <Rocket size={20} className="text-yellow-300" />
                <span className="font-black text-[10px] uppercase tracking-[0.3em]">Professional Path</span>
             </motion.div>
             <h2 className="text-7xl md:text-9xl font-black text-slate-900 leading-[0.75] font-display tracking-tighter uppercase mb-6">
               Road <br/>
               <span className="text-rose-500">Map</span>
             </h2>
           </div>
           
           <div className="max-w-md">
             <div className="bg-white/70 backdrop-blur-xl p-10 rounded-[3rem] border border-white/80 shadow-xl rotate-2">
                <p className="font-black text-xl leading-relaxed italic text-indigo-900/80">
                  “从专注内容生产，到培养数据思维与跨媒介传播策略，每个脚步铺就可见的成长。”
                </p>
             </div>
           </div>
        </div>

        <div className="relative max-w-5xl mx-auto pb-40">
          {/* 中央时间线导轨 */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-slate-200 via-indigo-200 to-transparent md:-translate-x-1/2" />

          <div className="space-y-32">
            {EXPERIENCES.map((exp, index) => {
              const theme = [
                { color: 'text-blue-600', bg: 'bg-blue-600', soft: 'bg-blue-50', icon: Newspaper, stack: 'bg-blue-600/20' },
                { color: 'text-rose-500', bg: 'bg-rose-500', soft: 'bg-rose-50', icon: Clapperboard, stack: 'bg-rose-500/20' },
                { color: 'text-purple-600', bg: 'bg-purple-600', soft: 'bg-purple-50', icon: Theater, stack: 'bg-purple-600/20' },
                { color: 'text-emerald-500', bg: 'bg-emerald-500', soft: 'bg-emerald-50', icon: Radio, stack: 'bg-emerald-500/20' },
                { color: 'text-indigo-600', bg: 'bg-indigo-600', soft: 'bg-indigo-50', icon: Smartphone, stack: 'bg-indigo-600/20' }
              ][index % 5];
              const isEven = index % 2 === 0;
              const Icon = theme.icon;

              return (
                <div key={exp.id} className="relative flex flex-col md:flex-row items-center">
                  <motion.div 
                    whileHover={{ scale: 1.2, rotate: 90 }}
                    className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-14 h-14 bg-white rounded-full border-4 border-slate-900 z-20 flex items-center justify-center shadow-lg"
                  >
                     <Icon className={theme.color} size={24} />
                  </motion.div>

                  <div className={`w-full md:w-[45%] ${isEven ? 'md:ml-auto' : 'md:mr-auto'} pl-24 md:pl-0`}>
                    <motion.div
                      initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      onClick={() => setSelectedExp(exp)}
                      className="group relative cursor-zoom-in"
                    >
                      <div className={`absolute inset-0 ${theme.stack} rounded-[3rem] translate-x-4 translate-y-4 -z-10 opacity-0 group-hover:opacity-100 group-hover:translate-x-8 group-hover:translate-y-8 transition-all duration-300`} />

                      <div className="mb-4">
                        <span className={`inline-block px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest ${theme.bg} text-white shadow-sm`}>
                          {exp.period}
                        </span>
                      </div>

                      {/* 还原大圆角和自定义投影 */}
                      <div className="bg-white p-10 rounded-[3rem] border border-slate-100 shadow-2xl transition-all group-hover:shadow-indigo-200/50 group-hover:-translate-y-4 relative overflow-hidden duration-300">
                        <div className={`absolute top-0 right-0 w-32 h-32 ${theme.soft} rounded-full -mr-16 -mt-16 opacity-50 group-hover:scale-125 transition-transform duration-700`} />
                        
                        <div className="relative z-10 h-full flex flex-col">
                          <h3 className={`text-3xl font-black ${theme.color} mb-2 font-display uppercase tracking-tight leading-[1.1]`}>{exp.company}</h3>
                          {exp.role && <p className={`font-black ${theme.color} uppercase tracking-widest text-xs mb-8`}>{exp.role}</p>}
                          {!exp.role && <div className="mb-8"></div>}

                          <div className="mb-6 text-black font-medium leading-relaxed text-base border-l-2 border-slate-100 pl-6">
                            {exp.overview}
                          </div>

                          <motion.div 
                            animate={{ y: [0, -6, 0] }}
                            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                            className="mb-2 flex items-center justify-center w-full relative z-10"
                          >
                            <div className="inline-flex flex-col items-center justify-center cursor-pointer group/btn hover:scale-110 transition-transform duration-300">
                              <ChevronUp size={14} className="text-blue-500 opacity-40 group-hover:opacity-100 group-hover:-translate-y-1 transition-all duration-300" />
                              <span className="text-[11px] font-black uppercase tracking-[0.2em] text-blue-600 my-0.5 transition-colors duration-300 group-hover:text-blue-700">
                                Read More
                              </span>
                              <ChevronDown size={14} className="text-blue-500 opacity-40 group-hover:opacity-100 group-hover:translate-y-1 transition-all duration-300" />
                            </div>
                          </motion.div>

                          <div className={`p-4 ${theme.soft} rounded-2xl flex items-center justify-between border border-black/5 mt-auto`}>
                            <div className="flex items-center gap-2">
                              <TrendingUp size={16} className={theme.color} />
                              <span className="text-[10px] font-black uppercase text-slate-400 tracking-widest">GROWTH METRIC</span>
                            </div>
                            <span className={`font-black text-sm ${theme.color}`}>{exp.achievements}</span>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* 弹窗部分 - 同样应用安全处理 */}
      <AnimatePresence>
        {selectedExp && (() => {
          const selectedIndex = EXPERIENCES.findIndex(e => e.id === selectedExp.id);
          const selectedTheme = selectedIndex !== -1 ? [
            { color: 'text-blue-600', bg: 'bg-blue-600', soft: 'bg-blue-50', icon: Newspaper, stack: 'bg-blue-600/20' },
            { color: 'text-rose-500', bg: 'bg-rose-500', soft: 'bg-rose-50', icon: Clapperboard, stack: 'bg-rose-500/20' },
            { color: 'text-purple-600', bg: 'bg-purple-600', soft: 'bg-purple-50', icon: Theater, stack: 'bg-purple-600/20' },
            { color: 'text-emerald-500', bg: 'bg-emerald-500', soft: 'bg-emerald-50', icon: Radio, stack: 'bg-emerald-500/20' },
            { color: 'text-indigo-600', bg: 'bg-indigo-600', soft: 'bg-indigo-50', icon: Smartphone, stack: 'bg-indigo-600/20' }
          ][selectedIndex % 5] : { color: 'text-slate-900', bg: 'bg-slate-900' };

          return (
            <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-12 overflow-hidden">
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setSelectedExp(null)} className="absolute inset-0 bg-slate-950/90 backdrop-blur-xl" />
              <motion.div 
                layoutId={selectedExp.id}
                className="relative w-full max-w-4xl max-h-[90vh] bg-white rounded-[3.5rem] overflow-hidden shadow-2xl flex flex-col border border-slate-100"
              >
                 <div className="p-8 md:p-12 border-b border-slate-50 flex justify-between items-start sticky top-0 bg-white z-10">
                  <div className="flex-1">
                     <span className={`inline-block px-4 py-1.5 ${selectedTheme.bg} text-white rounded-full text-[10px] font-black uppercase tracking-widest mb-4`}>{selectedExp.period}</span>
                    <h3 className={`text-4xl md:text-5xl font-black ${selectedTheme.color} font-display uppercase tracking-tight`}>{selectedExp.company}</h3>
                  </div>
                  <button onClick={() => setSelectedExp(null)} className="w-14 h-14 bg-slate-100 text-slate-900 rounded-full flex items-center justify-center hover:bg-rose-500 hover:text-white transition-all"><X size={28} /></button>
                </div>
                <div className="flex-1 overflow-y-auto p-8 md:p-16 bg-slate-50/30">
                  <div className="max-w-2xl mx-auto markdown-body">
                    <Markdown
                      remarkPlugins={[remarkGfm]}
                      rehypePlugins={[rehypeRaw]}
                      components={{
                        strong: ({node, ...props}) => <mark className="bg-yellow-200/80 text-slate-900 px-1.5 py-0.5 rounded-md font-bold" {...props} />,
                        em: ({node, ...props}) => <mark className="bg-blue-100 text-blue-900 px-1.5 py-0.5 rounded-md not-italic font-medium" {...props} />,
                        blockquote: ({node, ...props}) => <blockquote className="border-l-4 border-indigo-500 bg-indigo-50/80 p-5 rounded-r-xl my-8 text-black leading-relaxed shadow-sm" {...props} />,
                        li: ({node, ...props}) => <li className="mb-2 pl-2 text-black" {...props} />,
                        ul: ({node, ...props}) => <ul className="list-disc list-inside my-4 space-y-2 text-black" {...props} />,
                        hr: ({node, ...props}) => <hr className="mt-12 mb-16 border-slate-800" {...props} />,
                        h2: ({node, ...props}) => <h2 className="text-2xl font-black text-black mt-16 mb-6 pb-2 border-b border-slate-200" {...props} />,
                        h3: ({node, ...props}) => <h3 className="text-xl font-bold text-black mt-8 mb-4" {...props} />,
                        h4: ({node, ...props}) => <h4 className="text-lg font-bold text-slate-800 mt-8 mb-3 flex items-center gap-2 before:content-[''] before:block before:w-1.5 before:h-5 before:bg-blue-400 before:rounded-full" {...props} />,
                        h5: ({node, ...props}) => <div className="bg-amber-50 border border-amber-200 p-5 rounded-xl my-6 text-amber-900 leading-relaxed shadow-sm font-medium" {...props} />,
                        p: ({node, ...props}) => <p className="text-black leading-relaxed mb-6" {...props} />,
                        b: ({node, ...props}) => <b className="font-bold text-black" {...props} />,
                        u: ({node, ...props}) => <u className="bg-[linear-gradient(transparent_60%,#fef08a_60%)] font-bold no-underline px-1" {...props} />,
                        i: ({node, ...props}) => <i className="italic text-black" {...props} />,
                        span: ({node, ...props}) => <span {...props} />,
                        table: ({node, ...props}) => <div className="overflow-x-auto my-8"><table className="w-full text-left border-collapse" {...props} /></div>,
                        thead: ({node, ...props}) => <thead className="bg-slate-100/50" {...props} />,
                        th: ({node, ...props}) => <th className="p-4 font-bold text-black border-b-2 border-slate-200 min-w-[80px]" {...props} />,
                        td: ({node, ...props}) => <td className="p-4 border-b border-slate-100 text-black min-w-[80px]" {...props} />,
                        tr: ({node, ...props}) => <tr className="hover:bg-slate-50/50 transition-colors" {...props} />
                      }}
                    >
                      {Array.isArray(selectedExp.description) ? selectedExp.description.join('\n') : selectedExp.description}
                    </Markdown>
                  </div>
                </div>
              </motion.div>
            </div>
          );
        })()}
      </AnimatePresence>

      <Marquee 
        backgroundColor="bg-indigo-600"
        textColor="text-white"
        borderColor="border-transparent"
        rotate={-1}
        speed={20}
        items={[
          { text: "GROWTH MINDSET", outlineColor: "#ffffff" },
          { text: "STAY CURIOUS ⚡" },
          { text: "DATA DRIVEN", outlineColor: "#ffffff" }, 
          { text: "STORY ARCHITECT 🚀" },
        ]}
      />
    </section>
  );
};

export default Experience;