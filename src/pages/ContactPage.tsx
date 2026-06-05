import { useEffect } from "react";
import CustomCursor from "@/components/CustomCursor";
import ScrollProgress from "@/components/ScrollProgress";
import Navbar from "@/components/Navbar";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const ContactPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="relative bg-white text-foreground min-h-screen overflow-x-hidden pt-24">
      <CustomCursor />
      <ScrollProgress />
      <Navbar />
      <Contact />
      <Footer />
    </main>
  );
};

export default ContactPage;
