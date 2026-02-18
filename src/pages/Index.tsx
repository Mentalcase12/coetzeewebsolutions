import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Monitor, Paintbrush, Smartphone, TrendingUp, Shield, Zap, CheckCircle2, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import heroBg from "@/assets/hero-bg.jpg";
import logo from "@/assets/logo.jpeg";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6 },
  }),
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
};

const features = [
  { icon: Monitor, title: "Custom Websites", desc: "Tailored designs built for your unique business needs." },
  { icon: Paintbrush, title: "Website Redesign", desc: "Transform outdated sites into modern, professional platforms." },
  { icon: Smartphone, title: "Mobile Responsive", desc: "Flawless experiences across every device and screen size." },
  { icon: TrendingUp, title: "Growth Focused", desc: "Websites that generate leads and drive conversions." },
  { icon: Shield, title: "Reliable & Secure", desc: "Built with best practices for performance and security." },
  { icon: Zap, title: "Fast Performance", desc: "Optimized for speed to keep visitors engaged." },
];

const stats = [
  { value: "50+", label: "Projects Delivered" },
  { value: "100%", label: "Client Satisfaction" },
  { value: "24h", label: "Response Time" },
];

const process = [
  { step: "01", title: "Discovery", desc: "We learn about your business, goals, and target audience." },
  { step: "02", title: "Design", desc: "Crafting a custom layout that reflects your brand identity." },
  { step: "03", title: "Develop", desc: "Building a fast, responsive, and SEO-ready website." },
  { step: "04", title: "Launch", desc: "Deploying your site and ensuring everything runs perfectly." },
];

