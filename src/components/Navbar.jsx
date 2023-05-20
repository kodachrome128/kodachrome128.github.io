import React from 'react';
import { Link } from 'react-router-dom';

function SignInForm () {
  return (
    <>
      <div className="navbar-desktop">
        <span className="navbar-desktop-items"><Link to="/projects" className="link">Projects</Link></span>
        <span className="navbar-desktop-items"><Link to="/" className="link">Home</Link></span>
        <span className="navbar-desktop-items"><Link to="/about" className="link">About</Link></span>
      </div>
    </>
  )
}

export default SignInForm;
