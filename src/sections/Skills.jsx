// src/sections/Skills.jsx
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

const skills = [
  { name: "React / Next.js", level: 92 },
  { name: "JavaScript / TypeScript", level: 90 },
  { name: "Node.js / Express", level: 85 },
  { name: "UI/UX Design", level: 88 },
  { name: "Tailwind CSS", level: 95 },
  { name: "Three.js / R3F", level: 78 },
  { name: "Video Editing", level: 87 },
  { name: "Social Media Strategy", level: 90 }
]

const Skills = () => {
  const sectionRef = useRef(null)

  useEffect(() => {
    gsap.fromTo(".skill-bar",
      { width: 0 },
      {
        width: (i, el) => el.getAttribute("data-level") + "%",
        duration: 1.8,
        ease: "power4.out",
        stagger: 0.15,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%"
        }
      }
    )
  }, [])

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="py-20 px-4 sm:px-6 bg-gradient-to-b from-purple-50/50 to-transparent dark:from-purple-950/20"
    >
      <div className="max-w-6xl mx-auto">
        
        {/* Mobile responsive heading */}
        <h2 className="text-4xl sm:text-5xl md:text-7xl font-black text-center mb-12 sm:mb-16 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
          Skills & Expertise
        </h2>


        <div className="grid grid-cols-2 md:grid-cols-2 gap-6 sm:gap-10 max-w-4xl mx-auto">
          {skills.map((skill, i) => (
            <div key={i} className="space-y-2 sm:space-y-3">

              <div className="flex justify-between text-sm sm:text-lg font-medium">
                <span className="text-gray-800 dark:text-gray-200">{skill.name}</span>
                <span className="text-indigo-600 dark:text-indigo-400">{skill.level}%</span>
              </div>

              <div className="h-3 sm:h-6 bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden">
                <div
                  className="skill-bar h-full rounded-full bg-gradient-to-r from-indigo-500 to-purple-600"
                  data-level={skill.level}
                />
              </div>

            </div>
          ))}
        </div>


      </div>
    </section>
  )
}

export default Skills
