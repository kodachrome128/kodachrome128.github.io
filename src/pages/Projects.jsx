import React from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import Navbar from '../components/Navbar';
import SocialLinks from '../components/SocialLinks';
import AnimatedDiv from '../components/AnimatedDiv';
import my_pic from '../images/literally_me.jpg';

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
          <div className="title-mobile">
            <AnimatedDiv>
              <div className="blur-container"></div>
              <div className="title-content-mobile">
                  <h2>Hello! I'm Tao Tao.</h2>              
                  <img src={my_pic} alt="myself" className="profile-pic"></img>
                  <p>I'm currently a 4th year student at the University of New South Wales studying a bachelor's degree in Computer Science and Media Art.
                      I am focused on a variety of topics such as UI and UX design, fullstack development, as well as visual effects, 3D design and photography.
                    </p>
                    <p>Please check out some of my projects and creations!</p>

             </div>
            </AnimatedDiv>
          </div>
          <footer>
            <SocialLinks />
          </footer>
        </>
      )}
      {largeScreen && (
        <>
          <div className="title-desktop">
            <AnimatedDiv>
              <div className="blur-container"></div>
              <div className="title-content">
                <div className="heading-with-pic-desktop">
                  <div>
                    <h2>Hello! I'm Tao Tao.</h2>              
                    <p>I'm currently a 4th year student at the University of New South Wales studying a bachelor's degree in Computer Science and Media Art.
                      I am focused on a variety of topics such as UI and UX design, fullstack development, as well as visual effects, 3D design and photography.
                    </p>
                    <p>Please check out some of my projects and creations!</p>
                  </div>
                  <img src={my_pic} alt="myself" className="profile-pic"></img>
                </div>

             </div>
            </AnimatedDiv>
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
