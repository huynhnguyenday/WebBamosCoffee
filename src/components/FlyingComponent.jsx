import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const FlyingComponent = ({ 
  children, 
  xOffset = 0, 
  yOffset = 0, 
  delay = 0, 
  stiffness = 50, 
  damping = 20 
}) => {
  const [ref, inView] = useInView({
    triggerOnce: false, 
    threshold: 0.1, 
  });

  // UseEffect để thay đổi CSS của body khi component được render
  useEffect(() => {
    // Ẩn thanh cuộn ngang khi component này được mount
    document.body.style.overflowX = 'hidden';

    // Clean up: Khi component unmount, khôi phục lại trạng thái ban đầu
    return () => {
      document.body.style.overflowX = '';
    };
  }, []); // Chạy 1 lần khi component mount

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: xOffset, y: yOffset }}
      animate={inView ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, x: xOffset, y: yOffset }}
      transition={{
        type: "spring",
        stiffness: stiffness,
        damping: damping,
        delay: delay,
        duration: 0.8,
      }}
    >
      {children}
    </motion.div>
  );
};

export default FlyingComponent;
