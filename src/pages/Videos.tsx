import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import Layout from "@/components/Layout";

interface Video {
  id: string;
  title: string;
  thumbnail: string;
  publishDate: string;
  youtubeUrl: string;
}

// Manually add your videos here
const videos: Video[] = [
  {
    id: "1",
    title: "Minecraft Video 1",
    thumbnail: "https://img.youtube.com/vi/r1BN35VWQOQ/maxresdefault.jpg",
    publishDate: "2026-02-17",
    youtubeUrl: "https://youtu.be/78ialiOA5mg",
  },
  {
    id: "2",
    title: "Minecraft Video 2",
    thumbnail: "https://img.youtube.com/vi/zA0BRypOCpw/maxresdefault.jpg",
    publishDate: "2026-02-14",
    youtubeUrl: "https://youtu.be/BWBfKf2Fizo",
  },
  {
    id: "3",
    title: "Minecraft Video 3",
    thumbnail: "https://img.youtube.com/vi/Ew85rbaiyQM/maxresdefault.jpg",
    publishDate: "2026-02-11",
    youtubeUrl: "https://youtu.be/7e9uNk9MK0g",
  },
  {
    id: "4",
    title: "Minecraft Video 4",
    thumbnail: "https://img.youtube.com/vi/7e9uNk9MK0g/maxresdefault.jpg",
    publishDate: "2026-02-08",
    youtubeUrl: "https://youtu.be/Ew85rbaiyQM",
  },
  {
    id: "5",
    title: "Minecraft Video 5",
    thumbnail: "https://img.youtube.com/vi/BWBfKf2Fizo/maxresdefault.jpg",
    publishDate: "2026-02-05",
    youtubeUrl: "https://youtu.be/zA0BRypOCpw",
  },
  {
    id: "6",
    title: "Minecraft Video 6",
    thumbnail: "https://img.youtube.com/vi/78ialiOA5mg/maxresdefault.jpg",
    publishDate: "2026-02-01",
    youtubeUrl: "https://youtu.be/r1BN35VWQOQ",
  },
];

const Videos = () => {
  return (
    <Layout>
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="font-heading text-4xl md:text-5xl font-bold text-center mb-4"
          >
            <span className="text-gradient-red">Videos</span>
          </motion.h1>
          <p className="text-center text-muted-foreground mb-12 max-w-xl mx-auto">
            Check out the latest content from Vivan Zone
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {videos.map((video, i) => (
              <motion.div
                key={video.id}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
                className="rounded-xl border border-border bg-card overflow-hidden card-hover group"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full aspect-video object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-300" />
                </div>
                <div className="p-5">
                  <h3 className="font-heading text-lg font-semibold text-foreground mb-2 line-clamp-2">
                    {video.title}
                  </h3>
                  <p className="text-xs text-muted-foreground mb-4">{video.publishDate}</p>
                  <a
                    href={video.youtubeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-medium btn-glow transition-transform hover:scale-105"
                  >
                    <ExternalLink size={16} />
                    Watch
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

export default Videos;
