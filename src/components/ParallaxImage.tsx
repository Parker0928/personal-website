import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

interface ParallaxImageProps {
  src: string;
  alt: string;
  className?: string;
  imageClassName?: string;
  scale?: number;
}

export function ParallaxImage({ src, alt, className = "", imageClassName = "", scale = 1.3 }: ParallaxImageProps) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);

  return (
    <div ref={ref} className={`overflow-hidden w-full h-full ${className}`}>
      <motion.img
        src={src}
        alt={alt}
        style={{ y, scale }}
        className={`w-full h-full object-cover ${imageClassName}`}
        referrerPolicy="no-referrer"
      />
    </div>
  );
}
