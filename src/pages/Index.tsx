import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Star, Zap } from "lucide-react";
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

// Floating particle component
const FloatingParticle = ({ delay, x, y, size }: { delay: number; x: string; y: string; size: number }) => (
  <motion.div
    className="absolute rounded-full bg-primary/20"
    style={{ left: x, top: y, width: size, height: size }}
    animate={{
      y: [0, -20, 0],
      opacity: [0.2, 0.5, 0.2],
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
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background with parallax */}
        <motion.div
          className="absolute inset-0 bg-cover bg-center scale-110"
          style={{ backgroundImage: `url(${heroBg})`, y: heroY }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/75 to-background" />

        {/* Grid pattern overlay */}
        <div className="absolute inset-0 grid-pattern opacity-30" />

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
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 1, delay: 1, ease: [0.22, 1, 0.36, 1] }}
          className="absolute top-0 left-8 md:left-16 w-[1px] h-32 bg-gradient-to-b from-primary/50 to-transparent origin-top hidden md:block"
        />

        <motion.div style={{ opacity: heroOpacity }} className="relative z-10 container mx-auto px-4 pt-24 pb-16">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-primary/30 bg-primary/5 backdrop-blur-sm mb-10"
            >
              <Star className="text-primary animate-pulse" size={14} />
              <span className="text-xs font-semibold tracking-[0.15em] uppercase text-primary">Professional Web Development</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-[5rem] font-bold mb-8 leading-[1.05] tracking-tight text-shadow-gold"
            >
              Websites That{" "}
              <br className="sm:hidden" />
              <span className="text-gold-gradient">Drive Growth</span>
              <br />
              <span className="text-foreground/90">for Your Business</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.7 }}
              className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed"
            >
              Custom-built, results-driven websites that help businesses build trust,
              generate leads, and compete confidently in their industry.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center mb-20"
            >
              <Button variant="gold" size="lg" className="text-base px-8 py-6 gold-glow-sm" asChild>
                <Link to="/contact">Get a Free Quote <ArrowRight className="ml-2" size={18} /></Link>
              </Button>
              <Button variant="goldOutline" size="lg" className="text-base px-8 py-6" asChild>
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
                  <div className="font-heading text-3xl sm:text-4xl font-bold text-primary mb-1">{s.value}</div>
                  <div className="text-[11px] sm:text-xs text-muted-foreground uppercase tracking-wider">{s.label}</div>
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

      {/* ── BANNER ── */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <img
              src={banner}
              alt="Coetzee Web Solutions — Professional Websites for Local Businesses"
              className="w-full max-w-5xl mx-auto rounded-2xl shadow-2xl shadow-primary/10 border border-border"
            />
          </motion.div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="relative section-padding overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/5" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px]" />
        <div className="absolute inset-0 grid-pattern opacity-15" />

        <div className="container mx-auto text-center relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={fadeUp} custom={0} className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-primary/30 bg-primary/5 backdrop-blur-sm mb-8">
              <Zap className="text-primary" size={14} />
              <span className="text-xs font-semibold tracking-[0.15em] uppercase text-primary">Let's Work Together</span>
            </motion.div>

            <motion.h2 variants={fadeUp} custom={1} className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
              Ready to Elevate Your{" "}
              <br className="hidden sm:block" />
              <span className="text-gold-gradient">Online Presence</span>?
            </motion.h2>
            <motion.p variants={fadeUp} custom={2} className="text-muted-foreground max-w-2xl mx-auto mb-12 text-base sm:text-lg md:text-xl leading-relaxed">
              Whether you need a brand-new website or want to upgrade your existing one,
              let's discuss how we can help your business grow and succeed online.
            </motion.p>
            <motion.div variants={fadeUp} custom={3} className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="gold" size="lg" className="text-base px-10 py-6 gold-glow-sm" asChild>
                <Link to="/contact">Get Started Today <ArrowRight className="ml-2" size={18} /></Link>
              </Button>
              <Button variant="goldOutline" size="lg" className="text-base px-10 py-6" asChild>
                <a href="https://wa.me/27773679693" target="_blank" rel="noopener noreferrer">
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
