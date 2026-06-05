import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent successfully!", {
      description: "We'll get back to you as soon as possible.",
    });
  };

  return (
    <section id="contact" className="relative py-24 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl sm:text-6xl font-bold text-gradient mb-4">Get in Touch</h2>
        <p className="text-teal/70 max-w-2xl mx-auto text-lg">
          Have questions or want to collaborate? Reach out to us and our team will be happy to assist you.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          <div className="glass-card-strong p-8 rounded-3xl glow-border">
            <h3 className="text-2xl font-bold text-foreground mb-6">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-teal-pale/30 text-teal shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-foreground text-lg">Address</h4>
                  <p className="text-teal/80 leading-relaxed mt-1">
                    The Training and Placement Cell<br />
                    JSS Science and Technology University<br />
                    Mysuru, 570006
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-teal-pale/30 text-teal shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-foreground text-lg">Email</h4>
                  <a href="mailto:persona.jssstu@gmail.com" className="text-teal/80 hover:text-teal transition-colors leading-relaxed mt-1 block">
                    persona.jssstu@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <form onSubmit={handleSubmit} className="glass-card-strong p-8 rounded-3xl glow-border flex flex-col gap-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label htmlFor="firstName" className="text-sm font-bold text-foreground">First Name</label>
                <input 
                  type="text" 
                  id="firstName" 
                  required
                  className="bg-transparent border border-teal-pale/50 rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-teal focus:ring-1 focus:ring-teal transition-all"
                  placeholder="John"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="lastName" className="text-sm font-bold text-foreground">Last Name</label>
                <input 
                  type="text" 
                  id="lastName" 
                  required
                  className="bg-transparent border border-teal-pale/50 rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-teal focus:ring-1 focus:ring-teal transition-all"
                  placeholder="Doe"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-sm font-bold text-foreground">Email Address</label>
              <input 
                type="email" 
                id="email" 
                required
                className="bg-transparent border border-teal-pale/50 rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-teal focus:ring-1 focus:ring-teal transition-all"
                placeholder="john@example.com"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="text-sm font-bold text-foreground">Message</label>
              <textarea 
                id="message" 
                required
                rows={4}
                className="bg-transparent border border-teal-pale/50 rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-teal focus:ring-1 focus:ring-teal transition-all resize-none"
                placeholder="How can we help you?"
              />
            </div>

            <button 
              type="submit"
              className="mt-2 w-full flex items-center justify-center gap-2 bg-teal text-white font-bold py-3 px-6 rounded-xl shadow-lg hover:bg-teal-light hover:-translate-y-1 transition-all duration-300"
            >
              Send Message <Send size={18} />
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
