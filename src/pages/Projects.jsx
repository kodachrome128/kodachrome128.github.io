import {React} from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import Navbar from '../components/Navbar';
import ProjectCard from '../components/ProjectCard';
import SocialLinks from '../components/SocialLinks';
import MicrosoftIcon from '@mui/icons-material/Microsoft';
import AppleIcon from '@mui/icons-material/Apple';
import PopupImage from '../components/PopupImage';
import Button from '../components/Button';

import Videophone1 from '../images/Videophone_1.jpg';
import Videophone2 from '../images/Videophone_2.jpg';
import Videophone3 from '../images/Videophone_3.jpg';
import Videophone4 from '../images/Videophone_4.jpg';

import ruralNSW1 from '../images/photo_projects/rural_nsw/img_1.jpg'
import ruralNSW2 from '../images/photo_projects/rural_nsw/img_2.jpg'
import ruralNSW3 from '../images/photo_projects/rural_nsw/img_3.jpg'
import ruralNSW4 from '../images/photo_projects/rural_nsw/img_4.jpg'
import ruralNSW5 from '../images/photo_projects/rural_nsw/img_5.jpg'
import ruralNSW6 from '../images/photo_projects/rural_nsw/img_6.jpg'
import ruralNSW7 from '../images/photo_projects/rural_nsw/img_7.jpg'

