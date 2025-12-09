// src/sections/About.jsx
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const experiences = [
  {
    year: "2021 – 2022",
    title: "System Admin & Social Media Executive",
    company: "Shima International Pvt Ltd",
    desc: "Managed IT infrastructure, network security, and led social media strategy & content creation.",
    color: "from-blue-500 to-cyan-600",
  },
  {
    year: "2022 – 2024",
    title: "BSc in Management & Information Technology",
    company: "South Eastern University of Sri Lanka",
    desc: "Graduated with expertise in software development, databases, project management, and business analytics.",
    color: "from-purple-500 to-pink-600",
  },
  {
    year: "2023 – Present",
    title: "Bachelor of Laws (LL.B)",
    company: "Open University of Sri Lanka",
    desc: "Pursuing law degree — specializing in cyber law, intellectual property, and contracts.",
    color: "from-orange-500 to-red-600",
  },
  {
    year: "2025 – Present",
    title: "Web Developer • Designer • IT Admin",
    company: "ILA Group Import & Trading Company",
    desc: "Full-stack development, UI/UX design, system administration, customer support automation, and digital marketing.",
    color: "from-emerald-500 to-teal-600",
    current: true,
  },
];

const About = () => {
  const cardsRef = useRef([]);

  useEffect(() => {
    // Set initial styles to prevent FOUC (Flash of Unstyled Content)
    gsap.set(cardsRef.current, { opacity: 0, y: 30 });
    
    // Create a context for our animations
    const ctx = gsap.context(() => {
      cardsRef.current.forEach((card, i) => {
        // Simple fade and slide up animation on scroll
        gsap.to(card, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 90%",
            end: "bottom 80%",
            toggleActions: "play none none none",
            once: true,
            id: `card-${i}`
          }
        });

        // Only add hover effect if not on touch devices
        if (!('ontouchstart' in window)) {
          card.addEventListener('mouseenter', () => {
            gsap.to(card, { 
              y: -5,
              duration: 0.3,
              ease: "power2.out"
            });
          });

          card.addEventListener('mouseleave', () => {
            gsap.to(card, { 
              y: 0,
              duration: 0.3,
              ease: "power2.out"
            });
          });
        }

        // Subtle glow for current card
        if (card.classList.contains("current")) {
          gsap.to(card, {
            boxShadow: "0 0 30px rgba(139, 92, 246, 0.4)",
            duration: 2,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
            scrollTrigger: {
              trigger: card,
              start: "top 90%",
              toggleActions: "play none none none"
            }
          });
        }
      });
    });

    // Cleanup function
    return () => {
      ctx.revert(); // Proper cleanup of all GSAP animations and ScrollTriggers
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <section
      id="about"
      className="relative py-32 px-6 overflow-hidden bg-gradient-to-b from-gray-50 via-white to-gray-50 dark:from-black dark:via-gray-950 dark:to-black"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl animate-pulse" />
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <div className="text-center mb-20">
          <h2 className="text-7xl md:text-9xl font-black bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            My Journey
          </h2>
          <p className="mt-6 text-xl text-gray-600 dark:text-gray-400">
            From passion to mastery — every step counts.
          </p>
        </div>

        {/* Floating Cards */}
        <div className="grid md:grid-cols-2 gap-12">
          {experiences.map((exp, i) => (
            <div
              key={i}
              ref={(el) => (cardsRef.current[i] = el)}
              className={`group relative bg-white/80 dark:bg-gray-900/90 backdrop-blur-2xl rounded-3xl p-10 shadow-3xl hover:shadow-4xl transition-all duration-700 border border-white/30 ${
                exp.current ? "current ring-4 ring-purple-500/50" : ""
              }`}
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* Gradient Glow */}
              <div
                className={`absolute -inset-1 bg-gradient-to-r ${exp.color} rounded-3xl blur-xl opacity-60 group-hover:opacity-100 transition duration-1000 -z-10`}
              />

              {/* Year Badge */}
              <div
                className={`inline-block px-6 py-3 rounded-full text-white font-bold text-sm shadow-lg bg-gradient-to-r ${exp.color}`}
              >
                {exp.year}
              </div>

              {exp.current && (
                <div className="absolute top-4 right-4 px-4 py-2 bg-gradient-to-r from-green-500 to-emerald-600 text-white text-xs font-bold rounded-full animate-pulse">
                  CURRENT
                </div>
              )}

              <h3 className="text-3xl md:text-4xl font-black mt-8 text-gray-900 dark:text-white">
                {exp.title}
              </h3>
              <p className="text-xl font-medium text-purple-600 dark:text-purple-400 mt-3">
                {exp.company}
              </p>
              <p className="mt-6 text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
                {exp.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
