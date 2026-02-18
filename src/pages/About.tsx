import { motion } from "framer-motion";
import { Target, Eye, CheckCircle } from "lucide-react";
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

const values = [
  "Every business deserves a professional online presence",
  "Websites should serve a purpose — not just look good",
  "Quality and attention to detail matter",
  "Clear communication and reliable delivery",
  "Long-term partnerships over one-time projects",
];

const About = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding bg-card">
        <div className="container mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <motion.h1 variants={fadeUp} custom={0} className="font-heading text-4xl md:text-5xl font-bold mb-6">
              About <span className="text-gold-gradient">Coetzee Web Solutions</span>
            </motion.h1>
            <motion.p variants={fadeUp} custom={1} className="text-muted-foreground text-lg leading-relaxed">
              Founded by Matthew Coetzee, Coetzee Web Solutions is a professional web development business dedicated to helping businesses of all sizes build a strong, credible online presence.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Story */}
      <section className="section-padding bg-background">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-12 items-start"
          >
            <motion.div variants={fadeUp} custom={0} className="space-y-6">
              <h2 className="font-heading text-3xl font-bold">
                The <span className="text-gold-gradient">Story</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                What started as a passion for design and technology grew into a mission: helping businesses look professional and grow online. Matthew Coetzee saw too many businesses struggling with outdated, poorly designed websites that didn't represent the quality of their work.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Coetzee Web Solutions was built to change that. Whether it's a small local business taking its first steps online or a larger company needing a complete digital overhaul, the approach is the same — strategic, thoughtful, and results-driven.
              </p>
            </motion.div>
            <motion.div variants={fadeUp} custom={1} className="space-y-6">
              <h2 className="font-heading text-3xl font-bold">
                The <span className="text-gold-gradient">Approach</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Every project begins with understanding the business, its goals, and its audience. From there, a strategic plan is developed covering design, content structure, user experience, and functionality.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                The focus isn't just on creating something that looks good — it's on building something that works. Websites that load fast, rank well, convert visitors, and make businesses look as professional as they truly are.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-card">
        <div className="container mx-auto max-w-4xl">
          <div className="grid md:grid-cols-2 gap-10">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={0}
              className="glass-card rounded-lg p-8"
            >
              <div className="bg-gold-gradient w-12 h-12 rounded-lg flex items-center justify-center mb-5">
                <Target className="text-primary-foreground" size={24} />
              </div>
              <h3 className="font-heading text-2xl font-semibold mb-3">Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To provide businesses with high-quality, professional websites that help them grow, build trust with their customers, and compete confidently in their industry.
              </p>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={1}
              className="glass-card rounded-lg p-8"
            >
              <div className="bg-gold-gradient w-12 h-12 rounded-lg flex items-center justify-center mb-5">
                <Eye className="text-primary-foreground" size={24} />
              </div>
              <h3 className="font-heading text-2xl font-semibold mb-3">Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                To be a trusted web development partner for businesses across South Africa and beyond — known for quality, reliability, and delivering websites that genuinely make a difference.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-background">
        <div className="container mx-auto max-w-3xl text-center">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0}
            className="font-heading text-3xl md:text-4xl font-bold mb-10"
          >
            What We <span className="text-gold-gradient">Believe</span>
          </motion.h2>
          <div className="space-y-4">
            {values.map((v, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={i}
                className="flex items-center gap-4 glass-card rounded-lg p-5 text-left"
              >
                <CheckCircle className="text-primary shrink-0" size={20} />
                <span className="text-foreground">{v}</span>
              </motion.div>
            ))}
          </div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={5}
            className="mt-10"
          >
            <Button variant="gold" size="lg" asChild>
              <Link to="/contact">Work With Us</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
