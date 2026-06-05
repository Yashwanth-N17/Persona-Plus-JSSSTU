import logo from "@/assets/persona-logo.jpeg";
import { Linkedin, Instagram, Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="relative pt-24 pb-8 px-6 bg-white overflow-hidden border-t border-teal-pale/30 mt-12">
      <div className="relative max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 mb-16">
          {/* Column 1: Brand & Address */}
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <img
                src={logo}
                alt="Persona+ logo"
                className="w-16 h-16 rounded-full object-cover shadow-[0_0_20px_rgba(74,139,175,0.4)] border border-teal-pale"
              />
              <h3 className="text-3xl font-bold text-foreground tracking-tight">
                Persona Plus
              </h3>
            </div>
            <div className="text-teal/80 space-y-4 mt-6">
              <div className="flex items-start gap-3">
                <MapPin size={20} className="shrink-0 mt-1" />
                <p className="leading-relaxed">
                  JSS Science and Technology University<br />
                  The Training and Placement Cell, Mysuru, 570006
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={20} className="shrink-0" />
                <a href="mailto:persona.jssstu@gmail.com" className="hover:text-teal transition-colors">
                  persona.jssstu@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Important Links */}
          <div className="md:justify-self-center space-y-6">
            <h4 className="text-xl font-bold text-foreground">IMPORTANT LINKS</h4>
            <div className="flex flex-col gap-3 text-teal/80 font-medium">
              <a href="https://jssstuniv.in/" target="_blank" rel="noreferrer" className="hover:text-teal transition-colors w-max">JSS STU Official</a>
              <Link to="/#about" className="hover:text-teal transition-colors w-max">About Us</Link>
              <Link to="/events" className="hover:text-teal transition-colors w-max">Events Timeline</Link>
              <Link to="/team" className="hover:text-teal transition-colors w-max">Executive Board</Link>
              <Link to="/contact" className="hover:text-teal transition-colors w-max">Contact Us</Link>
            </div>
          </div>

          {/* Column 3: Follow Us */}
          <div className="md:justify-self-end space-y-6">
            <h4 className="text-xl font-bold text-foreground">FOLLOW US</h4>
            <p className="text-teal/80 mb-4 max-w-sm">Stay updated with our latest soft skills workshops and events.</p>
            <div className="flex gap-4">
              <a href="https://www.linkedin.com/company/persona-plus-jssstu" target="_blank" rel="noreferrer" className="p-3 rounded-full bg-teal-pale/30 text-teal hover:bg-teal hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="https://www.instagram.com/persona_plus_jssstu" target="_blank" rel="noreferrer" className="p-3 rounded-full bg-teal-pale/30 text-teal hover:bg-teal hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="mailto:persona.jssstu@gmail.com" className="p-3 rounded-full bg-teal-pale/30 text-teal hover:bg-teal hover:text-white transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-teal-pale/40 text-center md:flex md:justify-between md:items-center">
          <p className="text-sm text-teal/80 font-medium mb-4 md:mb-0">
            Copyrights &copy; {new Date().getFullYear()} Persona Plus | JSS Science and Technology University
          </p>
          <p className="text-sm text-teal/80 font-medium">
            Developed by the Tech Board at Persona Plus
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
