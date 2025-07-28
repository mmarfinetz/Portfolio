import React, { useEffect, useState } from 'react';

// Lazy load framer-motion components to avoid SSR issues
const loadMotionComponents = async () => {
  if (typeof window === 'undefined') return null;
  
  try {
    const framerMotion = await import('framer-motion');
    return {
      motion: framerMotion.motion,
      AnimatePresence: framerMotion.AnimatePresence,
    };
  } catch (error) {
    console.warn('Failed to load framer-motion:', error);
    return null;
  }
};

// Check if user prefers reduced motion
const prefersReducedMotion = () => {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

interface MotionProps {
  children: React.ReactNode;
  className?: string;
  initial?: any;
  animate?: any;
  exit?: any;
  transition?: any;
  whileHover?: any;
  whileInView?: any;
  viewport?: any;
  layout?: boolean;
  layoutId?: string;
  onClick?: () => void;
  style?: React.CSSProperties;
}

// Motion div component with fallback
export const MotionDiv: React.FC<MotionProps> = ({
  children,
  className = '',
  initial,
  animate,
  exit,
  transition,
  whileHover,
  whileInView,
  viewport,
  layout,
  layoutId,
  onClick,
  style,
  ...props
}) => {
  const [Motion, setMotion] = useState<any>(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    if (!prefersReducedMotion()) {
      loadMotionComponents().then((components) => {
        if (components) {
          setMotion(components.motion);
        }
      });
    }
  }, []);

  // If motion is not loaded or user prefers reduced motion, use regular div
  if (!isClient || !Motion || prefersReducedMotion()) {
    return (
      <div 
        className={className} 
        onClick={onClick} 
        style={style}
        {...props}
      >
        {children}
      </div>
    );
  }

  return (
    <Motion.div
      className={className}
      initial={initial}
      animate={animate}
      exit={exit}
      transition={transition}
      whileHover={whileHover}
      whileInView={whileInView}
      viewport={viewport}
      layout={layout}
      layoutId={layoutId}
      onClick={onClick}
      style={style}
      {...props}
    >
      {children}
    </Motion.div>
  );
};

// Motion section component
export const MotionSection: React.FC<MotionProps> = ({ children, ...props }) => {
  const [Motion, setMotion] = useState<any>(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    if (!prefersReducedMotion()) {
      loadMotionComponents().then((components) => {
        if (components) {
          setMotion(components.motion);
        }
      });
    }
  }, []);

  if (!isClient || !Motion || prefersReducedMotion()) {
    return <section {...props}>{children}</section>;
  }

  return <Motion.section {...props}>{children}</Motion.section>;
};

// AnimatePresence component with fallback
interface AnimatePresenceProps {
  children: React.ReactNode;
  mode?: 'wait' | 'sync' | 'popLayout';
  initial?: boolean;
}

export const MotionAnimatePresence: React.FC<AnimatePresenceProps> = ({
  children,
  mode = 'wait',
  initial = true,
}) => {
  const [AnimatePresence, setAnimatePresence] = useState<any>(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    if (!prefersReducedMotion()) {
      loadMotionComponents().then((components) => {
        if (components) {
          setAnimatePresence(() => components.AnimatePresence);
        }
      });
    }
  }, []);

  // If AnimatePresence is not loaded or user prefers reduced motion, render children directly
  if (!isClient || !AnimatePresence || prefersReducedMotion()) {
    return <>{children}</>;
  }

  return (
    <AnimatePresence mode={mode} initial={initial}>
      {children}
    </AnimatePresence>
  );
};

// Common animation variants
export const animationVariants = {
  fadeIn: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
    transition: { duration: 0.6 }
  },
  
  cardHover: {
    whileHover: { 
      scale: 1.02, 
      boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' 
    },
    transition: { duration: 0.2 }
  },
  
  expandCollapse: {
    initial: { height: 0, opacity: 0 },
    animate: { height: 'auto', opacity: 1 },
    exit: { height: 0, opacity: 0 },
    transition: { duration: 0.3 }
  },
  
  staggerChildren: {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  }
};