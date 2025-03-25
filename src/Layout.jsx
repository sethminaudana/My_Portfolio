import React from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';
import Footer from './Footer';
import CVSection from './CVSection';
import ProgressBar from './ProgressBar';
import SkillBar from './SkillBar';
import Certifications from './Certifications'; // Import the component
import certificationsData from './data/certifications'; // Import your data

function Layout() {
  return (
    <>
    
      <Navbar/>
      <main style={{ paddingTop: '64px' }}>
        <Hero />
        <div className="container">
          <About />
          <Skills />
          <Projects />
          <Certifications certifications={certificationsData} />
          <CVSection/>
          
          <Contact />
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Layout;