import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Testimonials from './components/Testimonials';
import Achievements from './components/Achievements';
import BlogSection from './components/BlogSection';
import CodingProfiles from './components/CodingProfiles';
import ProfessionalResume from './components/ProfessionalResume';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AdminDashboard from './components/AdminDashboard';
import SocialShare from './components/SocialShare';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={
              <>
                <Navbar />
                <Hero />
                <About />
                <Skills />
                <Projects />
                <CodingProfiles />
                <Testimonials />
                <Achievements />
                <BlogSection />
                <ProfessionalResume />
                <Contact />
                <Footer />
                <SocialShare />
              </>
            } />
            <Route path="/admin" element={<AdminDashboard />} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
