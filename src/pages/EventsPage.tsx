import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Image as ImageIcon } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import ScrollProgress from "@/components/ScrollProgress";

type UpcomingEvent = {
  id: number;
  title: string;
  date: string;
  description: string;
};

type CompletedEvent = {
  id: number;
  title: string;
  date: string;
  description: string;
  coverImage: string;
  galleryImages: string[];
};

const upcomingEvents: UpcomingEvent[] = [
  {
    id: 1,
    title: "Annual Debate Championship",
    date: "October 15, 2024",
    description: "Join us for our flagship debate event where students from all branches compete to showcase their speaking and critical thinking skills.",
  },
  {
    id: 2,
    title: "Leadership Workshop Series",
    date: "November 5, 2024",
    description: "An interactive workshop led by industry veterans focusing on building confident leaders for tomorrow.",
  },
  {
    id: 3,
    title: "Mock Interviews & Resume Review",
    date: "December 10, 2024",
    description: "Prepare for placement season with 1-on-1 mock interviews and professional resume critiques.",
  }
];

const completedEvents: CompletedEvent[] = [
  {
    id: 101,
    title: "Prep2Place 2025",
    date: "November 22-23, 2025",
    description: "Our flagship mock placement drive designed to simulate real-world recruitment. It featured online aptitude assessments followed by rigorous Technical and HR interviews conducted by placed seniors. The immersive, high-pressure environment provided students with critical feedback on communication, body language, and resume building, equipping them with the confidence needed for actual placement season.",
    coverImage: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=600&auto=format&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1544531586-fde5298cdd40?q=80&w=400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1515169067868-5387ec356754?q=80&w=400&auto=format&fit=crop"
    ]
  },
  {
    id: 102,
    title: "Young Alumni Meet 4.0",
    date: "May 16, 2026",
    description: "Successfully organized by Persona+ in association with the Training & Placement Cell. Featuring Chief Guest Mr. Shripati Bhat (Chief Product Officer at Engati), this meet offered students an incredible opportunity to gain insights on industry trends, product building, and career growth while building meaningful connections with our esteemed alumni.",
    coverImage: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=600&auto=format&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1475721025505-23fa6808f6b6?q=80&w=400&auto=format&fit=crop"
    ]
  },

];

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] } },
};

