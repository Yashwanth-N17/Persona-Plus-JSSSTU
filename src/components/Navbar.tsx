import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import logo from "@/assets/persona-logo.jpeg";

import { Link } from "react-router-dom";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] }}
      className="fixed top-0 left-0 right-0 z-[8000] transition-all duration-500"
      style={{
        background: scrolled ? "rgba(255, 255, 255, 0.85)" : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(200, 216, 228,0.4)" : "1px solid transparent",
      }}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-10 h-20 flex items-center justify-between">
        <Link
          to="/"
          whileHover={{ scale: 1.05 }}
          className="flex items-center gap-3 rounded-md px-2 py-1"
          style={{ display: "inline-flex" }}
        >
          <motion.img
            src={logo}
            alt="Persona+ logo"
            className="w-10 h-10 rounded-full object-cover"
            style={{
              boxShadow: "0 0 20px rgba(74, 139, 175,0.7), 0 0 40px rgba(74, 139, 175,0.3)",
              border: "1px solid rgba(200, 216, 228,0.5)",
            }}
          />
          <span className="text-2xl md:text-3xl font-bold tracking-tight text-gradient">Persona+</span>
        </Link>
        <div className="hidden md:flex items-center gap-8 font-medium text-foreground">
          <a href="/#about" className="hover:text-teal transition-colors">About</a>
          <a href="/#events" className="hover:text-teal transition-colors">Events</a>
          <Link to="/team" className="hover:text-teal transition-colors">Team</Link>
        </div>
      </nav>
    </motion.header>
  );
};

export default Navbar;
