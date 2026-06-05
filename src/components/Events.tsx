import { motion } from "framer-motion";

const mockEvents = [
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
  },
  {
    id: 4,
    title: "Persona Plus Mega Event",
    date: "February 20, 2025",
    description: "Our biggest annual soft skills and personality development summit featuring keynote speakers and intense competitions.",
  }
];

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.2 } },
};

const item = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] } },
};

const Events = () => {
  return (
    <section id="events" className="relative py-32 px-6 max-w-7xl mx-auto overflow-hidden">
      <div className="text-center mb-20 relative z-10">
        <h2 className="text-4xl sm:text-6xl font-bold text-gradient mb-6">Event Roadmap</h2>
        <p className="text-teal/70 max-w-2xl mx-auto text-lg">
          Follow our journey. Here are the major milestones and events planned for the year.
        </p>
      </div>

      <div className="relative max-w-5xl mx-auto">
        {/* Central vertical line */}
        <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-1 md:-ml-[2px] bg-gradient-to-b from-transparent via-teal/30 to-transparent rounded-full" />

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.05 }}
          className="relative z-10 flex flex-col space-y-12 sm:space-y-16"
        >
          {mockEvents.map((event, index) => {
            const isEven = index % 2 === 0;
            return (
              <motion.div
                key={event.id}
                variants={item}
                className={`flex flex-col md:flex-row items-start md:items-center w-full ${
                  isEven ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Spacer for one side (desktop only) */}
                <div className="hidden md:block md:w-1/2" />

                {/* Center dot */}
                <div className="absolute left-6 md:left-1/2 w-5 h-5 rounded-full bg-teal shadow-[0_0_20px_rgba(74,139,175,0.8)] border-4 border-white transform -translate-x-[10px] md:-translate-x-[10px] mt-8 md:mt-0 z-20" />

                {/* Content Card */}
                <div className={`w-full md:w-1/2 pl-16 pr-0 md:px-12 ${isEven ? "md:pr-16 md:pl-0 text-left md:text-right" : "md:pl-16 md:pr-0 text-left"}`}>
                  <div className="glass-card-strong glow-border p-8 rounded-3xl hover:-translate-y-2 transition-transform duration-300 relative group overflow-hidden">
                    {/* Subtle hover background highlight */}
                    <div className="absolute inset-0 bg-teal/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                    
                    <div className={`inline-flex px-4 py-1.5 rounded-full bg-teal-pale/40 text-teal text-sm font-bold tracking-wider mb-5 ${isEven ? "md:ml-auto" : ""}`}>
                      {event.date}
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-bold mb-4 text-foreground">{event.title}</h3>
                    <p className="text-teal/70 text-base sm:text-lg leading-relaxed">
                      {event.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Events;
