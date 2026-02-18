import { Link } from "react-router-dom";
import { Facebook, Instagram, Mail, Phone } from "lucide-react";
import logo from "@/assets/logo.jpeg";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img src={logo} alt="CWS" className="h-10 w-10 rounded-full object-cover" />
              <span className="font-heading text-lg font-bold text-gold-gradient">Coetzee Web Solutions</span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Professional web development helping businesses establish a strong online presence and grow.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-primary font-semibold mb-4">Quick Links</h4>
            <div className="flex flex-col gap-2">
              {[
                { to: "/", label: "Home" },
                { to: "/about", label: "About" },
                { to: "/services", label: "Services" },
                { to: "/portfolio", label: "Portfolio" },
                { to: "/contact", label: "Contact" },
              ].map((link) => (
                <Link key={link.to} to={link.to} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading text-primary font-semibold mb-4">Services</h4>
            <div className="flex flex-col gap-2 text-sm text-muted-foreground">
              <span>Custom Website Development</span>
              <span>Website Redesign</span>
              <span>Business Optimization</span>
              <span>Mobile Optimization</span>
              <span>SEO-Ready Builds</span>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading text-primary font-semibold mb-4">Get in Touch</h4>
            <div className="flex flex-col gap-3 text-sm text-muted-foreground">
              <a href="mailto:matthewcoetzee1234@gmail.com" className="flex items-center gap-2 hover:text-primary transition-colors">
                <Mail size={16} /> matthewcoetzee1234@gmail.com
              </a>
              <a href="https://wa.me/27773679693" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-primary transition-colors">
                <Phone size={16} /> +27 77 367 9693
              </a>
              <div className="flex gap-3 mt-2">
                <a href="https://www.facebook.com/share/g/1AmTvgwpDU/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                  <Facebook size={20} />
                </a>
                <a href="https://www.instagram.com/matthew_websolutions" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                  <Instagram size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Coetzee Web Solutions. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
