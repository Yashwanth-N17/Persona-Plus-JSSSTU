import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/persona-logo.jpeg";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <>
      <header
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
            onClick={closeMenu}
            className="flex items-center gap-3 rounded-md px-2 py-1"
            style={{ display: "inline-flex" }}
          >
            <motion.img
              whileHover={{ scale: 1.05 }}
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
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8 font-medium text-foreground">
            <Link to="/#about" className="hover:text-teal transition-colors">About</Link>
            <Link to="/events" className="hover:text-teal transition-colors">Events</Link>
            <Link to="/team" className="hover:text-teal transition-colors">Team</Link>
            <Link to="/contact" className="hover:text-teal transition-colors">Contact</Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-teal p-2 focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[7900] bg-white pt-24 px-6 md:hidden flex flex-col gap-6 font-medium text-lg text-foreground border-b border-teal-pale/40"
          >
            <Link to="/#about" onClick={closeMenu} className="hover:text-teal transition-colors py-2 border-b border-teal-pale/20">About</Link>
            <Link to="/events" onClick={closeMenu} className="hover:text-teal transition-colors py-2 border-b border-teal-pale/20">Events</Link>
            <Link to="/team" onClick={closeMenu} className="hover:text-teal transition-colors py-2 border-b border-teal-pale/20">Team</Link>
            <Link to="/contact" onClick={closeMenu} className="hover:text-teal transition-colors py-2 border-b border-teal-pale/20">Contact</Link>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
