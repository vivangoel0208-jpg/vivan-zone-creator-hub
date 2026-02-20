import { motion } from "framer-motion";
import { ExternalLink, Loader2 } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import Layout from "@/components/Layout";

interface VideoItem {
  title: string;
  link: string;
  pubDate: string;
  thumbnail: string;
}

const CHANNEL_ID = "UC5AFDEZuWZWDr-Dg0eh6h1g";
const RSS_URL = `https://api.rss2json.com/v1/api.json?rss_url=https://www.youtube.com/feeds/videos.xml?channel_id=${CHANNEL_ID}`;

const fetchVideos = async (): Promise<VideoItem[]> => {
  const res = await fetch(RSS_URL);
  if (!res.ok) throw new Error("Failed to fetch videos");
  const data = await res.json();

  return (data.items || [])
    .slice(0, 15)
    .map((item: any) => {
      const videoId = item.link?.match(/[?&]v=([^&]+)/)?.[1] || "";
      return {
        title: item.title,
        link: item.link,
        pubDate: new Date(item.pubDate).toLocaleDateString("en-US", {
          year: "numeric",
          month: "short",
          day: "numeric",
        }),
        thumbnail: `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`,
      };
    });
};

const Videos = () => {
  const { data: videos, isLoading, error } = useQuery({
    queryKey: ["youtube-videos"],
    queryFn: fetchVideos,
    staleTime: 1000 * 60 * 10,
  });

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

          {isLoading && (
            <div className="flex justify-center py-20">
              <Loader2 className="w-8 h-8 animate-spin text-primary" />
            </div>
          )}

          {error && (
            <p className="text-center text-destructive">Failed to load videos. Please try again later.</p>
          )}

          {videos && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {videos.map((video, i) => (
                <motion.div
                  key={video.link}
                  initial={{ y: 30, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.4 }}
                  className="rounded-xl border border-border bg-card overflow-hidden card-hover group"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      loading="lazy"
                      className="w-full aspect-video object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-300" />
                  </div>
                  <div className="p-5">
                    <h3 className="font-heading text-lg font-semibold text-foreground mb-2 line-clamp-2">
                      {video.title}
                    </h3>
                    <p className="text-xs text-muted-foreground mb-4">{video.pubDate}</p>
                    <a
                      href={video.link}
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
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Videos;
