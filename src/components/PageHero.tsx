import { motion } from "framer-motion";
import { ReactNode } from "react";

interface PageHeroProps {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: string;
  children?: ReactNode;
}

const PageHero = ({ eyebrow, title, subtitle, children }: PageHeroProps) => {
  return (
    <section className="relative overflow-hidden pt-16 pb-16 md:pt-24 md:pb-20 px-4 md:px-8 lg:px-16 bg-card">
      {/* Ambient glows */}
      <div className="absolute inset-0 radial-glow" />
      <div className="absolute inset-0 grid-pattern opacity-15" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-primary/10 rounded-full blur-[120px]" />
      <div className="absolute inset-0 noise-overlay opacity-[0.04] pointer-events-none" />

      {/* Top gold line */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        className="absolute top-0 left-0 right-0 h-[2px] bg-gold-gradient origin-left"
      />

      <div className="container mx-auto text-center max-w-3xl relative z-10">
        {eyebrow && (
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block text-xs font-bold tracking-[0.25em] uppercase text-primary mb-5"
          >
            {eyebrow}
          </motion.span>
        )}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-[1.08] text-balance"
        >
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-muted-foreground text-base md:text-lg leading-relaxed text-balance"
          >
            {subtitle}
          </motion.p>
        )}
        {children}
      </div>
    </section>
  );
};

export default PageHero;
