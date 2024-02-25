import React, { useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';

const ProjectCard = ({ children }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleBeforeUnload = () => setIsVisible(false);
    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => window.removeEventListener('beforeunload', handleBeforeUnload);
  }, []);

  return (
    <Fade bottom distance="10%" duration={1500}>
    <div style={{ opacity: isVisible ? 1 : 0, transform: isVisible ? 'translateY(0)' : 'translateY(100px)' }} className="tile-child">
      {children}
    </div>
    </Fade>
  );
};

export default ProjectCard;