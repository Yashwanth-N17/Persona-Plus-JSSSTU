import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Image as ImageIcon } from "lucide-react";
import { Link } from "react-router-dom";

type CompletedEvent = {
  id: number;
  title: string;
  date: string;
  description: string;
  coverImage: string;
  galleryImages: string[];
};

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

const CompletedEvents = () => {
  const [selectedEvent, setSelectedEvent] = useState<CompletedEvent | null>(null);

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

  return (
    <section id="events" className="relative py-24 px-6 max-w-7xl mx-auto overflow-hidden">
      <div className="text-center mb-16 relative z-10">
        <h2 className="text-4xl sm:text-6xl font-bold text-gradient mb-4">Past Highlights</h2>
        <p className="text-teal/70 max-w-2xl mx-auto text-lg">
          A glimpse into the milestones that define our legacy.
        </p>
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
        className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto"
      >
        {completedEvents.map((event) => (
          <motion.div
            key={event.id}
            variants={item}
            onClick={() => setSelectedEvent(event)}
            className="glass-card-strong glow-border rounded-2xl overflow-hidden cursor-pointer group hover:-translate-y-2 transition-transform duration-300 flex flex-col"
          >
            <div className="relative w-full h-48 overflow-hidden">
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-300 z-10" />
              <img 
                src={event.coverImage} 
                alt={event.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute bottom-3 left-3 z-20">
                <span className="inline-flex px-3 py-1 rounded-md bg-white/95 text-teal text-[10px] sm:text-xs font-bold tracking-wider uppercase shadow-md">
                  {event.date}
                </span>
              </div>
            </div>
            
            <div className="p-6 flex-1 flex flex-col">
              <h3 className="text-lg sm:text-xl font-bold mb-2 text-foreground group-hover:text-teal transition-colors line-clamp-1">{event.title}</h3>
              <p className="text-teal/70 text-sm leading-relaxed line-clamp-2 flex-1">
                {event.description}
              </p>
              <div className="mt-4 flex items-center text-xs font-bold text-teal opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                View Details <span className="ml-1 text-base leading-none">&rarr;</span>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <div className="text-center mt-12 relative z-10">
        <Link 
          to="/events"
          className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-teal-pale/20 border border-teal-pale/50 text-teal font-bold shadow-sm hover:bg-teal hover:text-white hover:-translate-y-1 transition-all duration-300"
        >
          View Full Event Roadmap <span>&rarr;</span>
        </Link>
      </div>

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
  );
};

export default CompletedEvents;
