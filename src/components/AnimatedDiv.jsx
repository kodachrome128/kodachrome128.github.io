import React, { useState, useEffect } from 'react';
import { useSpring, animated } from '@react-spring/web';

const AnimatedDiv = ({ children }) => {
  const [isVisible, setIsVisible] = useState(true);

  const props = useSpring({
    from: { opacity: 0, translateY: 100 },
    to: isVisible ? { opacity: 1, translateY: 0 } : { opacity: 0, translateY: 100 },
    config: { duration: 1000, easing: t => t * (2 - t) }, // Custom ease-out function
    onRest: () => !isVisible && setIsVisible(true),
  });

  useEffect(() => {
    const handleBeforeUnload = () => setIsVisible(false);
    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => window.removeEventListener('beforeunload', handleBeforeUnload);
  }, []);

  return (
    <animated.div
      style={{
        opacity: props.opacity,
        transform: props.translateY.interpolate((value) => `translateY(${value}px)`),
      }} className="padding"
    >
      {children}
    </animated.div>
  );
};

export default AnimatedDiv;