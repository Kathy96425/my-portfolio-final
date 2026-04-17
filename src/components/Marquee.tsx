
import React from 'react';

export interface MarqueeItem {
  text: string;
  outlineColor?: string; // hex or valid css color
}

interface MarqueeProps {
  items: MarqueeItem[];
  backgroundColor?: string; // tailwind class
  textColor?: string; // tailwind class
  borderColor?: string;
  speed?: number; // duration in seconds
  rotate?: number;
  className?: string;
}

const Marquee: React.FC<MarqueeProps> = ({
  items,
  backgroundColor = 'bg-slate-900',
  textColor = 'text-white',
  borderColor = 'border-slate-900',
  speed = 30,
  rotate = 0,
  className = '',
}) => {
  return (
    <div 
      className={`relative z-20 w-[120vw] -ml-[10vw] ${backgroundColor} border-y-4 ${borderColor} overflow-hidden py-4 md:py-6 ${className}`}
      style={{ 
        transform: `rotate(${rotate}deg)`,
      }}
    >
      <div 
        className="flex whitespace-nowrap animate-marquee"
        style={{ '--duration': `${speed}s` } as React.CSSProperties}
      >
        {/* 我们需要两组数据来实现无缝循环 */}
        {[...Array(2)].map((_, groupIdx) => (
          <div key={groupIdx} className="flex items-center shrink-0">
             {items.map((item, idx) => (
               <div key={`${groupIdx}-${idx}`} className="flex items-center">
                 <span 
                  className={`text-3xl md:text-5xl font-black px-8 md:px-12 tracking-tighter ${item.outlineColor ? 'text-transparent' : textColor}`}
                  style={item.outlineColor ? { WebkitTextStroke: `1.5px ${item.outlineColor}` } : {}}
                 >
                   {item.text}
                 </span>
                 <div className="w-4 h-4 rounded-full bg-indigo-500 mx-4 opacity-50" />
               </div>
             ))}
          </div>
        ))}
        {/* 额外重复一次以防万一在大屏幕上出现断层 */}
        {[...Array(2)].map((_, groupIdx) => (
          <div key={`extra-${groupIdx}`} className="flex items-center shrink-0">
             {items.map((item, idx) => (
               <div key={`extra-${groupIdx}-${idx}`} className="flex items-center">
                 <span 
                  className={`text-3xl md:text-5xl font-black px-8 md:px-12 tracking-tighter ${item.outlineColor ? 'text-transparent' : textColor}`}
                  style={item.outlineColor ? { WebkitTextStroke: `1.5px ${item.outlineColor}` } : {}}
                 >
                   {item.text}
                 </span>
                 <div className="w-4 h-4 rounded-full bg-indigo-500 mx-4 opacity-50" />
               </div>
             ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Marquee;