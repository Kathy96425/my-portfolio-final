import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ImageOff, Loader2 } from 'lucide-react';

interface ImageWithFallbackProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallbackSrc?: string;
  containerClassName?: string;
  showLoader?: boolean;
}

const ImageWithFallback: React.FC<ImageWithFallbackProps> = ({
  src,
  alt,
  fallbackSrc,
  className,
  containerClassName = "",
  showLoader = true,
  ...props
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  const handleLoad = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    setIsLoading(false);
    if (props.onLoad) props.onLoad(e);
  };

  const handleError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    setIsLoading(false);
    setError(true);
    if (props.onError) props.onError(e);
  };

  // Use a generated fallback if none provided
  const finalFallback = fallbackSrc || `https://picsum.photos/seed/${alt || 'fallback'}/800/600`;

  return (
    <div className={`relative overflow-hidden flex items-center justify-center ${containerClassName}`}>
      <AnimatePresence>
        {isLoading && showLoader && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 z-10 flex flex-col items-center justify-start pt-16 bg-white/5 backdrop-blur-sm gap-4"
          >
            <Loader2 className="w-8 h-8 text-yellow-500/40 animate-spin" />
            <div className="flex flex-col items-center gap-2">
              <span className="text-[10px] text-white/40 font-mono tracking-[0.3em] uppercase">Loading Visuals</span>
              <span className="text-[11px] text-white/20 font-serif italic">精彩内容正在加载，请耐心等待...</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {error && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-white/5 gap-3 p-4 text-center"
          >
            <ImageOff className="w-6 h-6 text-white/10" />
            <span className="text-[10px] text-white/30 font-serif italic">资源加载失败，已切换至备用视图</span>
          </motion.div>
        )}
      </AnimatePresence>

      <img
        src={error ? finalFallback : src}
        alt={alt}
        className={`${className} transition-all duration-700 ${isLoading ? 'opacity-0 scale-95 blur-sm' : 'opacity-100 scale-100 blur-0'}`}
        onLoad={handleLoad}
        onError={handleError}
        {...props}
      />
    </div>
  );
};

export default ImageWithFallback;
