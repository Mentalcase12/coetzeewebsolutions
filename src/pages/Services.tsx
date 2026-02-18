import { motion } from "framer-motion";
import { Code, Paintbrush, BarChart3, RefreshCw, Smartphone, Search, MessageSquare, ArrowRight } from "lucide-react";
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

const services = [
  {
    icon: Code,
    title: "Custom Website Development",
    desc: "From concept to launch, we build fully custom websites tailored to your brand, audience, and business goals. Every site is designed from scratch — no cookie-cutter templates.",
    features: ["Unique, branded designs", "Responsive across all devices", "Built for speed & performance", "SEO-friendly structure"],
  },
  {
    icon: Paintbrush,
    title: "Website Redesign & Upgrades",
    desc: "Already have a website that looks outdated or doesn't perform well? We redesign and upgrade existing sites to meet modern standards and better serve your business.",
    features: ["Modern visual overhaul", "Improved user experience", "Better layout & structure", "Updated content presentation"],
  },
  {
    icon: BarChart3,
    title: "Business Website Optimization",
    desc: "We analyze your current website and implement strategic improvements to increase conversions, improve user engagement, and drive more leads.",
    features: ["Conversion optimization", "Lead generation focus", "User flow improvements", "Clear calls-to-action"],
  },
  {
    icon: RefreshCw,
    title: "Modernization of Outdated Websites",
    desc: "Bring your old website into the modern era. We rebuild outdated sites using current technologies and design trends while preserving your brand identity.",
    features: ["Current design trends", "Modern tech stack", "Improved security", "Better performance"],
  },
  {
    icon: Smartphone,
    title: "Responsive / Mobile Optimization",
    desc: "Ensure your website delivers a flawless experience on every device. We optimize layouts, navigation, and interactions specifically for mobile and tablet users.",
    features: ["Mobile-first approach", "Touch-friendly interfaces", "Adaptive layouts", "Cross-browser testing"],
  },
  {
    icon: Search,
    title: "Basic SEO-Ready Website Builds",
    desc: "Every website we build comes with foundational SEO best practices built in, giving you a head start on search engine visibility from day one.",
    features: ["Semantic HTML structure", "Meta tags & descriptions", "Fast page load times", "Clean URL structure"],
  },
  {
    icon: MessageSquare,
    title: "Web Presence Consultation",
    desc: "Not sure where to start? We offer consultation sessions to help you understand what your business needs online and develop a clear plan of action.",
    features: ["Current site analysis", "Competitor review", "Strategic recommendations", "Clear action plan"],
  },
];

const Services = () => {
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
            Our <span className="text-gold-gradient">Services</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground text-lg"
          >
            Comprehensive web development services designed to help your business establish credibility, attract clients, and grow online.
          </motion.p>
        </div>
      </section>

      {/* Services */}
      <section className="section-padding bg-background">
        <div className="container mx-auto max-w-5xl space-y-8">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeUp}
              custom={0}
              className="glass-card rounded-lg p-8 md:p-10 hover:border-primary/50 transition-colors"
            >
              <div className="flex flex-col md:flex-row gap-6">
                <div className="shrink-0">
                  <div className="bg-gold-gradient w-14 h-14 rounded-lg flex items-center justify-center">
                    <s.icon className="text-primary-foreground" size={28} />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="font-heading text-2xl font-semibold mb-3">{s.title}</h3>
                  <p className="text-muted-foreground leading-relaxed mb-5">{s.desc}</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {s.features.map((f) => (
                      <div key={f} className="flex items-center gap-2 text-sm text-foreground/80">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                        {f}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-card text-center">
        <div className="container mx-auto max-w-2xl">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            Need a <span className="text-gold-gradient">Custom Solution</span>?
          </h2>
          <p className="text-muted-foreground mb-8">
            Every business is different. Let's discuss your specific needs and find the perfect solution for you.
          </p>
          <Button variant="gold" size="lg" asChild>
            <Link to="/contact">Get in Touch <ArrowRight className="ml-1" /></Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
