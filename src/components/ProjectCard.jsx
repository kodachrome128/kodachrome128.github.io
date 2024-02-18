import React, { useState, useEffect } from 'react';

const ProjectCard = ({ children }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleBeforeUnload = () => setIsVisible(false);
    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => window.removeEventListener('beforeunload', handleBeforeUnload);
  }, []);

  return (
    <div style={{ opacity: isVisible ? 1 : 0, transform: isVisible ? 'translateY(0)' : 'translateY(100px)' }}>
      {children}
    </div>
  );
};

export default ProjectCard;