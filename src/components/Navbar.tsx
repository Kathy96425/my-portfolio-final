import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isWeakened, setIsWeakened] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setScrolled(scrollY > 50);
      
      // Detect if we've reached the About section
      const aboutSection = document.getElementById('about');
      if (aboutSection) {
        const aboutTop = aboutSection.offsetTop;
        setIsWeakened(scrollY > aboutTop - 100);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: '关于我', href: '#about' },
    { name: '核心经历', href: '#experience' },
    { name: '作品集', href: '#portfolio' },
  ];

  return (
    <nav className="fixed top-6 left-0 right-0 z-50 flex justify-center pointer-events-none">
      <div className={`pointer-events-auto transition-all duration-500 mx-4 ${
        scrolled ? 'w-auto' : 'w-full max-w-7xl'
      } ${isWeakened ? 'opacity-100' : 'opacity-100'}`}>
        <motion.div 
          layout
          className={`bg-white border-2 border-slate-900 rounded-2xl flex justify-between items-center transition-all duration-500 ${
            scrolled ? 'mx-auto' : ''
          } ${isWeakened ? 'py-1.5 px-4 shadow-sm border-slate-900/30 max-w-2xl' : 'px-6 py-4 shadow-hard border-slate-900'}`}
        >
          <motion.a 
            href="#" 
            className="text-2xl font-black tracking-tighter text-slate-900 flex items-center gap-1 hover:text-blue-600 transition-colors"
          >
            <div className={`transition-all duration-500 bg-blue-600 rounded-lg flex items-center justify-center text-white border-2 border-slate-900 ${
              isWeakened ? 'w-6 h-6 text-[10px]' : 'w-8 h-8'
            }`}>
              LH
            </div>
            <span className={`hidden sm:block transition-all duration-500 ${isWeakened ? 'text-sm opacity-0 w-0 overflow-hidden' : 'text-2xl'}`}>LAI HUIYI</span>
          </motion.a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-2">
            {navLinks.map((link, i) => (
              <motion.a
                key={link.name}
                href={link.href}
                whileHover={{ y: -2, backgroundColor: '#f1f5f9' }}
                whileTap={{ y: 0 }}
                className={`font-bold text-slate-600 rounded-xl transition-all duration-500 border border-transparent hover:border-slate-100 ${
                  isWeakened ? 'text-[11px] px-2 py-1' : 'text-sm px-4 py-2'
                }`}
              >
                {link.name}
              </motion.a>
            ))}
            <motion.a 
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`ml-2 font-bold rounded-xl border-2 border-slate-900 transition-all duration-500 ${
                isWeakened 
                  ? 'px-3 py-1 text-[11px] bg-rose-500 text-white shadow-none border-slate-900/20' 
                  : 'px-5 py-2 bg-rose-500 text-white shadow-[2px_2px_0px_0px_#0f172a] hover:shadow-[4px_4px_0px_0px_#0f172a]'
              }`}
            >
              联系合作
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-900 p-2">
              {isOpen ? <X size={28} strokeWidth={2.5} /> : <Menu size={28} strokeWidth={2.5} />}
            </button>
          </div>
        </motion.div>
      </div>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            className="absolute top-24 left-4 right-4 bg-white border-2 border-slate-900 shadow-hard rounded-2xl overflow-hidden pointer-events-auto md:hidden"
          >
            <div className="p-4 flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-3 rounded-xl text-lg font-bold text-slate-600 hover:bg-slate-50 hover:text-blue-600 transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <a 
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="block px-4 py-3 mt-2 bg-blue-600 text-white text-center font-bold rounded-xl border-2 border-slate-900"
              >
                LET'S TALK
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
