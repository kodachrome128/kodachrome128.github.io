import React from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import {
  Link, 
  useLocation
} from 'react-router-dom';

function SignInForm () {
  const smallScreen = useMediaQuery('(max-width: 650px)');
  const largeScreen = useMediaQuery('(min-width: 651px)');
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <>
      {smallScreen && (
        <div className="navbar-mobile">
          <span className={`navbar-mobile-items ${isActive('/projects') && 'active'}`}>
            <Link to="/projects" className="link animated-underline">
              PROJECTS
            </Link>
          </span>
          <span className={`navbar-mobile-items ${isActive('/') && 'active'}`}>
            <Link to="/" className="link animated-underline">
              HOME
            </Link>
          </span>
          <span className={`navbar-mobile-items ${isActive('/about') && 'active'}`}>
            <Link to="/about" className="link animated-underline">
              ABOUT
            </Link>
          </span>
        </div>
      )}
      {largeScreen && (
        <div className="navbar-desktop">
          <span className={`navbar-desktop-items ${isActive('/projects') && 'active'}`}>
            <Link to="/projects" className="link animated-underline">
              PROJECTS
            </Link>
          </span>
          <span className={`navbar-desktop-items ${isActive('/') && 'active'}`}>
            <Link to="/" className="link animated-underline">
              HOME
            </Link>
          </span>
          <span className={`navbar-desktop-items ${isActive('/about') && 'active'}`}>
            <Link to="/about" className="link animated-underline">
              ABOUT
            </Link>
          </span>
        </div>
      )}
    </>
  );
}


export default SignInForm;
