import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowRight,
  Star,
  Zap,
  Code,
  Paintbrush,
  Search,
  Smartphone,
  ShieldCheck,
  Rocket,
  Gauge,
  Quote,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import heroBg from "@/assets/hero-bg.jpg";
import banner from "@/assets/banner.jpeg";
import { useRef } from "react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6 },
  }),
};

const stats = [
  { value: "50+", label: "Projects Delivered" },
  { value: "100%", label: "Client Satisfaction" },
  { value: "24h", label: "Response Time" },
];

const services = [
  {
    icon: Code,
    title: "Custom Development",
    desc: "Bespoke websites built from scratch around your brand and goals — never templates.",
  },
  {
    icon: Paintbrush,
    title: "Redesign & Upgrades",
    desc: "Transform outdated sites into modern, high-performing experiences.",
  },
  {
    icon: Search,
    title: "SEO-Ready Builds",
    desc: "Foundational SEO baked in so you rank and get found from day one.",
  },
  {
    icon: Smartphone,
    title: "Mobile Optimization",
    desc: "Flawless, fast experiences on every screen — phone, tablet and desktop.",
  },
];

const whyUs = [
  {
    icon: Rocket,
    title: "Built for Growth",
    desc: "Every decision is made to turn visitors into paying customers.",
  },
  {
    icon: Gauge,
    title: "Lightning Fast",
    desc: "Optimized, lightweight code that loads instantly and ranks higher.",
  },
  {
    icon: ShieldCheck,
    title: "Reliable & Secure",
    desc: "Modern, secure foundations you can trust for years to come.",
  },
];

const marqueeItems = [
  "Custom Websites",
  "Web Redesigns",
  "SEO Optimization",
  "Mobile-First Design",
  "E-Commerce",
  "Landing Pages",
  "Brand Identity",
  "Performance Tuning",
];

