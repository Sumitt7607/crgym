import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import heroImg from "@/assets/hero-gym.jpg";
import FloatingParticles from "./FloatingParticles";

const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <motion.img
          src={heroImg}
          alt="CR Fitness gym"
          className="w-full h-full object-cover"
          width={1920}
          height={1080}
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="absolute inset-0 bg-background/70" />
        <div className="absolute inset-0 overlay-gradient" />
      </div>

      {/* Floating particles */}
      <FloatingParticles />

      {/* Animated neon orbs */}
      <div className="absolute top-20 right-10 w-72 h-72 rounded-full bg-neon-red/10 blur-3xl animate-breathe" />
      <div className="absolute bottom-20 left-10 w-96 h-96 rounded-full bg-neon-blue/5 blur-3xl animate-breathe" style={{ animationDelay: "2s" }} />
      <div className="absolute top-1/2 left-1/4 w-48 h-48 rounded-full bg-neon-orange/8 blur-3xl animate-drift" />

      {/* Animated geometric shapes */}
      <motion.div
        className="absolute top-32 left-20 w-20 h-20 border border-primary/20 rotate-45"
        animate={{ rotate: [45, 90, 45], scale: [1, 1.1, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-40 right-20 w-16 h-16 border border-neon-blue/20 rounded-full"
        animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.5, 0.2] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-1/3 right-1/4 w-3 h-3 bg-primary/40 rounded-full"
        animate={{ y: [0, -40, 0], x: [0, 20, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-sm md:text-base uppercase tracking-[0.4em] text-muted-foreground mb-4 font-accent"
        >
          Premium Fitness Experience
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-5xl md:text-7xl lg:text-9xl font-display leading-none mb-6"
        >
          TRANSFORM YOUR
          <br />
          <motion.span
            className="text-gradient-primary glow-text inline-block"
            animate={{ scale: [1, 1.02, 1] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            BODY
          </motion.span>{" "}
          AT CR FITNESS
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 font-body"
        >
          Where champions are made. World-class equipment, elite trainers, and a community that pushes you beyond limits.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button variant="hero" size="lg" className="text-lg px-10 py-6 animate-pulse-glow" asChild>
            <a href="#pricing">Join Now</a>
          </Button>
          <Button variant="heroOutline" size="lg" className="text-lg px-10 py-6 animate-border-pulse" asChild>
            <a href="#programs">Start Free Trial</a>
          </Button>
        </motion.div>
      </div>

      {/* Animated scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <span className="text-xs uppercase tracking-widest text-muted-foreground">Scroll</span>
        <div className="w-5 h-8 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-1">
          <motion.div
            className="w-1.5 h-1.5 rounded-full bg-primary"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
