import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Facebook, Instagram, Send, MessageCircle } from "lucide-react";
import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6 },
  }),
};

const Contact = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [sending, setSending] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      toast({ title: "Please fill in all required fields", variant: "destructive" });
      return;
    }
    setSending(true);
    // Construct WhatsApp message as fallback
    const msg = encodeURIComponent(
      `Hi Matthew! My name is ${form.name}. Email: ${form.email}. ${form.phone ? `Phone: ${form.phone}. ` : ""}Message: ${form.message}`
    );
    window.open(`https://wa.me/27773679693?text=${msg}`, "_blank");
    setSending(false);
    toast({ title: "Redirecting to WhatsApp!", description: "You can also email us directly." });
    setForm({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="py-12 md:py-20 px-4 md:px-8 lg:px-16 bg-card">
        <div className="container mx-auto text-center max-w-3xl">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-heading text-3xl md:text-5xl font-bold mb-4 md:mb-6"
          >
            Get in <span className="text-gold-gradient">Touch</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground text-base md:text-lg"
          >
            Ready to take your business online or upgrade your current website? Let's talk about how we can help.
          </motion.p>
        </div>
      </section>

      <section className="py-12 md:py-20 px-4 md:px-8 lg:px-16 bg-background">
        <div className="container mx-auto max-w-5xl">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            {/* Form */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={0}
            >
              <h2 className="font-heading text-2xl font-bold mb-6">Send a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="text-sm font-medium text-foreground/80 mb-1.5 block">Name *</label>
                  <Input
                    placeholder="Your full name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    maxLength={100}
                    className="bg-card border-border"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground/80 mb-1.5 block">Email *</label>
                  <Input
                    type="email"
                    placeholder="your@email.com"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    maxLength={255}
                    className="bg-card border-border"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground/80 mb-1.5 block">Phone / WhatsApp</label>
                  <Input
                    placeholder="+27 ..."
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    maxLength={20}
                    className="bg-card border-border"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground/80 mb-1.5 block">Message *</label>
                  <Textarea
                    placeholder="Tell us about your project..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    maxLength={1000}
                    rows={5}
                    className="bg-card border-border"
                  />
                </div>
                <Button type="submit" variant="gold" size="lg" className="w-full" disabled={sending}>
                  <Send size={18} className="mr-2" /> Send Message
                </Button>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={1}
              className="space-y-8"
            >
              <div>
                <h2 className="font-heading text-2xl font-bold mb-6">Contact Details</h2>
                <div className="space-y-5">
                  <a
                    href="https://wa.me/27773679693"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glass-card rounded-lg p-5 flex items-center gap-4 hover:border-primary/50 transition-colors"
                  >
                    <div className="bg-gold-gradient w-12 h-12 rounded-lg flex items-center justify-center shrink-0">
                      <MessageCircle className="text-primary-foreground" size={22} />
                    </div>
                    <div>
                      <p className="font-medium text-sm">WhatsApp</p>
                      <p className="text-muted-foreground text-sm">+27 77 367 9693</p>
                    </div>
                  </a>
                  <a
                    href="mailto:matthewcoetzee1234@gmail.com"
                    className="glass-card rounded-lg p-5 flex items-center gap-4 hover:border-primary/50 transition-colors"
                  >
                    <div className="bg-gold-gradient w-12 h-12 rounded-lg flex items-center justify-center shrink-0">
                      <Mail className="text-primary-foreground" size={22} />
                    </div>
                    <div>
                      <p className="font-medium text-sm">Email</p>
                      <p className="text-muted-foreground text-sm break-all">matthewcoetzee1234@gmail.com</p>
                    </div>
                  </a>
                </div>
              </div>

              <div>
                <h3 className="font-heading text-xl font-semibold mb-4">Follow Us</h3>
                <div className="flex gap-4">
                  <a
                    href="https://www.facebook.com/share/g/1AmTvgwpDU/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glass-card rounded-lg p-4 hover:border-primary/50 transition-colors"
                  >
                    <Facebook className="text-primary" size={24} />
                  </a>
                  <a
                    href="https://www.instagram.com/matthew_websolutions"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glass-card rounded-lg p-4 hover:border-primary/50 transition-colors"
                  >
                    <Instagram className="text-primary" size={24} />
                  </a>
                </div>
              </div>

              <div className="glass-card rounded-lg p-6">
                <h3 className="font-heading text-lg font-semibold mb-2">Quick Response Guaranteed</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  We typically respond within a few hours. For urgent enquiries, WhatsApp is the fastest way to reach us.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
