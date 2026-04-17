
import React from 'react';
import { motion } from 'motion/react';

const ThankYou: React.FC = () => {
  // Generate random particles
  const particles = Array.from({ length: 25 }).map((_, i) => ({
    id: i,
    x: Math.random() * 100, 
    y: Math.random() * 100, 
    size: Math.random() * 20 + 8,
    color: ['bg-yellow-400', 'bg-indigo-600', 'bg-rose-500', 'bg-slate-900'][Math.floor(Math.random() * 4)],
    shape: ['rounded-none', 'rounded-lg', 'rounded-none'][Math.floor(Math.random() * 3)],
    duration: Math.random() * 3 + 4,
    delay: Math.random() * 2,
  }));

  return (
    <section className="relative py-24 bg-[#fdfcfb] border-y-4 border-slate-900 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        {particles.map((p) => (
          <motion.div
            key={p.id}
            className={`absolute ${p.color} ${p.shape} opacity-40 border border-slate-900 shadow-hard-sm`}
            style={{
              left: `${p.x}%`,
              top: `${p.y}%`,
              width: p.size,
              height: p.size,
            }}
            animate={{
              y: [0, -200, 0],
              opacity: [0, 0.8, 0],
              scale: [0.5, 1.2, 0.5],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: p.duration,
              repeat: Infinity,
              delay: p.delay,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, type: "spring" }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-8 tracking-tighter leading-tight uppercase font-display">
            感谢浏览，<br className="sm:hidden" />祝你有个愉快的一天！
          </h2>
          
          <motion.div 
            className="inline-block"
            whileHover={{ scale: 1.2, rotate: 10 }}
            whileTap={{ scale: 0.9 }}
            drag
            dragConstraints={{ left: -20, right: 20, top: -20, bottom: 20 }}
          >
            <span className="text-7xl md:text-8xl filter drop-shadow-[6px_6px_0px_#0f172a] cursor-grab active:cursor-grabbing select-none block">
              🚀
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ThankYou;
