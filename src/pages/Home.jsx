import React from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import Navbar from '../components/Navbar';
import SocialLinks from '../components/SocialLinks';
import AnimatedDiv from '../components/AnimatedDiv';

const Home = () => {
  const smallScreen = useMediaQuery('(max-width: 650px)');
  const largeScreen = useMediaQuery('(min-width: 651px)');

  fetch('https://api.github.com/repos/kodachrome128/kodachrome128.github.io/commits?per_page=1')
  .then(res => res.json())
  .then(res => {
    // Extract the commit message and time
    const commitMessage = res[0].commit.message;
    const commitSha = res[0].sha.substring(0, 7);
    const commitTime = new Date(res[0].commit.author.date).toLocaleString();

    // Update the HTML with the commit message and time
    document.getElementById('message').innerHTML = `
      <div class="commit-container">
        <h5 class="no-pad-no-margin">Latest update:</h5>
        <p>commit ${commitSha}: "${commitMessage}"</p>
        <div class="commit-flex">
          <p class="commit-time no-pad-no-margin">${commitTime}</p>
        </div>
      </div>
    `;
  });

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
                <br />
                <pre id="message" className="commit-section">Loading</pre>
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
