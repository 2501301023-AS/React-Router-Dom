import React from 'react';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <p>© {new Date().getFullYear()} Your Name</p>
      <div style={{ display: 'flex', gap: '15px' }}>
        <a href="https://github.com/2501301023-AS" target="_blank" rel="noreferrer" style={styles.link}>GitHub</a>
        <a href="https://www.linkedin.com/in/ashishkumar2008/" target="_blank" rel="noreferrer" style={styles.link}>LinkedIn</a>
        <a href="mailto:Parjapatshab2008@gmail.com" style={styles.link}>Email</a>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    width: '90vw',
    background: '#0d1117',
    color: '#8b949e',
    padding: '15px 20px',
    fontFamily: 'sans-serif',
    fontSize: '0.85rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderTop: '1px solid #21262d',
  
  },
  link: {
    color: '#58a6ff',
    textDecoration: 'none',
  }
};

export default Footer;