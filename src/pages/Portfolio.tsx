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
    title: "Local Restaurant Website",
    category: "Custom Development",
    desc: "Built a modern, mobile-responsive website for a local restaurant including online menu, reservation system integration, and location map. Resulted in a significant increase in online reservations.",
    color: "from-primary/20 to-accent/10",
  },
  {
    title: "Small Business Portfolio",
    category: "Website Redesign",
    desc: "Complete redesign of an outdated business website. Modernized the layout, improved navigation, and optimized for mobile. The client reported increased enquiries within the first month.",
    color: "from-accent/20 to-primary/10",
  },
  {
    title: "Service Company Landing Page",
    category: "Business Optimization",
    desc: "Created a high-converting landing page focused on lead generation. Implemented clear calls-to-action, trust signals, and an optimized contact flow that doubled the client's monthly leads.",
    color: "from-primary/20 to-accent/10",
  },
  {
    title: "E-Commerce Starter Site",
    category: "Custom Development",
    desc: "Developed a clean, professional online store for a startup business. Focused on product presentation, mobile shopping experience, and easy checkout process.",
    color: "from-accent/20 to-primary/10",
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
        <div className="container mx-auto max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((p, i) => (
              <motion.div
                key={p.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={i}
                className="glass-card rounded-lg overflow-hidden hover:border-primary/50 transition-colors group"
              >
                {/* Placeholder visual */}
                <div className={`h-48 bg-gradient-to-br ${p.color} flex items-center justify-center`}>
                  <div className="text-center">
                    <ExternalLink className="text-primary mx-auto mb-2" size={32} />
                    <span className="text-xs text-muted-foreground">Project Preview</span>
                  </div>
                </div>
                <div className="p-6">
                  <span className="text-xs font-medium text-primary uppercase tracking-wider">{p.category}</span>
                  <h3 className="font-heading text-xl font-semibold mt-2 mb-3">{p.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{p.desc}</p>
                </div>
              </motion.div>
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
