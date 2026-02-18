import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Monitor, Paintbrush, Smartphone, TrendingUp, Shield, Zap, CheckCircle2, Star, Quote, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import heroBg from "@/assets/hero-bg.jpg";
import logo from "@/assets/logo.jpeg";
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

const stagger = {
  visible: { transition: { staggerChildren: 0.12 } },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: { delay: i * 0.1, duration: 0.5 },
  }),
};

const features = [
  { icon: Monitor, title: "Custom Websites", desc: "Tailored designs built from scratch for your unique business needs and goals." },
  { icon: Paintbrush, title: "Website Redesign", desc: "Transform outdated sites into modern, professional platforms that convert." },
  { icon: Smartphone, title: "Mobile Responsive", desc: "Flawless experiences across every device and screen size — guaranteed." },
  { icon: TrendingUp, title: "Growth Focused", desc: "Strategically built websites that generate leads and drive real conversions." },
  { icon: Shield, title: "Reliable & Secure", desc: "Built with industry best practices for performance, stability, and security." },
  { icon: Zap, title: "Fast Performance", desc: "Lightning-fast load times that keep visitors engaged and reduce bounce rates." },
];

const stats = [
  { value: "50+", label: "Projects Delivered" },
  { value: "100%", label: "Client Satisfaction" },
  { value: "24h", label: "Response Time" },
];

const processSteps = [
  { step: "01", title: "Discovery", desc: "We learn about your business, goals, and target audience to create a clear strategy.", icon: "💡" },
  { step: "02", title: "Design", desc: "Crafting a custom layout and visual identity that reflects your unique brand.", icon: "🎨" },
  { step: "03", title: "Develop", desc: "Building a fast, responsive, and SEO-optimized website with clean code.", icon: "⚡" },
  { step: "04", title: "Launch", desc: "Deploying your site, testing everything, and ensuring a flawless go-live.", icon: "🚀" },
];

