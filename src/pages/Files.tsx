import { motion } from "framer-motion";
import { Download, FileText } from "lucide-react";
import Layout from "@/components/Layout";
import SeeMore from "@/components/SeeMore";

interface FileItem {
  id: string;
  name: string;
  description: string;
  fullDescription: string;
  fileSize: string;
  downloadUrl: string;
}

// Manually add your files here
const files: FileItem[] = [
  {
    id: "1",
    name: "Server Config Pack",
    description: "Optimized server configuration files.",
    fullDescription: "Optimized server configuration files for Paper 1.20+ including server.properties, paper-global.yml, spigot.yml, and bukkit.yml. All settings are tuned for maximum performance while maintaining vanilla-like gameplay.",
    fileSize: "2.4 MB",
    downloadUrl: "#",
  },
  {
    id: "2",
    name: "Custom Datapack",
    description: "Vanilla+ datapack with quality of life features.",
    fullDescription: "Vanilla+ datapack with quality of life features including custom crafting recipes, armor stand manipulation, multiplayer sleep, and more. Compatible with Minecraft 1.20+.",
    fileSize: "850 KB",
    downloadUrl: "#",
  },
  {
    id: "3",
    name: "World Download",
    description: "Featured world from latest video.",
    fullDescription: "Featured world from latest video including all builds, redstone contraptions, and custom terrain generation. Optimized for exploration and showcasing.",
    fileSize: "156 MB",
    downloadUrl: "#",
  },
];

const Files = () => {
  return (
    <Layout>
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="font-heading text-4xl md:text-5xl font-bold text-center mb-4"
          >
            <span className="text-gradient-red">Files</span>
          </motion.h1>
          <p className="text-center text-muted-foreground mb-12 max-w-xl mx-auto">
            Download files, configs, and resources
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {files.map((file, i) => (
              <motion.div
                key={file.id}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
                className="rounded-xl border border-border bg-card p-6 card-hover flex flex-col"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-primary/15 text-primary">
                    <FileText size={20} />
                  </div>
                  <div>
                    <h3 className="font-heading text-lg font-semibold text-foreground">
                      {file.name}
                    </h3>
                    <span className="text-xs text-muted-foreground">{file.fileSize}</span>
                  </div>
                </div>
                <SeeMore text={file.fullDescription} />
                <div className="mt-auto pt-5">
                  <a
                    href={file.downloadUrl}
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

export default Files;
