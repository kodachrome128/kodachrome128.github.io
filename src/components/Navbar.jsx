import React from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import {
  NavLink, 
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
            <NavLink to="/projects" className="NavLink animated-underline">
              PROJECTS
            </NavLink>
          </span>
          <span className={`navbar-mobile-items ${isActive('/') && 'active'}`}>
            <NavLink to="/" className="NavLink animated-underline">
              HOME
            </NavLink>
          </span>
          <span className={`navbar-mobile-items ${isActive('/about') && 'active'}`}>
            <NavLink to="/about" className="NavLink animated-underline">
              ABOUT
            </NavLink>
          </span>
        </div>
      )}
      {largeScreen && (
        <div className="navbar-desktop">
          <span className={`navbar-desktop-items ${isActive('/projects') && 'active'}`}>
            <NavLink to="/projects" className="NavLink animated-underline">
              PROJECTS
            </NavLink>
          </span>
          <span className={`navbar-desktop-items ${isActive('/') && 'active'}`}>
            <NavLink to="/" className="NavLink animated-underline">
              HOME
            </NavLink>
          </span>
          <span className={`navbar-desktop-items ${isActive('/about') && 'active'}`}>
            <NavLink to="/about" className="NavLink animated-underline">
              ABOUT
            </NavLink>
          </span>
        </div>
      )}
    </>
  );
}


export default SignInForm;
