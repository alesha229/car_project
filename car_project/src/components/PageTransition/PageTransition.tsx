import { motion, AnimatePresence } from 'framer-motion';
import { FC, ReactNode } from 'react';
import { useLocation } from 'react-router-dom';

interface PageTransitionProps {
  children: ReactNode;
}

const PageTransition: FC<PageTransitionProps> = ({ children }) => {
  const location = useLocation();

  return (
    <AnimatePresence>
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0 }}
        animate={{ 
          opacity: 1,
          transition: {
            duration: 0.15,
            ease: "linear"
          }
        }}
        exit={{ 
          opacity: 0,
          transition: {
            duration: 0.15,
            ease: "linear"
          }
        }}
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%'
        }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default PageTransition;
