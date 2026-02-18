import { motion } from "framer-motion";
import { ExternalLink, ArrowRight } from "lucide-react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6 },
  }),
};

const projects = [
  {
    title: "Free Rein Projects",
    url: "https://free-rein-projects.netlify.app",
  },
  {
    title: "Roots Fest Demo",
    url: "https://roots-fest-demo.netlify.app",
  },
  {
    title: "Goddess Interior",
    url: "https://goddess-interior.netlify.app",
  },
  {
    title: "BGJ Projects",
    url: "https://bgj-projects.lovable.app",
  },
];

const Portfolio = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding bg-card">
        <div className="container mx-auto text-center max-w-3xl">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-heading text-4xl md:text-5xl font-bold mb-6"
          >
            Our <span className="text-gold-gradient">Portfolio</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground text-lg"
          >
            A selection of projects showcasing the quality, versatility, and results-driven approach behind every website we build.
          </motion.p>
        </div>
      </section>

      {/* Projects */}
      <section className="section-padding bg-background">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((p, i) => (
              <motion.a
                key={p.title}
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={i}
                className="glass-card rounded-lg overflow-hidden hover:border-primary/50 transition-all group block"
              >
                {/* Live site preview */}
                <div className="relative w-full aspect-[16/10] overflow-hidden bg-muted">
                  <iframe
                    src={p.url}
                    title={p.title}
                    className="w-[1280px] h-[800px] origin-top-left pointer-events-none"
                    style={{ transform: "scale(0.5)", transformOrigin: "top left" }}
                    loading="lazy"
                    sandbox="allow-scripts allow-same-origin"
                  />
                </div>
                <div className="p-5 flex items-center justify-between">
                  <h3 className="font-heading text-lg font-semibold">{p.title}</h3>
                  <ExternalLink className="text-primary opacity-0 group-hover:opacity-100 transition-opacity" size={18} />
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* More coming */}
      <section className="section-padding bg-card text-center">
        <div className="container mx-auto max-w-2xl">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            More Projects <span className="text-gold-gradient">Coming Soon</span>
          </h2>
          <p className="text-muted-foreground mb-8">
            We're constantly working on new projects. Want your business to be our next success story?
          </p>
          <Button variant="gold" size="lg" asChild>
            <Link to="/contact">Start Your Project <ArrowRight className="ml-1" /></Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Portfolio;
