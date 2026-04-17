
import React from 'react';
import { motion, useScroll, useSpring } from 'motion/react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Portfolio from './components/Portfolio';
import VisualWorks from './components/VisualWorks';
import Contact from './components/Contact';
import AIChat from './components/AIChat';
import ThankYou from './components/ThankYou';
import Marquee from './components/Marquee';

const App: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="min-h-screen text-slate-900 font-sans selection:bg-indigo-600 selection:text-white">
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-blue-600 via-indigo-500 to-rose-500 origin-left z-[100]"
        style={{ scaleX }}
      />

      <Navbar />
      <main>
        <Hero />
        
        {/* Subtle Transition Marquee */}
        <Marquee 
          backgroundColor="bg-white/40" 
          textColor="text-slate-400" 
          borderColor="border-slate-100" 
          speed={40} 
          rotate={0}
          items={[
            { text: "STORYTELLER ✦ CONTENT ARCHITECT ✦ DATA DRIVEN ✦" },
            { text: "EXPLORING NEW FRONTIERS ✦ ALWAYS CURIOUS ✦" }
          ]}
        />

        <About />
        
        <Marquee 
          backgroundColor="bg-rose-500" 
          textColor="text-white" 
          borderColor="border-transparent" 
          speed={30} 
          rotate={2}
          items={[
            { text: "CREATING IMPACT ✦" },
            { text: "DATA INSIGHTS ✦", outlineColor: "#ffffff" },
            { text: "VISUAL STORY ✦" },
            { text: "USER CENTRIC ✦", outlineColor: "#ffffff" }
          ]}
        />

        <Experience />
        <Portfolio />
        <VisualWorks />
        <ThankYou />
        <Contact />
      </main>
      <AIChat />
    </div>
  );
};

export default App;