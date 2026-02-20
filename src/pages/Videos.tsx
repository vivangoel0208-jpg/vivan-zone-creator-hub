import { motion } from "framer-motion";
import Layout from "@/components/Layout";

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

          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="max-w-4xl mx-auto rounded-xl border border-border bg-card overflow-hidden"
          >
            <iframe
              src="https://www.youtube.com/embed?listType=playlist&list=UU5AFDEZuWZWDr-Dg0eh6h1g"
              className="w-full aspect-video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="Vivan Zone YouTube Videos"
            />
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Videos;
