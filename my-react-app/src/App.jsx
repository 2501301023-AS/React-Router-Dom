import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';

import Education from './components/Education';
import TechnicalSkills from './components/Technicalskill'
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css'; 

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <main>
        <section id="home"><Home /></section>
        <section id="about"><About /></section>
       
        <section id="education"><Education /></section>
        <section id="tech-skills"><TechnicalSkills /></section>
     <section id="skills"><Skills /></section>
     <section id="projects"><Projects /></section>
        <section id="contact"><Contact /></section>
        <section id="Footer"><Footer/></section>
      </main>
    </div>
  );
}

export default App;