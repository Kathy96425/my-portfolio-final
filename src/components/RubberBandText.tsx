
import React, { useState } from 'react';
import { motion, useAnimationControls } from 'motion/react';

interface Props {
  text: string;
  className?: string;
  color?: string;
}

const RubberBandText: React.FC<Props> = ({ text, className = "", color = "#0f172a" }) => {
  return (
    <span className={`inline-block ${className}`} style={{ whiteSpace: 'nowrap' }}>
      {text.split("").map((letter, idx) => (
        <RubberBandLetter key={idx} letter={letter === " " ? "\u00A0" : letter} baseColor={color} />
      ))}
    </span>
  );
};

const RubberBandLetter: React.FC<{ letter: string; baseColor: string }> = ({ letter, baseColor }) => {
  const controls = useAnimationControls();
  const [isPlaying, setIsPlaying] = useState(false);

  const rubberBand = async () => {
    if (isPlaying) return;
    setIsPlaying(true);
    await controls.start({
      transform: [
        "scale3d(1, 1, 1)",
        "scale3d(1.4, .55, 1)",
        "scale3d(.75, 1.25, 1)",
        "scale3d(1.25, .85, 1)",
        "scale3d(.9, 1.05, 1)",
        "scale3d(1, 1, 1)",
      ],
      color: [baseColor, "#4f46e5", baseColor], 
      transition: { 
        duration: 0.6, 
        ease: "easeInOut",
      }
    });
    setIsPlaying(false);
  };

  return (
    <motion.span
      animate={controls}
      onMouseOver={rubberBand}
      style={{ color: baseColor }}
      className="inline-block cursor-default select-none transition-colors"
    >
      {letter}
    </motion.span>
  );
};

export default RubberBandText;
