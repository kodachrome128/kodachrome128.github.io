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
          <div className="background">
            <div className="centered-title small-title forms-small">
              {/* <SignUpForm /> */}
            </div>
          </div>
        </>
      )}
      {largeScreen && (
        <>
          <div className="centered-title">
            <h1>Welcome</h1>
            <p>This page is currently under construction</p>
          </div>
          <div className="grid-size">
            <div className="grid" style={style}></div>
          </div>
        </>
      )}
    </>
  );
};

export default Home;