// Floating particle component
const FloatingParticle = ({
  delay,
  x,
  y,
  size,
}: {
  delay: number;
  x: string;
  y: string;
  size: number;
}) => (
  <motion.div
    className="absolute rounded-full bg-primary/30"
    style={{ left: x, top: y, width: size, height: size }}
    animate={{
      y: [0, -20, 0],
      opacity: [0.2, 0.6, 0.2],
    }}
    transition={{
      duration: 4,
      delay,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  />
);

const Index = () => {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <Layout>
      {/* ── HERO ── */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        {/* Background with parallax */}
        <motion.div
          className="absolute inset-0 bg-cover bg-center scale-110"
          style={{ backgroundImage: `url(${heroBg})`, y: heroY }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/70 to-background" />
        <div className="absolute inset-0 radial-glow" />

        {/* Grid pattern overlay */}
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="absolute inset-0 noise-overlay opacity-[0.04] pointer-events-none" />

        {/* Floating particles */}
        <FloatingParticle delay={0} x="10%" y="20%" size={6} />
        <FloatingParticle delay={1} x="80%" y="30%" size={4} />
        <FloatingParticle delay={2} x="25%" y="70%" size={5} />
        <FloatingParticle delay={0.5} x="70%" y="60%" size={8} />
        <FloatingParticle delay={1.5} x="50%" y="15%" size={4} />
        <FloatingParticle delay={3} x="90%" y="80%" size={6} />

        {/* Gold accent lines */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.5, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="absolute top-0 left-0 right-0 h-[2px] bg-gold-gradient origin-left"
        />

        <motion.div
          style={{ opacity: heroOpacity }}
          className="relative z-10 container mx-auto px-4 pt-24 pb-16"
        >
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-primary/30 bg-primary/5 backdrop-blur-sm mb-10"
            >
              <Star className="text-primary animate-pulse" size={14} />
              <span className="text-xs font-semibold tracking-[0.15em] uppercase text-primary">
                Professional Web Development
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-[5.25rem] font-bold mb-8 leading-[1.04] tracking-tight text-balance"
            >
              Websites That{" "}
              <br className="sm:hidden" />
              <span className="text-gold-shimmer">Drive Growth</span>
              <br />
              <span className="text-foreground/90">for Your Business</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.7 }}
              className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed text-balance"
            >
              Custom-built, results-driven websites that help businesses build
              trust, generate leads, and compete confidently in their industry.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center mb-20"
            >
              <Button
                variant="gold"
                size="lg"
                className="text-base px-8 py-6 gold-glow-sm shine"
                asChild
              >
                <Link to="/contact">
                  Get a Free Quote <ArrowRight className="ml-2" size={18} />
                </Link>
              </Button>
              <Button
                variant="goldOutline"
                size="lg"
                className="text-base px-8 py-6"
                asChild
              >
                <Link to="/portfolio">View Our Work</Link>
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.7 }}
              className="grid grid-cols-3 gap-6 max-w-lg mx-auto"
            >
              {stats.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1 + i * 0.15, duration: 0.5 }}
                  className="text-center relative"
                >
                  <div className="font-heading text-3xl sm:text-4xl font-bold text-gold-gradient mb-1">
                    {s.value}
                  </div>
                  <div className="text-[11px] sm:text-xs text-muted-foreground uppercase tracking-wider">
                    {s.label}
                  </div>
                  {i < stats.length - 1 && (
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-px h-8 bg-border hidden sm:block" />
                  )}
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-6 h-10 rounded-full border-2 border-primary/30 flex items-start justify-center pt-2"
          >
            <motion.div
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1.5 h-2.5 rounded-full bg-primary"
            />
          </motion.div>
        </motion.div>
      </section>

      {/* ── MARQUEE ── */}
      <section className="py-6 border-y border-border bg-card/50 overflow-hidden">
        <div className="flex w-max animate-marquee">
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <div key={i} className="flex items-center">
              <span className="font-heading text-lg md:text-xl text-foreground/40 px-8 whitespace-nowrap">
                {item}
              </span>
              <Star className="text-primary/50 shrink-0" size={12} />
            </div>
          ))}
        </div>
      </section>

      {/* ── SERVICES PREVIEW ── */}
      <section className="section-padding bg-background relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[120px]" />
        <div className="container mx-auto relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <motion.span
              variants={fadeUp}
              custom={0}
              className="text-xs font-bold tracking-[0.25em] uppercase text-primary mb-4 block"
            >
              What We Do
            </motion.span>
            <motion.h2
              variants={fadeUp}
              custom={1}
              className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-5 text-balance"
            >
              Everything You Need to{" "}
              <span className="text-gold-gradient">Win Online</span>
            </motion.h2>
            <motion.div
              variants={fadeUp}
              custom={2}
              className="w-16 h-1 bg-gold-gradient rounded-full mx-auto"
            />
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s, i) => (
              <motion.div
                key={s.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={i}
                className="gradient-card rounded-2xl p-7 border border-border hover:border-primary/40 card-hover shine group"
              >
                <div className="bg-gold-gradient w-14 h-14 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                  <s.icon className="text-primary-foreground" size={26} />
                </div>
                <h3 className="font-heading text-xl font-semibold mb-3">
                  {s.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {s.desc}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0}
            className="text-center mt-12"
          >
            <Button variant="goldOutline" size="lg" asChild>
              <Link to="/services">
                Explore All Services <ArrowRight className="ml-1" size={18} />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* ── BANNER / SHOWCASE ── */}
      <section className="py-16 md:py-20 bg-card relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-10" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative max-w-5xl mx-auto"
          >
            <div className="absolute -inset-4 bg-primary/10 rounded-3xl blur-2xl" />
            <img
              src={banner}
              alt="Coetzee Web Solutions — Professional Websites for Local Businesses"
              loading="lazy"
              className="relative w-full rounded-2xl shadow-gold-lg border border-primary/20"
            />
          </motion.div>
        </div>
      </section>

      {/* ── WHY US ── */}
      <section className="section-padding bg-background relative overflow-hidden">
        <div className="container mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.span
                variants={fadeUp}
                custom={0}
                className="text-xs font-bold tracking-[0.25em] uppercase text-primary mb-4 block"
              >
                Why Choose Us
              </motion.span>
              <motion.h2
                variants={fadeUp}
                custom={1}
                className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight text-balance"
              >
                More Than a Website —{" "}
                <span className="text-gold-gradient">a Growth Engine</span>
              </motion.h2>
              <motion.p
                variants={fadeUp}
                custom={2}
                className="text-muted-foreground text-base md:text-lg leading-relaxed mb-8"
              >
                We don't just build pretty pages. We craft strategic, fast and
                conversion-focused websites designed to make your business look
                world-class and perform even better.
              </motion.p>
              <motion.div variants={fadeUp} custom={3}>
                <Button variant="gold" size="lg" className="shine" asChild>
                  <Link to="/about">
                    Learn About Us <ArrowRight className="ml-1" size={18} />
                  </Link>
                </Button>
              </motion.div>
            </motion.div>

            <div className="space-y-5">
              {whyUs.map((w, i) => (
                <motion.div
                  key={w.title}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  custom={i}
                  className="gradient-card rounded-2xl p-6 border border-border hover:border-primary/40 transition-colors flex items-start gap-5"
                >
                  <div className="bg-gold-gradient w-12 h-12 rounded-xl flex items-center justify-center shrink-0">
                    <w.icon className="text-primary-foreground" size={22} />
                  </div>
                  <div>
                    <h3 className="font-heading text-lg font-semibold mb-1.5">
                      {w.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {w.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIAL HIGHLIGHT ── */}
      <section className="section-padding bg-card relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px]" />
        <div className="container mx-auto max-w-3xl text-center relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0}
          >
            <Quote className="text-primary/30 mx-auto mb-6" size={48} />
            <p className="font-heading text-2xl md:text-3xl lg:text-4xl font-medium leading-snug mb-8 text-balance">
              "Coetzee Web Solutions transformed our online presence completely.
              Our new website looks incredible and we've seen a real increase in
              enquiries."
            </p>
            <div className="flex justify-center gap-1 mb-4">
              {[...Array(5)].map((_, j) => (
                <Star
                  key={j}
                  className="text-primary fill-primary"
                  size={18}
                />
              ))}
            </div>
            <div className="font-semibold">Happy Client</div>
            <div className="text-sm text-muted-foreground">Business Owner</div>
          </motion.div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="relative section-padding overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/5" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px]" />
        <div className="absolute inset-0 grid-pattern opacity-15" />

        <div className="container mx-auto text-center relative z-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <motion.div
              variants={fadeUp}
              custom={0}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-primary/30 bg-primary/5 backdrop-blur-sm mb-8"
            >
              <Zap className="text-primary" size={14} />
              <span className="text-xs font-semibold tracking-[0.15em] uppercase text-primary">
                Let's Work Together
              </span>
            </motion.div>

            <motion.h2
              variants={fadeUp}
              custom={1}
              className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight text-balance"
            >
              Ready to Elevate Your{" "}
              <br className="hidden sm:block" />
              <span className="text-gold-gradient">Online Presence</span>?
            </motion.h2>
            <motion.p
              variants={fadeUp}
              custom={2}
              className="text-muted-foreground max-w-2xl mx-auto mb-12 text-base sm:text-lg md:text-xl leading-relaxed"
            >
              Whether you need a brand-new website or want to upgrade your
              existing one, let's discuss how we can help your business grow and
              succeed online.
            </motion.p>
            <motion.div
              variants={fadeUp}
              custom={3}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button
                variant="gold"
                size="lg"
                className="text-base px-10 py-6 gold-glow-sm shine"
                asChild
              >
                <Link to="/contact">
                  Get Started Today <ArrowRight className="ml-2" size={18} />
                </Link>
              </Button>
              <Button
                variant="goldOutline"
                size="lg"
                className="text-base px-10 py-6"
                asChild
              >
                <a
                  href="https://wa.me/27773679693"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WhatsApp Us
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
