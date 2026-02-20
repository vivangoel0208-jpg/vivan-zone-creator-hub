import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Download, FileText, Search, X } from "lucide-react";
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
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredFiles = useMemo(() => {
    if (!searchQuery.trim()) return files;
    return files.filter((f) => f.name.toLowerCase().includes(searchQuery.toLowerCase()));
  }, [searchQuery]);

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
          <div className="flex items-center justify-between mb-12 max-w-xl mx-auto">
            <p className="text-muted-foreground flex-1 text-center">
              Download files, configs, and resources
            </p>
            <button
              onClick={() => { setSearchOpen(!searchOpen); setSearchQuery(""); }}
              className="ml-4 p-2 rounded-lg border border-border bg-card text-foreground hover:bg-accent transition-colors"
              aria-label="Toggle search"
            >
              {searchOpen ? <X size={20} /> : <Search size={20} />}
            </button>
          </div>

          <AnimatePresence>
            {searchOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="max-w-md mx-auto mb-8 overflow-hidden"
              >
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search files by name..."
                  className="w-full rounded-lg border border-border bg-card px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  autoFocus
                />
              </motion.div>
            )}
          </AnimatePresence>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {filteredFiles.length === 0 && (
              <p className="col-span-full text-center text-muted-foreground py-10">No files found.</p>
            )}
            {filteredFiles.map((file, i) => (
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
