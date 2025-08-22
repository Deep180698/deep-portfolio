import React, { useState, useEffect } from "react";
import { Menu, X, Download } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = ["about", "Skill", "projects", "contact"];

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 w-full z-50 backdrop-blur-md transition-colors duration-300 ${
        scrolled ? "bg-black/80" : "bg-transparent"
      }`}
    >
      <div className="mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <h1
          className="text-2xl font-bold tracking-wide text-white cursor-pointer hover:text-blue-400 transition-colors"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          MyPortfolio
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          <ul className="flex gap-8 text-white text-lg font-medium items-center">
            {menuItems.map((item) => (
              <li key={item}>
                <a
                  href={`#${item}`}
                  className="relative group transition"
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                  <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-400 group-hover:w-full transition-all duration-300"></span>
                </a>
              </li>
            ))}
          </ul>

          {/* Resume Button */}
          <a
            href="/Deep_Patel_Resume.pdf"
            download
            className="flex items-center gap-2 text-white border border-white px-4 py-2 rounded hover:bg-white hover:text-black transition font-medium"
          >
            <Download size={16} /> Resume
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white focus:outline-none"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-black/90 px-6 py-4 space-y-4 flex flex-col items-start"
          >
            {menuItems.map((item) => (
              <a
                key={item}
                href={`#${item}`}
                className="block text-white hover:text-blue-400 transition"
                onClick={() => setIsOpen(false)}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </a>
            ))}

            {/* Resume Button Mobile */}
            <a
              href="/Deep_Patel_Resume.pdf"
              download
              className="flex items-center gap-2 text-white border border-white px-4 py-2 rounded hover:bg-white hover:text-black transition font-medium"
              onClick={() => setIsOpen(false)}
            >
              <Download size={16} /> Resume
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
