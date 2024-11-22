import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaFileAlt } from 'react-icons/fa';
import './Header.css';
import logo from "./assets/logo.png";

const Header = () => {
  return (
    <header className="header">
      <div className="logo-container">
        <img src={logo} alt="Logo" className="logo" />
      </div>
      <h1 className="typewriter">Code Canvas</h1>
      
      <div className='links'>
        <a 
          href="https://github.com/aditiiprasad" 
          target="_blank" 
          rel="noopener noreferrer" 
          title="GitHub"
        >
          <FaGithub />
        </a>
        <a 
          href="https://www.linkedin.com/in/aditiiprasad" 
          target="_blank" 
          rel="noopener noreferrer" 
          title="LinkedIn"
        >
          <FaLinkedin />
        </a>
        <a 
          href="mailto:aditi03prasad@gmail.com" 
          title="Email"
        >
          <FaEnvelope />
        </a>
        <a 
          href="resume.pdf" 
          target="_blank" 
          rel="noopener noreferrer" 
          title="Resume"
        >
          <FaFileAlt />
        </a>
      </div>
    </header>
  );
};

export default Header;
