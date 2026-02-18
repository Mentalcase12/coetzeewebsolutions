import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Monitor, Paintbrush, Smartphone, TrendingUp, Shield, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import heroBg from "@/assets/hero-bg.jpg";
import banner from "@/assets/banner.jpeg";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6 },
  }),
};

const features = [
  { icon: Monitor, title: "Custom Websites", desc: "Tailored designs built for your unique business needs." },
  { icon: Paintbrush, title: "Website Redesign", desc: "Transform outdated sites into modern, professional platforms." },
  { icon: Smartphone, title: "Mobile Responsive", desc: "Flawless experiences across every device and screen size." },
  { icon: TrendingUp, title: "Growth Focused", desc: "Websites that generate leads and drive conversions." },
  { icon: Shield, title: "Reliable & Secure", desc: "Built with best practices for performance and security." },
  { icon: Zap, title: "Fast Performance", desc: "Optimized for speed to keep visitors engaged." },
];

const Index = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroBg})` }}
        />
        <div className="absolute inset-0 bg-background/80" />
        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
          >
            Build Your Business with a{" "}
            <span className="text-gold-gradient">Professional Website</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10"
          >
            Custom-built, results-driven websites that help businesses grow, build trust, and compete confidently in their industry.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button variant="gold" size="lg" asChild>
              <Link to="/contact">Get a Free Quote <ArrowRight className="ml-1" /></Link>
            </Button>
            <Button variant="goldOutline" size="lg" asChild>
              <Link to="/portfolio">View Portfolio</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Banner */}
      <section className="py-12 bg-card">
        <div className="container mx-auto px-4">
          <img
            src={banner}
            alt="Coetzee Web Solutions Banner"
            className="w-full max-w-4xl mx-auto rounded-lg shadow-2xl"
          />
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-background">
        <div className="container mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-16"
          >
            <motion.h2
              variants={fadeUp}
              custom={0}
              className="font-heading text-3xl md:text-4xl font-bold mb-4"
            >
              Why Choose <span className="text-gold-gradient">Coetzee Web Solutions</span>
            </motion.h2>
            <motion.p variants={fadeUp} custom={1} className="text-muted-foreground max-w-xl mx-auto">
              We don't just build websites — we build tools that help your business grow.
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={i}
                className="glass-card rounded-lg p-8 hover:border-primary/50 transition-colors group"
              >
                <div className="bg-gold-gradient w-12 h-12 rounded-lg flex items-center justify-center mb-5">
                  <f.icon className="text-primary-foreground" size={24} />
                </div>
                <h3 className="font-heading text-xl font-semibold mb-2">{f.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-card">
        <div className="container mx-auto text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h2 variants={fadeUp} custom={0} className="font-heading text-3xl md:text-4xl font-bold mb-4">
              Ready to Elevate Your <span className="text-gold-gradient">Online Presence</span>?
            </motion.h2>
            <motion.p variants={fadeUp} custom={1} className="text-muted-foreground max-w-xl mx-auto mb-8">
              Whether you need a new website or want to upgrade your existing one, let's discuss how we can help your business grow.
            </motion.p>
            <motion.div variants={fadeUp} custom={2}>
              <Button variant="gold" size="lg" asChild>
                <Link to="/contact">Let's Talk <ArrowRight className="ml-1" /></Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
