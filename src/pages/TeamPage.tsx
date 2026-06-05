import { useEffect } from "react";
import CustomCursor from "@/components/CustomCursor";
import ScrollProgress from "@/components/ScrollProgress";
import Navbar from "@/components/Navbar";
import Team from "@/components/Team";
import OldTeam from "@/components/OldTeam";
import Footer from "@/components/Footer";

const TeamPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="relative bg-white text-foreground min-h-screen overflow-x-hidden">
      <CustomCursor />
      <ScrollProgress />
      <Navbar />
      <div className="pt-24">
        <Team />
        <OldTeam />
      </div>
      <Footer />
    </main>
  );
};

export default TeamPage;
