import { motion } from "framer-motion";
import { Code, Paintbrush, BarChart3, RefreshCw, Smartphone, Search, MessageSquare, ArrowRight } from "lucide-react";
import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
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

const processSteps = [
  { step: "01", title: "Discovery", desc: "We learn about your business, goals, and target audience to create a clear strategy.", icon: "💡" },
  { step: "02", title: "Design", desc: "Crafting a custom layout and visual identity that reflects your unique brand.", icon: "🎨" },
  { step: "03", title: "Develop", desc: "Building a fast, responsive, and SEO-optimized website with clean code.", icon: "⚡" },
  { step: "04", title: "Launch", desc: "Deploying your site, testing everything, and ensuring a flawless go-live.", icon: "🚀" },
];

const Services = () => {
  return (
    <Layout>
      <PageHero
        eyebrow="What We Offer"
        title={
          <>
            Our <span className="text-gold-shimmer">Services</span>
          </>
        }
        subtitle="Comprehensive web development services designed to help your business establish credibility, attract clients, and grow online."
      />


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

      {/* Process */}
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

      {/* CTA */}
      <section className="section-padding bg-background text-center">
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
