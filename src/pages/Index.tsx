import CustomCursor from "@/components/CustomCursor";
import ScrollProgress from "@/components/ScrollProgress";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import CompletedEvents from "@/components/CompletedEvents";
import Coordinator from "@/components/Coordinator";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="relative bg-white text-foreground min-h-screen overflow-x-hidden">
      <CustomCursor />
      <ScrollProgress />
      <Navbar />
      <Hero />
      <About />
      <CompletedEvents />
      <Coordinator />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
