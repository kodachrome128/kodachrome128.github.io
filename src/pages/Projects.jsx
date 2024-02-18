import React from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import Navbar from '../components/Navbar';
import ProjectCard from '../components/ProjectCard';
import SocialLinks from '../components/SocialLinks';

const Projects = () => {
  const smallScreen = useMediaQuery('(max-width: 650px)');
  const largeScreen = useMediaQuery('(min-width: 651px)');

  return (
    <>
      <header style={{ margin: '0', width: '100%', top: '0', left: '0', position: 'absolute' }}>
        <Navbar />
      </header>
      {smallScreen && (
        <>
          <footer>
            <SocialLinks />
          </footer>
        </>
      )}
      {largeScreen && (
        <>
          <div className="project-tiles-desktop">
            <ProjectCard>
                <div className="blur-container"></div>
                <div className="project-tile">
                  <div className="project-card-title simulated-ecology">
                    <h2 className="project-img-desktop-text padding highlight">Simulated Ecology</h2>
                  </div>
                  <div className="project-card-info padding">
                    <p>CATEGORY: 3D Design, Interactive Environment</p>            
                    <p>Simulated Ecology was my major project for my 3D visualisation course. It is an original 3D realtime interactive environment
                      which depicts the futuristic possibility of only being able to recreate nature in a digital environment. This project was
                      made in Unity over the course of 6 weeks. 
                    </p>
                  </div>
              </div>
              </ProjectCard>
              <ProjectCard>
                <div className="blur-container"></div>
                <div className="project-tile">
                  <div className="project-card-title lurkforwork">
                    <h2 className="project-img-desktop-text padding highlight">LurkForWork</h2>
                  </div>
                  <div className="project-card-info padding">
                    <p>CATEGORY: 3D Design, Interactive Environment</p>            
                    <p>Simulated Ecology was my major project for my 3D visualisation course. It is an original 3D realtime interactive environment
                      which depicts the futuristic possibility of only being able to recreate nature in a digital environment. This project was
                      made in Unity over the course of 6 weeks. 
                    </p>
                  </div>
              </div>
              </ProjectCard>
          </div>
          <footer>
            <SocialLinks />
          </footer>
        </>
      )}
    </>
  );
};

export default Projects;
