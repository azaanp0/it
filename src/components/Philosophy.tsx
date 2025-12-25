import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Philosophy = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-container relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />
      
      {/* Animated 3D geometric element */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="relative w-[500px] h-[500px] md:w-[700px] md:h-[700px]"
        >
          {/* Outer ring */}
          <motion.div
            className="absolute inset-0 border border-primary/20 rounded-full"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
          
          {/* Middle ring */}
          <motion.div
            className="absolute inset-12 border border-primary/15 rounded-full"
            animate={{ rotate: -360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          />
          
          {/* Inner ring */}
          <motion.div
            className="absolute inset-24 border border-primary/10 rounded-full animate-glow"
          />
          
          {/* Diamond shape */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            animate={{ rotate: -360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            <div className="w-32 h-32 md:w-48 md:h-48 border border-primary/30 rotate-45 animate-glow" />
          </motion.div>
          
          {/* Center dot */}
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="w-4 h-4 bg-primary rounded-full shadow-lg"
              style={{ boxShadow: "0 0 30px hsl(185 100% 50% / 0.6)" }}
            />
          </div>
        </motion.div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <motion.span
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="text-primary text-sm tracking-widest font-mono mb-8 block" dir="ltr"
        >
          // PHILOSOPHY
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
          animate={isInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
          className="text-3xl md:text-5xl font-bold mb-8"
        >
          الهندسة ليست كودًا فقط
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
          animate={isInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
          transition={{ duration: 0.7, delay: 0.4, ease: [0.4, 0, 0.2, 1] }}
          className="space-y-4 text-xl md:text-2xl"
        >
          <p className="text-foreground/90">
            إنها <span className="text-primary glow-text">فهم عميق</span>…
          </p>
          <p className="text-foreground/90">
            و<span className="text-primary glow-text">تحكم كامل</span>…
          </p>
          <p className="text-foreground/90">
            و<span className="text-primary glow-text">تنفيذ بلا ضجيج</span>.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Philosophy;