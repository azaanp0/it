import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Statement = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-container relative overflow-hidden">
      {/* Luxurious background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card to-background" />
      
      {/* Large glow effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />
      
      {/* Decorative lines */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 0.1 } : {}}
          transition={{ duration: 1 }}
          className="absolute top-1/4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 0.1 } : {}}
          transition={{ duration: 1, delay: 0.2 }}
          className="absolute bottom-1/4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent"
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Crown icon */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          className="mb-12"
        >
          <span className="text-primary text-sm tracking-widest font-mono" dir="ltr">
            // STATEMENT
          </span>
        </motion.div>

        {/* Main statement */}
        <motion.div
          initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
          animate={isInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
          className="space-y-6"
        >
          <p className="text-2xl md:text-4xl font-bold leading-relaxed">
            لا أبحث عن الشهرة،
            <br />
            <span className="text-muted-foreground">ولا أحتاج للضجيج.</span>
          </p>
        </motion.div>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.4, 0, 0.2, 1] }}
          className="accent-line max-w-64 mx-auto my-12"
        />

        <motion.div
          initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
          animate={isInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
          transition={{ duration: 0.7, delay: 0.6, ease: [0.4, 0, 0.2, 1] }}
          className="space-y-4"
        >
          <p className="text-xl md:text-3xl text-primary glow-text font-semibold">
            عملي يتحدث،
          </p>
          <p className="text-xl md:text-3xl text-foreground/90">
            والأنظمة التي أبنيها
          </p>
          <p className="text-xl md:text-3xl font-bold">
            تفرض احترامها <span className="text-primary">بصمت</span>.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Statement;