import { motion } from "framer-motion";
import { Download } from "lucide-react";
import Layout from "@/components/Layout";
import SeeMore from "@/components/SeeMore";

interface Project {
  id: string;
  name: string;
  shortDescription: string;
  fullDescription: string;
  configType: string;
  downloadUrl: string;
}

// Manually add your projects here
const projects: Project[] = [
  {
    id: "1",
    name: "Custom SMP Plugin",
    shortDescription: "A powerful custom plugin for Minecraft SMP servers.",
    fullDescription: "A powerful custom plugin for Minecraft SMP servers with advanced features including custom enchantments, economy system, land claiming, and much more. Built with performance in mind and tested on servers with 100+ players.",
    configType: "Plugin",
    downloadUrl: "#",
  },
  {
    id: "2",
    name: "Texture Pack v2",
    shortDescription: "High-quality texture pack for Minecraft 1.20+.",
    fullDescription: "High-quality texture pack for Minecraft 1.20+ featuring custom block textures, item redesigns, GUI overhaul, and unique particle effects. Optimized for both high-end and low-end systems.",
    configType: "Resource Pack",
    downloadUrl: "#",
  },
  {
    id: "3",
    name: "Server Setup Guide",
    shortDescription: "Complete server setup configuration for Paper.",
    fullDescription: "Complete server setup configuration for Paper with optimized settings, anti-cheat configuration, permission system, and essential plugins. Includes detailed documentation and setup instructions.",
    configType: "Server Setup",
    downloadUrl: "#",
  },
];

const Projects = () => {
  return (
    <Layout>
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="font-heading text-4xl md:text-5xl font-bold text-center mb-4"
          >
            <span className="text-gradient-red">Projects</span>
          </motion.h1>
          <p className="text-center text-muted-foreground mb-12 max-w-xl mx-auto">
            Browse and download our latest projects and configurations
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {projects.map((project, i) => (
              <motion.div
                key={project.id}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
                className="rounded-xl border border-border bg-card p-6 card-hover flex flex-col"
              >
                <span className="inline-block self-start px-3 py-1 rounded-full bg-primary/15 text-primary text-xs font-medium mb-3">
                  {project.configType}
                </span>
                <h3 className="font-heading text-xl font-semibold text-foreground mb-2">
                  {project.name}
                </h3>
                <SeeMore text={project.fullDescription} />
                <div className="mt-auto pt-5">
                  <a
                    href={project.downloadUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-medium btn-glow transition-transform hover:scale-105"
                  >
                    <Download size={16} />
                    Download
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Projects;
