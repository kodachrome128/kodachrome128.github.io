import React from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import Navbar from '../components/Navbar';
import ProjectCard from '../components/ProjectCard';
import SocialLinks from '../components/SocialLinks';
import MicrosoftIcon from '@mui/icons-material/Microsoft';
import AppleIcon from '@mui/icons-material/Apple';

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
                    <a href="https://unsw-my.sharepoint.com/:u:/g/personal/z5361154_ad_unsw_edu_au/EY3by-TZPt5CmBqE0EtEO9sBMhg_EcOPNr44PZyxCxGu4g?e=9Cqhgb&download=1" class="download-button">
                        <MicrosoftIcon fontSize="large" style={{ color: 'white' }} alt="windows_icon" />
                        <p>Download for Windows</p>
                    </a>
                    <a href="https://unsw-my.sharepoint.com/:f:/g/personal/z5361154_ad_unsw_edu_au/EklaPrNu0jFMhGhgBiBoLSUBa6mgA9b5EZhwYeFUu7Hj3g?e=TmYXqD&download=1" class="download-button">
                      <AppleIcon fontSize="large" style={{ color: 'white' }} alt="apple_icon" />
                      <p>Download for M1 Mac</p>
                    </a>
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
                    <p>CATEGORY: Front-end Design, Javascript</p>            
                    <p>LurkForWork was one of the assignments for COMP6080, the front-end design course at UNSW. It is designed to be a replica of the LinkedIn website,
                      fully written in Javascript with DOM manipulation. 
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
