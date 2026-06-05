import { motion } from "framer-motion";

const pastTeams = [
  {
    year: "2023 - 2024",
    members: [
      { name: "Alice Walker", role: "President" },
      { name: "Bob Martin", role: "Vice President" },
      { name: "Charlie Green", role: "Events Head" },
      { name: "Diana Prince", role: "PR Head" }
    ]
  },
  {
    year: "2022 - 2023",
    members: [
      { name: "Eve Adams", role: "President" },
      { name: "Frank Wright", role: "Vice President" },
      { name: "Grace Lee", role: "Design Head" }
    ]
  }
];

const OldTeam = () => {
  return (
    <section className="relative py-24 px-6 max-w-5xl mx-auto border-t border-teal-pale/40 mt-16">
      <div className="text-center mb-16">
        <h2 className="text-3xl sm:text-5xl font-bold text-gradient mb-4">Old Core Team</h2>
        <p className="text-teal/70 max-w-2xl mx-auto text-lg">
          Honoring the alumni who built the foundation of Persona Plus.
        </p>
      </div>

      <div className="space-y-12">
        {pastTeams.map((team, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card-strong p-8 rounded-2xl"
          >
            <h3 className="text-2xl font-bold text-teal mb-6 border-b border-teal-pale pb-4">{team.year}</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {team.members.map((member, i) => (
                <div key={i} className="flex flex-col">
                  <span className="text-lg font-bold text-foreground">{member.name}</span>
                  <span className="text-teal/70">{member.role}</span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default OldTeam;
