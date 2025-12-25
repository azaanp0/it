import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-container relative">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-card/50 via-background to-background" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/3 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Section title */}
        <motion.div
          initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
          animate={isInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm tracking-widest font-mono mb-4 block" dir="ltr">
            // ABOUT
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">من أنا</h2>
          <div className="accent-line max-w-32 mx-auto" />
        </motion.div>

        {/* Content */}
        <div className="space-y-8">
          <motion.p
            initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
            animate={isInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
            className="text-xl md:text-2xl leading-relaxed text-foreground/90"
          >
            أنا مهندس IT أتعامل مع الأنظمة كما هي فعلًا،
            <br />
            <span className="text-muted-foreground">معقّدة، متشابكة، ولا ترحم غير الجاهزين.</span>
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
            animate={isInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
            transition={{ duration: 0.7, delay: 0.4, ease: [0.4, 0, 0.2, 1] }}
            className="text-xl md:text-2xl leading-relaxed"
          >
            <span className="text-primary">أحوّل التعقيد</span> إلى بنية واضحة،
            <br />
            <span className="text-primary">والفوضى</span> إلى سيطرة،
            <br />
            <span className="text-primary">والأفكار</span> إلى أنظمة تعمل بثبات حتى في أقسى الظروف.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
            animate={isInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
            transition={{ duration: 0.7, delay: 0.6, ease: [0.4, 0, 0.2, 1] }}
            className="glass-panel rounded-2xl p-8 mt-12"
          >
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              لا أقدّم حلولًا مؤقتة،
              <br />
              <span className="text-foreground font-medium">ولا أكتب سطرًا إلا وهو يؤدي غايته بدقة.</span>
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;