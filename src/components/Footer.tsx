import { Instagram, Facebook, Twitter, Youtube, MapPin, Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-10">
          <div>
            <h3 className="text-3xl font-display tracking-[0.12em] text-gradient-primary mb-4 uppercase">CR Fitness</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Premium fitness facility dedicated to transforming lives through expert coaching, modern equipment, and an unbeatable community.
            </p>
          </div>
          <div>
            <h4 className="font-heading text-xl mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {["About", "Programs", "Trainers", "Pricing", "Schedule", "Contact"].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase()}`} className="text-muted-foreground text-sm hover:text-primary transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-heading text-xl mb-4">Contact</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-center gap-2"><MapPin className="w-4 h-4 text-primary" /> 123 Fitness Ave, NY</li>
              <li className="flex items-center gap-2"><Phone className="w-4 h-4 text-primary" /> +91 7836909669</li>
              <li className="flex items-center gap-2"><Mail className="w-4 h-4 text-primary" /> crfitness93@gmail.com</li>
            </ul>
          </div>
          <div>
            <h4 className="font-heading text-xl mb-4">Follow Us</h4>
            <div className="flex gap-3">
              {[Instagram, Facebook, Twitter, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-lg glass flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="border-t border-border mt-12 pt-8 text-center text-sm text-muted-foreground">
          <p>© 2026 CR Fitness. All rights reserved. | Built with passion for fitness.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
