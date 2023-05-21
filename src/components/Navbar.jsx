import React from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Link } from 'react-router-dom';

function SignInForm () {
  const smallScreen = useMediaQuery('(max-width: 650px)');
  const largeScreen = useMediaQuery('(min-width: 651px)');

  return (
    <>
      {smallScreen && (
        <div className="navbar-mobile">
          <span className="navbar-mobile-items"><Link to="/projects" className="link">Projects</Link></span>
          <span className="navbar-mobile-items"><Link to="/" className="link">Home</Link></span>
          <span className="navbar-mobile-items"><Link to="/about" className="link">About</Link></span>
        </div>
      )}
      {largeScreen && (
        <div className="navbar-desktop">
          <span className="navbar-desktop-items"><Link to="/projects" className="link">Projects</Link></span>
          <span className="navbar-desktop-items"><Link to="/" className="link">Home</Link></span>
          <span className="navbar-desktop-items"><Link to="/about" className="link">About</Link></span>
        </div>
      )}
    </>
  )
}

export default SignInForm;
