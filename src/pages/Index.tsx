import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Youtube, MessageCircle, Play, FolderOpen, FileDown, Users } from "lucide-react";
import Layout from "@/components/Layout";
import DiscordWidget from "@/components/DiscordWidget";
import logo from "@/assets/logo.jpg";

const actionButtons = [
  { label: "View Videos", path: "/videos", icon: Play },
  { label: "View Projects", path: "/projects", icon: FolderOpen },
  { label: "View Files", path: "/files", icon: FileDown },
  { label: "Meet The Team", path: "/team", icon: Users },
];

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-grid">
        {/* Red glow background */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[600px] h-[600px] rounded-full bg-primary/10 blur-[150px] animate-pulse-red" />
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <img
              src={logo}
              alt="Vivan Zone"
              className="mx-auto h-32 w-32 md:h-40 md:w-40 rounded-full border-4 border-primary glow-red-lg animate-float"
            />
          </motion.div>

          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mt-8 font-heading text-5xl md:text-7xl font-bold tracking-tight"
          >
            <span className="text-gradient-red">VIVAN</span>{" "}
            <span className="text-foreground">ZONE</span>
          </motion.h1>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="mt-4 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto"
          >
            Gaming content creator, Minecraft enthusiast, and community builder. 
            Join the zone and explore epic content, projects, and more.
          </motion.p>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="mt-8 flex flex-wrap justify-center gap-4"
          >
            <a
              href="https://www.youtube.com/channel/UC5AFDEZuWZWDr-Dg0eh6h1g?sub_confirmation=1"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-lg bg-primary text-primary-foreground font-heading font-semibold text-lg btn-glow transition-transform hover:scale-105"
            >
              <Youtube size={22} />
              YouTube
            </a>
            <a
              href="https://discord.com/invite/eK4Drc7tGE"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-lg border-2 border-primary text-primary font-heading font-semibold text-lg transition-all hover:bg-primary hover:text-primary-foreground hover:scale-105"
            >
              <MessageCircle size={22} />
              Discord
            </a>
          </motion.div>
        </div>
      </section>

      {/* Discord Widget Section */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-8">
            Join Our <span className="text-gradient-red">Community</span>
          </h2>
          <DiscordWidget />
        </div>
      </section>

      {/* Action Buttons Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-12">
            Explore <span className="text-gradient-red">Vivan Zone</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {actionButtons.map((btn, i) => (
              <motion.div
                key={btn.path}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
              >
                <Link
                  to={btn.path}
                  className="flex flex-col items-center gap-4 p-8 rounded-xl border border-border bg-card card-hover text-center group"
                >
                  <div className="p-4 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                    <btn.icon size={28} />
                  </div>
                  <span className="font-heading text-lg font-semibold text-foreground">
                    {btn.label}
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
