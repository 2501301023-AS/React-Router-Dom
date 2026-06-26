import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/skills', label: 'Skills' },
    { path: '/technical-skills', label: 'Tech Skills' },
    { path: '/education', label: 'Education' },
    { path: '/experience', label: 'Experience' },
    { path: '/projects', label: 'Projects' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <NavLink to="/" className="navbar-logo" onClick={closeMenu}>
         
          <span>Dev<span className="cyan-text">Portfolio</span></span>
        </NavLink>

        <div className="menu-icon" onClick={toggleMenu}>
         
        </div>

        <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
          {navLinks.map((link) => (
            <li key={link.path} className="nav-item">
              <NavLink
                to={link.path}
                className={({ isActive }) => `nav-links ${isActive ? 'active-link' : ''}`}
                onClick={closeMenu}
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;