import React from 'react';


const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {currentYear} DevPortfolio. All rights reserved.</p>
        <p className="footer-tag">Built with React & Vite</p>
      </div>
    </footer>
  );
};

export default Footer;