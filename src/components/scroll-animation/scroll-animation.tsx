import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// ----------------------------------------------------------------------

interface ScrollAnimationProps {
  children: React.ReactNode;
  className?: string;
}

// ----------------------------------------------------------------------

const ScrollAnimation: React.FC<ScrollAnimationProps> = ({ children, className }) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <motion.div ref={ref} className={className} initial={{ opacity: 0, y: 100 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, ease: 'easeOut' }}>
      {children}
    </motion.div>
  );
};

export default ScrollAnimation;