const Index = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center scale-110"
          style={{ backgroundImage: `url(${heroBg})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/80 to-background" />

        {/* Decorative gold line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.2, delay: 0.8 }}
          className="absolute top-0 left-0 right-0 h-[2px] bg-gold-gradient origin-left"
        />

        <div className="relative z-10 container mx-auto px-4 pt-20 pb-12">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 mb-8"
            >
              <Star className="text-primary" size={14} />
              <span className="text-xs font-medium tracking-wider uppercase text-primary">Professional Web Development</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-[1.1] tracking-tight"
            >
              Websites That{" "}
              <span className="text-gold-gradient">Drive Growth</span>
              <br className="hidden sm:block" />
              {" "}for Your Business
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
            >
              Custom-built, results-driven websites that help businesses build trust,
              generate leads, and compete confidently in their industry.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
            >
              <Button variant="gold" size="lg" className="text-base px-8" asChild>
                <Link to="/contact">Get a Free Quote <ArrowRight className="ml-2" size={18} /></Link>
              </Button>
              <Button variant="goldOutline" size="lg" className="text-base px-8" asChild>
                <Link to="/portfolio">View Our Work</Link>
              </Button>
            </motion.div>

            {/* Stats row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="grid grid-cols-3 gap-4 max-w-md mx-auto"
            >
              {stats.map((s) => (
                <div key={s.label} className="text-center">
                  <div className="font-heading text-2xl sm:text-3xl font-bold text-primary">{s.value}</div>
                  <div className="text-xs sm:text-sm text-muted-foreground mt-1">{s.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-5 h-8 rounded-full border-2 border-primary/40 flex items-start justify-center pt-1.5"
          >
            <div className="w-1 h-2 rounded-full bg-primary" />
          </motion.div>
        </motion.div>
      </section>

      {/* About intro */}
      <section className="section-padding bg-card relative overflow-hidden">
        {/* Decorative corner */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="relative">
                <div className="aspect-square max-w-[320px] mx-auto lg:mx-0 rounded-2xl overflow-hidden border-2 border-primary/20 shadow-2xl shadow-primary/10">
                  <img src={logo} alt="Coetzee Web Solutions" className="w-full h-full object-cover" />
                </div>
                {/* Accent frame */}
                <div className="absolute -bottom-4 -right-4 w-full h-full rounded-2xl border border-primary/20 -z-10 hidden lg:block" />
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
            >
              <motion.span variants={fadeUp} custom={0} className="text-xs font-semibold tracking-[0.2em] uppercase text-primary mb-4 block">
                About Us
              </motion.span>
              <motion.h2 variants={fadeUp} custom={1} className="font-heading text-3xl md:text-4xl font-bold mb-6 leading-tight">
                Helping Businesses{" "}
                <span className="text-gold-gradient">Thrive Online</span>
              </motion.h2>
              <motion.p variants={fadeUp} custom={2} className="text-muted-foreground leading-relaxed mb-6">
                Coetzee Web Solutions is a professional web development business focused on
                building high-quality websites for businesses of all sizes. We help you look
                more professional, build trust, and generate more leads.
              </motion.p>
              <motion.ul variants={fadeUp} custom={3} className="space-y-3 mb-8">
                {["Results-driven approach", "Modern & responsive designs", "Tailored to your brand"].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-foreground">
                    <CheckCircle2 className="text-primary shrink-0" size={18} />
                    {item}
                  </li>
                ))}
              </motion.ul>
              <motion.div variants={fadeUp} custom={4}>
                <Button variant="goldOutline" asChild>
                  <Link to="/about">Learn More About Us <ArrowRight className="ml-2" size={16} /></Link>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services / Why Choose Us */}
      <section className="section-padding bg-background relative">
        <div className="container mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="text-center mb-16"
          >
            <motion.span variants={fadeUp} custom={0} className="text-xs font-semibold tracking-[0.2em] uppercase text-primary mb-4 block">
              What We Offer
            </motion.span>
            <motion.h2
              variants={fadeUp}
              custom={1}
              className="font-heading text-3xl md:text-4xl font-bold mb-4"
            >
              Why Choose <span className="text-gold-gradient">Coetzee Web Solutions</span>
            </motion.h2>
            <motion.p variants={fadeUp} custom={2} className="text-muted-foreground max-w-xl mx-auto">
              We don't just build websites — we build tools that help your business grow.
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={i}
                className="group relative rounded-xl border border-border bg-card/60 p-7 hover:border-primary/40 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
              >
                <div className="bg-gold-gradient w-11 h-11 rounded-lg flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                  <f.icon className="text-primary-foreground" size={20} />
                </div>
                <h3 className="font-heading text-lg font-semibold mb-2">{f.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Button variant="goldOutline" asChild>
              <Link to="/services">View All Services <ArrowRight className="ml-2" size={16} /></Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding bg-card">
        <div className="container mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.span variants={fadeUp} custom={0} className="text-xs font-semibold tracking-[0.2em] uppercase text-primary mb-4 block">
              Our Process
            </motion.span>
            <motion.h2 variants={fadeUp} custom={1} className="font-heading text-3xl md:text-4xl font-bold mb-4">
              From Idea to <span className="text-gold-gradient">Launch</span>
            </motion.h2>
            <motion.p variants={fadeUp} custom={2} className="text-muted-foreground max-w-xl mx-auto">
              A streamlined process designed to deliver exceptional results, on time and on budget.
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((p, i) => (
              <motion.div
                key={p.step}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={i}
                className="text-center p-6"
              >
                <div className="font-heading text-5xl font-bold text-primary/20 mb-4">{p.step}</div>
                <h3 className="font-heading text-xl font-semibold mb-2">{p.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative section-padding overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/5" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />

        <div className="container mx-auto text-center relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h2 variants={fadeUp} custom={0} className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Ready to Elevate Your{" "}
              <span className="text-gold-gradient">Online Presence</span>?
            </motion.h2>
            <motion.p variants={fadeUp} custom={1} className="text-muted-foreground max-w-xl mx-auto mb-10 text-base sm:text-lg">
              Whether you need a new website or want to upgrade your existing one,
              let's discuss how we can help your business grow.
            </motion.p>
            <motion.div variants={fadeUp} custom={2} className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="gold" size="lg" className="text-base px-8" asChild>
                <Link to="/contact">Let's Talk <ArrowRight className="ml-2" size={18} /></Link>
              </Button>
              <Button variant="goldOutline" size="lg" className="text-base px-8" asChild>
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
