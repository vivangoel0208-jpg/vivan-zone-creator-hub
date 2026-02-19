import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { Youtube, MessageCircle, Mail, Send } from "lucide-react";
import Layout from "@/components/Layout";
import DiscordWidget from "@/components/DiscordWidget";
import logo from "@/assets/logo.jpg";
import { useToast } from "@/hooks/use-toast";

const About = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setSending(true);

    // EmailJS integration - configure your service ID, template ID, and public key
    // For now, opens mailto as fallback
    const mailtoUrl = `mailto:vivanxdofficial@gmail.com?subject=Contact from ${formData.name}&body=${encodeURIComponent(formData.message)}%0A%0AFrom: ${formData.email}`;
    window.open(mailtoUrl, "_blank");

    toast({
      title: "Opening email client",
      description: "Your default email client should open with the message.",
    });

    setSending(false);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <Layout>
      {/* About Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="max-w-3xl mx-auto text-center"
          >
            <img
              src={logo}
              alt="Vivan XD"
              className="mx-auto h-28 w-28 rounded-full border-4 border-primary glow-red mb-6"
            />
            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-2">
              <span className="text-gradient-red">Vivan XD</span>
            </h1>
            <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
              Gaming content creator and Minecraft enthusiast. I create videos, build epic worlds,
              develop plugins, and grow an amazing community. Welcome to Vivan Zone — your hub for all things gaming.
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-4">
              <a
                href="https://www.youtube.com/channel/UC5AFDEZuWZWDr-Dg0eh6h1g?sub_confirmation=1"
                target="1469691281201430569"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-heading font-semibold btn-glow transition-transform hover:scale-105"
              >
                <Youtube size={20} />
                YouTube
              </a>
              <a
                href="https://discord.com/invite/eK4Drc7tGE"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border-2 border-primary text-primary font-heading font-semibold transition-all hover:bg-primary hover:text-primary-foreground hover:scale-105"
              >
                <MessageCircle size={20} />
                Discord
              </a>
            </div>
            <p className="text-sm text-muted-foreground flex items-center justify-center gap-2">
              <Mail size={16} />
              vivanxdofficial@gmail.com
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-8">
            <span className="text-gradient-red">Contact</span> Me
          </h2>
          <form onSubmit={handleSubmit} className="max-w-lg mx-auto space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <input
              type="email"
              placeholder="Your Email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <textarea
              placeholder="Your Message"
              required
              rows={5}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none"
            />
            <button
              type="submit"
              disabled={sending}
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-heading font-semibold text-lg btn-glow transition-transform hover:scale-105 disabled:opacity-50"
            >
              <Send size={18} />
              {sending ? "Sending..." : "Send Email"}
            </button>
          </form>
        </div>
      </section>

      {/* Discord Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-8">
            Join The <span className="text-gradient-red">Community</span>
          </h2>
          <DiscordWidget />
          <div className="text-center mt-8">
            <a
              href="https://discord.com/invite/eK4Drc7tGE"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-lg bg-primary text-primary-foreground font-heading font-semibold text-lg btn-glow transition-transform hover:scale-105"
            >
              <MessageCircle size={20} />
              Join Discord
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
