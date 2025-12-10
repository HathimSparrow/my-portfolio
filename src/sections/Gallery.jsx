// src/sections/Gallery.jsx — FINAL: SIMPLE, WORKING, INFINITE 4-ROW GALLERY (MOBILE RESPONSIVE)
const images = [
  "/img1.jpg",
  "/img2.jpg",
  "/img3.jpg",
  "/img4.jpg",
  "/img5.jpg",
  "/img6.jpg",
  "/img7.jpg"
];


const Gallery = () => {
  return (
    <section className="relative min-h-screen bg-black overflow-hidden">
      {/* Center Text */}
      <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
        <div className="text-center px-4">
          <h2 className="text-5xl sm:text-7xl md:text-9xl font-black text-white tracking-tight">
            GALLERY
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-white/80 mt-4 font-light">
            Moments & Creations
          </p>
        </div>
      </div>

      {/* Dark Fade for Text */}
      <div className="absolute inset-0 bg-black/60 z-10 pointer-events-none" />

      {/* 4 Rows — INFINITE LOOP WITH CSS */}
      <div className="absolute inset-0 flex flex-col justify-center gap-4 sm:gap-6 md:gap-8 px-4 sm:px-6 md:px-8">
        {/* Row 1 & 3: Left to Right */}
        <div className="flex gap-4 sm:gap-6 md:gap-8 animate-scroll-left">
          {[...images, ...images].map((src, i) => (
            <img key={i} src={src} alt="" className="w-40 h-28 sm:w-56 sm:h-36 md:w-80 md:h-56 object-cover rounded-2xl shadow-2xl flex-shrink-0" />
          ))}
        </div>

        {/* Row 2 & 4: Right to Left */}
        <div className="flex gap-4 sm:gap-6 md:gap-8 animate-scroll-right">
          {[...images, ...images].map((src, i) => (
            <img key={i} src={src} alt="" className="w-40 h-28 sm:w-56 sm:h-36 md:w-80 md:h-56 object-cover rounded-2xl shadow-2xl flex-shrink-0" />
          ))}
        </div>

        <div className="flex gap-4 sm:gap-6 md:gap-8 animate-scroll-left">
          {[...images, ...images].map((src, i) => (
            <img key={i} src={src} alt="" className="w-40 h-28 sm:w-56 sm:h-36 md:w-80 md:h-56 object-cover rounded-2xl shadow-2xl flex-shrink-0" />
          ))}
        </div>

        <div className="flex gap-4 sm:gap-6 md:gap-8 animate-scroll-right">
          {[...images, ...images].map((src, i) => (
            <img key={i} src={src} alt="" className="w-40 h-28 sm:w-56 sm:h-36 md:w-80 md:h-56 object-cover rounded-2xl shadow-2xl flex-shrink-0" />
          ))}
        </div>
      </div>

      {/* Left & Right Fade */}
      <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-36 md:w-64 bg-gradient-to-r from-black to-transparent pointer-events-none z-20" />
      <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-36 md:w-64 bg-gradient-to-l from-black to-transparent pointer-events-none z-20" />
    </section>
  )
}

export default Gallery

