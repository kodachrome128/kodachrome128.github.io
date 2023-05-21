import React from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import Navbar from '../components/Navbar';

const About = () => {
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
          <div className="centered-title">
            <h1 className="small-title glow-purple">About</h1>
            <h2 className="glow-blue">This page is currently under construction</h2>
          </div>
          <div className="grid-size">
            <div className="grid" style={style}></div>
          </div>
        </>
      )}
      {largeScreen && (
        <>
          <div className="centered-title">
            <h1 className="glow-purple">About</h1>
            <h2 className="glow-blue">This page is currently under construction</h2>
          </div>
          <div className="grid-size">
            <div className="grid" style={style}></div>
          </div>
        </>
      )}
    </>
  );
};

export default About;