const Projects = () => {
  const smallScreen = useMediaQuery('(max-width: 650px)');
  const largeScreen = useMediaQuery('(min-width: 651px)');

  const videophoneImages = [Videophone1, Videophone2, Videophone3, Videophone4];
  const ruralNSWImages = [ruralNSW1, ruralNSW2, ruralNSW3, ruralNSW4, ruralNSW5, ruralNSW6, ruralNSW7];

  const downloadWindows = () => {
    window.location.href = 'https://unsw-my.sharepoint.com/:u:/g/personal/z5361154_ad_unsw_edu_au/EY3by-TZPt5CmBqE0EtEO9sBMhg_EcOPNr44PZyxCxGu4g?e=9Cqhgb&download=1';
  }

  return (
    <>
      <header style={{ margin: '0', width: '100%', top: '0', left: '0', position: 'absolute' }}>
        <Navbar />
      </header>
      {smallScreen && (
        <>
        <div className="project-tiles-mobile">
            <ProjectCard>
                <div className="blur-container"></div>
                <div className="project-tile">
                  <div className="project-card-title simulated-ecology">
                    <h2 className="project-img-mobile-text padding-mobile highlight">Simulated Ecology</h2>
                  </div>
                  <div className="project-card-info padding-mobile">
                    <p>CATEGORY: 3D Design, Interactive Environment</p>            
                    <p>Simulated Ecology was my major project for my 3D visualisation course. It is an original 3D realtime interactive environment
                      which depicts the futuristic possibility of only being able to recreate nature in a digital environment. 
                    </p>
                    <p>This project was
                      made in Unity over the course of 6 weeks. 
                    </p>
                    <div className="project-links">
                      <a href="https://unsw-my.sharepoint.com/:u:/g/personal/z5361154_ad_unsw_edu_au/EY3by-TZPt5CmBqE0EtEO9sBMhg_EcOPNr44PZyxCxGu4g?e=9Cqhgb&download=1" class="download-button">
                          <MicrosoftIcon fontSize="medium" style={{ color: 'white' }} alt="windows_icon" />
                          <p className="download-text">Windows Download</p>
                      </a>
                      <a href="https://unsw-my.sharepoint.com/:f:/g/personal/z5361154_ad_unsw_edu_au/EklaPrNu0jFMhGhgBiBoLSUBa6mgA9b5EZhwYeFUu7Hj3g?e=TmYXqD&download=1" class="download-button">
                        <AppleIcon fontSize="medium" style={{ color: 'white' }} alt="apple_icon" />
                        <p className="download-text">Mac M1 Download</p>
                      </a>                      
                    </div>

                  </div>
              </div>
              </ProjectCard>
              <ProjectCard>
                <div className="blur-container"></div>
                <div className="project-tile">
                  <div className="project-card-title lurkforwork">
                    <h2 className="project-img-mobile-text padding-mobile highlight">LurkForWork</h2>
                  </div>
                  <div className="project-card-info padding-mobile">
                    <p>CATEGORY: Front-end Design, Javascript</p>            
                    <p>LurkForWork was one of the assignments for COMP6080, the front-end design course at UNSW. It is designed to be a replica of the LinkedIn website,
                      fully written in Javascript with DOM manipulation. 
                    </p>
                  </div>
              </div>
              </ProjectCard>
              <ProjectCard>
                <div className="blur-container"></div>
                <div className="project-tile">
                  <div className="project-card-title videophone">
                    <h2 className="project-img-mobile-text padding-mobile highlight">Brutalist Videophone</h2>
                  </div>
                  <div className="project-card-info padding-mobile">
                    <p>CATEGORY: 3D Modelling</p>            
                    <p>This was my first ever 3D modelling project. This is the envisionment of what a possible late 20th century videophone could have looked like
                      if it was designed based on the brutalism architectural movement present in that era.
                    </p>
                    <p>This was designed over the course of 8 weeks in Maya and rendered in Arnold.</p>
                    <PopupImage images={videophoneImages} active={1} setActive={1}>
                      
                    </PopupImage>
                  </div>
              </div>
              </ProjectCard>

              <ProjectCard>
                <div className="blur-container"></div>
                <div className="project-tile">
                  <div className="project-card-title rural-nsw">
                    <h2 className="project-img-mobile-text padding highlight">Rural NSW</h2>
                  </div>
                  <div className="project-card-info padding-mobile">
                    <p>CATEGORY: Solo Photography Project</p>            
                    <p>Rural NSW is a collection of photos captured around, well, rural NSW. I was especially captivated by the contrast between
                      the countryside and the cities, and just how quiet everything really could be.
                    </p>
                    <p>Shot on the Bronica S2 with the Nikkor-P 75mm f2.8, and Portra 400. </p>
                    <PopupImage images={ruralNSWImages} active={1} setActive={1} />
                  </div>
              </div>
              </ProjectCard>
              
          </div>
          <div>
            <SocialLinks hasContent={true}/>
          </div>
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
                    <p>CATEGORY: 3D Modelling, Interactive Environment</p>            
                    <p>Simulated Ecology was my major project for my 3D visualisation course. It is an original 3D realtime interactive environment
                      which depicts the futuristic possibility of only being able to recreate nature in a digital environment.
                    </p>
                    <p>This project was
                      made in Unity over the course of 6 weeks. 
                    </p>
                    <div className="project-links">
                      <Button onClick={downloadWindows}>
                        <MicrosoftIcon fontSize="medium" style={{ color: 'white' }} alt="windows_icon" />
                        <p className="download-text">Windows Download</p>
                      </Button>
                      <Button onClick={downloadWindows}>
                        <AppleIcon fontSize="medium" style={{ color: 'white' }} alt="windows_icon" />
                        <p className="download-text">Mac M1 Download</p>
                      </Button>                   
                    </div>

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
              <ProjectCard>
                <div className="blur-container"></div>
                <div className="project-tile">
                  <div className="project-card-title videophone">
                    <h2 className="project-img-desktop-text padding highlight">Brutalist Videophone</h2>
                  </div>
                  <div className="project-card-info padding">
                    <p>CATEGORY: 3D Modelling</p>            
                    <p>This was my first ever 3D modelling project. This is the envisionment of what a possible late 20th century videophone could have looked like
                      if it was designed based on the brutalism architectural movement present in that era.
                    </p>
                    <p>This was designed over the course of 8 weeks in Maya and rendered in Arnold.</p>
                    <PopupImage images={videophoneImages} active={1} setActive={1} />
                  </div>
              </div>
              </ProjectCard>
              <ProjectCard>
                <div className="blur-container"></div>
                <div className="project-tile">
                  <div className="project-card-title rural-nsw">
                    <h2 className="project-img-desktop-text padding highlight">Rural NSW</h2>
                  </div>
                  <div className="project-card-info padding">
                    <p>CATEGORY: Solo Photography Project</p>            
                    <p>Rural NSW is a collection of photos captured around, well, rural NSW. I was especially captivated by the contrast between
                      the countryside and the cities, and just how quiet everything really could be.
                    </p>
                    <p>Shot on the Bronica S2 with the Nikkor-P 75mm f2.8, and Portra 400. </p>
                    <PopupImage images={ruralNSWImages} active={1} setActive={1} />
                  </div>
              </div>
              </ProjectCard>
          </div>
          <div>
            <SocialLinks hasContent={true}/>
          </div>
        </>
      )}
    </>
  );
};

export default Projects;
