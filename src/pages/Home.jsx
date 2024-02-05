import React from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import Navbar from '../components/Navbar';

const Home = () => {
  const smallScreen = useMediaQuery('(max-width: 650px)');
  const largeScreen = useMediaQuery('(min-width: 651px)');

  const style = {
    '--grid-color': 'rgba(115,59,139,0.7)',
    '--grid-size': '30px',
    '--grid-blur': '1px',
  }

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
        // <>
        //   <div className="blur-container centered-title title-padding-desktop">
        //     <h2>Tao Tao</h2>
        //   </div>
        // </>
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
    </>
  );
};

export default Home;
