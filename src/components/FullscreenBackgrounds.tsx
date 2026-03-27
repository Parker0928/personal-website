import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';

interface FullscreenBackgroundsProps {
  images: string[];
  interval?: number;
}

export function FullscreenBackgrounds({ images, interval = 5000 }: FullscreenBackgroundsProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, interval);

    return () => clearInterval(timer);
  }, [images.length, interval]);

  return (
    <div className="absolute inset-0 z-[-1] overflow-hidden bg-black">
      <AnimatePresence>
        <motion.img
          key={currentIndex}
          src={images[currentIndex]}
          alt="Background"
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 0.75, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 2, ease: "easeInOut" }}
          className="absolute inset-0 w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
      </AnimatePresence>
      {/* Frosted glass overlay */}
      <div className="absolute inset-0 bg-bg/20 backdrop-blur-md backdrop-saturate-125" />
      {/* Overlay gradient for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-bg/15 via-bg/55 to-bg/80"></div>
    </div>
  );
}
