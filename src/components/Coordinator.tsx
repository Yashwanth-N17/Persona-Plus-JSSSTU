import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const mockCoordinators = [
  {
    id: 1,
    name: "Dr. Faculty Name",
    role: "Chief Coordinator",
    image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=400&auto=format&fit=crop",
  },
  {
    id: 2,
    name: "Prof. Faculty Name",
    role: "Co-Coordinator",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop",
  }
];

const Coordinator = () => {
  return (
    <section className="relative py-24 px-6 max-w-5xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl sm:text-6xl font-bold text-gradient mb-4">Our Coordinators</h2>
        <p className="text-teal/70 max-w-2xl mx-auto text-lg">
          The guiding forces behind Persona Plus, ensuring our vision aligns with excellence.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row justify-center items-center gap-12 sm:gap-24 mb-16">
        {mockCoordinators.map((coordinator) => (
          <motion.div
            key={coordinator.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center text-center group"
          >
            <div className="relative w-56 h-56 mb-6 rounded-full overflow-hidden border-4 border-white shadow-[0_10px_30px_rgba(74,139,175,0.3)] group-hover:border-teal transition-colors duration-300">
              <img
                src={coordinator.image}
                alt={coordinator.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <h3 className="text-3xl font-bold text-foreground mb-2">{coordinator.name}</h3>
            <p className="text-teal/80 font-medium text-lg">{coordinator.role}</p>
          </motion.div>
        ))}
      </div>

      <div className="text-center">
        <Link 
          to="/team"
          className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-teal text-white font-semibold shadow-lg hover:bg-teal-light hover:-translate-y-1 transition-all duration-300"
        >
          View Our Full Team <span>&rarr;</span>
        </Link>
      </div>
    </section>
  );
};

export default Coordinator;
