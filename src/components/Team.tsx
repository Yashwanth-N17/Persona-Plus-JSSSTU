import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Linkedin, Github } from "lucide-react";

// Mock data structured by year
const teamData = {
  "2026-2027": [
    {
      id: 1,
      name: "John Doe",
      role: "President",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=400&auto=format&fit=crop",
    },
    {
      id: 2,
      name: "Jane Smith",
      role: "Vice President",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop",
    },
    {
      id: 3,
      name: "Alex Johnson",
      role: "Events Head",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=400&auto=format&fit=crop",
    },
    {
      id: 4,
      name: "Sarah Williams",
      role: "PR Head",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=400&auto=format&fit=crop",
    },
    {
      id: 5,
      name: "Michael Brown",
      role: "Editorial Head",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400&auto=format&fit=crop",
    },
    {
      id: 6,
      name: "Emily Davis",
      role: "Design Head",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=400&auto=format&fit=crop",
    }
  ],
  "2025-2026": [
    {
      id: 101,
      name: "Alice Walker",
      role: "President",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=400&auto=format&fit=crop",
    },
    {
      id: 102,
      name: "Bob Martin",
      role: "Vice President",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400&auto=format&fit=crop",
    },
    {
      id: 103,
      name: "Charlie Green",
      role: "Events Head",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=400&auto=format&fit=crop",
    },
    {
      id: 104,
      name: "Diana Prince",
      role: "PR Head",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=400&auto=format&fit=crop",
    }
  ]
};

const years = Object.keys(teamData);

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, scale: 0.9 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
};

const Team = () => {
  const [activeYear, setActiveYear] = useState<string>(years[0]);

  return (
    <section id="team" className="relative py-24 px-6 max-w-7xl mx-auto min-h-[80vh]">
      <div className="text-center mb-12">
        <h2 className="text-4xl sm:text-6xl font-bold text-gradient mb-4">Meet The Team</h2>
        <p className="text-teal/70 max-w-2xl mx-auto text-lg mb-10">
          The passionate minds behind Persona Plus, dedicated to creating incredible experiences for students.
        </p>

        {/* Toggle / Tabs */}
        <div className="inline-flex items-center p-1.5 bg-teal-pale/20 rounded-full border border-teal-pale/40 shadow-sm mb-12">
          {years.map((year) => (
            <button
              key={year}
              onClick={() => setActiveYear(year)}
              className={`relative px-6 sm:px-10 py-3 rounded-full text-sm sm:text-base font-bold tracking-wide transition-all duration-300 ${
                activeYear === year ? "text-white" : "text-teal hover:text-teal-light"
              }`}
            >
              {activeYear === year && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 bg-teal rounded-full"
                  initial={false}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
              <span className="relative z-10">{year} Core</span>
            </button>
          ))}
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeYear}
          variants={container}
          initial="hidden"
          animate="show"
          exit={{ opacity: 0, y: -20, transition: { duration: 0.2 } }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12"
        >
          {teamData[activeYear as keyof typeof teamData].map((member) => (
            <motion.div
              key={member.id}
              variants={item}
              className="flex flex-col items-center text-center group"
            >
              <div className="relative w-48 h-48 mb-6 rounded-full overflow-hidden border-4 border-white shadow-xl group-hover:border-teal-light transition-colors duration-300">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <h3 className="text-2xl font-bold text-foreground">{member.name}</h3>
              <p className="text-teal/70 font-medium mb-3">{member.role}</p>
              <div className="flex gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-2 group-hover:translate-y-0">
                <a href="#" className="p-2 rounded-full bg-teal-pale/50 text-teal hover:bg-teal hover:text-white transition-colors">
                  <Linkedin size={20} />
                </a>
                <a href="#" className="p-2 rounded-full bg-teal-pale/50 text-teal hover:bg-teal hover:text-white transition-colors">
                  <Github size={20} />
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
    </section>
  );
};

export default Team;