const EventsPage = () => {
  const [activeTab, setActiveTab] = useState<"upcoming" | "completed">("upcoming");
  const [selectedEvent, setSelectedEvent] = useState<CompletedEvent | null>(null);

  // Prevent scrolling when modal is open
  useEffect(() => {
    if (selectedEvent) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedEvent]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="relative bg-white text-foreground min-h-screen overflow-x-hidden">
      <CustomCursor />
      <ScrollProgress />
      <Navbar />
      <div className="pt-24">
        <section id="events" className="relative py-16 px-6 max-w-7xl mx-auto overflow-hidden min-h-[80vh]">
      <div className="text-center mb-16 relative z-10">
        <h2 className="text-4xl sm:text-6xl font-bold text-gradient mb-6">Our Events</h2>
        <p className="text-teal/70 max-w-2xl mx-auto text-lg mb-10">
          Discover what's next on our roadmap, or explore the legacy of our past milestones.
        </p>

        {/* Toggle / Tabs */}
        <div className="inline-flex items-center p-1.5 bg-teal-pale/20 rounded-full border border-teal-pale/40 shadow-sm">
          {(["upcoming", "completed"] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`relative px-8 sm:px-12 py-3 rounded-full text-sm sm:text-base font-bold tracking-wide transition-all duration-300 capitalize ${
                activeTab === tab ? "text-white" : "text-teal hover:text-teal-light"
              }`}
            >
              {activeTab === tab && (
                <motion.div
                  layoutId="eventTab"
                  className="absolute inset-0 bg-teal rounded-full"
                  initial={false}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
              <span className="relative z-10">{tab} Events</span>
            </button>
          ))}
        </div>
      </div>

      <AnimatePresence mode="wait">
        {activeTab === "upcoming" ? (
          /* UPCOMING EVENTS ROADMAP */
          <motion.div
            key="upcoming"
            variants={container}
            initial="hidden"
            animate="show"
            exit={{ opacity: 0, y: -20, transition: { duration: 0.2 } }}
            className="relative max-w-5xl mx-auto mt-12"
          >
            {/* Central vertical line */}
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-1 md:-ml-[2px] bg-gradient-to-b from-transparent via-teal/30 to-transparent rounded-full" />

            <div className="flex flex-col space-y-12 sm:space-y-16">
              {upcomingEvents.map((event, index) => {
                const isEven = index % 2 === 0;
                return (
                  <motion.div
                    key={event.id}
                    variants={item}
                    className={`flex flex-col md:flex-row items-start md:items-center w-full ${
                      isEven ? "md:flex-row-reverse" : ""
                    }`}
                  >
                    <div className="hidden md:block md:w-1/2" />
                    
                    <div className="absolute left-6 md:left-1/2 w-5 h-5 rounded-full bg-teal shadow-[0_0_20px_rgba(74,139,175,0.8)] border-4 border-white transform -translate-x-[10px] md:-translate-x-[10px] mt-8 md:mt-0 z-20" />

                    <div className={`w-full md:w-1/2 pl-16 pr-0 md:px-12 ${isEven ? "md:pr-16 md:pl-0 text-left md:text-right" : "md:pl-16 md:pr-0 text-left"}`}>
                      <div className="glass-card-strong glow-border p-8 rounded-3xl relative overflow-hidden transition-all duration-300 hover:-translate-y-1">
                        <div className={`inline-flex px-4 py-1.5 rounded-full bg-teal-pale/40 text-teal text-sm font-bold tracking-wider mb-5 ${isEven ? "md:ml-auto" : ""}`}>
                          {event.date}
                        </div>
                        <h3 className="text-2xl font-bold mb-4 text-foreground">{event.title}</h3>
                        <p className="text-teal/70 text-base leading-relaxed">
                          {event.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        ) : (
          /* COMPLETED EVENTS GRID */
          <motion.div
            key="completed"
            variants={container}
            initial="hidden"
            animate="show"
            exit={{ opacity: 0, y: -20, transition: { duration: 0.2 } }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-5xl mx-auto mt-12"
          >
            {completedEvents.map((event) => (
              <motion.div
                key={event.id}
                variants={item}
                onClick={() => setSelectedEvent(event)}
                className="glass-card-strong glow-border rounded-3xl overflow-hidden cursor-pointer group hover:-translate-y-2 transition-transform duration-300 flex flex-col"
              >
                {/* Cover Image */}
                <div className="relative w-full h-56 overflow-hidden">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-300 z-10" />
                  <img 
                    src={event.coverImage} 
                    alt={event.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute bottom-4 left-4 z-20">
                    <span className="inline-flex px-3 py-1 rounded-full bg-white/90 text-teal text-xs font-bold tracking-wider shadow-md">
                      {event.date}
                    </span>
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-8 flex-1 flex flex-col">
                  <h3 className="text-2xl font-bold mb-3 text-foreground group-hover:text-teal transition-colors line-clamp-1">{event.title}</h3>
                  <p className="text-teal/70 text-base leading-relaxed line-clamp-2 flex-1">
                    {event.description}
                  </p>
                  <div className="mt-6 flex items-center text-sm font-bold text-teal opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    View full gallery <span className="ml-2 text-lg leading-none">&rarr;</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Completed Event Modal Overlay */}
      <AnimatePresence>
        {selectedEvent && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedEvent(null)}
            className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-3xl bg-white/95 backdrop-blur-xl border border-teal-pale/50 rounded-3xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)] overflow-hidden flex flex-col max-h-[90vh]"
            >
              <button 
                onClick={() => setSelectedEvent(null)}
                className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-black/20 text-white hover:bg-black/50 backdrop-blur-md transition-all"
              >
                <X size={20} />
              </button>
              
              <div className="w-full h-56 sm:h-72 relative shrink-0">
                <img 
                  src={selectedEvent.coverImage} 
                  alt={selectedEvent.title} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-6 left-6 right-8">
                  <div className="inline-flex px-3 py-1 rounded-md bg-teal/90 text-white text-xs font-bold tracking-widest mb-3 uppercase shadow-sm">
                    {selectedEvent.date}
                  </div>
                  <h3 className="text-2xl sm:text-4xl font-bold text-white leading-tight drop-shadow-md">{selectedEvent.title}</h3>
                </div>
              </div>
              
              <div className="p-6 sm:p-10 overflow-y-auto bg-gradient-to-b from-white to-teal-pale/10">
                <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-8 font-medium">
                  {selectedEvent.description}
                </p>

                <h4 className="text-sm font-bold text-teal mb-4 flex items-center gap-2 uppercase tracking-wider">
                  <ImageIcon size={18} /> Event Gallery
                </h4>
                <div className="grid grid-cols-2 gap-3 sm:gap-5">
                  {selectedEvent.galleryImages.map((imgUrl, i) => (
                    <div key={i} className="relative h-32 sm:h-48 rounded-2xl overflow-hidden shadow-sm group">
                      <div className="absolute inset-0 bg-teal/20 opacity-0 group-hover:opacity-100 transition-opacity z-10 pointer-events-none" />
                      <img 
                        src={imgUrl} 
                        alt={`Gallery photo ${i+1}`}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                      />
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
        </section>
      </div>
      <Footer />
    </main>
  );
};

export default EventsPage;
