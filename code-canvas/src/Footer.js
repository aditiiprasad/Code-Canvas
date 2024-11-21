import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaFileAlt } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; 2024 Code Canvas. All rights reserved.</p>
        <p className="footer-tagline">Crafted with 💖 by Aditi</p>
      </div>
      <div className="social-links">
        <a href="https://github.com/aditiiprasad" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/aditiiprasad" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="mailto:aditi03prasad@gmail.com">
          <FaEnvelope />
        </a>
        <a href="resume.pdf" target="_blank" rel="noopener noreferrer">
          <FaFileAlt />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