const testimonials = [
  {
    quote: "Coetzee Web Solutions transformed our online presence completely. Our new website looks incredible and we've seen a real increase in enquiries.",
    name: "Happy Client",
    role: "Business Owner",
  },
  {
    quote: "Professional, responsive, and incredibly skilled. Matthew delivered exactly what we needed — a website that actually works for our business.",
    name: "Satisfied Customer",
    role: "Entrepreneur",
  },
  {
    quote: "From concept to launch, the entire process was seamless. We couldn't be happier with the final result. Highly recommend!",
    name: "Returning Client",
    role: "Company Director",
  },
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

      {/* ── ABOUT INTRO ── */}
      <section className="section-padding bg-card relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/5 rounded-full blur-[80px] translate-y-1/3 -translate-x-1/4" />

        <div className="container mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="relative max-w-[380px] mx-auto lg:mx-0">
                {/* Main image */}
                <div className="aspect-square rounded-2xl overflow-hidden border-2 border-primary/20 gold-glow relative z-10">
                  <img src={logo} alt="Coetzee Web Solutions" className="w-full h-full object-cover" />
                </div>
                {/* Decorative frame */}
                <div className="absolute -bottom-5 -right-5 w-full h-full rounded-2xl border border-primary/15 hidden lg:block" />
                <div className="absolute -top-5 -left-5 w-full h-full rounded-2xl border border-primary/10 hidden lg:block" />
                {/* Corner accent */}
                <div className="absolute -bottom-3 -right-3 w-16 h-16 bg-gold-gradient rounded-lg opacity-20 hidden lg:block" />
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
            >
              <motion.span variants={fadeUp} custom={0} className="text-xs font-bold tracking-[0.25em] uppercase text-primary mb-5 block">
                About Us
              </motion.span>
              <motion.h2 variants={fadeUp} custom={1} className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-[1.1]">
                Helping Businesses{" "}
                <span className="text-gold-gradient">Thrive Online</span>
              </motion.h2>
              <motion.div variants={fadeUp} custom={2} className="w-16 h-1 bg-gold-gradient rounded-full mb-6" />
              <motion.p variants={fadeUp} custom={2} className="text-muted-foreground leading-relaxed mb-8 text-base md:text-lg">
                Coetzee Web Solutions is a professional web development business focused on
                building high-quality websites for businesses of all sizes. We help you look
                more professional, build trust, and generate more leads — with websites that
                actually deliver results.
              </motion.p>
              <motion.ul variants={fadeUp} custom={3} className="space-y-4 mb-10">
                {[
                  "Results-driven approach to every project",
                  "Modern, responsive & SEO-optimized designs",
                  "Tailored solutions that match your brand",
                  "Dedicated support from start to finish",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm md:text-base text-foreground">
                    <CheckCircle2 className="text-primary shrink-0 mt-0.5" size={18} />
                    {item}
                  </li>
                ))}
              </motion.ul>
              <motion.div variants={fadeUp} custom={4}>
                <Button variant="goldOutline" size="lg" asChild>
                  <Link to="/about">Learn More About Us <ArrowRight className="ml-2" size={16} /></Link>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── SERVICES / WHY CHOOSE US ── */}
      <section className="section-padding bg-background relative overflow-hidden">
        {/* Subtle grid bg */}
        <div className="absolute inset-0 grid-pattern opacity-20" />

        <div className="container mx-auto relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="text-center mb-16"
          >
            <motion.span variants={fadeUp} custom={0} className="text-xs font-bold tracking-[0.25em] uppercase text-primary mb-5 block">
              What We Offer
            </motion.span>
            <motion.h2 variants={fadeUp} custom={1} className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-5">
              Why Choose <span className="text-gold-gradient">Coetzee Web Solutions</span>
            </motion.h2>
            <motion.div variants={fadeUp} custom={1} className="w-16 h-1 bg-gold-gradient rounded-full mx-auto mb-5" />
            <motion.p variants={fadeUp} custom={2} className="text-muted-foreground max-w-xl mx-auto text-base md:text-lg">
              We don't just build websites — we build powerful tools that help your business grow.
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={scaleIn}
                custom={i}
                className="group relative rounded-2xl border border-border bg-card/60 backdrop-blur-sm p-8 hover:border-primary/40 transition-all duration-500 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1"
              >
                {/* Hover glow */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10">
                  <div className="bg-gold-gradient w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 gold-glow-sm">
                    <f.icon className="text-primary-foreground" size={24} />
                  </div>
                  <h3 className="font-heading text-xl font-semibold mb-3">{f.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{f.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-center mt-14"
          >
            <Button variant="goldOutline" size="lg" asChild>
              <Link to="/services">View All Services <ArrowRight className="ml-2" size={16} /></Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section className="section-padding bg-card relative overflow-hidden">
        <div className="absolute inset-0 diagonal-lines opacity-30" />

        <div className="container mx-auto relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.span variants={fadeUp} custom={0} className="text-xs font-bold tracking-[0.25em] uppercase text-primary mb-5 block">
              Our Process
            </motion.span>
            <motion.h2 variants={fadeUp} custom={1} className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-5">
              From Idea to <span className="text-gold-gradient">Launch</span>
            </motion.h2>
            <motion.div variants={fadeUp} custom={1} className="w-16 h-1 bg-gold-gradient rounded-full mx-auto mb-5" />
            <motion.p variants={fadeUp} custom={2} className="text-muted-foreground max-w-xl mx-auto text-base md:text-lg">
              A streamlined process designed to deliver exceptional results, on time and on budget.
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((p, i) => (
              <motion.div
                key={p.step}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={i}
                className="relative text-center group"
              >
                {/* Connector line */}
                {i < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-[60%] w-[80%] h-px bg-gradient-to-r from-primary/30 to-primary/5" />
                )}

                <div className="relative inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-background border border-border mb-6 group-hover:border-primary/40 transition-colors duration-300">
                  <span className="text-3xl">{p.icon}</span>
                  <div className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-gold-gradient flex items-center justify-center">
                    <span className="text-[10px] font-bold text-primary-foreground">{p.step}</span>
                  </div>
                </div>
                <h3 className="font-heading text-xl font-semibold mb-3">{p.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed max-w-[250px] mx-auto">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* ── TESTIMONIALS ── */}
      <section className="section-padding bg-card relative overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px] -translate-y-1/2 -translate-x-1/3" />

        <div className="container mx-auto relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.span variants={fadeUp} custom={0} className="text-xs font-bold tracking-[0.25em] uppercase text-primary mb-5 block">
              Testimonials
            </motion.span>
            <motion.h2 variants={fadeUp} custom={1} className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-5">
              What Our Clients <span className="text-gold-gradient">Say</span>
            </motion.h2>
            <motion.div variants={fadeUp} custom={1} className="w-16 h-1 bg-gold-gradient rounded-full mx-auto" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={i}
                className="relative rounded-2xl border border-border bg-background/50 backdrop-blur-sm p-8 hover:border-primary/30 transition-all duration-300"
              >
                <Quote className="text-primary/20 mb-4" size={36} />
                <p className="text-foreground/80 text-sm md:text-base leading-relaxed mb-6 italic">
                  "{t.quote}"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gold-gradient flex items-center justify-center">
                    <MessageSquare className="text-primary-foreground" size={16} />
                  </div>
                  <div>
                    <div className="font-semibold text-sm">{t.name}</div>
                    <div className="text-xs text-muted-foreground">{t.role}</div>
                  </div>
                </div>
                {/* Star rating */}
                <div className="flex gap-1 mt-4">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="text-primary fill-primary" size={14} />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
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
