import React from 'react';
const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <Footer className="footer">
      <div className="footer-content">
        <p>&copy; {currentYear} DevPortfolio. All rights reserved.</p>
        <p className="footer-tag">Built with React & Vite</p>
      </div>
    </Footer>
  );
};

export default Footer;