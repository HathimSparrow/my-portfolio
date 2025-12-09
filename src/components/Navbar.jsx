import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 backdrop-blur-lg bg-white/70 dark:bg-black/70 border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
        
        {/* Logo */}
        <h1 className="text-2xl font-bold bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent">
          Hathim
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 text-sm font-medium">
          <a href="#home" className="hover:text-indigo-500 transition">Home</a>
          <a href="#about" className="hover:text-indigo-500 transition">About</a>
          <a href="#projects" className="hover:text-indigo-500 transition">Projects</a>
          <a href="#contact" className="hover:text-indigo-500 transition">Contact</a>
        </div>

        {/* Mobile Hamburger Icon */}
        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu (slide down) */}
      <div
        className={`
          md:hidden flex flex-col gap-6 text-center font-medium text-lg bg-white/80 dark:bg-black/80 backdrop-blur-lg
          transition-all duration-300 overflow-hidden 
          ${open ? "max-h-64 py-6" : "max-h-0 py-0"}
        `}
      >
        <a href="#home" className="hover:text-indigo-500 transition" onClick={() => setOpen(false)}>Home</a>
        <a href="#about" className="hover:text-indigo-500 transition" onClick={() => setOpen(false)}>About</a>
        <a href="#projects" className="hover:text-indigo-500 transition" onClick={() => setOpen(false)}>Projects</a>
        <a href="#contact" className="hover:text-indigo-500 transition" onClick={() => setOpen(false)}>Contact</a>
      </div>
    </nav>
  );
};

export default Navbar;
