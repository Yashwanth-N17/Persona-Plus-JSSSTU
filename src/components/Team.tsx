import { motion } from "framer-motion";
import { Linkedin, Github } from "lucide-react";

// Current team data
const teamData = [
  {
    id: 1,
    name: "Chinmaya M Atreya",
    role: "President",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=400&auto=format&fit=crop",
  },
  {
    id: 2,
    name: "Harish Gowda J",
    role: "Vice President",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop",
  },
  {
    id: 3,
    name: "Sharanya M H",
    role: "General Secretary",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=400&auto=format&fit=crop",
  },
  {
    id: 4,
    name: "R Teksha Jain",
    role: "Principal Program Coordinator",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=400&auto=format&fit=crop",
  },
  {
    id: 5,
    name: "Saina S kumar",
    role: "Design Lead",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400&auto=format&fit=crop",
  },
  {
    id: 6,
    name: "Sughosh R kulkarni",
    role: "Design Lead",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=400&auto=format&fit=crop",
  },
  {
    id: 7,
    name: "Vasundhara premkumar",
    role: "Event Lead",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=400&auto=format&fit=crop",
  },
  {
    id: 8,
    name: "Kritika bhat",
    role: "Event Lead",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=400&auto=format&fit=crop",
  },
  {
    id: 9,
    name: "Vishwas A Gowda",
    role: "PR Lead",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=400&auto=format&fit=crop",
  },
  {
    id: 10,
    name: "Yashwanth N",
    role: "Tech Lead",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400&auto=format&fit=crop",
  },
  {
    id: 11,
    name: "Maanya",
    role: "Editorial Lead",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=400&auto=format&fit=crop",
  }
];

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, scale: 0.9 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
};

const Team = () => {
  return (
    <section id="team" className="relative py-24 px-6 max-w-7xl mx-auto min-h-[80vh]">
      <div className="text-center mb-16">
        <h2 className="text-4xl sm:text-6xl font-bold text-gradient mb-4">Meet The Team</h2>
        <p className="text-teal/70 max-w-2xl mx-auto text-lg">
          The passionate minds behind Persona Plus, dedicated to creating incredible experiences for students.
        </p>
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12"
      >
        {teamData.map((member) => (
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
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Team;
