import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowDown, Sparkles, Zap, Star, Globe, Heart, Coffee, Target } from 'lucide-react';
import { PERSONAL_INFO } from '../constants';
import Marquee from './Marquee';
import RubberBandText from './RubberBandText';

// 漂浮贴纸组件
const FloatingSticker = ({ children, className, delay = 0, rotateRange = [0, 5, -5, 0] }: { children?: React.ReactNode, className?: string, delay?: number, rotateRange?: number[] }) => (
  <motion.div
    initial={{ scale: 0, rotate: -20, opacity: 0 }}
    animate={{ 
      scale: 1, 
      opacity: 1,
      rotate: rotateRange,
      y: [0, -15, 0]
    }}
    transition={{ 
      scale: { delay, duration: 0.6, type: 'spring', bounce: 0.5 },
      opacity: { delay, duration: 0.4 },
      rotate: { repeat: Infinity, duration: 4 + Math.random() * 2, ease: "easeInOut" },
      y: { repeat: Infinity, duration: 3 + Math.random() * 2, ease: "easeInOut" }
    }}
    whileHover={{ scale: 1.1, rotate: rotateRange[1] * 2, zIndex: 50 }}
    className={`absolute z-20 flex items-center justify-center p-2 md:p-3 rounded-xl md:rounded-2xl border-2 border-slate-900 shadow-hard-sm cursor-pointer select-none ${className}`}
  >
    {children}
  </motion.div>
);

