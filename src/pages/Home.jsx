import React from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import Navbar from '../components/Navbar';
import SocialLinks from '../components/SocialLinks';
import AnimatedDiv from '../components/AnimatedDiv';

const Home = () => {
  const smallScreen = useMediaQuery('(max-width: 650px)');
  const largeScreen = useMediaQuery('(min-width: 651px)');
  return (
    <>
      <header style={{ margin: '0', width: '100%', top: '0', left: '0', position: 'absolute' }}>
        <Navbar />
      </header>
      {smallScreen && (
        <>
          <div className="title-mobile-home">
            <AnimatedDiv>
              <div className="blur-container"></div>
              <div className="title-content">
                <h1 class="centered">Welcome</h1>
                <p>Hi there, I'm Tao! This is v3 of my portfolio website. Please take a look around!</p>
              </div>
            </AnimatedDiv>
          </div>
          <div className='home-social-mobile'>
            <SocialLinks />
          </div>
        </>
      )}
      {largeScreen && (
        <>
          <div className="title-home">
            <AnimatedDiv>
              <div className="blur-container"></div>
              <div className="title-content">
                <h1 class="centered">Welcome</h1>
                <p>Hi there, I'm Tao! This is v3 of my portfolio website. Please take a look around!</p>
              </div>
            </AnimatedDiv>
          </div>
          <SocialLinks />
        </>
      )}
    </>
  );
};

export default Home;
