import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Zap } from "lucide-react";

const FreeTrialBanner = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="relative py-16 bg-secondary overflow-hidden"
    >
      {/* Animated background sweep */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent"
        animate={{ x: ["-100%", "100%"] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
        <div className="flex items-center gap-4">
          <motion.div
            animate={{ rotate: [0, 15, -15, 0], scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Zap className="w-10 h-10 text-primary" />
          </motion.div>
          <div>
            <h2 className="text-3xl md:text-5xl font-heading">
              GET <span className="text-gradient-primary">3 DAYS FREE</span> TRIAL
            </h2>
            <p className="text-muted-foreground mt-2">No commitment. No credit card required. Just bring your energy.</p>
          </div>
        </div>
        <Button variant="hero" size="lg" className="text-lg px-10 py-6 shrink-0 animate-pulse-glow">
          Claim Free Trial
        </Button>
      </div>
    </motion.section>
  );
};

export default FreeTrialBanner;
