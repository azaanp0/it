import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const FinalLine = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section ref={ref} className="min-h-[70vh] flex items-center justify-center relative overflow-hidden">
      {/* Dark gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-black" />
      
      {/* Subtle glow at bottom */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-32 bg-primary/10 blur-3xl" />

      <div className="relative z-10 text-center px-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1.5 }}
          className="space-y-4 font-mono tracking-wider" dir="ltr"
        >
          <motion.p
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-2xl text-muted-foreground"
          >
            Built in darkness.
          </motion.p>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-lg md:text-2xl text-foreground"
          >
            Driven by logic.
          </motion.p>
          
          <motion.p
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-lg md:text-2xl text-primary glow-text font-semibold"
          >
            Defined by control.
          </motion.p>
        </motion.div>

        {/* Decorative element */}
        <motion.div
          initial={{ opacity: 0, scaleY: 0 }}
          animate={isInView ? { opacity: 1, scaleY: 1 } : {}}
          transition={{ duration: 1, delay: 1.2 }}
          className="mt-16 flex flex-col items-center gap-2"
        >
          <div className="w-px h-16 bg-gradient-to-b from-primary to-transparent" />
          <motion.div
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-2 h-2 bg-primary rounded-full"
            style={{ boxShadow: "0 0 20px hsl(185 100% 50% / 0.5)" }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default FinalLine;