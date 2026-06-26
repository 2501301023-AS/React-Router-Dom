// App.js
import React from 'react';
import { BrowserRouter, Routes, Route, Link, Outlet, useLocation } from 'react-router-dom';
import { 
  themes,
  HeroSection, 
  AboutSection, 
  SkillsSection, 
  ExperienceSection, 
  ProjectsSection, 
  ContactSection 
} from './Data';

// Shared Layout frame wrapping around dynamic routes
function AppLayout() {
  const location = useLocation();

  const navItemStyle = (path) => ({
    padding: '12px 20px',
    color: location.pathname === path ? '#ffffff' : themes.textMuted,
    background: location.pathname === path ? themes.accent : 'transparent',
    textDecoration: 'none',
    borderRadius: '8px',
    fontWeight: '600',
    transition: '0.2s'
  });

  return (
    <div style={{ minHeight: '100vh', background: themes.bg, color: themes.textMain, fontFamily: 'system-ui, sans-serif' }}>
      {/* Universal Top Nav */}
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px 40px', borderBottom: `1px solid ${themes.border}`, background: themes.bg, position: 'sticky', top: 0, zIndex: 100 }}>
        <Link to="/" style={{ color: '#fff', textDecoration: 'none', fontWeight: '800', fontSize: '1.3rem' }}>RMD.</Link>
        <nav style={{ display: 'flex', gap: '10px' }}>
          <Link to="/" style={navItemStyle('/')}>👤 About</Link>
          <Link to="/skills" style={navItemStyle('/skills')}>🛠️ Skills</Link>
          <Link to="/experience" style={navItemStyle('/experience')}>💼 Experience</Link>
          <Link to="/projects" style={navItemStyle('/projects')}>🚀 Projects</Link>
          <Link to="/contact" style={navItemStyle('/contact')}>📞 Connect</Link>
        </nav>
      </header>

      {/* Dynamic Content Frame */}
      <main style={{ maxWidth: '1200px', margin: '0 auto', padding: '20px 40px' }}>
        <Outlet />
      </main>

      {/* Shared Footer */}
      <footer style={{ textAlign: 'center', padding: '40px 20px', borderTop: `1px solid ${themes.border}`, color: themes.textMuted, fontSize: '0.9rem' }}>
        © 2026 Ram Mohan Dixit. All rights reserved. • Rebuilt with React Router DOM
      </footer>
    </div>
  );
}

// Router Controller Assembly
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          {/* Main index page aggregates Hero & Summary */}
          <Route index element={<><HeroSection /><AboutSection /></>} />
          <Route path="skills" element={<SkillsSection />} />
          <Route path="experience" element={<ExperienceSection />} />
          <Route path="projects" element={<ProjectsSection />} />
          <Route path="contact" element={<ContactSection />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}