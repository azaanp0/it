import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { 
  Server, 
  Shield, 
  Cog, 
  Search, 
  Zap, 
  Layers 
} from "lucide-react";

const expertiseItems = [
  { icon: Layers, title: "تصميم وبناء الأنظمة", delay: 0 },
  { icon: Server, title: "إدارة البنية التحتية التقنية", delay: 0.1 },
  { icon: Search, title: "تحليل الأعطال المعقدة", delay: 0.2 },
  { icon: Cog, title: "أتمتة العمليات", delay: 0.3 },
  { icon: Shield, title: "أمن واستقرار الأنظمة", delay: 0.4 },
  { icon: Zap, title: "حلول عملية قابلة للتوسع", delay: 0.5 },
];

const Expertise = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-container relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/20 to-background" />
      
      {/* Glow effects */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/3 left-0 w-64 h-64 bg-primary/8 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section title */}
        <motion.div
          initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
          animate={isInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm tracking-widest font-mono mb-4 block" dir="ltr">
            // EXPERTISE
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">الخبرات</h2>
          <div className="accent-line max-w-32 mx-auto" />
        </motion.div>

        {/* Floating panels grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {expertiseItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
              animate={isInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
              transition={{ 
                duration: 0.7, 
                delay: item.delay,
                ease: [0.4, 0, 0.2, 1] 
              }}
            >
              <div className="floating-panel group cursor-default">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-primary/10 border border-primary/20 group-hover:bg-primary/20 transition-colors duration-300">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                    {item.title}
                  </h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Expertise;