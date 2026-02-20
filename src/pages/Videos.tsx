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
            Latest uploads from Vivan Zone
          </p>

          <div className="max-w-6xl mx-auto">
            <div className="aspect-video w-full rounded-xl overflow-hidden border border-border bg-card shadow-lg">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed?listType=playlist&list=UU5AFDEZuWZWDr-Dg0eh6h1g"
                title="Vivan Zone YouTube Videos"
                frameBorder="0"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Videos;
