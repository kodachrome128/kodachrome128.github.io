import React from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import Navbar from '../components/Navbar';
import AnimatedDiv from '../components/AnimatedDiv';
import my_pic from '../images/literally_me.jpg';

const About = () => {
  const smallScreen = useMediaQuery('(max-width: 650px)');
  const largeScreen = useMediaQuery('(min-width: 651px)');

  return (
    <>
      <header style={{ margin: '0', width: '100%', top: '0', left: '0', position: 'absolute' }}>
        <Navbar />
      </header>
      {smallScreen && (
        <>
          <div className="title">
            <div className="blur-container"></div>
            <div className="title-content">
              <h1 class="centered">Welcome</h1>
              <p>This is v3 of my portfolio website. Please take a look around!</p>
            </div>
          </div>
        </>
      )}
      {largeScreen && (
        <>
          <div className="title">
            <AnimatedDiv>
              <div className="blur-container"></div>
              <div className="title-content">
                <div className="heading-with-pic">
                  <div>
                    <h2>Hello! I'm Tao Tao.</h2>              
                    <p>I'm currently a 4th year student at the University of New South Wales studying a bachelor's degree in Computer Science and Media Art.
                      I am focused on a variety of topics such as UI and UX design, fullstack development, as well as VFX and 3D design. 
                    </p>
                  </div>
                  <img src={my_pic} alt="myself" className="profile-pic"></img>
                </div>

             </div>
            </AnimatedDiv>
          </div>
        </>
      )}
    </>
  );
};

export default About;
