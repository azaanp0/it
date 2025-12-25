import { motion } from "framer-motion";
import engineerPortrait from "@/assets/engineer-portrait.png";

const Hero = () => {
  return (
    <section className="section-container relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-card/50" />
      
      {/* Glow orbs */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
      
      <div className="relative z-10 max-w-5xl mx-auto text-center">
        {/* Portrait */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.4, 0, 0.2, 1] }}
          className="mb-10 flex justify-center"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-primary/20 rounded-full blur-2xl animate-pulse-slow" />
            <div className="relative w-40 h-40 md:w-52 md:h-52 rounded-full overflow-hidden border-2 border-primary/30 animate-glow">
              <img 
                src={engineerPortrait} 
                alt="مهندس تقنية المعلومات" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          className="hero-title mb-6"
        >
          أنا مهندس تقنية معلومات
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
          className="text-2xl md:text-4xl font-semibold text-gradient-accent glow-text mb-12"
        >
          أبني الأنظمة… وأتحكم بالفوضى
        </motion.p>

        {/* Description */}
        <motion.div
          initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.4, 0, 0.2, 1] }}
          className="hero-subtitle max-w-3xl mx-auto space-y-4 mb-16"
        >
          <p>
            في عالمٍ تتصارع فيه البيانات وتنهار فيه البنى الضعيفة،
          </p>
          <p>
            أعمل بصمت — بعقلٍ تحليلي، ومنهجٍ صارم، وحلول لا تقبل الخطأ.
          </p>
          <p className="text-foreground/80 font-medium">
            هنا لا شيء عشوائي،
            <br />
            كل قرار محسوب،
            <br />
            وكل نظام يُبنى ليصمد.
          </p>
        </motion.div>

        {/* Accent line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.6, ease: [0.4, 0, 0.2, 1] }}
          className="accent-line max-w-xs mx-auto mb-16"
        />

        {/* Animated Tagline */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="space-y-2"
        >
          <div className="flex items-center justify-center gap-4 text-lg md:text-xl tracking-widest font-mono" dir="ltr">
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="text-foreground"
            >
              Black Mind.
            </motion.span>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="text-primary glow-text"
            >
              Sharp Logic.
            </motion.span>
            <motion.span
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 1.4 }}
              className="text-foreground"
            >
              Absolute Control.
            </motion.span>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.8 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center pt-2"
          >
            <motion.div
              animate={{ opacity: [1, 0.3, 1], y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-1 h-2 bg-primary rounded-full"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;