// src/App.jsx
import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Gallery from './sections/Gallery';

gsap.registerPlugin(ScrollTrigger);

function App() {
  const cursorRef = useRef(null);
  const contentRef = useRef(null);
  
  // Simple scroll to content
  const scrollToContent = () => {
    contentRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  // Custom cursor effect
  useEffect(() => {
    const moveCursor = (e) => {
      gsap.to(cursorRef.current, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.15,
        ease: 'power2.out',
      });
    };

    // Function to handle hover over text elements
    const handleTextHover = (e) => {
      const target = e.target;
      const isText = target.matches('p, h1, h2, h3, h4, h5, h6, span, a, button, label, li, td, th, input[type="text"], input[type="email"], textarea, .text-hover');
      
      if (isText) {
        gsap.to(cursorRef.current, {
          scale: 5,
          duration: 0.2,
          ease: 'power2.out'
        });
      } else {
        gsap.to(cursorRef.current, {
          scale: 1,
          duration: 0.2,
          ease: 'power2.out'
        });
      }
    };

    window.addEventListener('mousemove', moveCursor);
    document.addEventListener('mouseover', handleTextHover);
    
    return () => {
      window.removeEventListener('mousemove', moveCursor);
      document.removeEventListener('mouseover', handleTextHover);
    };
  }, []);

  return (
    <div className="app-container">
      {/* Custom Cursor */}
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 w-5 h-5 bg-indigo-500 rounded-full pointer-events-none z-50 mix-blend-difference -translate-x-1/2 -translate-y-1/2 hidden md:block transition-transform duration-200 ease-out will-change-transform"
      />

      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-950 dark:via-black dark:to-gray-900 text-gray-900 dark:text-white overflow-x-hidden">
        {/* Navbar */}
        <Navbar />

        {/* Hero Section: fixed, floating backgrounds */}
        <div className="relative">
          <section className="hero-section fixed top-0 left-0 w-full h-screen z-10">
            <Hero />
          </section>
          
          {/* Spacer to push content below hero */}
          <div className="h-screen w-full"></div>
        </div>

        {/* Content Sections */}
        <div ref={contentRef} className="relative z-20 bg-white dark:bg-gray-900">
          <About id="about" />
          <Skills id="skills" />
          <Projects id="projects" />
          <Gallery id="gallery" />
          
          {/* Footer */}
          <footer className="py-12 text-center text-gray-600 dark:text-gray-400">
            <p>© {new Date().getFullYear()} hathim. All rights reserved.</p>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default App;