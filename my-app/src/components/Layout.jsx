import React from 'react';
import Button from './Button';
import { Link } from 'react-router-dom';

function Layout(){
  return (
    <nav className="nav-bar">
      <div className='nav-bar-start'>
        <Link className="nav-item nav-header" to="/">Shortly</Link>
        <Link className="nav-item" to="/features">Features</Link>
        <Link className="nav-item" to="/pricing">Pricing</Link>
        <Link className="nav-item" to="/resources">Resources</Link>
      </div>
      <div className='nav-bar-end'>
        <Button className='Login' buttonText='Login'/>
        <Button className='Signup' buttonText='Sign up'/>
      </div>
    </nav>
  );
};

export default Layout;