// 背景动效
const BackgroundVisuals = () => {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      <motion.div 
        animate={{ 
          backgroundPosition: ['0px 0px', '40px 40px'] 
        }}
        transition={{ 
          duration: 4, 
          repeat: Infinity, 
          ease: "linear" 
        }}
        className="absolute inset-0 opacity-[0.05]" 
        style={{ 
          backgroundImage: 'radial-gradient(#0f172a 2px, transparent 0)', 
          backgroundSize: '40px 40px' 
        }} 
      />
      <motion.div 
        animate={{ scale: [1, 1.2, 1], x: [0, 30, 0], y: [0, 50, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[10%] left-[10%] w-[600px] h-[600px] bg-indigo-200/40 blur-[120px] rounded-full" 
      />
      <motion.div 
        animate={{ scale: [1, 1.3, 1], x: [0, -40, 0], y: [0, -60, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-[5%] right-[5%] w-[500px] h-[500px] bg-rose-200/40 blur-[100px] rounded-full" 
      />
    </div>
  );
};

const Hero: React.FC = () => {
  const [greetingIndex, setGreetingIndex] = useState(0);
  const greetings = ["你好", "Hello", "Bonjour", "こんにちは", "Hola", "Ciao"];
  const [clickCount, setClickCount] = useState(0);

  // Style constants updated based on user request
  const nameStyle = { size: 95, color: '#0f172a', spacing: -4 };
  const line1Style = { size: 21, color: '#0f172a', lineHeight: 1.2, spacing: 0 };
  const line2Style = { size: 23, color: '#6366f1', lineHeight: 1.6, spacing: 0 };

  useEffect(() => {
    const timer = setInterval(() => {
      setGreetingIndex((prev) => (prev + 1) % greetings.length);
    }, 2500);
    return () => clearInterval(timer);
  }, []);

  const handleCelebration = useCallback(() => {
    setClickCount(prev => prev + 1);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden bg-transparent">
      <BackgroundVisuals />

      <FloatingSticker className="top-[15%] left-[5%] md:top-[22%] md:left-[8%] bg-yellow-400 -rotate-12" delay={1}>
        <Zap size={16} className="text-slate-900 fill-current md:w-5 md:h-5" />
        <span className="ml-1 md:ml-2 font-black text-[8px] md:text-[10px] tracking-tighter uppercase">Fast Learner</span>
      </FloatingSticker>

      <FloatingSticker className="top-[12%] right-[5%] md:top-[18%] md:right-[12%] bg-indigo-600 text-white rotate-12" delay={1.2}>
        <Coffee size={16} className="md:w-5 md:h-5" />
        <span className="ml-1 md:ml-2 font-black text-[8px] md:text-[10px] tracking-tighter uppercase">Idea Builder</span>
      </FloatingSticker>

      <FloatingSticker className="bottom-[20%] left-[5%] md:bottom-[30%] md:left-[10%] bg-emerald-400 text-slate-900 rotate-6" delay={1.4}>
        <Target size={16} className="md:w-5 md:h-5" />
        <span className="ml-1 md:ml-2 font-black text-[8px] md:text-[10px] tracking-tighter uppercase">Result Driven</span>
      </FloatingSticker>

      <FloatingSticker className="bottom-[25%] right-[5%] md:bottom-[35%] md:right-[10%] bg-rose-500 text-white -rotate-6" delay={1.6}>
        <Heart size={16} fill="currentColor" className="md:w-5 md:h-5" />
        <span className="ml-1 md:ml-2 font-black text-[8px] md:text-[10px] tracking-tighter uppercase">Storyteller</span>
      </FloatingSticker>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full z-10 relative py-20">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-col items-start md:items-center md:text-center">
          
          <div className="flex items-center gap-4 mb-12">
            <div className="flex items-center gap-2 bg-slate-900 text-white px-5 py-2 rounded-full text-[10px] font-black tracking-[0.2em] uppercase shadow-hard-sm border-2 border-slate-900">
              <Sparkles size={14} className="text-yellow-400 animate-pulse" />
              Strategic Content / 2024
            </div>
            <div className="h-[2px] w-12 bg-slate-300 hidden sm:block" />
            <div className="flex items-center gap-2 text-slate-500 text-[10px] font-bold tracking-widest uppercase">
              <Globe size={12} className="animate-spin-slow" />
              {PERSONAL_INFO.location}
            </div>
          </div>

          <div className="mb-10 group w-full">
            <div className="flex items-center justify-start md:justify-center gap-4 mb-6 relative">
              <AnimatePresence mode="wait">
                <motion.span
                  key={greetings[greetingIndex]}
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -30, opacity: 0 }}
                  className="font-black font-display text-4xl sm:text-5xl"
                  style={{ color: '#4f46e5' }}
                >
                  {greetings[greetingIndex]}!
                </motion.span>
              </AnimatePresence>
              <motion.div animate={{ rotate: [0, 20, 0, 20, 0] }} transition={{ repeat: Infinity, duration: 2 }} className="text-4xl">👋</motion.div>
            </div>
            
            <div className="relative group/name cursor-pointer inline-block" onClick={handleCelebration}>
              <h1 className="font-black tracking-tighter leading-none font-display uppercase flex flex-wrap justify-center items-center">
                <span className="text-2xl sm:text-3xl font-bold text-slate-400 mr-6">我是</span>
                <span className="relative">
                  <span style={{ fontSize: `${nameStyle.size}px`, letterSpacing: `${nameStyle.spacing}px` }}>
                    <RubberBandText text={PERSONAL_INFO.name} color={nameStyle.color} />
                  </span>
                </span>
              </h1>
            </div>

            <div className="flex flex-wrap justify-start md:justify-center gap-3 mt-10">
              {["内容导演", "创意策划", "营销推广"].map((role, i) => (
                <span key={i} className="px-5 py-2 bg-white border-2 border-slate-900 rounded-full text-[11px] font-black text-slate-900 uppercase tracking-widest shadow-hard-sm">
                  {role}
                </span>
              ))}
            </div>
          </div>
          
          <div className="max-w-5xl space-y-8 mb-16 md:mx-auto w-full">
            <p className="font-black" style={{ fontSize: `${line1Style.size}px`, color: line1Style.color, lineHeight: line1Style.lineHeight, letterSpacing: `${line1Style.spacing}px` }}>
              一名具备新闻专业深度与跨界复合技能的策略型内容人
            </p>
            <p className="font-bold" style={{ fontSize: `${line2Style.size}px`, color: line2Style.color, lineHeight: line2Style.lineHeight, letterSpacing: `${line2Style.spacing}px` }}>
              擅长通过数据洞察与创意整合，把飘忽的灵感，稳稳焊进可验证的增长里
            </p>
          </div>

          <motion.a 
            href="#about" 
            whileHover={{ scale: 1.05, y: -5 }}
            className="bg-indigo-600 text-white px-16 py-6 rounded-3xl font-black text-xl shadow-hard border-2 border-slate-900 flex items-center gap-4 group relative overflow-hidden"
          >
            开始探索吧
            <ArrowDown size={28} className="group-hover:text-yellow-300 transition-colors" />
          </motion.a>
        </motion.div>
      </div>

      <div className="mt-auto pb-0 w-full relative z-20">
        <Marquee 
          backgroundColor="bg-slate-950" 
          textColor="text-white"
          borderColor="border-slate-900"
          rotate={-1.5}
          speed={30}
          items={[
            { text: "STRATEGIC CONTENT", outlineColor: "#4f46e5" },
            { text: "STORY ARCHITECT" },
            { text: "DATA INSIGHTS", outlineColor: "#ec4899" },
            { text: "CREATIVE POWER" },
            { text: "USER ORIENTED", outlineColor: "#fbbf24" },
            { text: "AI POWERED" },
          ]}
        />
      </div>
    </section>
  );
};

export default Hero;
