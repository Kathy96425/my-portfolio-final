
import React, { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue, AnimatePresence } from 'motion/react';

const CustomCursor: React.FC = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 35, stiffness: 800, mass: 0.5 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  // Echo/Trail effect
  const echoXSpring = useSpring(cursorX, { damping: 45, stiffness: 400, mass: 1 });
  const echoYSpring = useSpring(cursorY, { damping: 45, stiffness: 400, mass: 1 });

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    const handleLinkHoverStart = () => setIsHovering(true);
    const handleLinkHoverEnd = () => setIsHovering(false);

    const updateLinkListeners = () => {
      document.querySelectorAll('a, button, input, textarea, [role="button"]').forEach(el => {
        el.addEventListener('mouseenter', handleLinkHoverStart);
        el.addEventListener('mouseleave', handleLinkHoverEnd);
      });
    };

    updateLinkListeners();
    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    const observer = new MutationObserver(updateLinkListeners);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      observer.disconnect();
    };
  }, [cursorX, cursorY]);

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999] hidden md:block overflow-hidden">
      
      {/* Outer Glow / Echo */}
      <motion.div
        className="absolute w-12 h-12 bg-rose-500/20 rounded-full blur-xl"
        style={{
          x: echoXSpring,
          y: echoYSpring,
          translateX: '-50%',
          translateY: '-50%',
        }}
      />

      {/* Main Cursor: Stylized Large Red Arrow */}
      <motion.div
        className="absolute"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          rotate: isHovering ? -75 : -90,
          originX: "80%",
          originY: "50%",
          translateX: "-80%",
          translateY: "-50%",
        }}
        animate={{
          scale: isClicking ? 0.8 : (isHovering ? 1.4 : 1.2),
        }}
        transition={{ type: "spring", stiffness: 400, damping: 30 }}
      >
        <div className="relative">
          {/* Shadow/Outline Layer */}
          <svg 
            width="48" 
            height="48" 
            viewBox="0 0 24 24" 
            className="absolute top-[3px] left-[3px] text-slate-900 fill-current opacity-40"
          >
            <path d="M5.5 3.17L19.24 10.15C20.48 10.78 20.48 12.56 19.24 13.19L5.5 20.17C4.18 20.84 2.66 19.78 3.01 18.34L4.85 11.66L3.01 4.99C2.66 3.56 4.18 2.5 5.5 3.17Z" />
          </svg>

          {/* Main Body */}
          <motion.svg 
            width="48" 
            height="48" 
            viewBox="0 0 24 24" 
            className="relative text-rose-500 fill-current"
            animate={{
              filter: isHovering 
                ? "drop-shadow(0 0 8px rgba(244, 63, 94, 0.6))" 
                : "drop-shadow(0 0 0px rgba(244, 63, 94, 0))"
            }}
          >
            <path 
              d="M5.5 3.17L19.24 10.15C20.48 10.78 20.48 12.56 19.24 13.19L5.5 20.17C4.18 20.84 2.66 19.78 3.01 18.34L4.85 11.66L3.01 4.99C2.66 3.56 4.18 2.5 5.5 3.17Z" 
              stroke="white" 
              strokeWidth="1.5"
              strokeLinejoin="round"
            />
          </motion.svg>
        </div>
      </motion.div>
      
      <style dangerouslySetInnerHTML={{ __html: `
        a, button, input, textarea, [role="button"] {
          cursor: none !important;
        }
        body {
          cursor: none !important;
        }
      `}} />
    </div>
  );
};

export default CustomCursor;
