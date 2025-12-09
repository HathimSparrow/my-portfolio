// src/sections/Hero.jsx
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";

const roles = [
  "FULL STACK DEVELOPER",
  "VIDEOGRAPHER",
  "MANAGEMENT TRAINEE",
  "SOCIAL MEDIA MANAGER",
];

const Hero = () => {
  const nameRef = useRef(null);
  const iamRef = useRef(null);
  const roleRef = useRef(null);
  const imgRef = useRef(null);
  const [currentRole, setCurrentRole] = useState(0);
  const [imageLoaded, setImageLoaded] = useState(false);

  // Rotating job roles
  useEffect(() => {
    const interval = setInterval(() => {
      gsap.to(roleRef.current, {
        y: -20,
        opacity: 0,
        duration: 0.4,
        ease: "power3.out",
        onComplete: () => {
          setCurrentRole((prev) => (prev + 1) % roles.length);
          gsap.fromTo(
            roleRef.current,
            { y: 20, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.4, ease: "power3.out" }
          );
        },
      });
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Entrance animations
  useEffect(() => {
    if (!imageLoaded) return;

    gsap.from(iamRef.current, { x: -60, opacity: 0, duration: 1, ease: "power3.out" });
    gsap.from(nameRef.current, { y: 80, opacity: 0, duration: 1.2, ease: "power3.out", delay: 0.3 });
    gsap.from(imgRef.current, { opacity: 0, y: 50, duration: 1.2, ease: "power3.out", delay: 0.6 });
  }, [imageLoaded]);

  return (
    <section className="relative w-full h-screen overflow-hidden bg-white">
      {/* Main Content */}
      <div className="container mx-auto px-6 h-full flex items-center relative z-10">
        <div className="max-w-4xl w-full text-center sm:text-left">
          <div ref={iamRef} className="text-2xl md:text-3xl font-medium text-gray-700 mb-2">
            Hello, I'm
          </div>
          
          <h1 
            ref={nameRef} 
            className="text-6xl md:text-8xl font-extrabold text-gray-900 mb-4 leading-tight"
          >
            HATHIM
          </h1>
          
          <div className="h-16 md:h-20 overflow-hidden mb-8">
            <div 
              ref={roleRef} 
              className="text-3xl md:text-5xl font-bold text-indigo-600"
            >
              {roles[currentRole]}
            </div>
          </div>
          
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto sm:mx-0">
            Crafting digital experiences through clean code and creative design.
            Let's build something amazing together.
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center sm:justify-start">
            <a 
              href="#about" 
              className="px-8 py-3 bg-indigo-600 text-white rounded-full font-medium hover:bg-indigo-700 transition-colors duration-300"
            >
              Explore My Work
            </a>
            <a 
              href="#contact" 
              className="px-8 py-3 border-2 border-indigo-600 text-indigo-600 rounded-full font-medium hover:bg-indigo-50 transition-colors duration-300"
            >
              Contact Me
            </a>
          </div>
        </div>

        {/* Hero Image */}
        <div className="hidden lg:block absolute right-0 bottom-0 w-1/2 h-full overflow-hidden">
          <img
            ref={imgRef}
            src="/me.png"
            alt="Hathim"
            className="hero-image w-full h-full object-contain"
            onLoad={() => setImageLoaded(true)}
          />
        </div>
      </div>

      {/* Social Links */}
      <div className="hidden md:flex flex-col space-y-6 fixed left-8 bottom-1/2 transform translate-y-1/2 z-20">
        <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-indigo-600 transition-colors">
          <FaGithub className="w-6 h-6" />
        </a>
        <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-indigo-600 transition-colors">
          <FaLinkedin className="w-6 h-6" />
        </a>
        <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-indigo-600 transition-colors">
          <FaTwitter className="w-6 h-6" />
        </a>
        <a href="mailto:hathim3681@gmail.com" className="text-gray-600 hover:text-indigo-600 transition-colors">
          <FaEnvelope className="w-6 h-6" />
        </a>
      </div>

    </section>
  );
};

export default Hero;