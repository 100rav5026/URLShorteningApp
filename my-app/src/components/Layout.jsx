import React from 'react';
import Button from './Button';
import { Link } from 'react-router-dom';
import { FaTimes,FaBars } from 'react-icons/fa'
import { useRef } from 'react';

function Layout(){

  const navRef = useRef();

  const showNavBar = () =>{
    navRef.current.classList.toggle('responsive-nav');
  }

  return (
    <>
    <nav ref={navRef} className="nav-bar">
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
      <button className='nav-btn nav-close-btn' onClick={showNavBar}>
        <FaTimes/>
      </button>
    </nav>
    <button className='nav-btn' onClick={showNavBar}>
      <FaBars/>
    </button>
    </>
  );
};

export default Layout;
