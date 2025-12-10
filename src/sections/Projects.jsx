// src/sections/Projects.jsx — MOBILE-RESPONSIVE VERSION (NO DESIGN CHANGES)
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

const projects = [
  {
    title: "Multi Hardware",
    desc: "Full-stack e-commerce platform for hardware products with PayHere integration, admin panel, and real-time orders.",
    tech: "React • Laravel • MySQL • Tailwind • PayHere",
    live: "https://multihardware.ilagroup.lk",
    img: "/web1.png",
    gradient: "from-blue-600 to-cyan-500"
  },
  {
    title: "FindMyBass",
    desc: "Social platform for bass players — profiles, audio uploads, forums, events, and real-time chat.",
    tech: "Next.js • Laravel API • PostgreSQL • WebSockets • Tailwind",
    live: "https://findmybass.ilagroup.lk",
    img: "/web2.png",
    gradient: "from-purple-600 to-pink-600"
  },
  {
    title: "Door Optimizer",
    desc: "Social platform for bass players — profiles, audio uploads, forums, events, and real-time chat.",
    tech: "Next.js • Laravel API • PostgreSQL • WebSockets • Tailwind",
    live: "https://ilagroup.lk/doorcalc/",
    img: "/web3.png",
    gradient: "from-purple-600 to-pink-600"
  }
]

const Projects = () => {
  const cardsRef = useRef([])

  useEffect(() => {
    cardsRef.current.forEach((card, i) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 120, scale: 0.9 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1.2,
          delay: i * 0.15,
          ease: "power4.out",
          scrollTrigger: {
            trigger: card,
            start: "top 90%" // better for mobile scroll
          }
        }
      )
    })
  }, [])

  return (
    <section
      id="projects"
      className="py-20 md:py-32 px-4 sm:px-6 bg-black text-white relative overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-64 md:h-96 bg-gradient-to-b from-purple-900/30 to-transparent blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <div className="text-center mb-16 md:mb-24">
          <h2 className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-black bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Projects
          </h2>
          <p className="mt-4 md:mt-6 text-lg md:text-xl text-gray-400">
            Real-world solutions built with passion
          </p>
        </div>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {projects.map((project, i) => (
            <div key={i} ref={(el) => (cardsRef.current[i] = el)} className="group relative">
              {/* Glowing Border */}
              <div
                className={`absolute -inset-1 bg-gradient-to-r ${project.gradient} rounded-3xl blur-xl opacity-60 group-hover:opacity-100 transition duration-1000`}
              />

              {/* Card */}
              <div className="relative bg-gray-950 border border-white/10 rounded-3xl overflow-hidden backdrop-blur-xl">
                {/* Image */}
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={project.img}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 md:group-hover:scale-110"
                  />

                  {project.comingSoon && (
                    <div className="absolute inset-0 bg-black/80 flex items-center justify-center">
                      <span className="text-3xl sm:text-4xl md:text-5xl font-black animate-pulse">
                        Coming Soon
                      </span>
                    </div>
                  )}

                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                </div>

                {/* Content */}
                <div className="p-6 md:p-8 space-y-4 md:space-y-5">
                  <h3 className="text-2xl md:text-3xl font-bold">{project.title}</h3>

                  <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                    {project.desc}
                  </p>

                  <p className="text-[10px] md:text-xs text-gray-500 uppercase tracking-wider">
                    {project.tech}
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4 pt-4">
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 py-3 bg-white text-black font-bold text-center rounded-full hover:scale-105 transition-transform shadow-xl text-sm"
                    >
                      View Live
                    </a>

                    <a
                      href="#contact"
                      className="px-6 py-3 border-2 border-white/30 text-white font-bold rounded-full hover:bg-white/10 transition-all text-sm text-center"
                    >
                      Discuss
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
